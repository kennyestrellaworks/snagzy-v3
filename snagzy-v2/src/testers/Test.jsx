import { useEffect, useMemo, useRef, useState } from "react";
import { FaEye } from "../components/SVG";
import { useData } from "../context/DataContext";
import { Link, useSearchParams } from "react-router-dom";
import { OrderIdBadge } from "../components/OrderIdBadge";
import { dateFormatter } from "../utils/helpers";
import { OrderVariantAttributeBadege } from "../components/OrderVariantAttributeBadege";
import { PaymentStatusBadge } from "../components/PaymentStatusBadge";
import { OrderStatusBadge } from "../components/OrderStatusBadge";
import { FilterOption } from "../components/FilterOption";
import { useClickOutside } from "../hooks/useClickOutside";
import { MiniAnalytics } from "../components/MiniAnalytics";

export const Orders = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    getAllOrders,
    getAllAttributes,
    getPaymentStatus,
    getOrderStatusSuccess,
    getOrderStatusFailure,
    getAllOrderLifeCycle,
  } = useData();
  const orders = getAllOrders();
  const attributes = getAllAttributes();
  const paymentStatusList = getPaymentStatus();
  const orderStatusSuccessList = getOrderStatusSuccess();
  const orderStatusFailureList = getOrderStatusFailure();
  const orderLifeCycle = getAllOrderLifeCycle();

  const count = 6;

  // Filter searchParams ////////
  // Search input state
  const initialQ = searchParams.get("q") || "";
  const [q, setQ] = useState(initialQ);
  const [qInput, setQInput] = useState(initialQ);
  // Payment status
  const initialPaymentStatus = searchParams.get("payment_status") || "";
  const [paymentStatus, setPaymentStatus] = useState(initialPaymentStatus);
  // Order status success
  const initialOrderStatusSuccess =
    searchParams.get("order_status_success") || "";
  const [orderStatusSuccess, setOrderStatusSuccess] = useState(
    initialOrderStatusSuccess,
  );
  // Order status failure
  const initialOrderStatusFailure =
    searchParams.get("order_status_failure") || "";
  const [orderStatusFailure, setOrderStatusFailure] = useState(
    initialOrderStatusFailure,
  );
  // Visible count
  const initialVisibleCount = parseInt(
    searchParams.get("visible_count") || count,
  );
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  useEffect(() => {
    const urlQ = searchParams.get("q") || "";
    const urlOrderStatusSuccess =
      searchParams.get("order_status_success") || "";
    const urlOrderStatusFailure =
      searchParams.get("order_status_failure") || "";
    const urlPaymentStatus = searchParams.get("payment_status") || "";
    const urlVisibleCount =
      parseInt(searchParams.get("visible_count")) || count;

    if (urlQ !== q) setQ(urlQ);
    if (urlQ !== qInput) setQInput(urlQ);

    if (urlPaymentStatus !== paymentStatus) setPaymentStatus(urlPaymentStatus);
    if (urlOrderStatusSuccess !== orderStatusSuccess)
      setOrderStatusSuccess(urlOrderStatusSuccess);
    if (urlOrderStatusFailure !== orderStatusFailure)
      setOrderStatusFailure(urlOrderStatusFailure);
    if (urlVisibleCount === 0) {
      setVisibleCount(count);
    } else setVisibleCount(urlVisibleCount);
  }, [searchParams]);

  // Filter dropdown refs
  const paymentDropdownRef = useRef(null);
  const orderStatusSuccessDropdownRef = useRef(null);
  const orderStatusFailureDropdownRef = useRef(null);

  // Filter click outside using hook.
  useClickOutside(paymentDropdownRef, () => setPaymentOpen(false));
  useClickOutside(orderStatusSuccessDropdownRef, () =>
    setOrderStatusSuccessOpen(false),
  );
  useClickOutside(orderStatusFailureDropdownRef, () =>
    setOrderStatusFailureOpen(false),
  );

  // console.log("orderStatusSuccess", orderStatusSuccess);
  //   console.log("orderStatusFailure", orderStatusFailure);

  const filteredOrders = useMemo(() => {
    let result = orders || [];

    const term = (q || "").trim().toLowerCase();
    if (term) {
      result = result.filter((order) => {
        if ((order.buyerInfo?.buyerName || "").toLowerCase().includes(term))
          return true;
        if ((order.buyerInfo?.email || "").toLowerCase().includes(term))
          return true;
        if ((order.buyerInfo?.buyerId || "").toLowerCase().includes(term))
          return true;
        if ((order._id || "").toLowerCase().includes(term)) return true;
        if (
          Array.isArray(order.orderedItems) &&
          order.orderedItems.some(
            (item) =>
              (item.productName || "").toLowerCase().includes(term) ||
              (item.productId || "").toLowerCase().includes(term) ||
              (item.variant?._id || "").toLowerCase().includes(term),
          )
        )
          return true;
        return false;
      });
    }
    // console.log("result", result);

    if (orderStatusSuccess || orderStatusFailure) {
      const successSlug = (orderStatusSuccess || "").toString().toLowerCase();
      const failureSlug = (orderStatusFailure || "").toString().toLowerCase();
      const mapToSlug = (status) => {
        const s = (status || "").toString().toLowerCase();
        const found = (orderLifeCycle || []).find(
          (o) =>
            (o.slug || "").toString().toLowerCase() === s ||
            (o.label || "").toString().toLowerCase() === s,
        );
        return found ? (found.slug || "").toString().toLowerCase() : s;
      };

      result = result.filter((order) => {
        const orderRaw = (order?.currentStatus?.slug || "").toString();
        const orderSlug = mapToSlug(orderRaw);

        const orderType =
          (orderLifeCycle || []).find(
            (o) => (o.slug || "").toString().toLowerCase() === orderSlug,
          )?.type || "";

        if (successSlug && orderType === "success") {
          return orderSlug === successSlug;
        }
        if (failureSlug && orderType === "failure") {
          return orderSlug === failureSlug;
        }
        return false;
      });
      // console.log("RESULT", result);
    }

    if (paymentStatus) {
      const ps = (paymentStatus || "").toString().toLowerCase();
      // Map an order's payment status string to a known slug from paymentStatusList.
      const mapToSlug = (status) => {
        const s = (status || "").toString().toLowerCase();
        const found = (paymentStatusList || []).find(
          (p) =>
            (p.slug || "").toString().toLowerCase() === s ||
            (p.status || "").toString().toLowerCase() === s,
        );
        return found ? (found.slug || "").toString().toLowerCase() : s;
      };

      result = result.filter((order) => {
        const orderRaw = (order?.paymentInfo?.status || "").toString();
        const orderSlug = mapToSlug(orderRaw);
        return orderSlug === ps;
      });
    }

    // Sort orders by the 'order_placed' timestamp (latest first).
    // Fallback to createdAt or updatedAt if timeline entry missing.
    const getPlacedTs = (o) => {
      const ts =
        o.timeline?.find((t) => t.slug === "order_placed")?.timestamp ||
        o.createdAt ||
        o.updatedAt ||
        null;
      return ts ? new Date(ts).getTime() : 0;
    };

    result = (result || [])
      .slice()
      .sort((a, b) => getPlacedTs(b) - getPlacedTs(a));

    // console.log("result", result);

    return result;
  }, [q, orders, paymentStatus, orderStatusSuccess, orderStatusFailure]);

  useEffect(() => {
    // Reset pagination whenever any filter changes
    setVisibleCount(count);
  }, [q, orderStatusSuccess, orderStatusFailure, paymentStatus]);

  const displayedOrders = useMemo(() => {
    const urlVisibleCount =
      parseInt(searchParams.get("visible_count")) || count;
    if (urlVisibleCount === 0) {
      setVisibleCount(count);
    } else setVisibleCount(urlVisibleCount);

    return (filteredOrders || []).slice(0, visibleCount);
  }, [filteredOrders, visibleCount, searchParams]);

  // Search input changes
  const onSearchChange = (e) => {
    const val = e.target.value;
    setQInput(val);
    setQ(val);

    const params = {};
    if (val && val.trim()) {
      params.q = val;
    }
    if (orderStatusSuccess) params.order_status_success = orderStatusSuccess;
    if (orderStatusFailure) params.order_status_failure = orderStatusFailure;
    if (paymentStatus) params.payment_status = paymentStatus;
    setSearchParams(params);
  };

  // Filter payment status change
  const handlePaymentStatusChange = (status) => {
    const val = status || "";
    setPaymentStatus(val);

    const params = {};
    if (q && q.trim()) params.q = q;
    if (orderStatusSuccess) params.order_status_success = orderStatusSuccess;
    if (orderStatusFailure) params.order_status_failure = orderStatusFailure;
    if (val) params.payment_status = val;
    setSearchParams(params);
  };

  // Filter order status success change
  const handleOrderStatusSuccessChange = (status) => {
    const val = status || "";
    setOrderStatusSuccess(val);

    const params = {};
    if (q && q.trim()) params.q = q;
    if (val) params.order_status_success = val;
    if (orderStatusFailure) params.order_status_failure = orderStatusFailure;
    if (paymentStatus) params.payment_status = paymentStatus;
    setSearchParams(params);
  };

  // Filter order status failure change
  const handleOrderStatusFailureChange = (status) => {
    const val = status || "";
    setOrderStatusFailure(val);

    const params = {};
    if (q && q.trim()) params.q = q;
    if (orderStatusSuccess) params.order_status_success = orderStatusSuccess;
    if (val) params.order_status_failure = val;
    if (paymentStatus) params.payment_status = paymentStatus;
    setSearchParams(params);
  };

  const clearFilters = () => {
    setQInput("");
    setOrderStatusSuccess("");
    setOrderStatusFailure("");
    setPaymentStatus("");
    setVisibleCount(count);
    setSearchParams({});
  };

  // Filter open state ////////
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [orderStatusSuccessOpen, setOrderStatusSuccessOpen] = useState(false);
  const [orderStatusFailureOpen, setOrderStatusFailureOpen] = useState(false);

  // Close all dropdowns if click is outside any dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('[aria-label="payment-status-filter"]') &&
        !event.target.closest('[aria-label="order-status-success-filter"]') &&
        !event.target.closest('[aria-label="order-status-failure-filter"]')
      ) {
        setPaymentOpen(false);
        setOrderStatusSuccessOpen(false);
        setOrderStatusFailureOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter payment status order count.
  const getPaymentStatusOrderCount = (paymentStatusSlug) => {
    if (!paymentStatusSlug) return orders?.length || 0;
    return (orders || []).filter(
      (order) => order.paymentInfo?.slug === paymentStatusSlug,
    ).length;
  };

  // Filter order status success order count.
  const getOrderStatusSuccessOrderCount = (orderStatusSuccessSlug) => {
    if (!orderStatusSuccessSlug) return orders?.length || 0;
    return (orders || []).filter(
      (order) => order.currentStatus?.slug === orderStatusSuccessSlug,
    ).length;
  };

  // Filter order status failure order count.
  const getOrderStatusFailureOrderCount = (orderStatusFailureSlug) => {
    if (!orderStatusFailureSlug) return orders?.length || 0;
    return (orders || []).filter(
      (order) => order.currentStatus?.slug === orderStatusFailureSlug,
    ).length;
  };

  // Filter get selected payment status item
  const selectedPaymentStatus = (paymentStatusList || []).find(
    (item) => item.slug === paymentStatus,
  );
  const selectedPaymentStatusDisplay =
    selectedPaymentStatus?.label || "Payment Status";
  const isPaymentStatusSelected = !!paymentStatus;

  // Filter get selected order status success item
  const selectedOrderStatusSuccess = (orderStatusSuccessList || []).find(
    (item) => item.slug === orderStatusSuccess,
  );
  const selectedOrderStatusSuccessDisplay =
    selectedOrderStatusSuccess?.label || "Order Status Success";
  const isOrderStatusSuccessSelected = !!orderStatusSuccess;

  // Filter get selected order status failure item
  const selectedOrderStatusFailure = (orderStatusFailureList || []).find(
    (item) => item.slug === orderStatusFailure,
  );
  const selectedOrderStatusFailureDisplay =
    selectedOrderStatusFailure?.label || "Order Status Failure";
  const isOrderStatusFailureSelected = !!orderStatusFailure;

  // Load more button
  const loadMore = () => {
    const updateUrlParams = (newCount) => {
      // Update URL with new visibleCount
      const params = {};
      if (q && q.trim()) params.q = q;
      if (paymentStatus) params.payment_status = paymentStatus;
      if (orderStatusSuccess) params.order_status_success = orderStatusSuccess;
      if (orderStatusFailure) params.order_status_failure = orderStatusFailure;
      params.visible_count = newCount;
      setSearchParams(params);
    };

    if (filteredOrders.length === 0) {
      const newCount = Math.min(visibleCount + count, orders.length);
      setVisibleCount(newCount);
      updateUrlParams(newCount);
    } else {
      const newCount = Math.min(visibleCount + count, filteredOrders.length);
      setVisibleCount(newCount);
      updateUrlParams(newCount);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Sticky  */}
      <div className="sticky top-16 z-10 text-white flex items-center bg-gray-200">
        <div className="w-full text-gray-700 ml-4 mt-4 mr-4 text-sm">
          {/* Search & Filters */}
          <div className="p-3 flex gap-2 items-end bg-gray-50 rounded-t-lg border-t border-l border-r border-gray-300">
            <div className="grid grid-cols-[5fr_2fr_2fr_2fr_.7fr] w-full gap-2">
              <div className="flex-1 flex gap-2 items-center">
                <input
                  value={qInput}
                  onChange={onSearchChange}
                  placeholder="Search by buyer name, email, order ID, product ID or variant ID ..."
                  className="flex-1 p-2 border border-gray-400 rounded text-sm"
                  aria-label="order-search"
                />
              </div>
              <FilterOption
                setDropdownOpen={setPaymentOpen}
                OptionDropdownRef={paymentDropdownRef}
                selectedOptionStatusDisplay={selectedPaymentStatusDisplay}
                selectedOptionStatus={selectedPaymentStatus}
                getOptionStatusOrderCount={getPaymentStatusOrderCount}
                isOptionStatusSelected={isPaymentStatusSelected}
                dropdownOpen={paymentOpen}
                handleOptionStatusChange={handlePaymentStatusChange}
                optionStatusList={paymentStatusList}
                optionDropDownName="Payment Status"
                filterName="payment-status-filter"
                width="w-full"
                ariaLabel="payment-status-filter"
              />
              <FilterOption
                setDropdownOpen={setOrderStatusSuccessOpen}
                OptionDropdownRef={orderStatusSuccessDropdownRef}
                selectedOptionStatusDisplay={selectedOrderStatusSuccessDisplay}
                selectedOptionStatus={selectedOrderStatusSuccess}
                getOptionStatusOrderCount={getOrderStatusSuccessOrderCount}
                isOptionStatusSelected={isOrderStatusSuccessSelected}
                dropdownOpen={orderStatusSuccessOpen}
                handleOptionStatusChange={handleOrderStatusSuccessChange}
                optionStatusList={orderStatusSuccessList}
                optionDropDownName="Order Status Success"
                filterName="order-status-success-filter"
                color="green"
                width="w-full"
                ariaLabel="order-status-success-filter"
              />
              <FilterOption
                setDropdownOpen={setOrderStatusFailureOpen}
                OptionDropdownRef={orderStatusFailureDropdownRef}
                selectedOptionStatusDisplay={selectedOrderStatusFailureDisplay}
                selectedOptionStatus={selectedOrderStatusFailure}
                getOptionStatusOrderCount={getOrderStatusFailureOrderCount}
                isOptionStatusSelected={isOrderStatusFailureSelected}
                dropdownOpen={orderStatusFailureOpen}
                handleOptionStatusChange={handleOrderStatusFailureChange}
                optionStatusList={orderStatusFailureList}
                optionDropDownName="Order Status Failure"
                filterName="order-status-failure-filter"
                color="red"
                width="w-full"
                ariaLabel="order-status-success-failure"
              />
              <button
                className={`text-white rounded-md bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 cursor-pointer`}
                onClick={clearFilters}
              >
                Clear Filter
              </button>
            </div>
          </div>
          {/* Order Status analytics count  */}
          <div className="flex pb-2 pl-3 pr-3 justify-between bg-gray-50 border-l border-r border-gray-300">
            <div className="flex gap-2 flex-wrap">
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="total-spent"
                classNames="bg-green-300 border border-green-400"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="completed"
                classNames="bg-green-200 border border-green-400"
              />

              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="delivered"
                classNames="bg-lime-200 border border-lime-400"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="order-placed"
                classNames="bg-gray-100 border border-gray-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="payment-pending"
                classNames="bg-gray-100 border border-gray-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="payment-confirmed"
                classNames="bg-gray-100 border border-gray-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="processing"
                classNames="bg-gray-100 border border-gray-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="packed"
                classNames="bg-gray-100 border border-gray-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="shipped"
                classNames="bg-gray-100 border border-gray-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="out-for-delivery"
                classNames="bg-gray-100 border border-gray-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="cancelled-by-buyer"
                classNames="bg-red-100 border border-red-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="cancelled-by-seller"
                classNames="bg-red-100 border border-red-200"
              />
              {/* Box  */}
              <MiniAnalytics
                orderData={orders}
                boxType="refund-success"
                classNames="bg-red-100 border border-red-200"
              />
            </div>
          </div>
          {/* Order Status analytics count ends */}
          {/* Table header  */}
          <div className="grid grid-cols-[1.4fr_2fr_1.6fr] border-t border-b border-gray-400 bg-gray-300 font-semibold">
            <div className="flex border-r border-gray-400 pl-2 pr-2 items-center">
              <div className="flex flex-1 w-full justify-between">
                Order Detail
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-[1fr_.2fr_.2fr_.2fr] border-gray-400 h-full">
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Ordered Items
                </div>
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Listed <br />
                  Price
                </div>
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Quantity
                </div>
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Sub Total
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-[.1fr_.2fr_.2fr_.2fr_.3fr_.1fr] border-gray-400 h-full">
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Less
                </div>
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Shipping
                </div>
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Overall
                  <br />
                  Price
                </div>
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Payment
                  <br />
                  Status
                </div>
                <div className="flex items-center pl-2 border-r border-gray-400">
                  Order
                  <br />
                  Status
                </div>
                <div className="flex items-center pl-2"></div>
              </div>
            </div>
          </div>
          {/* Table header ends  */}
        </div>
      </div>
      {/* List */}
      <div className="flex-1 overflow-y-auto pl-4 pr-4">
        <div className="w-full border-l border-r border-b border-gray-300 bg-white rounded-b-lg overflow-hidden text-sm">
          {displayedOrders.length === 0 ? (
            <p>No Data Found</p>
          ) : (
            displayedOrders.map((order, index) => {
              return (
                <div
                  key={index}
                  className={`grid grid-cols-[1.4fr_2fr_1.6fr] border-b border-gray-300 last:border-b-0 h-full`}
                >
                  <div className="border-r border-gray-300 p-2">
                    {/* Item  */}
                    <div className="flex items-start flex-col gap-1">
                      <OrderIdBadge id={order._id} />
                      <div className="flex gap-1">
                        <p className="bg-blue-100 px-1 text-gray-500">
                          Items:{" "}
                          <span className="text-blue-950 font-semibold">
                            {order.orderedItems.length}
                          </span>
                        </p>
                        <p className="bg-blue-100 px-1 text-gray-500">
                          Quantity:{" "}
                          <span className="text-blue-950 font-semibold">
                            THIS
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Item  */}
                    <div className="flex gap-2">
                      <div className="flex shrink-0">
                        <img
                          src={order.buyerInfo.image}
                          className="w-10 h-10 object-cover rounded-full"
                        />
                      </div>
                      <div className="flex items-start">
                        <div className="flex flex-col items-start">
                          <h1 className="font-semibold text-lg">
                            {order.buyerInfo.buyerName}
                          </h1>
                          <p className="text-md text-gray-600">
                            {order.buyerInfo.email}
                          </p>
                          <div className="flex flex-col items-start bg-amber-50 p-2 mt-2 border border-amber-100">
                            <p className="text-[12px] text-gray-600">
                              <span className="text-gray-400">Placed:</span>{" "}
                              {dateFormatter(order.timeline[0].timestamp)}
                            </p>
                            <p className="text-[12px] text-gray-600">
                              <span className="text-gray-400">Updated:</span>{" "}
                              {dateFormatter(
                                order.timeline[order.timeline.length - 1]
                                  .timestamp,
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    {order.orderedItems.map((item, itemIndex) => {
                      const displayName = [
                        item.productName,
                        ...item.variant.attributeOptions.map(
                          (option) => option.value,
                        ),
                      ].join(" | ");

                      return (
                        <div
                          key={itemIndex}
                          className="grid grid-cols-[1fr_.2fr_.2fr_.2fr] border-b border-gray-300 last:border-b-0 h-full"
                        >
                          <div className="border-r border-gray-300 p-2">
                            <div className="flex gap-2">
                              <img
                                src={item.variant.primaryImage}
                                alt={item.sku}
                                className="w-12 h-12 object-cover rounded"
                              />
                              <div className="flex flex-col gap-1">
                                <h1 className="font-semibold text-md">
                                  {displayName}
                                </h1>
                                <div className="flex gap-2 text-xs text-gray-600">
                                  {item.variant.attributeOptions.map(
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
                          <div className="border-r border-gray-300 p-2">
                            $
                            {item.variant.price.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </div>
                          <div className="border-r border-gray-300 p-2">
                            {item.variant.quantity}
                          </div>
                          <div className="border-r border-gray-300 p-2">
                            <span className="font-semibold">
                              $
                              {item.variant.subTotal.toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col">
                    <div className="grid grid-cols-[.1fr_.2fr_.2fr_.2fr_.3fr_.1fr] border-b border-gray-300 last:border-b-0 h-full">
                      {/* Less  */}
                      <div className="flex gap-3 h-full py-1 pl-2 border-r border-gray-300">
                        {order.summary.discount}
                      </div>
                      {/* Shipping fee  */}
                      <div className="flex gap-3 h-full py-1 pl-2 border-r border-gray-300">
                        $
                        {order.summary.shippingFee.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                      {/* Overall price  */}
                      <div className="flex gap-3 h-full py-1 pl-2 border-r border-gray-300">
                        <span className="font-semibold">
                          $
                          {order.summary.orderTotalPrice.toLocaleString(
                            "en-US",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            },
                          )}
                        </span>
                      </div>
                      {/* Payment status  */}
                      <div className="flex gap-3 h-full py-1 pl-2 border-r border-gray-300">
                        <PaymentStatusBadge status={order.paymentInfo} />
                      </div>
                      {/* Orders status  */}
                      <div className="flex gap-3 h-full py-1 pl-2 border-r border-gray-300">
                        <OrderStatusBadge status={order.currentStatus.slug} />
                      </div>
                      <div className="flex pl-2">
                        <div>
                          <Link
                            to={`/orders/${order._id}`}
                            className="cursor-pointer"
                          >
                            <FaEye height={16} width={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {/* List ends */}
      <div className="flex items-center justify-center mt-3">
        {filteredOrders.length === 0
          ? visibleCount < orders.length && (
              <button
                onClick={loadMore}
                className="px-4 py-2 border border-gray-400 bg-gray-100 text-gray-500 rounded cursor-pointer hover:border-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-transform duration-200 ease-out"
              >
                Load more
              </button>
            )
          : visibleCount < filteredOrders.length && (
              <button
                onClick={loadMore}
                className="px-4 py-2 border border-gray-400 bg-gray-100 text-gray-500 rounded cursor-pointer hover:border-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-transform duration-200 ease-out"
              >
                Load more
              </button>
            )}
      </div>
    </div>
  );
};
