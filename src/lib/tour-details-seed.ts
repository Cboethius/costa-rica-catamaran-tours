import { defaultSiteContent } from "./seed-content";
import type { TourDetails, TourSpearfishingOffering } from "./types";

const { whatsIncluded, dayAtSea } = defaultSiteContent;

const catamaranIncluded = whatsIncluded.included;
const catamaranBring = whatsIncluded.bring;
const scheduleNote = dayAtSea.note;

const checkIn = "30–45 minutes before departure";

const spearfishingRequirements = [
  "Strong, confident swimmer",
  "Very comfortable in the ocean. You feel natural and at home in the water",
  "Can snorkel easily without assistance",
  "Comfortable duck diving and holding your breath briefly underwater",
  "Calm and composed in open water. Not prone to panic or claustrophobia",
  "Good general fitness. Able to swim against mild currents",
  "Minimum age 18",
  "A valid Costa Rican underwater fishing license (INCOPESCA) is required. We can advise on arrangements when you inquire",
];

const spearfishingOfferings: TourSpearfishingOffering[] = [
  {
    title: "Discover Spearfishing",
    tagline: "The most eco-friendly and fun form of fishing",
    duration: "Half day (approx. 5 hours)",
    format: "Introduction course on a shared boat",
    body: "Ideal if you want to try spearfishing without committing to a full course. You will learn how to use a speargun safely and how to choose, stalk, and spear a fish. A perfect first taste of the sport and the ocean below.",
    prerequisites: [
      "Minimum 18 years of age",
      "Able to swim confidently",
      "No prior spearfishing experience required",
      "Freediving experience or course recommended",
      "Valid Costa Rican spearfishing license (INCOPESCA practice underwater fishing card)",
    ],
    courseContent: [
      "Theory: spearfishing equipment, techniques, and safety",
      "Open water: guided reef spearfishing session to put skills into practice",
    ],
    included: [
      "Professional spearfishing instructor",
      "Boat fees and reef spearfishing equipment (you may bring your own)",
      "Transport from meeting point to marina and back",
      "Fruits and refreshments on the boat",
      "Souvenir photo and video",
    ],
  },
  {
    title: "Evolution Spearfishing Spearo Course",
    tagline: "Become a spearfisher and join an amazing community",
    duration: "Extensive multi-day course (typically 2 to 3 days)",
    format: "Certification-style course with classroom and open water sessions",
    body: "For beginners or those with a little experience who want to become autonomous spearfishers. Covers speargun use and maintenance, how to choose, catch, and handle fish, hunting techniques, safety procedures, and the fundamentals to become self-sufficient in the sport.",
    prerequisites: [
      "Minimum 16 to 18 years of age depending on program (under 18 requires parental consent)",
      "Valid entry-level freediving certification (or equivalent)",
      "Able to dive to approximately 10 m (33 ft) in open water",
      "Valid Costa Rican spearfishing license (INCOPESCA)",
    ],
    courseContent: [
      "Spearfishing theory and safety procedures",
      "Basic rigging and knot tying",
      "Open water line and reef diving sessions",
      "Speargun reef hunt and pole spear reef hunt",
      "Gear familiarization, hunting techniques, and fishing conservation",
    ],
    included: [
      "Professional spearfishing instructor",
      "Course manual and digital certification upon successful completion",
      "Boat fees and in-water coaching",
      "Equipment use during course sessions (varies by day)",
    ],
  },
  {
    title: "Reef Spearfishing Trip",
    tagline: "Dive the local reefs and bring dinner to friends and family",
    duration: "Half day",
    format: "Shared boat trip",
    body: "Visit top sites such as the Catalina Islands, Brumel Islands, and Potrero Bay. Cubera snappers, amberjacks, Spanish mackerel, and many more are spotted regularly. Plenty of action in waters well known for abundance and variety, whatever your spearfishing level.",
    prerequisites: [
      "Minimum 18 years of age",
      "Spearfishing experience or course required",
      "Valid Costa Rican spearfishing license (INCOPESCA practice underwater fishing card)",
    ],
    included: [
      "Highly experienced professional spearfishing guide",
      "Boat fees and reef spearfishing equipment (you may bring your own)",
      "Fruits and refreshments on the boat",
      "Souvenir photo and video",
    ],
  },
  {
    title: "Blue Water Spearfishing Trip",
    tagline: "Jump into massive schools of tunas and catch the fish of your dreams",
    duration: "Full day (8 hours)",
    format: "Private boat (up to 5 people)",
    body: "Drift in the open ocean miles from shore, not knowing if a huge school of tunas or mahi-mahi will swim out of the deep blue. An unforgettable offshore hunt when conditions and season align.",
    prerequisites: [
      "Minimum 18 years of age",
      "Spearfishing experience or course required",
      "Valid Costa Rican spearfishing license (INCOPESCA practice underwater fishing card)",
    ],
    included: [
      "Hotel pick-up and drop-off",
      "Highly experienced professional spearfishing guide",
      "Boat fees",
      "Sandwiches, snacks, fruits, and refreshments on the boat",
      "Souvenir photo and video",
      "Blue water spearfishing equipment available as an add-on (confirm at booking)",
    ],
  },
];

const spearfishingBlock = {
  requirements: spearfishingRequirements,
  offerings: spearfishingOfferings,
  note: "Trip type, sites, and group size vary by date and conditions. Mention your experience level when you inquire and we will confirm availability and pricing.",
};

/** Shared catamaran day flow (steps 1–4 from Plan Your Trip). */
const catamaranDayStart = dayAtSea.steps.slice(0, 4);

export const tourDetailsBySlug: Record<string, TourDetails> = {
  "morning-cruise": {
    overview:
      "Start your day with sunshine, calm seas and unforgettable ocean views. A relaxed morning sailing adventure along Guanacaste's Gold Coast. Ideal for couples, families, and solo travelers who want to experience Costa Rica's coastline before spending the afternoon exploring.",
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
      "Our most popular experience. Spend the afternoon sailing the Pacific Ocean before dropping anchor in a secluded bay for snorkeling and water activities, then watch the sky explode into shades of orange, pink and gold as the sun sets over the Pacific. A Costa Rica bucket-list experience for couples, families, and solo travelers.",
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
      "The ultimate Gold Coast experience. A full day on the water with extended sailing, multiple swim and snorkel stops, paddleboarding, a full meal and open bar. Ideal for couples, families, and solo travelers who want to soak up every moment of Costa Rica's Pacific paradise.",
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
          "As we leave the marina behind, you'll experience some of the most spectacular coastal scenery in Costa Rica.\n\nRelax on deck as we sail past secluded beaches, dramatic cliffs, tropical forests and hidden coves, with extended time on the water to visit multiple locations along the Gold Coast.\n\nKeep your eyes on the water. Dolphins, sea turtles, devil rays and even whales (seasonal) are regularly spotted along the coastline.",
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
      "Your boat. Your day. Your adventure. Enjoy complete privacy and a fully customized itinerary while our professional crew takes care of everything, perfect for families, wedding groups, honeymoons, corporate events, celebrations, and multi-generational gatherings.",
    schedule: {
      duration: "Flexible, Typically 4–8 Hours",
      checkIn,
      departure: "Customized to your group",
      returnTime: "Customized to your itinerary",
      note: "Private charters are tailored to your occasion, group size, and preferences. Your confirmed itinerary and timing will be provided at booking.",
    },
    daySteps: [
      {
        title: "Check-In & Welcome",
        body: "Your private adventure begins at the marina, where our crew welcomes your group aboard your exclusive catamaran.\n\nAfter a safety briefing, you'll discuss the day's plan with the captain, whether that means extra snorkeling time, a sunset toast, beach stops, or a leisurely cruise tailored entirely to you.",
      },
      {
        title: "Your Custom Gold Coast Experience",
        body: "Sail past hidden beaches, tropical islands, volcanic coastline and secluded bays accessible only by boat.\n\nYour itinerary may include snorkeling, swimming, paddleboarding, wildlife watching, beach time, and gourmet dining, all at your pace.",
      },
      {
        title: "Celebration & Relaxation",
        body: "Whether you're marking a special occasion or simply enjoying time with loved ones, the crew handles every detail, from meal service and open bar to music, photography moments and surprise touches you request in advance.",
      },
      {
        title: "Return To Marina",
        body: "When your group is ready, we'll sail back along the coastline. Morning, sunset, and full-day private charters are all available. We'll match the perfect vessel and schedule to your vision.",
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
      "Discover Costa Rica beneath the surface. Half-day scuba diving experiences along the Pacific coast, with options for certified divers and those looking to try diving for the first time. Couples, families, and solo travelers. We'll help you find the best operator for your dates and experience level.",
    schedule: {
      duration: "Approximate Duration: Half Day (4–5 Hours)",
      checkIn,
      departure: "Morning or afternoon, varies by operator",
      returnTime: "Early or late afternoon",
      note: "Duration, dive sites, and departure times depend on the selected dive operator, conditions, and your group's certification level. Confirmed details provided at booking.",
    },
    daySteps: [
      {
        title: "Check-In & Briefing",
        body: "Meet your dive operator at the designated marina or dive center. Complete paperwork, receive equipment fitting, and join a safety and dive briefing tailored to your experience level, whether you're a certified diver or trying a discover dive for the first time.",
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
      "Experience the ocean on a single breath. Half-day freediving experiences along Costa Rica's clear Pacific waters, with options for certified freedivers and those new to the sport. Couples, families, and solo travelers. We'll match you with the right operator for your dates and ability.",
    schedule: {
      duration: "Approximate Duration: Half Day (3–5 Hours)",
      checkIn,
      departure: "Morning or afternoon, varies by operator",
      returnTime: "Early or late afternoon",
      note: "Session length, depth, and departure times depend on the selected operator, conditions, and your experience level. Confirmed details provided at booking.",
    },
    daySteps: [
      {
        title: "Check-In & Briefing",
        body: "Arrive at the marina or freediving center for registration and equipment check. Your instructor covers breath-hold safety, equalization, buddy protocols, and the plan for the session, whether you're certified or joining an introductory experience.",
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
      "Freediving equipment (mask, fins, wetsuit (varies by operator))",
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
    spearfishing: spearfishingBlock,
  },
  spearfishing: {
    overview:
      "Guided spearfishing courses and trips along Costa Rica's Gold Coast, from Tamarindo to Flamingo marina. Choose a half-day introduction, a multi-day Spearo course, reef hunts at Catalina and Potrero Bay, or a full-day blue water trip offshore. Programs run on shared or private boats depending on the experience you select.",
    schedule: {
      duration: "Half day (approx. 5 hours) or full day (8 hours) depending on program",
      checkIn:
        "Varies by program. Discover Spearfishing typically starts around 1:00 PM in Tamarindo with a theory session before the boat. Reef trips and blue water departures are confirmed at booking.",
      departure:
        "Discover course: afternoon boat from Flamingo marina after theory and shuttle transfer. Reef trips: morning half-day departure. Blue water: early morning for the full 8-hour offshore trip.",
      returnTime:
        "Discover course: late afternoon. Half-day reef trip: midday to early afternoon. Blue water full-day trip: late afternoon.",
      note: "Exact check-in time, marina meeting point, and departure window depend on the program, vessel, and sea conditions. Your confirmed itinerary is provided at booking. Private half-day boat charters are also available for groups. Ask when you inquire.",
    },
    daySteps: [
      {
        title: "Check-In & Theory Briefing",
        body: "Arrive at the agreed meeting point in Tamarindo for registration and equipment check. Your instructor covers spearfishing equipment, techniques, safety, and the plan for the session. On the Discover Spearfishing course, this classroom portion typically begins around 1:00 PM before heading to the marina.",
      },
      {
        title: "Transfer To Marina & Boat",
        body: "Shuttle or meet directly at Flamingo marina to board your spearfishing boat. Final gear checks, buddy protocols, and a safety briefing on board before leaving the dock.",
      },
      {
        title: "In-Water Spearfishing Session",
        body: "Reef courses and trips visit sites such as the Catalina Islands, Brumel Islands, or Potrero Bay. Blue water trips head miles offshore to drift hunt pelagic species. Your guide coaches stalking, shot placement, and safe fish handling throughout.",
      },
      {
        title: "Debrief & Return",
        body: "Review the session on board, handle any catch per local regulations, and return to the marina. Hotel drop-off is included on blue water full-day trips. Your guide can advise on next steps if you are working toward autonomous spearfishing.",
      },
    ],
    included: [
      "Professional spearfishing instructor or guide",
      "Boat fees and fuel",
      "Spearfishing equipment on reef trips and Discover course (bring your own if preferred)",
      "Theory and in-water instruction on courses",
      "Transport from Tamarindo to Flamingo marina on Discover course",
      "Hotel pick-up and drop-off on blue water full-day trips",
      "Fruits, snacks, and refreshments on board (sandwiches included on blue water trips)",
      "Souvenir photo and video on trips and Discover course",
    ],
    bring: [
      "Swimsuit",
      "Towel",
      "Reef-safe sunscreen",
      "Rash guard or wetsuit if you prefer your own",
      "Valid Costa Rican underwater fishing license (INCOPESCA practice underwater fishing card)",
      "Freediving certification card for Spearo course participants",
      "Motion sickness medication if prone to seasickness",
      "Dry change of clothes",
    ],
    spearfishing: spearfishingBlock,
  },
};

export function detailsForTour(slug: string): TourDetails | undefined {
  return tourDetailsBySlug[slug];
}
