"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyBookBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cr-blue/10 bg-cr-white/95 p-3 shadow-[0_-4px_24px_rgb(0_43_127_/_0.12)] backdrop-blur-md md:hidden">
      <Link
        href="/book"
        className="flex min-h-11 w-full items-center justify-center rounded-full bg-cr-orange text-sm font-bold uppercase tracking-wide text-cr-white transition hover:brightness-110"
      >
        Find My Perfect Tour
      </Link>
    </div>
  );
}
