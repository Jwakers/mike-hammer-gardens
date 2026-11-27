import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexable } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homepage = absoluteUrl("/");
  const stroud = absoluteUrl("/landscaper-stroud");
  const gallery = absoluteUrl("/gallery");
  const patios = absoluteUrl("/patios-hard-landscaping-stroud");

  if (!isIndexable || !homepage || !gallery || !stroud || !patios) return [];

  return [
    { url: homepage },
    { url: gallery },
    { url: stroud },
    { url: patios },
  ];
}
