export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const eyebrowClass = light ? "text-cr-white/80" : "text-cr-blue/70";
  const titleClass = light ? "text-cr-white" : "text-cr-blue";
  const subtitleClass = light ? "text-cr-white/85" : "text-cr-blue/75";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className={`text-sm font-bold uppercase tracking-[0.2em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-bold md:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${subtitleClass}`}>{subtitle}</p>
      )}
    </div>
  );
}
