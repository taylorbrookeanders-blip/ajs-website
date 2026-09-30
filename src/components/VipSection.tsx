import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const perks = [
  "Champagne service",
  "Premium VIP seating",
  "Exclusive private entertainment",
  "Personalized celebration packages",
];

const vipPhotos = [
  { src: "/gallery/the-experience/gallery62.jpg", alt: "Private VIP experience at AJ's" },
  { src: "/gallery/the-experience/gallery21.jpg", alt: "VIP room entertainment at AJ's" },
  { src: "/gallery/the-experience/gallery54.jpg", alt: "VIP lounge at AJ's Gentlemen's Club" },
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

        <div className="mx-auto mb-6 grid max-w-3xl grid-cols-3 gap-2 sm:mb-8 sm:gap-4">
          {vipPhotos.map((photo) => (
            <div
              key={photo.src}
              className="aspect-[3/4] overflow-hidden rounded-lg border border-gold/15"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="card-luxury mx-auto max-w-3xl p-6 sm:p-8">
          <ul className="space-y-3">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex gap-3 text-sm leading-relaxed text-white/80 sm:text-base font-medium"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {perk}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-white/75 sm:text-base font-medium">
            Custom packages &amp; pricing currently being curated.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base font-medium">
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
