import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { DataProvider } from "./context/DataContext";
import { ReviewsAnalyticsProvider } from "./context/ReviewsAnalyticsContext";
import { OrdersAnalyticsProvider } from "./context/OrdersAnalyticsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReviewsAnalyticsProvider>
      <OrdersAnalyticsProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </OrdersAnalyticsProvider>
    </ReviewsAnalyticsProvider>
  </StrictMode>,
);
