import { IoIosArrowDown } from "./SVG";

export const CategoryFilter = ({ categories }) => {
  return (
    <div className={`w-full flex flex-col items-start gap-1 z-50`}>
      <div className="relative w-full inline-block">
        <button
          className={`p-1 rounded-sm text-sm w-64 border border-gray-400 bg-white text-left flex justify-between items-center cursor-pointer`}
          aria-label="store-filter"
          type="button"
        >
          <div className="border border-gray-400 w-full px-2 py-1 mr-1 rounded-sm">
            Category
            <span className="text-[12px] border border-gray-400 ml-2 px-1 rounded-sm">
              12
            </span>
          </div>
          <IoIosArrowDown
            height={10}
            width={10}
            className={`arrow-icon w-4 h-4 transition-transform duration-200}`}
          />
        </button>
        <div className={`absolute mt-1 w-64 z-50 overflow-hidden`}>
          <div
            className={`flex flex-col p-1 bg-white border border-gray-400 rounded-sm`}
          >
            <div className={`p-2 text-sm rounded-sm cursor-pointer`}>
              <div
                className={`text-sm rounded-sm cursor-pointer text-gray-400/80`}
              >
                All
              </div>
            </div>
            {categories
              .filter((categoryType) => categoryType.type === "parent")
              .map((category, index) => {
                return (
                  <div
                    key={index}
                    className={`flex justify-between bg-white hover:bg-gray-100 p-2 text-sm rounded-sm cursor-pointer`}
                  >
                    {category.name}
                    <span className="text-[12px] border border-gray-400 ml-2 px-1 rounded-sm">
                      12
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
