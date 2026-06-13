import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import { getSiteContent } from "@/lib/site-content-store";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about catamaran tours, private charters, scuba diving, freediving, and spearfishing in Costa Rica.",
};

export default async function FaqPage() {
  const content = await getSiteContent();

  return (
    <div>
      <section className="border-b border-cr-blue/10 bg-cr-blue-light py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cr-blue/70">
            Help &amp; Info
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-bold text-cr-blue md:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-cr-blue/80">
            Everything you need to know before booking your day on the water.
          </p>
        </div>
      </section>
      <FaqSection items={content.faq} showHeader={false} />
      <section className="section-padding bg-cr-white pb-24 text-center md:pb-20">
        <p className="text-cr-blue/80">Still have questions?</p>
        <Link
          href="/book"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-cr-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-cr-white transition hover:brightness-110"
        >
          Send an Inquiry
        </Link>
      </section>
    </div>
  );
}
