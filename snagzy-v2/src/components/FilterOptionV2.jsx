import { IoIosArrowDown } from "../components/SVG";

export const FilterOptionV2 = ({
  setDropdownOpen,
  optionDropdownRef,
  selectedOptionStatusDisplay,
  selectedOptionStatus,
  getOptionStatusOrderCount,
  isOptionStatusSelected,
  dropdownOpen,
  handleOptionStatusChange,
  optionStatusList,
  filterName,
  width,
  optionDropDownName,
  ariaLabel,
}) => {
  return (
    <div className="w-full flex flex-1 flex-col">
      <div
        className={`${filterName} w-full flex flex-col items-start gap-1 z-50`}
      >
        <div className="relative w-full inline-block" ref={optionDropdownRef}>
          <button
            onClick={() => setDropdownOpen((s) => !s)}
            className={`button p-1 rounded-sm text-sm ${width} text-left flex justify-between items-center cursor-pointer`}
            aria-label={ariaLabel}
            type="button"
          >
            <div
              className={`${isOptionStatusSelected ? "filter-title-active" : ""} w-full px-2 py-1 mr-1 rounded-sm`}
            >
              {selectedOptionStatusDisplay}{" "}
              {getOptionStatusOrderCount(selectedOptionStatus?.slug) === 0
                ? ""
                : isOptionStatusSelected && (
                    <span
                      className={`count-badge text-[12px] ml-2 px-1 rounded-sm`}
                    >
                      {getOptionStatusOrderCount(selectedOptionStatus?.slug)}
                    </span>
                  )}
            </div>
            <IoIosArrowDown
              height={10}
              width={10}
              className={`arrow-icon w-4 h-4 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {dropdownOpen && (
            <div className={`absolute mt-1 ${width} z-50 overflow-hidden`}>
              <div
                className={`filter-options flex flex-col p-1 bg-white border border-violet-300 rounded-sm`}
              >
                <div className={`p-2 text-sm rounded-sm cursor-pointer`}>
                  <div
                    onMouseDown={() => {
                      handleOptionStatusChange("");
                      setDropdownOpen(false);
                    }}
                    className={`text-sm rounded-sm cursor-pointer text-gray-400/80`}
                  >
                    {optionDropDownName}
                  </div>
                </div>
                {optionStatusList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onMouseDown={() => {
                        handleOptionStatusChange(item.slug);
                        setDropdownOpen(false);
                      }}
                      className={`filter-list flex justify-between p-2 text-sm rounded-sm cursor-pointer`}
                    >
                      {item.label}
                      {getOptionStatusOrderCount(item.slug) === 0 ? (
                        ""
                      ) : (
                        <span
                          className={`count-badge-item text-[12px] ml-2 px-1 rounded-sm`}
                        >
                          {getOptionStatusOrderCount(item.slug)}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
