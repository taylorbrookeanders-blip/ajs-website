import { CtaButton } from "./CtaButton";

const links = [
  { href: "#vip", label: "VIP" },
  { href: "#entertainers", label: "Entertainers" },
  { href: "#dining", label: "Dining" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="shimmer-border h-px opacity-60" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-2xl tracking-[0.15em] text-white sm:text-3xl">
            AJ&apos;s
          </p>
          <p className="mt-1 font-serif text-lg tracking-[0.2em] text-gold italic sm:text-xl">
            Gentlemen&apos;s Club
          </p>
          <p className="mt-2 text-[10px] tracking-[0.4em] text-white/35 uppercase">
            Portland
          </p>

          <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.15em] text-white/45 uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-10">
            <CtaButton href="#vip" variant="neon">
              Book Your Night
            </CtaButton>
          </div>
        </div>

        <div className="gold-line mt-12 w-full opacity-50" />

        <div className="mt-8 flex flex-col items-center gap-3 text-center text-[11px] text-white/30 sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} AJ&apos;s Gentlemen&apos;s Club. All rights reserved.</p>
          <p>21+ only · Upscale attire required · Portland, Oregon</p>
        </div>
      </div>
    </footer>
  );
}
