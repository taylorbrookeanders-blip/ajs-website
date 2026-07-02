import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const events = [
  {
    date: "Every Thursday",
    title: "Ladies Night",
    desc: "Featured performers, drink specials, and elevated energy from open to close.",
  },
  {
    date: "First Friday",
    title: "Gold Rush",
    desc: "Live DJ, champagne showers, and exclusive giveaways for VIP members.",
  },
  {
    date: "Monthly",
    title: "Fantasy Showcase",
    desc: "Themed performances, guest stars, and our most anticipated stage production.",
  },
  {
    date: "Private",
    title: "Bachelor & Corporate",
    desc: "Custom packages for celebrations. Contact our events team for bespoke planning.",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Calendar"
          title="Upcoming Events"
          subtitle="Weekly specials, unforgettable nights, and exclusive experiences happening all week long."
        />

        <div className="space-y-4">
          {events.map((event, i) => (
            <article
              key={event.title}
              className="group card-luxury flex flex-col gap-4 p-5 transition-colors hover:border-gold/25 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
              <div className="flex gap-5 sm:gap-8">
                <span className="font-display text-3xl leading-none text-gold/30 sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.3em] text-neon uppercase">
                    {event.date}
                  </p>
                  <h3 className="font-display mt-1 text-xl tracking-wide text-white group-hover:text-gold-bright sm:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/45">
                    {event.desc}
                  </p>
                </div>
              </div>
              <CtaButton href="#contact" variant="outline" className="shrink-0 sm:!px-5">
                RSVP
              </CtaButton>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CtaButton href="#contact" variant="gold">
            Plan Your Private Event
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
