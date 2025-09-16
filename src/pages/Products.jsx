import React from "react";
import { Link } from "react-router-dom";
import { useGetCategoryQuery } from "../services/CategoryApi";

const Products = ({ categorySearch }) => {
  const { data, error, isLoading } = useGetCategoryQuery();

  if (isLoading) return "Loading...";
  if (error) return "Something went wrongg....";

  const productsList = data?.products;

  const filteredProducts = categorySearch
    ? productsList.filter((p) => p.category === categorySearch)
    : productsList;

  return (
    <>
      <h1 className="text-white px-4 pt-[6rem] text-3xl">Featured Products</h1>
      <div className="p-4 bg-[#000000] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-4 py-[3rem]">
        {filteredProducts.slice(0, 15).map((product) => {
          const { id, title, price, images, category } = product;
          return (
            <Link
              to="/cart"
              key={id}
              className="text-white border-3 border-white rounded-lg hover:border-[#b0adab] transition"
            >
              <div>
                <img className="w-fit rounded-t-lg" src={images} alt={title} />
              </div>
              <div className="p-2">
                <p className="text-xl">{title}</p>
                <div className="w-full mt-2 flex justify-between items-end">
                  <p className="text-sm">{category}</p>
                  <p>${price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
