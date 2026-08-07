const services = [
  "Landscaping",
  "Fencing",
  "Patio paving",
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

function normaliseSiteUrl(value: string | undefined): URL | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    if (
      url.username ||
      url.password ||
      (url.pathname !== "/" && url.pathname !== "") ||
      url.search ||
      url.hash
    ) {
      return null;
    }
    return url;
  } catch {
    return null;
  }
}

export const siteConfig = {
  business: {
    name: "Mike Hamer Gardens",
    type: "HomeAndConstructionBusiness",
    description:
      "Independent landscaping and garden-services business providing reliable garden improvements and maintenance across Stroud and surrounding areas.",
    phone: {
      display: "07715 978631",
      international: "+447715978631",
    },
    email: "jackwakeham82@gmail.com",
    facebook: "https://www.facebook.com/p/Mike-Hamer-Gardens-100078705781176/",
    primaryLocation: {
      locality: "Stroud",
      region: "Gloucestershire",
      country: "GB",
    },
    serviceArea: "Stroud and surrounding areas",
    // TODO: Add only towns and villages Mike confirms he genuinely serves.
    confirmedAdditionalServiceAreas: [] as readonly string[],
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
    title: "Landscaping & Garden Services in Stroud | Mike Hamer Gardens",
    description:
      "Landscaping, patios, fencing, turfing, garden clearance and maintenance across Stroud and surrounding areas. Contact Mike for a friendly quotation.",
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

export const siteUrl = normaliseSiteUrl(process.env.SITE_URL);
export const deploymentEnvironment =
  process.env.VERCEL_ENV ?? process.env.SITE_ENV ?? "development";
export const isProductionDeployment = deploymentEnvironment === "production";
export const isIndexable = isProductionDeployment && siteUrl !== null;

if (isProductionDeployment && !siteUrl) {
  throw new Error(
    "SITE_URL must be set to the confirmed canonical production origin for a production deployment.",
  );
}

if (isProductionDeployment && siteUrl?.protocol !== "https:") {
  throw new Error("SITE_URL must use HTTPS for a production deployment.");
}

export function absoluteUrl(path = "/"): string | null {
  return siteUrl ? new URL(path, siteUrl).toString() : null;
}
