import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { RootLayout } from "./layout/RootLayout";
import "./scrollbar.css";
import { Products } from "./pages/products/Products";
import { Inventory } from "./pages/inventory/Inventory";
import { Users } from "./pages/users/Users";
import { Orders } from "./pages/orders/Orders";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="products" element={<Products />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};
