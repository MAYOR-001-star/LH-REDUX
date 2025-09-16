import React, {useState} from "react";
import { useGetCategoryQuery } from "../services/CategoryApi";
import Products from "./Products";

const Home = () => {
  const { data, error, isLoading } = useGetCategoryQuery();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const allCategories = data?.products.map((p) => p.category);
  const uniqueCategories = [...new Set(allCategories)];

  if (isLoading) return "Loading...";
  if (error) return "Something went wrong...";

  return (
    <>
      <h1 className="text-white px-4 pt-[6rem] text-3xl">Categories</h1>
      <div className="p-4 bg-[#000000] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-4 py-[3rem] cursor-pointer">
        {uniqueCategories?.map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="text-white border border-white rounded-lg hover:border-[#b0adab] transition p-4"
          >
            <p className="text-xl capitalize">{category}</p>
          </div>
        ))}
      </div>
      <Products categorySearch={selectedCategory} />
    </>
  );
};

export default Home;
