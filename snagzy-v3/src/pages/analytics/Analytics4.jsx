import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import {
  DollarSign,
  IoIosArrowDown,
  TbCalendarDollar,
  TbCurrencyDollarOff,
} from "../../components/SVG";
import {
  MiniAnalyticsStatCard,
  MediumAnalyticsStatCard,
} from "../../components/Analytics/AnalyticsStatCards";
import {
  statusAttemptedDelivery,
  statusCancelledByBuyer,
  statusCancelledBySeller,
  statusCompleted,
  statusDelivered,
  statusDeliveryFailed,
  statusOrderPlaced,
  statusOrderReturned,
  statusOutForDelivery,
  statusPacked,
  statusPaymentConfirmed,
  statusPaymentPending,
  statusProcessing,
  statusRefundSuccess,
  statusReturnRequest,
  statusShipped,
  successfulOrderStatuses,
  orderLifeCycle,
  pendingOrderStatuses,
  unsuccessfulOrderStatuses,
} from "../../data/orderLifeCycle";
import { useSearchParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { amountToDecimal, formatWithCommas } from "../../utils/helpers";

export const Analytics4 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getAllOrders, getAllAttributes, sumOrderQuantities } = useData();

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

  // Get available months for the currently selected year
  const currentAvailableMonths = useMemo(() => {
    if (selectedYear === "all") {
      // When "All Years" is selected, show all months that exist across any year
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
    // When a specific year is selected, show only months with orders in that year
    return availableMonthsByYear[selectedYear] || [];
  }, [selectedYear, availableMonthsByYear, orders]);

  // Clear filters handler
  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedMonth("all");
  };

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // Handle month change
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  ///// Hide/show stat boxes
  const [orderLifeCycleStatsOpen, setOrderLifeCycleStatsOpen] = useState(true);
  const [revenueStatsOpen, setRevenueStatsOpen] = useState(true);

  const toggleOrderLifeCycleStats = () =>
    setOrderLifeCycleStatsOpen(!orderLifeCycleStatsOpen);
  const toggleRevenueStats = () => setRevenueStatsOpen(!revenueStatsOpen);
  ///// Hide/show stat boxes ends

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
  ////// Mini analytics boxes ends

  // const successfulOrdersObject = getOrdersByStatusSlug(
  //   successfulOrderStatuses,
  //   analyticsDataByOrderLifeCycle,
  // );

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
        <div className="flex flex-col w-full">
          {/* Order life cycle stats */}
          <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
            <div
              className={`${orderLifeCycleStatsOpen ? "h-full" : "h-15"} w-full p-3 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden`}
            >
              <div className="flex relative items-center justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-md">
                    Order Life Cycle Stats
                  </h1>
                </div>

                <div className="flex gap-6 border-gray-300 items-center">
                  {/* Results count */}
                  {/* <div className="flex">
                    <span className="text-sm text-gray-500">
                      Showing {displayedOrders.length} of{" "}
                      {filteredOrders.length} orders
                    </span>
                  </div> */}

                  {/* Order life cycle filters  */}
                  <div
                    className={`flex gap-4 ${orderLifeCycleStatsOpen ? "opacity-100" : "opacity-40"} transition-all duration-300 ease-in-out`}
                  >
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
                        disabled={!orderLifeCycleStatsOpen}
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
                        disabled={
                          currentAvailableMonths.length === 0 ||
                          !orderLifeCycleStatsOpen
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

                    {/* Clear filters button */}
                    {(selectedYear !== "all" || selectedMonth !== "all") && (
                      <button
                        onClick={clearFilters}
                        className={`px-3 py-1 rounded-sm text-sm ${orderLifeCycleStatsOpen ? "cursor-pointer" : "cursor-default"} border border-amber-300 bg-amber-200 text-red-600 hover:text-red-800 transition-colors`}
                        disabled={!orderLifeCycleStatsOpen}
                      >
                        Clear Filters
                      </button>
                    )}
                  </div>
                  {/* Order life cycle filters ends */}

                  {/* Order life cycle collapse button  */}
                  <div className="flex">
                    <button
                      onClick={toggleOrderLifeCycleStats}
                      className={`flex ${orderLifeCycleStatsOpen ? "bg-gray-200" : "bg-gray-100"} rounded px-1 py-1 hover:bg-gray-200 cursor-pointer`}
                    >
                      <IoIosArrowDown
                        height={16}
                        width={16}
                        className={`${orderLifeCycleStatsOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                      />
                    </button>
                  </div>
                  {/* Order life cycle collapse button ends */}
                </div>
              </div>

              {/* Analytics boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 mt-4">
                {/* <MiniAnalyticsStatCard
                  statusSlug={successfulOrderStatuses}
                  data={analyticsData}
                  boxTitle={"Revenue"}
                  boxStyle={"bg-green-300 border-green-400"}
                /> */}
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusCompleted,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Completed"}
                  boxStyle={"bg-green-200 border-green-400"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusDelivered,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Delivered"}
                  boxStyle={"bg-lime-200 border-lime-400"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusOrderPlaced,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Order Placed"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusPaymentPending,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Payment Pending"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusPaymentConfirmed,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Payment Confirmed"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusProcessing,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Processing"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusPacked,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Packed"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusShipped,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Shipped"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusOutForDelivery,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Out For Delivery"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusDeliveryFailed,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Delivery Failed"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusAttemptedDelivery,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Attempted Delivery"}
                  boxStyle={"bg-gray-100 border-gray-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusCancelledByBuyer,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Cancelled by Buyer"}
                  boxStyle={"bg-red-100 border-red-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusCancelledBySeller,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Cancelled by Seller"}
                  boxStyle={"bg-red-100 border-red-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusReturnRequest,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Return Request"}
                  boxStyle={"bg-red-100 border-red-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusOrderReturned,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Returned"}
                  boxStyle={"bg-red-100 border-red-200"}
                />
                <MiniAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    statusRefundSuccess,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Returned Success"}
                  boxStyle={"bg-red-100 border-red-200"}
                />
              </div>
              {/* Analytics boxes ends  */}

              {/* Bar chart  */}
              <div className="flex w-full mt-2">
                <div className="w-full p-3 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden">
                  <div className="w-full">
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart
                        data={(() => {
                          // Use orderLifeCycle directly to get all statuses
                          return orderLifeCycle.map((status) => {
                            const {
                              ordersToProcess,
                              sumOfTotalPrices,
                              sumOfAllQuantities,
                            } = processOrderLifeCycleData(
                              [status.slug],
                              analyticsDataByOrderLifeCycle,
                            );
                            return {
                              name: status.label,
                              Orders: ordersToProcess?.length || 0,
                              Revenue: amountToDecimal(sumOfTotalPrices) || 0,
                              Items: formatWithCommas(sumOfAllQuantities) || 0,
                            };
                          });
                        })()}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="name"
                          angle={-45}
                          textAnchor="end"
                          height={80}
                          interval={0}
                        />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip
                          formatter={(value, name) => {
                            if (name === "Revenue")
                              return [`$${amountToDecimal(value)}`, name];
                            return [value, name];
                          }}
                        />
                        <Legend
                          wrapperStyle={{
                            paddingTop: "60px",
                            marginTop: "20px",
                          }}
                        />
                        <Bar yAxisId="left" dataKey="Orders" fill="#8884d8" />
                        <Bar yAxisId="right" dataKey="Revenue" fill="#82ca9d" />
                        <Bar yAxisId="left" dataKey="Items" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              {/* Bar chart ends */}
            </div>
          </div>
          {/* Order life cycle stats ends */}
        </div>

        <div className="flex flex-col w-full">
          {/* Revenue stats */}
          <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
            <div
              className={`${revenueStatsOpen ? "h-full" : "h-15"} w-full p-3 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden`}
            >
              <div className="flex relative items-center justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-md">Revenue Stats</h1>
                </div>

                <div className="flex gap-6 border-gray-300 items-center">
                  {/* Revenue stats filters  */}
                  <div
                    className={`flex gap-4 ${revenueStatsOpen ? "opacity-100" : "opacity-40"} transition-all duration-300 ease-in-out`}
                  >
                    FILTER GOES HERE
                  </div>
                  {/* Revenue stats filters ends */}

                  {/* Revenue stats collapse button  */}
                  <div className="flex">
                    <button
                      onClick={toggleRevenueStats}
                      className={`flex ${revenueStatsOpen ? "bg-gray-200" : "bg-gray-100"} rounded px-1 py-1 hover:bg-gray-200 cursor-pointer`}
                    >
                      <IoIosArrowDown
                        height={16}
                        width={16}
                        className={`${revenueStatsOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                      />
                    </button>
                  </div>
                  {/* Revenue stats collapse button ends */}
                </div>
              </div>

              {/* Analytics boxes */}
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 mt-4">
                <MediumAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    successfulOrderStatuses,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Total Sales"}
                  boxStyle={"bg-green-300 border-green-500"}
                  icon={DollarSign}
                  iconStyle={"bg-green-100 border-2 border-green-500"}
                />
                <MediumAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    pendingOrderStatuses,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Pending Sales"}
                  boxStyle={"bg-amber-300 border-amber-400"}
                  icon={TbCalendarDollar}
                  iconStyle={"bg-amber-100 border-2 border-amber-500"}
                />
                <MediumAnalyticsStatCard
                  miniAnalyticsData={processOrderLifeCycleData(
                    unsuccessfulOrderStatuses,
                    analyticsDataByOrderLifeCycle,
                  )}
                  boxTitle={"Cancellations"}
                  boxStyle={"bg-red-300 border-red-400"}
                  icon={TbCurrencyDollarOff}
                  iconStyle={"bg-red-100 border-2 border-red-500"}
                />
              </div>
              {/* Analytics boxes ends  */}

              {/* Bar chart  */}
              <div className="flex w-full mt-2 border border-gray-200 rounded-md overflow-hidden">
                <div className="flex flex-col w-full">
                  {/* Table header */}
                  <div className="w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
                    <div className="flex flex-col w-full overflow-hidden">
                      <div className="flex w-full justify-between">
                        <div className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm">
                          <div className="flex border-r border-gray-300 p-1">
                            Order Detail
                          </div>
                          <div className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full text-sm">
                            <div className="flex border-r border-gray-300 p-1">
                              Ordered Items
                            </div>
                            <div className="flex border-r border-gray-300 p-1">
                              Listed Price
                            </div>
                            <div className="flex border-r border-gray-300 p-1">
                              Qty
                            </div>
                            <div className="flex border-r border-gray-300 p-1">
                              Sub Total
                            </div>
                          </div>
                          <div className="grid grid-cols-[.4fr_1fr_1fr_1.4fr_1.8fr_.5fr] w-full text-sm">
                            <div className="flex border-r border-gray-300 p-1">
                              Less
                            </div>
                            <div className="flex border-r border-gray-300 p-1">
                              Shipping
                            </div>
                            <div className="flex border-r border-gray-300 p-1">
                              Overall Price
                            </div>
                            <div className="flex border-r border-gray-300 p-1">
                              Payment Status
                            </div>
                            <div className="flex border-r border-gray-300 p-1">
                              Order Status
                            </div>
                            <div className="flex border-r border-gray-300 p-1"></div>
                          </div>
                        </div>
                        <div className="flex w-2 bg-blue-100"></div>
                      </div>
                    </div>
                  </div>
                  {/* Table header ends  */}
                </div>
              </div>
              {/* Bar chart ends */}
            </div>
          </div>
          {/* Revenue stats ends */}
        </div>
      </div>
    </div>
  );
};
