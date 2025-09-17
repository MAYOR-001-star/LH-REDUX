import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((store)=>store.cart.amount)
  return (
    <nav className="bg-[#242222] p-4 flex justify-between items-center fixed z-20 w-full">
      <Link to="/">
        <img src="/logo.svg" alt="company-logo" className="w-[3rem]" />
      </Link>
      <div className="flex justify-between gap-4 items-center">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/cart" className="text-white">
          <img className="w-10" src="/cart-icon.svg" alt="cart-icon" />
          <span className="bg-red-400 cart text-white absolute top-4 right-4">
            {cartItems}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
