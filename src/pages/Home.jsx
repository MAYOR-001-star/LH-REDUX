import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      category: "Electronics",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 80,
      category: "Wearables",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 1500,
      category: "Computers",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 60,
      category: "Audio",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 1,
      name: "Wireless Headphones",
      price: 120,
      category: "Electronics",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 80,
      category: "Wearables",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 1500,
      category: "Computers",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 60,
      category: "Audio",
      image:
        "https://images.pexels.com/photos/33796884/pexels-photo-33796884.jpeg?_gl=1*on75tl*_ga*Njc5MTk1MDkyLjE3NTc1MzU2MzU.*_ga_8JE65Q40S6*czE3NTc1NDI3MzQkbzIkZzEkdDE3NTc1NDI3NzgkajE2JGwwJGgw",
    },
  ];

  return (
    <>
      <h1 className="text-white px-4 pt-[6rem] text-3xl">Featured Products</h1>
      <div className="p-4 bg-[#000000] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-4 py-[3rem]">
        {featuredProducts.map((product) => {
          const { id, name, price, image, category } = product;
          return (
            <Link
              to="/cart"
              key={id}
              className="text-white border-3 border-white rounded-lg hover:border-[#b0adab] transition"
            >
              <div>
                <img
                  className="w-fit rounded-t-lg"
                  src={image}
                  alt="product-image"
                />
              </div>
              <div className="p-2">
                <p className="text-xl">{name}</p>
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

export default Home;
