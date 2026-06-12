import { NavLink } from "react-router-dom";

export const NavLinkItem = ({ to, children, link }) => {
  return (
    <NavLink
      to={to}
      className={`${link} hidden sm:flex px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out`}
    >
      {children}
    </NavLink>
  );
};
