import { defaultSiteContent } from "../src/lib/seed-content";
import { defaultTours } from "../src/lib/seed-tours";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, "site-content.json"),
  JSON.stringify(defaultSiteContent, null, 2),
);
fs.writeFileSync(
  path.join(dataDir, "tours.json"),
  JSON.stringify(defaultTours, null, 2),
);
fs.writeFileSync(path.join(dataDir, "providers.json"), "[]\n");
fs.writeFileSync(path.join(dataDir, "inquiries.json"), "[]\n");
console.log("Seed data written");
