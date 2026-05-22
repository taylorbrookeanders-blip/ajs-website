import { LOGO_SRC } from "../constants/site";

type Variant = "nav" | "hero";

type Props = {
  variant?: Variant;
  className?: string;
};

const sizeClasses: Record<Variant, string> = {
  nav: "h-9 w-auto max-w-[140px] sm:h-11 sm:max-w-[180px]",
  hero: "h-28 w-auto max-w-[280px] sm:h-36 sm:max-w-[340px] md:h-44 md:max-w-[400px] lg:h-52 lg:max-w-[460px]",
};

export function Logo({ variant = "nav", className = "" }: Props) {
  const isHero = variant === "hero";

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${isHero ? "logo-glow" : ""} ${className}`}
    >
      {isHero && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,45,138,0.25)_0%,rgba(201,169,98,0.12)_40%,transparent_70%)] blur-2xl"
          aria-hidden
        />
      )}
      <img
        src={LOGO_SRC}
        alt="AJ's Gentlemen's Club"
        className={`object-contain object-center ${sizeClasses[variant]}`}
        width={isHero ? 460 : 180}
        height={isHero ? 208 : 44}
        decoding="async"
        fetchPriority={isHero ? "high" : "auto"}
      />
    </div>
  );
}
