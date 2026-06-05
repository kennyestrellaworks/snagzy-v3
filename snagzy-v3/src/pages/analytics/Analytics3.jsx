import React, { useState, useMemo } from "react";
import { PageHeader } from "../../components/PageHeader";
import { IoIosArrowDown } from "../../components/SVG";
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
import { useData } from "../../context/DataContext";
import { MiniAnalyticsBox } from "../../components/Analytics/MiniAnalyticsBox";
import { dateFormatter } from "../../utils/helpers";
import {
  successfulOrderStatuses,
  statusCompleted,
  statusDelivered,
  statusOrderPlaced,
  statusPaymentPending,
  statusPaymentConfirmed,
  statusProcessing,
  statusPacked,
  statusShipped,
  statusOutForDelivery,
  statusCancelledByBuyer,
  statusCancelledBySeller,
  statusDeliveryFailed,
  statusAttemptedDelivery,
  statusReturnRequest,
  statusOrderReturned,
  statusRefundSuccess,
} from "../../data/orderLifeCycle";

// Helper: Format currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const Analytics3 = () => {
  const [productSummaryOpen, setProductSummaryOpen] = useState(true);
  const { getAllOrders } = useData();
  const orders = getAllOrders();

  // Filter states
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  // Get available years and months from orders based on currentStatus.timestamp
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

  // Filter to successful orders only for analytics metrics
  const successfulFilteredOrders = useMemo(() => {
    return filteredOrders.filter((order) =>
      successfulOrderStatuses.includes(order.currentStatus?.slug),
    );
  }, [filteredOrders]);

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

  // --- KPI Calculations (using successful orders only) ---
  const totalSales = useMemo(() => {
    return successfulFilteredOrders.reduce(
      (sum, order) => sum + (order.summary?.orderTotalPrice || 0),
      0,
    );
  }, [successfulFilteredOrders]);

  const orderCount = successfulFilteredOrders.length;

  const avgOrderValue = orderCount > 0 ? totalSales / orderCount : 0;

  const totalItemsSold = useMemo(() => {
    return successfulFilteredOrders.reduce((sum, order) => {
      const itemsSum = order.orderedItems.reduce(
        (itemSum, item) => itemSum + (item.variant?.quantity || 0),
        0,
      );
      return sum + itemsSum;
    }, 0);
  }, [successfulFilteredOrders]);

  // --- Revenue Data for Line Chart (using successful orders) ---
  const revenueData = useMemo(() => {
    if (selectedYear === "all") return [];

    if (selectedMonth !== "all") {
      // Group by day within selected month
      const dayMap = new Map();
      successfulFilteredOrders.forEach((order) => {
        const date = new Date(order.currentStatus.timestamp);
        const day = date.getDate();
        const amount = order.summary?.orderTotalPrice || 0;
        dayMap.set(day, (dayMap.get(day) || 0) + amount);
      });
      const daysInMonth = new Date(
        parseInt(selectedYear),
        parseInt(selectedMonth) + 1,
        0,
      ).getDate();
      const result = [];
      for (let d = 1; d <= daysInMonth; d++) {
        result.push({
          day: d,
          revenue: dayMap.get(d) || 0,
        });
      }
      return result;
    } else {
      // Group by month for the selected year
      const monthMap = new Map();
      successfulFilteredOrders.forEach((order) => {
        const timestamp = order.currentStatus?.timestamp;
        if (!timestamp) return;
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthName = date.toLocaleString("default", { month: "short" });
        if (year === parseInt(selectedYear)) {
          const amount = order.summary?.orderTotalPrice || 0;
          monthMap.set(month, {
            month: monthName,
            revenue: (monthMap.get(month)?.revenue || 0) + amount,
          });
        }
      });
      return Array.from(monthMap.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([_, data]) => data);
    }
  }, [successfulFilteredOrders, selectedYear, selectedMonth]);

  // --- Top Selling Products (by quantity, using successful orders) ---
  const topProducts = useMemo(() => {
    const productMap = new Map();
    successfulFilteredOrders.forEach((order) => {
      order.orderedItems.forEach((item) => {
        const name = item.productName;
        const qty = item.variant?.quantity || 0;
        productMap.set(name, (productMap.get(name) || 0) + qty);
      });
    });
    return Array.from(productMap.entries())
      .map(([name, quantity]) => ({ name, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);
  }, [successfulFilteredOrders]);

  // --- Sales by Store (using successful orders) ---
  const storeSales = useMemo(() => {
    const storeMap = new Map();
    successfulFilteredOrders.forEach((order) => {
      order.orderedItems.forEach((item) => {
        const storeName = item.variant?.storeInfo?.storeName || "Unknown";
        const amount = item.variant?.subTotal || 0;
        storeMap.set(storeName, (storeMap.get(storeName) || 0) + amount);
      });
    });
    return Array.from(storeMap.entries()).map(([name, value]) => ({
      name,
      value,
    }));
  }, [successfulFilteredOrders]);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
  ];

  // Determine if filters are active
  const isFiltersActive = selectedYear !== "all" || selectedMonth !== "all";

  // Analytics data for MiniAnalyticsBox (use filtered orders without status filter because MiniAnalyticsBox has its own status filter)
  const analyticsData = isFiltersActive ? filteredOrders : orders;

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

  const toggleSidebar = () => setProductSummaryOpen(!productSummaryOpen);

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="flex w-full z-50">
        <div className="w-full flex flex-1 flex-col p-2">
          {/* Header */}
          <div className="flex gap-2 justify-between">
            <PageHeader defaultPage="Analytics" type="sidebar-level" />
            {/* Collapse button */}
            <button
              onClick={toggleSidebar}
              className={`flex ${productSummaryOpen ? "bg-gray-200" : "bg-gray-100"} rounded px-1 py-1 hover:bg-gray-200 cursor-pointer`}
            >
              <IoIosArrowDown
                height={16}
                width={16}
                className={`${productSummaryOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
              />
            </button>
          </div>

          {/* Mini analytics boxes and filters */}
          <div className="flex">
            <div
              className={`${productSummaryOpen ? "h-full pb-0" : "h-0 pb-2"} pt-2 transition-all duration-300 ease-in-out overflow-hidden`}
            >
              <div className="flex flex-col gap-2">
                {/* Analytics boxes */}
                <div className="flex flex-wrap w-full gap-2">
                  <MiniAnalyticsBox
                    statusSlug={successfulOrderStatuses}
                    data={analyticsData}
                    boxTitle={"Overall"}
                    boxStyle={"bg-green-300 border-green-400"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusCompleted}
                    data={analyticsData}
                    boxTitle={"Completed"}
                    boxStyle={"bg-green-200 border-green-400"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusDelivered}
                    data={analyticsData}
                    boxTitle={"Delivered"}
                    boxStyle={"bg-lime-200 border-lime-400"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusOrderPlaced}
                    data={analyticsData}
                    boxTitle={"Order Placed"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusPaymentPending}
                    data={analyticsData}
                    boxTitle={"Payment Pending"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusPaymentConfirmed}
                    data={analyticsData}
                    boxTitle={"Payment Confirmed"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusProcessing}
                    data={analyticsData}
                    boxTitle={"Processing"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusPacked}
                    data={analyticsData}
                    boxTitle={"Packed"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusShipped}
                    data={analyticsData}
                    boxTitle={"Shipped"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusOutForDelivery}
                    data={analyticsData}
                    boxTitle={"Out For Delivery"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusDeliveryFailed}
                    data={analyticsData}
                    boxTitle={"Delivery Failed"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusAttemptedDelivery}
                    data={analyticsData}
                    boxTitle={"Attempted Delivery"}
                    boxStyle={"bg-gray-100 border-gray-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusCancelledByBuyer}
                    data={analyticsData}
                    boxTitle={"Cancelled by Buyer"}
                    boxStyle={"bg-red-100 border-red-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusCancelledBySeller}
                    data={analyticsData}
                    boxTitle={"Cancelled by Seller"}
                    boxStyle={"bg-red-100 border-red-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusReturnRequest}
                    data={analyticsData}
                    boxTitle={"Return Request"}
                    boxStyle={"bg-red-100 border-red-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusOrderReturned}
                    data={analyticsData}
                    boxTitle={"Returned"}
                    boxStyle={"bg-red-100 border-red-200"}
                  />
                  <MiniAnalyticsBox
                    statusSlug={statusRefundSuccess}
                    data={analyticsData}
                    boxTitle={"Returned Success"}
                    boxStyle={"bg-red-100 border-red-200"}
                  />
                </div>

                {/* Filters */}
                <div className="flex gap-6 border-gray-300 items-center">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Year:
                    </label>
                    <select
                      value={selectedYear}
                      onChange={(e) => handleYearChange(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="all">All Years</option>
                      {availableYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">
                      Month:
                    </label>
                    <select
                      value={selectedMonth}
                      onChange={(e) => handleMonthChange(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
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

                  {/* Clear filters button */}
                  {isFiltersActive && (
                    <button
                      onClick={clearFilters}
                      className="px-3 py-1 text-sm cursor-pointer border border-amber-300 bg-amber-200 text-red-600 hover:text-red-800 transition-colors"
                    >
                      Clear Filters
                    </button>
                  )}

                  {/* Results count for successful orders */}
                  <div className="ml-auto flex items-center">
                    <span className="text-sm text-gray-500">
                      Showing {successfulFilteredOrders.length} successful
                      orders (of {filteredOrders.length} total)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-b border-gray-300 bg-gray-50">
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
          <p className="text-2xl font-bold text-gray-800">
            {formatCurrency(totalSales)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">
            Number of Orders
          </h3>
          <p className="text-2xl font-bold text-gray-800">{orderCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">
            Average Order Value
          </h3>
          <p className="text-2xl font-bold text-gray-800">
            {formatCurrency(avgOrderValue)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
          <h3 className="text-gray-500 text-sm font-medium">
            Total Items Sold
          </h3>
          <p className="text-2xl font-bold text-gray-800">{totalItemsSold}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="p-4 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Over Time Chart */}
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {selectedMonth !== "all" ? "Daily Revenue" : "Monthly Revenue"}
            </h2>
            {revenueData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={selectedMonth !== "all" ? "day" : "month"} />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8884d8"
                    name="Revenue"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-400">
                No revenue data for selected period
              </div>
            )}
          </div>

          {/* Top Selling Products Chart */}
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Top Selling Products
            </h2>
            {topProducts.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={topProducts}
                  layout="vertical"
                  margin={{ left: 80 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={120}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip formatter={(value) => `${value} units`} />
                  <Bar dataKey="quantity" fill="#82ca9d" name="Quantity Sold" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-400">
                No product sales data
              </div>
            )}
          </div>

          {/* Sales by Store Pie Chart */}
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Sales by Store
            </h2>
            {storeSales.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={storeSales}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {storeSales.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-400">
                No store sales data
              </div>
            )}
          </div>

          {/* Recent Orders Summary */}
          <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Recent Orders
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Order ID
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Total
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.slice(0, 5).map((order) => {
                    const date = new Date(order.currentStatus?.timestamp);
                    return (
                      <tr key={order._id}>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          {order._id.slice(-8)}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-500">
                          {date.toLocaleDateString()}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-900">
                          {formatCurrency(order.summary?.orderTotalPrice || 0)}
                        </td>
                        <td className="px-4 py-2 text-sm">
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            {order.currentStatus?.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredOrders.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-4 py-8 text-center text-gray-400"
                      >
                        No orders found for selected filters
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
