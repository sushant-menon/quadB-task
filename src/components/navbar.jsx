import React, { useState } from "react";
import Sidebar from "./sidebar";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-gray-800 w-full">
      <div className="py-3 xl:py-4">
        <div className="flex">
          <img
            onClick={toggleSidebar}
            className="w-8 h-8 mix-blend-multiply xl:w-12 xl:h-12 ml-2 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3kXHP8mYecl1JC1vLE_1mr6xvoCM4YIPSVpw2IZdDoCdjgeleuThZ5F_frbtPIlkzUA&usqp=CAU"
            alt=""
          />
          <img
            className="w-8 h-8 mx-auto xl:w-12 xl:h-12"
            src="/favicon.ico"
            alt="logo-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
