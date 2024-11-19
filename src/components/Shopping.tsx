import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    title: " Color: Sliver Luxury Bridal Dress ",
    category: "Catalog",
    price: "700.00",
    imageUrl:
      "https://glamorousthreads.pk/wp-content/uploads/2024/04/ex-138b_540x.webp",
    bgColor: "",
  },

  {
    id: 2,
    title: "Lawn dress designing for girls",
    category: "gary color",
    price: "500.00",
    imageUrl:
      "https://aishanaheed.com/wp-content/uploads/Ready-To-Wear.jpeg.webp",
    bgColor: "",
  },

  {
    id: 3,
    title: "Silk Saree With Exclusive Blouse ",
    category: "peach color",
    price: "900.00",
    imageUrl: "https://aishanaheed.com/wp-content/uploads/IMG_0422.jpg",
    bgColor: "",
  },
];

export default function Product() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-4">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} p-4 m-2 rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height={"152"}
              width={"152"}
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 1, 1)",
                opacity: 0.2,
              }}
            ></div>

            <Image
              className="relative w-55"
              src={product.imageUrl}
              alt={product.title}
              width={1020}
              height={1020}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-center">
              <span className="block font-semibold text-xl ">
                {product.title}
              </span>
              <br />
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-1 py-8 leading-none items-center justify-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}