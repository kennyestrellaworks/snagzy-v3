import { Image, Clock, User, ExternalLink, Star } from 'lucide-react';

export function Cards() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Cards</h1>
        <p className="text-slate-600 mb-8">
          Versatile card components for displaying content
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Basic Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Simple Card
                </h3>
                <p className="text-slate-600 text-sm">
                  This is a basic card component with a title and description.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
                <p className="text-blue-50 text-sm">
                  A card with a beautiful gradient background.
                </p>
              </div>
              <div className="bg-white border-2 border-blue-600 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Bordered Card
                </h3>
                <p className="text-slate-600 text-sm">
                  This card has a prominent colored border.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Image Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-violet-400 to-purple-400 flex items-center justify-center">
                  <Image className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Product Card
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Perfect for showcasing products with images.
                  </p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center">
                  <Image className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">
                      New
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Featured Item
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Highlight special items with badges.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center">
                  <Image className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Rated Card
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Display ratings and reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Article Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">John Doe</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Getting Started with React
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Learn the fundamentals of React and start building modern web
                  applications with this comprehensive guide.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>5 min read</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Jane Smith</p>
                    <p className="text-xs text-slate-500">1 day ago</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Design System Best Practices
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Discover how to build and maintain a scalable design system
                  that grows with your product.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
