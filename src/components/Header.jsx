import React from "react";
import User from "./User";

const Header = () => {
  return (
    <div className="bg-white text-gray-800 py-4 px-6 shadow-sm ">
      <div className="flex container justify-between">
        <h2 className="text-2xl bg-whtie font-semibold tracking-tight  ">
          Header
        </h2>
        <ul className="flex gap-10">
          <li>
            <a href="/products">Home</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
