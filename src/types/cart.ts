import type { Product } from "@/types/product";

export type StoredCartItem = {
  productId: string;
  quantity: number;
};

export type CartLine = {
  product: Product;
  quantity: number;
  lineTotal: number;
};
