"use client";
import { useEffect, useState } from "react";
import { Product } from "../types";

export default function TasksCSRPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {loading ? (
        <p className="text-gray-500">Đang tải danh sách sản phẩm...</p>
      ) : (
        <Products products={products} />
      )}
    </div>
  );
}

function Products({ products }: { products: Product[] }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Danh sách sản phẩm (CSR)
      </h1>
      <hr className="mb-4 border-gray-300" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="border border-gray-200 p-4 rounded-md hover:shadow-sm transition-all"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold text-blue-700">
              {product.title}
            </h2>
            <p className="text-sm text-gray-600 mb-1 line-clamp-2">
              {product.description}
            </p>
            <p className="text-green-600 font-bold">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
