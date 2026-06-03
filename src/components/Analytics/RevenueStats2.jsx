import { useState, useMemo } from "react";
import {
  successfulOrderStatuses,
  pendingOrderStatuses,
  unsuccessfulOrderStatuses,
} from "../../data/orderLifeCycle";
import {
  DollarSign,
  FaEye,
  IoIosArrowDown,
  TbCalendarDollar,
  TbCurrencyDollarOff,
} from "../SVG";
import { MediumAnalyticsStatCard } from "./AnalyticsStatCards";
import { LengthIsZeroError } from "../LengthIsZeroError";
import {
  ItemStatusBadge,
  OrderIdBadge,
  OrderVariantAttributeBadege,
  PersonIdBadge,
  VariantBadge,
} from "../Badges";
import { ImageDoubleExtraSmall } from "../Image";
import { IconedEmail } from "../IconedValue";
import { OrderPlacedUpdated } from "../DateBoxed";
import { useData } from "../../context/DataContext";
import { AmountFormat, AmountFormatSmall } from "../AmountFormat";
import { TextNormal } from "../Text";
import { PaymentStatusBadge } from "../PaymentStatusBadge";
import { OrderStatusBadge } from "../OrderStatusBadge";
import { dateFormatter } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { NoSomethingSmall } from "../NoSomething";

export const RevenueStats2 = ({ analyticsData, processOrderLifeCycleData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTable, setActiveTable] = useState("total_sales"); // 'total_sales', 'pending_sales', 'cancellations'
  const [ordersLimit, setOrdersLimit] = useState(6); // Start with 6 orders

  const count = 6; // Constant for number of orders to show per load
  const { sumOrderQuantities, getAllAttributes } = useData();
  const attributes = getAllAttributes();

  const toggleOpen = () => setIsOpen(!isOpen);

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

  // Get the current active data based on selected tab
  const getActiveData = () => {
    switch (activeTable) {
      case "total_sales":
        return totalSalesData;
      case "pending_sales":
        return pendingSalesData;
      case "cancellations":
        return cancellationsData;
      default:
        return totalSalesData;
    }
  };

  const activeData = getActiveData();
  const allOrders = activeData.ordersToProcess || [];

  // Paginate the orders based on ordersLimit
  const displayedOrders = useMemo(() => {
    return allOrders.slice(0, ordersLimit);
  }, [allOrders, ordersLimit]);

  // Function to handle card click
  const handleCardClick = (type) => {
    if (type === activeTable) return; // Don't do anything if clicking the same tab
    setActiveTable(type);
    setOrdersLimit(count); // Reset pagination when changing tabs
  };

  // Load more function
  const loadMore = () => {
    const newLimit = Math.min(ordersLimit + count, allOrders.length);
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
          className={`${isOpen ? "h-full" : "h-15"} w-full p-3 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="flex relative items-center justify-between">
            <div className="flex">
              <h1 className="font-semibold text-md">Revenue Stats</h1>
            </div>

            <div className="flex gap-6 border-gray-300 items-center">
              {/* Results count */}
              <div className="flex items-center">
                <span className="text-sm text-gray-500">
                  Showing {displayedOrders.length} of {allOrders.length} orders
                </span>
              </div>

              {/* Revenue stats collapse button */}
              <div className="flex">
                <button
                  onClick={toggleOpen}
                  className={`flex ${isOpen ? "bg-gray-200" : "bg-gray-100"} rounded px-1 py-1 hover:bg-gray-200 cursor-pointer`}
                >
                  <IoIosArrowDown
                    height={16}
                    width={16}
                    className={`${isOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Analytics boxes - made clickable */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div
              onClick={() => handleCardClick("total_sales")}
              className={`cursor-pointer transition-all duration-200 ${
                activeTable === "total_sales"
                  ? "ring-2 ring-green-500 ring-offset-2 rounded-xl"
                  : "hover:scale-105"
              }`}
            >
              <MediumAnalyticsStatCard
                miniAnalyticsData={totalSalesData}
                boxTitle={"Total Sales"}
                boxStyle={"bg-green-300 border-green-500"}
                icon={DollarSign}
                iconStyle={"bg-green-100 border-2 border-green-500"}
              />
            </div>

            <div
              onClick={() => handleCardClick("pending_sales")}
              className={`cursor-pointer transition-all duration-200 ${
                activeTable === "pending_sales"
                  ? "ring-2 ring-amber-500 ring-offset-2 rounded-xl"
                  : "hover:scale-105"
              }`}
            >
              <MediumAnalyticsStatCard
                miniAnalyticsData={pendingSalesData}
                boxTitle={"Pending Sales"}
                boxStyle={"bg-amber-300 border-amber-400"}
                icon={TbCalendarDollar}
                iconStyle={"bg-amber-100 border-2 border-amber-500"}
              />
            </div>

            <div
              onClick={() => handleCardClick("cancellations")}
              className={`cursor-pointer transition-all duration-200 ${
                activeTable === "cancellations"
                  ? "ring-2 ring-red-500 ring-offset-2 rounded-xl"
                  : "hover:scale-105"
              }`}
            >
              <MediumAnalyticsStatCard
                miniAnalyticsData={cancellationsData}
                boxTitle={"Cancellations"}
                boxStyle={"bg-red-300 border-red-400"}
                icon={TbCurrencyDollarOff}
                iconStyle={"bg-red-100 border-2 border-red-500"}
              />
            </div>
          </div>

          {/* Table section */}
          <div className="flex w-full mt-2 border border-gray-200 rounded-md overflow-hidden">
            <div className="flex flex-col w-full">
              {/* Table header */}
              <div className="w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
                <div className="flex flex-col w-full overflow-hidden">
                  <div className="flex w-full justify-between">
                    <div className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm">
                      <div className="flex border-r border-gray-300 p-1 font-semibold">
                        Order Detail
                      </div>
                      <div className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full text-sm">
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Ordered Items
                        </div>
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Listed Price
                        </div>
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Qty
                        </div>
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Sub Total
                        </div>
                      </div>
                      <div className="grid grid-cols-[.4fr_1fr_1fr_1.4fr_1.8fr_.5fr] w-full text-sm">
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Less
                        </div>
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Shipping
                        </div>
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Overall Price
                        </div>
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Payment Status
                        </div>
                        <div className="flex border-r border-gray-300 p-1 font-semibold">
                          Order Status
                        </div>
                        <div className="flex border-r border-gray-300 p-1"></div>
                      </div>
                    </div>
                    <div className="flex w-2 bg-blue-100"></div>
                  </div>
                </div>
              </div>

              {/* List area */}
              <div className="flex w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
                <div className="flex flex-col w-full">
                  {displayedOrders.length === 0 ? (
                    <div className="flex items-center w-full h-[400px]">
                      <LengthIsZeroError
                        title="No data found"
                        message="Click on a card above to view order details"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col w-full">
                      {displayedOrders.map(
                        (displayedOrder, displayedOrderIndex) => {
                          const totalQuantity = sumOrderQuantities(
                            displayedOrder.orderedItems,
                          );

                          return (
                            <div
                              key={displayedOrder._id || displayedOrderIndex}
                              className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm hover:bg-gray-50 transition-colors"
                            >
                              {/* Grid 1 - Order Detail */}
                              <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                                <div className="flex flex-col items-start gap-2">
                                  <div className="flex items-start">
                                    <OrderIdBadge id={displayedOrder._id} />
                                  </div>
                                  <div className="flex gap-2">
                                    <ImageDoubleExtraSmall
                                      image={displayedOrder.buyerInfo?.image}
                                      alt={
                                        displayedOrder.buyerInfo
                                          ?.buyerFirstName +
                                          " " +
                                          displayedOrder.buyerInfo
                                            ?.buyerLastName || "—"
                                      }
                                      type="circle"
                                    />
                                    <div className="flex flex-col items-start gap-1">
                                      <h1 className="font-semibold text-lg leading-tight">
                                        {displayedOrder.buyerInfo
                                          ?.buyerFirstName +
                                          " " +
                                          displayedOrder.buyerInfo
                                            ?.buyerLastName || "—"}
                                      </h1>
                                      <PersonIdBadge
                                        id={displayedOrder.buyerInfo?.buyerId}
                                      />
                                      <IconedEmail
                                        data={displayedOrder.buyerInfo?.email}
                                      />
                                      <OrderPlacedUpdated
                                        createdAt={displayedOrder.createdAt}
                                        updatedAt={displayedOrder.updatedAt}
                                      />
                                      <div className="flex text-sm leading-tight gap-2 mt-1">
                                        <div className="bg-gray-100 px-2 py-1 border border-gray-200 rounded-md">
                                          <span className="text-gray-500">
                                            Items:
                                          </span>{" "}
                                          <span className="font-semibold">
                                            {displayedOrder.orderedItems
                                              ?.length || 0}
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
                                className={`flex flex-col ${displayedOrder.orderedItems?.length < 2 ? "border-b border-gray-300" : ""}`}
                              >
                                {displayedOrder.orderedItems?.length === 0 ? (
                                  <div className="flex h-full items-center justify-center">
                                    <NoSomethingSmall text="No data found" />
                                  </div>
                                ) : (
                                  displayedOrder.orderedItems.map(
                                    (orderedItem, orderedItemIndex) => {
                                      const displayName = [
                                        orderedItem.productName,
                                        ...(
                                          orderedItem.variant
                                            ?.attributeOptions || []
                                        ).map((option) => option.value),
                                      ].join(" | ");

                                      return (
                                        <div
                                          key={orderedItemIndex}
                                          className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full h-full"
                                        >
                                          {/* Ordered Items box */}
                                          <div
                                            className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
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
                                                    SKU:{" "}
                                                    {orderedItem.variant?.sku}
                                                  </p>
                                                  <div className="flex gap-2 mt-2">
                                                    <div className="flex gap-2 text-xs text-gray-600">
                                                      {orderedItem.variant?.attributeOptions?.map(
                                                        (option, index) => (
                                                          <OrderVariantAttributeBadege
                                                            key={index}
                                                            option={option}
                                                            index={index}
                                                            attributes={
                                                              attributes
                                                            }
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
                                            className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                          >
                                            <AmountFormatSmall
                                              amount={
                                                orderedItem.variant?.price
                                              }
                                            />
                                          </div>
                                          {/* Quantity box */}
                                          <div
                                            className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                          >
                                            <TextNormal
                                              text={
                                                orderedItem.variant?.quantity
                                              }
                                            />
                                          </div>
                                          {/* Sub total box */}
                                          <div
                                            className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                          >
                                            <AmountFormat
                                              amount={
                                                orderedItem.variant?.subTotal
                                              }
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
                                  <TextNormal
                                    text={displayedOrder.summary?.discount || 0}
                                  />
                                </div>
                                {/* Shipping fee box */}
                                <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                                  <AmountFormatSmall
                                    amount={
                                      displayedOrder.summary?.shippingFee || 0
                                    }
                                  />
                                </div>
                                {/* Overall price box */}
                                <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                                  <AmountFormat
                                    amount={
                                      displayedOrder.summary?.orderTotalPrice ||
                                      0
                                    }
                                  />
                                </div>
                                {/* Payment status box */}
                                <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                                  <PaymentStatusBadge
                                    status={displayedOrder.paymentInfo}
                                  />
                                </div>
                                {/* Order status box */}
                                <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                                  <div className="flex flex-col gap-1">
                                    <OrderStatusBadge
                                      status={
                                        displayedOrder.currentStatus?.slug
                                      }
                                    />
                                    <p className="text-[13px] leading-tight">
                                      {dateFormatter(
                                        displayedOrder.currentStatus?.timestamp,
                                      )}
                                    </p>
                                  </div>
                                </div>
                                {/* View button */}
                                <div className="flex items-start p-2 border-b border-gray-300 h-full">
                                  <div className="flex items-start">
                                    <Link
                                      to={`/orders/${displayedOrder._id}`}
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
                        },
                      )}
                    </div>
                  )}

                  {/* Load More button */}
                  {allOrders.length > 0 && ordersLimit < allOrders.length && (
                    <div className="flex items-center justify-center p-4">
                      <button
                        onClick={loadMore}
                        className="px-3 py-1 border border-gray-400 bg-gray-100 text-sm text-gray-500 rounded cursor-pointer hover:border-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-transform duration-200 ease-out"
                      >
                        Load more
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Table footer with summary */}
              {displayedOrders.length > 0 && (
                <div className="bg-gray-50 border-t border-gray-200 p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Showing {displayedOrders.length} of {allOrders.length}{" "}
                      {allOrders.length === 1 ? "order" : "orders"}
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
  );
};
