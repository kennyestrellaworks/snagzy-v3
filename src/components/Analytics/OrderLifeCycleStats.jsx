import { useState } from "react";
import { IoIosArrowDown } from "../SVG";
import {
  statusCompleted,
  statusDelivered,
  statusOrderPlaced,
  statusPaymentPending,
  statusPaymentConfirmed,
  statusProcessing,
  statusPacked,
  statusShipped,
  statusOutForDelivery,
  statusDeliveryFailed,
  statusAttemptedDelivery,
  statusCancelledByBuyer,
  statusCancelledBySeller,
  statusReturnRequest,
  statusOrderReturned,
  statusRefundSuccess,
  orderLifeCycle,
} from "../../data/orderLifeCycle";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MiniAnalyticsStatCardV2 } from "./AnalyticsStatCards";
import { amountToDecimal, formatWithCommas } from "../../utils/helpers";

export const OrderLifeCycleStats = ({
  processOrderLifeCycleData,
  analyticsData,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
      <div
        className={`${isOpen ? "h-full" : "h-15"} w-full p-3 bg-gray-50 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex relative items-center justify-between">
          <div className="flex">
            <h1 className="font-semibold text-md">Order Life Cycle Stats</h1>
          </div>

          <div className="flex gap-6 border-gray-300 items-center">
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

        {/* Analytics boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 mt-4">
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusCompleted,
              analyticsData,
            )}
            boxTitle={"Completed"}
            boxStyle={"bg-green-200 border-green-400"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusDelivered,
              analyticsData,
            )}
            boxTitle={"Delivered"}
            boxStyle={"bg-lime-200 border-lime-400"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusOrderPlaced,
              analyticsData,
            )}
            boxTitle={"Order Placed"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusPaymentPending,
              analyticsData,
            )}
            boxTitle={"Payment Pending"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusPaymentConfirmed,
              analyticsData,
            )}
            boxTitle={"Payment Confirmed"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusProcessing,
              analyticsData,
            )}
            boxTitle={"Processing"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusPacked,
              analyticsData,
            )}
            boxTitle={"Packed"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusShipped,
              analyticsData,
            )}
            boxTitle={"Shipped"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusOutForDelivery,
              analyticsData,
            )}
            boxTitle={"Out For Delivery"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusDeliveryFailed,
              analyticsData,
            )}
            boxTitle={"Delivery Failed"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusAttemptedDelivery,
              analyticsData,
            )}
            boxTitle={"Attempted Delivery"}
            boxStyle={"bg-amber-100 border-amber-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusCancelledByBuyer,
              analyticsData,
            )}
            boxTitle={"Cancelled by Buyer"}
            boxStyle={"bg-red-100 border-red-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusCancelledBySeller,
              analyticsData,
            )}
            boxTitle={"Cancelled by Seller"}
            boxStyle={"bg-red-100 border-red-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusReturnRequest,
              analyticsData,
            )}
            boxTitle={"Return Request"}
            boxStyle={"bg-red-100 border-red-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusOrderReturned,
              analyticsData,
            )}
            boxTitle={"Returned"}
            boxStyle={"bg-red-100 border-red-200"}
          />
          <MiniAnalyticsStatCardV2
            miniAnalyticsData={processOrderLifeCycleData(
              statusRefundSuccess,
              analyticsData,
            )}
            boxTitle={"Returned Success"}
            boxStyle={"bg-red-100 border-red-200"}
          />
        </div>

        {/* Bar chart */}
        <div className="flex w-full mt-2">
          <div className="w-full p-3 bg-white border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden">
            <div className="w-full">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={orderLifeCycle.map((status) => {
                    const {
                      ordersToProcess,
                      sumOfTotalPrices,
                      sumOfAllQuantities,
                    } = processOrderLifeCycleData(status.slug, analyticsData);
                    return {
                      name: status.label,
                      Orders: ordersToProcess?.length || 0,
                      Revenue: Number(sumOfTotalPrices) || 0,
                      Items: Number(sumOfAllQuantities) || 0,
                    };
                  })}
                  margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
                  barGap={4}
                >
                  {/* Subtle horizontal grid lines */}
                  <CartesianGrid
                    strokeDasharray="4 4"
                    stroke="#f0f0f0"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="name"
                    angle={-35}
                    textAnchor="end"
                    height={75}
                    interval={0}
                    stroke="#6b7280"
                    tick={{ fontSize: 13, fontWeight: 500 }}
                    tickLine={false}
                  />

                  <YAxis
                    yAxisId="left"
                    stroke="#6b7280"
                    tick={{ fontSize: 13 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#6b7280"
                    tick={{ fontSize: 13 }}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(val) =>
                      `$${val >= 1000 ? (val / 1000).toFixed(0) + "k" : val}`
                    }
                  />

                  {/* Custom elegant floating glassmorphic tooltip */}
                  <Tooltip
                    cursor={{ fill: "#f9fafb" }}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white/95 backdrop-blur-xs p-4 border border-gray-200 shadow-xl rounded-xl font-sans text-xs min-w-[180px]">
                            <p className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-2 text-sm">
                              {label}
                            </p>
                            <div className="space-y-2">
                              {payload.map((entry, index) => {
                                const isRevenue = entry.name === "Revenue";
                                const formattedValue = isRevenue
                                  ? `$${amountToDecimal(entry.value)}`
                                  : entry.name === "Items"
                                    ? formatWithCommas(entry.value)
                                    : entry.value;

                                return (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between gap-4"
                                  >
                                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                                      <span
                                        className="w-2.5 h-2.5 rounded-full inline-block"
                                        style={{ backgroundColor: entry.color }}
                                      />
                                      <span>{entry.name}</span>
                                    </div>
                                    <span className="font-bold text-gray-900">
                                      {formattedValue}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />

                  <Legend
                    verticalAlign="top"
                    height={40}
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#374151",
                      paddingBottom: "15px",
                    }}
                  />

                  {/* Modernized Rounded Pill Bars */}
                  <Bar
                    yAxisId="left"
                    dataKey="Orders"
                    fill="#6366f1"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={35}
                    name="Orders"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="Revenue"
                    fill="#10b981"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={35}
                    name="Revenue"
                  />
                  <Bar
                    yAxisId="left"
                    dataKey="Items"
                    fill="#f59e0b"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={35}
                    name="Items"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
