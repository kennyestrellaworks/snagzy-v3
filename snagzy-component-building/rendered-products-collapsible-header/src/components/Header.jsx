import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Logout, Settings, User } from "./SVG";
import { useData } from "../context/DataContext";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { getUserById } = useData();
  const loggedInUser = getUserById("people43210987nopqrstu");

  const navigate = useNavigate();
  // const location = useLocation();

  const handleBack = () => {
    // Browser history, this maintains the correct stack
    navigate(-1);
  };

  // Determine if back button should be disabled
  const isBackDisabled = () => {
    return window.history.length <= 1;
  };

  // Get button text
  const getButtonText = () => {
    return "Back";
  };

  return (
    <header className="w-full top-0 z-60 bg-white border-b border-gray-200 p-2">
      <div className="flex w-full h-10 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h1 className="text-sm">Agent View</h1>
          <div className="flex">
            <button
              className="bg-gray-100 px-3 rounded cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleBack}
              disabled={isBackDisabled()}
              title={
                isBackDisabled() ? "No page to go back to" : getButtonText()
              }
            >
              {getButtonText()}
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex gap-1 items-center px-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <img
                  src={loggedInUser.image}
                  alt={loggedInUser.firstName + " " + loggedInUser.lastName}
                  className="h-8 w-8 rounded-full"
                />
                <div className="hidden md:block text-left">
                  <p className="text-xs text-gray-500">Welcome</p>
                  <p className="text-sm font-medium text-gray-900">
                    {loggedInUser.firstName + " " + loggedInUser.lastName}
                  </p>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-600 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-20 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900 leading-tight">
                        {loggedInUser.firstName + " " + loggedInUser.lastName}
                      </p>
                      <p className="text-xs text-gray-500 leading-tight">
                        {loggedInUser.contact.email}
                      </p>
                      <p className="text-xs text-gray-700 leading-tight">
                        {loggedInUser.jobTitle}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                        <User className="w-4 h-4" />
                        <span className="leading-tight">Profile</span>
                      </button>

                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                        <Settings className="w-4 h-4" />
                        <span className="leading-tight">Settings</span>
                      </button>

                      <div className="border-t border-gray-200 my-1" />

                      <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
                        <Logout className="w-4 h-4" />
                        <span className="leading-tight">Sign out</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
