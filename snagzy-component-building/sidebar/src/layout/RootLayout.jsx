import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:w-800 relative flex h-screen bg-cyan-100 overflow-hidden">
        {/* Sidebar left full height  */}
        <div className="flex flex-col bg-white border-r border-gray-200">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <div className="flex flex-col w-full z-40 overflow-hidden">
          <div className="w-full relative flex h-screen bg-cyan-100 overflow-hidden p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
