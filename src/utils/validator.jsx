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
    confirmPassword: z.string(),
    role: z.enum(["buyer", "seller"], {
      required_error: "Please select a role",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const productSchema = z.object({
  category: z.enum(["beauty", "fragrances", "furniture", "groceries"], {
    required_error: "Category is required",
  }),
  name: z.string().min(2, "Product name is too short"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  image: z
    .any()
    .refine((file) => file?.length === 1, "Image is required"),
});
