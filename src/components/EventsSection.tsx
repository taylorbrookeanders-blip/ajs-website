import { STILLETOS_MAPS_URL } from "../constants/site";
import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

type Event = {
  /** Day of the event (YYYY-MM-DD). After this day it moves to "Past Events" automatically. */
  eventDate: string;
  date: string;
  title: string;
  location?: string;
  locationHref?: string;
  desc: string;
  image?: string;
  imageAlt?: string;
  /** Extra flyers shown next to the main one (e.g. an updated flyer for the same night). */
  moreImages?: { src: string; alt: string }[];
  buttonText: string;
  buttonHref: string;
};

const events: Event[] = [
  {
    eventDate: "2026-10-31",
    date: "Saturday, October 31st | 9PM – 2:30AM",
    title: "Halloween Contest — $1,000 Cash Prize",
    location: "Stilletos — 13639 SE Powell Blvd, Portland, OR 97236",
    locationHref: STILLETOS_MAPS_URL,
    desc: "Party all night at Stilletos! 1st prize $1,000 cash, 2nd prize $300 gift certificate, 3rd prize $100 gift certificate. Great food, drink specials, and great music. 21 & over.",
    image: "/events/stilletos-halloween-party.jpg",
    imageAlt: "Flyer for the Halloween Party at Stilletos, October 31st, with a $1,000 first place costume prize",
    moreImages: [
      {
        src: "/events/stilletos-halloween-contest.jpg",
        alt: "Flyer for the Stilletos Halloween Contest, Saturday October 31st, 9PM till 2:30, with $1,000 cash, $300 and $100 gift certificate prizes, 21 and over",
      },
    ],
    buttonText: "Get Directions",
    buttonHref: STILLETOS_MAPS_URL,
  },
  {
    eventDate: "2026-10-02",
    date: "Friday, October 2nd | 8PM",
    title: "Older, Wiser, Hotter — Jasmine's 32nd Birthday",
    location: "Stilletos — 13639 SE Powell Blvd, Portland, OR 97236",
    locationHref: STILLETOS_MAPS_URL,
    desc: "Come celebrate Jasmine's 32nd birthday at our sister club, Stilletos. Great drinks, better company, and the hottest girls. Good company, better drinks, best night.",
    image: "/events/stilletos-jasmine-bday.jpg",
    imageAlt: "Flyer for Jasmine's 32nd birthday at Stilletos, Friday October 2nd at 8PM",
    buttonText: "Get Directions",
    buttonHref: STILLETOS_MAPS_URL,
  },
  {
    eventDate: "2026-06-27",
    date: "Saturday, June 27th | 9PM",
    title: "Alex & Violet's Birthday Party",
    location: "AJ's Gentlemen's Club — 15920 SE Stark St, Portland, OR",
    desc: "Alex and Violet's birthday party at AJ's, plus meet our Brewkinis Espresso girls — hot coffee and naughty entertainment daily in AJ's parking lot.",
    image: "/events/brewkinis-girls-alex-violet-bday.jpg",
    imageAlt: "Flyer: Meet our Brewkinis girls and Alex and Violet's birthday party at AJ's, Saturday June 27th at 9PM",
    buttonText: "Get More Info",
    buttonHref: "https://www.instagram.com/ajsclubpdx/",
  },
  {
    eventDate: "2026-07-11",
    date: "July 11th | 11AM – 5PM",
    title: "Brewkinis Espresso Bikini Car Wash",
    location: "AJ's Gentlemen's Club — 15920 SE Stark St, Portland, OR",
    desc: "Join your favorite Brewkinis Espresso baristas for a bikini car wash in the AJ's parking lot. Get your ride cleaned, then come inside and enjoy drinks, entertainment, and dances with the girls.",
    buttonText: "Get More Info",
    buttonHref: "https://www.instagram.com/ajsclubpdx/",
  },
  {
    eventDate: "2026-07-03",
    date: "July 3rd",
    title: "Dreya's Birthday Bash",
    desc: "Celebrate Dreya's Birthday Bash at AJ's with beats by DJ DawnDoubleOfficial. Special performances, drinks flowing all night, and a birthday celebration you won't want to miss.",
    buttonText: "Get More Info",
    buttonHref: "https://www.instagram.com/ajsclubpdx/",
  },
];

function EventCard({ event, index: i, past }: { event: Event; index: number; past?: boolean }) {
  return (
    <article
      className={`group card-luxury ${past ? "opacity-60" : ""} flex flex-col gap-4 p-5 transition-colors hover:border-gold/25 sm:flex-row sm:items-center sm:justify-between sm:p-6`}
    >
      <div className={`flex gap-5 sm:gap-8 ${event.image ? "flex-col sm:flex-row" : ""}`}>
        {event.image ? (
          <div className="flex shrink-0 gap-3 self-start">
            {[{ src: event.image, alt: event.imageAlt ?? event.title }, ...(event.moreImages ?? [])].map((flyer, n, all) => (
              <a
                key={flyer.src}
                href={flyer.src}
                target="_blank"
                rel="noopener noreferrer"
                className={`block shrink-0 self-start overflow-hidden rounded-md border border-gold/20 transition-colors hover:border-gold/60 ${all.length > 1 ? "w-[calc(50%-0.375rem)] max-w-[200px] sm:w-32" : "w-full max-w-[280px] sm:w-40"}`}
                aria-label={`View full flyer${all.length > 1 ? ` ${n + 1}` : ""}: ${event.title}`}
              >
                <img src={flyer.src} alt={flyer.alt} loading="lazy" decoding="async" className="h-auto w-full" />
              </a>
            ))}
          </div>
        ) : (
          <span className="font-display text-3xl leading-none text-gold/30 sm:text-4xl">
            {String(i + 1).padStart(2, "0")}
          </span>
        )}
        <div>
          <p className="text-[10px] font-semibold tracking-[0.3em] text-neon uppercase">
            {event.date}
          </p>
          <h3 className="font-display mt-1 text-xl tracking-wide text-white group-hover:text-gold-bright sm:text-2xl">
            {event.title}
          </h3>
          {event.location &&
            (event.locationHref ? (
              <a
                href={event.locationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-xs tracking-wide text-gold/70 underline-offset-4 hover:text-gold-bright hover:underline sm:text-sm"
              >
                {event.location}
              </a>
            ) : (
              <p className="mt-2 text-xs tracking-wide text-white/65 sm:text-sm font-medium">
                {event.location}
              </p>
            ))}
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 font-medium">
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
  );
}

function isPast(event: Event) {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return event.eventDate < todayStr;
}

export function EventsSection() {
  const upcoming = events.filter((e) => !isPast(e)).sort((a, b) => a.eventDate.localeCompare(b.eventDate));
  const past = events.filter(isPast).sort((a, b) => b.eventDate.localeCompare(a.eventDate));

  return (
    <section id="events" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Calendar"
          title="Upcoming Events"
          subtitle="Weekly specials, unforgettable nights, and exclusive experiences happening all week long."
        />

        {upcoming.length > 0 ? (
          <div className="space-y-4">
            {upcoming.map((event, i) => (
              <EventCard key={event.title} event={event} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-white/75 font-medium">
            New events coming soon — follow us on Instagram for the latest.
          </p>
        )}

        {past.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <div className="mb-6 flex items-center gap-4">
              <h3 className="font-display text-lg tracking-[0.2em] text-white/80 uppercase sm:text-xl">
                Past Events
              </h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="space-y-4">
              {past.map((event, i) => (
                <EventCard key={event.title} event={event} index={i} past />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
