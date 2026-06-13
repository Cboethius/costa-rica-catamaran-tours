/** Local images bundled in public/images. */
export const stockImages = {
  /** White catamaran centered on turquoise water — homepage hero */
  hero: "/images/catamaran-turquoise.jpg",
  /** Catamaran at sunset — tour cards & gallery */
  sunset: "/images/catamaran-hero.jpg",
  /** Aerial catamaran near beach — full day / destinations */
  beach: "/images/catamaran-beach.jpg",
  /** Scuba diving — scuba tour card */
  scuba: "/images/scuba-diving.jpg",
  /** Freediving — freediving tour card */
  freediving: "/images/freediving.jpg",
} as const;

/** Gallery uses all available assets; add more paths here when new photos are supplied. */
export const galleryImages = [
  stockImages.hero,
  stockImages.sunset,
  stockImages.beach,
];
