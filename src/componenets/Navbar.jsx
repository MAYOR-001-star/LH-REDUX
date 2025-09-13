import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#242222] p-4 flex justify-between items-center fixed z-20 w-full">
      <div>
        <img src="/logo.svg" alt="company-logo" className="w-[3rem]" />
      </div>
      <div className="flex justify-between gap-4 items-center">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/cart" className="text-white">
          <img className="w-10" src="/cart-icon.svg" alt="cart-icon" />
          <span className="bg-red-400 cart text-white absolute top-4 right-4">
            2
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
