import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexable } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage = absoluteUrl("/");
  const stroud = absoluteUrl("/landscaper-stroud");
  const gallery = absoluteUrl("/gallery");

  if (!isIndexable || !homepage || !gallery || !stroud) return [];

  return [
    { url: homepage },
    { url: gallery },
    { url: stroud },
  ];
}
