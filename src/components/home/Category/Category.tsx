import React from "react";
import Image from "next/image";

// Mock data for the categories
const categories = [
  {
    id: 1,
    name: "Backpacks",
    imageUrl:
      "https://bagsmart.com/cdn/shop/files/3_37267b12-6646-4fa1-a314-14fbcf7aa573_480x.webp?v=1737641790",
  },
  {
    id: 2,
    name: "Tote Bags",
    imageUrl: "https://bagsmart.com/cdn/shop/files/4_480x.webp?v=1737641790",
  },
  {
    id: 3,
    name: "Eco-friendly Bags",
    imageUrl:
      "https://bagsmart.com/cdn/shop/files/VEGA_Walker_eb577bf1-f0a3-4b4f-8b3a-7ed0d6e951f0_1100x.jpg?v=1739763614",
  },
  {
    id: 4,
    name: "Duffel Bags",
    imageUrl:
      "https://bagsmart.com/cdn/shop/files/Header5_360x.webp?v=1737641790",
  },
  {
    id: 5,
    name: "Satchels",
    imageUrl: "https://bagsmart.com/cdn/shop/files/4_480x.webp?v=1737641790",
  },
];

const ShopByCategory = () => {
  return (
    <div className="px-8 py-12 bg-[#f4f0ed] min-h-[80vh]">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">SHOP BY CATEGORY</h2>
        <p className="text-lg text-gray-600 mt-2">Explore a variety of bags</p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center relative group overflow-hidden"
          >
            <div className="w-full h-64 relative group">
              {/* Hoverable Image */}
              <Image
                alt={category.name}
                src={category.imageUrl}
                className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                width={300}
                height={300}
              />
              {/* Category Name and More Details Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 mb-4"
                >
                  {category.name}
                </a>
                {/* "More Details" Button */}
                <button className="bg-white text-black px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-105 transform">
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
