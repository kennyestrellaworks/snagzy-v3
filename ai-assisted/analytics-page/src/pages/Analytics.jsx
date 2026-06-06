import { DollarSign, ShoppingCart, TrendingUp, BarChart2 } from 'lucide-react';
import { summaryStats } from '../mockData.js';
import TotalSalesChart from '../components/TotalSalesChart.jsx';
import PendingSalesChart from '../components/PendingSalesChart.jsx';
import RecentOrdersTable from '../components/RecentOrdersTable.jsx';

const CURRENT_YEAR = 2026;
const PREV_YEAR = 2025;

function pctChange(current, previous) {
  if (!previous) return null;
  const delta = ((current - previous) / previous) * 100;
  return delta;
}

function StatCard({ icon: Icon, iconBg, iconColor, label, value, delta }) {
  const positive = delta >= 0;
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-start gap-4">
      <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="min-w-0">
        <p className="text-sm text-slate-500 mb-0.5">{label}</p>
        <p className="text-2xl font-bold text-slate-900 truncate">{value}</p>
        {delta !== null && (
          <p className={`text-xs font-medium mt-1 ${positive ? 'text-emerald-600' : 'text-red-500'}`}>
            {positive ? '+' : ''}{delta.toFixed(1)}% vs {PREV_YEAR}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Analytics() {
  const cur = summaryStats[CURRENT_YEAR];
  const prev = summaryStats[PREV_YEAR];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Analytics</h1>
              <p className="text-sm text-slate-500">Sales performance and order overview</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={DollarSign}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
            label="Total Revenue"
            value={`$${(cur.totalRevenue / 1000).toFixed(1)}k`}
            delta={pctChange(cur.totalRevenue, prev.totalRevenue)}
          />
          <StatCard
            icon={ShoppingCart}
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600"
            label="Total Orders"
            value={cur.totalOrders.toLocaleString()}
            delta={pctChange(cur.totalOrders, prev.totalOrders)}
          />
          <StatCard
            icon={TrendingUp}
            iconBg="bg-sky-50"
            iconColor="text-sky-600"
            label="Avg Order Value"
            value={`$${cur.avgOrderValue}`}
            delta={pctChange(cur.avgOrderValue, prev.avgOrderValue)}
          />
          <StatCard
            icon={BarChart2}
            iconBg="bg-violet-50"
            iconColor="text-violet-600"
            label="Conversion Rate"
            value={`${cur.conversionRate}%`}
            delta={pctChange(cur.conversionRate, prev.conversionRate)}
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <TotalSalesChart />
          <PendingSalesChart />
        </div>

        {/* Orders table */}
        <RecentOrdersTable />
      </div>
    </div>
  );
}
