import { createContext, useContext } from "react";
import { navLinks } from "../data/navLinks.js";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Navlinks //////////////////////////
  // Get sidebar nav links.
  const getSidebarNavlinks = () => {
    return navLinks.filter((navlink) => navlink.type === "sidebar-level");
  };

  return (
    <DataContext.Provider value={{ getSidebarNavlinks }}>
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
