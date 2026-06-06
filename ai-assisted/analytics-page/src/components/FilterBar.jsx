import { Calendar } from 'lucide-react';
import { availableYears, availableMonths } from '../mockData.js';

export default function FilterBar({ year, month, onYearChange, onMonthChange }) {
  return (
    <div className="flex items-center gap-3">
      <Calendar className="w-4 h-4 text-slate-400" />
      <select
        value={month ?? ''}
        onChange={e => onMonthChange(e.target.value === '' ? null : Number(e.target.value))}
        className="text-sm bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
      >
        <option value="">All Months</option>
        {availableMonths.map(m => (
          <option key={m.value} value={m.value}>{m.label}</option>
        ))}
      </select>
      <select
        value={year}
        onChange={e => onYearChange(Number(e.target.value))}
        className="text-sm bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
      >
        {availableYears.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}
