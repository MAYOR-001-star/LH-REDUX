import React from "react";
import { useSelector } from "react-redux";

const PaymentSummary = () => {
  const { total, amount } = useSelector((store) => store.cart);
  const shipping = 2.0;
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="flex justify-between text-sm mb-2">
        <p>Total Items</p>
        <p>{amount}</p>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <p>Subtotal</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-sm mb-2">
        <p>Estimated Delivery & Handling</p>
        <p>${shipping.toFixed(2)}</p>
      </div>
      <div className="flex justify-between font-semibold text-lg border-t border-gray-700 pt-3">
        <p>Total</p>
        <p>${(total + shipping).toFixed(2)}</p>
      </div>
    </>
  );
};

export default PaymentSummary;
