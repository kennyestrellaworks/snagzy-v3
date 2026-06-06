import { AmountFormatSmall } from "../../components/AmountFormat";
import {
  AttributeOptionsBadge,
  CategoryItemBadge,
  ItemStatusBadge,
  ProductIdBadge,
  SalesBadge,
  StoreDetailBadge,
} from "../../components/Badges";
import { CreatedUpdated } from "../../components/DateBoxed";
import { ImageExtraLarge } from "../../components/Image";
import { NoSomethingSmall } from "../../components/NoSomething";
import { PageHeader } from "../../components/PageHeader";
import { TextNormal } from "../../components/Text";
import { TitleNormal } from "../../components/Title";
import { useData } from "../../context/DataContext";
import { useOrdersAnalytics } from "../../context/OrdersAnalyticsContext";
import { useReviewsAnalytics } from "../../context/ReviewsAnalyticsContext";
import { Rating } from "../../components/Rating";
import { Link } from "react-router-dom";
import { FaEye } from "../../components/SVG";

export const Products = () => {
  const {
    getAllProducts,
    getStoreById,
    getUserById,
    getProductPriceRange,
    getProductStock,
    getAllStores,
    getAllProductsOfStoreId,
    getAllParentCategories,
    getCategoryById,
    getAllProductsOfCategoryId,
    getAllProductStatus,
    getAllProductsByStatusId,
    getProductStatusById,
    setSelectedProductId,
    getAllProductSortOptions,
  } = useData();

  const products = getAllProducts();
  const stores = getAllStores();
  const categories = getAllParentCategories();
  const productStatus = getAllProductStatus();
  const productSortOptions = getAllProductSortOptions();

  // Order analaytics context.
  const ordersAnalytics = useOrdersAnalytics();
  const {
    getTotalSoldItemsOfAProduct,
    getTotalSalesOfAProduct,
    getSuccessfullOrdersOfAProduct,
  } = ordersAnalytics.ordersAnalyticsValue;

  // Review analytics
  const reviewsAnalytics = useReviewsAnalytics();
  const { getAllReviewsByProductId, getAverageRating, getReviewsBreakdown } =
    reviewsAnalytics.reviewsAnalyticsValue;

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
      {/* Header ends  */}
      {/* Table header */}
      <div className="w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
        <div className="flex w-full justify-between">
          <div className="grid grid-cols-[2.2fr_1.1fr_1.2fr_.6fr_.7fr_.6fr_1.1fr_1.4fr_.2fr] w-full text-sm">
            <div className="flex border-r border-gray-300 p-1">Product</div>
            <div className="flex border-r border-gray-300 p-1">Categories</div>
            <div className="flex border-r border-gray-300 p-1">Attributes</div>
            <div className="flex border-r border-gray-300 p-1">Variants</div>
            <div className="flex border-r border-gray-300 p-1">Price Range</div>
            <div className="flex border-r border-gray-300 p-1">Stock</div>
            <div className="flex border-r border-gray-300 p-1">Sales</div>
            <div className="flex border-r border-gray-300 p-1">
              Review & Rating
            </div>
            <div className="flex border-r border-gray-300 p-1"></div>
          </div>
          <div className="flex w-2 bg-blue-100"></div>
        </div>
      </div>
      {/* Table header ends */}

      {/* List area */}
      <div className="flex w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col w-full">
          {products.map((product, index) => {
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

            // Get successful orders of this product
            const successfullOrdersOfThisProduct =
              getSuccessfullOrdersOfAProduct(product._id);

            // Sales of this product - pass the orders array as second parameter
            const totalSoldItems = getTotalSoldItemsOfAProduct(
              product?._id,
              successfullOrdersOfThisProduct,
            );

            const totalSales = getTotalSalesOfAProduct(
              product?._id,
              successfullOrdersOfThisProduct,
            );

            // Reviews
            const reviews = getAllReviewsByProductId(product._id);
            // console.log("reviews", reviews);

            const reviewBreakdown = getReviewsBreakdown(reviews);
            // console.log("reviewBreakdown", reviewBreakdown);

            // Product status
            const statusItem = productStatus.find(
              (item) => item._id === product.status,
            );

            // Average rating
            const averageRating = getAverageRating(reviews);

            return (
              <div
                key={index}
                className={`grid grid-cols-[2.2fr_1.1fr_1.2fr_.6fr_.7fr_.6fr_1.1fr_1.4fr_.2fr] border-b border-gray-300 bg-white text-sm ${statusItem.slug === "inactive" ? "opacity-50" : statusItem.slug === "active" ? "" : ""} hover:bg-blue-50/30 transition-all duration-300 ease-in-out`}
              >
                {/* Product detail box  */}
                <div className="flex p-2 border-r border-gray-300 h-full">
                  <div className="flex items-start flex-col gap-2">
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
                    <div className="flex">
                      <CreatedUpdated
                        createdAt={product.createdAt}
                        updatedAt={product.updatedAt}
                      />
                    </div>
                  </div>
                </div>
                {/* Categories box  */}
                <div className="flex p-2 border-r border-gray-300 h-full">
                  <div className="flex items-start">
                    <div className="flex flex-wrap gap-1">
                      {product.categories.map((category, index) => {
                        const categoryName = getCategoryById(category).name;
                        return (
                          <div key={index} className="flex">
                            <CategoryItemBadge category={categoryName} />
                          </div>
                        );
                      })}
                    </div>
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
                  <div className="text-xs">
                    {(product.variants || []).length === 0 ? (
                      <span className="text-gray-400">NA</span>
                    ) : (
                      <TextNormal text={(product.variants || []).length} />
                    )}
                  </div>
                </div>
                {/* Price range  */}
                <div className="flex p-2 border-r border-gray-300 h-full">
                  {product.variants && product.variants.length > 0 ? (
                    <div className="flex flex-col">
                      <div>
                        <span className="text-gray-600 text-[12px]">Min: </span>
                        <AmountFormatSmall amount={priceRange.min} />
                      </div>
                      <div>
                        <span className="text-gray-600 text-[12px]">Max: </span>
                        <AmountFormatSmall amount={priceRange.max} />
                      </div>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400">NA</span>
                  )}
                </div>
                {/* Stock box  */}
                <div className="flex p-2 border-r border-gray-300 h-full">
                  {productStock === 0 ? (
                    <TextNormal text="Out of stock" />
                  ) : productStock === 1 ? (
                    <TextNormal text={`${productStock} Item`} />
                  ) : (
                    <TextNormal text={`${productStock} Items`} />
                  )}
                </div>
                {/* Sales box */}
                <div className="flex p-2 border-r border-gray-300 h-full">
                  <div className="flex flex-col items-start">
                    {totalSales < 1 ? (
                      <div className="flex items-center gap-2">
                        <h1 className="leading-tight text-gray-400">
                          No data yet
                        </h1>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <div className="flex items-start">
                            <SalesBadge amount={totalSales} />
                          </div>
                          <p className="leading-tight text-[14px]">
                            {totalSoldItems} Sold
                          </p>
                        </div>
                        <div className="flex flex-col mt-2">
                          <div className="flex items-start gap-2 text-sm">
                            <p className="text-[12px] text-gray-500 leading-tight">
                              Jan 2026
                            </p>{" "}
                            <div className="flex gap-2 items-center">
                              <AmountFormatSmall amount={200.25} />
                              <p className="text-[12px] text-gray-500 leading-tight">
                                23 Sold
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 text-sm">
                            <p className="text-[12px] text-gray-500 leading-tight">
                              Jan 2026
                            </p>{" "}
                            <div className="flex gap-2 items-center">
                              <AmountFormatSmall amount={200.25} />
                              <p className="text-[12px] text-gray-500 leading-tight">
                                23 Sold
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Review & Rating box  */}
                <div className="flex p-2 border-r border-gray-300 h-full">
                  {reviews.length !== 0 ? (
                    <div className="w-full">
                      <div className="flex flex-col">
                        <h1 className="font-semibold leading-tight">
                          {reviews.length}{" "}
                          {reviews.length <= 1 ? "Review" : "Reviews"}
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-semibold leading-tight">
                          <Rating value={averageRating} />
                        </h1>
                        <div className="flex border border-gray-300 mt-2 p-2">
                          <div className="flex-1">
                            {[5, 4, 3, 2, 1].map((star) => {
                              const count = reviewBreakdown[star] || 0;
                              const pct =
                                reviews.length > 0
                                  ? (count / reviews.length) * 100
                                  : 0;

                              return (
                                <div
                                  key={star}
                                  className="flex items-center gap-2"
                                >
                                  <span className="text-xs text-gray-500 text-right">
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
                  ) : (
                    <NoSomethingSmall text="No ratings yet" />
                  )}
                </div>
                <div className="flex p-2">
                  <div className="flex items-start">
                    <Link
                      to={`/products/${product.slug}/${product._id}`}
                      state={{
                        backUrl:
                          location.pathname + location.search + location.hash,
                      }}
                      onClick={() => setSelectedProductId(product._id)}
                      className="cursor-pointer outline-0 text-gray-400 hover:text-gray-500 transition-all ease-in-out"
                    >
                      <FaEye height={16} width={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
