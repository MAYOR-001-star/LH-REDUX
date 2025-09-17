import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../componenets/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  return (
    <div className="pt-[6rem] px-4 lg:px-12 text-white">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Cart</h1>
        <div className="flex items-center gap-2 mt-2">
          <img className="w-4" src="/back-btn.svg" alt="back-to-shopping" />
          <Link to="/" className="text-sm underline hover:text-gray-300">
            Continue Shopping
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-[#111] p-4 rounded-2xl shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-400">{item.code}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="px-2 py-1 bg-gray-700 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button className="px-2 py-1 bg-gray-700 rounded">+</button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                <button className="text-red-400 text-sm mt-2 hover:underline">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 bg-[#111] p-6 rounded-2xl shadow h-fit mb-5">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <p>Total Items</p>
            <p>{amount}</p>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <p>Subtotal</p>
            <p>$139.99</p>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <p>Estimated Dlivery & Handling</p>
            <p>$2.00</p>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t border-gray-700 pt-3">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <div className="block md:flex justify-between items-center gap-[5rem] lg:block">
            <Link
              to="/payment"
              className="w-full mt-4 bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 text-center block"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => dispatch(clearCart())}
              className="w-full mt-4 bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 text-center block"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
