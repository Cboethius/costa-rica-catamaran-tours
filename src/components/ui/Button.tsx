import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-cr-orange text-cr-white hover:brightness-110 focus-visible:ring-cr-orange",
  secondary:
    "border-2 border-cr-blue text-cr-blue hover:bg-cr-blue hover:text-cr-white focus-visible:ring-cr-blue",
  ghost:
    "border-2 border-cr-white text-cr-white hover:bg-cr-white hover:text-cr-blue focus-visible:ring-cr-white",
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props} />
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & { variant?: Variant }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
