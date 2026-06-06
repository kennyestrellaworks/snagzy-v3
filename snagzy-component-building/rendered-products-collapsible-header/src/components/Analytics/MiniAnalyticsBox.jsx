import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import { formatWithCommas } from "../../utils/helpers";
import { AmountFormat } from "../AmountFormat";

export const MiniAnalyticsBox = ({ statusSlug, data, boxTitle, boxStyle }) => {
  const { ordersAnalyticsValue } = useOrdersAnalytics();

  const ordersToProcess = ordersAnalyticsValue.getOrdersByStatusSlug(
    statusSlug,
    data,
  );

  const sumOfTotalPrices = ordersToProcess.reduce((sum, order) => {
    const raw = order?.summary?.orderTotalPrice;
    const price = Number(raw || 0);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const sumOfAllQuantities =
    ordersAnalyticsValue.getSumOrderedItemsQuantity(ordersToProcess);

  return (
    <div className="flex">
      <div className={`flex flex-col border ${boxStyle} p-1 rounded-sm`}>
        <h1 className="leading-tight text-[12px]">{boxTitle}</h1>
        <AmountFormat amount={sumOfTotalPrices} />
        {ordersToProcess.length < 1 ? (
          <div className="flex flex-col mt-1">
            <p className="text-[11px] leading-tight text-gray-500">No data</p>
            <p className="text-[11px] leading-tight text-gray-500">No data</p>
          </div>
        ) : (
          <div className="flex flex-col mt-1">
            <p className="text-[11px] leading-tight">
              {formatWithCommas(ordersToProcess.length)}{" "}
              {ordersToProcess.length === 1
                ? "Order"
                : ordersToProcess.length > 1
                  ? "Orders"
                  : "-"}
            </p>
            <p className="text-[11px] leading-tight">
              {formatWithCommas(sumOfAllQuantities)}{" "}
              {sumOfAllQuantities === 1
                ? "Item"
                : sumOfAllQuantities > 1
                  ? "Items"
                  : "-"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
