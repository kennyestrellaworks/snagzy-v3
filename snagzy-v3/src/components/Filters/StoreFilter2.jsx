import { useData } from "../../context/DataContext";
import { IoIosArrowDown } from "../SVG";
import {
  countBadge,
  filterButton,
  filterDropdownAll,
  filterDropdownAllText,
  filterDropdownBox,
  filterDropdownList,
  filterDropdownListItem,
  filterDropdownWrapper,
  filterRef,
  filterSelectedBox,
  filterSelectedOf,
  filterSelectedWrapper,
  filterSvg,
  filterTitle,
  filterWrapper,
} from "./filter-css";
import "./filter.css";

export const StoreFilter2 = ({
  stores,
  storeDropdownRef,
  setStoreDropdownOpen,
  selectedStoreDisplay,
  isStoreSelected,
  selectedStore,
  getAllProductsOfStoreId,
  storeDropdownOpen,
  handleStoreChange,
  ariaLabel,
  filterName,
  visibleCountParams,
  filteredProducts,
  isCategorySelected,
  selectedCategory,
  isProductStatusSelected,
  selectedProductStatus,
}) => {
  const { getAllProducts } = useData();
  const allProducts = getAllProducts();

  const processOtherFilters = (storeId) => {
    return allProducts.filter((product) => {
      if ((product.storeOwnerInfo?.storeId || "") !== storeId) return false;

      if (isCategorySelected && selectedCategory) {
        if (
          !Array.isArray(product.categories) ||
          !product.categories.some((catId) => catId === selectedCategory._id)
        )
          return false;
      }

      if (isProductStatusSelected && selectedProductStatus) {
        if ((product.status || "") !== selectedProductStatus._id) return false;
      }

      return true;
    });
  };

  return (
    <div className={`${filterName} ${filterWrapper}`}>
      <div className={`${filterRef}`} ref={storeDropdownRef}>
        <button
          onClick={() => setStoreDropdownOpen((item) => !item)}
          aria-label={ariaLabel}
          type="button"
          className={`${filterButton} filter-button`}
        >
          <div
            className={`${isStoreSelected ? "filter-title-active" : ""} ${filterTitle}`}
          >
            <div className={`${filterSelectedWrapper}`}>
              {selectedStoreDisplay}
              {isStoreSelected && selectedStore && (
                <div className={`${filterSelectedBox}`}>
                  {isCategorySelected || isProductStatusSelected ? (
                    filteredProducts.length > visibleCountParams ? (
                      <span className={`of-count ${filterSelectedOf}`}>
                        {visibleCountParams} of
                      </span>
                    ) : (
                      ""
                    )
                  ) : getAllProductsOfStoreId(selectedStore?._id).length >
                    visibleCountParams ? (
                    <span className={`of-count ${filterSelectedOf}`}>
                      {visibleCountParams} of
                    </span>
                  ) : (
                    ""
                  )}
                  <span className={`count-badge ${countBadge}`}>
                    {isCategorySelected || isProductStatusSelected
                      ? filteredProducts.length
                      : getAllProductsOfStoreId(selectedStore._id).length}
                  </span>
                </div>
              )}
            </div>
          </div>
          <IoIosArrowDown
            height={10}
            width={10}
            className={`arrow-icon ${filterSvg} ${storeDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {storeDropdownOpen && (
          <div className={`${filterDropdownWrapper}`}>
            <div className={`${filterDropdownBox}`}>
              <div className={`${filterDropdownAll}`}>
                <div
                  onMouseDown={() => {
                    handleStoreChange("");
                    setStoreDropdownOpen(false);
                  }}
                  className={`${filterDropdownAllText}`}
                >
                  All
                </div>
              </div>
              {stores.map((store, index) => {
                return (
                  <div
                    key={index}
                    onMouseDown={() => {
                      handleStoreChange(store._id);
                      setStoreDropdownOpen(false);
                    }}
                    className={`filter-list ${filterDropdownList} ${selectedStore && selectedStore._id === store._id ? "filter-list-active" : ""}`}
                  >
                    {store.storeName}
                    <span
                      className={`count-badge-item ${filterDropdownListItem} ${selectedStore && selectedStore._id === store._id ? "count-badge-item-active" : ""}`}
                    >
                      {isCategorySelected || isProductStatusSelected
                        ? processOtherFilters(store._id)?.length
                        : getAllProductsOfStoreId(store._id).length}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
