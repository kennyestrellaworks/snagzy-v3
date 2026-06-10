import { Download, Send, Trash2, Heart, CheckCircle } from 'lucide-react';

export function Buttons() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Buttons</h1>
        <p className="text-slate-600 mb-8">
          Interactive button components in various styles and sizes
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Primary Buttons
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Primary
              </button>
              <button className="px-6 py-2.5 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors">
                Secondary
              </button>
              <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                Success
              </button>
              <button className="px-6 py-2.5 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors">
                Danger
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Outline Buttons
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Primary
              </button>
              <button className="px-6 py-2.5 border-2 border-slate-600 text-slate-600 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                Secondary
              </button>
              <button className="px-6 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                Success
              </button>
              <button className="px-6 py-2.5 border-2 border-rose-600 text-rose-600 rounded-lg font-medium hover:bg-rose-50 transition-colors">
                Danger
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Sizes
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Small
              </button>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Medium
              </button>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
                Large
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Icon Buttons
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5" />
                Download
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                <Send className="w-5 h-5" />
                Send
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-rose-600 text-white rounded-lg font-medium hover:bg-rose-700 transition-colors">
                <Trash2 className="w-5 h-5" />
                Delete
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors">
                <Heart className="w-5 h-5" />
                Like
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Icon Only
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Download className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors">
                <CheckCircle className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center hover:bg-rose-700 transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 border-2 border-slate-300 text-slate-600 rounded-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              States
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Normal
              </button>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors opacity-50 cursor-not-allowed" disabled>
                Disabled
              </button>
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
