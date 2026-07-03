import { SectionHeader } from "./SectionHeader";

const highlights = [
  "Drink specials available daily",
  "Beer, liquor & cocktail service all night",
  "Food menu available in club",
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

        <div className="card-luxury mx-auto max-w-3xl p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-white/55 sm:text-base">
            Our full menu is being updated and will be available soon.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-white/55 sm:text-base"
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
