export type NavLink = {
  href: string;
  label: string;
};

/** Short labels for desktop header */
export const primaryNavLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#tours", label: "Tours" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export const footerNavLinks: NavLink[] = [
  { href: "/#tours", label: "Tours" },
  { href: "/faq", label: "FAQ" },
  { href: "/book", label: "Book Now" },
];
