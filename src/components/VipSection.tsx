import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Platinum Lounge",
    price: "From $350",
    perks: [
      "Reserved booth with bottle service",
      "Dedicated host for the evening",
      "Priority seating & expedited entry",
    ],
  },
  {
    name: "Diamond Suite",
    price: "From $750",
    featured: true,
    perks: [
      "Private suite with panoramic views",
      "Premium champagne & spirit package",
      "Personal entertainer consultation",
      "Complimentary valet parking",
    ],
  },
  {
    name: "Black Card",
    price: "By Invitation",
    perks: [
      "Annual membership with unlimited access",
      "Exclusive event invitations",
      "Custom experiences tailored to you",
      "24/7 concierge line",
    ],
  },
];

export function VipSection() {
  return (
    <section id="vip" className="section-glow relative bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Exclusive Access"
          title="VIP Experiences"
          subtitle="Elevate your evening with curated luxury — from intimate lounges to our most coveted private suites."
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`card-luxury relative flex flex-col p-6 sm:p-8 ${
                tier.featured
                  ? "md:-mt-4 md:mb-4 border-gold/30 ring-1 ring-gold/20"
                  : ""
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-sm bg-neon px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl tracking-wide text-white sm:text-2xl">
                {tier.name}
              </h3>
              <p className="mt-2 font-serif text-2xl text-gold italic">{tier.price}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex gap-3 text-sm leading-relaxed text-white/55"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {perk}
                  </li>
                ))}
              </ul>
              <CtaButton
                href="#contact"
                variant={tier.featured ? "neon" : "outline"}
                className="mt-8 w-full"
              >
                Reserve Now
              </CtaButton>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/35">
          All packages subject to availability.
        </p>
      </div>
    </section>
  );
}
