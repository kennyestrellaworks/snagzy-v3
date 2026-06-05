import { useMemo, useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { StatCard } from "../../components/StatCard";
import { useData } from "../../context/DataContext";
import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const COLORS = {
  success: "#10B981",
  pending: "#F59E0B",
  cancelled: "#EF4444",
  primary: "#3B82F6",
  secondary: "#8B5CF6",
  accent: "#EC4899",
};

const STATUS_COLORS = ["#10B981", "#F59E0B", "#EF4444", "#3B82F6", "#8B5CF6"];

export const Analytics2 = () => {
  const { getAllOrders, getAllProducts } = useData();
  const { ordersAnalyticsValue } = useOrdersAnalytics();

  const [timeRange, setTimeRange] = useState("all"); // all, thisMonth, last3Months
  const [chartType, setChartType] = useState("revenue"); // revenue, orders

  const allOrders = getAllOrders();
  const allProducts = getAllProducts();

  // Filter orders by time range
  const getFilteredOrders = useMemo(() => {
    if (timeRange === "all") return allOrders;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    if (timeRange === "thisMonth") {
      return allOrders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate.getFullYear() === currentYear &&
          orderDate.getMonth() === currentMonth
        );
      });
    }

    if (timeRange === "last3Months") {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(now.getMonth() - 3);
      return allOrders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return orderDate >= threeMonthsAgo;
      });
    }

    return allOrders;
  }, [allOrders, timeRange]);

  // Calculate analytics data
  const analyticsData = useMemo(() => {
    const successfulOrders =
      ordersAnalyticsValue.getSuccessfullOrders(getFilteredOrders);
    const pendingOrders =
      ordersAnalyticsValue.getPendingOrders(getFilteredOrders);
    const cancelledOrders =
      ordersAnalyticsValue.getUnSuccessfullOrders(getFilteredOrders);

    const totalRevenue = ordersAnalyticsValue.getTotalRevenue(successfulOrders);
    const totalOrders = getFilteredOrders.length;

    // Status distribution for pie chart
    const statusDistribution = [
      {
        name: "Delivered",
        value: successfulOrders.length,
        revenue: totalRevenue,
        color: COLORS.success,
      },
      {
        name: "Pending",
        value: pendingOrders.length,
        revenue: ordersAnalyticsValue.getTotalPurchase(pendingOrders),
        color: COLORS.pending,
      },
      {
        name: "Cancelled/Refunded",
        value: cancelledOrders.length,
        revenue: ordersAnalyticsValue.getTotalPurchase(cancelledOrders),
        color: COLORS.cancelled,
      },
    ];

    // Monthly sales data (last 6 months)
    const now = new Date();
    const monthlyData = [];
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      const month = date.getMonth();

      const monthOrders = successfulOrders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate.getFullYear() === year && orderDate.getMonth() === month
        );
      });

      const monthRevenue = ordersAnalyticsValue.getTotalPurchase(monthOrders);
      const monthOrderCount = monthOrders.length;

      monthlyData.push({
        month: `${monthName} ${year}`,
        revenue: monthRevenue,
        orders: monthOrderCount,
      });
    }

    // Top products by revenue
    const productRevenue = {};
    successfulOrders.forEach((order) => {
      order.orderedItems?.forEach((item) => {
        const productName = item.productName;
        const revenue = item.variant?.subTotal || 0;
        if (!productRevenue[productName]) {
          productRevenue[productName] = {
            name: productName,
            revenue: 0,
            quantity: 0,
          };
        }
        productRevenue[productName].revenue += revenue;
        productRevenue[productName].quantity += item.variant?.quantity || 0;
      });
    });

    const topProducts = Object.values(productRevenue)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);

    // Revenue by store
    const storeRevenue = {};
    successfulOrders.forEach((order) => {
      order.orderedItems?.forEach((item) => {
        const storeName = item.variant?.storeInfo?.storeName || "Unknown Store";
        const revenue = item.variant?.subTotal || 0;
        if (!storeRevenue[storeName]) {
          storeRevenue[storeName] = {
            name: storeName,
            revenue: 0,
            orders: 0,
          };
        }
        storeRevenue[storeName].revenue += revenue;
        storeRevenue[storeName].orders += 1;
      });
    });

    const topStores = Object.values(storeRevenue)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 5);

    // Recent orders for table
    const recentOrders = [...successfulOrders]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 10);

    // Calculate growth percentages
    const getGrowthPercentage = (current, previous) => {
      if (previous === 0) return current > 0 ? 100 : 0;
      return ((current - previous) / previous) * 100;
    };

    // Previous period (previous month)
    const previousMonth = new Date();
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    const previousMonthOrders = successfulOrders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return (
        orderDate.getFullYear() === previousMonth.getFullYear() &&
        orderDate.getMonth() === previousMonth.getMonth()
      );
    });
    const previousMonthRevenue =
      ordersAnalyticsValue.getTotalPurchase(previousMonthOrders);

    const currentMonthRevenue =
      monthlyData[monthlyData.length - 1]?.revenue || 0;
    const revenueGrowth = getGrowthPercentage(
      currentMonthRevenue,
      previousMonthRevenue,
    );

    const previousMonthCount = previousMonthOrders.length;
    const currentMonthCount = monthlyData[monthlyData.length - 1]?.orders || 0;
    const ordersGrowth = getGrowthPercentage(
      currentMonthCount,
      previousMonthCount,
    );

    return {
      summary: {
        totalRevenue,
        totalOrders,
        completedOrders: successfulOrders.length,
        pendingOrders: pendingOrders.length,
        cancelledOrders: cancelledOrders.length,
        completionRate:
          totalOrders > 0 ? (successfulOrders.length / totalOrders) * 100 : 0,
        averageOrderValue:
          successfulOrders.length > 0
            ? totalRevenue / successfulOrders.length
            : 0,
        revenueGrowth,
        ordersGrowth,
      },
      statusDistribution,
      monthlyData,
      topProducts,
      topStores,
      recentOrders,
    };
  }, [getFilteredOrders, ordersAnalyticsValue]);

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      {/* Header  */}
      <div className="w-full top-0 z-50">
        <div className="w-full flex flex-1 flex-col p-2">
          <div className="flex gap-2">
            <PageHeader defaultPage="Analytics" type="sidebar-level" />
          </div>
        </div>
      </div>
      {/* Header ends */}

      {/* Chart cards  */}
      <div className="flex flex-col w-full gap-2 p-2">
        <div className="flex w-full justify-between">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Time</option>
            <option value="thisMonth">This Month</option>
            <option value="last3Months">Last 3 Months</option>
          </select>

          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <button
              onClick={() => setChartType("revenue")}
              className={`px-3 py-1 text-sm ${
                chartType === "revenue"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => setChartType("orders")}
              className={`px-3 py-1 text-sm ${
                chartType === "orders"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Orders
            </button>
          </div>
        </div>

        <div className="flex w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <StatCard
              title="Total Revenue"
              value={`$${analyticsData.summary.totalRevenue.toLocaleString(
                undefined,
                { minimumFractionDigits: 2, maximumFractionDigits: 2 },
              )}`}
              icon="💰"
              trend={analyticsData.summary.revenueGrowth >= 0 ? "up" : "down"}
              trendValue={Math.abs(analyticsData.summary.revenueGrowth)}
            />
            <StatCard
              title="Total Orders"
              value={analyticsData.summary.totalOrders.toLocaleString()}
              icon="📦"
              trend={analyticsData.summary.ordersGrowth >= 0 ? "up" : "down"}
              trendValue={Math.abs(analyticsData.summary.ordersGrowth)}
            />
            <StatCard
              title="Completion Rate"
              value={`${analyticsData.summary.completionRate.toFixed(1)}%`}
              subtitle={`${analyticsData.summary.completedOrders} delivered / ${analyticsData.summary.totalOrders} total`}
              icon="✅"
            />
            <StatCard
              title="Average Order Value"
              value={`$${analyticsData.summary.averageOrderValue.toLocaleString(
                undefined,
                { minimumFractionDigits: 2, maximumFractionDigits: 2 },
              )}`}
              icon="📊"
            />
          </div>
        </div>

        <div className="flex w-full">
          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {/* Monthly Trend Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">
                Monthly {chartType === "revenue" ? "Revenue" : "Orders"} Trend
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={analyticsData.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      chartType === "revenue"
                        ? `$${value.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}`
                        : value,
                      name === "revenue" ? "Revenue" : "Orders",
                    ]}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey={chartType}
                    stroke={COLORS.primary}
                    fill={COLORS.primary}
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Order Status Distribution */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full">
              <h2 className="text-lg font-semibold mb-4">
                Order Status Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analyticsData.statusDistribution}
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
                    {analyticsData.statusDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name, props) => [
                      `${value} orders`,
                      props.payload.name,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Top 5 Products</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={analyticsData.topProducts}
                layout="vertical"
                margin={{ left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(value) => `$${value}`} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={150}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                <Bar dataKey="revenue" fill={COLORS.primary} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue by Store */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Top Stores</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={analyticsData.topStores}
                layout="vertical"
                margin={{ left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tickFormatter={(value) => `$${value}`} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={150}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                <Bar dataKey="revenue" fill={COLORS.secondary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Chart cards ends */}
    </div>
  );
};
