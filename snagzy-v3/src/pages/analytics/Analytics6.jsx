import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { OrderLifeCycleStats } from "../../components/Analytics/OrderLifeCycleStats";
import { useSearchParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import { RevenueStats } from "../../components/Analytics/RevenueStats";
import { TopByNumberStats } from "../../components/Analytics/TopByNumberStats";

export const Analytics6 = () => {
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
  const urlOrders = parseInt(searchParams.get("orders") || "0");
  const urlRevenueTab = searchParams.get("revenueTab");
  const urlItemLimits = searchParams.get("itemLimits");

  // OrderLifeCycleStats and RevenueStats state from URL params
  const [selectedYear, setSelectedYear] = useState(urlYear || "all");
  const [selectedMonth, setSelectedMonth] = useState(urlMonth || "all");
  const [ordersParams, setOrdersParams] = useState(urlOrders || count);
  const [itemsLimitsParams, setItemsLimitsParams] = useState(() =>
    deserializeItemLimits(urlItemLimits),
  );

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

  // Filter orders based on selected year and month
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

    result.sort(
      (a, b) =>
        new Date(b.currentStatus.timestamp) -
        new Date(a.currentStatus.timestamp),
    );

    return result;
  }, [orders, selectedYear, selectedMonth]);

  const analyticsData =
    selectedYear !== "all" || selectedMonth !== "all" ? filteredOrders : orders;

  // Centralized URL updates
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedYear && selectedYear !== "all") {
      params.set("year", selectedYear);
    }

    if (selectedMonth && selectedMonth !== "all") {
      params.set("month", selectedMonth);
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

    const currentParams = searchParams.toString();
    const newParams = params.toString();

    if (currentParams !== newParams) {
      setSearchParams(params, { replace: !isInitialLoad });
    }

    setIsInitialLoad(false);
  }, [
    selectedYear,
    selectedMonth,
    ordersParams,
    activeRevenueTab,
    itemsLimitsParams,
    count,
    isInitialLoad,
    searchParams,
    setSearchParams,
  ]);

  // Sync state back from URL changes (handles forward/back actions gracefully)
  useEffect(() => {
    const yearParam = searchParams.get("year") || "all";
    const monthParam = searchParams.get("month") || "all";
    const ordersParam = parseInt(searchParams.get("orders") || "0") || count;
    const revenueTabParam = searchParams.get("revenueTab") || "total-sales";
    const itemLimitsParam = searchParams.get("itemLimits");

    if (yearParam !== selectedYear) setSelectedYear(yearParam);
    if (monthParam !== selectedMonth) setSelectedMonth(monthParam);
    if (ordersParam !== ordersParams) setOrdersParams(ordersParam);
    if (revenueTabParam !== activeRevenueTab)
      setActiveRevenueTab(revenueTabParam);

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
    setOrdersParams(count);
    setItemsLimitsParams({});
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setOrdersParams(count);
    setItemsLimitsParams({});
  };

  const handleClearFilters = () => {
    setSelectedYear("all");
    setSelectedMonth("all");
    setOrdersParams(count);
    setItemsLimitsParams({});
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
                className="px-3 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                disabled={currentAvailableMonths.length === 0}
              >
                <option value="all">All Months</option>
                {currentAvailableMonths.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>

            {(selectedYear !== "all" || selectedMonth !== "all") && (
              <button
                onClick={handleClearFilters}
                className="px-3 py-1 rounded-sm text-sm cursor-pointer border border-amber-300 bg-amber-200 text-red-600 hover:text-red-800 transition-colors"
              >
                Clear Filters
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

        <TopByNumberStats analyticsData={analyticsData} />
      </div>
    </div>
  );
};
