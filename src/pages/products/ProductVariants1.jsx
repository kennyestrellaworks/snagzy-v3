import { useOutletContext } from "react-router-dom";
import { LengthIsZeroError } from "../../components/LengthIsZeroError";
import { Search } from "../../components/SVG";

export const ProductVariants1 = () => {
  const { thisProduct } = useOutletContext();

  return (
    <div className="flex flex-col">
      {/* Table header */}
      <div className="sticky w-full top-0 z-30 bg-blue-100 border-t border-b border-gray-300">
        <div className="flex w-full justify-between">
          <div className="grid grid-cols-[3.2fr_1.4fr_2fr_.5fr_1fr_.5fr_.6fr_.8fr_.7fr] w-full text-sm">
            <div className="flex border-r border-gray-300 p-1">
              Variant Details
            </div>
            <div className="flex border-r border-gray-300 p-1">Price</div>
            <div className="flex border-r border-gray-300 p-1">Less</div>
            <div className="flex border-r border-gray-300 p-1">Status</div>
            <div className="flex border-r border-gray-300 p-1">Stock</div>
            <div className="flex border-r border-gray-300 p-1">Sold</div>
            <div className="flex border-r border-gray-300 p-1">Sales</div>
            <div className="flex border-r border-gray-300 p-1">Reviews</div>
            <div className="flex border-r border-gray-300 p-1"></div>
          </div>
          <div className="flex w-2 bg-blue-100"></div>
        </div>
      </div>
      {/* Table header ends */}
      {/* List area */}
      <div className="flex w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col w-full">
          {thisProduct.length === 0 ? (
            <LengthIsZeroError
              title="No data found"
              message="Something went wrong while fetching the data!"
            />
          ) : (
            <LengthIsZeroError
              title="No data found"
              message="Something went wrong while fetching the data!"
            />
          )}
          THIS
        </div>
      </div>
      {/* List area ends */}
    </div>
  );
};
