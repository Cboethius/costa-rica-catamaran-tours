import { stockImages } from "./images";
import { tourDetailsBySlug } from "./tour-details-seed";
import type { Tour } from "./types";

function withDetails(tour: Omit<Tour, "details">): Tour {
  return {
    ...tour,
    details: tourDetailsBySlug[tour.slug],
  };
}

export const defaultTours: Tour[] = [
  withDetails({
    id: "morning-cruise",
    slug: "morning-cruise",
    name: "Morning Cruise",
    type: "shared",
    duration: "",
    highlights: [
      "Calm morning seas & ocean views",
      "Snorkeling, swimming & paddleboarding",
      "Fresh food & drinks included",
    ],
    description:
      "Start your day with sunshine, calm seas and unforgettable ocean views.\n\nEnjoy a relaxed morning sailing adventure including snorkeling, swimming, paddleboarding, freshly prepared food and drinks.\n\nCouples, families, and solo travelers who want to experience Costa Rica's coastline before spending the afternoon exploring.",
    longDescription:
      "Start your day with sunshine, calm seas and unforgettable ocean views.\n\nEnjoy a relaxed morning sailing adventure including snorkeling, swimming, paddleboarding, freshly prepared food and drinks.\n\nCouples, families, and solo travelers who want to experience Costa Rica's coastline before spending the afternoon exploring.\n\nApproximate duration: 4 hours. Check-in 30–45 minutes before departure. Departure around 8am, return around midday.",
    image: stockImages.sunset,
    active: true,
    sortOrder: 1,
    priceUsd: null,
  }),
  withDetails({
    id: "sunset-cruise",
    slug: "sunset-cruise",
    name: "Afternoon Sunset Cruise",
    type: "shared",
    duration: "",
    highlights: [
      "Our most popular experience",
      "Snorkeling in a secluded bay",
      "Pacific sunset from the deck",
    ],
    description:
      "Our most popular experience.\n\nSpend the afternoon sailing the Pacific Ocean before dropping anchor in a secluded bay for snorkeling and water activities.\n\nAs the day comes to an end, sit back with your favourite drink and watch the sky explode into shades of orange, pink and gold as the sun sets over the Pacific.\n\nIt's a Costa Rica bucket-list experience — couples, families, and solo travelers.",
    longDescription:
      "Our most popular experience.\n\nSpend the afternoon sailing the Pacific Ocean before dropping anchor in a secluded bay for snorkeling and water activities.\n\nAs the day comes to an end, sit back with your favourite drink and watch the sky explode into shades of orange, pink and gold as the sun sets over the Pacific.\n\nIt's a Costa Rica bucket-list experience — couples, families, and solo travelers.\n\nApproximate duration: 4–5 hours. Check-in 30–45 minutes before departure. Departure early afternoon around 2pm, return shortly after sunset.",
    image: stockImages.sunset,
    active: true,
    sortOrder: 2,
    priceUsd: null,
  }),
  withDetails({
    id: "full-day",
    slug: "full-day",
    name: "Full Day Adventure",
    type: "shared",
    duration: "",
    highlights: [
      "Extended sailing along the Gold Coast",
      "Multiple swim & snorkel stops",
      "Full meal & open bar all day",
    ],
    description:
      "The ultimate Gold Coast experience. A full day on the water with extended sailing, multiple swim stops, snorkeling, paddleboarding, a full meal and open bar. Couples, families, and solo travelers who want to soak up every moment of Costa Rica's Pacific paradise.",
    longDescription:
      "The ultimate Gold Coast experience. A full day on the water with extended sailing, multiple swim stops, snorkeling, paddleboarding, a full meal and open bar.\n\nCouples, families, and solo travelers.\n\nApproximate duration: 7–8 hours. Check-in 30–45 minutes before departure. Departure late morning around 11am, return early evening.",
    image: stockImages.beach,
    active: true,
    sortOrder: 3,
    priceUsd: null,
  }),
  withDetails({
    id: "private-charter",
    slug: "private-charter",
    name: "Private Charter",
    type: "private",
    duration: "",
    highlights: [
      "Your boat, your itinerary",
      "Perfect for groups & celebrations",
      "Professional crew handles everything",
    ],
    description:
      "Your boat. Your day. Your adventure.\n\nEnjoy the freedom to create your own experience while our professional crew takes care of everything.\n\nLuxury, privacy and unforgettable memories await — couples, families, and solo travelers.",
    longDescription:
      "Want something truly special? Our private catamaran charters are perfect for families, wedding groups, honeymoons, corporate events, birthday celebrations, bachelor & bachelorette parties, and multi-generational family gatherings.\n\nEnjoy the freedom to create your own experience while our professional crew takes care of everything. Luxury, privacy and unforgettable memories await — couples, families, and solo travelers.",
    image: stockImages.sunset,
    active: true,
    sortOrder: 4,
    priceUsd: null,
  }),
  withDetails({
    id: "scuba-diving",
    slug: "scuba-diving",
    name: "Scuba Diving",
    type: "shared",
    duration: "",
    highlights: [
      "Half-day diving adventures",
      "Explore Guanacaste's underwater world",
      "Options for certified divers & beginners",
    ],
    description:
      "Discover Costa Rica beneath the surface. Half-day scuba diving experiences along the Pacific coast, with options for certified divers and those looking to try diving for the first time.\n\nEach dive trip varies by site, conditions, and operator — we'll help you find the best fit for your dates and experience level. Couples, families, and solo travelers.",
    longDescription:
      "Discover Costa Rica beneath the surface. Half-day scuba diving experiences along the Pacific coast, with options for certified divers and those looking to try diving for the first time.\n\nEach dive trip varies by site, conditions, and operator — we'll help you find the best fit for your dates and experience level.\n\nCouples, families, and solo travelers.\n\nDuration and itinerary depend on the selected dive operator and your group's experience. Contact us with your preferred dates and we'll confirm availability and details.",
    image: stockImages.scuba,
    active: true,
    sortOrder: 5,
    priceUsd: null,
  }),
  withDetails({
    id: "freediving",
    slug: "freediving",
    name: "Freediving",
    type: "shared",
    duration: "",
    highlights: [
      "Half-day breath-hold adventures",
      "Explore Costa Rica's clear Pacific waters",
      "Options for certified freedivers & beginners",
    ],
    description:
      "Experience the ocean on a single breath. Half-day freediving experiences along Costa Rica's Pacific coast, with options for certified freedivers and those new to the sport.\n\nEach session varies by site, conditions, and operator — we'll help you find the best fit for your dates and experience level. Couples, families, and solo travelers.",
    longDescription:
      "Experience the ocean on a single breath. Half-day freediving experiences along Costa Rica's Pacific coast, with options for certified freedivers and those new to the sport.\n\nEach session varies by site, conditions, and operator — we'll help you find the best fit for your dates and experience level.\n\nCouples, families, and solo travelers.\n\nDuration and itinerary depend on the selected operator and your group's experience. Contact us with your preferred dates and we'll confirm availability and details.",
    image: stockImages.freediving,
    active: true,
    sortOrder: 6,
    priceUsd: null,
  }),
];
