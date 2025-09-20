// import React, { useState } from "react";

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => setIsLogin(!isLogin);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       console.log("Login form submitted");
//     } else {
//       console.log("Signup form submitted");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="bg-black text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block mb-1 text-sm">Email Address</label>
//             <input
//               type="email"
//               placeholder="example@gmail.com"
//               className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {!isLogin && (
//             <div>
//               <label className="block mb-1 text-sm">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           )}

//           <div>
//             <label className="block mb-1 text-sm">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {!isLogin && (
//             <div>
//               <label className="block mb-1 text-sm">Confirm Password</label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button
//             type="button"
//             onClick={toggleForm}
//             className="text-blue-400 hover:underline"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Authentication() {
  const mySchema = z
    .object({
      email: z.string().email("Invalid email"),
      password: z.string().min(6, "Password should be atleast 6 characters"),
      confirmPassword: z
        .string()
        .min(6, "Confirm password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    });

  // console.log(mySchema.safeParse(user));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(mySchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-sm mx-auto text-white pt-[15rem]"
    >
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="border p-2 w-full bg-transparent text-white placeholder-gray-400"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min length is 6" },
          })}
          className="border p-2 w-full bg-transparent text-white placeholder-gray-400"
        />
        {errors.password && (
          <p className="text-red-400 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          className="border p-2 w-full bg-transparent text-white placeholder-gray-400"
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Sign Up
      </button>
    </form>
  );
}
