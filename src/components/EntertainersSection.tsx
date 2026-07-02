import { useEffect, useRef } from "react";
import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const insideVenueImages = [
  { src: "/gallery/inside-venue/bar-bottles.jpg", alt: "Premium bar bottles at AJ's" },
  { src: "/gallery/inside-venue/fruit.jpg", alt: "Fresh fruit presentation" },
  { src: "/gallery/inside-venue/inside-1.jpg", alt: "Interior of AJ's Gentlemen's Club" },
  { src: "/gallery/inside-venue/inside-2.jpg", alt: "Luxury lounge interior" },
  { src: "/gallery/inside-venue/inside-3.jpg", alt: "Club atmosphere and lighting" },
  { src: "/gallery/inside-venue/inside-4.jpg", alt: "Main room ambiance" },
  { src: "/gallery/inside-venue/machines.jpg", alt: "Gaming machines" },
  { src: "/gallery/inside-venue/machines-2.jpg", alt: "Gaming floor" },
  { src: "/gallery/inside-venue/menu.jpg", alt: "Food and drinks menu" },
  { src: "/gallery/inside-venue/taps.jpg", alt: "Draft beer taps" },
  { src: "/gallery/inside-venue/vip-2.jpg", alt: "VIP lounge seating" },
  { src: "/gallery/inside-venue/vip-4.jpg", alt: "VIP booth experience" },
  { src: "/gallery/inside-venue/vip-5.jpg", alt: "Exclusive VIP area" },
  { src: "/gallery/inside-venue/vip-6.jpg", alt: "Private VIP suite" },
  { src: "/gallery/inside-venue/vip-7.jpg", alt: "VIP room details" },
  { src: "/gallery/inside-venue/vip-8.jpg", alt: "Premium VIP atmosphere" },
];

const experienceImages = [
  { src: "/gallery/the-experience/dancer-2.jpg", alt: "Feature performer on stage" },
  { src: "/gallery/the-experience/dancer-4.jpg", alt: "Stage performance" },
  { src: "/gallery/the-experience/dancer-5.jpg", alt: "Entertainment at AJ's" },
  { src: "/gallery/the-experience/dancer-7.jpg", alt: "Live performance" },
  { src: "/gallery/the-experience/dancer-8.jpg", alt: "Stage show" },
  { src: "/gallery/the-experience/dancer-9.jpg", alt: "Nightlife entertainment" },
  { src: "/gallery/the-experience/dancer-10.jpg", alt: "Performer spotlight" },
  { src: "/gallery/the-experience/dancer-11.jpg", alt: "Main stage energy" },
  { src: "/gallery/the-experience/dancer-12.jpg", alt: "Club performance" },
  { src: "/gallery/the-experience/dancer-13.jpg", alt: "Evening entertainment" },
  { src: "/gallery/the-experience/flash.jpg", alt: "Flash photography moment" },
  { src: "/gallery/the-experience/menu-girl.jpg", alt: "Menu presentation" },
  { src: "/gallery/the-experience/machines-girl.jpg", alt: "Gaming floor experience" },
];

const exteriorImages = [
  { src: "/gallery/exterior/outside-building.jpg", alt: "AJ's Gentlemen's Club building exterior" },
  { src: "/gallery/exterior/outside-sign.jpeg", alt: "AJ's illuminated sign" },
  { src: "/gallery/exterior/patio.jpg", alt: "Outdoor patio area" },
];

const energyVideos = [
  { src: "/gallery/videos/girl-stage.mp4", label: "Main stage" },
  { src: "/gallery/videos/girl-stage-2.mp4", label: "Stage performance" },
  { src: "/gallery/videos/girl-stage-3.mp4", label: "Live entertainment" },
  { src: "/gallery/videos/club-dancing.mp4", label: "Club energy" },
];

function SubsectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <h3 className="font-display text-xl tracking-[0.2em] text-white uppercase sm:text-2xl">
        {title}
      </h3>
      <div className="gold-line mt-3 w-20" />
    </div>
  );
}

function AutoplayVideo({
  src,
  className,
  poster,
}: {
  src: string;
  className?: string;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={className}
    />
  );
}

function GalleryImage({
  src,
  alt,
  aspect = "square",
}: {
  src: string;
  alt: string;
  aspect?: "square" | "video" | "wide";
}) {
  const aspectClass =
    aspect === "video"
      ? "aspect-[3/4]"
      : aspect === "wide"
        ? "aspect-[16/10]"
        : "aspect-square";

  return (
    <article
      className={`group relative overflow-hidden rounded-lg border border-white/5 bg-charcoal-light transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_32px_rgba(201,169,98,0.2)] ${aspectClass}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,45,138,0.1),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="pointer-events-none absolute top-3 right-3 h-6 w-px bg-gold/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
      <div className="pointer-events-none absolute top-3 right-5 h-px w-6 bg-gold/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
    </article>
  );
}

function EnergyVideoCard({ src, label }: { src: string; label: string }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-white/5 transition-all duration-500 hover:border-neon/30 hover:shadow-[0_0_48px_rgba(255,45,138,0.25)]">
      <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
        <AutoplayVideo
          src={src}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-void/10 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,45,138,0.15),transparent_60%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" aria-hidden />
          <span className="text-[10px] font-semibold tracking-[0.25em] text-white/70 uppercase transition-colors group-hover:text-neon-soft">
            {label}
          </span>
        </div>
      </div>
    </article>
  );
}

export function GallerySection() {
  return (
    <section id="entertainers" className="relative py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,138,0.04)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="The Club"
          title="Experience AJ's"
          subtitle="Step inside Portland's most unforgettable nightlife destination."
        />

        {/* Feel the Energy */}
        <div className="mb-20 sm:mb-28">
          <SubsectionTitle title="Feel the Energy" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {energyVideos.map((video) => (
              <EnergyVideoCard key={video.src} src={video.src} label={video.label} />
            ))}
          </div>
        </div>

        {/* The Experience */}
        <div className="mb-20 sm:mb-28">
          <SubsectionTitle title="The Experience" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            <article className="group relative aspect-square overflow-hidden rounded-lg border border-white/5 bg-charcoal-light transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_40px_rgba(201,169,98,0.22)]">
              <AutoplayVideo
                src="/gallery/the-experience/vip.mp4"
                poster="/gallery/the-experience/vip.jpg"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,45,138,0.1),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-neon" aria-hidden />
                <span className="font-display text-xs tracking-[0.3em] text-gold-bright uppercase sm:text-sm">
                  VIP Experience
                </span>
              </div>
              <div className="pointer-events-none absolute top-3 right-3 h-6 w-px bg-gold/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              <div className="pointer-events-none absolute top-3 right-5 h-px w-6 bg-gold/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
            </article>

            {experienceImages.map((image) => (
              <GalleryImage key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>

        {/* Inside AJ's */}
        <div className="mb-20 sm:mb-28">
          <SubsectionTitle title="Inside AJ's" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {insideVenueImages.map((image) => (
              <GalleryImage key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>

        {/* Welcome to AJ's */}
        <div className="mb-16 sm:mb-20">
          <SubsectionTitle title="Welcome to AJ's" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
            {exteriorImages.map((image, index) => (
              <GalleryImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                aspect={index === 0 ? "wide" : "square"}
              />
            ))}
          </div>
          <p className="font-serif mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-white/50 italic sm:text-xl">
            Portland&apos;s destination for elevated nightlife and unforgettable evenings.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton href="#vip" variant="gold">
            Reserve VIP
          </CtaButton>
          <CtaButton href="#events" variant="ghost">
            View Events →
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

export { GallerySection as EntertainersSection };
