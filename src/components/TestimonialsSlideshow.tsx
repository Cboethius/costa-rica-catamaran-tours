"use client";

import { useState } from "react";
import { StarRating } from "@/components/ui/StarRating";
import type { SiteContent } from "@/lib/types";

export function TestimonialsSlideshow({
  items,
}: {
  items: SiteContent["testimonials"];
}) {
  const [paused, setPaused] = useState(false);

  if (items.length === 0) return null;

  const slides = [...items, ...items];

  return (
    <div
      className="gallery-slideshow relative mt-10 overflow-x-hidden overflow-y-visible py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`gallery-track flex w-max items-stretch gap-4 md:gap-5${paused ? " is-paused" : ""}`}
      >
        {slides.map((item, i) => (
          <blockquote
            key={`${item.author}-${item.location}-${i}`}
            className="gallery-card card flex w-72 shrink-0 flex-col p-6 sm:w-80"
          >
            <StarRating rating={5} />
            <p className="mt-3 flex-1 text-sm leading-relaxed text-cr-blue/85">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-bold text-cr-blue">
              {item.author}
              <span className="font-normal text-cr-blue/60"> · {item.location}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
