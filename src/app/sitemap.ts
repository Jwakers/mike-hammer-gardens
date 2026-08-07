import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexable } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage = absoluteUrl("/");

  if (!isIndexable || !homepage) return [];

  return [{ url: homepage }];
}
