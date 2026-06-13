import { RevealSection } from "@/components/RevealSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Tour } from "@/lib/types";
import { TourCard } from "./TourCard";

export function TourCards({
  sharedTitle,
  sharedSubtitle,
  tours,
}: {
  sharedTitle: string;
  sharedSubtitle: string;
  tours: Tour[];
}) {
  const listed = tours.filter((t) => t.active).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <RevealSection id="tours" className="section-anchor section-padding bg-cr-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader eyebrow={sharedSubtitle} title={sharedTitle} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listed.map((tour, i) => (
            <div key={tour.id} style={{ animationDelay: `${i * 100}ms` }}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
