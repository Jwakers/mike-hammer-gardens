import Image from "next/image";
import Link from "next/link";

import { MhMonogram } from "@/components/MhMonogram";
import { SiteHeader } from "@/components/SiteHeader";

type FeaturedServiceItem = {
  name: string;
  tag?: string;
};

const featuredService = {
  eyebrow: "01 - Featured",
  title: "Landscaping and Transformations",
  image: "/images/service-stone-path.jpg",
  items: [
    { name: "Landscaping", tag: "Core" },
    { name: "Patio paving", tag: "Core" },
    { name: "Fencing", tag: "Core" },
    { name: "Turfing" },
    { name: "Seeding" },
  ] satisfies FeaturedServiceItem[],
};

const supportingServices = [
  {
    eyebrow: "02 - Maintenance",
    title: "Maintenance and Clearance",
    items: [
      "Grass cutting",
      "Hedge cutting",
      "Garden clearance",
      "Seasonal tidy-ups",
    ],
  },
  {
    eyebrow: "03 - Repairs & Cleaning",
    title: "Garden Repairs and Cleaning",
    items: [
      "Garden-related repairs",
      "Pressure washing",
      "General outdoor improvements",
    ],
  },
] as const;

const projects = [
  {
    category: "Landscaping",
    location: "Stroud",
    title: "Complete garden transformation",
    description:
      "A full garden refresh including planting, turf and improved outdoor structure for everyday family use.",
    image: "/images/project-garden.jpg",
    imagePosition: "72% 38%",
    featured: true,
  },
  {
    category: "Stone paving",
    location: "Near Stroud",
    title: "Natural stone path",
    description:
      "Irregular flagstone paving laid through planting for a durable, natural garden route.",
    image: "/images/project-stone-path.jpg",
    imagePosition: "50% 40%",
  },
  {
    category: "Fencing",
    location: "Local area",
    title: "Gate, fencing and turf",
    description:
      "Boundary gate and fencing work finished alongside new turf and outdoor structure.",
    image: "/images/project-gate.jpg",
    imagePosition: "45% 40%",
  },
];

const testimonials = [
  {
    quote:
      "Mike completely transformed our garden. He was reliable, tidy and kept us informed throughout the project. The finished result was exactly what we had hoped for.",
    name: "Customer Name",
    detail: "Stroud - Landscaping and patio",
    featured: true,
  },
  {
    quote:
      "From the first visit through to the completed work, everything was handled professionally. Mike arrived when agreed and left the garden clean and tidy.",
    name: "Customer Name",
    detail: "Stonehouse - Fencing and garden clearance",
  },
  {
    quote:
      "We have used Mike for both maintenance and larger garden improvements. The work is always completed to a high standard and communication is excellent.",
    name: "Customer Name",
    detail: "Local area - Garden maintenance",
  },
];

const aboutPoints = [
  "13 years of experience",
  "Direct communication with Mike",
  "Tidy and dependable workmanship",
];

const steps = [
  {
    label: "Step 01",
    title: "Tell Mike about the work",
    description:
      "Send an enquiry with a short description, postcode and photographs where possible.",
  },
  {
    label: "Step 02",
    title: "Discuss the garden",
    description:
      "Mike will get in touch to understand the work and arrange a visit where needed.",
  },
  {
    label: "Step 03",
    title: "Receive your quotation",
    description:
      "Once Mike has discussed or assessed the work, he will provide a clear quotation and explain the next steps.",
  },
];

const surroundingAreas = [
  "Stroud",
  "Stonehouse",
  "Nailsworth",
  "Minchinhampton",
  "Painswick",
  "Chalford",
];

const sectionShell =
  "border-b border-border px-5 max-[560px]:px-5 lg:px-12 xl:px-20";

const primaryButton =
  "inline-flex items-center justify-center bg-primary px-6 py-3.5 font-sans text-sm font-bold leading-5 text-primary-foreground transition-colors hover:bg-[#162B22] max-[560px]:w-full";

const secondaryButton =
  "inline-flex items-center justify-center border border-primary px-7 py-4 font-sans text-base font-semibold leading-[22px] text-primary transition-colors hover:border-[#162B22] hover:text-[#162B22] max-[560px]:w-full";

const textLink =
  "w-fit border-b border-primary font-sans text-base font-semibold leading-[26px] text-primary transition-colors hover:border-accent hover:text-accent";

const bodyMuted =
  "m-0 font-sans text-[17px] leading-body text-muted max-[560px]:text-base max-[560px]:leading-[1.55]";

const sectionHeading =
  "m-0 font-display text-[clamp(34px,4vw,40px)] font-medium leading-[1.2] tracking-tight text-foreground";

const coverImage = "object-cover";

const fieldInput =
  "min-h-[52px] w-full border border-border bg-background px-3.5 text-foreground";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section
        id="top"
        className={`${sectionShell} grid grid-cols-1 gap-6 pt-8 pb-[72px] max-[560px]:pb-[72px] lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-10 lg:py-16 lg:pb-20`}
      >
        <div className="flex flex-col justify-center gap-5 lg:gap-7">
          <div className="flex items-center gap-2.5 font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-accent max-[560px]:text-[12px] max-[560px]:tracking-[0.1em]">
            <span className="h-px w-6 shrink-0 bg-accent" />
            <span>Stroud · Gloucestershire</span>
          </div>
          <h1 className="m-0 font-display text-[34px] font-medium leading-[1.15] tracking-tight text-foreground lg:text-[clamp(48px,6vw,56px)] lg:leading-[1.1]">
            Reliable landscaping, built around your garden.
          </h1>
          <p className={`${bodyMuted} max-[560px]:text-base lg:text-lg lg:leading-[30px]`}>
            From patios and fencing to turfing, garden clearance and ongoing
            maintenance, Mike Hamer Gardens provides reliable outdoor improvements
            across Stroud and the surrounding areas.
          </p>
          <div className="flex flex-wrap gap-4 max-[560px]:flex-col">
            <Link href="#contact" className={primaryButton}>
              Request a Quote
            </Link>
            <Link href="#projects" className={secondaryButton}>
              View Recent Work
            </Link>
          </div>
          <div className="w-fit border border-border bg-surface px-[18px] py-4">
            <strong className="mb-1.5 block font-display text-xl font-medium leading-body tracking-[-0.01em] text-foreground">
              13 years&apos; experience
            </strong>
            <span className="font-sans text-xs font-medium leading-[18px] text-muted">
              Landscaping, maintenance and garden improvements
            </span>
          </div>
          <p className="m-0 font-sans text-sm font-medium leading-[22px] tracking-[0.01em] text-muted">
            Punctual service · Tidy workmanship · Clear communication
          </p>
        </div>

        <div className="order-first flex min-w-0 flex-col gap-3 max-[560px]:order-none lg:order-none">
          <div className="hidden items-center justify-between gap-3 font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-muted lg:flex">
            <span>Project · Dry stone walling</span>
            <span>Stroud</span>
          </div>
          <div className="relative min-h-[240px] overflow-hidden lg:min-h-[480px]">
            <Image
              src="/images/hero-stone-wall.jpg"
              alt="Completed dry stone wall overlooking the Stroud valley"
              fill
              priority
              className={coverImage}
              style={{ objectPosition: "50% 35%" }}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section
        id="services"
        className={`${sectionShell} bg-background py-[72px] lg:py-24`}
      >
        <div className="mb-10 flex flex-col items-start justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end">
          <div className="max-w-[720px]">
            <h2 className={sectionHeading}>Everything your garden needs.</h2>
            <p className={`${bodyMuted} mt-4`}>
              From complete garden improvements to regular maintenance, Mike
              provides practical, reliable help for outdoor spaces across Stroud.
            </p>
          </div>
          <Link href="#contact" className={textLink}>
            Explore All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 border-t border-border lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]">
          <article className="border-border pt-10 pr-0 lg:border-r lg:pr-10">
            <div className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-accent">
              {featuredService.eyebrow}
            </div>
            <h3 className="mt-2 mb-0 font-display text-[28px] font-medium leading-[34px] text-foreground">
              {featuredService.title}
            </h3>
            <div className="relative mt-6 min-h-[240px] overflow-hidden lg:min-h-[280px]">
              <Image
                src={featuredService.image}
                alt="Natural stone garden path through planting"
                fill
                className={coverImage}
                style={{ objectPosition: "50% 45%" }}
                sizes="(max-width: 900px) 100vw, 36vw"
              />
            </div>
            <ul className="mt-6 list-none p-0">
              {featuredService.items.map((item) => (
                <li
                  key={item.name}
                  className="flex min-h-[55px] items-center justify-between gap-4 border-b border-border font-sans text-base font-medium leading-[26px] text-foreground last:border-b-0"
                >
                  <span>{item.name}</span>
                  {item.tag ? (
                    <small className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.08em] text-accent">
                      {item.tag}
                    </small>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid lg:grid-rows-2">
            {supportingServices.map((group) => (
              <article
                key={group.title}
                className="border-t border-border pt-10 pl-0 first:border-t lg:border-t-0 lg:border-b lg:border-border lg:pl-10 lg:first:border-b lg:last:border-b-0"
              >
                <div className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-muted">
                  {group.eyebrow}
                </div>
                <h3 className="mt-2 mb-0 font-display text-2xl font-medium leading-[30px] text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-6 list-none p-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex min-h-[55px] items-center justify-between gap-4 border-b border-border font-sans text-base font-medium leading-[26px] text-foreground last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`${sectionShell} bg-sage-wash py-[72px] lg:py-24`}
      >
        <div className="mb-10 flex flex-col items-start justify-between gap-8 lg:mb-14 lg:flex-row lg:items-end">
          <div className="max-w-[720px]">
            <h2 className={sectionHeading}>Recent garden projects</h2>
            <p className={`${bodyMuted} mt-4`}>
              Explore landscaping, paving, fencing and maintenance work completed
              for homeowners across the local area.
            </p>
          </div>
          <Link href="#contact" className={textLink}>
            View All Projects
          </Link>
        </div>

        <article className="mb-8 grid grid-cols-1 gap-6 lg:mb-8 lg:grid-cols-[minmax(0,720px)_minmax(0,1fr)] lg:gap-10">
          <div className="relative min-h-[240px] overflow-hidden lg:min-h-[440px]">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className={coverImage}
              style={{ objectPosition: projects[0].imagePosition }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 py-4">
            <div className="flex items-center justify-between gap-3 font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-muted max-[560px]:text-[12px] max-[560px]:tracking-[0.1em]">
              <span className="text-accent">{projects[0].category}</span>
              <span>{projects[0].location}</span>
            </div>
            <h3 className="m-0 font-display text-2xl font-medium leading-[38px] text-foreground lg:text-[32px]">
              {projects[0].title}
            </h3>
            <p className="m-0 font-sans text-base leading-[26px] text-muted max-[560px]:text-base max-[560px]:leading-[1.55]">
              {projects[0].description}
            </p>
            <Link href="#contact" className={textLink}>
              View Project
            </Link>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.slice(1).map((project) => (
            <article key={project.title} className="flex flex-col gap-4">
              <div className="relative min-h-[240px] overflow-hidden lg:min-h-[280px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={coverImage}
                  style={{ objectPosition: project.imagePosition }}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div className="flex items-center justify-between gap-3 font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-muted max-[560px]:text-[12px] max-[560px]:tracking-[0.1em]">
                <span className="text-accent">{project.category}</span>
                <span>{project.location}</span>
              </div>
              <h3 className="m-0 font-display text-2xl font-medium leading-[30px] text-foreground">
                {project.title}
              </h3>
              <p className="m-0 font-sans text-base leading-[26px] text-muted max-[560px]:text-base max-[560px]:leading-[1.55]">
                {project.description}
              </p>
              <Link href="#contact" className={textLink}>
                View Project
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <div className="mb-12 max-w-[720px]">
          <h2 className={sectionHeading}>Trusted by local homeowners</h2>
          <p className={`${bodyMuted} mt-4`}>
            Reliable workmanship, clear communication and gardens left looking
            their best.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-border lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <article className="flex flex-col gap-7 border-border pt-10 pr-0 lg:border-r lg:pr-10">
            <p className="m-0 font-display text-[22px] leading-[1.4] tracking-[-0.01em] text-foreground lg:text-[26px] lg:leading-[38px]">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <div>
              <strong className="mb-1.5 block font-sans text-sm font-semibold leading-5 text-foreground">
                {testimonials[0].name}
              </strong>
              <span className="font-sans text-base leading-[26px] text-muted">
                {testimonials[0].detail}
              </span>
            </div>
          </article>

          <div className="grid lg:grid-rows-2">
            {testimonials.slice(1).map((testimonial) => (
              <article
                key={testimonial.detail}
                className="flex flex-col gap-5 border-t border-border pt-10 pb-9 pl-0 first:border-t lg:border-t-0 lg:border-b lg:border-border lg:pl-10 lg:first:border-b lg:last:border-b-0"
              >
                <p className="m-0 font-display text-lg leading-[1.5] tracking-[-0.01em] text-foreground lg:text-[20px] lg:leading-[30px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <strong className="mb-1.5 block font-sans text-sm font-semibold leading-5 text-foreground">
                    {testimonial.name}
                  </strong>
                  <span className="font-sans text-base leading-[26px] text-muted">
                    {testimonial.detail}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${sectionShell} grid grid-cols-1 items-center gap-10 py-[72px] lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-16 lg:py-24`}
      >
        <div className="relative min-h-[240px] overflow-hidden lg:min-h-[560px]">
          <Image
            src="/images/about-mike.jpg"
            alt="Lush garden planting and maintenance work"
            fill
            className={coverImage}
            sizes="(max-width: 900px) 100vw, 34vw"
          />
        </div>
        <div className="flex flex-col gap-7">
          <h2 className={sectionHeading}>
            Experienced work. Straightforward service.
          </h2>
          <div className="flex flex-col gap-4">
            <p className={bodyMuted}>
              Hi, I&apos;m Mike. I&apos;m a garden landscaper with 13 years of
              industry experience, providing landscaping, outdoor improvements and
              reliable garden maintenance across Stroud and the surrounding areas.
            </p>
            <p className={bodyMuted}>
              Whether you need a completely new look or a seasonal tidy-up, I
              provide punctual service, tidy workmanship and clear communication
              from the first conversation through to the finished job.
            </p>
          </div>
          <div className="border-t border-border">
            {aboutPoints.map((point, index) => (
              <div
                key={point}
                className="flex min-h-[59px] items-center gap-4 border-b border-border"
              >
                <span className="w-7 shrink-0 font-sans text-xs font-semibold leading-[18px] tracking-label text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="font-sans text-base font-medium leading-[22px]">
                  {point}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionShell} py-[72px] lg:py-24`}>
        <h2 className={`${sectionHeading} max-w-[560px]`}>
          Getting your garden project started
        </h2>
        <div className="mt-14 grid grid-cols-1 border-t border-border lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.label}
              className={`pt-9 ${
                index === 0
                  ? "lg:pr-8 lg:border-r lg:border-border"
                  : index === steps.length - 1
                    ? "mt-6 border-t border-border pt-6 lg:mt-0 lg:border-t-0 lg:pt-9 lg:pl-8"
                    : "mt-6 border-t border-border pt-6 lg:mt-0 lg:border-t-0 lg:border-r lg:border-border lg:px-8 lg:pt-9"
              }`}
            >
              <span className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-accent">
                {step.label}
              </span>
              <h3 className="mt-2 mb-0 font-display text-2xl font-medium leading-[30px] text-foreground">
                {step.title}
              </h3>
              <p className={`${bodyMuted} mt-4`}>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={`${sectionShell} grid grid-cols-1 items-center gap-10 bg-primary py-[72px] lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16 lg:py-20`}
      >
        <div>
          <h2 className="m-0 font-display text-[clamp(34px,4vw,40px)] font-medium leading-[1.2] tracking-tight text-primary-foreground">
            Landscaping services across Stroud
          </h2>
          <p className="mt-5 m-0 font-sans text-[17px] leading-body text-secondary max-[560px]:text-base max-[560px]:leading-[1.55]">
            Mike Hamer Gardens provides professional landscaping, garden
            maintenance and outdoor improvements throughout Stroud and the
            surrounding areas.
          </p>
          <div className="mt-5 border-t border-secondary/35 pt-3">
            <span className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-label text-secondary">
              Surrounding areas
            </span>
            <p className="mt-2 m-0 font-sans text-base leading-[26px] text-primary-foreground opacity-80">
              {surroundingAreas.join(" · ")}
            </p>
          </div>
        </div>

        <div className="flex min-h-[220px] min-w-0 items-stretch justify-stretch overflow-hidden lg:min-h-[280px]">
          <div className="relative min-h-[220px] w-full overflow-hidden bg-[#1a2e24] lg:min-h-[280px]">
            <Image
              src="/images/stroud-aerial.jpg"
              alt="Aerial view of Stroud and the surrounding countryside"
              fill
              className={coverImage}
              style={{ objectPosition: "50% 45%" }}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-end gap-2.5 bg-gradient-to-r from-primary/55 via-primary/15 to-primary/25 px-6 py-5">
              <span className="size-2.5 shrink-0 rounded-full bg-accent" />
              <span className="font-sans text-xs font-semibold uppercase leading-4 tracking-label text-primary-foreground">
                Stroud
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`${sectionShell} grid grid-cols-1 items-start gap-10 py-[72px] lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-16 lg:py-24`}
      >
        <div className="flex flex-col gap-7">
          <div>
            <h2 className={sectionHeading}>Ready to improve your garden?</h2>
            <p className={`${bodyMuted} mt-4`}>
              Tell Mike about the work you have in mind and arrange a friendly
              conversation or quotation.
            </p>
          </div>

          <div className="border-t border-border">
            <div className="border-b border-border py-[18px]">
              <span className="mb-1 block font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-muted">
                Phone
              </span>
              <a
                href="tel:07715978631"
                className="font-sans text-lg font-semibold leading-6 text-foreground"
              >
                07715 978631
              </a>
            </div>
            <div className="border-b border-border py-[18px]">
              <span className="mb-1 block font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-muted">
                Email
              </span>
              <a
                href="mailto:mikehamergardens@gmail.com"
                className="font-sans text-base font-medium leading-6 text-foreground"
              >
                mikehamergardens@gmail.com
              </a>
            </div>
            <div className="py-[18px]">
              <span className="mb-1 block font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-muted">
                Working hours
              </span>
              <p className="m-0 font-sans text-base font-medium leading-6 text-foreground">
                Monday to Friday · 8:00am-4:00pm
              </p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-5 border border-border bg-surface p-6 shadow-soft lg:p-9">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-sans text-sm font-semibold leading-5 text-foreground">
                Full name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={fieldInput}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-sans text-sm font-semibold leading-5 text-foreground">
                Email address
              </span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className={fieldInput}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-sans text-sm font-semibold leading-5 text-foreground">
                Phone number
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="07xxx xxx xxx"
                className={fieldInput}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-sans text-sm font-semibold leading-5 text-foreground">
                Postcode
              </span>
              <input
                type="text"
                name="postcode"
                placeholder="GL5"
                className={fieldInput}
              />
            </label>
          </div>
          <p className="-mt-1 m-0 font-sans text-xs font-medium leading-[18px] text-muted">
            Please provide at least one way for Mike to contact you.
          </p>
          <label className="flex flex-col gap-2">
            <span className="font-sans text-sm font-semibold leading-5 text-foreground">
              Service required
            </span>
            <select name="service" defaultValue="" className={fieldInput}>
              <option value="" disabled>
                Select a service
              </option>
              <option>Landscaping</option>
              <option>Patio paving</option>
              <option>Fencing</option>
              <option>Garden maintenance</option>
              <option>Garden clearance</option>
              <option>Pressure washing</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-sans text-sm font-semibold leading-5 text-foreground">
              Project description
            </span>
            <textarea
              name="description"
              rows={5}
              placeholder="Briefly describe the work you’d like done"
              className="min-h-[110px] w-full resize-y border border-border bg-background px-3.5 py-3.5 text-foreground"
            />
          </label>
          <label className="relative flex flex-col gap-2">
            <span className="font-sans text-sm font-semibold leading-5 text-foreground">
              Photos (optional)
            </span>
            <div className="flex w-full cursor-pointer gap-4 border-[1.5px] border-dashed border-primary bg-sage-wash px-[18px] py-4">
              <div className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-surface text-primary">
                <svg viewBox="0 0 18 18" aria-hidden="true" className="size-[18px]">
                  <path
                    d="M9 12.5V3.5M9 3.5L5.5 7M9 3.5L12.5 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 11.5v2c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <strong className="block font-sans text-sm font-semibold leading-5 text-foreground">
                  Add garden photos
                </strong>
                <span className="mt-1 block font-sans text-xs leading-[18px] text-muted">
                  Optional, but helpful when discussing your project · JPG, PNG or HEIC
                </span>
              </div>
            </div>
            <input
              type="file"
              name="photos"
              accept=".jpg,.jpeg,.png,.heic"
              multiple
              className="absolute h-px w-px overflow-hidden whitespace-nowrap [clip-path:inset(50%)]"
            />
          </label>
          <label className="flex flex-row items-start gap-2">
            <input
              type="checkbox"
              name="consent"
              className="mt-0.5 size-[18px] accent-primary"
            />
            <span className="font-sans text-sm font-normal leading-5 text-muted">
              I agree to be contacted about this enquiry. Mike will only use these
              details to respond to this request.
            </span>
          </label>
          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center border-0 bg-primary px-7 py-[18px] font-sans text-base font-bold leading-[22px] text-primary-foreground transition-colors hover:bg-[#162B22]"
          >
            Send Enquiry
          </button>
        </form>
      </section>

      <footer className={`${sectionShell} border-b-0 bg-foreground pt-16 pb-10`}>
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row">
          <div className="max-w-[320px]">
            <div className="mb-4 flex items-center gap-3">
              <MhMonogram
                width={28}
                height={28}
                primary="#A8B5A0"
                background="#2c2c2a"
              />
              <span className="font-display text-[20px] font-medium leading-6 text-primary-foreground">
                Mike Hamer Gardens
              </span>
            </div>
            <p className="m-0 font-sans text-base leading-[26px] text-secondary">
              Landscaping, garden maintenance and outdoor improvements across
              Stroud and the surrounding areas.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="flex w-full max-w-[240px] flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-secondary">
                Explore
              </span>
              <Link
                href="#top"
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                Contact
              </Link>
            </div>
            <div className="flex w-full max-w-[240px] flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-secondary">
                Contact
              </span>
              <a
                href="tel:07715978631"
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                07715 978631
              </a>
              <a
                href="mailto:mikehamergardens@gmail.com"
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                mikehamergardens@gmail.com
              </a>
              <p className="m-0 font-sans text-base leading-[26px] text-secondary">
                Stroud and surrounding areas
              </p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-secondary/25 pt-6 lg:flex-row lg:items-center">
          <p className="m-0 font-sans text-base leading-[26px] text-secondary">
            © 2026 Mike Hamer Gardens. All rights reserved.
          </p>
          <Link
            href="#contact"
            className="font-sans text-base leading-[26px] text-secondary"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
