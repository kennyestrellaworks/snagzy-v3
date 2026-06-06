import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ComposedChart,
} from "recharts";
import { orders } from "../data/orders-few";
import {
  orderLifeCycle,
  successfulOrderStatuses,
} from "../data/orderLifeCycle";

// Helper: Get status label and color
const getStatusStyle = (slug) => {
  const status = orderLifeCycle.find((s) => s.slug === slug);
  const colors = {
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    info: "bg-blue-100 text-blue-800 border-blue-200",
    error: "bg-red-100 text-red-800 border-red-200",
  };
  return {
    label: status?.label || slug,
    className: colors[status?.type] || colors.info,
  };
};

// Filter completed/delivered orders
const getSuccessfulOrders = () => {
  return orders.filter((order) =>
    successfulOrderStatuses.includes(order.currentStatus?.slug),
  );
};

const Analytics = () => {
  const [chartType, setChartType] = useState("both"); // "orders", "revenue", "both"
  const successfulOrders = useMemo(() => getSuccessfulOrders(), []);

  // --- Stat Cards Data ---
  const stats = useMemo(() => {
    const totalRevenue = successfulOrders.reduce(
      (sum, order) => sum + order.summary.orderTotalPrice,
      0,
    );
    const totalOrders = successfulOrders.length;
    const totalItems = successfulOrders.reduce(
      (sum, order) => sum + order.orderedItems.length,
      0,
    );

    // Status breakdown for successful orders only
    const statusCount = {};
    successfulOrders.forEach((order) => {
      const slug = order.currentStatus.slug;
      statusCount[slug] = (statusCount[slug] || 0) + 1;
    });

    const statusBreakdown = Object.entries(statusCount).map(
      ([slug, count]) => ({
        slug,
        label: getStatusStyle(slug).label,
        count,
      }),
    );

    return { totalRevenue, totalOrders, totalItems, statusBreakdown };
  }, [successfulOrders]);

  // --- Order Lifecycle Data (All orders, tracking through timeline) ---
  const lifecycleData = useMemo(() => {
    // Initialize data for each status in orderLifeCycle (preserve sequence order)
    const lifecycleArr = orderLifeCycle
      .sort((a, b) => a.sequence - b.sequence)
      .map((stage) => ({
        slug: stage.slug,
        label: stage.label,
        sequence: stage.sequence,
        orderCount: 0,
        totalRevenue: 0,
      }));

    // For each status, count orders whose currentStatus is at or beyond that stage
    orders.forEach((order) => {
      const currentStage = orderLifeCycle.find(
        (s) => s.slug === order.currentStatus?.slug,
      );
      if (!currentStage) return;
      lifecycleArr.forEach((stage) => {
        if (currentStage.sequence >= stage.sequence) {
          stage.orderCount += 1;
          stage.totalRevenue += order.summary.orderTotalPrice;
        }
      });
    });

    return lifecycleArr;
  }, []);

  // --- Top 10 Buyers (by total spend) ---
  const topBuyers = useMemo(() => {
    const buyerMap = new Map();

    successfulOrders.forEach((order) => {
      const buyerId = order.buyerInfo.buyerId;
      const buyerName = `${order.buyerInfo.buyerFirstName} ${order.buyerInfo.buyerLastName}`;
      const totalSpent = order.summary.orderTotalPrice;

      if (buyerMap.has(buyerId)) {
        buyerMap.set(buyerId, {
          ...buyerMap.get(buyerId),
          totalSpent: buyerMap.get(buyerId).totalSpent + totalSpent,
          orderCount: buyerMap.get(buyerId).orderCount + 1,
        });
      } else {
        buyerMap.set(buyerId, {
          buyerName,
          buyerId,
          totalSpent,
          orderCount: 1,
          image: order.buyerInfo.image,
        });
      }
    });

    return Array.from(buyerMap.values())
      .sort((a, b) => b.totalSpent - a.totalSpent)
      .slice(0, 10);
  }, [successfulOrders]);

  // --- Top 10 Selling Products (by quantity sold) ---
  const topProducts = useMemo(() => {
    const productMap = new Map();

    successfulOrders.forEach((order) => {
      order.orderedItems.forEach((item) => {
        const productId = item.productId;
        const productName = item.productName;
        const quantity = item.variant.quantity;

        if (productMap.has(productId)) {
          productMap.set(productId, {
            ...productMap.get(productId),
            totalQuantitySold:
              productMap.get(productId).totalQuantitySold + quantity,
            totalRevenue:
              productMap.get(productId).totalRevenue + item.variant.subTotal,
          });
        } else {
          productMap.set(productId, {
            productId,
            productName,
            totalQuantitySold: quantity,
            totalRevenue: item.variant.subTotal,
            primaryImage: item.variant.primaryImage,
          });
        }
      });
    });

    return Array.from(productMap.values())
      .sort((a, b) => b.totalQuantitySold - a.totalQuantitySold)
      .slice(0, 10);
  }, [successfulOrders]);

  // --- Top 10 Selling Products (by revenue) ---
  const topProductsByRevenue = useMemo(() => {
    const productMap = new Map();

    successfulOrders.forEach((order) => {
      order.orderedItems.forEach((item) => {
        const productId = item.productId;
        const productName = item.productName;
        const revenue = item.variant.subTotal;
        const quantity = item.variant.quantity;

        if (productMap.has(productId)) {
          productMap.set(productId, {
            ...productMap.get(productId),
            totalRevenue: productMap.get(productId).totalRevenue + revenue,
            totalQuantitySold:
              productMap.get(productId).totalQuantitySold + quantity,
          });
        } else {
          productMap.set(productId, {
            productId,
            productName,
            totalRevenue: revenue,
            totalQuantitySold: quantity,
            primaryImage: item.variant.primaryImage,
          });
        }
      });
    });

    return Array.from(productMap.values())
      .sort((a, b) => b.totalRevenue - a.totalRevenue)
      .slice(0, 10);
  }, [successfulOrders]);

  // --- Revenue by Status Chart Data ---
  const revenueByStatus = useMemo(() => {
    // Use the same status list and order as orderLifeCycle
    const statusArr = orderLifeCycle
      .sort((a, b) => a.sequence - b.sequence)
      .map((stage) => ({
        slug: stage.slug,
        label: stage.label,
        revenue: 0,
        orderCount: 0,
      }));

    // For each status, sum revenue for every order that passed through that status (in timeline)
    orders.forEach((order) => {
      const reachedStatuses = new Set(order.timeline.map((t) => t.slug));
      statusArr.forEach((stage) => {
        if (reachedStatuses.has(stage.slug)) {
          stage.orderCount += 1;
          stage.revenue += order.summary.orderTotalPrice;
        }
      });
    });

    return statusArr;
  }, [orders]);

  // Colors for pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Order Analytics Dashboard
      </h1>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">
                ${stats.totalRevenue.toFixed(2)}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            From {stats.totalOrders} successful orders
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Orders (Completed/Delivered)
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {stats.totalOrders}
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Items Sold
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {stats.totalItems}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Order Lifecycle Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            📊 Order Lifecycle Funnel
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setChartType("orders")}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                chartType === "orders"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Orders Only
            </button>
            <button
              onClick={() => setChartType("revenue")}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                chartType === "revenue"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Revenue Only
            </button>
            <button
              onClick={() => setChartType("both")}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                chartType === "both"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Both
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Shows how many orders reach each stage and the cumulative revenue at
          each stage
        </p>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={lifecycleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              angle={-45}
              textAnchor="end"
              height={80}
              interval={0}
            />
            <YAxis
              yAxisId="left"
              label={{
                value: "Number of Orders",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Revenue ($)",
                angle: 90,
                position: "insideRight",
              }}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === "Total Revenue") return `$${value.toFixed(2)}`;
                return value;
              }}
            />
            <Legend />
            {(chartType === "orders" || chartType === "both") && (
              <Bar
                yAxisId="left"
                dataKey="orderCount"
                fill="#8884d8"
                name="Number of Orders"
                barSize={30}
              />
            )}
            {(chartType === "revenue" || chartType === "both") && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="totalRevenue"
                stroke="#ff7300"
                name="Total Revenue"
                strokeWidth={3}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>

        {/* Lifecycle Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-4 border-t">
          <div>
            <p className="text-xs text-gray-500">Total Orders Started</p>
            <p className="text-xl font-bold text-gray-800">
              {lifecycleData[0]?.orderCount || 0}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Drop-off Rate</p>
            <p className="text-xl font-bold text-red-600">
              {lifecycleData[0]?.orderCount &&
              lifecycleData[lifecycleData.length - 1]?.orderCount
                ? `${((1 - lifecycleData[lifecycleData.length - 1].orderCount / lifecycleData[0].orderCount) * 100).toFixed(1)}%`
                : "0%"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Completed Orders</p>
            <p className="text-xl font-bold text-green-600">
              {lifecycleData[lifecycleData.length - 1]?.orderCount || 0}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Total Pipeline Value</p>
            <p className="text-xl font-bold text-blue-600">
              ${lifecycleData[0]?.totalRevenue?.toFixed(2) || 0}
            </p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue by Status Bar Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Revenue by Order Status
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Orders by Status Pie Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Orders by Status
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stats.statusBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ label, percent }) =>
                  `${label}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                nameKey="label"
              >
                {stats.statusBreakdown.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top 10 Buyers Table */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          🏆 Top 10 Buyers (by Total Spend)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Buyer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topBuyers.map((buyer, idx) => (
                <tr key={buyer.buyerId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={buyer.image}
                          alt={buyer.buyerName}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {buyer.buyerName}
                        </div>
                        <div className="text-sm text-gray-500">#{idx + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${buyer.totalSpent.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {buyer.orderCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top 10 Selling Products - By Quantity */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          🔥 Top 10 Selling Products (by Quantity)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map((product, idx) => (
                <tr key={product.productId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded object-cover"
                          src={product.primaryImage}
                          alt={product.productName}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.productName}
                        </div>
                        <div className="text-sm text-gray-500">#{idx + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.totalQuantitySold}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${product.totalRevenue.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top 10 Selling Products - By Revenue */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          💰 Top 10 Products (by Revenue)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity Sold
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProductsByRevenue.map((product, idx) => (
                <tr key={product.productId} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded object-cover"
                          src={product.primaryImage}
                          alt={product.productName}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.productName}
                        </div>
                        <div className="text-sm text-gray-500">#{idx + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${product.totalRevenue.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.totalQuantitySold}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
