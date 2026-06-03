import { useTopAnalytics } from "../../context/TopAnalyticsContext";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import {
  successfulOrderStatuses,
  pendingOrderStatuses,
  unsuccessfulOrderStatuses,
} from "../../data/orderLifeCycle";
import { CustomTooltip } from "./CustomTooltip";

export const OrderLifeCycleDistribution = ({ analyticsData }) => {
  const { topAnalyticsValue } = useTopAnalytics();

  // Dynamically generated distribution array from your simplified method
  const lifecycleDist = [
    topAnalyticsValue.getOrderStatusDistribution(
      successfulOrderStatuses,
      analyticsData,
    ),
    topAnalyticsValue.getOrderStatusDistribution(
      pendingOrderStatuses,
      analyticsData,
    ),
    topAnalyticsValue.getOrderStatusDistribution(
      unsuccessfulOrderStatuses,
      analyticsData,
    ),
  ];

  const LIFECYCLE_COLORS = ["#22c55e", "#eab308", "#ef4444"];

  const hasData = lifecycleDist.some((item) => item.value > 0);

  return (
    <div className="flex flex-col w-full p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          Order Lifecycle Distribution
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Fulfillment pipelines, successful deliveries, and cancellations
        </p>
      </div>

      <div className="flex items-start w-full gap-6">
        <div className="flex w-full bg-white border border-gray-200 rounded-md p-4">
          <div className="flex h-64 flex-col w-full justify-center items-center">
            {hasData ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={lifecycleDist}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={75}
                    dataKey="value"
                    label={({ value }) => `${value}`}
                    labelLine={true}
                  >
                    {lifecycleDist.map((_, i) => (
                      <Cell
                        key={`cell-${i}`}
                        fill={LIFECYCLE_COLORS[i % LIFECYCLE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="square"
                    iconSize={12}
                    wrapperStyle={{ marginTop: "-10px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-sm text-gray-400">
                No order status data available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
