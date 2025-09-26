import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/validator";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { supabase } from "../lib/supabase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const password = watch("password") || "";

  useEffect(() => {
    const checkData = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session) {
        navigate("/");
      }
    };
    checkData();
  }, [navigate]);
  const onSubmit = async (values) => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
        options: {
          data: { role: values.role },
        },
      });

      if (error) throw error;

      toast("Login successful ✅");

      const role = data.user?.user_metadata?.role;

      role === "seller" ? navigate("/seller-catalogue") : navigate("/");
    } catch (err) {
      toast(err?.message ?? String(err));
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-black text-white py-[5rem]">
        <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-[400px] relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Login</h2>
            <Link to="/register" className="text-blue-400 underline">
              Register
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
              Login
            </button>
            <div className="flex justify-end mb-2">
              <Link
                to="/forgot-password"
                className="text-blue-400 text-sm underline"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
