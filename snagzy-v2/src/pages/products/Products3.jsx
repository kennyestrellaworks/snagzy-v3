import { useEffect, useMemo, useRef, useState } from "react";
import {
  AttributeOptionsBadge,
  CategoryItemBadge,
  IsActiveBadge,
  ProductIdBadge,
  StoreDetailBadge,
} from "../../components/Badges";
import { Search } from "../../components/SVG";
import { useData } from "../../context/DataContext";
import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import { useReviewsAnalytics } from "../../context/ReviewsAnalyticsContext";
import { amountToDecimal } from "../../utils/helpers";
import { useSearchParams } from "react-router-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
import { StoreFilter } from "../../components/StoreFilter";

export const Products3 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = 6;
  const {
    getAllProducts,
    getStoreById,
    getUserById,
    getCategoryNames,
    getProductPriceRange,
    getProductStock,
    getAllStores,
    getAllProductsOfStoreId,
    // getAllCategories,
  } = useData();

  const products = getAllProducts();
  const stores = getAllStores();
  // const categories = getAllCategories();
  // console.log("stores", stores);
  // console.log("categories", categories);

  const ordersAnalytics = useOrdersAnalytics();
  const { getTotalSoldItemsOfAProduct, getTotalSalesOfAProduct } =
    ordersAnalytics.ordersAnalyticsValue;

  const reviewsAnalytics = useReviewsAnalytics();
  const { getAllReviewsByProductId } = reviewsAnalytics.reviewsAnalyticsValue;

  // Filter open state //////////////////
  const [storeDropdownOpen, setStoreDropdownOpen] = useState(false);

  // Filter searchParams //////////////////

  // Store params
  const initialStoreParams = searchParams.get("store") || "";
  const [storeParams, setStoreParams] = useState(initialStoreParams);

  // Visible count params
  const initialVisibleCountParams = parseInt(
    searchParams.get("visible_count") || 0,
  );
  const [visibleCountParams, setVisibleCountParams] = useState(
    initialVisibleCountParams,
  );

  // Filter store status change //////////////////
  const handleStoreChange = (storeId) => {
    const storeItem = getStoreById(storeId);
    const val = storeItem?.storeName || "";
    setStoreParams(val);

    const params = {};
    if (val) params.store = val;
    setSearchParams(params);
  };

  useEffect(() => {
    const urlStore = searchParams.get("store") || "";
    const urlVisibleCount =
      parseInt(searchParams.get("visible_count")) || count;

    if (urlStore !== storeParams) setStoreParams(urlStore);
    setVisibleCountParams(urlVisibleCount);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Close all dropdowns if click is outside any dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('[aria-label="store-filter"]')) {
        setStoreDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter dropdown refs
  const storeDropdownRef = useRef(null);

  // Filter click outside using hook.
  useClickOutside(storeDropdownRef, () => setStoreDropdownOpen(false));

  // Filter get selected payment status item
  const selectedStore = (stores || []).find(
    (item) => item?.storeName === storeParams,
  );
  const selectedStoreDisplay = selectedStore?.storeName || "Store";
  const isStoreSelected = !!storeParams;

  const filteredProducts = useMemo(() => {
    let result = products || [];

    // Filter by selected store
    if (selectedStore) {
      result = result.filter(
        (item) => (item.storeOwnerInfo?.storeId || "") === selectedStore._id,
      );
    } else if (storeParams) {
      // store param set but no matching store -> show no results
      result = [];
    }

    return result;
  }, [products, selectedStore, storeParams]);

  const displayedProducts = useMemo(() => {
    return (filteredProducts || []).slice(0, visibleCountParams);
  }, [filteredProducts, visibleCountParams]);

  const loadMore = () => {
    const updateUrlParams = (newCount) => {
      const params = {};
      if (storeParams) params.store = storeParams;
      params.visible_count = newCount;
      setSearchParams(params);
    };

    const totalItems =
      filteredProducts && filteredProducts.length > 0
        ? filteredProducts.length
        : products.length;
    const newCount = Math.min(visibleCountParams + count, totalItems);

    if (newCount > visibleCountParams) {
      setVisibleCountParams(newCount);
      updateUrlParams(newCount);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="sticky w-full top-0 z-50">
        <div className="w-full flex flex-1 flex-col p-2">
          {/* Store filter  */}
          <StoreFilter
            stores={stores}
            storeDropdownRef={storeDropdownRef}
            setStoreDropdownOpen={setStoreDropdownOpen}
            selectedStoreDisplay={selectedStoreDisplay}
            isStoreSelected={isStoreSelected}
            selectedStore={selectedStore}
            getAllProductsOfStoreId={getAllProductsOfStoreId}
            storeDropdownOpen={storeDropdownOpen}
            handleStoreChange={handleStoreChange}
          />
          {/* Store filter ends  */}
        </div>
      </div>
      {/* Table header  */}
      <div className="sticky w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
        <div className="flex w-full justify-between">
          <div className="grid grid-cols-[3.8fr_1.5fr_1.6fr_2fr_.7fr_1.2fr_1fr_.6fr_.8fr_.7fr_.3fr] w-full text-sm">
            <div className="flex border-r border-gray-300 p-2">Product</div>
            <div className="flex border-r border-gray-300 p-2">Store</div>
            <div className="flex border-r border-gray-300 p-2">Categories</div>
            <div className="flex border-r border-gray-300 p-2">Attributes</div>
            <div className="flex border-r border-gray-300 p-2">Variants</div>
            <div className="flex border-r border-gray-300 p-2">Price Range</div>
            <div className="flex border-r border-gray-300 p-2">Status</div>
            <div className="flex border-r border-gray-300 p-2">Stock</div>
            <div className="flex border-r border-gray-300 p-2">Sales</div>
            <div className="flex border-r border-gray-300 p-2">Reviews</div>
            <div className="flex border-r border-gray-300 p-2"></div>
          </div>
          <div className="flex w-2 bg-blue-100"></div>
        </div>
      </div>
      {/* Table header ends  */}
      {/* List area */}
      <div className="flex w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col w-full">
          {displayedProducts.length === 0 ? (
            <div className="flex items-center w-full h-screen">
              <div className="w-100 m-auto text-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    No data found
                  </h2>
                  <p className="text-gray-600">
                    Something went wrong while fetching the data!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              {displayedProducts.map((product, index) => {
                // Product image
                const primaryImage = product.variants.find(
                  (item) => item._id === product.defaultVariant,
                )?.primaryImage;

                // Store
                const store = getStoreById(product.storeOwnerInfo.storeId);

                // Store owner
                const storeOwner =
                  getUserById(product.storeOwnerInfo.ownerId)?.firstName +
                  " " +
                  getUserById(product.storeOwnerInfo.ownerId)?.lastName;

                // Product stock
                const productStock = getProductStock(product.variants);

                // Price range of product
                const priceRange = getProductPriceRange(product.variants);

                // Sales of a product
                const totalSoldItems = getTotalSoldItemsOfAProduct(product._id);
                const totalSales = getTotalSalesOfAProduct(product._id);

                // Reviews
                const reviewsCount = getAllReviewsByProductId(
                  product._id,
                )?.length;

                return (
                  <div
                    key={index}
                    className={`grid grid-cols-[3.8fr_1.5fr_1.6fr_2fr_.7fr_1.2fr_1fr_.6fr_.8fr_.7fr_.3fr] border-b border-gray-300 last:border-b-0 bg-white text-sm ${product.isActive ? "" : "opacity-40"}`}
                  >
                    {/* Product box  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      <div className="flex items-start flex-col gap-2">
                        <ProductIdBadge id={product._id} />
                        <div className="flex gap-2">
                          <div className="flex mb-2 w-20 h-20 shrink-0">
                            <img
                              src={primaryImage}
                              alt={product.name}
                              className="w-20 h-20 object-cover rounded"
                            />
                          </div>
                          <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg">
                              {product.name}
                            </h3>
                            <p className="text-md text-gray-600 mt-2">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Store box  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      <div className="flex flex-col items-start gap-1 text-xs">
                        <StoreDetailBadge
                          type="store-name"
                          content={store.storeName}
                        />
                        <StoreDetailBadge
                          type="store-owner"
                          content={storeOwner}
                        />
                      </div>
                    </div>
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      <div className="flex items-start">
                        {Array.isArray(product.categories) &&
                          product.categories.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {getCategoryNames(product.categories).map(
                                (category, index) => (
                                  <div key={index} className="flex">
                                    <CategoryItemBadge category={category} />
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                      </div>
                    </div>
                    {/* Attributes box  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      {product.attributes.length === 0 ? (
                        <p className="text-gray-400">NA</p>
                      ) : (
                        <AttributeOptionsBadge product={product} />
                      )}
                    </div>
                    {/* Variants box  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      <p className="text-xs">
                        {(product.variants || []).length === 0 ? (
                          <p className="text-gray-400">NA</p>
                        ) : (
                          (product.variants || []).length
                        )}
                      </p>
                    </div>
                    {/* Price range  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      {product.variants && product.variants.length > 0 ? (
                        <div className="flex flex-col">
                          <p>
                            <span className="text-gray-600 text-[12px]">
                              Min:{" "}
                            </span>
                            <span className="font-semibold">
                              ${amountToDecimal(priceRange.min)}
                            </span>
                          </p>
                          <p>
                            <span className="text-gray-600 text-[12px]">
                              Max:{" "}
                            </span>
                            <span className="font-semibold">
                              ${amountToDecimal(priceRange.max)}
                            </span>
                          </p>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">NA</span>
                      )}
                    </div>
                    {/* Status box  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      <div className="flex items-start text-xs">
                        <IsActiveBadge status={product.isActive} />
                      </div>
                    </div>
                    {/* Stock box  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      {productStock === 0
                        ? "Out of stock"
                        : productStock === 1
                          ? `${productStock} item`
                          : `${productStock} items`}
                    </div>
                    {/* Sales box */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      <div className="flex flex-col">
                        <p className="text-gray-600">
                          {totalSoldItems === 0 ? (
                            <p className="text-gray-400">NA</p>
                          ) : totalSoldItems === 1 ? (
                            `${totalSoldItems} item`
                          ) : (
                            `${totalSoldItems} items`
                          )}
                        </p>
                        <p className="font-semibold">
                          {/* $
                          {amountToDecimal(
                            getTotalSalesOfAProduct(product._id),
                          )} */}
                          ${amountToDecimal(totalSales)}
                        </p>
                      </div>
                    </div>
                    {/* Reviews box  */}
                    <div className="flex p-2 border-r border-gray-300 h-full">
                      {reviewsCount === 0 ? (
                        <p className="text-gray-400">NA</p>
                      ) : reviewsCount === 1 ? (
                        `${reviewsCount} review`
                      ) : (
                        `${reviewsCount} reviews`
                      )}
                    </div>
                    <div className="flex p-2 "></div>
                  </div>
                );
              })}
            </div>
          )}
          {visibleCountParams <
            (filteredProducts.length || products.length) && (
            <div className="flex items-center justify-center border-t border-gray-300">
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
      {/* List area ends  */}
    </div>
  );
};
