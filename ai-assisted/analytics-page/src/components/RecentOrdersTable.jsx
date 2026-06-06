import { useState, useMemo } from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { recentOrders, availableYears, availableMonths } from '../mockData.js';
import FilterBar from './FilterBar.jsx';

const STATUS_STYLES = {
  Completed: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
  Pending:   'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  Processing:'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  Cancelled: 'bg-red-50 text-red-700 ring-1 ring-red-200',
};

const PAGE_SIZE = 8;

export default function RecentOrdersTable() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return recentOrders.filter(o => {
      const d = new Date(o.date);
      if (d.getFullYear() !== year) return false;
      if (month !== null && d.getMonth() !== month) return false;
      return true;
    });
  }, [year, month]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const slice = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function handleYearChange(y) { setYear(y); setPage(1); }
  function handleMonthChange(m) { setMonth(m); setPage(1); }

  const totalValue = filtered.reduce((s, o) => s + o.amount, 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Recent Orders</h3>
            <p className="text-sm text-slate-500">{filtered.length} orders · ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} total</p>
          </div>
        </div>
        <FilterBar year={year} month={month} onYearChange={handleYearChange} onMonthChange={handleMonthChange} />
      </div>

      <div className="overflow-x-auto -mx-2">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="border-b border-slate-100">
              {['Order ID', 'Customer', 'Product', 'Date', 'Amount', 'Status'].map(h => (
                <th key={h} className="px-3 py-2.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slice.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-slate-400 py-12">No orders found for this period.</td>
              </tr>
            ) : slice.map((order, i) => (
              <tr
                key={order.id}
                className={`border-b border-slate-50 transition-colors hover:bg-slate-50/70 ${i % 2 === 0 ? '' : 'bg-slate-50/30'}`}
              >
                <td className="px-3 py-3 font-mono text-xs text-slate-500">{order.id}</td>
                <td className="px-3 py-3 font-medium text-slate-800 whitespace-nowrap">{order.customer}</td>
                <td className="px-3 py-3 text-slate-600 whitespace-nowrap">{order.product}</td>
                <td className="px-3 py-3 text-slate-500 whitespace-nowrap">{order.date}</td>
                <td className="px-3 py-3 font-semibold text-slate-800">${order.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td className="px-3 py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${STATUS_STYLES[order.status] ?? ''}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-400">
            Showing {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} of {filtered.length}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-7 h-7 rounded-lg text-xs font-medium transition-colors ${p === safePage ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
