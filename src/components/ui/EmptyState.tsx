import { Button } from "@/components/ui/Button";

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-chocolate/10 bg-white px-6 py-14 text-center">
      <h2 className="font-serif text-3xl text-chocolate">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-cocoa">{description}</p>
      {actionLabel && actionHref ? (
        <div className="mt-6">
          <Button href={actionHref}>{actionLabel}</Button>
        </div>
      ) : null}
    </div>
  );
}
