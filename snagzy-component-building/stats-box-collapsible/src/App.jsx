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
import { ProductVariants } from "./pages/products/ProductVariants";
import { ProductLayout } from "./layout/ProductLayout";
import { ProductReviews } from "./pages/products/ProductReviews";
import { ProductOrders } from "./pages/products/ProductOrders";
import { ProductSales } from "./pages/products/ProductSales";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Analytics />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug/:productId" element={<ProductLayout />}>
          <Route index element={<ProductVariants />} />
          <Route path="reviews" element={<ProductReviews />} />
          <Route path="orders" element={<ProductOrders />} />
          <Route path="sales" element={<ProductSales />} />
        </Route>
        <Route path="inventory" element={<Inventory />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};
