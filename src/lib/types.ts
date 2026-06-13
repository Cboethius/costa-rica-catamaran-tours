export type SiteContent = {
  hero: {
    title: string;
    subtitle: string;
    body: string;
    tagline: string;
    departureLine: string;
    cta: string;
    image: string;
  };
  whyCatamaran: {
    title: string;
    subtitle: string;
    body: string;
    highlights: string[];
    closing: string;
  };
  destinations: {
    title: string;
    subtitle: string;
    body: string;
    sailPast: string[];
    wildlife: string[];
    closing: string;
    image: string;
  };
  sharedTours: {
    title: string;
    subtitle: string;
  };
  privateCharters: {
    title: string;
    subtitle: string;
    intro: string;
    leadIn: string;
    body: string;
    closing: string;
    occasions: string[];
    image: string;
  };
  whatsIncluded: {
    title: string;
    subtitle: string;
    included: string[];
    bring: string[];
  };
  dayAtSea: {
    title: string;
    steps: {
      title: string;
      body: string;
      bullets?: string[];
    }[];
    durationsTitle: string;
    durations: {
      name: string;
      duration: string;
      checkIn: string;
      departure: string;
      return: string;
    }[];
    note: string;
  };
  whyBook: {
    title: string;
    subtitle: string;
    intro: string;
    points: string[];
    closing: string;
    mission: string;
    image: string;
    ctaTitle: string;
    ctaBody: string;
  };
  contact: {
    headline: string;
    details: string[];
    ctaLabel: string;
  };
  gallery: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    location: string;
  }[];
};

export type TourDayStep = {
  title: string;
  body: string;
  bullets?: string[];
};

export type TourSchedule = {
  duration: string;
  checkIn: string;
  departure: string;
  returnTime: string;
  note?: string;
};

export type TourSpearfishingOffering = {
  title: string;
  tagline: string;
  body: string;
};

export type TourSpearfishing = {
  partnerName: string;
  partnerUrl: string;
  location: string;
  intro: string;
  offerings: TourSpearfishingOffering[];
  note: string;
};

export type TourDetails = {
  overview: string;
  daySteps: TourDayStep[];
  included: string[];
  bring: string[];
  schedule: TourSchedule;
  spearfishing?: TourSpearfishing;
};

export type Tour = {
  id: string;
  slug: string;
  name: string;
  type: "shared" | "private";
  duration: string;
  description: string;
  longDescription?: string;
  highlights: string[];
  image: string;
  active: boolean;
  sortOrder: number;
  priceUsd?: number | null;
  details?: TourDetails;
};

export type Provider = {
  id: string;
  label: string;
  contactEmail: string;
  contactPhone: string;
  capacityNotes: string;
  supportedTourIds: string[];
  active: boolean;
};

export type InquiryStatus = "new" | "contacted" | "confirmed" | "cancelled";

export type Inquiry = {
  id: string;
  tourId: string;
  tourName: string;
  preferredDate: string;
  passengers: number;
  name: string;
  email: string;
  phone: string;
  message?: string;
  status: InquiryStatus;
  assignedProviderId?: string | null;
  createdAt: string;
};
