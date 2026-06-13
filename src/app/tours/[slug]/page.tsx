import Image from "next/image";
import { notFound } from "next/navigation";
import { TourDetailContent } from "@/components/TourDetailContent";
import { detailsForTour } from "@/lib/tour-details-seed";
import { getTourBySlug, getTours } from "@/lib/tours-store";

export async function generateStaticParams() {
  const tours = await getTours();
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };
  return {
    title: tour.name,
    description: tour.details?.overview ?? tour.description,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await getTourBySlug(slug);
  if (!tour) notFound();

  const details = tour.details ?? detailsForTour(slug);
  if (!details) notFound();

  const durationLabel = tour.duration || details.schedule.duration.replace(/^Approximate Duration: /, "");

  return (
    <div>
      <section className="relative min-h-[220px] md:min-h-[260px]">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-cr-blue/60" />
        <div className="relative mx-auto flex min-h-[220px] max-w-6xl flex-col justify-end px-4 pb-6 md:min-h-[260px] md:px-6 md:pb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-cr-white/90 md:text-sm">
            {tour.type === "private" ? "Private" : "Tour"}
            {durationLabel ? ` · ${durationLabel}` : ""}
          </p>
          <h1 className="mt-1 font-[family-name:var(--font-fraunces)] text-2xl font-bold text-cr-white md:text-3xl">
            {tour.name}
          </h1>
        </div>
      </section>
      <TourDetailContent tour={tour} details={details} />
    </div>
  );
}
