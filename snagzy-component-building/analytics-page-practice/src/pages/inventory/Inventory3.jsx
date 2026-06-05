import { useSearchParams } from "react-router-dom";
import { AmountFormatSmall } from "../../components/AmountFormat";
import {
  ItemStatusBadge,
  ProductIdBadge,
  ProductVariantAttributeBadge,
  SalesBadge,
  SalesBadgeMedium,
  StoreDetailBadge,
  VariantBadge,
} from "../../components/Badges";
import { ImageDoubleExtraSmall, ImageExtraLarge } from "../../components/Image";
import { LengthIsZeroError } from "../../components/LengthIsZeroError";
import { NoSomethingSmall } from "../../components/NoSomething";
import { PricingDetailBox } from "../../components/PricingDetailBox";
import { ProductNameNAttributes } from "../../components/ProductNameNAttributes";
import { Rating } from "../../components/Rating";
import { TextNormal } from "../../components/Text";
import { TitleNormal } from "../../components/Title";
import { useData } from "../../context/DataContext";
import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import { useReviewsAnalytics } from "../../context/ReviewsAnalyticsContext";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "../../components/PageHeader";

export const Inventory3 = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    getAllProducts,
    getStoreById,
    getUserById,
    getAllProductStatus,
    getAllAttributes,
    getVariantReviewsInAProductReviews,
    getAllReviewsByProductId,
    getAllVariantStatus,
    getProductStock,
    getAllItemStatus,
  } = useData();

  // OrdersAnalyticsContext.jsx
  const ordersAnalytics = useOrdersAnalytics();
  const {
    getOrderSubTotalCountOfAVariant,
    getOrderSubTotalOfAVariant,
    getTotalSoldItemsOfAProduct,
    getTotalSalesOfAProduct,
  } = ordersAnalytics.ordersAnalyticsValue;

  // ReviewAnalyticsContext.jsx
  const reviewsAnalytics = useReviewsAnalytics();
  const { getVariantRatingAverage } = reviewsAnalytics.reviewsAnalyticsValue;

  const products = getAllProducts();
  const attributes = getAllAttributes();
  const variantStatus = getAllVariantStatus();

  const count = 2;
  const initialInventoryItemsParams = parseInt(
    searchParams.get("inventory_items") || 0,
  );
  const [inventoryItemsParams, setInventoryItemsParams] = useState(
    initialInventoryItemsParams,
  );

  // Get expanded products from URL
  const getExpandedFromURL = () => {
    const expandedParam = searchParams.get("expanded_products");
    if (!expandedParam) return {};
    const productIds = expandedParam.split(",");
    const expandedObj = {};
    productIds.forEach((id) => {
      expandedObj[id] = true;
    });
    return expandedObj;
  };

  const [expandedVariants, setExpandedVariants] = useState(getExpandedFromURL);

  // Sync state when URL changes (e.g., back/forward)
  useEffect(() => {
    setExpandedVariants(getExpandedFromURL());
  }, [searchParams]);

  useEffect(() => {
    const urlInventoryItems =
      parseInt(searchParams.get("inventory_items")) || count;
    setInventoryItemsParams(urlInventoryItems);
  }, [searchParams]);

  const filtereIventories = useMemo(() => {
    let result = products || [];
    return result;
  }, [products]);

  const displayedInvetories = useMemo(() => {
    return (filtereIventories || []).slice(0, inventoryItemsParams);
  }, [filtereIventories, inventoryItemsParams]);

  const loadMore = () => {
    const updateUrlParams = (newCount) => {
      const params = {};
      params.inventory_items = newCount;
      // Preserve existing expanded_products
      const currentExpanded = searchParams.get("expanded_products");
      if (currentExpanded) params.expanded_products = currentExpanded;
      setSearchParams(params);
    };

    const totalItems =
      filtereIventories && filtereIventories.length > 0
        ? filtereIventories.length
        : products.length;
    const newCount = Math.min(inventoryItemsParams + count, totalItems);

    if (newCount > inventoryItemsParams) {
      setInventoryItemsParams(newCount);
      updateUrlParams(newCount);
    }
  };

  const toggleVariantExpand = (productId) => {
    setExpandedVariants((prev) => {
      const newExpanded = { ...prev };
      if (newExpanded[productId]) {
        delete newExpanded[productId];
      } else {
        newExpanded[productId] = true;
      }

      // Update URL
      const productIds = Object.keys(newExpanded);
      const newParams = {};
      // Keep existing inventory_items param
      const inventoryItems = searchParams.get("inventory_items");
      if (inventoryItems) newParams.inventory_items = inventoryItems;
      if (productIds.length > 0) {
        newParams.expanded_products = productIds.join(",");
      }
      setSearchParams(newParams);

      return newExpanded;
    });
  };

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      {/* Header  */}
      <div className="w-full top-0 z-50">
        <div className="w-full flex flex-1 flex-col p-2">
          <div className="flex gap-2">
            <PageHeader defaultPage="Analytics" type="sidebar-level" />
          </div>
        </div>
      </div>
      {/* Header ends */}
      {/* Table header  */}
      <div className="sticky w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
        <div className="flex w-full justify-between">
          <div className="grid grid-cols-[2fr_7fr] w-full text-sm">
            <div className="flex border-r border-gray-300 p-1">
              Product Details
            </div>
            <div className="grid grid-cols-[4fr_1.8fr_.6fr_3fr_3fr_.5fr] w-full text-sm">
              <div className="flex border-r border-gray-300 p-1">Variants</div>
              <div className="flex border-r border-gray-300 p-1">
                Pricing Details
              </div>
              <div className="flex border-r border-gray-300 p-1">Stock</div>
              <div className="flex border-r border-gray-300 p-1">Sales</div>
              <div className="flex border-r border-gray-300 p-1">
                Review & Rating
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
          {displayedInvetories.length === 0 ? (
            <LengthIsZeroError
              title="Something went wrong"
              message="There was an error in fetching the products!"
            />
          ) : (
            displayedInvetories.map((product, index) => {
              const primaryImage = product.variants.find(
                (item) => item._id === product.defaultVariant,
              )?.primaryImage;

              const store = getStoreById(product.storeOwnerInfo.storeId);
              const storeOwner =
                (getUserById(product.storeOwnerInfo.ownerId)?.firstName || "") +
                " " +
                (getUserById(product.storeOwnerInfo.ownerId)?.lastName || "");
              const itemStatus = getAllItemStatus();
              const productStock = getProductStock(product.variants);
              const totalSoldItems = getTotalSoldItemsOfAProduct(product._id);
              const totalSales = getTotalSalesOfAProduct(product._id);

              const isExpanded = !!expandedVariants[product._id];
              const visibleVariants = isExpanded
                ? product.variants
                : product.variants.slice(0, 3);
              const hasMoreVariants = product.variants.length > 3;

              return (
                <div key={index} className="flex flex-col w-full">
                  <div
                    className={`grid grid-cols-[2fr_7fr] bg-white text-sm ${itemStatus.slug === "inactive" ? "opacity-50" : itemStatus.slug === "active" ? "" : ""}`}
                  >
                    {/* Grid 1  */}
                    <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                          <ProductIdBadge id={product._id} />
                          <ItemStatusBadge statusId={product.status} />
                        </div>
                        <div className="flex items-start gap-1 text-xs">
                          <StoreDetailBadge
                            type="store-name"
                            content={store.storeName}
                          />
                          <StoreDetailBadge
                            type="store-owner"
                            content={storeOwner}
                          />
                        </div>
                        <div className="flex gap-2">
                          <ImageExtraLarge
                            image={primaryImage}
                            alt={product.name}
                            type="square"
                          />
                          <div className="flex flex-col items-start">
                            <TitleNormal title={product.name} />
                            <TextNormal text={product.description} />
                          </div>
                        </div>
                        {product.variants.length > 1 && (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <p>Stock: </p>
                              {productStock === 0 ? (
                                <TextNormal text="Out of stock" />
                              ) : productStock === 1 ? (
                                <TextNormal text={`${productStock} Item`} />
                              ) : (
                                <TextNormal text={`${productStock} Items`} />
                              )}
                            </div>
                            <div className="flex">
                              <div className="flex flex-col items-start">
                                {totalSales >= 1 && (
                                  <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                      <SalesBadge amount={totalSales} />
                                      <p>{totalSoldItems} Sold</p>
                                    </div>
                                    {/* Static example data – keep as is */}
                                    <div className="flex flex-col mt-2">
                                      <div className="flex items-start gap-2 text-sm">
                                        <p className="text-[12px] text-gray-500">
                                          Jan 2026
                                        </p>
                                        <AmountFormatSmall amount={200.25} />
                                        <p className="text-[12px] text-gray-500">
                                          23 Sold
                                        </p>
                                      </div>
                                      <div className="flex items-start gap-2 text-sm">
                                        <p className="text-[12px] text-gray-500">
                                          Jan 2026
                                        </p>
                                        <AmountFormatSmall amount={200.25} />
                                        <p className="text-[12px] text-gray-500">
                                          23 Sold
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Grid 2  */}
                    <div className="flex flex-col w-full">
                      {product.variants.length === 0 ? (
                        <div className="flex border-b border-gray-300 h-full items-center justify-center">
                          <NoSomethingSmall text="No data found" />
                        </div>
                      ) : (
                        <>
                          {visibleVariants.map((variant, variantIndex) => {
                            const totalSalesVariant =
                              getOrderSubTotalOfAVariant(variant?._id);
                            const totalSoldItemsVariant =
                              getOrderSubTotalCountOfAVariant(variant?._id);
                            const thisProductReviews = getAllReviewsByProductId(
                              product._id,
                            );
                            const variantReviewsInProductReviews =
                              getVariantReviewsInAProductReviews(
                                variant._id,
                                thisProductReviews,
                              );
                            const variantStatusItem = variantStatus.find(
                              (item) => item._id === variant.status,
                            );

                            return (
                              <div key={variantIndex}>
                                <div
                                  className={`grid grid-cols-[4fr_1.8fr_.6fr_3fr_3fr_.5fr] border-b border-gray-300 bg-white text-sm ${variantStatusItem?.slug === "inactive" ? "opacity-50" : ""}`}
                                >
                                  {/* Variant details */}
                                  <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                    <div className="flex-col">
                                      <div className="flex gap-2">
                                        <VariantBadge id={variant._id} />
                                        <ItemStatusBadge
                                          statusId={variant.status}
                                        />
                                      </div>
                                      <div className="flex gap-2 mt-2">
                                        <ImageDoubleExtraSmall
                                          image={variant.primaryImage}
                                          alt={variant.name}
                                          type="square"
                                        />
                                        <div className="flex flex-col">
                                          <h1 className="font-semibold text-md leading-tight">
                                            <ProductNameNAttributes
                                              productName={product.name}
                                              variant={variant}
                                              attributes={attributes}
                                            />
                                          </h1>
                                          <p>SKU: {variant.sku}</p>
                                          <div className="flex gap-2 mt-2">
                                            <ProductVariantAttributeBadge
                                              variant={variant}
                                              attributes={attributes}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Pricing */}
                                  <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                    <PricingDetailBox variantItem={variant} />
                                  </div>
                                  {/* Stock */}
                                  <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                    {variant.stock}
                                  </div>
                                  {/* Sales */}
                                  <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                    {totalSalesVariant < 1 ? (
                                      <h1 className="text-gray-400">
                                        No data yet
                                      </h1>
                                    ) : (
                                      <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                          <SalesBadgeMedium
                                            amount={totalSalesVariant}
                                          />
                                          <p>{totalSoldItemsVariant} Sold</p>
                                        </div>
                                        <div className="flex flex-col mt-2">
                                          <div className="flex items-start gap-2 text-sm">
                                            <p className="text-[12px] text-gray-500">
                                              Jan 2026
                                            </p>
                                            <AmountFormatSmall
                                              amount={200.25}
                                            />
                                            <p className="text-[12px] text-gray-500">
                                              23 Sold
                                            </p>
                                          </div>
                                          <div className="flex items-start gap-2 text-sm">
                                            <p className="text-[12px] text-gray-500">
                                              Jan 2026
                                            </p>
                                            <AmountFormatSmall
                                              amount={200.25}
                                            />
                                            <p className="text-[12px] text-gray-500">
                                              23 Sold
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  {/* Reviews */}
                                  <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                    <div className="flex flex-col">
                                      <div
                                        className={
                                          variantReviewsInProductReviews.length ===
                                          0
                                            ? "text-gray-300"
                                            : ""
                                        }
                                      >
                                        {variantReviewsInProductReviews.length ===
                                        0 ? (
                                          <NoSomethingSmall text="No reviews yet" />
                                        ) : (
                                          `${variantReviewsInProductReviews.length} ${
                                            variantReviewsInProductReviews.length ===
                                            1
                                              ? "Review"
                                              : "Reviews"
                                          }`
                                        )}
                                      </div>
                                      {variantReviewsInProductReviews.length >
                                        0 && (
                                        <Rating
                                          value={getVariantRatingAverage(
                                            variant._id,
                                            thisProductReviews,
                                          )}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          {hasMoreVariants && (
                            <div className="flex items-center justify-center p-2 border-b border-gray-300 bg-gray-50">
                              <button
                                onClick={() => toggleVariantExpand(product._id)}
                                className="px-3 py-1 border border-gray-400 bg-white text-sm text-gray-600 rounded cursor-pointer hover:border-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-transform duration-200 ease-out"
                              >
                                {isExpanded
                                  ? "Show fewer variants"
                                  : `Load more variants (${product.variants.length - 3} more)`}
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          {filtereIventories.length > 0 &&
            products.length > 0 &&
            inventoryItemsParams <
              (filtereIventories.length || products.length) && (
              <div className="flex items-center justify-center p-2">
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
    </div>
  );
};
