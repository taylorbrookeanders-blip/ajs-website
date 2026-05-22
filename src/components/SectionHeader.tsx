type Props = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`mb-10 max-w-2xl sm:mb-14 ${alignClass}`}>
      <p className="text-[10px] font-semibold tracking-[0.4em] text-neon uppercase sm:text-xs">
        {label}
      </p>
      <h2 className="font-display mt-3 text-3xl leading-tight tracking-wide text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className={`gold-line mt-4 w-24 ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="font-serif mt-5 text-lg leading-relaxed text-white/50 italic sm:text-xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}
