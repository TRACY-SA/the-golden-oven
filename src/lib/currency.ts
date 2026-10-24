const amountFormat = new Intl.NumberFormat("en-GH", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatPrice(amount: number) {
  return `GH₵ ${amountFormat.format(amount)}`;
}
