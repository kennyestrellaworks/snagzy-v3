import { useOutletContext, useSearchParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { LengthIsZeroError } from "../../components/LengthIsZeroError";
import { NoSomethingSmall } from "../../components/NoSomething";
import {
  ItemStatusBadge,
  OrderIdBadge,
  ProductVariantAttributeBadge,
  ReviewsBadge,
  VariantBadge,
} from "../../components/Badges";
import { ImageDoubleExtraSmall } from "../../components/Image";
import { ProductNameNAttributes } from "../../components/ProductNameNAttributes";
import { OrderPlacedUpdated } from "../../components/DateBoxed";
import { BuyerDetail } from "../../components/BuyerDetail";
import { isoToRegularTimestamp } from "../../utils/helpers";
import { Rating, RatingV2 } from "../../components/Rating";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  sortItem,
  sortItemsWithoutDropdown,
  sortItemWithDropdownButton,
  sortItemWithDropdownItem,
  sortItemWithDropdownLabel,
  sortItemWithDropdownLabelWrapper,
  sortItemWithDropdownList,
  sortItemWithDropdownListItem,
} from "./products-css";
import {
  IoArrowDownOutline,
  IoArrowUpOutline,
  TbArrowsSort,
} from "../../components/SVG";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Loader } from "../../components/Loader";
import { useReviewsAnalytics } from "../../context/ReviewsAnalyticsContext";

export const ProductReviews2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  const {
    createProductVariantsObjectWithReviews,
    getUsersWhoReviewed,
    getAllVariantStatus,
    getOrderDetailsSortingOptions,
    getBuyerDetailsSortingOptions,
  } = useData();

  // ReviewAnalyticsContext.jsx
  const reviewAnalytics = useReviewsAnalytics();
  const { getAverageReview, getReviewsBreakdown } =
    reviewAnalytics.reviewsAnalyticsValue;

  const { thisProduct, thisProductReviews, ordersByThisProduct, attributes } =
    useOutletContext();

  // console.log("thisProductReviews", thisProductReviews);

  const buyersWhoReviewed = getUsersWhoReviewed(thisProductReviews);

  // Sort dropdown data
  const orderDetailsSortingOption = getOrderDetailsSortingOptions();
  const buyerDetailsSortingOption = getBuyerDetailsSortingOptions();

  const thisProductVariantsWithReviews = createProductVariantsObjectWithReviews(
    thisProduct.variants,
    thisProductReviews,
    buyersWhoReviewed,
    ordersByThisProduct,
  );

  // const thisProductVariantsWithReviews = [];
  // console.log("thisProductVariantsWithReviews", thisProductVariantsWithReviews);

  // Effect to handle loading state with timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Sorting params
  const initialSortField = searchParams.get("sort_field") || "order-placed";
  const [sortField, setSortField] = useState(initialSortField);
  const initialSortDirection = searchParams.get("sort_direction") || "asc";
  const [sortDirection, setSortDirection] = useState(initialSortDirection);

  // Dropdown state
  const [orderDetailsSortDropdownOpen, setOrderDetailsSortDropdownOpen] =
    useState(false);
  const [buyerDetailsSortDropdownOpen, setBuyerDetailsSortDropdownOpen] =
    useState(false);

  // Dropdown refs
  const orderDetailsSortDropdownRef = useRef(null);
  const buyerDetailsSortDropdownRef = useRef(null);

  const count = 6;
  // Variant items count params
  const initialVariantItemsParams = parseInt(
    searchParams.get("variant_items") || 0,
  );
  const [variantItemsParams, setVariantItemsParams] = useState(
    initialVariantItemsParams,
  );

  // useEffect mount values
  useEffect(() => {
    const urlVariantItems =
      parseInt(searchParams.get("variant_items")) || count;

    setVariantItemsParams(urlVariantItems);
  }, [searchParams]);

  // Filter click outside using hook
  useClickOutside(orderDetailsSortDropdownRef, () =>
    setOrderDetailsSortDropdownOpen(false),
  );
  useClickOutside(buyerDetailsSortDropdownRef, () =>
    setBuyerDetailsSortDropdownOpen(false),
  );

  // Filtering and Sorting
  const filteredThisProductVariants = useMemo(() => {
    let result = thisProductVariantsWithReviews || [];

    if (!result.length) return result;

    // Sorting order details
    const sortOrderDetails = (r1, r2) => {
      let v1 = 0,
        v2 = 0;
      if (sortField === "order-placed") {
        v1 = r1.orderInfo?.createdAt
          ? new Date(r1.orderInfo.createdAt).getTime()
          : 0;
        v2 = r2.orderInfo?.createdAt
          ? new Date(r2.orderInfo.createdAt).getTime()
          : 0;
      } else if (sortField === "last-update") {
        v1 = r1.orderInfo?.updatedAt
          ? new Date(r1.orderInfo.updatedAt).getTime()
          : 0;
        v2 = r2.orderInfo?.updatedAt
          ? new Date(r2.orderInfo.updatedAt).getTime()
          : 0;
      }
      if (sortDirection === "asc") return v1 - v2;
      return v2 - v1;
    };

    // Sorting buyer details
    const sortBuyerDetails = (r1, r2) => {
      let v1 = "",
        v2 = "";
      if (sortField === "first-name") {
        v1 = r1.buyerInfo?.buyerFirstName
          ? r1.buyerInfo.buyerFirstName.toLowerCase()
          : "";
        v2 = r2.buyerInfo?.buyerFirstName
          ? r2.buyerInfo.buyerFirstName.toLowerCase()
          : "";
      } else if (sortField === "last-name") {
        v1 = r1.buyerInfo?.buyerLastName
          ? r1.buyerInfo.buyerLastName.toLowerCase()
          : "";
        v2 = r2.buyerInfo?.buyerLastName
          ? r2.buyerInfo.buyerLastName.toLowerCase()
          : "";
      } else if (sortField === "email") {
        v1 = r1.buyerInfo?.email ? r1.buyerInfo.email.toLowerCase() : "";
        v2 = r2.buyerInfo?.email ? r2.buyerInfo.email.toLowerCase() : "";
      }
      if (sortDirection === "asc") return v1.localeCompare(v2);
      return v2.localeCompare(v1);
    };

    const sortByRating = (r1, r2) => {
      const v1 = r1.rating || 0;
      const v2 = r2.rating || 0;
      if (sortDirection === "asc") return v1 - v2;
      return v2 - v1;
    };

    const sortByDate = (r1, r2) => {
      const v1 = r1.createdAt ? new Date(r1.createdAt).getTime() : 0;
      const v2 = r2.createdAt ? new Date(r2.createdAt).getTime() : 0;
      if (sortDirection === "asc") return v1 - v2;
      return v2 - v1;
    };

    // First, sort the variants themselves
    // This ensures variants appear in a consistent order
    result = [...result].sort((a, b) => {
      // Sort by variant name or ID for consistency
      return (a.name || a._id || "").localeCompare(b.name || b._id || "");
    });

    // Then sort reviews inside each variant
    result = result.map((variant) => {
      if (!Array.isArray(variant.reviews) || variant.reviews.length === 0) {
        return variant;
      }

      let sortedReviews = [...variant.reviews];

      if (["order-placed", "last-update"].includes(sortField)) {
        sortedReviews.sort(sortOrderDetails);
      } else if (["first-name", "last-name", "email"].includes(sortField)) {
        sortedReviews.sort(sortBuyerDetails);
      } else if (sortField === "rating") {
        sortedReviews.sort(sortByRating);
      } else if (sortField === "review-date") {
        sortedReviews.sort(sortByDate);
      }

      return {
        ...variant,
        reviews: sortedReviews,
      };
    });

    return result;
  }, [thisProductVariantsWithReviews, sortField, sortDirection]);

  const displayedThisProductVariants = useMemo(() => {
    return (filteredThisProductVariants || []).slice(0, variantItemsParams);
  }, [filteredThisProductVariants, variantItemsParams]);

  console.log("displayedThisProductVariants", displayedThisProductVariants);

  // Load more button
  const loadMore = () => {
    const updateUrlParams = (newCount) => {
      const params = {};
      params.variant_items = newCount;
      // persist sort
      if (sortField) params.sort_field = sortField;
      if (sortDirection) params.sort_direction = sortDirection;

      setSearchParams(params);
    };

    const totalItems =
      filteredThisProductVariants && filteredThisProductVariants.length > 0
        ? filteredThisProductVariants.length
        : thisProduct.variants.length;
    const newCount = Math.min(variantItemsParams + count, totalItems);

    if (newCount > variantItemsParams) {
      setVariantItemsParams(newCount);
      updateUrlParams(newCount);
    }
  };

  const variantStatus = getAllVariantStatus();

  // Helper function to update sort parameters
  const updateSortParams = (field, direction) => {
    const params = {};
    if (variantItemsParams) params.variant_items = variantItemsParams;
    params.sort_field = field;
    params.sort_direction = direction;
    setSearchParams(params);
  };

  // If data is still loading, show Loader
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      {/* Table header */}
      <div className="sticky w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
        <div className="flex w-full justify-between">
          <div className="grid grid-cols-[2fr_6fr] w-full text-sm">
            <div className="flex border-r border-gray-300 p-1">
              Variant Details
            </div>
            <div className="grid grid-cols-[2.4fr_3.6fr_3fr_1.8fr_.5fr] w-full text-sm">
              {/* Order details sorting header */}
              <div className="flex border-r border-gray-300 p-1">
                <div className={sortItem} ref={orderDetailsSortDropdownRef}>
                  <span>Order Details</span>
                  {displayedThisProductVariants.length === 0 ? (
                    ""
                  ) : (
                    <button
                      onClick={() =>
                        setOrderDetailsSortDropdownOpen((open) => !open)
                      }
                      className={sortItemWithDropdownButton}
                    >
                      <TbArrowsSort height={16} width={16} />
                    </button>
                  )}
                  {orderDetailsSortDropdownOpen && (
                    <div className={sortItemWithDropdownItem}>
                      <div className={sortItemWithDropdownLabelWrapper}>
                        <div className={sortItemWithDropdownLabel}>
                          Sort by:
                        </div>
                        <div className={sortItemWithDropdownList}>
                          {orderDetailsSortingOption.map((item, index) => {
                            return (
                              <div
                                key={index}
                                onMouseDown={() => {
                                  const newDirection =
                                    sortField === item.slug
                                      ? sortDirection === "asc"
                                        ? "desc"
                                        : "asc"
                                      : "asc";
                                  setSortField(item.slug);
                                  setSortDirection(newDirection);
                                  updateSortParams(item.slug, newDirection);
                                }}
                                className={`${sortItemWithDropdownListItem} ${sortField === item.slug ? "bg-gray-100" : ""}`}
                              >
                                <div className="flex gap-2 items-center">
                                  {item.name}
                                  {sortField === item.slug ? (
                                    sortDirection === "asc" ? (
                                      <IoArrowUpOutline
                                        height={14}
                                        width={14}
                                      />
                                    ) : (
                                      <IoArrowDownOutline
                                        height={14}
                                        width={14}
                                      />
                                    )
                                  ) : null}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Buyer details sorting header */}
              <div className="flex border-r border-gray-300 p-1">
                <div className={sortItem} ref={buyerDetailsSortDropdownRef}>
                  <span>Buyer Details</span>
                  {displayedThisProductVariants.length === 0 ? (
                    ""
                  ) : (
                    <button
                      onClick={() =>
                        setBuyerDetailsSortDropdownOpen((open) => !open)
                      }
                      className={sortItemWithDropdownButton}
                    >
                      <TbArrowsSort height={16} width={16} />
                    </button>
                  )}

                  {buyerDetailsSortDropdownOpen && (
                    <div className={sortItemWithDropdownItem}>
                      <div className={sortItemWithDropdownLabelWrapper}>
                        <div className={sortItemWithDropdownLabel}>
                          Sort by:
                        </div>
                        <div className={sortItemWithDropdownList}>
                          {buyerDetailsSortingOption.map((item, index) => {
                            return (
                              <div
                                key={index}
                                onMouseDown={() => {
                                  const newDirection =
                                    sortField === item.slug
                                      ? sortDirection === "asc"
                                        ? "desc"
                                        : "asc"
                                      : "asc";
                                  setSortField(item.slug);
                                  setSortDirection(newDirection);
                                  updateSortParams(item.slug, newDirection);
                                }}
                                className={`${sortItemWithDropdownListItem} ${sortField === item.slug ? "bg-gray-100" : ""}`}
                              >
                                <div className="flex gap-2 items-center">
                                  {item.name}
                                  {sortField === item.slug ? (
                                    sortDirection === "asc" ? (
                                      <IoArrowUpOutline
                                        height={14}
                                        width={14}
                                      />
                                    ) : (
                                      <IoArrowDownOutline
                                        height={14}
                                        width={14}
                                      />
                                    )
                                  ) : null}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Rating & review sorting header */}
              <div className="flex border-r border-gray-300 p-1">
                <span>Rating & Review</span>
                {displayedThisProductVariants.length === 0 ? (
                  ""
                ) : (
                  <button
                    onClick={() => {
                      const newDirection =
                        sortField === "rating"
                          ? sortDirection === "asc"
                            ? "desc"
                            : "asc"
                          : "asc";
                      setSortField("rating");
                      setSortDirection(newDirection);
                      updateSortParams("rating", newDirection);
                    }}
                    className={sortItemsWithoutDropdown}
                  >
                    <TbArrowsSort height={16} width={16} />
                  </button>
                )}
              </div>
              <div className="flex border-r border-gray-300 p-1">Media</div>
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
          {displayedThisProductVariants.length === 0 ? (
            <div className="mt-20">
              <LengthIsZeroError />
            </div>
          ) : (
            displayedThisProductVariants.map((variant, index) => {
              // Variant status
              const statusItem = variantStatus.find(
                (item) => item._id === variant.status,
              );
              const averageReview = getAverageReview(variant.reviews);
              const reviewBreakdown = getReviewsBreakdown(variant.reviews);
              // console.log("variant", variant);
              // console.log("averageReview", averageReview);
              // console.log("reviewBreakdown", reviewBreakdown);
              // console.log("variant.reviews", variant.reviews.length);

              return (
                <div key={index} className="flex flex-col w-full">
                  <div
                    className={`grid grid-cols-[2fr_6fr] border-gray-300 bg-white text-sm ${
                      statusItem?.slug === "inactive" ? "opacity-50" : ""
                    }`}
                  >
                    {/* Column 1 */}
                    <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                      {/* Variant details box */}
                      <div className="flex-col w-full">
                        <div className="flex gap-2">
                          <VariantBadge id={variant._id} />
                          <ItemStatusBadge statusId={variant.status} />
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
                                productName={thisProduct.name}
                                variant={variant}
                                attributes={attributes}
                              />
                            </h1>
                            <p className="leading-tight">SKU: {variant.sku}</p>
                            <div className="flex gap-2 mt-2">
                              <ProductVariantAttributeBadge
                                variant={variant}
                                attributes={attributes}
                              />
                            </div>
                          </div>
                        </div>
                        {variant.reviews.length > 0 && (
                          <div className="flex flex-col border border-gray-200 p-2 mt-4">
                            <h1 className="font-semibold text-md leading-tight">
                              Variant Review Breakdown
                            </h1>
                            <div className="grid grid-cols-[1fr_4fr] mt-4 gap-4">
                              <div className="flex flex-col items-center justify-center">
                                <RatingV2 value={averageReview} />
                                <p className="text-gray-400">
                                  {variant.reviews.length}{" "}
                                  {variant.reviews.length < 2
                                    ? "review"
                                    : "reviews"}
                                </p>
                              </div>
                              <div className="flex">
                                <div className="flex-1 space-y-1">
                                  {[5, 4, 3, 2, 1].map((star) => {
                                    const count = reviewBreakdown[star] || 0;
                                    const pct =
                                      variant.reviews.length > 0
                                        ? (count / variant.reviews.length) * 100
                                        : 0;

                                    return (
                                      <div
                                        key={star}
                                        className="flex items-center gap-3"
                                      >
                                        <span className="text-xs text-gray-500 w-3 text-right">
                                          {star}
                                        </span>
                                        <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                          <div
                                            className="h-full rounded-full transition-all duration-700"
                                            style={{
                                              width: `${pct}%`,
                                              background:
                                                star >= 4
                                                  ? "#22c55e"
                                                  : star === 3
                                                    ? "#f59e0b"
                                                    : "#ef4444",
                                            }}
                                          />
                                        </div>
                                        <span className="text-xs text-gray-400 w-6 text-right">
                                          {count}
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Column 2  */}
                    <div className="flex flex-col w-full">
                      {variant.reviews.length === 0 ? (
                        <div className="flex border-b border-gray-300 h-full items-center justify-center">
                          <NoSomethingSmall text="No data found" />
                        </div>
                      ) : (
                        variant.reviews.map((variantItem, variantIndex) => {
                          // console.log("thisProductReviews", thisProductReviews);
                          // console.log("variantItem", variantItem);
                          return (
                            <div key={variantIndex} className="h-full">
                              <div
                                className={`grid grid-cols-[2.4fr_3.6fr_3fr_1.8fr_.5fr] border-b border-gray-300 bg-white text-sm h-full`}
                              >
                                {/* Order details box */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <div className="flex flex-col items-start gap-2">
                                    <div className="flex items-start">
                                      <OrderIdBadge
                                        id={variantItem.orderInfo?.orderId}
                                      />
                                    </div>
                                    <OrderPlacedUpdated
                                      createdAt={
                                        variantItem.orderInfo?.createdAt
                                      }
                                      updatedAt={
                                        variantItem.orderInfo?.updatedAt
                                      }
                                    />
                                  </div>
                                </div>
                                {/* Buyer details box */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <BuyerDetail object={variantItem} />
                                </div>
                                {/* Rating & review box */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <div className="flex gap-2">
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-1">
                                        <Rating value={variantItem.rating} />
                                      </div>

                                      <ReviewsBadge id={variantItem.reviewId} />

                                      {variantItem.feedback && (
                                        <div className="flex mt-2">
                                          <p className="text-sm italic">
                                            "{variantItem.feedback}"
                                          </p>
                                        </div>
                                      )}

                                      <div className="flex mt-2">
                                        <p className="text-gray-500 text-xs">
                                          {isoToRegularTimestamp(
                                            variantItem.createdAt,
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Media box */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full"></div>
                                <div className="flex items-start p-2 border-r border-gray-300 h-full"></div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
          {filteredThisProductVariants.length > 0 &&
            thisProduct.variants.length > 0 &&
            variantItemsParams <
              (filteredThisProductVariants.length ||
                thisProduct.variants.length) && (
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
