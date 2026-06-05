

export const Test = () => {
  return <div>
    {displayedOrder.orderedItems.length === 0 ? (
                        <div className="flex h-full items-center justify-center p-4">
                          <NoSomethingSmall text="No data found" />
                        </div>
                      ) : (
                        <>
                          {(() => {
                            const visibleCount = getShowCountForOrder(
                              displayedOrder._id,
                              displayedOrder.orderedItems.length
                            );
                            const visibleOrderedItems = displayedOrder.orderedItems.slice(0, visibleCount);
                            const totalOrderedItems = displayedOrder.orderedItems.length;
                            const showLoadMoreButton = totalOrderedItems > INITIAL_ORDERED_ITEMS_LIMIT;
                            const isShowingAll = visibleCount === totalOrderedItems;
                            const remaining = totalOrderedItems - visibleCount;
                            const buttonLabel = isShowingAll
                              ? "Show less items"
                              : `Load more items${!isShowingAll && remaining > 0 ? ` (+${remaining})` : ""}`;

                            return (
                              <>
                                {visibleOrderedItems.map((orderedItem, orderedItemIndex) => {
                                  const displayName = [
                                    orderedItem.productName,
                                    ...orderedItem.variant.attributeOptions.map((option) => option.value),
                                  .join(" | ");

                                  return (
                                    <div
                                      key={orderedItemIndex}
                                      className="grid grid-cols-[6.6fr_1.6fr_.6fr_1.8fr] w-full items-stretch border-b border-gray-100 last:border-b-0"
                                    >
                                      {/* Ordered Item Box */}
                                      <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                        <div className="flex flex-col w-full">
                                          <div className="flex gap-2">
                                            <VariantBadge id={orderedItem.variant._id} />
                                            <ItemStatusBadge statusId={orderedItem.variant.status} />
                                          </div>
                                          <div className="flex gap-2 mt-2 items-start">
                                            <ImageDoubleExtraSmall
                                              image={orderedItem.variant.primaryImage}
                                              alt={orderedItem.variant.productName}
                                              type="square"
                                            />
                                            <div className="flex flex-col overflow-hidden">
                                              <h1 className="font-semibold text-md leading-tight truncate">
                                                {displayName}
                                              </h1>
                                              <p className="leading-tight text-xs text-gray-500">
                                                SKU: {orderedItem.variant.sku}
                                              </p>
                                              <div className="flex gap-2 mt-2 text-xs text-gray-600 flex-wrap">
                                                {orderedItem.variant.attributeOptions.map((option, index) => (
                                                  <OrderVariantAttributeBadege
                                                    key={index}
                                                    option={option}
                                                    index={index}
                                                    attributes={attributes}
                                                  />
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listed Price Box */}
                                      <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                        <AmountFormatSmall amount={orderedItem.variant.price} />
                                      </div>
                                      {/* Quantity Box */}
                                      <div className="flex items-start p-2 border-r border-gray-300 h-full">
                                        <TextNormal text={orderedItem.variant.quantity} />
                                      </div>
                                      {/* Subtotal Box */}
                                      <div className="flex items-start p-2 h-full">
                                        <AmountFormat amount={orderedItem.variant.subTotal} />
                                      </div>
                                    </div>
                                  );
                                })}

                                {showLoadMoreButton && (
                                  <div className="flex items-center justify-center p-2 border-t border-gray-200 bg-gray-50 mt-auto">
                                    <LoadMoreVariant
                                      onClick={() => {
                                        if (isShowingAll) {
                                          handleShowLessOrderedItems(displayedOrder._id);
                                        } else {
                                          handleLoadMoreOrderedItems(displayedOrder._id, totalOrderedItems);
                                        }
                                      }}
                                    >
                                      {buttonLabel}
                                    </LoadMoreVariant>
                                  </div>
                                )}
                              </>
                            );
                          })()}
                        </>
                      )}
  </div>;
};
