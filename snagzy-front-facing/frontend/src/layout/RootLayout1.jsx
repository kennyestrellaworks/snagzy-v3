import { Link, NavLink, Outlet } from "react-router-dom";
import logov2 from "../assets/images/logo-v2.svg";
import { Input } from "../components/ui/Input";
import { IoSearch } from "react-icons/io5";
import { Dropdown } from "../components/ui/Dropdown";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { useTheme } from "../context/ThemeContext";
import { ButtonIcon } from "../components/ui/ButtonIcon";

const Card = ({ title, children }) => {
  return (
    <div className="bg-bg-card p-6 rounded-lg shadow-md border border-primary/20">
      <h2 className="text-xl font-semibold text-text-base mb-4">{title}</h2>
      <p className="text-text-base">{children}</p>
      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200">
        Learn More
      </button>
    </div>
  );
};

export const RootLayout = () => {
  const { theme } = useTheme();

  const themeOptions = ["White Default", "Charcoal Slate", "Citrus Zest"];

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Sports & Outdoor",
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 w-full items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link to="/">
                <img src={logov2} alt="Snagzy logo" className="w-[6rem]" />
              </Link>
            </div>

            <div className="flex flex-row">
              {/* Desktop Navigation */}
              <div className="hidden md:flex gap-6">
                <Dropdown
                  dropdownName={"Categories"}
                  listItems={categories}
                  hasArrowIcon={true}
                  isButtonStyle={true}
                  position={"origin-top-left absolute left-0"}
                />
              </div>

              {/* Search  */}
              <div className="hidden lg:flex flex-1 max-w-md mx-4">
                <div className="relative w-full">
                  <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-10 bg-input-background w-[30rem]"
                  />
                </div>
              </div>
            </div>

            {/* Right side  */}
            <div className="flex flex-row items-center">
              <Dropdown
                listItems={themeOptions}
                hasArrowIcon={false}
                isButtonStyle={false}
                isIconStyle={true}
                Icon={IoColorPaletteOutline}
                position={"origin-top-right absolute right-0"}
              />
              <ButtonIcon Icon={FaRegHeart} />
              <ButtonIcon Icon={IoCartOutline} />
              <nav>
                <NavLink
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Sign up
                </NavLink>
                <NavLink
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Sign in
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <div className="min-h-screen bg-theme text-text-base p-8 transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-base mb-6">
            Multi-Theme React App
          </h1>

          <ThemeSwitcher />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Welcome to your Dashboard">
              This is a sample card demonstrating dynamic theming with React and
              Tailwind CSS. The colors of this card adapt to the selected theme.
            </Card>
            <Card title="Another Themed Component">
              Notice how the background, text, and button colors automatically
              adjust based on the CSS variables defined for each theme.
            </Card>
          </div>

          <div className="mt-8 p-6 bg-bg-card rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-text-base mb-4">
              Current Theme Details
            </h2>
            <p className="text-text-base">
              You are currently using the{" "}
              <span className="font-bold text-primary capitalize">
                {theme.replace("-", " ")}
              </span>
              .
            </p>
            <p className="text-text-base mt-2">
              The accent color for this theme is shown here:{" "}
              <span className="inline-block w-6 h-6 bg-accent rounded-full ml-2"></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
