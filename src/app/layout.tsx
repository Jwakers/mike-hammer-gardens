import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";

import { siteConfig, siteUrl, isIndexable } from "@/config/site";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  applicationName: siteConfig.business.name,
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  ...(siteUrl
    ? {
        alternates: {
          canonical: "/",
        },
      }
    : {}),
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    siteName: siteConfig.business.name,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    ...(siteUrl ? { url: "/" } : {}),
    ...(siteUrl
      ? {
          images: [
            {
              url: siteConfig.seo.openGraphImagePath,
              width: 1200,
              height: 630,
              alt: `${siteConfig.business.name} — landscaping and garden services in Stroud`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    ...(siteUrl ? { images: [siteConfig.seo.openGraphImagePath] } : {}),
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    ...(siteConfig.seo.googleVerification
      ? { google: siteConfig.seo.googleVerification }
      : {}),
    ...(siteConfig.seo.bingVerification
      ? { other: { "msvalidate.01": siteConfig.seo.bingVerification } }
      : {}),
  },
  category: "landscaping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
