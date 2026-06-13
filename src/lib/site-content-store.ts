import { readJsonStore, updateJsonStore, writeJsonStore } from "./json-store";
import { defaultSiteContent } from "./seed-content";
import type { SiteContent } from "./types";

const FILE = "site-content.json";

function normalizeSiteContent(data: SiteContent): SiteContent {
  return {
    ...defaultSiteContent,
    ...data,
    hero: { ...defaultSiteContent.hero, ...data.hero },
    whyCatamaran: { ...defaultSiteContent.whyCatamaran, ...data.whyCatamaran },
    destinations: { ...defaultSiteContent.destinations, ...data.destinations },
    sharedTours: { ...defaultSiteContent.sharedTours, ...data.sharedTours },
    privateCharters: { ...defaultSiteContent.privateCharters, ...data.privateCharters },
    whatsIncluded: { ...defaultSiteContent.whatsIncluded, ...data.whatsIncluded },
    dayAtSea: { ...defaultSiteContent.dayAtSea, ...data.dayAtSea },
    whyBook: { ...defaultSiteContent.whyBook, ...data.whyBook },
    contact: { ...defaultSiteContent.contact, ...data.contact },
    gallery: data.gallery?.length ? data.gallery : defaultSiteContent.gallery,
    faq: data.faq?.length ? data.faq : defaultSiteContent.faq,
    testimonials: data.testimonials?.length
      ? data.testimonials
      : defaultSiteContent.testimonials,
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  const data = await readJsonStore(FILE, defaultSiteContent);
  return normalizeSiteContent(data);
}

export async function saveSiteContent(content: SiteContent): Promise<void> {
  await writeJsonStore(FILE, content);
}

export async function updateSiteContent(
  updater: (current: SiteContent) => SiteContent,
): Promise<SiteContent> {
  return updateJsonStore(FILE, defaultSiteContent, updater);
}
