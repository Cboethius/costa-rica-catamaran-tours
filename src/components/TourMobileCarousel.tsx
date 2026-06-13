import type { Tour } from "@/lib/types";
import { TourCard } from "./TourCard";

export function TourMobileCarousel({ tours }: { tours: Tour[] }) {
  return (
    <div>
      <div
        className="tour-carousel-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
        role="region"
        aria-label="Browse tours"
      >
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="w-[82vw] max-w-[340px] shrink-0 snap-start"
          >
            <TourCard tour={tour} compact />
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs font-medium text-cr-blue/55">
        Swipe for more tours →
      </p>
    </div>
  );
}
