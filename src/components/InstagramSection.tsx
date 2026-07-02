import { SectionHeader } from "./SectionHeader";

type SocialLink = {
  type: "instagram" | "facebook" | "yelp";
  label: string;
  href: string;
};

type BrandCard = {
  name: string;
  emoji: string;
  links: SocialLink[];
};

const brands: BrandCard[] = [
  {
    name: "AJ's Gentlemen's Club",
    emoji: "🔥",
    links: [
      {
        type: "instagram",
        label: "@ajsgentlemensclub",
        href: "https://www.instagram.com/ajsgentlemensclub/",
      },
      {
        type: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/share/18VEjEy9hp/?mibextid=wwXIfr",
      },
      {
        type: "yelp",
        label: "Yelp",
        href: "https://www.yelp.com/biz/ajs-gentlemens-club-portland",
      },
    ],
  },
  {
    name: "Brewkinies Espresso",
    emoji: "☕️👙",
    links: [
      {
        type: "instagram",
        label: "@brewkiniespresso",
        href: "https://www.instagram.com/brewkiniespresso/",
      },
    ],
  },
  {
    name: "Stilettos PDX",
    emoji: "👠",
    links: [
      {
        type: "instagram",
        label: "@stilletospdx",
        href: "https://www.instagram.com/stilletospdx/",
      },
    ],
  },
];

function SocialIcon({ type, className }: { type: SocialLink["type"]; className?: string }) {
  if (type === "instagram") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.16 12.594l-4.995 6.89a.363.363 0 01-.297.14h-3.774a.363.363 0 01-.297-.14l-4.995-6.89a.363.363 0 010-.432l4.995-6.89a.363.363 0 01.297-.14h3.774a.363.363 0 01.297.14l4.995 6.89a.363.363 0 010 .432zM12 15.6a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z" />
    </svg>
  );
}

function BrandCard({ brand }: { brand: BrandCard }) {
  return (
    <article className="group card-luxury overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(201,169,98,0.12)]">
      <div className="relative overflow-hidden p-6 sm:p-8">
        <div
          className="absolute inset-0 bg-gradient-to-br from-charcoal-mid via-charcoal-light to-charcoal"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,45,138,0.1),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(201,169,98,0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.35em] text-neon uppercase">
                Follow
              </p>
              <h3 className="font-display mt-2 text-xl tracking-wide text-white transition-colors group-hover:text-gold-bright sm:text-2xl">
                {brand.name}
              </h3>
            </div>
            <span className="text-2xl sm:text-3xl" aria-hidden>
              {brand.emoji}
            </span>
          </div>

          <div className="gold-line mt-4 w-16 opacity-60" />

          <ul className="mt-6 space-y-3">
            {brand.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-sm border border-white/5 bg-void/40 px-4 py-3 transition-all duration-300 hover:border-neon/30 hover:bg-void/60 hover:shadow-[0_0_24px_rgba(255,45,138,0.12)]"
                >
                  <SocialIcon
                    type={link.type}
                    className="h-5 w-5 shrink-0 text-gold transition-colors group-hover:text-gold-bright"
                  />
                  <span className="text-sm tracking-wide text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pointer-events-none absolute top-4 right-4 h-8 w-px bg-gold/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
        <div className="pointer-events-none absolute top-4 right-6 h-px w-8 bg-gold/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
      </div>
    </article>
  );
}

export function InstagramSection() {
  return (
    <section id="instagram" className="border-t border-white/5 bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Social"
          title="Follow the Night"
          subtitle="Stay connected with AJ's, Brewkinies Espresso, and Stilettos PDX."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
