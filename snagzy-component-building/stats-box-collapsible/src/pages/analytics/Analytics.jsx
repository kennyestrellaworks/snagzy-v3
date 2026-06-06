import { useState } from "react";
import { PageHeader } from "../../components/PageHeader";
import { IoIosArrowDown } from "../../components/SVG";

export const Analytics = () => {
  ///// Hide/show stat boxes
  const [revenueStatsOpen, setRevenueStatsOpen] = useState(true);

  const toggleRevenueStats = () => setRevenueStatsOpen(!revenueStatsOpen);
  ///// Hide/show stat boxes ends

  return (
    <div className="flex flex-col w-full bg-white border border-gray-300 rounded-md overflow-hidden">
      <div className="flex w-full z-50">
        <div className="w-full flex flex-1 flex-col p-2">
          {/* Header */}
          <div className="flex gap-2 justify-between">
            <PageHeader defaultPage="Analytics" type="sidebar-level" />
          </div>
          {/* Header ends */}
        </div>
      </div>
      <div className="flex flex-col w-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            {/* Revenue stats */}
            <div className="flex mt-2 w-full pl-2 pr-2 pb-2">
              <div
                className={`${revenueStatsOpen ? "h-full" : "h-15"} w-full p-3 border border-gray-200 rounded-md transition-all duration-300 ease-in-out overflow-hidden`}
              >
                <div className="flex relative items-center justify-between">
                  <div className="flex">
                    <h1 className="font-semibold text-md">Revenue Stats</h1>
                  </div>

                  <div className="flex gap-6 border-gray-300 items-center">
                    {/* Revenue stats filters  */}
                    <div
                      className={`flex gap-4 ${revenueStatsOpen ? "opacity-100" : "opacity-40"} transition-all duration-300 ease-in-out`}
                    >
                      FILTER GOES HERE
                    </div>
                    {/* Revenue stats filters ends */}

                    {/* Revenue stats collapse button  */}
                    <div className="flex">
                      <button
                        onClick={toggleRevenueStats}
                        className={`flex ${revenueStatsOpen ? "bg-gray-200" : "bg-gray-100"} rounded px-1 py-1 hover:bg-gray-200 cursor-pointer`}
                      >
                        <IoIosArrowDown
                          height={16}
                          width={16}
                          className={`${revenueStatsOpen ? "rotate-180" : ""} transition-all duration-300 ease-in-out`}
                        />
                      </button>
                    </div>
                    {/* Revenue stats collapse button ends */}
                  </div>
                </div>

                {/* Analytics boxes */}
                <div className="flex flex-col">
                  <div className="flex">ANALYTICS GOES HERE</div>
                  <div className="flex">ANALYTICS GOES HERE</div>
                  <div className="flex">ANALYTICS GOES HERE</div>
                  <div className="flex">ANALYTICS GOES HERE</div>
                  <div className="flex">ANALYTICS GOES HERE</div>
                  <div className="flex">ANALYTICS GOES HERE</div>
                </div>
                {/* Analytics boxes ends  */}

                {/* Bar chart  */}
                <div className="flex flex-col w-full mt-2">
                  <div className="flex">BAR CHART GOES HERE</div>
                  <div className="flex">BAR CHART GOES HERE</div>
                  <div className="flex">BAR CHART GOES HERE</div>
                  <div className="flex">BAR CHART GOES HERE</div>
                  <div className="flex">BAR CHART GOES HERE</div>
                  <div className="flex">BAR CHART GOES HERE</div>
                  <div className="flex">BAR CHART GOES HERE</div>
                </div>
                {/* Bar chart ends */}
              </div>
            </div>
            {/* Revenue stats ends */}
          </div>
        </div>
      </div>
    </div>
  );
};
