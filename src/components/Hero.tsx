import { CtaButton } from "./CtaButton";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic background layers */}
      <div className="absolute inset-0 bg-void" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal via-void to-void"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,45,138,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(201,169,98,0.08)_0%,transparent_45%)]"
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
        }}
        aria-hidden
      />

      <div className="vignette pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-2 animate-fade-up lg:order-1">
            <p className="text-[10px] font-medium tracking-[0.5em] text-gold uppercase sm:text-xs">
              Portland · Est. 2025
            </p>

            <h1 className="font-display mt-6 text-4xl leading-[1.05] tracking-[0.08em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Where the
              <br />
              <span className="gold-text">Night</span>{" "}
              <span className="text-neon neon-glow-text">Comes Alive</span>
            </h1>

            <p className="font-serif mt-8 max-w-lg text-xl leading-relaxed text-white/55 italic sm:text-2xl">
              Portland&apos;s most refined gentlemen&apos;s club — discreet luxury,
              captivating entertainment, and an atmosphere crafted for those who
              demand the extraordinary.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <CtaButton href="#vip" variant="gold">
                Book VIP Experience
              </CtaButton>
              <CtaButton href="#entertainers" variant="outline">
                Meet Our Entertainers
              </CtaButton>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Logo variant="hero" />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/5 pt-10 sm:mt-20">
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
