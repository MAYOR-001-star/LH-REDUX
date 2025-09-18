import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} from "../componenets/cartSlice";
import PaymentSummary from "../componenets/paymentSummary";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, amount } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return amount < 1 ? (
    <div className="pt-[12rem] px-4 lg:px-12 text-white w-full">
      <h1 className="text-center text-2xl font-semibold">Your cart is empty</h1>
      <div className="flex justify-center items-center mt-2 gap-0.5">
        <img className="w-4" src="/back-btn.svg" alt="back-to-shopping" />
        <Link to="/" className="text-sm underline hover:text-gray-300 block">
          Continue Shopping
        </Link>
      </div>
    </div>
  ) : (
    <div className="pt-[6rem] px-4 lg:px-12 text-white">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">My Cart</h2>
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
                    <button
                      className="p-1 bg-gray-700 rounded"
                      onClick={
                        item.quantity === 1
                          ? () => dispatch(removeItem(item.id))
                          : () => dispatch(decreaseItem(item.id))
                      }
                    >
                      <img src="/remove-btn.svg" alt="remove-item" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="p-1 bg-gray-700 rounded"
                      onClick={() => dispatch(increaseItem(item.id))}
                    >
                      <img src="/add-btn.svg" alt="add-item" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                <button
                  className="text-red-400 text-sm mt-2 hover:underline"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 bg-[#111] p-6 rounded-2xl shadow h-fit mb-5">
          <PaymentSummary />
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
