import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    let { error } = await supabase.auth.signOut();
    error ? toast(error) : navigate("/login");
  };

  const cartItems = useSelector((store) => store.cart.amount);
  return (
    <>
      <ToastContainer />
      <nav className="bg-[#242222] p-4 flex justify-between items-center fixed z-20 w-full">
        <Link to="/" className="flex justify-between items-center">
          <img src="/logo.svg" alt="company-logo" className="w-[3rem]" />
          <span className="ml-5 text-white">SHOPIFY</span>
        </Link>
        <div className="flex justify-between gap-5 items-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/cart" className="text-white">
            <img className="w-10" src="/cart-icon.svg" alt="cart-icon" />
            <span className="bg-red-400 cart text-white absolute top-4 right-[7.7rem]">
              {cartItems}
            </span>
          </Link>
          <button
            onClick={logout}
            className="px-6 py-3 rounded-lg font-semibold text-black bg-[#409eff] 
                 hover:bg-blue-700 hover:scale-105 transition-all duration-200 ease-in-out 
                 shadow-md hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
