import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      <header className="sticky top-0 z-50 theme-navbar w-full">
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
