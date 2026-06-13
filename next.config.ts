import type { NextConfig } from "next";
import { networkInterfaces } from "os";

function localNetworkIps() {
  const ips = new Set<string>();
  for (const net of Object.values(networkInterfaces())) {
    for (const addr of net ?? []) {
      if (addr.family === "IPv4" && !addr.internal) {
        ips.add(addr.address);
      }
    }
  }
  return [...ips];
}

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost", ...localNetworkIps()],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },
};

export default nextConfig;
