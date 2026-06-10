import { Check, X, AlertCircle, Info, Star, Zap } from 'lucide-react';

export function Badges() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Badges</h1>
        <p className="text-slate-600 mb-8">
          Small count and labeling components
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Basic Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Primary
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                Secondary
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                Success
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Warning
              </span>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                Danger
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Info
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Solid Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                Primary
              </span>
              <span className="px-3 py-1 bg-slate-600 text-white rounded-full text-sm font-medium">
                Secondary
              </span>
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-medium">
                Success
              </span>
              <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-sm font-medium">
                Warning
              </span>
              <span className="px-3 py-1 bg-rose-600 text-white rounded-full text-sm font-medium">
                Danger
              </span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                Info
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Outlined Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 border-2 border-blue-600 text-blue-600 rounded-full text-sm font-medium">
                Primary
              </span>
              <span className="px-3 py-1 border-2 border-slate-600 text-slate-600 rounded-full text-sm font-medium">
                Secondary
              </span>
              <span className="px-3 py-1 border-2 border-emerald-600 text-emerald-600 rounded-full text-sm font-medium">
                Success
              </span>
              <span className="px-3 py-1 border-2 border-orange-600 text-orange-600 rounded-full text-sm font-medium">
                Warning
              </span>
              <span className="px-3 py-1 border-2 border-rose-600 text-rose-600 rounded-full text-sm font-medium">
                Danger
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Badges with Icons
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                Verified
              </span>
              <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                <X className="w-4 h-4" />
                Failed
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                Warning
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                <Info className="w-4 h-4" />
                Info
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                <Star className="w-4 h-4" />
                Featured
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                Premium
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Sizes
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                Small
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Medium
              </span>
              <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-base font-medium">
                Large
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Notification Badges
            </h2>
            <div className="flex flex-wrap gap-8">
              <div className="relative">
                <button className="px-6 py-2.5 bg-slate-600 text-white rounded-lg font-medium">
                  Messages
                </button>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-rose-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
                  5
                </span>
              </div>
              <div className="relative">
                <button className="px-6 py-2.5 bg-slate-600 text-white rounded-lg font-medium">
                  Notifications
                </button>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
                  12
                </span>
              </div>
              <div className="relative">
                <button className="px-6 py-2.5 bg-slate-600 text-white rounded-lg font-medium">
                  Cart
                </button>
                <span className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white"></span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Removable Badges
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-2">
                React
                <button className="hover:bg-blue-200 rounded-full p-0.5 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium flex items-center gap-2">
                TypeScript
                <button className="hover:bg-emerald-200 rounded-full p-0.5 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-2">
                Tailwind
                <button className="hover:bg-purple-200 rounded-full p-0.5 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium flex items-center gap-2">
                Vite
                <button className="hover:bg-orange-200 rounded-full p-0.5 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
