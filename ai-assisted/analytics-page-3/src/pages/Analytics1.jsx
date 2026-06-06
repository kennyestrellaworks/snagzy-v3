import React, { useMemo } from "react";
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
  ScatterChart,
  Scatter,
} from "recharts";
import { orders } from "../data/orders-few.js";
import { orderLifeCycle } from "../data/orderLifeCycle.js";
import { TrendingUp, Package, CheckCircle, AlertCircle } from "lucide-react";

const Analytics1 = () => {
  const metrics = useMemo(() => {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce(
      (sum, order) => sum + order.summary.orderTotalPrice,
      0,
    );
    const completedOrders = orders.filter(
      (order) => order.currentStatus.slug === "completed",
    ).length;
    const avgOrderValue = (totalRevenue / totalOrders).toFixed(2);

    return {
      totalOrders,
      totalRevenue: totalRevenue.toFixed(2),
      completedOrders,
      avgOrderValue,
    };
  }, []);

  const statusDistribution = useMemo(() => {
    const distribution = {};
    orders.forEach((order) => {
      const status = order.currentStatus.label;
      distribution[status] = (distribution[status] || 0) + 1;
    });
    return Object.entries(distribution).map(([name, value]) => ({
      name,
      value,
    }));
  }, []);

  const revenueTimeline = useMemo(() => {
    const timeline = {};
    orders.forEach((order) => {
      const date = new Date(order.currentStatus.timestamp).toLocaleDateString();
      if (!timeline[date]) {
        timeline[date] = { date, revenue: 0, orders: 0 };
      }
      timeline[date].revenue += order.summary.orderTotalPrice;
      timeline[date].orders += 1;
    });
    return Object.values(timeline).sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
  }, []);

  const statusTimeline = useMemo(() => {
    const data = orders.flatMap((order) => {
      return order.timeline.map((status, idx) => {
        const statusInfo = orderLifeCycle.find((s) => s.slug === status.slug);
        return {
          orderDate: new Date(order.createdAt).toLocaleDateString(),
          statusLabel: statusInfo?.label || status.label,
          timestamp: new Date(status.timestamp).getTime(),
          sequence: statusInfo?.sequence || 99,
          orderValue: order.summary.orderTotalPrice,
        };
      });
    });
    return data;
  }, []);

  const statusSequenceData = useMemo(() => {
    const sequences = {};
    statusTimeline.forEach((item) => {
      const seq = item.sequence;
      if (!sequences[seq]) {
        sequences[seq] = {
          sequence: seq,
          label: item.statusLabel,
          count: 0,
          total: 0,
        };
      }
      sequences[seq].count += 1;
      sequences[seq].total += item.orderValue;
    });
    return Object.values(sequences)
      .sort((a, b) => a.sequence - b.sequence)
      .slice(0, 9);
  }, [statusTimeline]);

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#EC4899",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">Real-time order and revenue insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={<Package className="w-8 h-8" />}
            title="Total Orders"
            value={metrics.totalOrders}
            color="blue"
          />
          <MetricCard
            icon={<TrendingUp className="w-8 h-8" />}
            title="Total Revenue"
            value={`$${metrics.totalRevenue}`}
            color="green"
          />
          <MetricCard
            icon={<CheckCircle className="w-8 h-8" />}
            title="Completed Orders"
            value={metrics.completedOrders}
            color="emerald"
          />
          <MetricCard
            icon={<AlertCircle className="w-8 h-8" />}
            title="Avg Order Value"
            value={`$${metrics.avgOrderValue}`}
            color="amber"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Revenue Over Time
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueTimeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="date" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: "#3B82F6", r: 5 }}
                  activeDot={{ r: 7 }}
                  isAnimationActive={true}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order Status Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
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

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Orders Per Day
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="orders" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Status Pipeline Performance
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statusSequenceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" stroke="#6B7280" />
              <YAxis
                dataKey="label"
                type="category"
                width={150}
                stroke="#6B7280"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="count" fill="#3B82F6" name="Order Count" />
              <Bar dataKey="total" fill="#8B5CF6" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon, title, value, color }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div
        className={`${colorClasses[color]} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default Analytics;
