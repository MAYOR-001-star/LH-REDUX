import React from "react";
import FormPayment from "../componenets/FormPayment";
import { useSelector } from "react-redux";

const Payment = () => {
  const totalItemsPurchased = useSelector((store)=>store.cart.amount);

  return (
    <div className="pt-[6rem] px-4 lg:px-12 text-white">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="h-fit lg:w-1/3 bg-[#111] p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <p>Total Items</p>
            <p>{totalItemsPurchased}</p>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <p>Subtotal</p>
            <p>$245.88</p>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <p>Estimated Delivery & Handling</p>
            <p>$2.00</p>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t border-gray-700 pt-3">
            <p>Total</p>
            <p>$245.88</p>
          </div>
        </div>

        <FormPayment />
      </div>
    </div>
  );
};

export default Payment;
