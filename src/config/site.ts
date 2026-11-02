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

const serviceAreaGroups = [
  {
    district: "Gloucester",
    areas: [
      "Gloucester",
      "Quedgeley",
      "Hucclecote",
      "Barnwood",
      "Longlevens",
      "Tuffley",
      "Matson",
      "Abbeydale",
      "Abbeymead",
      "Kingsholm",
      "Coney Hill",
    ],
  },
  {
    district: "Cheltenham",
    areas: [
      "Cheltenham",
      "Charlton Kings",
      "Leckhampton",
      "Prestbury",
      "Up Hatherley",
      "Pittville",
      "Benhall",
      "Warden Hill",
      "Swindon Village",
      "Arle",
      "Hesters Way",
      "Battledown",
    ],
  },
  {
    district: "Stroud",
    areas: [
      "Stroud",
      "Nailsworth",
      "Stonehouse",
      "Dursley",
      "Cam",
      "Wotton-under-Edge",
      "Berkeley",
      "Painswick",
      "Minchinhampton",
      "Chalford",
      "Brimscombe",
      "Rodborough",
      "Cainscross",
      "King's Stanley",
      "Leonard Stanley",
      "Eastington",
      "Frampton on Severn",
      "Woodchester",
      "Amberley",
      "Thrupp",
      "Bussage",
      "France Lynch",
      "Eastcombe",
      "Oakridge",
      "Bisley",
      "Cranham",
      "Miserden",
      "Sheepscombe",
      "Uley",
      "North Nibley",
      "Stinchcombe",
      "Slimbridge",
      "Sharpness",
      "Kingswood",
      "Hillesley",
      "Coaley",
      "Horsley",
      "Nympsfield",
      "Randwick",
      "Whiteshill",
      "Frocester",
      "Whitminster",
      "Haresfield",
      "Hardwicke",
      "Upton St Leonards",
    ],
  },
  {
    district: "Tewkesbury",
    areas: [
      "Tewkesbury",
      "Bishop's Cleeve",
      "Winchcombe",
      "Churchdown",
      "Brockworth",
      "Innsworth",
      "Ashchurch",
      "Northway",
      "Highnam",
      "Shurdington",
      "Woodmancote",
      "Gotherington",
      "Toddington",
      "Alderton",
      "Gretton",
      "Twyning",
      "Staverton",
      "Down Hatherley",
      "Twigworth",
      "Coombe Hill",
      "Maisemore",
      "Minsterworth",
    ],
  },
  {
    district: "Cotswold",
    areas: [
      "Cirencester",
      "Tetbury",
      "Stow-on-the-Wold",
      "Moreton-in-Marsh",
      "Bourton-on-the-Water",
      "Chipping Campden",
      "Fairford",
      "Lechlade",
      "Northleach",
      "South Cerney",
      "Bibury",
      "Kemble",
      "Andoversford",
      "Birdlip",
      "Blockley",
      "Mickleton",
      "Willersey",
      "Lower Slaughter",
      "Upper Slaughter",
      "Naunton",
      "Guiting Power",
      "Temple Guiting",
      "Chedworth",
      "North Cerney",
      "Daglingworth",
      "Siddington",
      "Kempsford",
      "Quenington",
      "Coln St Aldwyns",
      "Avening",
      "Sapperton",
      "Didmarton",
      "Westonbirt",
      "Beverston",
      "Leighterton",
      "Bourton-on-the-Hill",
      "Longborough",
    ],
  },
  {
    district: "Forest of Dean",
    areas: [
      "Coleford",
      "Cinderford",
      "Lydney",
      "Newent",
      "Mitcheldean",
      "Drybrook",
      "Lydbrook",
      "Ruardean",
      "Littledean",
      "Soudley",
      "Newnham",
      "Blakeney",
      "Westbury-on-Severn",
      "Bream",
      "Yorkley",
      "Parkend",
      "St Briavels",
      "Clearwell",
      "Newland",
      "English Bicknor",
      "Tutshill",
      "Sedbury",
      "Woolaston",
      "Alvington",
      "Aylburton",
      "Longhope",
      "Huntley",
      "Churcham",
      "May Hill",
      "Dymock",
      "Kempley",
      "Redmarley D'Abitot",
      "Hartpury",
    ],
  },
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
      "Independent landscaping and garden-services business providing reliable garden improvements and maintenance across Gloucestershire.",
    email: "mikehamergardens@gmail.com",
    phone: {
      display: "07715 978631",
      international: "+44 7715 978631",
      href: "tel:+447715978631",
    },
    facebook: "https://www.facebook.com/p/Mike-Hamer-Gardens-100078705781176/",
    primaryLocation: {
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
      "Landscaping & Garden Services in Gloucestershire | Mike Hamer Gardens",
    description:
      "Landscaping, patios, fencing, turfing, garden clearance and maintenance across Gloucestershire. Contact Mike for a friendly quotation.",
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
