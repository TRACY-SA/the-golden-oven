type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  as = "h2",
  id,
}: SectionHeadingProps) {
  const Heading = as;
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = tone === "light" ? "text-cream" : "text-chocolate";
  const bodyColor = tone === "light" ? "text-peach" : "text-cocoa";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${
            tone === "light" ? "text-gold" : "text-gold-deep"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading id={id} className={`font-serif text-4xl leading-tight tracking-tight sm:text-5xl ${titleColor}`}>
        {title}
      </Heading>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${bodyColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
