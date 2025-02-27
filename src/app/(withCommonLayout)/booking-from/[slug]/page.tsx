/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Rate } from "antd";
import Image from "next/image";

import { useAppSelector } from "@/Lib/app/hooks";
import { useGetSingleBag } from "@/Lib/features/Api/BagsApi/bagSlice";

const BookingForm = () => {
  const [DeliveryPrice, setDeliveryPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useAppSelector(useGetSingleBag) as any;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData: any) => {
    const bookingData = {
      ...formData,
      cart,
      totalPrice, // Ensure you send the updated total price with the booking data
    };

    console.log("Booking Data:", bookingData);
    alert("Proceeding to Payment!");
  };

  const handleCourierrService = (value: any) => {
    const deliveryCharge = parseInt(value.target.value);
    setDeliveryPrice(deliveryCharge);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div
        className="relative h-60 bg-cover bg-center flex carts-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage: "url('/path-to-your-banner-image.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1 className="text-4xl font-bold text-[#030202] drop-shadow-md">
          Booking Form
        </h1>
      </div>

      <div className="max-w-5xl mx-auto p-6 bg-white mt-8 rounded-lg shadow-lg flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Left Section: Booking Form */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold mb-6 text-[#030202]">
            Personal Information
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#030202]">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border rounded-md text-black"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#030202]">
                Phone Number
              </label>
              <input
                type="text"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="w-full p-2 border rounded-md text-black"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">
                  {errors.phone.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#030202]">
                Address
              </label>
              <textarea
                {...register("address", { required: "Address is required" })}
                className="w-full p-2 border rounded-md text-black"
              />
              {errors.address && (
                <p className="text-red-500 text-xs">
                  {errors.address.message as string}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#030202]">
                Alternative Phone Number
              </label>
              <input
                type="text"
                {...register("altPhone")}
                className="w-full p-2 border rounded-md text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#030202]">
                Delivery Charge
              </label>
              <select
                {...register("DeliveryCharge", {
                  required: "City is required",
                })}
                onChange={(e) => handleCourierrService(e)}
                className="w-full p-2 border rounded-md text-black"
              >
                <option selected disabled>
                  Set Your Area
                </option>
                <option value="60">Dhaka 60 Tk</option>
                <option value="120">Outside Dhaka 120 Tk</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#030202]">
                Description
              </label>
              <textarea
                {...register("description")}
                className="w-full p-2 border rounded-md text-black"
              />
            </div>
          </form>
        </div>

        {/* Right Section: Cart */}
        <div className="lg:w-1/2 mx-auto space-y-4">
          <h2 className="text-xl font-bold mb-4 text-[#030202] text-center">
            Your Cart
          </h2>
          <div className="space-y-4">
            <Card key={cart.id} className="border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={cart.imageUrl}
                    alt={cart.name}
                    className="w-full h-full object-cover rounded-lg"
                    layout="fill"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#030202]">{cart.name}</h3>
                  <p className="text-[#030202]">Price: ${cart.price}</p>
                  <p className="text-[#030202]">
                    {/* Quantity: {cart.quantity} */}
                  </p>
                  <Rate
                    disabled
                    defaultValue={5}
                    className="text-yellow-500 text-sm"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Total and Proceed Button */}
          <div className="flex flex-col space-y-3 carts-center">
            <h3 className="font-semibold text-[#030202]">Total: tk</h3>
            <h3 className="text-sm text-gray-600">
              Delivery Charge: {DeliveryPrice} Tk
            </h3>
            <h3 className="font-semibold text-[#030202]">
              Sub Total: {totalPrice} tk
            </h3>
            <Button
              type="primary"
              size="large"
              className="w-48"
              onClick={handleSubmit(onSubmit)}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
