import React from "react";
import { useForm } from "react-hook-form";

const FormPayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
    reset();
  };

  return (
    <div className="flex-1 bg-[#111] p-6 rounded-2xl shadow text-white">
      <h1 className="text-xl font-bold">PAYMENT DETAILS</h1>
      <p className="mb-4 text-gray-400">
        Complete your purchase by providing your payment details
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="example@gmail.com"
            className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Cardholder Name
          </label>
          <input
            {...register("name", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            placeholder="John Doe"
            className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Card Number
          </label>
          <input
            {...register("cardNumber", {
              required: "Card number is required",
              pattern: {
                value: /^\d{4}-\d{4}-\d{4}-\d{4}$/,
                message: "Card number must be in format 1234-1234-1234-1234",
              },
            })}
            placeholder="1234-1234-1234-1234"
            className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          />
          {errors.cardNumber && (
            <span className="text-red-500 text-sm">
              {errors.cardNumber.message}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Expiry Date
            </label>
            <input
              {...register("expiryDate", {
                required: "Expiry date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Expiry date must be MM/YY",
                },
              })}
              placeholder="08/27"
              className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            />
            {errors.expiryDate && (
              <span className="text-red-500 text-sm">
                {errors.expiryDate.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              CVV
            </label>
            <input
              {...register("cvv", {
                required: "CVV is required",
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "CVV must be 3 or 4 digits",
                },
              })}
              placeholder="123"
              className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            />
            {errors.cvv && (
              <span className="text-red-500 text-sm">{errors.cvv.message}</span>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Billing Address
          </label>
          <input
            {...register("address", {
              required: "Billing address is required",
              minLength: {
                value: 10,
                message: "Address must be at least 10 characters",
              },
            })}
            placeholder="No.7 Illoromu, Oranfe Ile Ife"
            className="w-full px-3 py-2 rounded-lg bg-black border border-gray-700 
                 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-500"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">
              {errors.address.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-white hover:bg-[#CCCCCC] py-3 rounded-lg text-black font-semibold transition"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default FormPayment;
