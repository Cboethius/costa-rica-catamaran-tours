import { RevealSection } from "@/components/RevealSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialsSlideshow } from "@/components/TestimonialsSlideshow";
import type { SiteContent } from "@/lib/types";

export function TestimonialsSection({
  items,
}: {
  items: SiteContent["testimonials"];
}) {
  if (items.length === 0) return null;

  return (
    <RevealSection className="section-padding bg-cr-white" delay={50}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Guest Reviews"
          title="What Travelers Say"
          align="center"
        />
        <TestimonialsSlideshow items={items} />
      </div>
    </RevealSection>
  );
}
