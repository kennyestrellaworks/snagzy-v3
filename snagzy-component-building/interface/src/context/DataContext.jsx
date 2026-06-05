import { createContext, useContext } from "react";
import { navLinks } from "../data/navLinks.js";
import { users } from "../data/users.js";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Users //////////////////////////
  // Get all users.
  const getAllUsers = () => {
    return users;
  };
  // Get a user by id.
  const getUserById = (userId) => {
    return users.find((user) => user._id === userId);
  };

  // Navlinks //////////////////////////
  // Get sidebar nav links.
  const getSidebarNavlinks = () => {
    return navLinks.filter((navlink) => navlink.type === "sidebar-level");
  };

  return (
    <DataContext.Provider
      value={{ getAllUsers, getUserById, getSidebarNavlinks }}
    >
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
