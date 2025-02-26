"use client";
import { useParams } from "next/navigation";
import { Button, Rate, Card } from "antd";

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/Lib/app/hooks";
import { getSingleBag } from "@/Lib/features/Api/BagsApi/bagSlice";
import { useGetSingleBagQuery } from "@/Lib/features/Api/BagsApi/BagsApi";
import { TBags } from "@/components/Types/type";

const BagDetails = () => {
  const dispatch = useAppDispatch();
  const { bag } = useParams();
  const id = bag;
  const { data, isLoading } = useGetSingleBagQuery(id as string) || {};
  const bagItem = data as TBags;

  if (isLoading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  dispatch(getSingleBag(data));

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section with Background Image */}
      <div
        className="relative h-60 bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage: "url('/path-to-your-banner-image.jpg')", // Update with the actual path to your image
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay to enhance text readability
        }}
      >
        {bagItem.name}
      </div>

      {/* Product Details Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white mt-8 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative h-80 w-full">
            <Image
              src={bagItem.imageUrl}
              alt={bagItem.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
              layout="fill"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold">{bagItem.name}</h1>
            <p className="text-lg text-gray-600 mt-2">${bagItem.price}</p>
            <Rate
              allowHalf
              defaultValue={bagItem?.reviews?.length || 0} // Default to 0 if no reviews
              className="mt-2"
            />
            <p className="text-gray-700 mt-4">{bagItem.description}</p>

            {/* Buy Now Button */}
            <Link href={`/booking-from/${bagItem.id}`}>
              <Button type="primary" size="large" className="mt-4 w-full">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {Array.isArray(bagItem?.reviews) && bagItem?.reviews?.length > 0 ? (
            bagItem.reviews.map((review, index) => (
              <Card key={index} className="border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src={review.imageUrl || "/default-avatar.jpg"} // Provide a default image if no image is present
                      alt={review.user}
                      className="w-full h-full rounded-full"
                      layout="fill"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{review.user}</p>
                    <Rate
                      allowHalf
                      defaultValue={review.rating}
                      className="text-yellow-500 text-sm"
                    />
                  </div>
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
              </Card>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p> // Display this if there are no reviews
          )}
        </div>
      </div>
    </div>
  );
};

export default BagDetails;
