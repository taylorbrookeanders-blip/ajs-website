import { useEffect, useRef, useState } from "react";
import { CtaButton } from "./CtaButton";
import { SectionHeader } from "./SectionHeader";

const insideVenueImages = [
  { src: "/gallery/inside-venue/galleryvenue6.jpg", alt: "Main bar with sports on big screens" },
  { src: "/gallery/inside-venue/galleryvenue2.jpg", alt: "Private VIP room with gold pillows" },
  { src: "/gallery/inside-venue/galleryvenue3.jpg", alt: "Cozy VIP lounge under string lights" },
  { src: "/gallery/inside-venue/galleryvenue5.jpg", alt: "Private stage room with string lights" },
  { src: "/gallery/inside-venue/galleryvenue4.jpg", alt: "Stage rail and gaming machines" },
  { src: "/gallery/inside-venue/galleryvenue1.jpg", alt: "Private VIP booth" },
  { src: "/gallery/inside-venue/galleryfood1.jpg", alt: "Club sandwich and fries at the bar" },
  { src: "/gallery/inside-venue/bar-bottles.jpg", alt: "Premium bar bottles at AJ's" },
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
  { src: "/gallery/the-experience/gallery42.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery65.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery56.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery81.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery3.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery1.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery62.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery63.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery49.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery38.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery17.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery32.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/dancer-5.jpg", alt: "Entertainment at AJ's" },
  { src: "/gallery/the-experience/gallery25.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery73.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery59.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery69.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery33.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery10.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery79.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery43.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/dancer-7.jpg", alt: "Live performance" },
  { src: "/gallery/the-experience/gallery71.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery47.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery75.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery31.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery5.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery77.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery76.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery45.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/dancer-10.jpg", alt: "Performer spotlight" },
  { src: "/gallery/the-experience/gallery66.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery41.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery52.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery67.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery36.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery14.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery68.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/dancer-11.jpg", alt: "Main stage energy" },
  { src: "/gallery/the-experience/gallery60.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery70.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery34.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery30.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery27.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/dancer-12.jpg", alt: "Club performance" },
  { src: "/gallery/the-experience/gallery82.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery35.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery80.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery8.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/dancer-13.jpg", alt: "Evening entertainment" },
  { src: "/gallery/the-experience/gallery51.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery39.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/dancer-4.jpg", alt: "Stage performance" },
  { src: "/gallery/the-experience/gallery21.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/flash.jpg", alt: "Flash photography moment" },
  { src: "/gallery/the-experience/gallery57.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery37.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery74.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery6.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/menu-girl.jpg", alt: "Menu presentation" },
  { src: "/gallery/the-experience/gallery46.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery72.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery78.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery18.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/machines-girl.jpg", alt: "Gaming floor experience" },
  { src: "/gallery/the-experience/gallery54.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery64.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery4.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery61.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery9.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery84.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery22.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery48.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery11.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery50.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery16.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery55.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery24.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery58.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery7.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery83.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery28.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery85.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
  { src: "/gallery/the-experience/gallery29.jpg", alt: "Entertainer at AJ's Gentlemen's Club" },
];

const exteriorImages = [
  { src: "/gallery/exterior/outside-building.jpg", alt: "AJ's Gentlemen's Club building exterior" },
  { src: "/gallery/exterior/outside-sign.jpeg", alt: "AJ's illuminated sign" },
  { src: "/gallery/exterior/patio.jpg", alt: "Outdoor patio area" },
];

const energyVideos = [
  { src: "/gallery/videos/girl-stage-2.mp4", label: "Stage performance" },
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
        <div className="pointer-events-none absolute right-3 bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" aria-hidden />
          <span className="text-[9px] leading-snug font-semibold tracking-[0.12em] sm:text-[10px] sm:tracking-[0.25em] text-white/85 uppercase transition-colors group-hover:text-neon-soft">
            {label}
          </span>
        </div>
      </div>
    </article>
  );
}

type Photo = { src: string; alt: string };

const PAGE_SIZE = 9;

const photoTabs: { id: string; label: string; photos: Photo[] }[] = [
  { id: "experience", label: "The Experience", photos: experienceImages },
  { id: "inside", label: "Inside AJ's", photos: insideVenueImages },
  { id: "exterior", label: "Welcome to AJ's", photos: exteriorImages },
];

function Lightbox({
  photos,
  index,
  onClose,
  onIndex,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const prev = () => onIndex((index - 1 + photos.length) % photos.length);
  const next = () => onIndex((index + 1) % photos.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-void/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      onClick={onClose}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="max-h-[85vh] max-w-full rounded-lg border border-gold/20 object-contain shadow-[0_0_60px_rgba(201,169,98,0.15)]"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        aria-label="Close"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center border border-white/15 text-2xl text-gold hover:border-gold/50"
        onClick={onClose}
      >
        ×
      </button>
      <button
        type="button"
        aria-label="Previous photo"
        className="absolute left-2 flex h-11 w-11 items-center justify-center border border-white/15 bg-void/60 text-2xl text-gold hover:border-gold/50 sm:left-6"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next photo"
        className="absolute right-2 flex h-11 w-11 items-center justify-center border border-white/15 bg-void/60 text-2xl text-gold hover:border-gold/50 sm:right-6"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        ›
      </button>
      <p className="absolute bottom-4 text-[11px] tracking-[0.25em] text-white/75 uppercase">
        {index + 1} / {photos.length}
      </p>
    </div>
  );
}

export function GallerySection() {
  const [tabId, setTabId] = useState(photoTabs[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const tab = photoTabs.find((t) => t.id === tabId) ?? photoTabs[0];

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
        <div className="mb-16 sm:mb-20">
          <SubsectionTitle title="Feel the Energy" />
          <div className="-mx-4 flex scroll-px-4 snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 [&>*]:w-[65%] [&>*]:shrink-0 [&>*]:snap-start sm:[&>*]:w-auto">
            <article className="group relative overflow-hidden rounded-lg border border-white/5 transition-all duration-500 hover:border-gold/40">
              <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
                <AutoplayVideo
                  src="/gallery/the-experience/vip.mp4"
                  poster="/gallery/the-experience/vip.jpg"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-void/10 to-transparent"
                  aria-hidden
                />
                <div className="pointer-events-none absolute right-3 bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" aria-hidden />
                  <span className="text-[9px] leading-snug font-semibold tracking-[0.12em] sm:text-[10px] sm:tracking-[0.25em] text-gold-bright uppercase">
                    VIP Experience
                  </span>
                </div>
              </div>
            </article>
            {energyVideos.map((video) => (
              <EnergyVideoCard key={video.src} src={video.src} label={video.label} />
            ))}
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mb-16 sm:mb-20">
          <SubsectionTitle title="Photo Gallery" />
          <div className="mx-auto mb-6 flex max-w-3xl flex-wrap gap-2" role="tablist">
            {photoTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={t.id === tabId}
                onClick={() => {
                  setTabId(t.id);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={`border px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
                  t.id === tabId
                    ? "border-gold bg-gold/10 text-gold-bright"
                    : "border-white/10 text-white/75 hover:border-gold/40 hover:text-white"
                }`}
              >
                {t.label}
                <span className="ml-2 text-white/55">{t.photos.length}</span>
              </button>
            ))}
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-2 sm:gap-3">
            {tab.photos.slice(0, visibleCount).map((image, i) => (
              <button
                key={image.src}
                type="button"
                className="block text-left"
                aria-label={`View photo: ${image.alt}`}
                onClick={() => setOpenIndex(i)}
              >
                <span className="relative block">
                  <GalleryImage src={image.src} alt={image.alt} />
                </span>
              </button>
            ))}
          </div>
          {visibleCount < tab.photos.length && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="border border-gold/40 px-6 py-3 text-[11px] font-semibold tracking-[0.2em] text-gold-bright uppercase transition-colors hover:bg-gold/10"
              >
                Show more ({tab.photos.length - visibleCount})
              </button>
            </div>
          )}
          <p className="mt-4 text-center text-[11px] tracking-[0.2em] text-white/55 uppercase">
            Tap any photo to enlarge
          </p>
        </div>

        {openIndex !== null && (
          <Lightbox
            photos={tab.photos}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onIndex={setOpenIndex}
          />
        )}

        <p className="font-serif mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-white/75 italic sm:text-xl">
          Portland&apos;s destination for elevated nightlife and unforgettable evenings.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaButton href="tel:9714202421" variant="gold">
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
