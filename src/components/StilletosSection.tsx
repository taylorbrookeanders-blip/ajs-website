import {
  STILLETOS_ADDRESS,
  STILLETOS_INSTAGRAM_URL,
  STILLETOS_NAME,
  STILLETOS_MAPS_URL,
} from "../constants/site";
import { CtaButton } from "./CtaButton";

const features = [
  { title: "VIP Rooms", desc: "Private, intimate spaces for an elevated night." },
  { title: "Full Bar", desc: "Premium pours, cocktails & ice-cold beer." },
  { title: "Food", desc: "Kitchen serving bites all night long." },
  { title: "Gaming", desc: "Try your luck between sets." },
];

const comingSoon = ["18+ Section", "Poker Tables"];

export function StilletosSection() {
  return (
    <section
      id="stilletos"
      aria-label={`${STILLETOS_NAME} — AJ's sister club`}
      className="relative overflow-hidden border-y border-crimson/30 bg-void py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.22)_0%,transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(90,6,18,0.45)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-semibold tracking-[0.4em] text-crimson uppercase sm:text-xs">
          Our Sister Club
        </p>

        <h2 className="sr-only">{STILLETOS_NAME} — Portland Gentlemen's Club</h2>
        <img
          src="/stilletos/stilletos-pdx-logo.jpg"
          alt={`${STILLETOS_NAME} (Stilettos PDX) logo`}
          className="mx-auto mt-6 w-full max-w-xl rounded-lg"
        />

        <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-crimson to-transparent" />

        <p className="font-serif mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-white/85 italic sm:text-xl">
          Portland&apos;s upscale gentlemen&apos;s club, dressed in deep red, black and
          gold. Plush VIP rooms, a full bar, a kitchen serving late-night bites and gaming, all
          wrapped in an atmosphere made for nights you won&apos;t forget.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-gold/20 bg-gradient-to-b from-crimson-deep/40 to-void p-5 text-center transition-colors hover:border-gold/50"
            >
              <p className="font-display text-base tracking-[0.15em] text-gold-bright uppercase sm:text-lg">
                {f.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm font-medium">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-crimson/40 bg-crimson-deep/20 p-5 text-center sm:p-6">
          <p className="text-[10px] font-semibold tracking-[0.35em] text-crimson uppercase">
            Coming Soon
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {comingSoon.map((item) => (
              <p key={item} className="font-display text-lg tracking-[0.15em] text-white sm:text-xl">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 text-center sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.35em] text-gold uppercase">Hours</p>
            <p className="mt-2 text-white/80">Daily · 11:00 AM – 2:30 AM</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.35em] text-gold uppercase">
              Location
            </p>
            <a
              href={STILLETOS_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-white/80 underline-offset-4 hover:text-gold-bright hover:underline"
            >
              {STILLETOS_ADDRESS}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton href={STILLETOS_INSTAGRAM_URL} variant="gold" external>
            Follow @stilletospdx
          </CtaButton>
          <CtaButton href={STILLETOS_MAPS_URL} variant="outline" external>
            Get Directions
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
