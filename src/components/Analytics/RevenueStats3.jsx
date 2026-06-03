// src/components/Analytics/RevenueStats.jsx
import { useState, useMemo } from "react";
import { useData } from "../../context/DataContext";
import { IoIosArrowDown } from "../../components/SVG";
import {
  DollarSign,
  FaEye,
  TbCalendarDollar,
  TbCurrencyDollarOff,
} from "../../components/SVG";
import { MediumAnalyticsStatCard } from "../../components/Analytics/AnalyticsStatCards";
import {
  successfulOrderStatuses,
  pendingOrderStatuses,
  unsuccessfulOrderStatuses,
} from "../../data/orderLifeCycle";
import { LengthIsZeroError } from "../../components/LengthIsZeroError";
import {
  OrderIdBadge,
  PersonIdBadge,
  VariantBadge,
  ItemStatusBadge,
  OrderVariantAttributeBadege,
} from "../../components/Badges";
import { ImageDoubleExtraSmall } from "../../components/Image";
import { IconedEmail } from "../../components/IconedValue";
import { OrderPlacedUpdated } from "../../components/DateBoxed";
import { AmountFormat, AmountFormatSmall } from "../../components/AmountFormat";
import { TextNormal } from "../../components/Text";
import { PaymentStatusBadge } from "../../components/PaymentStatusBadge";
import { OrderStatusBadge } from "../../components/OrderStatusBadge";
import { dateFormatter } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { NoSomethingSmall } from "../../components/NoSomething";

export const RevenueStats3 = ({
  processOrderLifeCycleData,
  analyticsData,
  activeTab,
  onTabChange,
}) => {
  const [revenueStatsOpen, setRevenueStatsOpen] = useState(true);
  const [ordersLimit, setOrdersLimit] = useState(6);
  const count = 6;
  const { sumOrderQuantities, getAllAttributes } = useData();
  const attributes = getAllAttributes();

  const toggleRevenueStats = () => setRevenueStatsOpen(!revenueStatsOpen);

  // Pre-process data for each card
  const totalSalesData = processOrderLifeCycleData(
    successfulOrderStatuses,
    analyticsData,
  );

  const pendingSalesData = processOrderLifeCycleData(
    pendingOrderStatuses,
    analyticsData,
  );

  const cancellationsData = processOrderLifeCycleData(
    unsuccessfulOrderStatuses,
    analyticsData,
  );

  // Get the order data based on active tab
  const getOrderData = () => {
    switch (activeTab) {
      case "total-sales":
        return totalSalesData.ordersToProcess;
      case "pending-sales":
        return pendingSalesData.ordersToProcess;
      case "cancellations":
        return cancellationsData.ordersToProcess;
      default:
        return totalSalesData.ordersToProcess;
    }
  };

  const orderData = getOrderData();

  // Paginate the orders
  const displayedOrders = useMemo(() => {
    return orderData.slice(0, ordersLimit);
  }, [orderData, ordersLimit]);

  // Load more function
  const loadMore = () => {
    const newLimit = Math.min(ordersLimit + count, orderData.length);
    if (newLimit > ordersLimit) {
      setOrdersLimit(newLimit);
    }
  };

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
        <div
          className={`${revenueStatsOpen ? "h-full" : "h-15"} w-full p-3 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="flex relative items-center justify-between">
            <div className="flex">
              <h1 className="font-semibold text-md">Revenue Stats</h1>
            </div>

            <div className="flex gap-6 border-gray-300 items-center">
              <div
                className={`flex gap-4 ${revenueStatsOpen ? "opacity-100" : "opacity-40"} transition-all duration-300 ease-in-out`}
              >
                FILTER GOES HERE
              </div>

              <div className="flex">
                <button
                  onClick={toggleRevenueStats}
                  className={`flex ${revenueStatsOpen ? "bg-gray-200" : "bg-gray-100"} rounded px-1 py-1 hover:bg-gray-200 cursor-pointer`}
                >
                  <IoIosArrowDown
                    height={16}
                    width={16}
                    className={`${revenueStatsOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Tab buttons as stat cards */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 mt-4 cursor-pointer">
            <div onClick={() => onTabChange("total-sales")}>
              <MediumAnalyticsStatCard
                miniAnalyticsData={totalSalesData}
                boxTitle={"Total Sales"}
                boxStyle={`bg-green-300 border-green-500 ${
                  activeTab === "total-sales"
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : ""
                } transition-all duration-200`}
                icon={DollarSign}
                iconStyle={"bg-green-100 border-2 border-green-500"}
              />
            </div>

            <div onClick={() => onTabChange("pending-sales")}>
              <MediumAnalyticsStatCard
                miniAnalyticsData={pendingSalesData}
                boxTitle={"Pending Sales"}
                boxStyle={`bg-amber-300 border-amber-400 ${
                  activeTab === "pending-sales"
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : ""
                } transition-all duration-200`}
                icon={TbCalendarDollar}
                iconStyle={"bg-amber-100 border-2 border-amber-500"}
              />
            </div>

            <div onClick={() => onTabChange("cancellations")}>
              <MediumAnalyticsStatCard
                miniAnalyticsData={cancellationsData}
                boxTitle={"Cancellations"}
                boxStyle={`bg-red-300 border-red-400 ${
                  activeTab === "cancellations"
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : ""
                } transition-all duration-200`}
                icon={TbCurrencyDollarOff}
                iconStyle={"bg-red-100 border-2 border-red-500"}
              />
            </div>
          </div>
          {/* Tab buttons ends */}

          {/* Table Section */}
          <div className="flex w-full mt-6 border border-gray-200 rounded-md overflow-hidden">
            <div className="flex flex-col w-full">
              {/* Table header */}
              <div className="w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
                <div className="flex flex-col w-full overflow-hidden">
                  <div className="flex w-full justify-between">
                    <div className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm">
                      <div className="flex border-r border-gray-300 p-2 font-semibold">
                        Order Detail
                      </div>
                      <div className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full text-sm">
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Ordered Items
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Listed Price
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Qty
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Sub Total
                        </div>
                      </div>
                      <div className="grid grid-cols-[.4fr_1fr_1fr_1.4fr_1.8fr_.5fr] w-full text-sm">
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Less
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Shipping
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Overall Price
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Payment Status
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold">
                          Order Status
                        </div>
                        <div className="flex border-r border-gray-300 p-2 font-semibold"></div>
                      </div>
                    </div>
                    <div className="flex w-2 bg-blue-100"></div>
                  </div>
                </div>
              </div>
              {/* Table header ends */}

              {/* Table Body */}
              <div className="flex flex-col w-full">
                {displayedOrders.length === 0 ? (
                  <div className="flex items-center w-full h-[400px]">
                    <LengthIsZeroError
                      title="No data found"
                      message="No orders found for this category"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col w-full">
                    {displayedOrders.map((order, orderIndex) => {
                      const totalQuantity = sumOrderQuantities(
                        order.orderedItems,
                      );

                      return (
                        <div
                          key={order._id || orderIndex}
                          className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm hover:bg-gray-50 transition-colors"
                        >
                          {/* Grid 1 - Order Detail */}
                          <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                            <div className="flex flex-col items-start gap-2">
                              <div className="flex items-start">
                                <OrderIdBadge id={order._id} />
                              </div>
                              <div className="flex gap-2">
                                <ImageDoubleExtraSmall
                                  image={order.buyerInfo?.image}
                                  alt={
                                    order.buyerInfo?.buyerFirstName +
                                      " " +
                                      order.buyerInfo?.buyerLastName || "—"
                                  }
                                  type="circle"
                                />
                                <div className="flex flex-col items-start gap-1">
                                  <h1 className="font-semibold text-lg leading-tight">
                                    {order.buyerInfo?.buyerFirstName +
                                      " " +
                                      order.buyerInfo?.buyerLastName || "—"}
                                  </h1>
                                  <PersonIdBadge
                                    id={order.buyerInfo?.buyerId}
                                  />
                                  <IconedEmail data={order.buyerInfo?.email} />
                                  <OrderPlacedUpdated
                                    createdAt={order.createdAt}
                                    updatedAt={order.updatedAt}
                                  />
                                  <div className="flex text-sm leading-tight gap-2 mt-1">
                                    <div className="bg-gray-100 px-2 py-1 border border-gray-200 rounded-md">
                                      <span className="text-gray-500">
                                        Items:
                                      </span>{" "}
                                      <span className="font-semibold">
                                        {order.orderedItems?.length || 0}
                                      </span>
                                    </div>
                                    <div className="bg-gray-100 px-2 py-1 border border-gray-200 rounded-md">
                                      <span className="text-gray-500">
                                        Quantity:
                                      </span>{" "}
                                      <span className="font-semibold">
                                        {totalQuantity}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Grid 2 - Ordered Items */}
                          <div
                            className={`flex flex-col ${order.orderedItems?.length < 2 ? "border-b border-gray-300" : ""}`}
                          >
                            {order.orderedItems?.length === 0 ? (
                              <div className="flex h-full items-center justify-center">
                                <NoSomethingSmall text="No data found" />
                              </div>
                            ) : (
                              order.orderedItems.map(
                                (orderedItem, itemIndex) => {
                                  const displayName = [
                                    orderedItem.productName,
                                    ...(
                                      orderedItem.variant?.attributeOptions ||
                                      []
                                    ).map((option) => option.value),
                                  ].join(" | ");

                                  return (
                                    <div
                                      key={itemIndex}
                                      className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full h-full"
                                    >
                                      {/* Ordered Items box */}
                                      <div
                                        className={`flex items-start p-2 ${order.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                      >
                                        <div className="flex-col">
                                          <div className="flex gap-2">
                                            <VariantBadge
                                              id={orderedItem.variant?._id}
                                            />
                                            <ItemStatusBadge
                                              statusId={
                                                orderedItem.variant?.status
                                              }
                                            />
                                          </div>
                                          <div className="flex gap-2 mt-2">
                                            <ImageDoubleExtraSmall
                                              image={
                                                orderedItem.variant
                                                  ?.primaryImage
                                              }
                                              alt={orderedItem.productName}
                                              type="square"
                                            />
                                            <div className="flex flex-col">
                                              <h1 className="font-semibold text-md leading-tight">
                                                {displayName}
                                              </h1>
                                              <p className="leading-tight">
                                                SKU: {orderedItem.variant?.sku}
                                              </p>
                                              <div className="flex gap-2 mt-2">
                                                <div className="flex gap-2 text-xs text-gray-600">
                                                  {orderedItem.variant?.attributeOptions?.map(
                                                    (option, idx) => (
                                                      <OrderVariantAttributeBadege
                                                        key={idx}
                                                        option={option}
                                                        index={idx}
                                                        attributes={attributes}
                                                      />
                                                    ),
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listed price box */}
                                      <div
                                        className={`flex items-start p-2 ${order.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                      >
                                        <AmountFormatSmall
                                          amount={orderedItem.variant?.price}
                                        />
                                      </div>
                                      {/* Quantity box */}
                                      <div
                                        className={`flex items-start p-2 ${order.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                      >
                                        <TextNormal
                                          text={orderedItem.variant?.quantity}
                                        />
                                      </div>
                                      {/* Sub total box */}
                                      <div
                                        className={`flex items-start p-2 ${order.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                      >
                                        <AmountFormat
                                          amount={orderedItem.variant?.subTotal}
                                        />
                                      </div>
                                    </div>
                                  );
                                },
                              )
                            )}
                          </div>

                          {/* Grid 3 - Summary and Actions */}
                          <div className="grid grid-cols-[.4fr_1fr_1fr_1.4fr_1.8fr_.5fr] w-full">
                            {/* Discount box */}
                            <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                              <TextNormal text={order.summary?.discount || 0} />
                            </div>
                            {/* Shipping fee box */}
                            <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                              <AmountFormatSmall
                                amount={order.summary?.shippingFee || 0}
                              />
                            </div>
                            {/* Overall price box */}
                            <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                              <AmountFormat
                                amount={order.summary?.orderTotalPrice || 0}
                              />
                            </div>
                            {/* Payment status box */}
                            <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                              <PaymentStatusBadge status={order.paymentInfo} />
                            </div>
                            {/* Order status box */}
                            <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                              <div className="flex flex-col gap-1">
                                <OrderStatusBadge
                                  status={order.currentStatus?.slug}
                                />
                                <p className="text-[13px] leading-tight">
                                  {dateFormatter(
                                    order.currentStatus?.timestamp,
                                  )}
                                </p>
                              </div>
                            </div>
                            {/* View button */}
                            <div className="flex items-start p-2 border-b border-gray-300 h-full">
                              <div className="flex items-start">
                                <Link
                                  to={`/orders/${order._id}`}
                                  state={{
                                    backUrl:
                                      location.pathname +
                                      location.search +
                                      location.hash,
                                  }}
                                  className="cursor-pointer outline-0 text-gray-400 hover:text-gray-500 transition-all ease-in-out"
                                >
                                  <FaEye height={16} width={16} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Load More button */}
                {orderData.length > 0 && ordersLimit < orderData.length && (
                  <div className="flex items-center justify-center p-4">
                    <button
                      onClick={loadMore}
                      className="px-3 py-1 border border-gray-400 bg-gray-100 text-sm text-gray-500 rounded cursor-pointer hover:border-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-transform duration-200 ease-out"
                    >
                      Load more
                    </button>
                  </div>
                )}

                {/* Table footer with summary */}
                {displayedOrders.length > 0 && (
                  <div className="bg-gray-50 border-t border-gray-200 p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Showing {displayedOrders.length} of {orderData.length}{" "}
                        {orderData.length === 1 ? "order" : "orders"}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        Total Value:{" "}
                        {formatCurrency(
                          displayedOrders.reduce(
                            (sum, order) =>
                              sum + (order.summary?.orderTotalPrice || 0),
                            0,
                          ),
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
