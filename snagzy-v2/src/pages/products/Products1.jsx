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

export const Products1 = () => {
  const {
    getAllProducts,
    getStoreById,
    getUserById,
    getCategoryNames,
    getProductPriceRange,
    getProductStock,
    getAllStores,
    getAllCategories,
  } = useData();

  const products = getAllProducts();
  const stores = getAllStores();
  const categories = getAllCategories();
  console.log("stores", stores);
  console.log("categories", categories);

  const ordersAnalytics = useOrdersAnalytics();
  const { getTotalSoldItemsOfAProduct, getTotalSalesOfAProduct } =
    ordersAnalytics.ordersAnalyticsValue;

  const reviewsAnalytics = useReviewsAnalytics();
  const { getAllReviewsByProductId } = reviewsAnalytics.reviewsAnalyticsValue;

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="sticky w-full top-0 z-30">
        <div className="flex w-full justify-between">THIS</div>
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
          {products.length === 0 ? (
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
                        // <span className="text-[14px] font-semibold">
                        //   {`$${amountToDecimal(priceRange.min)} to $${amountToDecimal(priceRange.max)}`}
                        // </span>
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
        </div>
      </div>
    </div>
  );
};
