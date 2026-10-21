import { absoluteUrl, siteConfig } from "@/config/site";

export function StructuredData() {
  const homepage = absoluteUrl("/");
  if (!homepage) return null;

  const websiteId = `${homepage}#website`;
  const webpageId = `${homepage}#webpage`;
  const businessId = `${homepage}#business`;
  const serviceAreas = [
    siteConfig.business.primaryLocation.locality,
    ...siteConfig.business.confirmedAdditionalServiceAreas,
  ];

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
          addressLocality: siteConfig.business.primaryLocation.locality,
          addressRegion: siteConfig.business.primaryLocation.region,
          addressCountry: siteConfig.business.primaryLocation.country,
        },
        areaServed: serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: siteConfig.business.primaryLocation.region,
          },
        })),
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
              areaServed: serviceAreas.map((area) => ({
                "@type": "City",
                name: area,
              })),
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
