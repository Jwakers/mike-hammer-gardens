import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexable } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage = absoluteUrl("/");
  const gallery = absoluteUrl("/gallery");

  if (!isIndexable || !homepage || !gallery) return [];

  return [
    { url: homepage },
    { url: gallery },
  ];
}
