import Link from "next/link";
import { footerNavLinks } from "@/lib/nav";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-cr-blue/10 bg-cr-blue text-cr-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="font-[family-name:var(--font-fraunces)] text-xl font-bold">
            {site.name}
          </p>
          <p className="mt-2 max-w-sm text-sm text-cr-white/85">
            Shared tours, private charters, sunset cruises &amp; full day adventures
            — departing daily from Flamingo &amp; Tamarindo.
          </p>
        </div>
        <div>
          <p className="font-bold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cr-white/85 transition hover:text-cr-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <p className="mt-2 text-sm text-cr-white/85">{site.locations}</p>
          <p className="mt-2 text-sm">
            <a href={`mailto:${site.email}`} className="text-cr-white/85 hover:text-cr-white">
              {site.email}
            </a>
          </p>
          <p className="mt-1 text-sm">
            WhatsApp:{" "}
            <a
              href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
              className="text-cr-white/85 hover:text-cr-white"
            >
              {site.whatsapp}
            </a>
          </p>
          <p className="mt-2 text-xs text-cr-white/60">{site.responseTime}</p>
        </div>
      </div>
      <div className="border-t border-cr-white/15 px-4 py-3 text-center text-xs text-cr-white/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
