import Image from "next/image";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { Badge } from "@/components/ui/Badge";
import { PriceDisplay } from "@/components/products/PriceDisplay";
import { categoryContent } from "@/data/content";
import type { Product } from "@/types/product";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-chocolate/10 bg-white shadow-[0_18px_40px_-28px_rgba(57,37,29,0.55)] motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isBestseller ? <Badge>Bestseller</Badge> : null}
          {compact ? null : <Badge>{categoryContent[product.category].label}</Badge>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className={`font-serif leading-tight text-chocolate ${compact ? "text-xl" : "text-2xl"}`}>
          {product.name}
        </h3>
        {compact ? null : (
          <p className="mt-2 flex-1 text-sm leading-6 text-cocoa">{product.description}</p>
        )}
        <div className={`flex items-end justify-between gap-3 ${compact ? "mt-auto pt-4" : "mt-4"}`}>
          <p className="text-base font-semibold text-chocolate">
            <PriceDisplay amount={product.price} />
            <span className="ml-1 text-sm font-medium text-cocoa">/ {product.unit}</span>
          </p>
        </div>
        <AddToCartButton productId={product.id} productName={product.name} className="mt-4 w-full" />
      </div>
    </article>
  );
}
