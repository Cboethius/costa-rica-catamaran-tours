#!/usr/bin/env node
/**
 * Stable dev startup: free port 3020, wipe stale .next cache, then start Next.js.
 * Prevents webpack chunk errors (e.g. "Cannot find module './331.js'") after HMR/build conflicts.
 */
import { execSync, spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const PORT = 3020;

function freePort() {
  try {
    const pids = execSync(`lsof -ti :${PORT}`, { encoding: "utf8" }).trim();
    if (!pids) return;
    for (const pid of pids.split("\n")) {
      if (pid) {
        try {
          process.kill(Number(pid), "SIGKILL");
        } catch {
          /* already gone */
        }
      }
    }
    console.log(`[dev] Freed port ${PORT}`);
  } catch {
    /* port already free */
  }
}

function cleanNextCache() {
  const nextDir = path.join(root, ".next");
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log("[dev] Cleared .next cache");
}

process.chdir(root);
freePort();
cleanNextCache();

const child = spawn(
  "npx",
  ["next", "dev", "-p", String(PORT), "-H", "0.0.0.0"],
  { stdio: "inherit", shell: true, cwd: root },
);

child.on("exit", (code) => process.exit(code ?? 0));
