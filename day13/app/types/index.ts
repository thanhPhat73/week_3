export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string; // ISO date string
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}
