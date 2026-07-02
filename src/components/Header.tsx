import { useState } from "react";
import { CtaButton } from "./CtaButton";
import { Logo } from "./Logo";

const nav = [
  { href: "#vip", label: "VIP" },
  { href: "#entertainers", label: "Entertainers" },
  { href: "#dining", label: "Dining" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-void/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a
          href="#"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="AJ's Gentlemen's Club — Home"
        >
          <Logo variant="nav" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] text-white/60 uppercase transition-colors hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
          <CtaButton href="tel:9714202421" variant="neon" className="!py-2.5 !text-[11px]">
            Reserve VIP
          </CtaButton>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-white/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-charcoal px-4 py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 text-sm tracking-[0.15em] text-white/80 uppercase hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <CtaButton
                href="tel:9714202421"
                variant="neon"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Reserve VIP
              </CtaButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
