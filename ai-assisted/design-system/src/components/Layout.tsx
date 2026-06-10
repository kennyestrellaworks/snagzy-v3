import { Outlet, NavLink } from "react-router-dom";
import { Package2, Home } from "lucide-react";

const components = [
  { name: "Buttons", path: "/buttons" },
  { name: "Cards", path: "/cards" },
  { name: "Hero", path: "/hero" },
  { name: "Accordions", path: "/accordions" },
  { name: "Forms", path: "/forms" },
  { name: "Modals", path: "/modals" },
  { name: "Tables", path: "/tables" },
  { name: "Badges", path: "/badges" },
  { name: "Alerts", path: "/alerts" },
];

export function Layout() {
  return (
    <div className="flex h-screen bg-slate-50">
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Package2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">DesignKit</h1>
              <p className="text-xs text-slate-500">Component Library</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 transition-all ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>

          <div className="mt-6 mb-2 px-4">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Components
            </h3>
          </div>

          {components.map((component) => (
            <NavLink
              key={component.path}
              to={component.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg mb-1 transition-all ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {component.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
            <p className="text-sm font-medium text-slate-900">Need help?</p>
            <p className="text-xs text-slate-600 mt-1">Check documentation</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
