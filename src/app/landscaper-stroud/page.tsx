import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { HashLink } from "@/components/HashLink";
import { galleryPhotos } from "@/config/gallery";
import { absoluteUrl, indexingRobots, siteConfig } from "@/config/site";
import { testimonials } from "@/config/testimonials";

const title = "Landscaper in Stroud | Landscape Gardener | Mike Hamer Gardens";
const description = "Landscape gardener working in Stroud and the Five Valleys. Patios, fencing, turfing, dry stone walling, garden clearance and maintenance. Call Mike on 07715 978631.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/landscaper-stroud" },
  robots: indexingRobots,
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    siteName: siteConfig.business.name,
    title,
    description,
    url: "/landscaper-stroud",
    images: [{ url: siteConfig.seo.openGraphImagePath, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: [siteConfig.seo.openGraphImagePath] },
};

const services: { title: string; description: string; href?: string }[] = [
  { title: "Patios and paving", description: "Create a practical space to sit, eat and enjoy your garden. Mike lays patio paving as part of hard landscaping work in Stroud.", href: "/patios-hard-landscaping-stroud" },
  { title: "Fencing", description: "New fencing can make a garden more private and give its boundaries a tidy finish. Mike takes on fencing work, including gardens on slopes." },
  { title: "Turfing", description: "Refresh a worn lawn or finish a garden transformation with new turf. Mike also offers grass seeding." },
  { title: "Dry stone walling", description: "Mike builds and repairs dry stone walls, working with the stone and character of the garden.", href: "/patios-hard-landscaping-stroud" },
  { title: "Garden clearance", description: "Clear overgrown borders and make an untidy garden usable again. Mike can help with a one-off tidy-up or clearance before further work." },
  { title: "And much more", description: "Mike also offers garden maintenance, grass and hedge cutting, pressure washing, garden repairs and other outdoor improvements. Get in touch to discuss what your garden needs.", href: "/#services" },
];

const faqs = [
  { question: "Do you cover Stroud?", answer: "Yes. I work all around Stroud and the Five Valleys." },
  { question: "Can you work on steep or sloping gardens?", answer: "Yes. A lot of gardens around Stroud are on slopes, and I've built steps, terraces and fencing on them." },
  { question: "How do I get a quote?", answer: "Call or message me on 07715 978631, or use the contact form, with a few photos and your postcode." },
];

// TODO: confirm job location and details with Mike.
// No gallery entry currently identifies Sheepscombe. Confirm whether the paving
// photo is that job before adding a Sheepscombe caption or project description.
const projectPlaceholders = galleryPhotos.filter((photo) => ["flagstone", "stone-detail"].includes(photo.id));
const reviews = testimonials.filter((review) => ["hillside-garden", "sloping-entrance"].includes(review.id));
const nearbyAreas = ["Stroud", "Nailsworth", "Stonehouse", "Painswick", "Minchinhampton", "Chalford", "Rodborough", "Sheepscombe"];

const sectionShell = "border-b border-border px-5 max-[560px]:px-5 lg:px-12 xl:px-20";
const sectionHeading = "m-0 font-display text-[clamp(34px,4vw,40px)] font-medium leading-[1.2] tracking-tight text-foreground";
const bodyMuted = "m-0 font-sans text-[17px] leading-body text-muted max-[560px]:text-base max-[560px]:leading-[1.55]";
const primaryButton = "inline-flex items-center justify-center bg-primary px-6 py-3.5 font-sans text-sm font-bold leading-5 text-primary-foreground transition-colors hover:bg-[#162B22] max-[560px]:w-full";
const textLink = "w-fit border-b border-primary font-sans text-base font-semibold leading-[26px] text-primary transition-colors hover:border-accent hover:text-accent";

export default function StroudPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/landscaper-stroud")}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Landscaper in Stroud", item: absoluteUrl("/landscaper-stroud") },
        ],
      },
    ],
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen min-w-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section className={`${sectionShell} py-12 lg:py-20`}>
        <nav aria-label="Breadcrumb" className="mb-8 font-sans text-sm text-muted">
          <Link href="/" className="underline underline-offset-4">Home</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Landscaper in Stroud</span>
        </nav>
        <div className="flex max-w-[800px] flex-col gap-5 lg:gap-7">
          <p className="m-0 font-sans text-[13px] font-semibold uppercase leading-4 tracking-label text-accent">Stroud · The Five Valleys</p>
          <h1 className="m-0 font-display text-[clamp(40px,6vw,56px)] font-medium leading-[1.1] tracking-tight text-primary">Landscaper in Stroud</h1>
          <p className={bodyMuted}>Looking for a landscape gardener in Stroud? Mike Hamer Gardens takes on landscaping and garden maintenance jobs across Stroud and the Five Valleys, from small tidy-ups to full garden transformations.</p>
          <p className={bodyMuted}>Based in Quedgeley, Gloucester, Mike works throughout Gloucestershire.</p>
          <HashLink href="#contact" className={`${primaryButton} w-fit`}>Request a Quote</HashLink>
        </div>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <h2 className={sectionHeading}>Landscaping services in Stroud</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col items-start gap-4 border-t border-border py-8">
              <h3 className="m-0 font-display text-2xl font-medium leading-[30px] text-foreground">
                {service.href === "/patios-hard-landscaping-stroud" ? (
                  <Link href={service.href} className="underline underline-offset-4 transition-colors hover:text-accent">{service.title}</Link>
                ) : service.title}
              </h3>
              <p className={bodyMuted}>{service.description}</p>
              {service.href === "/#services" ? (
                <HashLink href={service.href} className={`${textLink} mt-auto`}>
                  See all services
                </HashLink>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionShell} bg-sage-wash py-[72px] lg:py-24`}>
        <div className="max-w-[800px]">
          <h2 className={sectionHeading}>Gardens in the Stroud valleys</h2>
          <p className={`${bodyMuted} mt-5`}>Gardens around Stroud are often steep, sloping and built with Cotswold stone. Mike has {siteConfig.business.experienceYears} years of experience with exactly that, from levelling sloped lawns and building steps to repairing and building dry stone walls.</p>
        </div>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <h2 className={sectionHeading}>Recent work around Stroud</h2>
        <p className={`${bodyMuted} mt-4 max-w-[800px]`}>Photos from Mike&apos;s existing gallery are shown below while local project details are confirmed. The locations of these examples have not yet been confirmed.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projectPlaceholders.map((project) => (
            <article key={project.id} className="flex flex-col gap-4">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image src={project.src} alt={project.alt} fill className="object-cover" style={{ objectPosition: project.imagePosition }} sizes="(max-width: 640px) 100vw, 50vw" />
              </div>
              <h3 className="m-0 font-display text-2xl font-medium leading-[30px] text-foreground">{project.title}</h3>
              {/* TODO: confirm job location and details with Mike */}
              <p className={bodyMuted}>Project placeholder — location and details awaiting confirmation.</p>
              <Link href="/gallery" className={textLink}>View gallery</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionShell} bg-primary py-[72px] lg:py-20`}>
        <h2 className={`${sectionHeading} text-primary-foreground`}>Areas covered near Stroud</h2>
        <ul className="mt-6 flex list-none flex-wrap gap-x-6 gap-y-3 p-0 font-sans text-base leading-[26px] text-primary-foreground">
          {nearbyAreas.map((area) => <li key={area}>{area}</li>)}
        </ul>
        <p className="mt-5 mb-0 font-sans text-[17px] leading-body text-secondary">I also work across the rest of Gloucestershire.</p>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <h2 className={sectionHeading}>What customers say</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {reviews.map((review) => (
            <blockquote key={review.id} className="m-0 border-t border-border pt-8">
              <p className="m-0 font-display text-xl leading-[1.6] text-foreground">&ldquo;{review.displayQuote}&rdquo;</p>
              <footer className="mt-6 flex flex-col gap-1">
                <cite className="font-sans text-sm font-semibold not-italic">{review.name}</cite>
                <span className="font-sans text-[13px] text-muted">{review.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={`${sectionShell} bg-sage-wash py-[72px] lg:py-24`}>
        <h2 className={sectionHeading}>Questions about working in Stroud</h2>
        <div className="mt-10 border-t border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-medium leading-7 text-foreground marker:content-none">
                {faq.question}<span aria-hidden="true" className="shrink-0 font-sans text-2xl text-accent group-open:rotate-45">+</span>
              </summary>
              <p className={`${bodyMuted} max-w-[800px] pb-6`}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
