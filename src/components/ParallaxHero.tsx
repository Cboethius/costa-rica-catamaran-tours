"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import type { SiteContent } from "@/lib/types";

export function ParallaxHero({ content }: { content: SiteContent["hero"] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.35;
  const fadeOpacity = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[460px] overflow-hidden md:min-h-[520px]"
    >
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.05)` }}
      >
        <Image
          src={content.image}
          alt="White catamaran on turquoise water in Costa Rica"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-cr-blue/88 via-cr-blue/45 to-cr-blue/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-cr-blue/35 via-transparent to-transparent" />

      <div
        className="relative z-20 mx-auto flex min-h-[460px] max-w-6xl flex-col justify-center px-4 py-16 md:min-h-[520px] md:px-6"
        style={{ opacity: fadeOpacity }}
      >
        <h1 className="max-w-2xl font-[family-name:var(--font-fraunces)] text-3xl font-bold leading-tight text-cr-white md:text-5xl">
          {content.title}
        </h1>
        {content.body && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cr-white/95 md:text-lg">
            {content.body}
          </p>
        )}
        <p className="mt-5 max-w-xl text-sm font-semibold text-cr-white/90 md:text-base">
          {content.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/book">{content.cta}</ButtonLink>
          <Link
            href="/#tours"
            className="inline-flex min-h-11 items-center rounded-full border-2 border-cr-white px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-cr-white transition hover:bg-cr-white hover:text-cr-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cr-white"
          >
            View Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
