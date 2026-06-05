import { useState } from "react";
import {
  successfulOrderStatuses,
  pendingOrderStatuses,
  unsuccessfulOrderStatuses,
} from "../../data/orderLifeCycle";
import {
  DollarSign,
  IoIosArrowDown,
  TbCalendarDollar,
  TbCurrencyDollarOff,
} from "../SVG";
import { MediumAnalyticsStatCard } from "./AnalyticsStatCards";

export const RevenueStats1 = ({ analyticsData, processOrderLifeCycleData }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTable, setActiveTable] = useState("total_sales"); // 'total_sales', 'pending_sales', 'cancellations'
  const [tableData, setTableData] = useState([]);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Function to handle card click and update table data
  const handleCardClick = (type, statuses) => {
    setActiveTable(type);
    const { ordersToProcess } = processOrderLifeCycleData(
      statuses,
      analyticsData,
    );
    setTableData(ordersToProcess);
  };

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

  // Helper function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  // Helper to get status badge color
  const getStatusBadgeColor = (status) => {
    const statusColors = {
      completed: "bg-green-100 text-green-800",
      delivered: "bg-blue-100 text-blue-800",
      cancelled_by_buyer: "bg-red-100 text-red-800",
      cancelled_by_seller: "bg-red-100 text-red-800",
      return_request: "bg-yellow-100 text-yellow-800",
      payment_pending: "bg-orange-100 text-orange-800",
      order_placed: "bg-gray-100 text-gray-800",
      // Add more status mappings as needed
    };
    return statusColors[status] || "bg-gray-100 text-gray-800";
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
              {/* Revenue stats filters placeholder */}
              <div
                className={`flex gap-4 ${isOpen ? "opacity-100" : "opacity-40"} transition-all duration-300 ease-in-out`}
              >
                <div className="text-sm text-gray-500">FILTERS COMING SOON</div>
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
              onClick={() =>
                handleCardClick("total_sales", successfulOrderStatuses)
              }
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
              onClick={() =>
                handleCardClick("pending_sales", pendingOrderStatuses)
              }
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
              onClick={() =>
                handleCardClick("cancellations", unsuccessfulOrderStatuses)
              }
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

          {/* Table section - shows data based on clicked card */}
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

              {/* Table body - renders based on active table state */}
              <div className="w-full max-h-125 overflow-y-auto">
                {tableData.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    Click on a card above to view order details
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {tableData.map((order, index) => (
                      <div
                        key={order._id || index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex w-full justify-between">
                          <div className="grid grid-cols-[3fr_6fr_5fr] w-full text-sm">
                            {/* Order Detail Column */}
                            <div className="flex flex-col border-r border-gray-200 p-2">
                              <span className="font-medium text-gray-900">
                                {order.buyerInfo?.buyerFirstName}{" "}
                                {order.buyerInfo?.buyerLastName}
                              </span>
                              <span className="text-xs text-gray-500">
                                Order ID: {order._id?.slice(-8)}
                              </span>
                              <span className="text-xs text-gray-500">
                                Date:{" "}
                                {new Date(order.createdAt).toLocaleDateString()}
                              </span>
                            </div>

                            {/* Ordered Items Column */}
                            <div className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full text-sm">
                              <div className="flex flex-col border-r border-gray-200 p-2">
                                {order.orderedItems?.map((item, idx) => (
                                  <div key={idx} className="mb-1">
                                    <span className="text-gray-900">
                                      {item.productName}
                                    </span>
                                    {idx < order.orderedItems.length - 1 && (
                                      <hr className="my-1" />
                                    )}
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-col border-r border-gray-200 p-2">
                                {order.orderedItems?.map((item, idx) => (
                                  <div key={idx} className="mb-1">
                                    <span className="text-gray-900">
                                      {formatCurrency(item.variant?.price)}
                                    </span>
                                    {idx < order.orderedItems.length - 1 && (
                                      <hr className="my-1" />
                                    )}
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-col border-r border-gray-200 p-2">
                                {order.orderedItems?.map((item, idx) => (
                                  <div key={idx} className="mb-1">
                                    <span className="text-gray-900">
                                      {item.variant?.quantity}
                                    </span>
                                    {idx < order.orderedItems.length - 1 && (
                                      <hr className="my-1" />
                                    )}
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-col border-r border-gray-200 p-2">
                                {order.orderedItems?.map((item, idx) => (
                                  <div key={idx} className="mb-1">
                                    <span className="text-gray-900">
                                      {formatCurrency(item.variant?.subTotal)}
                                    </span>
                                    {idx < order.orderedItems.length - 1 && (
                                      <hr className="my-1" />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Summary and Status Column */}
                            <div className="grid grid-cols-[.4fr_1fr_1fr_1.4fr_1.8fr_.5fr] w-full text-sm">
                              <div className="flex items-center border-r border-gray-200 p-2">
                                <span className="text-gray-900">-</span>
                              </div>
                              <div className="flex items-center border-r border-gray-200 p-2">
                                <span className="text-gray-900">
                                  {formatCurrency(
                                    order.summary?.shippingFee || 0,
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center border-r border-gray-200 p-2">
                                <span className="font-medium text-gray-900">
                                  {formatCurrency(
                                    order.summary?.orderTotalPrice || 0,
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center border-r border-gray-200 p-2">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    order.paymentInfo?.status === "Paid"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-yellow-100 text-yellow-800"
                                  }`}
                                >
                                  {order.paymentInfo?.status || "Pending"}
                                </span>
                              </div>
                              <div className="flex items-center border-r border-gray-200 p-2">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(order.currentStatus?.slug)}`}
                                >
                                  {order.currentStatus?.label || "Unknown"}
                                </span>
                              </div>
                              <div className="flex items-center p-2">
                                <button className="text-blue-600 hover:text-blue-800 text-xs">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Table footer with summary */}
              {tableData.length > 0 && (
                <div className="bg-gray-50 border-t border-gray-200 p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Showing {tableData.length}{" "}
                      {tableData.length === 1 ? "order" : "orders"}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      Total Value:{" "}
                      {formatCurrency(
                        tableData.reduce(
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
