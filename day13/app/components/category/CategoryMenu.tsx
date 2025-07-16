// components/CategoryMenu.tsx
"use client";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

type Category = {
  id: number;
  name: string;
  image: string;
};

const iconMap: Record<string, string> = {
  Clothes: "fa-tshirt",
  Electronics: "fa-tv",
  Furniture: "fa-couch",
  Shoes: "fa-shoe-prints",
  Others: "fa-box-open",
};

const CategoryMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Fetch categories failed:", err));
  }, []);

  return (
    <div className="bg-yellow-400 w-full py-2 overflow-x-auto">
      <div className="max-w-screen-xl mx-auto flex space-x-6 whitespace-nowrap px-4 text-sm font-medium text-black">
        {categories.map((cat) => (
          <CategoryItem
            key={cat.id}
            id={cat.id}
            name={cat.name}
            icon={iconMap[cat.name] || "fa-tags"}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
