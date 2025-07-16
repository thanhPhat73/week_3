import React from "react";
import Link from "next/link";
import CategoryMenu from "../category/CategoryMenu";

const HeaderBot = () => {
  return (
    <div className="bg-yellow-400 w-full">
      {/* Top row */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-black text-2xl">thegioididong</span>
        </div>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Bạn tìm gì..."
            className="w-full rounded-full px-4 py-2 focus:outline-none bg-amber-50 text-black placeholder:text-gray-500"
          />
        </div>

        {/* Login + Cart + Location */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="flex items-center space-x-1 text-black cursor-pointer"
          >
            <i className="fas fa-user"></i>
            <span>Đăng nhập</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center space-x-1 text-black cursor-pointer"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Giỏ hàng</span>
          </Link>
          <button className="flex items-center bg-yellow-300 rounded-full px-3 py-1 space-x-1">
            <i className="fas fa-map-marker-alt text-black"></i>
            <span>Hồ Chí Minh</span>
            <i className="fas fa-chevron-right text-black text-sm"></i>
          </button>
        </div>
      </div>

      {/* Menu dưới */}
      <CategoryMenu />

      {/* Dòng phân cách */}
    </div>
  );
};

export default HeaderBot;
