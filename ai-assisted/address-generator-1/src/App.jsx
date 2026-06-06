import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  NavLink,
  Outlet,
} from "react-router-dom";
import { Address } from "./pages/Address";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <NavLink
            to="/address"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-semibold transition ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:text-blue-500"
              }`
            }
          >
            Address
          </NavLink>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<div className="text-red-300">Home</div>} />
      <Route path="/address" element={<Address />} />
    </Route>,
  ),
);

export const App = () => {
  return <RouterProvider router={router} />;
};
