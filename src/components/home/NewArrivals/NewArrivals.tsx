import { Button, Card } from "antd";
import Image from "next/image";
import React from "react";

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
];

const NewArrivals = () => {
  return (
    <div className="px-8 py-12 bg-[#f4f0ed]">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
        <p className="text-lg text-gray-600 mt-2">
          Discover the latest trends in bags
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
              className="w-full max-w-xs shadow-md rounded-lg bg-transparent hover:border-none"
              style={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  {bag.name}
                </h3>
                <p className="text-lg font-semibold text-gray-600 mt-2">
                  {bag.price}
                </p>
                <Button type="primary" className="mt-4 w-full self-end">
                  Buy Now
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
