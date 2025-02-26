import { Button, Carousel } from "antd";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div
            className="relative min-h-[90vh] bg-center bg-cover flex items-center justify-center text-white"
            style={{
              backgroundImage:
                "url(https://bagsmart.com/cdn/shop/files/PC_banner2_f8e68fee-3555-4b6d-bc1f-d0404524af0a.webp?v=1739955383)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {/* Adding a semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Text and Button */}
            <div className="relative text-center flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-4xl font-bold">Great Product</h2>
              <p className="text-lg mt-2">
                Discover the best features and benefits.
              </p>
              <Button type="primary" className="mt-4">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="relative min-h-[90vh] bg-center bg-cover flex items-center justify-center text-white"
              style={{
                backgroundImage:
                  "url(https://bagsmart.com/cdn/shop/files/PC_banner2_f8e68fee-3555-4b6d-bc1f-d0404524af0a.webp?v=1739955383)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* Adding a semi-transparent overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Text and Button */}
              <div className="relative text-center flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-4xl font-bold">Great Product</h2>
                <p className="text-lg mt-2">
                  Discover the best features and benefits.
                </p>
                <Button type="primary" className="mt-4">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="relative min-h-[90vh] bg-center bg-cover flex items-center justify-center text-white"
              style={{
                backgroundImage:
                  "url(https://bagsmart.com/cdn/shop/files/PC_banner2_f8e68fee-3555-4b6d-bc1f-d0404524af0a.webp?v=1739955383)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* Adding a semi-transparent overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Text and Button */}
              <div className="relative text-center flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-4xl font-bold">Great Product</h2>
                <p className="text-lg mt-2">
                  Discover the best features and benefits.
                </p>
                <Button type="primary" className="mt-4">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="relative min-h-[90vh] bg-center bg-cover flex items-center justify-center text-white"
              style={{
                backgroundImage:
                  "url(https://bagsmart.com/cdn/shop/files/PC_banner2_f8e68fee-3555-4b6d-bc1f-d0404524af0a.webp?v=1739955383)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* Adding a semi-transparent overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Text and Button */}
              <div className="relative text-center flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-4xl font-bold">Great Product</h2>
                <p className="text-lg mt-2">
                  Discover the best features and benefits.
                </p>
                <Button type="primary" className="mt-4">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
