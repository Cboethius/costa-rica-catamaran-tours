import { readJsonStore, updateJsonStore, writeJsonStore } from "./json-store";
import { defaultTours } from "./seed-tours";
import { detailsForTour } from "./tour-details-seed";
import type { Tour } from "./types";

const FILE = "tours.json";

function mergeTourDetails(
  stored: Tour["details"],
  code: Tour["details"],
): Tour["details"] {
  if (!code && !stored) return undefined;
  if (!stored) return code;
  if (!code) return stored;
  return {
    ...code,
    ...stored,
    spearfishing: stored.spearfishing ?? code.spearfishing,
  };
}

function stripAudienceHighlight(highlights: string[] | undefined): string[] {
  if (!highlights?.length) return [];
  return highlights.filter(
    (item) =>
      !/^(perfect for )?couples, families, and solo travelers$/i.test(
        item.trim(),
      ),
  );
}

function normalizeTour(tour: Tour): Tour {
  const seed = defaultTours.find((t) => t.id === tour.id);
  const codeDetails = detailsForTour(tour.slug) ?? seed?.details;
  const details = mergeTourDetails(tour.details, codeDetails);

  return {
    ...seed,
    ...tour,
    duration: tour.duration || details?.schedule.duration.replace(/^Approximate Duration: /, "") || "",
    highlights: stripAudienceHighlight(tour.highlights ?? seed?.highlights),
    details,
  };
}

function normalizeTours(tours: Tour[]): Tour[] {
  return tours.map(normalizeTour);
}

export async function getTours(): Promise<Tour[]> {
  const tours = await readJsonStore<Tour[]>(FILE, defaultTours);
  const active = normalizeTours(tours)
    .filter((t) => t.active)
    .sort((a, b) => a.sortOrder - b.sortOrder);
  return active;
}

export async function getAllTours(): Promise<Tour[]> {
  const tours = await readJsonStore<Tour[]>(FILE, defaultTours);
  return normalizeTours(tours).sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  const tours = await readJsonStore<Tour[]>(FILE, defaultTours);
  return normalizeTours(tours).find((t) => t.slug === slug && t.active);
}

export async function getTourById(id: string): Promise<Tour | undefined> {
  const tours = await readJsonStore<Tour[]>(FILE, defaultTours);
  return normalizeTours(tours).find((t) => t.id === id);
}

export async function saveTours(tours: Tour[]): Promise<void> {
  await writeJsonStore(FILE, tours);
}

export async function updateTours(
  updater: (current: Tour[]) => Tour[],
): Promise<Tour[]> {
  return updateJsonStore(FILE, defaultTours, updater);
}
