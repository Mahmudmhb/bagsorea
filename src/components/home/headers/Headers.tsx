"use client";
import { Input, Tooltip, Badge } from "antd";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 transition-all duration-300 z-10 ${
          isSticky ? "bg-white shadow-lg" : "bg-transparent "
        }`}
      >
        {/* Left - Logo & Brand Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          <span
            className={`text-xl font-bold ${
              isSticky ? "text-black" : "text-white"
            }`}
          >
            Bagsorea
          </span>
        </div>

        {/* Middle - Search Bar */}
        <div className="w-1/2 max-w-lg">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            allowClear
          />
        </div>

        {/* Right - Profile, Cart, Notification */}
        <div className="flex items-center space-x-4">
          <Tooltip title="Notifications">
            <BellOutlined
              className={`w-6 h-6 cursor-pointer ${
                isSticky ? "text-black" : "text-white"
              }`}
            />
          </Tooltip>
          <Tooltip title="Shopping Cart">
            <Badge count={2}>
              <ShoppingCartOutlined
                className={`text-xl cursor-pointer ${
                  isSticky ? "text-black" : "text-white"
                }`}
              />
            </Badge>
          </Tooltip>
          <Tooltip title="Profile">
            <UserOutlined
              className={`text-xl cursor-pointer ${
                isSticky ? "text-black" : "text-white"
              }`}
            />
          </Tooltip>
        </div>
      </header>
    </div>
  );
}
