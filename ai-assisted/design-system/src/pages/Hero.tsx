export function Hero() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Hero
        </h1>
        <p className="text-slate-600 mb-6 md:mb-8">
          Hero/layout examples: split and centered variations.
        </p>

        <div className="space-y-8">
          {/* Two-column split: image left, content right */}
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Split - Image left
          </h2>
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 items-center">
              <div className="h-40 sm:h-56 md:h-64 lg:h-40 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-semibold text-base sm:text-lg">
                Image / Illustration
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                  Build delightful experiences
                </h3>
                <p className="text-slate-600 mb-4 sm:mb-6">
                  Use a balanced two-column layout to combine visuals and
                  focused messaging. It works well for marketing and feature
                  intros.
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <button className="w-full sm:w-auto lg:w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Get started
                  </button>
                  <button className="w-full sm:w-auto lg:w-full px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Two-column split: content left, image right */}
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Split - Image right
          </h2>
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                  Everything you need
                </h3>
                <p className="text-slate-600 mb-4 sm:mb-6">
                  Flip the layout when you want the copy to lead. On narrow
                  screens the content stacks vertically for a consistent mobile
                  experience.
                </p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <button className="w-full sm:w-auto lg:w-full px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    Try it free
                  </button>
                  <button className="w-full sm:w-auto lg:w-full px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                    Contact sales
                  </button>
                </div>
              </div>
              <div className="h-40 sm:h-56 md:h-64 lg:h-40 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-white font-semibold text-base sm:text-lg">
                Illustration
              </div>
            </div>
          </section>

          {/* Centered hero */}
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Centered
          </h2>
          <section className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                A simple centered hero
              </h3>
              <p className="text-slate-600 mb-4 sm:mb-6">
                Centered layouts are great for minimalistic pages, subscription
                forms, or launching a campaign where one clear action is
                required.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center w-full sm:w-auto lg:w-full">
                <button className="w-full sm:w-auto lg:w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get started
                </button>
                <button className="w-full sm:w-auto lg:w-full px-6 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition">
                  Demo
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
