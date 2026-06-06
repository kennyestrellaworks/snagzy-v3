import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { Clock } from 'lucide-react';
import { salesData } from '../mockData.js';
import FilterBar from './FilterBar.jsx';

function formatCurrency(value) {
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}k`;
  return `$${value}`;
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  const pct = d.totalSales > 0 ? ((d.pendingSales / d.totalSales) * 100).toFixed(1) : 0;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-sm">
      <p className="font-semibold text-slate-700 mb-2">{label}</p>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="text-slate-500">Pending:</span>
        <span className="font-medium text-slate-800">${d.pendingSales.toLocaleString()}</span>
      </div>
      <p className="text-xs text-slate-400 mt-1">{pct}% of total sales</p>
    </div>
  );
};

export default function PendingSalesChart() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(null);

  const raw = salesData[year] ?? [];
  const data = month !== null ? raw.filter(d => d.month === ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][month]) : raw;

  const total = data.reduce((s, d) => s + d.pendingSales, 0);
  const maxVal = Math.max(...data.map(d => d.pendingSales));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Pending Sales</h3>
            <p className="text-2xl font-bold text-slate-900">${total.toLocaleString()}</p>
          </div>
        </div>
        <FilterBar year={year} month={month} onYearChange={setYear} onMonthChange={setMonth} />
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className="w-2.5 h-2.5 rounded bg-amber-400 inline-block" />
          Awaiting confirmation or payment
        </div>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: 0, bottom: 0 }} barSize={month !== null ? 48 : 22}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={formatCurrency} tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={52} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#fef9f0' }} />
          <Bar dataKey="pendingSales" name="Pending Sales" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.pendingSales === maxVal ? '#f59e0b' : '#fcd34d'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
