"use client";

import { useState } from "react";
import { RevealSection } from "@/components/RevealSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SiteContent } from "@/lib/types";

export function FaqSection({
  items,
  showHeader = true,
}: {
  items: SiteContent["faq"];
  showHeader?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <RevealSection className="section-padding bg-cr-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {showHeader && (
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
            subtitle="Quick answers before you send your inquiry."
            align="center"
          />
        )}
        <ul className={showHeader ? "mt-10 space-y-3" : "space-y-3"}>
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <li key={item.question} className="card">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left font-bold text-cr-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cr-blue"
                >
                  {item.question}
                  <span className={`shrink-0 text-cr-blue transition ${open ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {open && (
                  <p className="border-t border-cr-blue/10 px-4 pb-4 pt-3 text-sm leading-relaxed text-cr-blue/80">
                    {item.answer}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </RevealSection>
  );
}
