import { useEffect, useRef, useState } from "react";
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
import { useClickOutside } from "../../hooks/useClickOutside";

export const CategoryFilter = ({
  categories,
  // categoryDropdownRef,
  // setCategoryDropdownOpen,
  selectedCategoryDisplay,
  isCategorySelected,
  selectedCategory,
  getAllProductsOfCategoryId,
  // categoryDropdownOpen,
  handleCategoryChange,
  ariaLabel,
  filterName,
  visibleCountParams,
  filteredProducts,
  isStoreSelected,
  selectedStore,
  isProductStatusSelected,
  selectedProductStatus,
}) => {
  const { getAllProducts } = useData();
  const allProducts = getAllProducts();

  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [searchInputActive, setSearchInputActive] = useState(false);

  const categoryDropdownRef = useRef(null);

  // useClickOutside(categoryDropdownRef, () => setCategoryDropdownOpen(false));

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest('[aria-label="category-filter"]')) {
  //       setCategoryDropdownOpen(false);
  //     }
  //     // if (!searchInputActive) {
  //     //   if (!event.target.closest('[aria-label="category-filter"]')) {
  //     //     setCategoryDropdownOpen(false);
  //     //   }
  //     // } else {
  //     //   setCategoryDropdownOpen(true);
  //     // }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const processOtherFilters = (categoryId) => {
    return allProducts.filter((product) => {
      const matchesCategory =
        Array.isArray(product.categories) &&
        product.categories.some((catId) => catId === categoryId);
      if (!matchesCategory) return false;

      if (isStoreSelected && selectedStore) {
        if ((product.storeOwnerInfo?.storeId || "") !== selectedStore._id)
          return false;
      }

      if (isProductStatusSelected && selectedProductStatus) {
        if ((product.status || "") !== selectedProductStatus._id) return false;
      }

      return true;
    });
  };

  // const handleCategorySearch = () => {
  //   setCategoryDropdownOpen(true);
  // };

  console.log("categoryDropdownOpen", categoryDropdownOpen);

  return (
    <div className={`${filterName} ${filterWrapper}`}>
      <div className={`${filterRef}`} ref={categoryDropdownRef}>
        <button
          onClick={() => {
            // setCategoryDropdownOpen((item) => !item);
            // console.log("categoryDropdownOpen", categoryDropdownOpen);
            // console.log("searchInputActive", searchInputActive);
            setCategoryDropdownOpen(true);
          }}
          aria-label={ariaLabel}
          type="button"
          className={`${filterButton} filter-button`}
        >
          <div
            className={`${isCategorySelected ? "filter-title-active" : ""} ${filterTitle}`}
          >
            <div className={`${filterSelectedWrapper}`}>
              {selectedCategoryDisplay}
              {isCategorySelected && selectedCategory && (
                <div className={`${filterSelectedBox}`}>
                  {isStoreSelected || isProductStatusSelected ? (
                    filteredProducts.length > visibleCountParams ? (
                      <span className={`of-count ${filterSelectedOf}`}>
                        {visibleCountParams} of
                      </span>
                    ) : (
                      ""
                    )
                  ) : getAllProductsOfCategoryId(selectedCategory?._id).length >
                    visibleCountParams ? (
                    <span className={`of-count ${filterSelectedOf}`}>
                      {visibleCountParams} of
                    </span>
                  ) : (
                    ""
                  )}
                  <span className={`count-badge ${countBadge}`}>
                    {isStoreSelected || isProductStatusSelected
                      ? filteredProducts.length
                      : getAllProductsOfCategoryId(selectedCategory._id).length}
                  </span>
                </div>
              )}
            </div>
          </div>

          <IoIosArrowDown
            height={10}
            width={10}
            className={`arrow-icon ${filterSvg} ${categoryDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>
        {categoryDropdownOpen && (
          <div className={`${filterDropdownWrapper}`}>
            <div className={`${filterDropdownBox} max-h-120`}>
              <div className={`${filterDropdownAll}`}>
                <div
                  onMouseDown={() => {
                    handleCategoryChange("");
                    // setCategoryDropdownOpen(false);
                  }}
                  className={`${filterDropdownAllText}`}
                >
                  <h1 className="text-sm rounded-sm cursor-pointer text-gray-400/80 leading-tight">
                    All
                  </h1>
                </div>
                <div className="flex">
                  <input
                    onMouseDown={() => {
                      setSearchInputActive(true);
                      console.log("this", categoryDropdownOpen);
                    }}
                    className="flex-1 p-2 border border-gray-400 rounded text-sm leading-tight"
                    placeholder="Search..."
                    type="text"
                  />
                </div>
              </div>
              <div
                className={`flex flex-col ${categories?.length >= 15 ? "overflow-y-scroll" : ""}`}
              >
                {categories.map((category, index) => {
                  return (
                    <div
                      key={index}
                      onMouseDown={() => {
                        handleCategoryChange(category._id);
                        // setCategoryDropdownOpen(false);
                      }}
                      className={`filter-list ${filterDropdownList} ${selectedCategory && selectedCategory._id === category._id ? "filter-list-active" : ""}`}
                    >
                      {category.name}
                      <span
                        className={`count-badge-item ${filterDropdownListItem} ${selectedCategory && selectedCategory._id === category._id ? "count-badge-item-active" : ""}`}
                      >
                        {isStoreSelected || isProductStatusSelected
                          ? processOtherFilters(category._id)?.length
                          : getAllProductsOfCategoryId(category._id)?.length}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
