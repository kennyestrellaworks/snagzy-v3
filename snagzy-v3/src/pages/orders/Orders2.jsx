import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { useData } from "../../context/DataContext";
import { Link, useSearchParams } from "react-router-dom";
import { LengthIsZeroError } from "../../components/LengthIsZeroError";
import { NoSomethingSmall } from "../../components/NoSomething";
import {
  ItemStatusBadge,
  OrderIdBadge,
  OrderVariantAttributeBadege,
  PersonIdBadge,
  VariantBadge,
} from "../../components/Badges";
import { OrderPlacedUpdated } from "../../components/DateBoxed";
import { ImageDoubleExtraSmall } from "../../components/Image";
import { IconedEmail } from "../../components/IconedValue";
import { AmountFormat, AmountFormatSmall } from "../../components/AmountFormat";
import { TextNormal } from "../../components/Text";
import { PaymentStatusBadge } from "../../components/PaymentStatusBadge";
import { OrderStatusBadge } from "../../components/OrderStatusBadge";
import { FaEye, IoIosArrowDown } from "../../components/SVG";
import { dateFormatter } from "../../utils/helpers";
import { MiniAnalyticsBox } from "../../components/Analytics/MiniAnalyticsBox";
import {
  successfulOrderStatuses,
  statusCompleted,
  statusDelivered,
  statusOrderPlaced,
  statusPaymentPending,
  statusPaymentConfirmed,
  statusProcessing,
  statusPacked,
  statusShipped,
  statusOutForDelivery,
  statusCancelledByBuyer,
  statusCancelledBySeller,
  statusDeliveryFailed,
  statusAttemptedDelivery,
  statusReturnRequest,
  statusOrderReturned,
  statusRefundSuccess,
} from "../../data/orderLifeCycle";

export const Orders2 = () => {
  const [productSummaryOpen, setProductSummaryOpen] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { getAllOrders, getAllAttributes, sumOrderQuantities } = useData();

  const orders = getAllOrders();
  const attributes = getAllAttributes();

  const count = 6;

  // Get values from URL params
  const urlYear = searchParams.get("year");
  const urlMonth = searchParams.get("month");
  const urlOrders = parseInt(searchParams.get("orders") || "0");

  // Initialize state from URL params
  const [selectedYear, setSelectedYear] = useState(urlYear || "all");
  const [selectedMonth, setSelectedMonth] = useState(urlMonth || "all");
  const [ordersParams, setOrdersParams] = useState(urlOrders || count);

  // Track if initial load is done to prevent reset loops
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Get available years and months based on actual data
  const { availableYears, availableMonthsByYear } = useMemo(() => {
    if (!orders || orders.length === 0) {
      return { availableYears: [], availableMonthsByYear: {} };
    }

    const yearsMap = new Map();
    const monthsMap = {};

    orders.forEach((order) => {
      const date = new Date(order.currentStatus.timestamp);
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthName = date.toLocaleString("default", { month: "long" });

      if (!yearsMap.has(year)) {
        yearsMap.set(year, true);
      }

      if (!monthsMap[year]) {
        monthsMap[year] = new Map();
      }
      if (!monthsMap[year].has(month)) {
        monthsMap[year].set(month, monthName);
      }
    });

    const sortedYears = Array.from(yearsMap.keys()).sort((a, b) => b - a);

    const sortedMonthsByYear = {};
    for (const year in monthsMap) {
      sortedMonthsByYear[year] = Array.from(monthsMap[year].entries())
        .sort((a, b) => b[0] - a[0])
        .map(([monthNum, monthName]) => ({
          value: monthNum.toString(),
          label: monthName,
          monthNumber: monthNum,
        }));
    }

    return {
      availableYears: sortedYears,
      availableMonthsByYear: sortedMonthsByYear,
    };
  }, [orders]);

  // Filter orders based on selected year and month
  const filteredOrders = useMemo(() => {
    if (!orders || orders.length === 0) return [];

    let result = [...orders];

    if (selectedYear !== "all") {
      result = result.filter((order) => {
        const date = new Date(order.currentStatus.timestamp);
        return date.getFullYear() === parseInt(selectedYear);
      });
    }

    if (selectedMonth !== "all") {
      result = result.filter((order) => {
        const date = new Date(order.currentStatus.timestamp);
        return date.getMonth() === parseInt(selectedMonth);
      });
    }

    result.sort(
      (a, b) =>
        new Date(b.currentStatus.timestamp) -
        new Date(a.currentStatus.timestamp),
    );

    return result;
  }, [orders, selectedYear, selectedMonth]);

  const displayedOrders = useMemo(() => {
    return filteredOrders.slice(0, ordersParams);
  }, [filteredOrders, ordersParams]);

  // Get available months for the currently selected year
  const currentAvailableMonths = useMemo(() => {
    if (selectedYear === "all") {
      // When "All Years" is selected, show all months that exist across any year
      const allMonthsMap = new Map();
      orders?.forEach((order) => {
        const date = new Date(order.currentStatus.timestamp);
        const month = date.getMonth();
        const monthName = date.toLocaleString("default", { month: "long" });
        if (!allMonthsMap.has(month)) {
          allMonthsMap.set(month, monthName);
        }
      });
      return Array.from(allMonthsMap.entries())
        .sort((a, b) => b[0] - a[0])
        .map(([monthNum, monthName]) => ({
          value: monthNum.toString(),
          label: monthName,
          monthNumber: monthNum,
        }));
    }
    // When a specific year is selected, show only months with orders in that year
    return availableMonthsByYear[selectedYear] || [];
  }, [selectedYear, availableMonthsByYear, orders]);

  // Reset month to "all" when year changes
  useEffect(() => {
    if (!isInitialLoad && selectedYear !== "all") {
      setSelectedMonth("all");
    }
  }, [selectedYear]);

  // Determine if filters are active
  const isFiltersActive = selectedYear !== "all" || selectedMonth !== "all";

  // Choose which data to pass to analytics boxes
  const analyticsData = isFiltersActive ? filteredOrders : orders;

  // Update URL when filters or pagination change
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedYear && selectedYear !== "all") {
      params.set("year", selectedYear);
    }

    if (selectedMonth && selectedMonth !== "all") {
      params.set("month", selectedMonth);
    }

    if (ordersParams && ordersParams !== count) {
      params.set("orders", ordersParams.toString());
    }

    // Only update URL if params are different from current
    const currentParams = searchParams.toString();
    const newParams = params.toString();

    if (currentParams !== newParams) {
      setSearchParams(params, { replace: !isInitialLoad });
    }

    setIsInitialLoad(false);
  }, [selectedYear, selectedMonth, ordersParams, count]);

  // Sync state when URL changes (browser back/forward)
  useEffect(() => {
    const yearFromUrl = searchParams.get("year");
    const monthFromUrl = searchParams.get("month");
    const ordersFromUrl = parseInt(searchParams.get("orders") || "0");

    if (yearFromUrl !== null && yearFromUrl !== selectedYear) {
      setSelectedYear(yearFromUrl);
    } else if (yearFromUrl === null && selectedYear !== "all") {
      setSelectedYear("all");
    }

    if (monthFromUrl !== null && monthFromUrl !== selectedMonth) {
      setSelectedMonth(monthFromUrl);
    } else if (monthFromUrl === null && selectedMonth !== "all") {
      setSelectedMonth("all");
    }

    if (ordersFromUrl !== 0 && ordersFromUrl !== ordersParams) {
      setOrdersParams(ordersFromUrl);
    } else if (ordersFromUrl === 0 && ordersParams !== count) {
      setOrdersParams(count);
    }
  }, [searchParams]);

  // Load more button
  const loadMore = () => {
    const newCount = Math.min(ordersParams + count, filteredOrders.length);
    if (newCount > ordersParams) {
      setOrdersParams(newCount);
    }
  };

  // Clear filters handler
  const clearFilters = () => {
    setSelectedYear("all");
    setSelectedMonth("all");
  };

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // Handle month change
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  // Hide/show Product summary area
  const toggleSidebar = () => setProductSummaryOpen(!productSummaryOpen);

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      {/* Header  */}
      <div className="w-full top-0 z-50">
        <div className="w-full flex flex-1 flex-col p-2">
          <div className="flex gap-2 justify-between">
            <PageHeader defaultPage="Analytics" type="sidebar-level" />
            {/* Collapse button  */}
            <button
              onClick={toggleSidebar}
              className={`flex ${productSummaryOpen ? "bg-gray-200" : "bg-gray-100"} rounded px-1 py-1 hover:bg-gray-200 cursor-pointer`}
            >
              <IoIosArrowDown
                height={16}
                width={16}
                className={`${productSummaryOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
              />
            </button>
            {/* Collapse button ends */}
          </div>
        </div>
      </div>
      {/* Header ends */}

      <div className="flex">
        <div
          className={`${productSummaryOpen ? "h-full" : "h-0"} p-2 transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="flex flex-col gap-2">
            {/* Analytics boxes */}
            <div className="flex flex-wrap w-full gap-2">
              <MiniAnalyticsBox
                statusSlug={successfulOrderStatuses}
                data={analyticsData}
                boxTitle={"Overall"}
                boxStyle={"bg-green-300 border-green-400"}
              />
              <MiniAnalyticsBox
                statusSlug={statusCompleted}
                data={analyticsData}
                boxTitle={"Completed"}
                boxStyle={"bg-green-200 border-green-400"}
              />
              <MiniAnalyticsBox
                statusSlug={statusDelivered}
                data={analyticsData}
                boxTitle={"Delivered"}
                boxStyle={"bg-lime-200 border-lime-400"}
              />
              <MiniAnalyticsBox
                statusSlug={statusOrderPlaced}
                data={analyticsData}
                boxTitle={"Order Placed"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusPaymentPending}
                data={analyticsData}
                boxTitle={"Payment Pending"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusPaymentConfirmed}
                data={analyticsData}
                boxTitle={"Payment Confirmed"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusProcessing}
                data={analyticsData}
                boxTitle={"Processing"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusPacked}
                data={analyticsData}
                boxTitle={"Packed"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusShipped}
                data={analyticsData}
                boxTitle={"Shipped"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusOutForDelivery}
                data={analyticsData}
                boxTitle={"Out For Delivery"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusDeliveryFailed}
                data={analyticsData}
                boxTitle={"Delivery Failed"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusAttemptedDelivery}
                data={analyticsData}
                boxTitle={"Attempted Delivery"}
                boxStyle={"bg-gray-100 border-gray-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusCancelledByBuyer}
                data={analyticsData}
                boxTitle={"Cancelled by Buyer"}
                boxStyle={"bg-red-100 border-red-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusCancelledBySeller}
                data={analyticsData}
                boxTitle={"Cancelled by Seller"}
                boxStyle={"bg-red-100 border-red-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusReturnRequest}
                data={analyticsData}
                boxTitle={"Return Request"}
                boxStyle={"bg-red-100 border-red-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusOrderReturned}
                data={analyticsData}
                boxTitle={"Returned"}
                boxStyle={"bg-red-100 border-red-200"}
              />
              <MiniAnalyticsBox
                statusSlug={statusRefundSuccess}
                data={analyticsData}
                boxTitle={"Returned Success"}
                boxStyle={"bg-red-100 border-red-200"}
              />
            </div>
            {/* Analytics boxes ends  */}

            {/* Filters */}
            <div className="flex border-gray-300">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Year:
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => handleYearChange(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="all">All Years</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Month:
                </label>
                <select
                  value={selectedMonth}
                  onChange={(e) => handleMonthChange(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  disabled={currentAvailableMonths.length === 0}
                >
                  <option value="all">All Months</option>
                  {currentAvailableMonths.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear filters button */}
              {(selectedYear !== "all" || selectedMonth !== "all") && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Clear Filters
                </button>
              )}

              {/* Results count */}
              <div className="ml-auto flex items-center">
                <span className="text-sm text-gray-500">
                  Showing {displayedOrders.length} of {filteredOrders.length}{" "}
                  orders
                </span>
              </div>
            </div>
            {/* Filters ends */}
          </div>
        </div>
      </div>

      {/* Table header  */}
      <div
        className={`w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300`}
      >
        <div className="flex w-full justify-between">
          <div className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm">
            <div className="flex border-r border-gray-300 p-1">
              Order Detail
            </div>
            <div className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full text-sm">
              <div className="flex border-r border-gray-300 p-1">
                Ordered Items
              </div>
              <div className="flex border-r border-gray-300 p-1">
                Listed Price
              </div>
              <div className="flex border-r border-gray-300 p-1">Qty</div>
              <div className="flex border-r border-gray-300 p-1">Sub Total</div>
            </div>
            <div className="grid grid-cols-[.4fr_1fr_1fr_1.4fr_1.8fr_.5fr] w-full text-sm">
              <div className="flex border-r border-gray-300 p-1">Less</div>
              <div className="flex border-r border-gray-300 p-1">Shipping</div>
              <div className="flex border-r border-gray-300 p-1">
                Overall Price
              </div>
              <div className="flex border-r border-gray-300 p-1">
                Payment Status
              </div>
              <div className="flex border-r border-gray-300 p-1">
                Order Status
              </div>
              <div className="flex border-r border-gray-300 p-1"></div>
            </div>
          </div>
          <div className="flex w-2 bg-blue-100"></div>
        </div>
      </div>
      {/* Table header ends */}

      {/* List area */}
      <div className="flex w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col w-full">
          {displayedOrders.length === 0 ? (
            <div className="flex items-center w-full h-screen">
              <LengthIsZeroError
                title="No data found"
                message="Something went wrong while fetching the data!"
              />
            </div>
          ) : (
            <div className="flex flex-col w-full">
              {displayedOrders.map((displayedOrder, displayedOrderIndex) => {
                const totalQuanity = sumOrderQuantities(
                  displayedOrder.orderedItems,
                );

                return (
                  <div
                    key={displayedOrder._id || displayedOrderIndex}
                    className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm"
                  >
                    {/* Grid 1  */}
                    <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                      <div className="flex flex-col items-start gap-2">
                        <div className="flex items-start">
                          <OrderIdBadge id={displayedOrder._id} />
                        </div>
                        <div className="flex gap-2">
                          <ImageDoubleExtraSmall
                            image={displayedOrder.buyerInfo.image}
                            alt={
                              displayedOrder.buyerInfo.buyerFirstName +
                                " " +
                                displayedOrder.buyerInfo.buyerLastName || "—"
                            }
                            type="circle"
                          />
                          <div className="flex flex-col items-start gap-1">
                            <h1 className="font-semibold text-lg leading-tight">
                              {displayedOrder.buyerInfo.buyerFirstName +
                                " " +
                                displayedOrder.buyerInfo.buyerLastName || "—"}
                            </h1>
                            <PersonIdBadge
                              id={displayedOrder.buyerInfo.buyerId}
                            />
                            <IconedEmail
                              data={displayedOrder.buyerInfo.email}
                            />
                            <OrderPlacedUpdated
                              createdAt={displayedOrder.createdAt}
                              updatedAt={displayedOrder.updatedAt}
                            />
                            <div className="flex text-sm leading-tight gap-2 mt-1">
                              <div className="bg-gray-100 px-2 py-1 border border-gray-200 rounded-md">
                                <span className="text-gray-500">Items:</span>{" "}
                                <span className="font-semibold">
                                  {displayedOrder.orderedItems.length}
                                </span>
                              </div>
                              <div className="bg-gray-100 px-2 py-1 border border-gray-200 rounded-md">
                                <span className="text-gray-500">Quantity:</span>{" "}
                                <span className="font-semibold">
                                  {totalQuanity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Grid 2  */}
                    <div
                      className={`flex flex-col ${displayedOrder.orderedItems.length < 2 ? "border-b border-gray-300" : ""}`}
                    >
                      {displayedOrder.orderedItems.length === 0 ? (
                        <div
                          className={`flex h-full items-center justify-center`}
                        >
                          <NoSomethingSmall text="No data found" />
                        </div>
                      ) : (
                        displayedOrder.orderedItems.map(
                          (orderedItem, orderedItemIndex) => {
                            const displayName = [
                              orderedItem.productName,
                              ...orderedItem.variant.attributeOptions.map(
                                (option) => option.value,
                              ),
                            ].join(" | ");

                            return (
                              <div
                                key={orderedItemIndex}
                                className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full h-full"
                              >
                                {/* Ordered Items box  */}
                                <div
                                  className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                >
                                  <div className="flex-col">
                                    <div className="flex gap-2">
                                      <VariantBadge
                                        id={orderedItem.variant._id}
                                      />
                                      <ItemStatusBadge
                                        statusId={orderedItem.variant.status}
                                      />
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                      <ImageDoubleExtraSmall
                                        image={orderedItem.variant.primaryImage}
                                        alt={orderedItem.variant.productName}
                                        type="square"
                                      />
                                      <div className="flex flex-col">
                                        <h1 className="font-semibold text-md leading-tight">
                                          {displayName}
                                        </h1>
                                        <p className="leading-tight">
                                          SKU: {orderedItem.variant.sku}
                                        </p>
                                        <div className="flex gap-2 mt-2">
                                          <div className="flex gap-2 text-xs text-gray-600">
                                            {orderedItem.variant.attributeOptions.map(
                                              (option, index) => {
                                                return (
                                                  <OrderVariantAttributeBadege
                                                    key={index}
                                                    option={option}
                                                    index={index}
                                                    attributes={attributes}
                                                  />
                                                );
                                              },
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Listed price box  */}
                                <div
                                  className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                >
                                  <AmountFormatSmall
                                    amount={orderedItem.variant.price}
                                  />
                                </div>
                                {/* Quantity box  */}
                                <div
                                  className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                >
                                  <TextNormal
                                    text={orderedItem.variant.quantity}
                                  />
                                </div>
                                {/* Sub total box  */}
                                <div
                                  className={`flex items-start p-2 ${displayedOrder.orderedItems.length > 1 ? "border-b" : ""} border-r border-gray-300 h-full`}
                                >
                                  <AmountFormat
                                    amount={orderedItem.variant.subTotal}
                                  />
                                </div>
                              </div>
                            );
                          },
                        )
                      )}
                    </div>
                    {/* Grid 3  */}
                    <div className="grid grid-cols-[.4fr_1fr_1fr_1.4fr_1.8fr_.5fr] w-full">
                      {/* Discount box  */}
                      <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                        <TextNormal text={displayedOrder.summary.discount} />
                      </div>
                      {/* Shipping fee box  */}
                      <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                        <AmountFormatSmall
                          amount={displayedOrder.summary.shippingFee}
                        />
                      </div>
                      {/* Overall price box  */}
                      <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                        <AmountFormat
                          amount={displayedOrder.summary.orderTotalPrice}
                        />
                      </div>
                      {/* Payment status box  */}
                      <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                        <PaymentStatusBadge
                          status={displayedOrder.paymentInfo}
                        />
                      </div>
                      {/* Order status box  */}
                      <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                        <div className="flex flex-col gap-1">
                          <OrderStatusBadge
                            status={displayedOrder.currentStatus.slug}
                          />
                          <p className="text-[13px] leading-tight">
                            {dateFormatter(
                              displayedOrder.currentStatus.timestamp,
                            )}
                          </p>
                        </div>
                      </div>
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
              })}
            </div>
          )}
          {filteredOrders.length > 0 &&
            ordersParams < filteredOrders.length && (
              <div className="flex items-center justify-center">
                <div className="flex p-2">
                  <button
                    onClick={loadMore}
                    className="px-3 py-1 border border-gray-400 bg-gray-100 text-sm text-gray-500 rounded cursor-pointer hover:border-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-transform duration-200 ease-out"
                  >
                    Load more
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
      {/* List area ends */}
    </div>
  );
};
