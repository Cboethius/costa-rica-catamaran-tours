import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { primaryNavLinks } from "@/lib/nav";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cr-blue/10 bg-cr-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="shrink-0 font-[family-name:var(--font-fraunces)] text-base font-bold leading-tight text-cr-blue md:text-lg"
        >
          <span className="hidden sm:inline">{site.name}</span>
          <span className="sm:hidden">CR Catamaran Tours</span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-cr-blue transition hover:bg-cr-blue/5 hover:text-cr-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cr-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="inline-flex min-h-11 items-center rounded-full bg-cr-orange px-4 py-2 text-sm font-bold text-cr-white transition hover:brightness-110 md:px-5"
          >
            <span className="md:hidden">Book</span>
            <span className="hidden md:inline">Find My Perfect Tour</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
