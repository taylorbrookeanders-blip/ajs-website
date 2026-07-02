import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden md:min-h-[100vh]">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center"
          aria-hidden
        >
          <source src="/gallery/hero/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-void/65" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void/80"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,3,3,0.5)_100%)]"
        aria-hidden
      />
      <div className="vignette pointer-events-none absolute inset-0" aria-hidden />

      <div
        className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-24 pb-20 text-center sm:px-6 sm:pt-28 lg:px-8 lg:pb-28">
        <div className="animate-fade-up">
          <p className="text-[10px] font-medium tracking-[0.5em] text-gold uppercase sm:text-xs">
            Portland · Est. 2025
          </p>

          <h1 className="font-display mt-6 text-4xl leading-[1.05] tracking-[0.12em] text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            Where the
            <br />
            <span className="gold-text">Night</span>{" "}
            <span className="text-neon neon-glow-text">Comes Alive</span>
          </h1>

          <p className="font-serif mx-auto mt-8 max-w-xl text-xl leading-relaxed text-white/60 italic sm:text-2xl">
            Experience Portland&apos;s premier luxury nightlife destination.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <CtaButton href="tel:9714202421" variant="gold">
              Reserve VIP
            </CtaButton>
            <CtaButton href="#events" variant="outline">
              View Events
            </CtaButton>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-white/5 pt-10 sm:mt-20">
          {[
            { value: "21+", label: "Members & Guests" },
            { value: "VIP", label: "Private Suites" },
            { value: "7N", label: "Nights Weekly" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl tracking-widest text-gold sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] tracking-[0.25em] text-white/40 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-void to-transparent"
        aria-hidden
      />
    </section>
  );
}
