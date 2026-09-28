import type { Metadata } from "next";

import { GalleryPageContent } from "@/components/GalleryPageContent";
import { siteConfig, siteUrl } from "@/config/site";

const title = `Gallery | ${siteConfig.business.name}`;
const description =
  "Before-and-after garden transformations and finished landscaping work across Stroud — stone walling, hard landscaping, timber work, fencing, turfing and clearance.";

export const metadata: Metadata = {
  title,
  description,
  ...(siteUrl
    ? {
        alternates: {
          canonical: "/gallery",
        },
      }
    : {}),
  openGraph: {
    title,
    description,
    ...(siteUrl ? { url: "/gallery" } : {}),
  },
  twitter: {
    title,
    description,
  },
};

export default function GalleryPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen min-w-0">
      <GalleryPageContent />
    </main>
  );
}
