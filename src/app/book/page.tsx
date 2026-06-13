import { Suspense } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { getTours } from "@/lib/tours-store";

export const metadata = {
  title: "Inquire",
  description: "Send a booking inquiry for your Costa Rica catamaran tour.",
};

export default async function BookPage() {
  const tours = await getTours();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cr-blue">
        Find My Perfect Tour
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-fraunces)] text-3xl font-bold text-cr-blue md:text-4xl">
        Send a Booking Inquiry
      </h1>
      <p className="mt-4 text-cr-blue/80">
        Tell us which tour you&apos;re interested in and we&apos;ll find the best
        catamaran available for your dates.
      </p>
      <div className="card mt-10 p-6 md:p-8">
        <Suspense fallback={<p className="text-cr-blue/60">Loading form...</p>}>
          <InquiryForm tours={tours} />
        </Suspense>
      </div>
    </div>
  );
}
