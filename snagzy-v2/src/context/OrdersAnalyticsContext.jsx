import { createContext, useContext, useMemo } from "react";
import { orders } from "../data/orders.js";

const OrdersAnalyticsContext = createContext();

export const OrdersAnalyticsProvider = ({ children }) => {
  const getAllOrders = () => {
    return orders;
  };
  const allOrders = getAllOrders();

  const ordersAnalyticsValue = useMemo(() => {
    // Get all orders where currentStatus.slug is 'delivered' or 'completed'
    const getSuccessfullOrders = () => {
      return allOrders.filter(
        (order) =>
          order.currentStatus &&
          (order.currentStatus.slug === "completed" ||
            order.currentStatus.slug === "delivered"),
      );
    };

    // Get total sold items for the product from completed or delivered orders
    const getTotalSoldItemsOfAProduct = (productId) => {
      const completedOrders = getSuccessfullOrders();
      //   console.log("completedOrders", completedOrders);
      const productOrders = completedOrders.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.productId === productId),
      );
      //   console.log("productOrders", productOrders);
      return productOrders.reduce((total, order) => {
        return (
          total +
          order.orderedItems
            .filter((item) => item.productId === productId)
            .reduce((sum, item) => sum + (item.variant?.quantity || 0), 0)
        );
      }, 0);
    };

    // Get total sales for the product from completed or delivered orders
    const getTotalSalesOfAProduct = (productId) => {
      const completedOrders = getSuccessfullOrders();
      const productOrders = completedOrders.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.productId === productId),
      );
      return productOrders.reduce((total, order) => {
        return (
          total +
          order.orderedItems
            .filter((item) => item.productId === productId)
            .reduce((sum, item) => sum + (item.variant?.subTotal || 0), 0)
        );
      }, 0);
    };

    // Get total sold items for the variant from completed or delivered orders
    const getVariantTotalSold = (variantId) => {
      const completedOrders = getSuccessfullOrders();
      const variantOrders = completedOrders.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.variant?._id === variantId),
      );
      return variantOrders.reduce((total, order) => {
        const item = order.orderedItems.find(
          (item1) => item1.variant?._id === variantId,
        );
        return total + (item?.variant?.quantity || 0);
      }, 0);
    };

    // Get total subTotal for the variant from completed or delivered orders
    const getVariantSubTotal = (variantId) => {
      const completedOrders = getSuccessfullOrders();
      const variantOrders = completedOrders.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.variant?._id === variantId),
      );
      return variantOrders.reduce((total, order) => {
        const item = order.orderedItems.find(
          (item1) => item1.variant?._id === variantId,
        );
        return total + (item?.variant?.subTotal || 0);
      }, 0);
    };

    return {
      getSuccessfullOrders,
      getTotalSoldItemsOfAProduct,
      getTotalSalesOfAProduct,
      getVariantTotalSold,
      getVariantSubTotal,
    };
  }, [allOrders]);

  return (
    <OrdersAnalyticsContext.Provider
      value={{ ordersAnalyticsValue, getAllOrders }}
    >
      {children}
    </OrdersAnalyticsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOrdersAnalytics = () => useContext(OrdersAnalyticsContext);
