import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { defaultSiteContent } from "../src/lib/seed-content";
import { defaultTours } from "../src/lib/seed-tours";

const dir = join(process.cwd(), "data");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "site-content.json"), JSON.stringify(defaultSiteContent, null, 2));
writeFileSync(join(dir, "tours.json"), JSON.stringify(defaultTours, null, 2));
writeFileSync(join(dir, "providers.json"), "[]\n");
writeFileSync(join(dir, "inquiries.json"), "[]\n");
console.log("Seed data written to data/");
