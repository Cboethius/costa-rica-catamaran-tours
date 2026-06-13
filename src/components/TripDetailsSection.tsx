"use client";

import Image from "next/image";
import { useState } from "react";
import { RevealSection } from "@/components/RevealSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SiteContent } from "@/lib/types";

type TabId = "why" | "destinations" | "included" | "day";

const tabs: { id: TabId; label: string }[] = [
  { id: "why", label: "Why Tour" },
  { id: "destinations", label: "Destinations" },
  { id: "included", label: "Included" },
  { id: "day", label: "Your Day" },
];

export function TripDetailsSection({
  whyCatamaran,
  destinations,
  whatsIncluded,
  dayAtSea,
}: {
  whyCatamaran: SiteContent["whyCatamaran"];
  destinations: SiteContent["destinations"];
  whatsIncluded: SiteContent["whatsIncluded"];
  dayAtSea: SiteContent["dayAtSea"];
}) {
  const [active, setActive] = useState<TabId>("why");

  return (
    <RevealSection
      id="trip-details"
      className="section-anchor section-muted section-padding"
      delay={50}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Plan Your Trip"
          title="Everything You Need To Know"
          subtitle="Explore what makes a catamaran day on the Gold Coast unforgettable."
        />

        <div
          className="mt-8 flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Trip details"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cr-blue ${
                active === tab.id
                  ? "bg-cr-blue text-cr-white"
                  : "bg-cr-white text-cr-blue hover:bg-cr-blue/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="card mt-6 p-6 md:p-8" role="tabpanel">
          {active === "why" && (
            <div id="why">
              <SectionHeader eyebrow={whyCatamaran.subtitle} title={whyCatamaran.title} />
              <p className="mt-6 prose-width whitespace-pre-line leading-relaxed text-cr-blue/85">
                {whyCatamaran.body}
              </p>
              <p className="mt-6 font-bold text-cr-blue">Your day may include:</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {whyCatamaran.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-cr-blue/85">
                    <span className="font-bold text-cr-green">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-bold italic text-cr-blue">{whyCatamaran.closing}</p>
            </div>
          )}

          {active === "destinations" && (
            <div id="destinations" className="grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <SectionHeader
                  eyebrow={destinations.subtitle}
                  title={destinations.title}
                />
                <p className="mt-4 leading-relaxed text-cr-blue/85">{destinations.body}</p>
                <p className="mt-6 font-bold text-cr-blue">Sail past:</p>
                <ul className="mt-3 space-y-2">
                  {destinations.sailPast.map((item) => (
                    <li key={item} className="flex gap-2 text-cr-blue/85">
                      <span className="text-cr-blue">•</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-bold text-cr-blue">
                  The Pacific waters of Guanacaste are also home to:
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {destinations.wildlife.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-cr-blue/15 bg-cr-blue-light px-3 py-1 text-sm text-cr-blue"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 italic text-cr-blue/75">{destinations.closing}</p>
              </div>
              <div className="relative min-h-64 overflow-hidden rounded-xl">
                <Image
                  src={destinations.image}
                  alt="Catamaran near Costa Rica Gold Coast"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          )}

          {active === "included" && (
            <div id="included">
              <SectionHeader
                eyebrow={whatsIncluded.subtitle}
                title={whatsIncluded.title}
              />
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl bg-cr-blue-light p-5">
                  <p className="font-bold text-cr-blue">Most tours include:</p>
                  <ul className="mt-4 space-y-2">
                    {whatsIncluded.included.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-cr-blue/85">
                        <span className="font-bold text-cr-green">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-cr-blue/10 p-5">
                  <p className="font-bold text-cr-blue">Just bring:</p>
                  <ul className="mt-4 space-y-2">
                    {whatsIncluded.bring.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-cr-blue/85">
                        <span className="font-bold text-cr-blue">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-bold text-cr-blue">
                    We&apos;ll take care of the rest.
                  </p>
                </div>
              </div>
            </div>
          )}

          {active === "day" && (
            <div id="day-at-sea">
              <SectionHeader title={dayAtSea.title} />
              <div className="mt-8 space-y-4">
                {dayAtSea.steps.map((step, index) => (
                  <details
                    key={step.title}
                    className="group rounded-xl border border-cr-blue/10 bg-cr-white open:border-cr-blue/20"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-4 p-4 font-bold text-cr-blue marker:content-none">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cr-blue text-sm text-cr-white">
                        {index + 1}
                      </span>
                      {step.title}
                      <span className="ml-auto text-cr-blue group-open:rotate-180 transition">
                        ▾
                      </span>
                    </summary>
                    <div className="border-t border-cr-blue/10 px-4 pb-4 pt-2 text-sm leading-relaxed text-cr-blue/85">
                      <p className="whitespace-pre-line">{step.body}</p>
                      {step.bullets && (
                        <ul className="mt-3 space-y-1">
                          {step.bullets.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="text-cr-blue">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                ))}
              </div>
              <h3 className="mt-10 font-[family-name:var(--font-fraunces)] text-xl font-bold text-cr-blue">
                {dayAtSea.durationsTitle}
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {dayAtSea.durations.map((d) => (
                  <div
                    key={d.name}
                    className="rounded-xl border border-cr-blue/10 bg-cr-blue-light p-4"
                  >
                    <h4 className="font-bold text-cr-blue">{d.name}</h4>
                    <p className="mt-1 text-sm font-bold text-cr-blue">{d.duration}</p>
                    <ul className="mt-2 space-y-1 text-xs text-cr-blue/75">
                      <li>Check-in: {d.checkIn}</li>
                      <li>Departure: {d.departure}</li>
                      <li>Return: {d.return}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm italic text-cr-blue/65">{dayAtSea.note}</p>
            </div>
          )}
        </div>
      </div>
    </RevealSection>
  );
}
