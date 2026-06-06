import { useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { orders } from "./orders.js";
import { orderLifeCycle } from "./orderLifeCycle.js";
import {
  TrendingUp,
  ShoppingBag,
  DollarSign,
  Users,
  Package,
  Truck,
  Clock,
} from "lucide-react";

const STATUS_COLORS = {
  completed: "#22c55e",
  shipped: "#3b82f6",
  processing: "#f59e0b",
  cancelled: "#ef4444",
  delivered: "#10b981",
  out_for_delivery: "#6366f1",
  packed: "#8b5cf6",
  payment_pending: "#f97316",
  payment_confirmed: "#06b6d4",
  order_placed: "#94a3b8",
};

const PAYMENT_COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#06b6d4"];
const SHIPPING_COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatCurrency(val) {
  return `$${val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function CustomTooltip({ active, payload, label, prefix = "" }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 text-sm">
      <p className="font-semibold text-gray-700 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: p.color }} />
          {p.name}: <span className="font-semibold ml-1">{prefix}{typeof p.value === "number" ? p.value.toLocaleString("en-US", { minimumFractionDigits: p.name?.toLowerCase().includes("revenue") ? 2 : 0 }) : p.value}</span>
        </p>
      ))}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-2xl font-bold text-gray-900 mt-0.5">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
    </div>
  );
}

export default function Analytics() {
  const [revenueView, setRevenueView] = useState("monthly");

  const stats = useMemo(() => {
    const totalRevenue = orders.reduce((s, o) => s + o.summary.orderTotalPrice, 0);
    const totalOrders = orders.length;
    const uniqueBuyers = new Set(orders.map((o) => o.buyerInfo.buyerId)).size;
    const totalItems = orders.reduce(
      (s, o) => s + o.orderedItems.reduce((ss, i) => ss + i.variant.quantity, 0),
      0
    );
    const avgOrderValue = totalRevenue / totalOrders;

    return { totalRevenue, totalOrders, uniqueBuyers, totalItems, avgOrderValue };
  }, []);

  const revenueByMonth = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      const d = new Date(o.createdAt);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      if (!map[key]) map[key] = { month: MONTHS[d.getMonth()], revenue: 0, orders: 0, year: d.getFullYear() };
      map[key].revenue += o.summary.orderTotalPrice;
      map[key].orders += 1;
    });
    return Object.values(map).sort((a, b) => {
      const ai = MONTHS.indexOf(a.month);
      const bi = MONTHS.indexOf(b.month);
      return ai - bi;
    });
  }, []);

  const orderStatusDist = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      const slug = o.currentStatus.slug;
      const label = o.currentStatus.label;
      if (!map[slug]) map[slug] = { name: label, value: 0, slug };
      map[slug].value += 1;
    });
    return Object.values(map).sort((a, b) => b.value - a.value);
  }, []);

  const paymentMethodDist = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      const m = o.paymentInfo.method;
      if (!map[m]) map[m] = { name: m, value: 0, revenue: 0 };
      map[m].value += 1;
      map[m].revenue += o.summary.orderTotalPrice;
    });
    return Object.values(map).sort((a, b) => b.value - a.value);
  }, []);

  const shippingMethodDist = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      const m = o.buyerInfo.shippingInfo.method;
      const label = m.charAt(0).toUpperCase() + m.slice(1);
      if (!map[m]) map[m] = { name: label, value: 0 };
      map[m].value += 1;
    });
    return Object.values(map).sort((a, b) => b.value - a.value);
  }, []);

  const topProducts = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      o.orderedItems.forEach((item) => {
        const id = item.productId;
        if (!map[id]) map[id] = { name: item.productName, qty: 0, revenue: 0, image: item.variant.primaryImage };
        map[id].qty += item.variant.quantity;
        map[id].revenue += item.variant.subTotal;
      });
    });
    return Object.values(map).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  }, []);

  const topStores = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      o.orderedItems.forEach((item) => {
        const { storeId, storeName, storeImage } = item.variant.storeInfo;
        if (!map[storeId]) map[storeId] = { name: storeName, image: storeImage, revenue: 0, orders: 0 };
        map[storeId].revenue += item.variant.subTotal;
        map[storeId].orders += 1;
      });
    });
    return Object.values(map).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  }, []);

  const carrierDist = useMemo(() => {
    const map = {};
    orders.forEach((o) => {
      const c = o.buyerInfo.shippingInfo.carrier;
      if (!map[c]) map[c] = { name: c, value: 0 };
      map[c].value += 1;
    });
    return Object.values(map).sort((a, b) => b.value - a.value);
  }, []);

  const revenueData = revenueView === "monthly" ? revenueByMonth : revenueByMonth;

  const orderLifecycleProgress = useMemo(() => {
    const lifeCycleMap = {};
    orderLifeCycle.forEach((stage) => {
      lifeCycleMap[stage.slug] = stage;
    });

    const stageData = [];
    const sequencedStages = orderLifeCycle.filter((s) => s.sequence <= 9).sort((a, b) => a.sequence - b.sequence);

    sequencedStages.forEach((stage) => {
      const ordersAtStage = orders.filter((o) => {
        const timeline = o.timeline || [];
        return timeline.some((t) => t.slug === stage.slug);
      }).length;

      const avgTimeInStage = ordersAtStage > 0
        ? orders
            .filter((o) => o.timeline?.some((t) => t.slug === stage.slug))
            .reduce((sum, o) => {
              const thisStageIdx = o.timeline.findIndex((t) => t.slug === stage.slug);
              const nextStageIdx = thisStageIdx + 1;

              if (thisStageIdx === -1) return sum;
              if (nextStageIdx >= o.timeline.length) return sum;

              const thisTime = new Date(o.timeline[thisStageIdx].timestamp).getTime();
              const nextTime = new Date(o.timeline[nextStageIdx].timestamp).getTime();
              return sum + (nextTime - thisTime) / (1000 * 60 * 60 * 24);
            }, 0) / ordersAtStage
        : 0;

      stageData.push({
        name: stage.label,
        count: ordersAtStage,
        avgDays: Math.round(avgTimeInStage * 10) / 10,
        slug: stage.slug,
      });
    });

    return stageData;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            <p className="text-sm text-gray-500 mt-0.5">Order performance and revenue insights</p>
          </div>
          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1.5 rounded-lg">
            {orders.length} orders loaded
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={DollarSign}
            label="Total Revenue"
            value={formatCurrency(stats.totalRevenue)}
            sub="All orders combined"
            color="bg-blue-500"
          />
          <StatCard
            icon={ShoppingBag}
            label="Total Orders"
            value={stats.totalOrders.toLocaleString()}
            sub="Across all statuses"
            color="bg-emerald-500"
          />
          <StatCard
            icon={Users}
            label="Unique Buyers"
            value={stats.uniqueBuyers.toLocaleString()}
            sub="Distinct customers"
            color="bg-amber-500"
          />
          <StatCard
            icon={TrendingUp}
            label="Avg. Order Value"
            value={formatCurrency(stats.avgOrderValue)}
            sub="Per order average"
            color="bg-sky-500"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
          <StatCard
            icon={Package}
            label="Total Items Sold"
            value={stats.totalItems.toLocaleString()}
            sub="All line item quantities"
            color="bg-rose-500"
          />
          <StatCard
            icon={Truck}
            label="Carriers Used"
            value={carrierDist.length}
            sub={carrierDist.map((c) => c.name).join(", ")}
            color="bg-violet-500"
          />
        </div>

        {/* Revenue Over Time */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-6">
            <SectionHeader
              title="Revenue Over Time"
              subtitle="Monthly order revenue and volume"
            />
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="ordGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="rev" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
              <YAxis yAxisId="ord" orientation="right" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 13, paddingTop: 12 }} />
              <Area yAxisId="rev" type="monotone" dataKey="revenue" name="Revenue ($)" stroke="#3b82f6" strokeWidth={2.5} fill="url(#revGrad)" dot={{ r: 4, fill: "#3b82f6", strokeWidth: 0 }} activeDot={{ r: 6 }} />
              <Area yAxisId="ord" type="monotone" dataKey="orders" name="Orders" stroke="#22c55e" strokeWidth={2.5} fill="url(#ordGrad)" dot={{ r: 4, fill: "#22c55e", strokeWidth: 0 }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Order Lifecycle Funnel */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <SectionHeader title="Order Lifecycle Funnel" subtitle="Orders progressing through stages with average time per stage" />
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={orderLifecycleProgress} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} angle={-45} height={80} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 13, paddingTop: 12 }} />
              <Bar yAxisId="left" dataKey="count" name="Orders" fill="#3b82f6" radius={[6, 6, 0, 0]} maxBarSize={50} />
              <Bar yAxisId="right" dataKey="avgDays" name="Avg. Days" fill="#10b981" radius={[6, 6, 0, 0]} maxBarSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Two-column: Status + Payment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Order Status Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <SectionHeader title="Order Status Distribution" subtitle="Current status of all orders" />
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={orderStatusDist} layout="vertical" margin={{ left: 8, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} width={110} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="Orders" radius={[0, 6, 6, 0]} maxBarSize={22}>
                  {orderStatusDist.map((entry, index) => (
                    <Cell key={index} fill={STATUS_COLORS[entry.slug] || "#94a3b8"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <SectionHeader title="Payment Methods" subtitle="Breakdown by payment provider" />
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="55%" height={220}>
                <PieChart>
                  <Pie
                    data={paymentMethodDist}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {paymentMethodDist.map((_, i) => (
                      <Cell key={i} fill={PAYMENT_COLORS[i % PAYMENT_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 flex-1">
                {paymentMethodDist.map((m, i) => (
                  <div key={m.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: PAYMENT_COLORS[i % PAYMENT_COLORS.length] }} />
                      <span className="text-sm text-gray-700 font-medium">{m.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900">{m.value}</span>
                      <span className="text-xs text-gray-400 ml-1">orders</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <SectionHeader title="Shipping Methods" subtitle="Distribution by delivery method" />
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={shippingMethodDist} margin={{ top: 5, right: 10, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" name="Orders" radius={[6, 6, 0, 0]} maxBarSize={40}>
                  {shippingMethodDist.map((_, i) => (
                    <Cell key={i} fill={SHIPPING_COLORS[i % SHIPPING_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Carrier Distribution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <SectionHeader title="Carriers" subtitle="Orders fulfilled per carrier" />
            <div className="space-y-3 mt-2">
              {carrierDist.map((c, i) => {
                const pct = Math.round((c.value / orders.length) * 100);
                return (
                  <div key={c.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{c.name}</span>
                      <span className="text-sm font-bold text-gray-900">{c.value} <span className="text-gray-400 font-normal text-xs">({pct}%)</span></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, backgroundColor: PAYMENT_COLORS[i % PAYMENT_COLORS.length] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <SectionHeader title="Top Products by Revenue" subtitle="Best-performing products across all orders" />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3 pr-4">#</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3">Product</th>
                  <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3 px-4">Qty Sold</th>
                  <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topProducts.map((p, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4">
                      <span className="text-sm font-bold text-gray-400">{i + 1}</span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0 bg-gray-100"
                        />
                        <span className="text-sm font-medium text-gray-800 line-clamp-1">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className="text-sm font-semibold text-gray-700">{p.qty}</span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="text-sm font-bold text-gray-900">{formatCurrency(p.revenue)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Stores */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <SectionHeader title="Top Stores by Revenue" subtitle="Highest-grossing stores across all orders" />
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3 pr-4">#</th>
                  <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3">Store</th>
                  <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3 px-4">Line Items</th>
                  <th className="text-right text-xs font-semibold text-gray-400 uppercase tracking-wide pb-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topStores.map((s, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4">
                      <span className="text-sm font-bold text-gray-400">{i + 1}</span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={s.image}
                          alt={s.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0 bg-gray-100"
                        />
                        <span className="text-sm font-medium text-gray-800">{s.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span className="text-sm font-semibold text-gray-700">{s.orders}</span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="text-sm font-bold text-gray-900">{formatCurrency(s.revenue)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
