import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
type NavlinkProps = {
  to: string;
  children: ReactNode;
};
const Navlink = ({ to, children }: NavlinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        (isActive
          ? "text-white font-semibold bg-blue-700 hover:bg-blue-900 md:text-blue-700 "
          : "bg-transparent md:text-gray-700 hover:bg-gray-100") +
        " block py-2 pl-3 pr-4 md:py-2 text-gray-800 rounded md:hover:text-blue-700"
      }
    >
      {children}
    </NavLink>
  );
};

export default Navlink;
