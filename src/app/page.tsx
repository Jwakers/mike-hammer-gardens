import Image from "next/image";
import Link from "next/link";

import { MhMonogram } from "@/components/MhMonogram";

import styles from "./page.module.css";

type FeaturedServiceItem = {
  name: string;
  tag?: string;
};

const featuredService = {
  eyebrow: "01 - Featured",
  title: "Landscaping and Transformations",
  image: "/images/service-feature.jpg",
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
    image: "/images/project-feature.jpg",
    featured: true,
  },
  {
    category: "Patio paving",
    location: "Near Stroud",
    title: "New patio and paving",
    description:
      "Natural stone paving laid for a durable outdoor seating area with clean finished edges.",
    image: "/images/project-patio.jpg",
  },
  {
    category: "Fencing",
    location: "Local area",
    title: "Fencing and garden clearance",
    description:
      "Boundary fencing installed after clearance, leaving a tidy, secure and usable outdoor space.",
    image: "/images/project-fencing.jpg",
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

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="#top" className={styles.brand} aria-label="Mike Hamer Gardens home">
          <span className={styles.brandDesktop}>
            <MhMonogram width={36} height={36} />
          </span>
          <span className={styles.brandMobile}>
            <MhMonogram width={22} height={22} />
          </span>
          <span className={styles.brandText}>Mike Hamer Gardens</span>
        </Link>

        <div className={styles.headerActions}>
          <nav className={styles.desktopNav} aria-label="Primary">
            <Link href="#top">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <div className={styles.mobileActions}>
            <Link href="#contact" className={styles.mobileQuote}>
              Quote
            </Link>
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </div>

          <Link href="#contact" className={styles.primaryButton}>
            Request a Quote
          </Link>
        </div>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.locationLabel}>
            <span className={styles.locationLine} />
            <span>Stroud · Gloucestershire</span>
          </div>
          <h1>Reliable landscaping, built around your garden.</h1>
          <p className={styles.heroLead}>
            From patios and fencing to turfing, garden clearance and ongoing
            maintenance, Mike Hamer Gardens provides reliable outdoor improvements
            across Stroud and the surrounding areas.
          </p>
          <div className={styles.heroCtas}>
            <Link href="#contact" className={styles.primaryButton}>
              Request a Quote
            </Link>
            <Link href="#projects" className={styles.secondaryButton}>
              View Recent Work
            </Link>
          </div>
          <div className={styles.experienceCard}>
            <strong>13 years&apos; experience</strong>
            <span>Landscaping, maintenance and garden improvements</span>
          </div>
          <p className={styles.trustLine}>
            Punctual service · Tidy workmanship · Clear communication
          </p>
        </div>

        <div className={styles.heroMedia}>
          <div className={styles.heroMeta}>
            <span>Project · Patio &amp; planting</span>
            <span>Stroud</span>
          </div>
          <div className={styles.heroImageWrap}>
            <Image
              src="/images/hero.jpg"
              alt="Freshly landscaped garden with a new lawn and patio"
              fill
              priority
              className={styles.coverImage}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.sectionIntro}>
          <div>
            <h2>Everything your garden needs.</h2>
            <p>
              From complete garden improvements to regular maintenance, Mike
              provides practical, reliable help for outdoor spaces across Stroud.
            </p>
          </div>
          <Link href="#contact" className={styles.textLink}>
            Explore All Services
          </Link>
        </div>

        <div className={styles.servicesGrid}>
          <article className={styles.featureService}>
            <div className={styles.eyebrow}>{featuredService.eyebrow}</div>
            <h3>{featuredService.title}</h3>
            <div className={styles.featureServiceImage}>
              <Image
                src={featuredService.image}
                alt="Contemporary landscaped garden project"
                fill
                className={styles.coverImage}
                sizes="(max-width: 900px) 100vw, 36vw"
              />
            </div>
            <ul className={styles.serviceList}>
              {featuredService.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  {item.tag ? <small>{item.tag}</small> : null}
                </li>
              ))}
            </ul>
          </article>

          <div className={styles.supportingServices}>
            {supportingServices.map((group) => (
              <article key={group.title} className={styles.supportingService}>
                <div className={styles.supportingEyebrow}>{group.eyebrow}</div>
                <h3>{group.title}</h3>
                <ul className={styles.plainServiceList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projectsSection}>
        <div className={styles.sectionIntro}>
          <div>
            <h2>Recent garden projects</h2>
            <p>
              Explore landscaping, paving, fencing and maintenance work completed
              for homeowners across the local area.
            </p>
          </div>
          <Link href="#contact" className={styles.textLink}>
            View All Projects
          </Link>
        </div>

        <article className={styles.featureProject}>
          <div className={styles.featureProjectImage}>
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className={styles.coverImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.featureProjectCopy}>
            <div className={styles.projectMeta}>
              <span>{projects[0].category}</span>
              <span>{projects[0].location}</span>
            </div>
            <h3>{projects[0].title}</h3>
            <p>{projects[0].description}</p>
            <Link href="#contact" className={styles.textLink}>
              View Project
            </Link>
          </div>
        </article>

        <div className={styles.projectGrid}>
          {projects.slice(1).map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectCardImage}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.coverImage}
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </div>
              <div className={styles.projectMeta}>
                <span>{project.category}</span>
                <span>{project.location}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link href="#contact" className={styles.textLink}>
                View Project
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeadingWide}>
          <h2>Trusted by local homeowners</h2>
          <p>
            Reliable workmanship, clear communication and gardens left looking
            their best.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          <article className={styles.featureTestimonial}>
            <p>&ldquo;{testimonials[0].quote}&rdquo;</p>
            <div>
              <strong>{testimonials[0].name}</strong>
              <span>{testimonials[0].detail}</span>
            </div>
          </article>

          <div className={styles.supportingTestimonials}>
            {testimonials.slice(1).map((testimonial) => (
              <article key={testimonial.detail} className={styles.supportingTestimonial}>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutImageWrap}>
          <Image
            src="/images/about-mike.jpg"
            alt="Lush garden planting and maintenance work"
            fill
            className={styles.coverImage}
            sizes="(max-width: 900px) 100vw, 34vw"
          />
        </div>
        <div className={styles.aboutCopy}>
          <h2>Experienced work. Straightforward service.</h2>
          <div className={styles.aboutBody}>
            <p>
              Hi, I&apos;m Mike. I&apos;m a garden landscaper with 13 years of
              industry experience, providing landscaping, outdoor improvements and
              reliable garden maintenance across Stroud and the surrounding areas.
            </p>
            <p>
              Whether you need a completely new look or a seasonal tidy-up, I
              provide punctual service, tidy workmanship and clear communication
              from the first conversation through to the finished job.
            </p>
          </div>
          <div className={styles.aboutPoints}>
            {aboutPoints.map((point, index) => (
              <div key={point} className={styles.aboutPoint}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{point}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <h2>Getting your garden project started</h2>
        <div className={styles.processGrid}>
          {steps.map((step) => (
            <article key={step.label} className={styles.processCard}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.areaSection}>
        <div className={styles.areaCopy}>
          <h2>Landscaping services across Stroud</h2>
          <p>
            Mike Hamer Gardens provides professional landscaping, garden
            maintenance and outdoor improvements throughout Stroud and the
            surrounding areas.
          </p>
          <div className={styles.areaListBlock}>
            <span>Surrounding areas</span>
            <p>{surroundingAreas.join(" · ")}</p>
          </div>
        </div>

        <div className={styles.mapPanel} aria-hidden="true">
          <svg viewBox="0 0 420 240" className={styles.mapGraphic}>
            <path
              d="M20 180 C80 140, 120 200, 180 120 C220 70, 260 160, 320 90 C360 50, 390 100, 400 60"
              fill="none"
              stroke="#A8B5A0"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M40 200 C100 160, 140 210, 200 140 C250 90, 280 170, 340 110 C370 80, 395 120, 410 90"
              fill="none"
              stroke="#A8B5A0"
              opacity="0.35"
            />
            <path
              d="M10 160 C70 120, 110 180, 170 100 C210 55, 250 145, 310 75 C350 40, 380 85, 405 45"
              fill="none"
              stroke="#A8B5A0"
              opacity="0.25"
            />
            <circle cx="210" cy="120" r="8" fill="#A66B4F" />
            <circle cx="210" cy="120" r="18" fill="none" stroke="#A66B4F" opacity="0.5" />
            <text x="228" y="126" fill="#F2F0EB" fontSize="13" fontWeight="600">
              Stroud
            </text>
          </svg>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactIntro}>
          <div>
            <h2>Ready to improve your garden?</h2>
            <p>
              Tell Mike about the work you have in mind and arrange a friendly
              conversation or quotation.
            </p>
          </div>

          <div className={styles.contactDetails}>
            <div>
              <span>Phone</span>
              <a href="tel:07715978631">07715 978631</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:mikehamergardens@gmail.com">
                mikehamergardens@gmail.com
              </a>
            </div>
            <div>
              <span>Working hours</span>
              <p>Monday to Friday · 8:00am-4:00pm</p>
            </div>
          </div>
        </div>

        <form className={styles.contactForm}>
          <div className={styles.twoCol}>
            <label>
              <span>Full name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email address</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
          </div>
          <div className={styles.twoCol}>
            <label>
              <span>Phone number</span>
              <input type="tel" name="phone" placeholder="07xxx xxx xxx" />
            </label>
            <label>
              <span>Postcode</span>
              <input type="text" name="postcode" placeholder="GL5" />
            </label>
          </div>
          <p className={styles.helperText}>
            Please provide at least one way for Mike to contact you.
          </p>
          <label>
            <span>Service required</span>
            <select name="service" defaultValue="">
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
          <label>
            <span>Project description</span>
            <textarea
              name="description"
              rows={5}
              placeholder="Briefly describe the work you’d like done"
            />
          </label>
          <label className={styles.fileUpload}>
            <span>Photos (optional)</span>
            <div className={styles.uploadDropzone}>
              <div className={styles.uploadIcon}>
                <svg viewBox="0 0 18 18" aria-hidden="true">
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
                <strong>Add garden photos</strong>
                <span>
                  Optional, but helpful when discussing your project · JPG, PNG or HEIC
                </span>
              </div>
            </div>
            <input type="file" name="photos" accept=".jpg,.jpeg,.png,.heic" multiple />
          </label>
          <label className={styles.checkboxRow}>
            <input type="checkbox" name="consent" />
            <span>
              I agree to be contacted about this enquiry. Mike will only use these
              details to respond to this request.
            </span>
          </label>
          <button type="submit" className={styles.submitButton}>
            Send Enquiry
          </button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogoRow}>
              <MhMonogram width={28} height={28} primary="#A8B5A0" background="#2c2c2a" />
              <span>Mike Hamer Gardens</span>
            </div>
            <p>
              Landscaping, garden maintenance and outdoor improvements across
              Stroud and the surrounding areas.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div>
              <span>Explore</span>
              <Link href="#top">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div>
              <span>Contact</span>
              <a href="tel:07715978631">07715 978631</a>
              <a href="mailto:mikehamergardens@gmail.com">mikehamergardens@gmail.com</a>
              <p>Stroud and surrounding areas</p>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 Mike Hamer Gardens. All rights reserved.</p>
          <Link href="#contact">Privacy Policy</Link>
        </div>
      </footer>
    </main>
  );
}
