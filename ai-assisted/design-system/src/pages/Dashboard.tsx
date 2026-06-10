import { Package, Layers, Code2, Sparkles } from 'lucide-react';

export function Dashboard() {
  const stats = [
    {
      label: 'Components',
      value: '8',
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Categories',
      value: '4',
      icon: Layers,
      color: 'from-violet-500 to-purple-500',
    },
    {
      label: 'Code Examples',
      value: '24',
      icon: Code2,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      label: 'Variants',
      value: '50+',
      icon: Sparkles,
      color: 'from-orange-500 to-rose-500',
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome to DesignKit
          </h1>
          <p className="text-slate-600">
            A comprehensive component library for building beautiful interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Getting Started
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-slate-900">
                    Explore Components
                  </p>
                  <p className="text-sm text-slate-600">
                    Browse through the sidebar to see all available components
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-slate-900">View Examples</p>
                  <p className="text-sm text-slate-600">
                    Each component page shows multiple variants and use cases
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-slate-900">Customize</p>
                  <p className="text-sm text-slate-600">
                    Adapt the components to match your design requirements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-8 text-white">
            <h2 className="text-xl font-bold mb-4">Design Principles</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-2xl leading-none">✓</span>
                <span>Consistent and intuitive user experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl leading-none">✓</span>
                <span>Accessible and inclusive design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl leading-none">✓</span>
                <span>Responsive across all devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-2xl leading-none">✓</span>
                <span>Performance optimized components</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
