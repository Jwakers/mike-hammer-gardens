export const galleryFilters = [
  "All work",
  "Stone walling",
  "Hard landscaping",
  "Timber work",
  "Clearance",
  "Fencing",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export type GalleryTag = Exclude<GalleryFilter, "All work">;

export type BeforeAfterPair = {
  id: string;
  title: string;
  tags: readonly [GalleryTag, GalleryTag] | readonly [GalleryTag];
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  featured?: boolean;
};

export type GalleryPhoto = {
  id: string;
  title: string;
  description: string;
  tags: readonly GalleryTag[];
  src: string;
  alt: string;
  imagePosition?: string;
  featured?: boolean;
};

export const beforeAfterPairs: readonly BeforeAfterPair[] = [
  {
    id: "fence",
    title: "Overgrowth cleared → new fencing",
    tags: ["Clearance", "Fencing"],
    beforeSrc: "/images/site-work/pair-fence-before.png",
    afterSrc: "/images/site-work/pair-fence-after.png",
    beforeAlt: "Overgrown boundary with dense vegetation against a brick wall",
    afterAlt: "Cleared boundary with new timber panel fencing",
    featured: true,
  },
  {
    id: "stonewall",
    title: "Dry stone wall rebuild",
    tags: ["Stone walling"],
    beforeSrc: "/images/site-work/pair-stonewall-before.jpg",
    afterSrc: "/images/site-work/pair-stonewall-after.jpg",
    beforeAlt: "Collapsed dry stone wall under trees",
    afterAlt: "Rebuilt dry stone wall built around tree trunks",
  },
  {
    id: "steps",
    title: "Timber steps in dry stone",
    tags: ["Timber work", "Stone walling"],
    beforeSrc: "/images/site-work/pair-steps-before.jpg",
    afterSrc: "/images/site-work/pair-steps-after.jpg",
    beforeAlt: "Weathered timber steps set into a dry stone wall",
    afterAlt: "New light timber steps set into a dry stone wall",
  },
  {
    id: "tiered",
    title: "Tiered garden refresh",
    tags: ["Hard landscaping"],
    beforeSrc: "/images/site-work/pair-tiered-before.jpg",
    afterSrc: "/images/site-work/pair-tiered-after.jpg",
    beforeAlt: "Bare gravel and concrete patio area before works",
    afterAlt: "Finished tiered garden with turf, gate and stone steps",
  },
  {
    id: "frontgarden",
    title: "Front garden → paved seating",
    tags: ["Hard landscaping"],
    beforeSrc: "/images/site-work/pair-frontgarden-before.jpg",
    afterSrc: "/images/site-work/pair-frontgarden-after.jpg",
    beforeAlt: "Front garden planting bed before paving",
    afterAlt: "Flagstone paved seating area with timber bench",
  },
];

export const galleryPhotos: readonly GalleryPhoto[] = [
  {
    id: "tiered-featured",
    title: "Tiered garden with valley view",
    description:
      "Fresh turf, stone steps and a wrought-iron gate looking out over the Stroud hills.",
    tags: ["Hard landscaping"],
    src: "/images/site-work/hero-tiered-garden.jpg",
    alt: "Tiered garden with new turf, gravel and wooden steps",
    imagePosition: "50% 40%",
    featured: true,
  },
  {
    id: "stone-detail",
    title: "Dry stone detail",
    description: "Craftsmanship built around living trees",
    tags: ["Stone walling"],
    src: "/images/site-work/hero-stonewall-detail.jpg",
    alt: "Rebuilt dry stone wall built around tree trunks",
    imagePosition: "50% 40%",
  },
  {
    id: "raised-valley",
    title: "Raised beds + valley",
    description: "Sleeper beds overlooking the hills",
    tags: ["Timber work"],
    src: "/images/site-work/hero-raised-beds-view.jpg",
    alt: "Timber raised garden beds overlooking a green valley",
    imagePosition: "50% 35%",
  },
  {
    id: "patio-hills",
    title: "Patio overlooking hills",
    description: "Seating and patio area with open views",
    tags: ["Hard landscaping"],
    src: "/images/site-work/hero-patio-hills.jpg",
    alt: "Raised stone patio with wooden bench overlooking hills",
    imagePosition: "50% 45%",
  },
  {
    id: "flagstone",
    title: "Flagstone + retaining wall",
    description: "Natural stone paving with dry-stone structure",
    tags: ["Hard landscaping", "Stone walling"],
    src: "/images/site-work/project-flagstone-patio.jpg",
    alt: "Wet flagstone patio beside a dry stone retaining wall",
    imagePosition: "50% 45%",
  },
  {
    id: "raised-patio",
    title: "Raised stone patio",
    description: "Clean masonry lines and level platforms",
    tags: ["Hard landscaping"],
    src: "/images/site-work/hero-raised-patio.jpg",
    alt: "Square raised stone patio platform",
    imagePosition: "50% 50%",
  },
  {
    id: "sleeper-beds",
    title: "Timber sleeper beds",
    description: "Structure and material quality up close",
    tags: ["Timber work"],
    src: "/images/site-work/hero-raised-beds-timber.jpg",
    alt: "Long timber sleeper raised beds filled with soil",
    imagePosition: "50% 50%",
  },
];

export function matchesFilter(
  tags: readonly GalleryTag[],
  filter: GalleryFilter,
): boolean {
  if (filter === "All work") return true;
  return tags.includes(filter);
}
