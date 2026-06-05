import { useOutletContext, useSearchParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { LengthIsZeroError } from "../../components/LengthIsZeroError";
import {
  ItemStatusBadge,
  OrderIdBadge,
  ProductVariantAttributeBadge,
  VariantBadge,
} from "../../components/Badges";
import { ProductNameNAttributes } from "../../components/ProductNameNAttributes";
import { ImageDoubleExtraSmall } from "../../components/Image";
import { NoSomethingSmall } from "../../components/NoSomething";
import { OrderPlacedUpdated } from "../../components/Data";
import { BuyerDetail } from "../../components/BuyerDetail";
import { AmountDetailBox } from "../../components/AmountDetailBox";
import { PaymentDetailBox } from "../../components/PaymentDetailBox";
import { useEffect, useMemo, useState } from "react";

export const ProductOrders1 = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { thisProduct, ordersByThisProduct, attributes } = useOutletContext();
  // console.log("ordersByThisProduct", ordersByThisProduct);

  const { addingOrdersToProductVariants, getAllVariantStatus } = useData();

  const thisProductVariants = thisProduct.variants;
  // console.log("thisProductVariants", thisProductVariants);

  const thisProductVariantsWithOrders = addingOrdersToProductVariants(
    thisProductVariants,
    ordersByThisProduct,
  );
  // console.log("thisProductVariantsWithOrders", thisProductVariantsWithOrders);

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

  // Filtering and Sorting
  const filteredThisProductOrders = useMemo(() => {
    let result = thisProductVariantsWithOrders || [];

    if (!result.length) return result;

    // First, sort the variants themselves
    // This ensures variants appear in a consistent order
    result = [...result].sort((a, b) => {
      // Sort by variant name or ID for consistency
      return (a.name || a._id || "").localeCompare(b.name || b._id || "");
    });

    return result;
  }, [thisProductVariantsWithOrders]);

  const displayedThisProductOrders = useMemo(() => {
    return (filteredThisProductOrders || []).slice(0, variantItemsParams);
  }, [filteredThisProductOrders, variantItemsParams]);

  // Load more button
  const loadMore = () => {
    const updateUrlParams = (newCount) => {
      const params = {};
      params.variant_items = newCount;
      // persist sort
      // if (sortField) params.sort_field = sortField;
      // if (sortDirection) params.sort_direction = sortDirection;

      setSearchParams(params);
    };

    const totalItems =
      filteredThisProductOrders && filteredThisProductOrders.length > 0
        ? filteredThisProductOrders.length
        : thisProduct.variants.length;
    const newCount = Math.min(variantItemsParams + count, totalItems);

    if (newCount > variantItemsParams) {
      setVariantItemsParams(newCount);
      updateUrlParams(newCount);
    }
  };

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
              <div className="flex border-r border-gray-300 p-1">
                Amount Details
              </div>
              <div className="flex border-r border-gray-300 p-1">
                Current Status
              </div>
              <div className="flex border-r border-gray-300 p-1"></div>
            </div>
          </div>
          <div className="flex w-2 bg-blue-100"></div>
        </div>
      </div>
      {/* Table header ends */}
      {/* List area  */}
      <div className="flex w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col w-full">
          {displayedThisProductOrders.length === 0 ? (
            <LengthIsZeroError />
          ) : (
            displayedThisProductOrders.map((variant, index) => {
              const statusItem = variantStatus.find(
                (item) => item?._id === variant?.status,
              );

              return (
                <div key={index} className="flex flex-col w-full">
                  <div
                    className={`grid grid-cols-[2fr_6fr] bg-white text-sm ${statusItem?.slug === "inactive" ? "opacity-50" : statusItem?.slug === "active" ? "" : ""}`}
                  >
                    {/* Grid 1  */}
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
                    {/* Grid 2  */}
                    <div className="flex flex-col w-full">
                      {variant.orders.length === 0 ? (
                        <div className="flex border-b border-gray-300 h-full items-center justify-center">
                          <NoSomethingSmall text="No data found" />
                        </div>
                      ) : (
                        variant.orders.map((variantItem, variantIndex) => {
                          // console.log("variantItem", variantItem);
                          return (
                            <div key={variantIndex}>
                              <div className="grid grid-cols-[2.4fr_3.6fr_3fr_1.8fr_.5fr] border-b border-gray-300 bg-white text-sm">
                                {/* Order details box  */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <div className="flex flex-col items-start gap-2">
                                    <div className="flex items-start">
                                      <OrderIdBadge id={variantItem._id} />
                                    </div>
                                    <OrderPlacedUpdated
                                      createdAt={variantItem.createdAt}
                                      updatedAt={variantItem.updatedAt}
                                    />
                                  </div>
                                </div>
                                {/* Buyer details box  */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <BuyerDetail object={variantItem} />
                                </div>
                                {/* Amount details box  */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <div className="flex gap-2">
                                    <AmountDetailBox
                                      variantItem={variantItem}
                                    />
                                  </div>
                                </div>
                                {/* Current status box  */}
                                <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                  <PaymentDetailBox variantItem={variantItem} />
                                </div>
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
          {filteredThisProductOrders.length > 0 &&
            thisProduct.variants.length > 0 &&
            variantItemsParams <
              (filteredThisProductOrders.length ||
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
