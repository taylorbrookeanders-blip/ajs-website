import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const perks = [
  "Champagne service",
  "Premium VIP seating",
  "Exclusive private entertainment",
  "Personalized celebration packages",
];

export function VipSection() {
  return (
    <section id="vip" className="section-glow relative bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Exclusive Access"
          title="VIP Experiences"
          subtitle="Private luxury experiences tailored for unforgettable nights."
        />

        <div className="card-luxury mx-auto max-w-3xl p-6 sm:p-8">
          <ul className="space-y-3">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex gap-3 text-sm leading-relaxed text-white/55 sm:text-base"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {perk}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-white/45 sm:text-base">
            Custom packages &amp; pricing currently being curated.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
            Want details now? Contact us directly.
          </p>

          <div className="mt-8 flex justify-center">
            <CtaButton href="tel:9714202421" variant="neon">
              Reserve VIP
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
