import { NavLink } from "react-router-dom";

export const NavLinkItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={`hidden sm:flex px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out`}
    >
      {children}
    </NavLink>
  );
};
