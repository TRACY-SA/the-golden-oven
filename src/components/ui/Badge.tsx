export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-full bg-cream/95 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-chocolate">
      {children}
    </span>
  );
}
