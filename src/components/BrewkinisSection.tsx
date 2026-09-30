import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  BREWKINIS_INSTAGRAM_URL,
  BREWKINIS_NAME,
  MAPS_URL,
} from "../constants/site";
import { CtaButton } from "./CtaButton";

const logoSrc = "/brewkinis/brewkinis-logo.png";

type Photo = { src: string; alt: string; className?: string };

/** Shown right under the heading */
const featuredPhotos: Photo[] = [
  { src: "/brewkinis/girl1.jpg", alt: "Brewkinis Espresso bikini barista" },
  { src: "/brewkinis/girl2.jpg", alt: "Brewkinis Espresso bikini barista at the stand" },
  { src: "/brewkinis/girl3.jpg", alt: "Brewkinis Espresso baristas" },
  { src: "/brewkinis/coffee6.jpg", alt: "Brewkinis Espresso specialty drink" },
];

const coffeePhotos: Photo[] = [
  { src: "/brewkinis/coffee1.jpg", alt: "Cream Pie Me specialty coffee from Brewkinis Espresso", className: "col-span-3" },
  { src: "/brewkinis/coffee2.jpg", alt: "Drinks made today at Brewkinis Espresso", className: "col-span-3" },
  { src: "/brewkinis/coffee3.jpg", alt: "Cinnamon specialty coffee from Brewkinis Espresso", className: "col-span-2" },
  { src: "/brewkinis/coffee4.jpg", alt: "Maple specialty latte from Brewkinis Espresso", className: "col-span-2" },
  { src: "/brewkinis/coffee5.jpg", alt: "Coraline, drink of the season at Brewkinis Espresso", className: "col-span-2" },
];

const highlights = [
  { title: "Specialty Coffee", desc: "Espresso, lattes & signature drinks made to order." },
  { title: "Bikini Baristas", desc: "Your favorite girls serving your morning fix." },
  { title: "Shows", desc: "Ask your barista about a show with your coffee." },
  { title: "Go Inside AJ's", desc: "Your barista can take you inside AJ's for a dance." },
];

function PhotoRow({
  title,
  photos,
  gridClass,
}: {
  title?: string;
  photos: Photo[];
  gridClass: string;
}) {
  if (photos.length === 0) return null;
  return (
    <div className="mt-10">
      {title && (
        <p className="mb-4 text-center text-[10px] font-semibold tracking-[0.35em] text-neon uppercase">
          {title}
        </p>
      )}
      <div className={`grid gap-2 sm:gap-4 ${gridClass}`}>
        {photos.map((photo) => (
          <a
            key={photo.src}
            href={photo.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View full photo: ${photo.alt}`}
            className={`block aspect-square overflow-hidden rounded-lg border border-neon/20 transition-colors hover:border-neon/60 ${photo.className ?? ""}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export function BrewkinisSection() {
  return (
    <section
      id="brewkinis"
      aria-label={`${BREWKINIS_NAME} — bikini coffee stand at AJ's`}
      className="relative overflow-hidden border-y border-neon/20 bg-void py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,45,138,0.16)_0%,transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-semibold tracking-[0.4em] text-neon uppercase sm:text-xs">
          On Site at AJ&apos;s
        </p>

        <h2 className="font-display mt-4 text-center text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
          Brewkinis{" "}
          <span className="inline-flex items-center gap-2 whitespace-nowrap sm:gap-3">
            <span className="text-neon neon-glow-text">Espresso</span>
            <img
              src={logoSrc}
              alt={`${BREWKINIS_NAME} logo`}
              className="inline-block h-8 w-auto rounded-sm sm:h-11 md:h-14"
            />
          </span>
        </h2>

        <PhotoRow photos={featuredPhotos} gridClass="grid-cols-2 sm:grid-cols-4" />

        <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-neon to-transparent" />

        <p className="font-serif mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-white/85 italic sm:text-xl">
          Our on-site bikini coffee stand, right here at AJ&apos;s. Grab a specialty coffee from
          our bikini baristas, catch a show while you wait, and when you&apos;re ready for more,
          your barista can take you inside AJ&apos;s for a dance.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-lg border border-neon/25 bg-gradient-to-b from-neon/10 to-void p-5 text-center transition-colors hover:border-neon/60"
            >
              <p className="font-display text-base tracking-[0.12em] text-neon-soft uppercase sm:text-lg">
                {h.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm font-medium">{h.desc}</p>
            </div>
          ))}
        </div>

        <PhotoRow title="Specialty Coffees" photos={coffeePhotos} gridClass="grid-cols-6" />
        <p className="mt-3 text-center text-[11px] tracking-[0.2em] text-white/55 uppercase">
          Tap any photo to see it full size
        </p>

        <div className="mt-12 grid gap-6 text-center sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.35em] text-neon uppercase">Hours</p>
            <p className="mt-2 text-white/80">5:30 AM – 6:30 PM</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.35em] text-neon uppercase">
              Location
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-white/80 underline-offset-4 hover:text-neon-soft hover:underline"
            >
              In the AJ&apos;s lot · {ADDRESS_LINE_1} {ADDRESS_LINE_2}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton href={BREWKINIS_INSTAGRAM_URL} variant="neon" external>
            Follow on Instagram
          </CtaButton>
          <CtaButton href={MAPS_URL} variant="outline" external>
            Get Directions
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
