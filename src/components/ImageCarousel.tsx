"use client";

import Image from "next/image";
import { useState } from "react";

type ImageCarouselProps = {
  images: string[];
  alt: string;
};

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      <div
        className="group relative aspect-[16/10] overflow-hidden rounded-lg bg-card"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goPrev();
          if (e.key === "ArrowRight") goNext();
        }}
        tabIndex={0}
        role="region"
        aria-label={`${alt} image carousel`}
      >
        <Image
          key={index}
          src={images[index]}
          alt={`${alt} — photo ${index + 1} of ${images.length}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-deep-green-dark/55 text-lg text-white opacity-0 transition-opacity hover:bg-deep-green-dark/75 group-hover:opacity-100 focus-visible:opacity-100"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-deep-green-dark/55 text-lg text-white opacity-0 transition-opacity hover:bg-deep-green-dark/75 group-hover:opacity-100 focus-visible:opacity-100"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-[6px]">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  aria-current={i === index}
                  className={`h-[7px] rounded-full transition-all ${
                    i === index ? "w-5 bg-white" : "w-[7px] bg-white/55"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-md ring-2 transition-colors ${
                i === index ? "ring-accent-btn" : "ring-transparent"
              }`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
