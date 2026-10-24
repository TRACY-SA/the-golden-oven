import { siteConfig } from "@/lib/site-config";
import type { StoredCartItem } from "@/types/cart";
import type { DemoOrder, DemoPaymentMethod, Fulfilment } from "@/types/order";

const CART_KEY = "golden-oven-cart-v1";
const ORDER_KEY = "golden-oven-demo-order";

function clampQuantity(quantity: number) {
  if (!Number.isFinite(quantity)) return 1;
  return Math.min(siteConfig.maxQuantity, Math.max(1, Math.floor(quantity)));
}

export function readStoredCart(): StoredCartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.flatMap((entry) => {
      if (!entry || typeof entry !== "object") return [];
      const record = entry as { productId?: unknown; quantity?: unknown };
      if (typeof record.productId !== "string" || record.productId.length === 0) {
        return [];
      }
      const quantity =
        typeof record.quantity === "number" ? record.quantity : Number(record.quantity);
      return [{ productId: record.productId, quantity: clampQuantity(quantity) }];
    });
  } catch {
    return [];
  }
}

export function writeStoredCart(items: StoredCartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function isFulfilment(value: unknown): value is Fulfilment {
  return value === "collection" || value === "delivery";
}

function isPayment(value: unknown): value is DemoPaymentMethod {
  return value === "collection-demo" || value === "momo-demo";
}

export function readDemoOrder(): DemoOrder | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(ORDER_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const order = parsed as Partial<DemoOrder>;
    if (typeof order.reference !== "string" || !Array.isArray(order.items)) return null;
    if (!isFulfilment(order.fulfilment) || !isPayment(order.paymentMethod)) return null;
    if (typeof order.customerName !== "string" || typeof order.total !== "number") return null;
    return order as DemoOrder;
  } catch {
    return null;
  }
}

export function writeDemoOrder(order: DemoOrder) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(ORDER_KEY, JSON.stringify(order));
}

export function createOrderReference() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  const code = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
  return `GO-${code}`;
}
