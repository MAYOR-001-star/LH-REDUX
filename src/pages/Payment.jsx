import React from "react";
import FormPayment from "../components/FormPayment";
import PaymentSummary from "../components/paymentSummary";

const Payment = () => {
  return (
    <div className="pt-[6rem] px-4 lg:px-12 text-white">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="h-fit lg:w-1/3 bg-[#111] p-6 rounded-2xl shadow">
          <PaymentSummary />
        </div>
        <FormPayment />
      </div>
    </div>
  );
};

export default Payment;
