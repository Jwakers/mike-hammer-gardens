import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Mike Hamer Gardens",
  description: "This page could not be found. Visit Mike Hamer Gardens for landscaping and garden services across Gloucestershire.",
  robots: { index: false },
  alternates: { canonical: null },
  openGraph: { title: "Page not found | Mike Hamer Gardens", url: null },
  twitter: { title: "Page not found | Mike Hamer Gardens" },
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-[50vh] border-b border-border px-5 py-20 lg:px-12 xl:px-20">
      <h1 className="m-0 font-display text-[clamp(40px,6vw,56px)] font-medium leading-[1.1] tracking-tight text-primary">Page not found</h1>
      <p className="mt-5 font-sans text-[17px] leading-body text-muted">We couldn&apos;t find that page. Get back to Mike&apos;s landscaping and garden services.</p>
      <Link href="/" className="mt-5 inline-flex bg-primary px-6 py-3.5 font-sans text-sm font-bold text-primary-foreground">Return home</Link>
    </main>
  );
}
