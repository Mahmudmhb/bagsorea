"use client";
import React from "react";
import Image from "next/image";
import Bag from "@/components/Bags/bag";
import { TBags } from "@/components/Types/type";
import { useGetBagsQuery } from "@/Lib/features/Api/BagsApi/BagsApi";
import { useAppDispatch, useAppSelector } from "@/Lib/app/hooks";
import { getAllBags, useGetBags } from "@/Lib/features/Api/BagsApi/bagSlice";

const BagsSection = () => {
  const { data, isLoading } = useGetBagsQuery(undefined);
  const dispatch = useAppDispatch();
  const bags = useAppSelector(useGetBags);
  if (isLoading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  const bagSilce = data || [];
  dispatch(getAllBags(bagSilce));
  return (
    <div className="px-8 py-12 bg-[#f4f0ed] min-h-[80vh]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Bag Collection</h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore our latest bag collection
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 w-full h-96 lg:h-auto relative">
          <Image
            alt="Bag Section"
            src="https://bagsmart.com/cdn/shop/files/e21fe9fcaea8fe3189ed4530e4b21fd9.webp?v=1737641790"
            className="w-full h-full object-cover"
            fill
          />
        </div>

        {/* Right Side: Product Grid */}
        <div className="lg:w-1/2 w-full overflow-y-scroll max-h-[500px] hide-scrollbar">
          {bags.length === 0 ? (
            <p className="text-center text-lg text-gray-500">
              No bags available.
            </p>
          ) : (
            <div className="space-y-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {bags.map((bag: TBags) => (
                <Bag key={bag.id} bag={bag} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BagsSection;
