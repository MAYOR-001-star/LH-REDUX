import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../utils/validator";

export default function SellerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data) => {
    const productData = {
      ...data,
      image: URL.createObjectURL(data.image[0]), 
    };
    console.log("Product Submitted:", productData);

    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white py-[8rem]">
      <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-6">Add to Catalogue</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <select
              {...register("category")}
              className="w-full p-3 rounded bg-neutral-800 outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name")}
              className="w-full p-3 rounded bg-neutral-800 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Price"
              {...register("price")}
              className="w-full p-3 rounded bg-neutral-800 outline-none"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="w-full p-3 rounded bg-neutral-800 outline-none"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold p-3 rounded hover:bg-gray-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
