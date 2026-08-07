import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.business.name,
    short_name: "MH Gardens",
    description: siteConfig.business.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f2f0eb",
    theme_color: "#1f3a2e",
    lang: "en-GB",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
