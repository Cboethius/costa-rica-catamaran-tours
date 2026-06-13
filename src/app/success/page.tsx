import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Inquiry Received",
};

export default function SuccessPage() {
  const whatsappDigits = site.whatsapp.replace(/\D/g, "");
  const hasWhatsApp = whatsappDigits && !whatsappDigits.endsWith("0000000000");

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-cr-green bg-cr-white text-2xl font-bold text-cr-green">
        ✓
      </div>
      <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-3xl font-bold text-cr-blue">
        We Received Your Inquiry
      </h1>
      <p className="mt-4 text-lg text-cr-blue/85">
        Thank you! Our team will review availability and get back to you with
        options and pricing as soon as possible.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-full bg-cr-blue px-8 py-3 text-sm font-bold text-cr-white transition hover:brightness-110"
        >
          Back to Home
        </Link>
        {hasWhatsApp && (
          <a
            href={`https://wa.me/${whatsappDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border-2 border-cr-blue px-8 py-3 text-sm font-bold text-cr-blue transition hover:bg-cr-blue hover:text-cr-white"
          >
            Message on WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
