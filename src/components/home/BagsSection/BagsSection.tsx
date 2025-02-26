"use client";
import React from "react";
import Image from "next/image";
import { Card, Button } from "antd";

// Mock data for the bags
const bags = [
  {
    id: 1,
    name: "Leather Backpack",
    price: "$99.99",
    imageUrl:
      "https://bagsmart.com/cdn/shop/files/3_37267b12-6646-4fa1-a314-14fbcf7aa573_480x.webp?v=1737641790",
  },
  {
    id: 2,
    name: "Canvas Tote Bag",
    price: "$49.99",
    imageUrl: "https://bagsmart.com/cdn/shop/files/4_480x.webp?v=1737641790",
  },
  {
    id: 3,
    name: "Eco-friendly Handbag",
    price: "$79.99",
    imageUrl:
      "https://bagsmart.com/cdn/shop/files/VEGA_Walker_eb577bf1-f0a3-4b4f-8b3a-7ed0d6e951f0_1100x.jpg?v=1739763614",
  },
  {
    id: 4,
    name: "Travel Duffel Bag",
    price: "$129.99",
    imageUrl:
      "https://bagsmart.com/cdn/shop/files/Header5_360x.webp?v=1737641790",
  },
  {
    id: 5,
    name: "Luxury Leather Satchel",
    price: "$149.99",
    imageUrl: "https://bagsmart.com/cdn/shop/files/4_480x.webp?v=1737641790",
  },
  {
    id: 6,
    name: "Stylish Messenger Bag",
    price: "$89.99",
    imageUrl:
      "https://bagsmart.com/cdn/shop/files/VEGA_Walker_eb577bf1-f0a3-4b4f-8b3a-7ed0d6e951f0_1100x.jpg?v=1739763614",
  },
];

const BagsSection = () => {
  return (
    <div className="px-8 py-12 bg-[#f4f0ed] min-h-[80vh]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Bag Collection</h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore our latest bag collection
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: 50% Image */}
        <div className="lg:w-1/2 w-full h-96 lg:h-auto relative">
          <Image
            alt="Bag Section"
            src="https://bagsmart.com/cdn/shop/files/e21fe9fcaea8fe3189ed4530e4b21fd9.webp?v=1737641790"
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>

        {/* Right Side: 50% Products List (Scrollable, no scrollbar) */}
        <div className="lg:w-1/2 w-full overflow-y-scroll max-h-[500px] hide-scrollbar">
          {/* Section Title */}

          {/* Product Grid (Scrollable) */}
          <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-8">
            {bags.map((bag) => (
              <div key={bag.id} className="flex flex-col items-center">
                <Card
                  hoverable
                  cover={
                    <Image
                      alt={bag.name}
                      src={bag.imageUrl}
                      className="w-full h-64 object-cover"
                      width={300}
                      height={300}
                    />
                  }
                  className="w-full max-w-xs shadow-md rounded-lg bg-transparent"
                  style={{ height: "auto" }}
                >
                  <div className="p-4 flex flex-col justify-between h-full">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {bag.name}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600 mt-2">
                      {bag.price}
                    </p>
                    <Button type="primary" className="mt-4 w-full">
                      Buy Now
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom CSS for hiding the scrollbar */}
      <style jsx>{`
        /* Hide scrollbar but allow scrolling */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BagsSection;
