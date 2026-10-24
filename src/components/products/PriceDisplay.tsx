import { formatPrice } from "@/lib/currency";

export function PriceDisplay({
  amount,
  className = "",
}: {
  amount: number;
  className?: string;
}) {
  return <span className={className}>{formatPrice(amount)}</span>;
}
