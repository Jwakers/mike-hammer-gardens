import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HashLink } from "@/components/HashLink";
import { beforeAfterPairs, galleryPhotos } from "@/config/gallery";
import { absoluteUrl, indexingRobots, siteConfig } from "@/config/site";
import { testimonials } from "@/config/testimonials";

const path = "/patios-hard-landscaping-stroud";
const title = "Patios & Hard Landscaping in Stroud | Mike Hamer Gardens";
const description = "Patio paving, steps, retaining walls and dry stone walling in Stroud and the Five Valleys. 13 years’ experience with sloping gardens. Call Mike on 07715 978631.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  robots: indexingRobots,
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    siteName: siteConfig.business.name,
    title,
    description,
    url: path,
    images: [{ url: siteConfig.seo.openGraphImagePath, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: [siteConfig.seo.openGraphImagePath] },
};

const services = [
  { title: "Patios and paving", description: "A level, well-laid patio gives you somewhere to sit, eat and enjoy the garden. Mike lays natural stone and flagstone patios, with the groundwork and drainage done properly first so the patio stays level." },
  { title: "Garden steps and paths", description: "Sloping gardens need safe ways to get around. Mike builds garden steps and stone paths, including new entrances into awkward, sloping plots." },
  { title: "Retaining walls and terraces", description: "Retaining walls can turn a steep slope into usable, level areas. Mike builds retaining walls and terraces to go with patios, lawns and raised beds." },
  { title: "Dry stone walling", description: "Mike repairs and rebuilds traditional dry stone walls, reusing the stone already on site where he can, so the work settles into the landscape." },
  { title: "Sleeper raised beds and edging", description: "Timber sleeper raised beds and edging, often built into sloping boundaries, give planting areas a practical, tidy structure." },
];

const faqs = [
  { question: "Can you lay a patio on a sloping garden?", answer: "Yes. Many Stroud gardens slope. Mike can build retaining walls, steps or terraces so the patio sits level." },
  { question: "Do you repair existing dry stone walls?", answer: "Yes. Mike repairs and rebuilds dry stone walls and reuses the original stone where possible." },
  { question: "Can you combine a patio with other work?", answer: "Yes. Patios are often part of a bigger job, such as new fencing, turfing, raised beds or a garden clearance." },
  { question: "How do I get a quote?", answer: "Send a short description of the work and your postcode through the quote form, or call Mike on 07715 978631. He'll get in touch and arrange a visit where needed." },
];

const projectPhotos = ["flagstone", "stone-detail"]
  .map((id) => galleryPhotos.find((photo) => photo.id === id)!)
  .map((photo) => ({
    ...photo,
    caption: photo.id === "flagstone"
      ? "Natural stone paving with a dry-stone retaining wall"
      : "Traditional dry stone rebuilt around living trees",
  }));
const slopingProject = beforeAfterPairs.find((project) => project.id === "slopedbeds")!;
const reviews = ["sloping-entrance", "hillside-garden"].map((id) => testimonials.find((review) => review.id === id)!);
const nearbyAreas = siteConfig.business.serviceAreaGroups[0].areas;

// Confirm any additional paving materials, named local projects (including
// Sheepscombe), lead times and free quotes with Mike before adding those claims.
const sectionShell = "border-b border-border px-5 lg:px-12 xl:px-20";
const sectionHeading = "m-0 font-display text-[clamp(34px,4vw,40px)] font-medium leading-[1.2] tracking-tight text-foreground";
const bodyMuted = "m-0 font-sans text-[17px] leading-body text-muted max-[560px]:text-base max-[560px]:leading-[1.55]";
const primaryButton = "inline-flex items-center justify-center bg-primary px-6 py-3.5 font-sans text-sm font-bold leading-5 text-primary-foreground transition-colors hover:bg-[#162B22] max-[560px]:w-full";
const textLink = "w-fit border-b border-primary font-sans text-base font-semibold leading-[26px] text-primary transition-colors hover:border-accent hover:text-accent";

export default function PatiosPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name: "Patios and hard landscaping in Stroud",
        serviceType: "Hard landscaping",
        provider: { "@id": `${absoluteUrl("/")}#business` },
        areaServed: [
          { "@type": "City", name: "Stroud" },
          { "@type": "AdministrativeArea", name: "Gloucestershire" },
        ],
        url: absoluteUrl(path),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Landscaper in Stroud", item: absoluteUrl("/landscaper-stroud") },
          { "@type": "ListItem", position: 3, name: "Patios & hard landscaping", item: absoluteUrl(path) },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(path)}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen min-w-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <section className={`${sectionShell} py-12 lg:py-20`}>
        <nav aria-label="Breadcrumb" className="mb-8 font-sans text-sm leading-6 text-muted">
          <Link href="/" className="underline underline-offset-4">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/landscaper-stroud" className="underline underline-offset-4">Landscaper in Stroud</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Patios &amp; hard landscaping</span>
        </nav>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div className="flex min-w-0 flex-col gap-5 lg:gap-7">
            <p className="m-0 font-sans text-[13px] font-semibold uppercase leading-4 tracking-label text-accent">Stroud · The Five Valleys</p>
            <h1 className="m-0 font-display text-[clamp(40px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-primary">Patios and hard landscaping in Stroud</h1>
            <p className={bodyMuted}>Mike Hamer Gardens lays patios, builds steps and retaining walls, and repairs and builds dry stone walls for gardens in Stroud and the Five Valleys. Gardens around Stroud are often steep and built with Cotswold stone. Mike has {siteConfig.business.experienceYears} years of industry experience working with both, so your new patio or wall will suit the garden and is built to last.</p>
            <p className={bodyMuted}>Based in Quedgeley, Gloucester, Mike works across Gloucestershire.</p>
            <div className="flex flex-wrap items-center gap-5">
              <HashLink href="/#contact" className={primaryButton}>Request a Quote</HashLink>
              <a href={siteConfig.business.phone.href} className={textLink}>Call {siteConfig.business.phone.display}</a>
            </div>
          </div>
          <figure className="m-0 min-w-0">
            <div className="relative aspect-[4/5] overflow-hidden max-lg:aspect-[5/4]">
              <Image src={projectPhotos[0].src} alt={projectPhotos[0].alt} fill preload className="object-cover" style={{ objectPosition: projectPhotos[0].imagePosition }} sizes="(max-width: 899px) 100vw, 45vw" />
            </div>
            <figcaption className="mt-3 font-sans text-sm leading-6 text-muted">{projectPhotos[0].caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <h2 className={sectionHeading}>Patios, paths and garden structure</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col gap-4 border-t border-border py-8">
              <h3 className="m-0 font-display text-2xl font-medium leading-[1.2] text-foreground">{service.title}</h3>
              <p className={bodyMuted}>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionShell} bg-sage-wash py-[72px] lg:py-24`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <h2 className={sectionHeading}>Working with a sloping garden</h2>
          <div className="flex flex-col gap-5">
            <p className={bodyMuted}>Many gardens in the Stroud valleys are on a hill. Getting a patio or path right on a slope comes down to levels, drainage and solid retaining work. Mike has built steps, terraces, fencing and retaining walls on steep gardens around the area, and he works with what&apos;s already there.</p>
            <p className={bodyMuted}>One long-standing customer said he &ldquo;worked creatively with a lot of the stone already on site, keeping the use of new stone and manufactured materials to a minimum&rdquo;.</p>
            <Link href="/landscaper-stroud" className={textLink}>More landscaping services in Stroud</Link>
          </div>
        </div>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className={sectionHeading}>A closer look at Mike&apos;s work</h2>
          <Link href="/gallery" className={textLink}>View the full gallery</Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {projectPhotos.map((photo) => (
            <figure key={photo.id} className="m-0 min-w-0">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" style={{ objectPosition: photo.imagePosition }} sizes="(max-width: 767px) 100vw, 33vw" />
              </div>
              <figcaption className="mt-4 font-sans text-base leading-[26px] text-muted">{photo.caption}</figcaption>
            </figure>
          ))}
          <figure className="m-0 min-w-0">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image src={slopingProject.afterSrc} alt={slopingProject.afterAlt} fill className="object-cover" style={{ objectPosition: slopingProject.afterPosition }} sizes="(max-width: 767px) 100vw, 33vw" />
            </div>
            <figcaption className="mt-4 font-sans text-base leading-[26px] text-muted">Fencing and raised beds on a slope</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${sectionShell} bg-primary py-[72px] lg:py-20`}>
        <h2 className={`${sectionHeading} text-primary-foreground`}>Areas covered near Stroud</h2>
        <ul className="mt-6 flex list-none flex-wrap gap-x-6 gap-y-3 p-0 font-sans text-base leading-[26px] text-primary-foreground">
          {nearbyAreas.map((area) => <li key={area}>{area === "Stroud" ? <Link href="/landscaper-stroud" className="underline underline-offset-4">{area}</Link> : area}</li>)}
        </ul>
        <p className="mt-5 mb-0 font-sans text-[17px] leading-body text-primary-foreground">Mike also works across the rest of Gloucestershire.</p>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <h2 className={sectionHeading}>What customers say</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {reviews.map((review) => (
            <blockquote key={review.id} className="m-0 border-t border-border pt-8">
              <p className="m-0 font-display text-xl leading-[1.6] text-foreground">&ldquo;{review.displayQuote}&rdquo;</p>
              <footer className="mt-6 flex flex-col gap-1">
                <cite className="font-sans text-sm font-semibold not-italic">{review.name}</cite>
                <span className="font-sans text-sm text-muted">{review.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={`${sectionShell} bg-sage-wash py-[72px] lg:py-24`}>
        <h2 className={sectionHeading}>Questions about patios and hard landscaping</h2>
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

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <div className="flex max-w-[800px] flex-col gap-6">
          <h2 className={sectionHeading}>Tell Mike about your garden</h2>
          <p className={bodyMuted}>Send a short description of the work and your postcode, or call Mike to discuss your patio, steps or wall.</p>
          <div className="flex flex-wrap items-center gap-5">
            <HashLink href="/#contact" className={primaryButton}>Request a Quote</HashLink>
            <a href={siteConfig.business.phone.href} className={textLink}>Call {siteConfig.business.phone.display}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
