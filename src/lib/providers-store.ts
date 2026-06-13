import { readJsonStore, updateJsonStore, writeJsonStore } from "./json-store";
import type { Provider } from "./types";

const FILE = "providers.json";

const defaultProviders: Provider[] = [];

export async function getProviders(): Promise<Provider[]> {
  return readJsonStore(FILE, defaultProviders);
}

export async function getActiveProviders(): Promise<Provider[]> {
  const providers = await getProviders();
  return providers.filter((p) => p.active);
}

export async function saveProviders(providers: Provider[]): Promise<void> {
  await writeJsonStore(FILE, providers);
}

export async function updateProviders(
  updater: (current: Provider[]) => Provider[],
): Promise<Provider[]> {
  return updateJsonStore(FILE, defaultProviders, updater);
}
