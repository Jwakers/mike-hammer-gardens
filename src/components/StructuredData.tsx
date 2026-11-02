import { absoluteUrl, siteConfig } from "@/config/site";

export function StructuredData() {
  const homepage = absoluteUrl("/");
  if (!homepage) return null;

  const websiteId = `${homepage}#website`;
  const webpageId = `${homepage}#webpage`;
  const businessId = `${homepage}#business`;
  const county = siteConfig.business.primaryLocation.region;
  const serviceAreas = siteConfig.business.serviceAreaGroups.flatMap(
    (group) => group.areas,
  );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: homepage,
        name: siteConfig.business.name,
        inLanguage: "en-GB",
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: homepage,
        name: siteConfig.seo.title,
        description: siteConfig.seo.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
      },
      {
        "@type": siteConfig.business.type,
        "@id": businessId,
        name: siteConfig.business.name,
        url: homepage,
        description: siteConfig.business.description,
        email: siteConfig.business.email,
        telephone: siteConfig.business.phone.international,
        logo: absoluteUrl(siteConfig.seo.logoPath),
        image: absoluteUrl(siteConfig.seo.openGraphImagePath),
        sameAs: [siteConfig.business.facebook],
        address: {
          "@type": "PostalAddress",
          addressRegion: county,
          addressCountry: siteConfig.business.primaryLocation.country,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: county,
          },
          ...serviceAreas.map((area) => ({
            "@type": "Place",
            name: area,
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: county,
            },
          })),
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: siteConfig.business.openingHours.days.map(
              (day) => `https://schema.org/${day}`,
            ),
            opens: siteConfig.business.openingHours.opens,
            closes: siteConfig.business.openingHours.closes,
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Landscaping and garden services",
          itemListElement: siteConfig.business.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
              areaServed: {
                "@type": "AdministrativeArea",
                name: county,
              },
            },
          })),
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
