"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { getProductById } from "@/data/products";
import { readStoredCart, writeStoredCart } from "@/lib/cart-storage";
import { siteConfig } from "@/lib/site-config";
import type { CartLine, StoredCartItem } from "@/types/cart";

type CartSnapshot = {
  items: StoredCartItem[];
  ready: boolean;
};

const serverSnapshot: CartSnapshot = { items: [], ready: false };
let cartSnapshot: CartSnapshot = serverSnapshot;
const cartListeners = new Set<() => void>();

function emitCart() {
  cartListeners.forEach((listener) => listener());
}

function subscribeCart(listener: () => void) {
  cartListeners.add(listener);
  return () => cartListeners.delete(listener);
}

function getCartSnapshot() {
  if (!cartSnapshot.ready && typeof window !== "undefined") {
    cartSnapshot = { items: readStoredCart(), ready: true };
  }
  return cartSnapshot;
}

function getServerCartSnapshot() {
  return serverSnapshot;
}

function replaceCart(items: StoredCartItem[]) {
  cartSnapshot = { items, ready: true };
  writeStoredCart(items);
  emitCart();
}

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  ready: boolean;
  drawerOpen: boolean;
  announcement: string;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function resolveLines(stored: StoredCartItem[]): CartLine[] {
  return stored.flatMap((item) => {
    const product = getProductById(item.productId);
    if (!product) return [];
    const quantity = Math.min(
      siteConfig.maxQuantity,
      Math.max(1, Math.floor(item.quantity)),
    );
    return [{ product, quantity, lineTotal: product.price * quantity }];
  });
}

export function CartProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(subscribeCart, getCartSnapshot, getServerCartSnapshot);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const { items: stored, ready } = snapshot;

  const lines = useMemo(() => resolveLines(stored), [stored]);
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);

  const addItem = useCallback((productId: string, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) return;
    const amount = Math.min(siteConfig.maxQuantity, Math.max(1, Math.floor(quantity)));
    const existing = cartSnapshot.items.find((item) => item.productId === productId);
    const next = existing
      ? cartSnapshot.items.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: Math.min(siteConfig.maxQuantity, item.quantity + amount),
              }
            : item,
        )
      : [...cartSnapshot.items, { productId, quantity: amount }];
    replaceCart(next);
    setAnnouncement(`${product.name} added to your cart.`);
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const product = getProductById(productId);
    if (!product) return;
    const next = Math.floor(quantity);
    if (next < 1) return;
    const quantityValue = Math.min(siteConfig.maxQuantity, next);
    replaceCart(
      cartSnapshot.items.map((item) =>
        item.productId === productId ? { ...item, quantity: quantityValue } : item,
      ),
    );
    setAnnouncement(`${product.name} quantity updated to ${quantityValue}.`);
  }, []);

  const removeItem = useCallback((productId: string) => {
    const product = getProductById(productId);
    replaceCart(cartSnapshot.items.filter((item) => item.productId !== productId));
    if (product) setAnnouncement(`${product.name} removed from your cart.`);
  }, []);

  const clearCart = useCallback(() => {
    replaceCart([]);
    setAnnouncement("Your cart is now empty.");
  }, []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const value = useMemo(
    () => ({
      lines,
      count,
      subtotal,
      ready,
      drawerOpen,
      announcement,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      openDrawer,
      closeDrawer,
    }),
    [
      lines,
      count,
      subtotal,
      ready,
      drawerOpen,
      announcement,
      addItem,
      setQuantity,
      removeItem,
      clearCart,
      openDrawer,
      closeDrawer,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
