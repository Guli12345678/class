import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white text-gray-800 py-4 px-6 shadow-sm ">
      <div className="flex container justify-between">
        <h2 className="text-2xl bg-whtie font-semibold tracking-tight  ">
          Header
        </h2>
        <ul className="flex gap-10">
          <li>
            <NavLink to="/products">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
