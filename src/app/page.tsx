import {
  CtaSection,
  GallerySection,
  WhyBookSection,
} from "@/components/HomeSections";
import { ParallaxHero } from "@/components/ParallaxHero";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TourCards } from "@/components/TourSections";
import { getSiteContent } from "@/lib/site-content-store";
import { getTours } from "@/lib/tours-store";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [content, tours] = await Promise.all([getSiteContent(), getTours()]);

  return (
    <>
      <ParallaxHero content={content.hero} />
      <TourCards
        sharedTitle={content.sharedTours.title}
        sharedSubtitle={content.sharedTours.subtitle}
        tours={tours}
      />
      <TestimonialsSection items={content.testimonials} />
      <WhyBookSection content={content.whyBook} />
      <GallerySection images={content.gallery} />
      <CtaSection content={content.whyBook} contact={content.contact} />
    </>
  );
}
