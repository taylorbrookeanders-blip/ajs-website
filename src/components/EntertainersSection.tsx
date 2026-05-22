import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const entertainers = [
  { name: "Alexandra", specialty: "Main Stage", nights: "Thu – Sat" },
  { name: "Serena", specialty: "VIP Lounge", nights: "Wed – Sun" },
  { name: "Valentina", specialty: "Feature Performer", nights: "Fri – Sat" },
  { name: "Jade", specialty: "Champagne Room", nights: "Thu – Sun" },
  { name: "Monroe", specialty: "Main Stage", nights: "Fri – Sun" },
  { name: "Isabella", specialty: "Special Events", nights: "By Schedule" },
];

function PlaceholderPortrait({ name }: { name: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-light">
      <div
        className="absolute inset-0 bg-gradient-to-t from-void via-charcoal-mid/50 to-charcoal-light"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,45,138,0.15),transparent_60%)]"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-end justify-center pb-6">
        <span className="font-display text-4xl tracking-[0.3em] text-white/10 uppercase">
          {name.charAt(0)}
        </span>
      </div>
      <div className="absolute top-3 right-3 h-8 w-px bg-gold/40" aria-hidden />
      <div className="absolute top-3 right-5 h-px w-8 bg-gold/40" aria-hidden />
    </div>
  );
}

export function EntertainersSection() {
  return (
    <section id="entertainers" className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,138,0.04)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Stage"
          title="Our Entertainers"
          subtitle="World-class talent. Unforgettable performances. The finest entertainers in the Pacific Northwest."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {entertainers.map((person) => (
            <article
              key={person.name}
              className="group card-luxury overflow-hidden transition-transform duration-500 hover:-translate-y-1"
            >
              <PlaceholderPortrait name={person.name} />
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-lg tracking-wide text-white transition-colors group-hover:text-gold-bright sm:text-xl">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs tracking-wide text-neon uppercase">
                  {person.specialty}
                </p>
                <p className="mt-2 text-sm text-white/40">{person.nights}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton href="#events" variant="gold">
            View Performance Schedule
          </CtaButton>
          <CtaButton href="#vip" variant="ghost">
            Request a Private Dance →
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
