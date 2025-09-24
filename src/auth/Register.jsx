import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../utils/validator";
import {supabase} from "../../"
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: "someone@email.com",
        password: "ZSMhVHpbxWUsMLNndbOk",
      });

      if (error) throw error;

      alert("Login successful ✅");

      if (data.role === "seller") {
        window.location.href = "/seller/dashboard";
      } else {
        window.location.href = "/buyer/home";
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white py-[10rem]">
      <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-[400px] relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Register</h2>
          <Link to="/login" className="text-blue-400 underline">
            Login
          </Link>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 w-full p-3 rounded bg-white text-black font-medium hover:bg-gray-200">
            <FaGoogle /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full p-3 rounded bg-gray-800 hover:bg-gray-700">
            <FaGithub /> Continue with GitHub
          </button>
          <button className="flex items-center justify-center gap-2 w-full p-3 rounded bg-blue-500 hover:bg-blue-600">
            <FaTwitter /> Continue with Twitter
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

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
              <p className="text-red-500 text-sm">{errors.password.message}</p>
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
          <div>
            <select
              {...register("role")}
              className="w-full p-3 rounded bg-neutral-800 outline-none"
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold p-3 rounded hover:bg-gray-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
