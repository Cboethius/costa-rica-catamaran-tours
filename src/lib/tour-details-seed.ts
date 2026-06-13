import { defaultSiteContent } from "./seed-content";
import type { TourDetails } from "./types";

const { whatsIncluded, dayAtSea } = defaultSiteContent;

const catamaranIncluded = whatsIncluded.included;
const catamaranBring = whatsIncluded.bring;
const scheduleNote = dayAtSea.note;

const checkIn = "30–45 minutes before departure";

/** Shared catamaran day flow (steps 1–4 from Plan Your Trip). */
const catamaranDayStart = dayAtSea.steps.slice(0, 4);

export const tourDetailsBySlug: Record<string, TourDetails> = {
  "morning-cruise": {
    overview:
      "Start your day with sunshine, calm seas and unforgettable ocean views. A relaxed morning sailing adventure along Guanacaste's Gold Coast — couples, families, and solo travelers who want to experience Costa Rica's coastline before spending the afternoon exploring.",
    schedule: {
      duration: "Approximate Duration: 4 Hours",
      checkIn,
      departure: "Morning | Est 8am",
      returnTime: "Around Midday",
      note: scheduleNote,
    },
    daySteps: [
      ...catamaranDayStart,
      {
        title: "Return Sailing",
        body: "After a relaxing morning on the water, we'll raise anchor and begin our return journey along the Guanacaste coastline.\n\nThis is the perfect time to sit back with your favourite drink, listen to music, take photographs and enjoy the incredible scenery in the calm morning light before returning to the marina around midday.",
      },
    ],
    included: catamaranIncluded,
    bring: catamaranBring,
  },
  "sunset-cruise": {
    overview:
      "Our most popular experience. Spend the afternoon sailing the Pacific Ocean before dropping anchor in a secluded bay for snorkeling and water activities — then watch the sky explode into shades of orange, pink and gold as the sun sets over the Pacific. A Costa Rica bucket-list experience for couples, families, and solo travelers.",
    schedule: {
      duration: "Approximate Duration: 4–5 Hours",
      checkIn,
      departure: "Early Afternoon | Est 2pm",
      returnTime: "Shortly After Sunset",
      note: scheduleNote,
    },
    daySteps: dayAtSea.steps,
    included: catamaranIncluded,
    bring: catamaranBring,
  },
  "full-day": {
    overview:
      "The ultimate Gold Coast experience. A full day on the water with extended sailing, multiple swim and snorkel stops, paddleboarding, a full meal and open bar — couples, families, and solo travelers who want to soak up every moment of Costa Rica's Pacific paradise.",
    schedule: {
      duration: "Approximate Duration: 7–8 Hours",
      checkIn,
      departure: "Late Morning | Est 11am",
      returnTime: "Early Evening",
      note: scheduleNote,
    },
    daySteps: [
      dayAtSea.steps[0],
      {
        ...dayAtSea.steps[1],
        body:
          "As we leave the marina behind, you'll experience some of the most spectacular coastal scenery in Costa Rica.\n\nRelax on deck as we sail past secluded beaches, dramatic cliffs, tropical forests and hidden coves — with extended time on the water to visit multiple locations along the Gold Coast.\n\nKeep your eyes on the water—dolphins, sea turtles, devil rays and even whales (seasonal) are regularly spotted along the coastline.",
      },
      {
        ...dayAtSea.steps[2],
        body: "Throughout the day we'll visit beautiful protected bays selected for the best conditions, with multiple opportunities to:",
      },
      {
        ...dayAtSea.steps[3],
        body: "Our crew prepares a full day of delicious meals and refreshments throughout your adventure, including:",
      },
      {
        title: "Return Sailing",
        body: "After a full day on the water, we'll begin our return journey along the Guanacaste coastline.\n\nSit back with your favourite drink, enjoy music and photographs, and soak in the final hours of Pacific sunshine before returning to the marina in the early evening.",
      },
    ],
    included: catamaranIncluded,
    bring: catamaranBring,
  },
  "private-charter": {
    overview:
      "Your boat. Your day. Your adventure. Enjoy complete privacy and a fully customized itinerary while our professional crew takes care of everything — perfect for families, wedding groups, honeymoons, corporate events, celebrations, and multi-generational gatherings.",
    schedule: {
      duration: "Flexible — Typically 4–8 Hours",
      checkIn,
      departure: "Customized to your group",
      returnTime: "Customized to your itinerary",
      note: "Private charters are tailored to your occasion, group size, and preferences. Your confirmed itinerary and timing will be provided at booking.",
    },
    daySteps: [
      {
        title: "Check-In & Welcome",
        body: "Your private adventure begins at the marina, where our crew welcomes your group aboard your exclusive catamaran.\n\nAfter a safety briefing, you'll discuss the day's plan with the captain — whether that means extra snorkeling time, a sunset toast, beach stops, or a leisurely cruise tailored entirely to you.",
      },
      {
        title: "Your Custom Gold Coast Experience",
        body: "Sail past hidden beaches, tropical islands, volcanic coastline and secluded bays accessible only by boat.\n\nYour itinerary may include snorkeling, swimming, paddleboarding, wildlife watching, beach time, and gourmet dining — all at your pace.",
      },
      {
        title: "Celebration & Relaxation",
        body: "Whether you're marking a special occasion or simply enjoying time with loved ones, the crew handles every detail — from meal service and open bar to music, photography moments and surprise touches you request in advance.",
      },
      {
        title: "Return To Marina",
        body: "When your group is ready, we'll sail back along the coastline. Morning, sunset, and full-day private charters are all available — we'll match the perfect vessel and schedule to your vision.",
      },
    ],
    included: [
      ...catamaranIncluded,
      "Private use of the catamaran for your group",
      "Customizable itinerary with captain consultation",
      "Ideal for special occasions and celebrations",
    ],
    bring: catamaranBring,
  },
  "scuba-diving": {
    overview:
      "Discover Costa Rica beneath the surface. Half-day scuba diving experiences along the Pacific coast, with options for certified divers and those looking to try diving for the first time. Couples, families, and solo travelers — we'll help you find the best operator for your dates and experience level.",
    schedule: {
      duration: "Approximate Duration: Half Day (4–5 Hours)",
      checkIn,
      departure: "Morning or afternoon — varies by operator",
      returnTime: "Early or late afternoon",
      note: "Duration, dive sites, and departure times depend on the selected dive operator, conditions, and your group's certification level. Confirmed details provided at booking.",
    },
    daySteps: [
      {
        title: "Check-In & Briefing",
        body: "Meet your dive operator at the designated marina or dive center. Complete paperwork, receive equipment fitting, and join a safety and dive briefing tailored to your experience level — whether you're a certified diver or trying a discover dive for the first time.",
      },
      {
        title: "Boat Transfer To Dive Site",
        body: "Board the dive boat and cruise to one of Guanacaste's Pacific dive sites. Your crew selects locations based on conditions, visibility, and the day's plan.",
      },
      {
        title: "Diving & Underwater Exploration",
        body: "Explore Costa Rica's underwater world with your guide. Certified divers enjoy reef and rock formations teeming with tropical fish, rays, and seasonal marine life. Beginners follow a structured introduction with close instructor supervision.",
      },
      {
        title: "Surface Interval & Return",
        body: "Between dives or after your session, enjoy snacks and water on board while sharing the day's highlights. Return to the marina with unforgettable memories from beneath the Pacific.",
      },
    ],
    included: [
      "Professional dive guide or instructor",
      "Scuba equipment rental (BCD, regulator, tank, weights)",
      "Boat transportation to dive site",
      "Safety briefing and in-water supervision",
      "Snacks and water on board (varies by operator)",
    ],
    bring: [
      "Swimsuit",
      "Towel",
      "Reef-safe sunscreen",
      "Certification card (certified divers)",
      "Logbook (optional)",
      "Motion sickness medication if prone to seasickness",
      "Dry change of clothes",
    ],
  },
  freediving: {
    overview:
      "Experience the ocean on a single breath. Half-day freediving experiences along Costa Rica's clear Pacific waters, with options for certified freedivers and those new to the sport. Couples, families, and solo travelers — we'll match you with the right operator for your dates and ability.",
    schedule: {
      duration: "Approximate Duration: Half Day (3–5 Hours)",
      checkIn,
      departure: "Morning or afternoon — varies by operator",
      returnTime: "Early or late afternoon",
      note: "Session length, depth, and departure times depend on the selected operator, conditions, and your experience level. Confirmed details provided at booking.",
    },
    daySteps: [
      {
        title: "Check-In & Briefing",
        body: "Arrive at the marina or freediving center for registration and equipment check. Your instructor covers breath-hold safety, equalization, buddy protocols, and the plan for the session — whether you're certified or joining an introductory experience.",
      },
      {
        title: "Boat Transfer To Site",
        body: "Travel by boat to a calm bay or open-water site chosen for visibility and conditions. Warm-up breathing exercises help you prepare for the session ahead.",
      },
      {
        title: "Freediving Session",
        body: "Explore the Pacific on a single breath with line training, depth practice, or reef exploration depending on your level. Certified freedivers work on technique and depth; beginners learn fundamentals in a controlled, supervised environment.",
      },
      {
        title: "Recovery & Return",
        body: "Rest, hydrate, and debrief with your instructor on board. Share the day's achievements before returning to the marina.",
      },
    ],
    included: [
      "Professional freediving instructor",
      "Freediving equipment (mask, fins, wetsuit — varies by operator)",
      "Boat transportation to dive site",
      "Safety briefing and in-water supervision",
      "Line training equipment where applicable",
      "Snacks and water on board (varies by operator)",
    ],
    bring: [
      "Swimsuit",
      "Towel",
      "Reef-safe sunscreen",
      "Certification card (certified freedivers)",
      "Rash guard or wetsuit if you prefer your own",
      "Motion sickness medication if prone to seasickness",
      "Dry change of clothes",
    ],
    spearfishing: {
      partnerName: "Freedive Costa Rica",
      partnerUrl: "https://www.freedivecostarica.com/spearfishing-costa-rica",
      location: "Plaza Conchal Shopping Center, 2nd Floor — Playa Tamarindo, Guanacaste",
      intro:
        "Our freediving experiences are delivered through Freedive Costa Rica — Costa Rica's first freediving and spearfishing school, based in Tamarindo. In addition to breath-hold training, they offer guided spearfishing courses and trips along the Gold Coast and offshore Pacific waters.",
      offerings: [
        {
          title: "Discover Spearfishing",
          tagline: "The most eco-friendly and fun form of fishing",
          body: "Ideal if you want to try spearfishing without committing to a full course. You'll learn how to use a speargun safely and how to choose, stalk, and spear a fish — a perfect first taste of the sport.",
        },
        {
          title: "Evolution Spearfishing Spearo Course",
          tagline: "Become a spearfisher and join an amazing community",
          body: "For beginners or those with a little experience who want to become autonomous spearfishers. Covers speargun use and maintenance, how to choose, catch, and handle fish, and the fundamentals to become self-sufficient in the sport.",
        },
        {
          title: "Reef Spearfishing Trip",
          tagline: "Dive the local reefs and bring dinner to friends and family",
          body: "Visit top sites such as the Catalina Islands, Brumel Islands, and Potrero Bay. Cubera snappers, amberjacks, Spanish mackerel, and more are spotted regularly — plenty of action in waters known for abundance and variety.",
        },
        {
          title: "Blue Water Spearfishing Trip",
          tagline: "Jump into massive schools of tunas and catch the fish of your dreams",
          body: "Drift in the open ocean miles from shore, hunting pelagic species in deep blue water. An unforgettable offshore experience when conditions and season align.",
        },
      ],
      note: "Spearfishing courses and trips are operated by Freedive Costa Rica. Minimum age is typically 18 years. A valid Costa Rican underwater fishing license (INCOPESCA) is required for spearfishing activities — the operator can advise on arrangements. Mention your interest in spearfishing when you inquire and we'll confirm availability.",
    },
  },
};

export function detailsForTour(slug: string): TourDetails | undefined {
  return tourDetailsBySlug[slug];
}
