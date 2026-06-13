import Link from "next/link";
import type { Tour, TourDetails } from "@/lib/types";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-cr-blue/55">{children}</p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-1 font-[family-name:var(--font-fraunces)] text-xl font-bold text-cr-blue md:text-2xl">
      {children}
    </h2>
  );
}

/** Split overview into short paragraphs for easier reading. */
function OverviewParagraphs({ text }: { text: string }) {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((s) => s.trim()) ?? [text];
  const paragraphs: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    paragraphs.push(sentences.slice(i, i + 2).join(" "));
  }

  return (
    <div className="space-y-3">
      {paragraphs.map((para) => (
        <p key={para} className="text-base leading-relaxed text-cr-blue/90">
          {para}
        </p>
      ))}
    </div>
  );
}

function CheckList({ items, variant }: { items: string[]; variant: "included" | "bring" }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-snug text-cr-blue/90">
          <span
            className={`mt-0.5 shrink-0 font-bold ${variant === "included" ? "text-cr-green" : "text-cr-blue"}`}
          >
            {variant === "included" ? "✓" : "•"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DayTimeline({ steps }: { steps: TourDetails["daySteps"] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => {
        const teaser = step.body.split("\n\n")[0];
        const isLast = index === steps.length - 1;

        return (
          <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
            {!isLast && (
              <span
                className="absolute left-[15px] top-8 h-[calc(100%-1.5rem)] w-px bg-cr-blue/15"
                aria-hidden
              />
            )}
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cr-blue text-xs font-bold text-cr-white">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="font-bold text-cr-blue">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-cr-blue/80">{teaser}</p>
              {(step.body.includes("\n\n") || step.bullets?.length) && (
                <details className="group mt-2">
                  <summary className="cursor-pointer text-xs font-bold text-cr-blue/70 marker:content-none hover:text-cr-blue">
                    Read more
                  </summary>
                  <div className="mt-2 text-sm leading-relaxed text-cr-blue/80">
                    {step.body.includes("\n\n") && (
                      <p className="whitespace-pre-line">
                        {step.body.split("\n\n").slice(1).join("\n\n")}
                      </p>
                    )}
                    {step.bullets && (
                      <ul className="mt-2 space-y-1">
                        {step.bullets.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-cr-blue">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function TourDetailContent({
  tour,
  details,
}: {
  tour: Tour;
  details: TourDetails;
}) {
  const { schedule } = details;
  const durationShort = schedule.duration.replace(/^Approximate Duration: /, "");

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      {/* Quick-scan highlights */}
      {tour.highlights.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tour.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-cr-blue/15 bg-cr-blue-light px-3 py-1.5 text-xs font-medium text-cr-blue"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Two-column overview */}
      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
        {/* Left — story, schedule, what to bring */}
        <div className="space-y-8">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <SectionTitle>About This Tour</SectionTitle>
            <div className="mt-4">
              <OverviewParagraphs text={details.overview} />
            </div>
          </div>

          <div className="card p-5 md:p-6">
            <SectionLabel>Timing</SectionLabel>
            <SectionTitle>Duration & Schedule</SectionTitle>
            <p className="mt-3 text-lg font-bold text-cr-blue">{durationShort}</p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-lg bg-cr-blue-light px-3 py-2.5">
                <dt className="text-xs font-bold uppercase tracking-wide text-cr-blue/55">
                  Check-in
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-cr-blue">{schedule.checkIn}</dd>
              </div>
              <div className="rounded-lg bg-cr-blue-light px-3 py-2.5">
                <dt className="text-xs font-bold uppercase tracking-wide text-cr-blue/55">
                  Departure
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-cr-blue">{schedule.departure}</dd>
              </div>
              <div className="rounded-lg bg-cr-blue-light px-3 py-2.5">
                <dt className="text-xs font-bold uppercase tracking-wide text-cr-blue/55">
                  Return
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-cr-blue">{schedule.returnTime}</dd>
              </div>
            </dl>
            {schedule.note && (
              <p className="mt-4 text-xs leading-relaxed text-cr-blue/60">{schedule.note}</p>
            )}
          </div>

          <div className="card p-5 md:p-6">
            <SectionLabel>Packing</SectionLabel>
            <SectionTitle>What To Bring</SectionTitle>
            <div className="mt-4">
              <CheckList items={details.bring} variant="bring" />
            </div>
            <p className="mt-4 text-sm font-bold text-cr-blue">We&apos;ll take care of the rest.</p>
          </div>
        </div>

        {/* Right — your day + included */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <div className="card p-5 md:p-6">
            <SectionLabel>Itinerary</SectionLabel>
            <SectionTitle>Your Day</SectionTitle>
            <div className="mt-5">
              <DayTimeline steps={details.daySteps} />
            </div>
          </div>

          <div className="card border-cr-green/20 bg-cr-blue-light/50 p-5 md:p-6">
            <SectionLabel>Included</SectionLabel>
            <SectionTitle>What&apos;s Included</SectionTitle>
            <div className="mt-4">
              <CheckList items={details.included} variant="included" />
            </div>
          </div>
        </div>
      </div>

      {details.spearfishing && (
        <div className="mt-10 card p-5 md:p-8">
          <SectionLabel>Partner experience</SectionLabel>
          <SectionTitle>Spearfishing with {details.spearfishing.partnerName}</SectionTitle>
          <p className="mt-3 text-sm text-cr-blue/70">{details.spearfishing.location}</p>
          <OverviewParagraphs text={details.spearfishing.intro} />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {details.spearfishing.offerings.map((offering) => (
              <div
                key={offering.title}
                className="rounded-xl border border-cr-blue/10 bg-cr-blue-light/60 p-4"
              >
                <h3 className="font-bold text-cr-blue">{offering.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-cr-blue/55">
                  {offering.tagline}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cr-blue/85">{offering.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-cr-blue/70">{details.spearfishing.note}</p>
          <a
            href={details.spearfishing.partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-cr-blue underline-offset-2 hover:underline"
          >
            Learn more at {details.spearfishing.partnerName} →
          </a>
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-4 border-t border-cr-blue/10 pt-10">
        <Link
          href={`/book?tour=${tour.slug}`}
          className="rounded-full bg-cr-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-cr-white transition hover:brightness-110"
        >
          Inquire About This Tour
        </Link>
        <Link
          href="/#tours"
          className="rounded-full border-2 border-cr-blue px-8 py-3 text-sm font-bold text-cr-blue transition hover:bg-cr-blue hover:text-cr-white"
        >
          View All Tours
        </Link>
      </div>
    </section>
  );
}
