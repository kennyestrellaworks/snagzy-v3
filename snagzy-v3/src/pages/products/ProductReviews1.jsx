import { useOutletContext } from "react-router-dom";
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
import { Rating } from "../../components/Rating";

export const ProductReviews1 = () => {
  const {
    createProductVariantsObjectWithReviews,
    getUsersWhoReviewed,
    getAllVariantStatus,
    getReviewId,
  } = useData();

  const { thisProduct, thisProductReviews, ordersByThisProduct, attributes } =
    useOutletContext();

  const buyersWhoReviewed = getUsersWhoReviewed(thisProductReviews);

  const thisProductVariantsWithReviews = createProductVariantsObjectWithReviews(
    thisProduct.variants,
    thisProductReviews,
    buyersWhoReviewed,
    ordersByThisProduct,
  );
  // console.log("thisProductVariantsWithReviews", thisProductVariantsWithReviews);

  const variantStatus = getAllVariantStatus();

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      {/* Table header  */}
      <div className="sticky w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
        <div className="flex w-full justify-between">
          <div className="grid grid-cols-[2fr_6fr] w-full text-sm">
            <div className="flex border-r border-gray-300 p-1">
              Variant Details
            </div>
            <div className="grid grid-cols-[2.4fr_3.6fr_3fr_1.8fr_.5fr] w-full text-sm">
              <div className="flex border-r border-gray-300 p-1">
                Order Details
              </div>
              <div className="flex border-r border-gray-300 p-1">
                Buyer Details
              </div>
              <div className="flex border-r border-gray-300 p-1">Rating</div>
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
          {thisProductVariantsWithReviews.length === 0 ? (
            <LengthIsZeroError />
          ) : (
            thisProductVariantsWithReviews.map((variant, index) => {
              // Variant status
              const statusItem = variantStatus.find(
                (item) => item._id === variant.status,
              );
              return (
                <div key={index} className="flex flex-col w-full">
                  <div
                    className={`grid grid-cols-[2fr_6fr] border-gray-300 bg-white text-sm ${statusItem.slug === "inactive" ? "opacity-50" : statusItem.slug === "active" ? "" : ""}`}
                  >
                    <div className="flex items-start p-2 border-b border-r border-gray-300 h-full">
                      {/* Variant details box  */}
                      <div className="flex-col">
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
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      {variant.reviews.length === 0 ? (
                        <div className="flex border-b border-gray-300 h-full items-center justify-center">
                          <NoSomethingSmall text="No data found" />
                        </div>
                      ) : (
                        variant.reviews.map((variantItem, variantIndex) => {
                          return (
                            <div key={variantIndex}>
                              <div
                                className={`grid grid-cols-[2.4fr_3.6fr_3fr_1.8fr_.5fr] border-b border-gray-300 bg-white text-sm`}
                              >
                                {/* Order details box  */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <div className="flex flex-col items-start gap-2">
                                    <div className="flex items-start">
                                      <OrderIdBadge
                                        id={variantItem.orderInfo.orderId}
                                      />
                                    </div>
                                    <OrderPlacedUpdated
                                      createdAt={
                                        variantItem.orderInfo.createdAt
                                      }
                                      updatedAt={
                                        variantItem.orderInfo.updatedAt
                                      }
                                    />
                                  </div>
                                </div>
                                {/* Buyer details box  */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <BuyerDetail object={variantItem} />
                                </div>
                                {/* Rating box */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <div className="flex gap-2">
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-1">
                                        <Rating value={variantItem.rating} />
                                      </div>

                                      <ReviewsBadge
                                        id={
                                          getReviewId(
                                            variant._id,
                                            thisProductReviews,
                                          )?._id
                                        }
                                      />
                                      <div className="flex mt-2">
                                        <p>"{variantItem.feedback}"</p>
                                      </div>
                                      <div className="flex mt-2">
                                        <p className="text-gray-500">
                                          {isoToRegularTimestamp(
                                            variantItem.createdAt,
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Media box  */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  THIS
                                </div>
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
        </div>
      </div>
      {/* List area ends */}
    </div>
  );
};
