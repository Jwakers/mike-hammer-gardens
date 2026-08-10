import { HashLink } from "@/components/HashLink";
import { MhMonogram } from "@/components/MhMonogram";
import { siteConfig } from "@/config/site";

const sectionShell =
  "border-b border-border px-5 max-[560px]:px-5 lg:px-12 xl:px-20";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
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
            {exploreLinks.map((link) => (
              <HashLink
                key={link.href}
                href={link.href}
                className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
              >
                {link.label}
              </HashLink>
            ))}
          </div>
          <div className="flex w-full max-w-[240px] flex-col gap-3">
            <span className="font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-secondary">
              Contact
            </span>
            <a
              href={`tel:${siteConfig.business.phone.international}`}
              className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
            >
              {siteConfig.business.phone.display}
            </a>
            <a
              href={`mailto:${siteConfig.business.email}`}
              className="font-sans text-base font-medium leading-[26px] text-primary-foreground"
            >
              {siteConfig.business.email}
            </a>
            <a
              href={siteConfig.business.facebook}
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
      </div>
    </footer>
  );
}
