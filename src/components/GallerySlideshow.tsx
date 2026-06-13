"use client";

import Image from "next/image";
import { useState } from "react";

export function GallerySlideshow({ images }: { images: string[] }) {
  const [paused, setPaused] = useState(false);

  if (images.length === 0) return null;

  const slides = [...images, ...images];

  return (
    <div
      className="gallery-slideshow relative mt-10 overflow-x-hidden overflow-y-visible py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`gallery-track flex w-max gap-4 md:gap-5${paused ? " is-paused" : ""}`}
        aria-hidden={false}
      >
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="gallery-card group relative aspect-[4/3] w-64 shrink-0 overflow-hidden rounded-xl border border-cr-blue/10 sm:w-72 md:w-80"
          >
            <Image
              src={src}
              alt={`Catamaran tour gallery image ${(i % images.length) + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="320px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
