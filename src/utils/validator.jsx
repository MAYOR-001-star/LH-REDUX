import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
    role: z.enum(["buyer", "seller"], "please pick a role"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const productSchema = z.object({
  category: z.enum(
    ["beauty", "fragrances", "furniture", "groceries"],
    "Category is required"
  ),
  name: z.string().min(2, "Product name is too short"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  image: z.any().refine((file) => file?.length === 1, "Image is required"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});
