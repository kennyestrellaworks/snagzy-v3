import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Analytics } from "./pages/analytics/Analytics";
import { Products } from "./pages/products/Products";
import { Inventory } from "./pages/inventory/Inventory";
import { Orders } from "./pages/orders/Orders";
import { Reviews } from "./pages/reviews/Reviews";
import { Users } from "./pages/users/Users";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Analytics />} />
        <Route path="products" element={<Products />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};
