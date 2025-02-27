"use client";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TBags } from "../Types/type";

const Bag = ({ bag }: { bag: TBags }) => {
  console.log(bag);
  return (
    <div className="flex flex-col ">
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
          <Link href={`/${bag.id}`}>
            <h3 className="text-xl font-semibold text-gray-800">{bag.name}</h3>{" "}
          </Link>

          <p className="text-lg font-semibold text-gray-600 mt-2">
            {bag.price}
          </p>
          <Button type="primary" className="mt-4 w-full">
            Buy Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Bag;
