import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/types";
import { ButtonLink } from "@/components/ui/Button";

export function TourCard({ tour }: { tour: Tour }) {
  const highlights = tour.highlights?.length
    ? tour.highlights.slice(0, 4)
    : [tour.description.split("\n\n")[0]].filter(Boolean);

  return (
    <article className="card group flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-cr-blue/30 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cr-blue/80 via-cr-blue/20 to-transparent" />
        <h3 className="absolute bottom-3 left-3 right-3 font-[family-name:var(--font-fraunces)] text-xl font-bold text-cr-white">
          {tour.name}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <ul className="space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-cr-blue/80">
              <span className="shrink-0 font-bold text-cr-green">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <ButtonLink
            href={`/book?tour=${tour.slug}`}
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm"
          >
            Inquire
          </ButtonLink>
          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full text-sm font-bold text-cr-blue transition hover:text-cr-blue/70"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
