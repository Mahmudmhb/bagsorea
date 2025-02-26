"use client";
import { Carousel } from "antd";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    image: "/images/reviewer1.jpg",
    rating: 5,
    text: "Great service! Highly recommend to everyone.",
  },
  {
    name: "Jane Smith",
    image: "/images/reviewer2.jpg",
    rating: 4,
    text: "Good experience, but there's room for improvement.",
  },
  {
    name: "Michael Johnson",
    image: "/images/reviewer3.jpg",
    rating: 5,
    text: "Absolutely loved it! Will come back again.",
  },
  {
    name: "Emily Davis",
    image: "/images/reviewer4.jpg",
    rating: 4,
    text: "Very satisfied with the product quality.",
  },
  {
    name: "Robert Wilson",
    image: "/images/reviewer5.jpg",
    rating: 5,
    text: "Top-notch service and friendly staff!",
  },
  {
    name: "Sophia Brown",
    image: "/images/reviewer6.jpg",
    rating: 4,
    text: "Nice experience, but a bit pricey.",
  },
  {
    name: "William Taylor",
    image: "/images/reviewer7.jpg",
    rating: 5,
    text: "Fast delivery and great packaging!",
  },
  {
    name: "Olivia Martinez",
    image: "/images/reviewer8.jpg",
    rating: 5,
    text: "The best purchase I've made this year!",
  },
  {
    name: "James Anderson",
    image: "/images/reviewer9.jpg",
    rating: 4,
    text: "Good quality but took longer to arrive.",
  },
  {
    name: "Charlotte Thomas",
    image: "/images/reviewer10.jpg",
    rating: 5,
    text: "Exceeded my expectations in every way!",
  },
];

export default function ReviewCarousel() {
  return (
    <div
      className="relative bg-cover bg-center py-16 min-h-[70vh]"
      style={{ backgroundImage: "url('/images/review-bg.jpg')" }}
    >
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <Carousel autoplay dotPosition="bottom">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-slate-400 text-gray-800 rounded-xl shadow-lg"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold mt-4">{review.name}</h3>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm text-center max-w-md">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
