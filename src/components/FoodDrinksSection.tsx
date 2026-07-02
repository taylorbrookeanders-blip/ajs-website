import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const cocktails = [
  { name: "Black Velvet", note: "Champagne & stout float", price: "$18" },
  { name: "Rose Gold Martini", note: "Gin, rose, edible gold", price: "$22" },
  { name: "Neon Noir", note: "Mezcal, hibiscus, smoke", price: "$20" },
];

const cuisine = [
  { name: "Wagyu Sliders", note: "Truffle aioli, brioche", price: "$28" },
  { name: "Oysters Rockefeller", note: "Half dozen, classic prep", price: "$32" },
  { name: "Midnight Charcuterie", note: "Artisan board for two", price: "$45" },
];

export function FoodDrinksSection() {
  return (
    <section id="dining" className="relative border-y border-white/5 bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Indulge"
          title="FULL BAR • DRINK SPECIALS • FOOD MENU"
          subtitle="Craft cocktails, premium bottle service, daily drink specials, and full food menu available all day and night."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="card-luxury p-6 sm:p-8">
            <h3 className="font-display text-xl tracking-wide text-gold sm:text-2xl">
              Signature Cocktails
            </h3>
            <ul className="mt-6 divide-y divide-white/5">
              {cocktails.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="mt-0.5 text-sm text-white/40">{item.note}</p>
                  </div>
                  <span className="shrink-0 font-serif text-lg text-neon italic">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-luxury p-6 sm:p-8">
            <h3 className="font-display text-xl tracking-wide text-gold sm:text-2xl">
              Chef&apos;s Selections
            </h3>
            <ul className="mt-6 divide-y divide-white/5">
              {cuisine.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="mt-0.5 text-sm text-white/40">{item.note}</p>
                  </div>
                  <span className="shrink-0 font-serif text-lg text-neon italic">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="max-w-md text-center text-sm text-white/40 sm:text-left">
            Full menu available in-club. Premium bottle service packages
            curated for VIP guests.
          </p>
          <CtaButton href="#vip" variant="neon">
            Order Bottle Service
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
