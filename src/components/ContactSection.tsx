import { MAPS_URL } from "../constants/site";
import { AddressLink } from "./AddressLink";
import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const hours = [{ days: "Daily", time: "10:00 AM – 2:30 AM" }];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,98,0.06)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Find Us"
          title="Location & Contact"
          subtitle="Discreetly situated in the heart of Portland. Your night begins the moment you arrive."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="card-luxury p-6 sm:p-8 lg:col-span-2">
            <h3 className="font-display text-lg tracking-wide text-gold">Hours</h3>
            <ul className="mt-6 space-y-4">
              {hours.map((row) => (
                <li
                  key={row.days}
                  className="border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-medium text-white/80">{row.days}</p>
                  <p className="mt-1 text-sm text-neon-soft">{row.time}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-luxury p-6 sm:p-8 lg:col-span-3">
            <address className="space-y-4 not-italic">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                  Address
                </p>
                <p className="mt-2 font-display text-xl text-white sm:text-2xl">
                  AJ&apos;s Gentlemen&apos;s Club
                </p>
                <AddressLink className="mt-2 block text-white/60" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                  Reservations
                </p>
                <a
                  href="tel:9714202421"
                  className="mt-2 block text-lg text-gold transition-opacity hover:opacity-80"
                >
                  971-420-2421
                </a>
                <a
                  href="mailto:ajsclubpdx@gmail.com"
                  className="mt-1 block text-sm text-white/50 hover:text-neon-soft"
                >
                  ajsclubpdx@gmail.com
                </a>
              </div>
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaButton href={MAPS_URL} variant="gold" external>
                Get Directions
              </CtaButton>
              <CtaButton href="tel:9714202421" variant="neon">
                Reserve VIP
              </CtaButton>
            </div>

            <p className="mt-8 text-xs leading-relaxed text-white/30">
              Must be 21+ with valid government-issued ID. Management reserves all
              rights of admission.
            </p>
          </div>
        </div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block overflow-hidden rounded-sm border border-white/5 transition-colors hover:border-gold/30"
        >
          <div className="flex h-44 flex-col items-center justify-center gap-2 bg-charcoal-mid px-4 text-center transition-colors hover:bg-charcoal-light sm:h-56">
            <AddressLink className="text-white/60" />
            <p className="text-[10px] tracking-[0.3em] text-gold/70 uppercase">
              Open in Google Maps
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
