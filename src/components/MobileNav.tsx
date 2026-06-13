"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { primaryNavLinks } from "@/lib/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const panel = mounted
    ? createPortal(
        <>
          {open && (
            <div
              className="fixed inset-0 z-[100] bg-cr-blue/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden
            />
          )}

          <nav
            id="mobile-nav-panel"
            className={`fixed right-0 top-0 z-[110] flex h-full w-[min(100%,20rem)] flex-col bg-cr-white shadow-2xl transition-transform duration-300 lg:hidden ${
              open ? "translate-x-0" : "pointer-events-none translate-x-full"
            }`}
            aria-hidden={!open}
          >
            <div className="flex items-center justify-end border-b border-cr-blue/10 px-4 py-4">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-cr-blue hover:bg-cr-blue/5"
              >
                ✕
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto px-4 py-4">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-cr-blue transition hover:bg-cr-blue/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[120] flex h-11 w-11 items-center justify-center rounded-lg border-2 border-cr-blue/15 text-cr-blue transition hover:border-cr-blue lg:hidden"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {panel}
    </>
  );
}
