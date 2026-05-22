import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const INSTAGRAM_URL = "https://instagram.com";

const posts = [
  { id: 1, caption: "Thursday lights" },
  { id: 2, caption: "VIP suite reveal" },
  { id: 3, caption: "Behind the stage" },
  { id: 4, caption: "Gold Rush night" },
  { id: 5, caption: "Portland after dark" },
  { id: 6, caption: "The main room" },
];

function FeedTile({ caption }: { caption: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square overflow-hidden bg-charcoal-light"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-charcoal-mid via-charcoal-light to-charcoal"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,169,98,0.12),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <InstagramIcon className="h-8 w-8 text-white" />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/90 to-transparent p-3">
        <p className="text-[10px] tracking-wider text-white/50 uppercase group-hover:text-gold">
          {caption}
        </p>
      </div>
      <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
}

export function InstagramSection() {
  return (
    <section id="instagram" className="border-t border-white/5 bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Social"
          title="Follow the Night"
          subtitle="@ajsgentlemensclub — exclusive previews, event drops, and behind-the-scenes moments."
        />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {posts.map((post) => (
            <FeedTile key={post.id} caption={post.caption} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href={INSTAGRAM_URL} variant="neon" external>
            Follow on Instagram
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
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
