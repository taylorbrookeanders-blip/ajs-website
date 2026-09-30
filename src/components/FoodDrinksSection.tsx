import { SectionHeader } from "./SectionHeader";

const highlights = [
  "Drink specials available daily",
  "Beer, liquor & cocktail service all night",
  "Food menu available in club",
];

const indulgePhotos = [
  { src: "/gallery/inside-venue/galleryfood1.jpg", alt: "Club sandwich and fries at the bar", className: "col-span-2 row-span-2" },
  { src: "/gallery/inside-venue/fruit.jpg", alt: "Fresh fruit presentation", className: "row-span-2" },
  { src: "/gallery/the-experience/gallery40.jpg", alt: "Bartender pouring a drink at AJ's", className: "" },
  { src: "/gallery/inside-venue/bar-bottles.jpg", alt: "Premium bar bottles at AJ's", className: "" },
  { src: "/gallery/the-experience/gallery2.jpg", alt: "Bartender mixing a cocktail at AJ's", className: "" },
];

export function FoodDrinksSection() {
  return (
    <section id="dining" className="relative border-y border-white/5 bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Indulge"
          title="FULL BAR • DRINK SPECIALS • FOOD MENU"
          subtitle="Craft cocktails, ice-cold beer, premium pours, and late-night bites served all night long."
        />

        <div className="mx-auto mb-6 grid max-w-3xl auto-rows-[110px] grid-cols-3 gap-2 sm:mb-8 sm:auto-rows-[170px] sm:gap-4 lg:auto-rows-[200px]">
          {indulgePhotos.map((photo) => (
            <div
              key={photo.src}
              className={`overflow-hidden rounded-lg border border-gold/15 ${photo.className}`}
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
          <p className="text-sm leading-relaxed text-white/80 sm:text-base font-medium">
            Our full menu is being updated and will be available soon.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-white/80 sm:text-base font-medium"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
