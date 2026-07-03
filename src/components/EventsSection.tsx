import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const events = [
  {
    date: "July 11th | 11AM – 5PM",
    title: "Brewkinis Bikini Car Wash",
    location: "AJ's Gentlemen's Club — 15920 SE Stark St, Portland, OR",
    desc: "Join your favorite Brewkinis baristas for a bikini car wash in the AJ's parking lot. Get your ride cleaned, then come inside and enjoy drinks, entertainment, and dances with the girls.",
    buttonText: "Get More Info",
    buttonHref: "https://www.instagram.com/ajsgentlemensclub/",
  },
  {
    date: "July 3rd",
    title: "Dreya's Birthday Bash",
    desc: "Celebrate Dreya's Birthday Bash at AJ's with beats by DJ DawnDoubleOfficial. Special performances, drinks flowing all night, and a birthday celebration you won't want to miss.",
    buttonText: "Get More Info",
    buttonHref: "https://www.instagram.com/ajsgentlemensclub/",
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
                  {event.location && (
                    <p className="mt-2 text-xs tracking-wide text-white/40 sm:text-sm">
                      {event.location}
                    </p>
                  )}
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/45">
                    {event.desc}
                  </p>
                </div>
              </div>
              <CtaButton
                href={event.buttonHref}
                variant="outline"
                className="shrink-0 sm:!px-5"
                external
              >
                {event.buttonText}
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
