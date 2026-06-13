import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/types";
import { ButtonLink } from "@/components/ui/Button";

export function TourCard({ tour, compact = false }: { tour: Tour; compact?: boolean }) {
  const highlights = tour.highlights?.length
    ? tour.highlights.slice(0, compact ? 3 : 4)
    : [tour.description.split("\n\n")[0]].filter(Boolean);

  return (
    <article className="card group flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-cr-blue/30 hover:shadow-lg">
      <div className={`relative overflow-hidden ${compact ? "h-44" : "h-52"}`}>
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes={compact ? "85vw" : "33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cr-blue/80 via-cr-blue/20 to-transparent" />
        <h3
          className={`absolute bottom-3 left-3 right-3 font-[family-name:var(--font-fraunces)] font-bold text-cr-white ${compact ? "text-lg" : "text-xl"}`}
        >
          {tour.name}
        </h3>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-4" : "p-5"}`}>
        <ul className={compact ? "space-y-1.5" : "space-y-2"}>
          {highlights.map((item) => (
            <li
              key={item}
              className={`flex gap-2 text-cr-blue/80 ${compact ? "text-xs" : "text-sm"}`}
            >
              <span className="shrink-0 font-bold text-cr-green">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className={`flex flex-col gap-2 ${compact ? "mt-4" : "mt-5 sm:flex-row"}`}>
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
