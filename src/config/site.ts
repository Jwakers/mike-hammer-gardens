const services = [
  "Landscaping",
  "Fencing",
  "Patio paving",
  "Dry stone walling",
  "Garden-related repairs",
  "Garden clearance",
  "Grass cutting",
  "Hedge cutting",
  "Turfing",
  "Grass seeding",
  "Pressure washing",
  "Seasonal garden maintenance",
  "General outdoor improvements",
] as const;

// TODO: confirm town list with Mike.
const serviceAreaGroups = [
  {
    district: "Stroud district",
    areas: ["Stroud", "Nailsworth", "Stonehouse", "Painswick", "Minchinhampton", "Chalford", "Rodborough", "Sheepscombe"],
  },
  { district: "Gloucester", areas: ["Gloucester", "Quedgeley", "Hucclecote", "Barnwood"] },
  { district: "Cheltenham", areas: ["Cheltenham", "Charlton Kings", "Leckhampton"] },
  { district: "Cotswolds", areas: ["Cirencester", "Tetbury", "Bourton-on-the-Water"] },
] as const;

export const siteConfig = {
  business: {
    name: "Mike Hamer Gardens",
    type: "HomeAndConstructionBusiness",
    description:
      "Landscape gardener based in Quedgeley, working across Stroud, Gloucester and Gloucestershire.",
    email: "mikehamergardens@gmail.com",
    phone: {
      display: "07715 978631",
      international: "+44 7715 978631",
      href: "tel:+447715978631",
    },
    facebook: "https://www.facebook.com/p/Mike-Hamer-Gardens-100078705781176/",
    // TODO: match GBP name/address exactly. Do not publish a private street address.
    primaryLocation: {
      locality: "Quedgeley",
      region: "Gloucestershire",
      country: "GB",
    },
    serviceArea: "Gloucestershire",
    serviceAreaGroups,
    openingHours: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
      opens: "08:00",
      closes: "16:00",
      display: "Monday to Friday · 8:00am–4:00pm",
    },
    experienceYears: 13,
    services,
  },
  seo: {
    title:
      "Landscaper in Stroud & Gloucestershire | Mike Hamer Gardens",
    description:
      "Landscape gardener covering Stroud, Gloucester and the whole of Gloucestershire. Patios, fencing, turfing, dry stone walling, clearance and maintenance.",
    locale: "en_GB",
    logoPath: "/mh-monogram.svg",
    openGraphImagePath: "/opengraph-image",
    googleVerification: process.env.GOOGLE_SITE_VERIFICATION,
    bingVerification: process.env.BING_SITE_VERIFICATION,
  },
  form: {
    formspreeId: "xoeaqbdo",
    // File uploads require a paid Formspree plan. Default off.
    allowFileUploads: process.env.FORMSPREE_FILE_UPLOADS === "true",
  },
} as const;

// Use the confirmed public origin for canonicals, social metadata and the sitemap.
export const siteUrl = new URL("https://www.mikehamergardens.co.uk/");
export const deploymentEnvironment =
  process.env.VERCEL_ENV ?? process.env.SITE_ENV ?? "development";
export const isProductionDeployment = deploymentEnvironment === "production";
export const isIndexable = isProductionDeployment;

export const indexingRobots = {
  index: isIndexable,
  follow: isIndexable,
  googleBot: {
    index: isIndexable,
    follow: isIndexable,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function absoluteUrl(path = "/"): string | null {
  return siteUrl ? new URL(path, siteUrl).toString() : null;
}
