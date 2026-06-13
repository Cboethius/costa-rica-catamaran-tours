import Image from "next/image";
import Link from "next/link";
import { GallerySlideshow } from "@/components/GallerySlideshow";
import { RevealSection } from "@/components/RevealSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import type { SiteContent } from "@/lib/types";

export function PrivateChartersSection({
  content,
}: {
  content: SiteContent["privateCharters"];
}) {
  return (
    <RevealSection
      id="private-charters"
      className="section-anchor section-padding section-muted"
      delay={75}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="relative min-h-72 overflow-hidden rounded-2xl shadow-[var(--shadow-card)] md:min-h-80">
          <Image
            src={content.image}
            alt="Private catamaran charter"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div>
          <SectionHeader eyebrow={content.subtitle} title={content.title} />
          <p className="mt-6 text-lg font-medium text-cr-blue">{content.intro}</p>
          <p className="mt-4 font-bold text-cr-blue">{content.leadIn}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {content.occasions.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-cr-blue/85">
                <span className="font-bold text-cr-blue">•</span> {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-cr-blue/85">{content.body}</p>
          <p className="mt-4 font-bold text-cr-blue">{content.closing}</p>
          <ButtonLink href="/book?tour=private-charter" className="mt-8">
            Inquire About Private Charter
          </ButtonLink>
        </div>
      </div>
    </RevealSection>
  );
}

export function WhyBookSection({ content }: { content: SiteContent["whyBook"] }) {
  return (
    <RevealSection
      id="why-us"
      className="section-anchor bg-cr-blue"
      delay={50}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={content.image}
              alt="Catamaran sailing along Costa Rica's Gold Coast"
              fill
              className="object-cover object-[25%_top]"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(90deg,#002b7f_0%,#002b7f_10%,rgb(0_43_127/0.92)_22%,rgb(0_43_127/0.55)_42%,rgb(0_43_127/0.12)_52%,transparent_58%)]"
            />
          </div>
          <div className="relative z-10 max-w-xl px-5 py-8 text-cr-white md:px-8 md:py-10">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cr-white/90 md:text-xs">
              {content.subtitle}
            </p>
            <h2 className="mt-1.5 font-[family-name:var(--font-fraunces)] text-xl font-bold leading-tight md:text-2xl">
              {content.title}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-cr-white/95 md:text-sm">
              {content.intro.replace(" We:", ".")}
            </p>
            <ul className="mt-4 space-y-1.5">
              {content.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-2 px-2.5 py-2 text-xs text-cr-white/95"
                >
                  <span className="shrink-0 font-bold text-cr-green">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-cr-white/95 md:text-sm">
              {content.closing}
            </p>
            <p className="mt-1 text-xs font-bold text-white md:text-sm">
              {content.mission}
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

export function GallerySection({ images }: { images: string[] }) {
  return (
    <RevealSection className="section-padding bg-cr-white" delay={75}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="Life On The Water"
          align="center"
        />
        <GallerySlideshow images={images} />
      </div>
    </RevealSection>
  );
}

export function CtaSection({
  content,
  contact,
}: {
  content: SiteContent["whyBook"];
  contact: SiteContent["contact"];
}) {
  return (
    <RevealSection
      id="contact"
      className="section-anchor section-padding bg-cr-blue pb-24 text-cr-white md:pb-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold md:text-4xl">
          {content.ctaTitle}
        </h2>
        <p className="mt-4 text-lg text-cr-white/95">{content.ctaBody}</p>
        <p className="mt-8 text-xl font-bold">{contact.headline}</p>
        <ul className="mt-4 space-y-2 text-cr-white/90">
          {contact.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <Link
          href="/book"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-cr-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-cr-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cr-white"
        >
          {contact.ctaLabel}
        </Link>
      </div>
    </RevealSection>
  );
}
