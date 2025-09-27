import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../utils/validator";
import { supabase } from "../lib/supabase";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: { role: "" },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password") || "";
  const confirmPassword = watch("confirmPassword") || "";

  // 🔑 Email/Password Sign Up
  const onSubmit = async (values) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            role: values.role,
          },
        },
      });

      if (error) throw error;

      toast.success("Registration successful ✅. Please check your email to confirm.");

      if (values.role === "seller") {
        navigate("/catalogue");
      } else {
        navigate("/");
      }

      reset();
    } catch (err) {
      toast.error(err?.message ?? String(err));
    }
  };

  // 🌍 Social Auth
  const handleProviderLogin = async (provider) => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`, // adjust if needed
        },
      });
      if (error) throw error;
    } catch (err) {
      toast.error(err?.message ?? String(err));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-black text-white py-[10rem]">
        <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-[400px] relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Register</h2>
            <Link to="/login" className="text-blue-400 underline">
              Login
            </Link>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={() => handleProviderLogin("google")}
              className="flex items-center justify-center gap-2 w-full p-3 rounded bg-white text-black font-medium hover:bg-gray-200"
            >
              <FaGoogle /> Continue with Google
            </button>
            <button
              onClick={() => handleProviderLogin("github")}
              className="flex items-center justify-center gap-2 w-full p-3 rounded bg-gray-800 hover:bg-gray-700"
            >
              <FaGithub /> Continue with GitHub
            </button>
            <button
              onClick={() => handleProviderLogin("twitter")}
              className="flex items-center justify-center gap-2 w-full p-3 rounded bg-blue-500 hover:bg-blue-600"
            >
              <FaTwitter /> Continue with Twitter
            </button>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">or continue with</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* 📧 Email + Password Registration */}
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

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="w-full p-3 rounded bg-neutral-800 outline-none"
              />
              {confirmPassword.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  onKeyUp={() => trigger("confirmPassword")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
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
                <option value="">Select Role</option>
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
    </>
  );
}
