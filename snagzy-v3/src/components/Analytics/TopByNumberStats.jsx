import { useState } from "react";
import { successfulOrderStatuses } from "../../data/orderLifeCycle";
import { IoIosArrowDown } from "../SVG";
import { useTopAnalytics } from "../../context/TopAnalyticsContext";
import { LimitSelector } from "./LimitSelector";

export const TopByNumberStats = ({
  analyticsData,
  topLimitProducts,
  setTopLimitProducts,
  topLimitBuyers,
  setTopLimitBuyers,
  topLimitStores,
  setTopLimitStores,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  const { topAnalyticsValue } = useTopAnalytics();

  // Compute records based on successful orders
  const topProducts = topAnalyticsValue.getTopSellingProductsByOrderLifeCycle(
    analyticsData,
    successfulOrderStatuses,
    topLimitProducts,
  );

  const topBuyers = topAnalyticsValue.getTopBuyersByOrderLifeCycle(
    analyticsData,
    successfulOrderStatuses,
    topLimitBuyers,
  );

  const topStores = topAnalyticsValue.getTopStoresByOrderLifeCycle(
    analyticsData,
    successfulOrderStatuses,
    topLimitStores,
  );

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
      <div
        className={`${isOpen ? "h-full" : "h-15"} w-full p-3 bg-gray-50 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="flex relative items-center justify-between">
          <div className="flex">
            <h1 className="font-semibold text-md">Top by Number Stats</h1>
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

        <div className="grid grid-cols-[1fr_1fr_1fr] mt-4 gap-2">
          {/* Grid 1 */}
          <div className="w-full p-3 bg-white border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden">
            <div className="flex justify-between gap-10 mb-4 border-b border-slate-100 pb-3">
              <div className="flex flex-col">
                <h2 className="text-md font-bold text-slate-800">
                  Top Products in Sales
                </h2>
                <p className="text-sm text-slate-500">
                  Displaying the top items by unit volume from successful sales
                </p>
              </div>
              <div className="flex items-start">
                <LimitSelector
                  id="product-limit"
                  value={topLimitProducts}
                  onChangeValue={setTopLimitProducts}
                />
              </div>
            </div>

            {topProducts.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {topProducts.map((product, idx) => (
                  <div
                    key={product.productId}
                    className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="w-5 text-center text-sm font-bold text-slate-400">
                        {idx + 1}
                      </span>
                      {product.primaryImage ? (
                        <img
                          src={product.primaryImage}
                          alt={product.productName}
                          className="h-12 w-12 rounded-lg bg-slate-100 border border-slate-100 object-cover"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs font-medium text-slate-400">
                          No Image
                        </div>
                      )}
                      <div>
                        <h3 className="line-clamp-1 text-sm font-semibold text-slate-800">
                          {product.productName}
                        </h3>
                        <p className="text-xs text-slate-400">
                          ID: {product.productId}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-800">
                        {product.totalQuantitySold} sold
                      </p>
                      <p className="text-xs font-medium text-emerald-600">
                        {formatCurrency(product.totalRevenue)} gross
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-sm text-slate-400">
                No product data found matching successful criteria.
              </div>
            )}
          </div>
          {/* Grid 1 ends */}

          {/* Grid 2 */}
          <div className="w-full p-3 bg-white border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden">
            <div className="flex justify-between gap-10 mb-4 border-b border-slate-100 pb-3">
              <div className="flex flex-col">
                <h2 className="text-md font-bold text-slate-800">
                  Top Customers in Spending
                </h2>
                <p className="text-sm text-slate-500">
                  Displaying the highest spending buyers from completed
                  transactions
                </p>
              </div>
              <div className="flex items-start">
                <LimitSelector
                  id="buyer-limit"
                  value={topLimitBuyers}
                  onChangeValue={setTopLimitBuyers}
                />
              </div>
            </div>

            {topBuyers.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {topBuyers.map((buyer, idx) => (
                  <div
                    key={buyer.buyerId}
                    className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="w-5 text-center text-sm font-bold text-slate-400">
                        {idx + 1}
                      </span>
                      {buyer.image ? (
                        <img
                          src={buyer.image}
                          alt={buyer.fullName}
                          className="h-12 w-12 rounded-full bg-slate-100 border border-slate-100 object-cover"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-400 border border-slate-100">
                          User
                        </div>
                      )}
                      <div>
                        <h3 className="line-clamp-1 text-sm font-semibold text-slate-800">
                          {buyer.fullName}
                        </h3>
                        <p className="text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                          {buyer.email}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-800">
                        {formatCurrency(buyer.totalSpent)} spent
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        {buyer.totalItemsPurchased} units bought
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-sm text-slate-400">
                No customer spending records found matching successful criteria.
              </div>
            )}
          </div>
          {/* Grid 2 ends */}

          {/* Grid 3 */}
          <div className="w-full p-3 bg-white border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden">
            <div className="flex justify-between gap-10 mb-4 border-b border-slate-100 pb-3">
              <div className="flex flex-col">
                <h2 className="text-md font-bold text-slate-800">
                  Top Stores in Sales
                </h2>
                <p className="text-sm text-slate-500">
                  Displaying the stores ranked by total generated sales revenue
                </p>
              </div>
              <div className="flex items-start">
                <LimitSelector
                  id="store-limit"
                  value={topLimitStores}
                  onChangeValue={setTopLimitStores}
                />
              </div>
            </div>

            {topStores.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {topStores.map((store, idx) => (
                  <div
                    key={store.storeId}
                    className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="w-5 text-center text-sm font-bold text-slate-400">
                        {idx + 1}
                      </span>
                      {store.storeLogo ? (
                        <img
                          src={store.storeLogo}
                          alt={store.storeName}
                          className="h-12 w-12 rounded-lg bg-slate-100 border border-slate-100 object-cover"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 border border-slate-100 text-xs font-semibold text-slate-500">
                          Store
                        </div>
                      )}
                      <div>
                        <h3 className="line-clamp-1 text-sm font-semibold text-slate-800">
                          {store.storeName}
                        </h3>
                        <p className="text-xs text-slate-400">
                          ID: {store.storeId}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-800">
                        {formatCurrency(store.totalRevenue)} sales
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        {store.totalItemsSold} units sold
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-6 text-center text-sm text-slate-400">
                No store data found matching successful criteria.
              </div>
            )}
          </div>
          {/* Grid 3 ends  */}
        </div>
      </div>
    </div>
  );
};
