import { useEffect, useRef } from "react";
import { Logo } from "./Logo";

/** How long a "yes, I'm 21+" answer is remembered before asking again. */
const REMEMBER_DAYS = 30;
const STORAGE_KEY = "ajs-age-verified-at";
const LEAVE_URL = "https://www.google.com";

export function hasVerifiedAge() {
  try {
    const at = Number(localStorage.getItem(STORAGE_KEY));
    return at > 0 && Date.now() - at < REMEMBER_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    // Private browsing / blocked storage: ask every visit.
    return false;
  }
}

function rememberVerified() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // Storage unavailable: the visitor will simply be asked again next time.
  }
}

type Props = { onEnter: () => void };

export function AgeGate({ onEnter }: Props) {
  const enterRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll and focus the main button while the gate is up.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    enterRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const enter = () => {
    rememberVerified();
    onEnter();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      aria-describedby="age-gate-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-void/85 px-4 py-10 backdrop-blur-2xl"
    >
      <div className="card-luxury relative w-full max-w-md border border-gold/30 px-6 py-10 text-center shadow-[0_0_80px_rgba(255,45,138,0.18)] sm:px-10">
        <Logo variant="hero" className="mx-auto !h-28 sm:!h-32" />

        <p className="mt-8 text-[10px] font-semibold tracking-[0.35em] text-neon uppercase">Adults Only</p>
        <h2
          id="age-gate-title"
          className="font-display mt-3 text-2xl tracking-wide text-white sm:text-3xl"
        >
          Are You 21 or Older?
        </h2>
        <p id="age-gate-desc" className="mx-auto mt-4 max-w-sm text-sm leading-relaxed font-medium text-white/75">
          This website contains adult content, including nudity. You must be 21 years of age or older to enter.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            ref={enterRef}
            type="button"
            onClick={enter}
            className="inline-flex items-center justify-center rounded-sm bg-neon px-6 py-3.5 text-xs font-semibold tracking-widest text-white uppercase shadow-[0_0_30px_rgba(255,45,138,0.35)] transition-all duration-300 hover:bg-neon-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:text-sm"
          >
            I'm 21 or Older — Enter
          </button>
          <a
            href={LEAVE_URL}
            className="inline-flex items-center justify-center rounded-sm border border-gold/50 px-6 py-3.5 text-xs font-medium tracking-widest text-gold-bright uppercase transition-all duration-300 hover:border-gold hover:bg-gold/5 sm:text-sm"
          >
            I'm Under 21 — Leave
          </a>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-white/50">
          By entering, you confirm you are at least 21 years old and agree to view adult content.
        </p>
      </div>
    </div>
  );
}
