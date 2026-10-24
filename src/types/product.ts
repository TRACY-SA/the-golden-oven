export const categories = ["cakes", "cupcakes", "bread", "pastries"] as const;

export type Category = (typeof categories)[number];

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  alt: string;
  isBestseller: boolean;
  isFeatured: boolean;
  tags: string[];
  unit: string;
};
