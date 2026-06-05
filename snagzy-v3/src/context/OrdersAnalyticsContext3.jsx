import { createContext, useContext, useMemo } from "react";
import { orders } from "../data/orders.js";

const OrdersAnalyticsContext3 = createContext();

export const OrdersAnalyticsProvider3 = ({ children }) => {
  const getAllOrders = () => {
    return orders;
  };
  const allOrders = getAllOrders();

  const ordersAnalyticsValue = useMemo(() => {
    // Status constants
    const ORDER_COMPLETED_STATUSES = ["completed", "delivered"];
    const ORDER_PENDING_STATUSES = [
      "order_placed",
      "payment_pending",
      "payment_confirmed",
      "processing",
      "packed",
      "shipped",
      "out_for_delivery",
      "delivery_failed",
      "attempted_delivery",
    ];
    const ORDER_NOT_SUCCESS_STATUSES = [
      "cancelled_by_buyer",
      "cancelled_by_seller",
      "return_request",
      "order_returned",
      "refund_success",
    ];

    // ============= HELPER FUNCTIONS =============

    /**
     * Generic filter function to reduce code duplication
     * @param {Array} orderData - Optional custom order array
     * @param {Array} statuses - Array of status slugs to filter by
     * @returns {Array} Filtered orders
     */
    const filterOrdersByStatuses = (orderData, statuses) => {
      const ordersToFilter = orderData || allOrders;
      return ordersToFilter.filter(
        (order) =>
          order.currentStatus && statuses.includes(order.currentStatus.slug),
      );
    };

    // ============= MAIN ORDER FILTERS =============

    /**
     * Get all successful orders (delivered/completed)
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Array} Filtered orders
     */
    const getSuccessfullOrders = (orderData) => {
      return filterOrdersByStatuses(orderData, ORDER_COMPLETED_STATUSES);
    };

    /**
     * Get all pending orders
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Array} Filtered orders
     */
    const getPendingOrders = (orderData) => {
      return filterOrdersByStatuses(orderData, ORDER_PENDING_STATUSES);
    };

    /**
     * Get all unsuccessful/cancelled orders
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Array} Filtered orders
     */
    const getUnSuccessfullOrders = (orderData) => {
      return filterOrdersByStatuses(orderData, ORDER_NOT_SUCCESS_STATUSES);
    };

    // ============= PRODUCT-SPECIFIC FUNCTIONS =============

    /**
     * Get all successful orders containing a specific product
     * @param {string} productId - Product ID to filter by
     * @returns {Array} Filtered orders
     */
    const getSuccessfullOrdersOfAProduct = (productId) => {
      const successfullOrders = getSuccessfullOrders();
      return successfullOrders.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.productId === productId),
      );
    };

    /**
     * Get all pending orders containing a specific product
     * @param {string} productId - Product ID to filter by
     * @returns {Array} Filtered orders
     */
    const getPendingOrdersOfAProduct = (productId) => {
      const pendingOrders = getPendingOrders();
      return pendingOrders.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.productId === productId),
      );
    };

    /**
     * Get all unsuccessful orders containing a specific product
     * @param {string} productId - Product ID to filter by
     * @returns {Array} Filtered orders
     */
    const getUnsuccessfulOrdersOfAProduct = (productId) => {
      const unsuccessfulOrders = getUnSuccessfullOrders();
      return unsuccessfulOrders.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.productId === productId),
      );
    };

    /**
     * Get total sold items count for a product
     * @param {string} productId - Product ID
     * @param {Array} [orderObject] - Optional custom order array
     * @returns {number} Total sold items
     */
    const getTotalSoldItemsOfAProduct = (productId, orderObject) => {
      const ordersToUse = orderObject || getSuccessfullOrders();

      const productOrders = ordersToUse.filter(
        (order) =>
          order.orderedItems &&
          order.orderedItems.some((item) => item.productId === productId),
      );

      return productOrders.reduce((total, order) => {
        return (
          total +
          order.orderedItems
            .filter((item) => item.productId === productId)
            .reduce((sum, item) => sum + (item.variant?.quantity || 0), 0)
        );
      }, 0);
    };

    /**
     * Get total sales amount for a product
     * @param {string} productId - Product ID
     * @param {Array} [orderObject] - Optional custom order array
     * @returns {number} Total sales amount
     */
    const getTotalSalesOfAProduct = (productId, orderObject) => {
      const ordersToUse = orderObject || getSuccessfullOrders();

      const productOrders = ordersToUse.filter(
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

    /**
     * Get product performance metrics (sold, revenue, conversion rate)
     * @param {string} productId - Product ID
     * @returns {Object} Product performance data
     */
    const getProductPerformance = (productId) => {
      const successfulOrders = getSuccessfullOrders();
      const pendingOrders = getPendingOrders();
      const unsuccessfulOrders = getUnSuccessfullOrders();

      const totalSold = getTotalSoldItemsOfAProduct(
        productId,
        successfulOrders,
      );
      const totalRevenue = getTotalSalesOfAProduct(productId, successfulOrders);

      // Calculate conversion rate for this product
      const productAppearances = allOrders.filter((order) =>
        order.orderedItems?.some((item) => item.productId === productId),
      ).length;

      const conversionRate =
        productAppearances > 0
          ? (successfulOrders.filter((order) =>
              order.orderedItems?.some((item) => item.productId === productId),
            ).length /
              productAppearances) *
            100
          : 0;

      return {
        totalSold,
        totalRevenue,
        conversionRate: conversionRate.toFixed(2),
        pendingOrders: getPendingOrdersOfAProduct(productId).length,
        cancelledOrders: getUnsuccessfulOrdersOfAProduct(productId).length,
      };
    };

    // ============= VARIANT-SPECIFIC FUNCTIONS =============

    /**
     * Get total quantity sold for a variant
     * @param {string} variantId - Variant ID
     * @param {Array} [orderObject] - Optional custom order array
     * @returns {number} Total quantity sold
     */
    const getOrderSubTotalCountOfAVariant = (variantId, orderObject) => {
      const ordersToUse = orderObject || getSuccessfullOrders();

      const variantOrders = ordersToUse.filter(
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

    /**
     * Get total subtotal amount for a variant
     * @param {string} variantId - Variant ID
     * @param {Array} [orderObject] - Optional custom order array
     * @returns {number} Total subtotal amount
     */
    const getOrderSubTotalOfAVariant = (variantId, orderObject) => {
      const ordersToUse = orderObject || getSuccessfullOrders();

      const variantOrders = ordersToUse.filter(
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

    // ============= CUSTOMER-SPECIFIC FUNCTIONS =============

    /**
     * Get total purchase amount from orders
     * @param {Array} orderData - Orders to sum
     * @returns {number} Total purchase amount
     */
    const getTotalPurchase = (orderData) => {
      return orderData.reduce((sum, order) => {
        const raw = order?.summary?.orderTotalPrice;
        const price = Number(raw || 0);
        return sum + (isNaN(price) ? 0 : price);
      }, 0);
    };

    /**
     * Get successful purchase total for a user
     * @param {Array} ordersByThisPerson - User's orders
     * @returns {string} Formatted total
     */
    const getSuccessfullPurchaseTotal = (ordersByThisPerson) => {
      const successfullOrdersByThisPerson =
        getSuccessfullOrders(ordersByThisPerson);
      const successfullPurchaseAmount = getTotalPurchase(
        successfullOrdersByThisPerson,
      );
      return successfullPurchaseAmount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };

    /**
     * Get pending purchase total for a user
     * @param {Array} ordersByThisPerson - User's orders
     * @returns {number} Pending purchase amount
     */
    const getPendingPurchaseTotal = (ordersByThisPerson) => {
      const allPurchase = getTotalPurchase(ordersByThisPerson);
      const successfullPurchase = Number(
        getSuccessfullPurchaseTotal(ordersByThisPerson),
      );

      // Pending = all orders - successful orders
      const pending = allPurchase - successfullPurchase;
      return Math.abs(pending);
    };

    /**
     * Get top customers by purchase amount
     * @param {number} [limit=10] - Number of customers to return
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Array} Top customers
     */
    const getTopCustomers = (limit = 10, orderData) => {
      const ordersToUse = orderData || getSuccessfullOrders();
      const customerSpending = {};

      ordersToUse.forEach((order) => {
        const customerId = order.buyerInfo?.buyerId;
        const amount = order.summary?.orderTotalPrice || 0;

        if (customerId) {
          if (!customerSpending[customerId]) {
            customerSpending[customerId] = {
              id: customerId,
              name: `${order.buyerInfo?.buyerFirstName || ""} ${order.buyerInfo?.buyerLastName || ""}`.trim(),
              email: order.buyerInfo?.email,
              totalSpent: 0,
              orderCount: 0,
            };
          }
          customerSpending[customerId].totalSpent += amount;
          customerSpending[customerId].orderCount += 1;
        }
      });

      return Object.values(customerSpending)
        .sort((a, b) => b.totalSpent - a.totalSpent)
        .slice(0, limit);
    };

    // ============= REVENUE & FINANCIAL FUNCTIONS =============

    /**
     * Get total revenue from successful orders
     * @param {Array} [orderData] - Optional custom order array
     * @returns {number} Total revenue
     */
    const getTotalRevenue = (orderData) => {
      const ordersToUse = orderData || getSuccessfullOrders();
      return getTotalPurchase(ordersToUse);
    };

    // ============= DATE & TIME FUNCTIONS =============

    /**
     * Get orders within a date range
     * @param {Date} startDate - Start date
     * @param {Date} endDate - End date
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Array} Filtered orders
     */
    const getOrdersByDateRange = (startDate, endDate, orderData) => {
      const ordersToUse = orderData || allOrders;
      return ordersToUse.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return orderDate >= startDate && orderDate <= endDate;
      });
    };

    /**
     * Get monthly revenue breakdown for a year
     * @param {number} year - Year to analyze
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Array} Array of 12 monthly revenue values
     */
    const getMonthlyRevenue = (year, orderData) => {
      const ordersToUse = orderData || getSuccessfullOrders();
      const monthlyData = Array(12).fill(0);

      ordersToUse.forEach((order) => {
        const orderDate = new Date(order.createdAt);
        if (orderDate.getFullYear() === year) {
          const month = orderDate.getMonth();
          monthlyData[month] += order.summary?.orderTotalPrice || 0;
        }
      });

      return monthlyData;
    };

    /**
     * Get monthly order count breakdown for a year
     * @param {number} year - Year to analyze
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Array} Array of 12 monthly order counts
     */
    const getOrderCountsByMonth = (year, orderData) => {
      const ordersToUse = orderData || getSuccessfullOrders();
      const monthlyData = Array(12).fill(0);

      ordersToUse.forEach((order) => {
        const orderDate = new Date(order.createdAt);
        if (orderDate.getFullYear() === year) {
          const month = orderDate.getMonth();
          monthlyData[month] += 1;
        }
      });

      return monthlyData;
    };

    // ============= STATUS & DISTRIBUTION FUNCTIONS =============

    /**
     * Get order counts grouped by status
     * @param {Array} [orderData] - Optional custom order array
     * @returns {Object} Status counts
     */
    const getOrderCountsByStatus = (orderData) => {
      const ordersToUse = orderData || allOrders;
      const counts = {};

      ordersToUse.forEach((order) => {
        const status = order.currentStatus?.slug || "unknown";
        counts[status] = (counts[status] || 0) + 1;
      });

      return counts;
    };

    /**
     * Get revenue breakdown by status
     * @returns {Object} Revenue by status
     */
    const getRevenueByStatus = () => {
      return {
        completed: getTotalRevenue(getSuccessfullOrders()),
        pending: getTotalPurchase(getPendingOrders()),
        cancelled: getTotalPurchase(getUnSuccessfullOrders()),
      };
    };

    // ============= DASHBOARD AGGREGATION =============

    /**
     * Get comprehensive dashboard analytics data
     * @returns {Object} Dashboard analytics
     */
    const getDashboardAnalytics = () => {
      const successfulOrders = getSuccessfullOrders();
      const pendingOrders = getPendingOrders();
      const unsuccessfulOrders = getUnSuccessfullOrders();

      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      const thisMonthOrders = successfulOrders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate.getMonth() === currentMonth &&
          orderDate.getFullYear() === currentYear
        );
      });

      const totalRevenue = getTotalRevenue();
      const totalOrders = allOrders.length;
      const completedOrders = successfulOrders.length;

      return {
        summary: {
          totalRevenue,
          totalOrders,
          completedOrders,
          pendingOrders: pendingOrders.length,
          cancelledOrders: unsuccessfulOrders.length,
          completionRate:
            totalOrders > 0 ? (completedOrders / totalOrders) * 100 : 0,
          averageOrderValue:
            completedOrders > 0 ? totalRevenue / completedOrders : 0,
        },
        monthly: {
          revenue: getMonthlyRevenue(currentYear),
          orders: getOrderCountsByMonth(currentYear),
        },
        thisMonth: {
          revenue: getTotalRevenue(thisMonthOrders),
          orders: thisMonthOrders.length,
        },
        topCustomers: getTopCustomers(5),
        statusBreakdown: getOrderCountsByStatus(),
        revenueByStatus: getRevenueByStatus(),
      };
    };

    // ============= STORE-SPECIFIC FUNCTIONS =============

    /**
     * Get revenue by store
     * @returns {Object} Store revenue data
     */
    const getRevenueByStore = () => {
      const successfulOrders = getSuccessfullOrders();
      const storeRevenue = {};

      successfulOrders.forEach((order) => {
        order.orderedItems.forEach((item) => {
          const storeId = item.variant?.storeInfo?.storeId;
          const storeName = item.variant?.storeInfo?.storeName;
          const amount = item.variant?.subTotal || 0;

          if (storeId) {
            if (!storeRevenue[storeId]) {
              storeRevenue[storeId] = {
                id: storeId,
                name: storeName,
                revenue: 0,
                orderCount: 0,
              };
            }
            storeRevenue[storeId].revenue += amount;
            storeRevenue[storeId].orderCount += 1;
          }
        });
      });

      return Object.values(storeRevenue).sort((a, b) => b.revenue - a.revenue);
    };

    // Return all functions
    return {
      // Main filters
      getSuccessfullOrders,
      getPendingOrders,
      getUnSuccessfullOrders,

      // Product-specific
      getSuccessfullOrdersOfAProduct,
      getPendingOrdersOfAProduct,
      getUnsuccessfulOrdersOfAProduct,
      getTotalSoldItemsOfAProduct,
      getTotalSalesOfAProduct,
      getProductPerformance,

      // Variant-specific
      getOrderSubTotalCountOfAVariant,
      getOrderSubTotalOfAVariant,

      // Customer-specific
      getTotalPurchase,
      getSuccessfullPurchaseTotal,
      getPendingPurchaseTotal,
      getTopCustomers,

      // Revenue & financial
      getTotalRevenue,

      // Date & time
      getOrdersByDateRange,
      getMonthlyRevenue,
      getOrderCountsByMonth,

      // Status & distribution
      getOrderCountsByStatus,
      getRevenueByStatus,

      // Store-specific
      getRevenueByStore,

      // Dashboard aggregation
      getDashboardAnalytics,
    };
  }, [allOrders]);

  return (
    <OrdersAnalyticsContext3.Provider
      value={{ ordersAnalyticsValue, getAllOrders }}
    >
      {children}
    </OrdersAnalyticsContext3.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOrdersAnalytics = () => useContext(OrdersAnalyticsContext3);
