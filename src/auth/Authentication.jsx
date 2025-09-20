import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "../utils/validator";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const form = useForm({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    console.log(isLogin ? "Login Data:" : "Register Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white pt-[7rem]">
      <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-[400px] relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {isLogin ? "Login" : "Register"}
          </h2>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>

        {isLogin ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold p-3 rounded hover:bg-gray-200"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold p-3 rounded hover:bg-gray-200"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
