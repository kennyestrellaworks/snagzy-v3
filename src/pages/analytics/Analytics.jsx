import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { OrderLifeCycleStats } from "../../components/Analytics/OrderLifeCycleStats";
import { useSearchParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import { RevenueStats } from "../../components/Analytics/RevenueStats";
import { TopByNumberStats } from "../../components/Analytics/TopByNumberStats";
import { PaymentMethodStats } from "../../components/Analytics/PaymentMethodStats";
import { ShippingMethodStats } from "../../components/Analytics/ShippingMethodStats";
import { OrderLifeCycleDistribution } from "../../components/Analytics/OrderLifeCycleDistribution";
import { CarrierStats } from "../../components/Analytics/CarrierStats";

export const Analytics = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getAllOrders } = useData();
  const orders = getAllOrders();
  const count = 6;
  const ITEMS_COUNT = 3;

  // Helper functions to serialize/deserialize item limits for the URL
  const serializeItemLimits = (limitsObj) => {
    return Object.entries(limitsObj)
      .map(([id, lim]) => `${id}:${lim}`)
      .join(",");
  };

  const deserializeItemLimits = (str) => {
    if (!str) return {};
    const obj = {};
    str.split(",").forEach((pair) => {
      const [id, lim] = pair.split(":");
      if (id && lim) {
        obj[id] = parseInt(lim, 10);
      }
    });
    return obj;
  };

  // Get all URL params
  const urlYear = searchParams.get("year");
  const urlMonth = searchParams.get("month");
  const urlDay = searchParams.get("day");
  const urlOrders = parseInt(searchParams.get("orders") || "0");
  const urlRevenueTab = searchParams.get("revenueTab");
  const urlItemLimits = searchParams.get("itemLimits");

  // Read individual widget limits from URL parameters (defaulting to 5)
  const urlProductsLimit = parseInt(searchParams.get("top_products") || "0");
  const urlBuyersLimit = parseInt(searchParams.get("top_buyers") || "0");
  const urlStoresLimit = parseInt(searchParams.get("top_stores") || "0");

  // Filter states from URL params
  const [selectedYear, setSelectedYear] = useState(urlYear || "all");
  const [selectedMonth, setSelectedMonth] = useState(urlMonth || "all");
  const [selectedDay, setSelectedDay] = useState(urlDay || "all");
  const [ordersParams, setOrdersParams] = useState(urlOrders || count);
  const [itemsLimitsParams, setItemsLimitsParams] = useState(() =>
    deserializeItemLimits(urlItemLimits),
  );

  // Internal states tracking the individual rankings widgets limits
  const [topLimitProducts, setTopLimitProducts] = useState(
    urlProductsLimit || 5,
  );
  const [topLimitBuyers, setTopLimitBuyers] = useState(urlBuyersLimit || 5);
  const [topLimitStores, setTopLimitStores] = useState(urlStoresLimit || 5);

  // RevenueStats state from URL params
  const [activeRevenueTab, setActiveRevenueTab] = useState(() => {
    return urlRevenueTab &&
      ["total-sales", "pending-sales", "cancellations"].includes(urlRevenueTab)
      ? urlRevenueTab
      : "total-sales";
  });

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Get available years and months based on actual data
  const { availableYears, availableMonthsByYear } = useMemo(() => {
    if (!orders || orders.length === 0) {
      return { availableYears: [], availableMonthsByYear: {} };
    }

    const yearsMap = new Map();
    const monthsMap = {};

    orders.forEach((order) => {
      const date = new Date(order.currentStatus.timestamp);
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthName = date.toLocaleString("default", { month: "long" });

      if (!yearsMap.has(year)) {
        yearsMap.set(year, true);
      }

      if (!monthsMap[year]) {
        monthsMap[year] = new Map();
      }
      if (!monthsMap[year].has(month)) {
        monthsMap[year].set(month, monthName);
      }
    });

    const sortedYears = Array.from(yearsMap.keys()).sort((a, b) => b - a);

    const sortedMonthsByYear = {};
    for (const year in monthsMap) {
      sortedMonthsByYear[year] = Array.from(monthsMap[year].entries())
        .sort((a, b) => b[0] - a[0])
        .map(([monthNum, monthName]) => ({
          value: monthNum.toString(),
          label: monthName,
          monthNumber: monthNum,
        }));
    }

    return {
      availableYears: sortedYears,
      availableMonthsByYear: sortedMonthsByYear,
    };
  }, [orders]);

  // Get available months for the currently selected year
  const currentAvailableMonths = useMemo(() => {
    if (selectedYear === "all") {
      const allMonthsMap = new Map();
      orders?.forEach((order) => {
        const date = new Date(order.currentStatus.timestamp);
        const month = date.getMonth();
        const monthName = date.toLocaleString("default", { month: "long" });
        if (!allMonthsMap.has(month)) {
          allMonthsMap.set(month, monthName);
        }
      });
      return Array.from(allMonthsMap.entries())
        .sort((a, b) => b[0] - a[0])
        .map(([monthNum, monthName]) => ({
          value: monthNum.toString(),
          label: monthName,
          monthNumber: monthNum,
        }));
    }
    return availableMonthsByYear[selectedYear] || [];
  }, [selectedYear, availableMonthsByYear, orders]);

  // Dynamically generate days array based on year and month selection
  const currentAvailableDays = useMemo(() => {
    if (selectedYear === "all" || selectedMonth === "all") return [];

    // Day 0 of the next month gets us the total days in our selected month
    const yearNum = parseInt(selectedYear, 10);
    const monthNum = parseInt(selectedMonth, 10);
    const daysInMonth = new Date(yearNum, monthNum + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }, [selectedYear, selectedMonth]);

  // Filter orders based on selected year, month, and day
  const filteredOrders = useMemo(() => {
    if (!orders || orders.length === 0) return [];

    let result = [...orders];

    if (selectedYear !== "all") {
      result = result.filter((order) => {
        const date = new Date(order.currentStatus.timestamp);
        return date.getFullYear() === parseInt(selectedYear);
      });
    }

    if (selectedMonth !== "all") {
      result = result.filter((order) => {
        const date = new Date(order.currentStatus.timestamp);
        return date.getMonth() === parseInt(selectedMonth);
      });
    }

    if (
      selectedDay !== "all" &&
      selectedYear !== "all" &&
      selectedMonth !== "all"
    ) {
      result = result.filter((order) => {
        const date = new Date(order.currentStatus.timestamp);
        return date.getDate() === parseInt(selectedDay);
      });
    }

    result.sort(
      (a, b) =>
        new Date(b.currentStatus.timestamp) -
        new Date(a.currentStatus.timestamp),
    );

    return result;
  }, [orders, selectedYear, selectedMonth, selectedDay]);

  const analyticsData =
    selectedYear !== "all" || selectedMonth !== "all" || selectedDay !== "all"
      ? filteredOrders
      : orders;

  // Centralized URL updates
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedYear && selectedYear !== "all") {
      params.set("year", selectedYear);
    }

    if (selectedMonth && selectedMonth !== "all" && selectedYear !== "all") {
      params.set("month", selectedMonth);
    }

    if (
      selectedDay &&
      selectedDay !== "all" &&
      selectedMonth !== "all" &&
      selectedYear !== "all"
    ) {
      params.set("day", selectedDay);
    }

    if (ordersParams && ordersParams !== count) {
      params.set("orders", ordersParams.toString());
    }

    if (activeRevenueTab && activeRevenueTab !== "total-sales") {
      params.set("revenueTab", activeRevenueTab);
    }

    const serializedLimits = serializeItemLimits(itemsLimitsParams);
    if (serializedLimits) {
      params.set("itemLimits", serializedLimits);
    }

    // Serialize rankings selection parameters into the URL
    if (topLimitProducts && topLimitProducts !== 5) {
      params.set("top_products", topLimitProducts.toString());
    }
    if (topLimitBuyers && topLimitBuyers !== 5) {
      params.set("top_buyers", topLimitBuyers.toString());
    }
    if (topLimitStores && topLimitStores !== 5) {
      params.set("top_stores", topLimitStores.toString());
    }

    const currentParams = searchParams.toString();
    const newParams = params.toString();

    if (currentParams !== newParams) {
      setSearchParams(params, { replace: !isInitialLoad });
    }

    setIsInitialLoad(false);
  }, [
    selectedYear,
    selectedMonth,
    selectedDay,
    ordersParams,
    activeRevenueTab,
    itemsLimitsParams,
    topLimitProducts,
    topLimitBuyers,
    topLimitStores,
    count,
    isInitialLoad,
    searchParams,
    setSearchParams,
  ]);

  // Sync state back from URL changes (handles forward/back actions gracefully)
  useEffect(() => {
    const yearParam = searchParams.get("year") || "all";
    const monthParam = searchParams.get("month") || "all";
    const dayParam = searchParams.get("day") || "all";
    const ordersParam = parseInt(searchParams.get("orders") || "0") || count;
    const revenueTabParam = searchParams.get("revenueTab") || "total-sales";
    const itemLimitsParam = searchParams.get("itemLimits");

    // Read parameter updates for back/forward browser button interactions
    const productsLimitParam =
      parseInt(searchParams.get("top_products") || "0") || 5;
    const buyersLimitParam =
      parseInt(searchParams.get("top_buyers") || "0") || 5;
    const storesLimitParam =
      parseInt(searchParams.get("top_stores") || "0") || 5;

    if (yearParam !== selectedYear) setSelectedYear(yearParam);
    if (monthParam !== selectedMonth) setSelectedMonth(monthParam);
    if (dayParam !== selectedDay) setSelectedDay(dayParam);
    if (ordersParam !== ordersParams) setOrdersParams(ordersParam);
    if (revenueTabParam !== activeRevenueTab)
      setActiveRevenueTab(revenueTabParam);

    if (productsLimitParam !== topLimitProducts)
      setTopLimitProducts(productsLimitParam);
    if (buyersLimitParam !== topLimitBuyers)
      setTopLimitBuyers(buyersLimitParam);
    if (storesLimitParam !== topLimitStores)
      setTopLimitStores(storesLimitParam);

    const nextItemLimits = deserializeItemLimits(itemLimitsParam);
    if (JSON.stringify(nextItemLimits) !== JSON.stringify(itemsLimitsParams)) {
      setItemsLimitsParams(nextItemLimits);
    }
  }, [searchParams]);

  const { ordersAnalyticsValue } = useOrdersAnalytics();

  const processOrderLifeCycleData = (statusSlug, data) => {
    const ordersToProcess = ordersAnalyticsValue.getOrdersByStatusSlug(
      statusSlug,
      data,
    );

    const sumOfTotalPrices = ordersToProcess.reduce((sum, order) => {
      const raw = order?.summary?.orderTotalPrice;
      const price = Number(raw || 0);
      return sum + (isNaN(price) ? 0 : price);
    }, 0);

    const sumOfAllQuantities =
      ordersAnalyticsValue.getSumOrderedItemsQuantity(ordersToProcess);

    return { ordersToProcess, sumOfTotalPrices, sumOfAllQuantities };
  };

  // Safe manual adjustments that also handle resetting pagination cleanly
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedMonth("all");
    setSelectedDay("all");
    setOrdersParams(count);
    setItemsLimitsParams({});
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setSelectedDay("all");
    setOrdersParams(count);
    setItemsLimitsParams({});
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
    setOrdersParams(count);
    setItemsLimitsParams({});
  };

  const handleClearFilters = () => {
    setSelectedYear("all");
    setSelectedMonth("all");
    setSelectedDay("all");
    setOrdersParams(count);
    setItemsLimitsParams({});
    // Reset widget selection values back to default when clearing filters
    setTopLimitProducts(5);
    setTopLimitBuyers(5);
    setTopLimitStores(5);
  };

  const handleRevenueTabChange = (tab) => {
    setActiveRevenueTab(tab);
    setOrdersParams(count);
    setItemsLimitsParams({});
  };

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="flex w-full z-50">
        <div className="flex w-full justify-between p-2">
          <div className="flex gap-2 justify-between">
            <PageHeader defaultPage="Analytics" type="sidebar-level" />
          </div>

          <div className="flex gap-4 items-center">
            {/* Year Selector */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="year-select"
                className="text-sm font-medium text-gray-700"
              >
                Year:
              </label>
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">All Years</option>
                {availableYears?.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Month Selector */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="month-select"
                className="text-sm font-medium text-gray-700"
              >
                Month:
              </label>
              <select
                id="month-select"
                value={selectedMonth}
                onChange={(e) => handleMonthChange(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={
                  selectedYear === "all" || currentAvailableMonths.length === 0
                }
              >
                <option value="all">All Months</option>
                {currentAvailableMonths.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Day Selector */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="day-select"
                className="text-sm font-medium text-gray-700"
              >
                Day:
              </label>
              <select
                id="day-select"
                value={selectedDay}
                onChange={(e) => handleDayChange(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedYear === "all" || selectedMonth === "all"}
              >
                <option value="all">All Days</option>
                {currentAvailableDays.map((day) => (
                  <option key={day} value={day.toString()}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {(selectedYear !== "all" ||
              selectedMonth !== "all" ||
              selectedDay !== "all" ||
              topLimitProducts !== 5 ||
              topLimitBuyers !== 5 ||
              topLimitStores !== 5) && (
              <button
                onClick={handleClearFilters}
                className="px-3 py-1 rounded-sm text-sm cursor-pointer border border-amber-300 bg-amber-200 text-red-600 hover:text-red-800 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <RevenueStats
          processOrderLifeCycleData={processOrderLifeCycleData}
          analyticsData={analyticsData}
          activeTab={activeRevenueTab}
          onTabChange={handleRevenueTabChange}
          ordersLimit={ordersParams}
          setOrdersLimit={setOrdersParams}
          itemsLimits={itemsLimitsParams}
          setItemsLimits={setItemsLimitsParams}
          defaultItemsCount={ITEMS_COUNT}
          count={count}
        />

        <OrderLifeCycleStats
          processOrderLifeCycleData={processOrderLifeCycleData}
          analyticsData={analyticsData}
        />

        <TopByNumberStats
          analyticsData={analyticsData}
          topLimitProducts={topLimitProducts}
          setTopLimitProducts={setTopLimitProducts}
          topLimitBuyers={topLimitBuyers}
          setTopLimitBuyers={setTopLimitBuyers}
          topLimitStores={topLimitStores}
          setTopLimitStores={setTopLimitStores}
        />

        <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
          <div className="grid w-full grid-cols-[1fr_1fr] gap-2">
            <div className="flex bg-gray-50 border border-gray-200 rounded-md">
              <PaymentMethodStats analyticsData={analyticsData} />
            </div>
            <div className="flex bg-gray-50 border border-gray-200 rounded-md">
              <ShippingMethodStats analyticsData={analyticsData} />
            </div>
          </div>
        </div>

        <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
          <div className="grid w-full grid-cols-[1fr_1fr] gap-2">
            <div className="flex bg-gray-50 border border-gray-200 rounded-md">
              <OrderLifeCycleDistribution analyticsData={analyticsData} />
            </div>
            <div className="flex bg-gray-50 border border-gray-200 rounded-md">
              <CarrierStats analyticsData={analyticsData} />
            </div>
          </div>
        </div>

        <div className="flex mt-2 w-full pl-2 pr-2 pb-2"></div>
      </div>
    </div>
  );
};
