type Variant = "gold" | "neon" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  gold:
    "bg-gradient-to-r from-gold-dim via-gold to-gold-bright text-void font-semibold tracking-widest uppercase hover:brightness-110 shadow-[0_0_30px_rgba(201,169,98,0.25)]",
  neon:
    "bg-neon text-white font-semibold tracking-widest uppercase hover:bg-neon-soft shadow-[0_0_30px_rgba(255,45,138,0.35)]",
  outline:
    "border border-gold/50 text-gold-bright font-medium tracking-widest uppercase hover:border-gold hover:bg-gold/5",
  ghost:
    "text-white/70 font-medium tracking-wide hover:text-neon-soft underline-offset-4 hover:underline",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function CtaButton({
  href,
  children,
  variant = "gold",
  className = "",
  external,
  onClick,
}: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 text-xs transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-sm ${variants[variant]} ${className}`}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
