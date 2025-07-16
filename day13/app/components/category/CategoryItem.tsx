// components/CategoryItem.tsx
import React from "react";
import Link from "next/link";

type CategoryItemProps = {
  id: number;
  name: string;
  icon?: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ id, name, icon }) => {
  return (
    <Link
      href={`/category/${id}`}
      className="flex items-center space-x-1 text-black hover:text-blue-600 transition"
    >
      {icon && <i className={`fas ${icon}`}></i>}
      <span>{name}</span>
    </Link>
  );
};

export default CategoryItem;
