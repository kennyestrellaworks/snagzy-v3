// Analytics.jsx - Updated version
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { OrderLifeCycleStats } from "../components/Analytics/OrderLifeCycleStats";
import { useSearchParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useOrdersAnalytics } from "../context/OrdersAnalyticsContext";

export const AnalyticsLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getAllOrders } = useData();
  const orders = getAllOrders();
  const count = 6;

  // Get values from URL params
  const urlYear = searchParams.get("year");
  const urlMonth = searchParams.get("month");
  const urlOrders = parseInt(searchParams.get("orders") || "0");

  // Initialize state from URL params
  const [selectedYear, setSelectedYear] = useState(urlYear || "all");
  const [selectedMonth, setSelectedMonth] = useState(urlMonth || "all");
  const [ordersParams, setOrdersParams] = useState(urlOrders || count);

  // Track if initial load is done to prevent reset loops
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

  // Determine if filters are active
  const isFiltersActive = selectedYear !== "all" || selectedMonth !== "all";

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

  // Choose which data to pass to analytics boxes
  const analyticsDataByOrderLifeCycle = isFiltersActive
    ? filteredOrders
    : orders;

  // Update URL when filters or pagination change
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

    // Only update URL if params are different from current
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
    count,
    isInitialLoad,
    searchParams,
    setSearchParams,
  ]);

  ////// Mini analytics boxes
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

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="flex w-full z-50">
        <div className="w-full flex flex-1 flex-col p-2">
          {/* Header */}
          <div className="flex gap-2 justify-between">
            <PageHeader defaultPage="Analytics" type="sidebar-level" />
          </div>
          {/* Header ends */}
        </div>
      </div>

      <div className="flex flex-col w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        {/* Order life cycle stats component */}
        <OrderLifeCycleStats
          orders={orders}
          processOrderLifeCycleData={processOrderLifeCycleData}
          availableYears={availableYears}
          availableMonthsByYear={availableMonthsByYear}
        />

        {/* Revenue stats component */}
        {/* <RevenueStats
          analyticsData={analyticsDataByOrderLifeCycle}
          processOrderLifeCycleData={processOrderLifeCycleData}
        /> */}
        {/* <RevenueStatsLayout /> */}
      </div>
    </div>
  );
};
