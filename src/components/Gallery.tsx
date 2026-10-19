"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryPhoto = { src: string; alt: string };

// How many photos show on the page before the rest sit behind "+N more".
const PREVIEW_COUNT = 5;

export function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const openAt = (index: number) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setActive(index);
  };

  const close = useCallback(() => {
    setActive(null);
    lastFocused.current?.focus();
  }, []);

  if (photos.length === 0) return null;

  const preview = photos.slice(0, PREVIEW_COUNT);
  const extra = photos.length - PREVIEW_COUNT;

  return (
    <>
      {/* Compact preview: one big photo + four small ones */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:h-[34rem] lg:grid-cols-4 lg:grid-rows-2">
        {preview.map((photo, i) => {
          const isFirst = i === 0;
          const isLast = i === PREVIEW_COUNT - 1 && extra > 0;
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => openAt(i)}
              aria-label={
                isLast
                  ? `View all ${photos.length} photos`
                  : `Open photo: ${photo.alt}`
              }
              className={`group relative overflow-hidden rounded-xl bg-brand-surface ring-1 ring-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                isFirst
                  ? "col-span-2 aspect-[16/10] lg:row-span-2 lg:aspect-auto"
                  : "aspect-square lg:aspect-auto"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  isFirst
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, 50vw"
                }
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {isLast && (
                <span className="absolute inset-0 flex flex-col items-center justify-center bg-brand-charcoal/70 text-white transition-colors group-hover:bg-brand-charcoal/60">
                  <span className="text-3xl font-black">+{extra}</span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-widest">
                    View all
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {photos.length > 1 && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => openAt(0)}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-orange px-6 py-3 text-sm font-bold text-brand-orange transition-colors hover:bg-brand-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            View all {photos.length} photos
          </button>
        </div>
      )}

      {active !== null && (
        <Lightbox
          photos={photos}
          index={active}
          onIndex={setActive}
          onClose={close}
        />
      )}
    </>
  );
}

function Lightbox({
  photos,
  index,
  onIndex,
  onClose,
}: {
  photos: GalleryPhoto[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const count = photos.length;
  const photo = photos[index];

  const go = useCallback(
    (delta: number) => onIndex((index + delta + count) % count),
    [index, count, onIndex],
  );

  // Lock page scroll while open and move focus into the dialog.
  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Keyboard: Esc closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        go(-1);
      } else if (e.key === "ArrowRight") {
        go(1);
      } else if (e.key === "Tab") {
        const focusable =
          dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Keep the active thumbnail in view.
  useEffect(() => {
    const el = thumbsRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [index]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-[100] flex flex-col bg-neutral-950 text-white"
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p
          aria-live="polite"
          className="text-sm font-semibold tabular-nums text-white/80"
        >
          {index + 1} / {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="rounded-full p-2 text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-brand-orange"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        className="relative min-h-0 flex-1"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
      >
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          priority
          className="object-contain"
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-brand-orange sm:left-4"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-brand-orange sm:right-4"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      <p className="px-4 pt-3 text-center text-sm text-white/70">{photo.alt}</p>

      <div
        ref={thumbsRef}
        className="flex gap-2 overflow-x-auto px-4 py-4 sm:px-6 [&>*:first-child]:ml-auto [&>*:last-child]:mr-auto"
      >
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => onIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md transition-opacity focus-visible:outline-2 focus-visible:outline-brand-orange ${
              i === index
                ? "opacity-100 ring-2 ring-brand-orange"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <Image
              src={p.src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
