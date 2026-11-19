import { EnquiryForm } from "@/components/EnquiryForm";
import { siteConfig } from "@/config/site";

const sectionShell = "border-b border-border px-5 max-[560px]:px-5 lg:px-12 xl:px-20";
const sectionHeading = "m-0 font-display text-[clamp(34px,4vw,40px)] font-medium leading-[1.2] tracking-tight text-foreground";
const bodyMuted = "m-0 font-sans text-[17px] leading-body text-muted max-[560px]:text-base max-[560px]:leading-[1.55]";

export function ContactSection() {
  return (
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
                href={siteConfig.business.phone.href}
                className="font-sans text-base font-medium leading-6 text-foreground"
              >
                {siteConfig.business.phone.display}
              </a>
            </div>
            <div className="border-b border-border py-[18px]">
              <span className="mb-1 block font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-muted">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.business.email}`}
                className="font-sans text-base font-medium leading-6 text-foreground"
              >
                {siteConfig.business.email}
              </a>
            </div>
            <div className="py-[18px]">
              <span className="mb-1 block font-sans text-xs font-semibold uppercase leading-[18px] tracking-[0.1em] text-muted">
                Working hours
              </span>
              <p className="m-0 font-sans text-base font-medium leading-6 text-foreground">
                {siteConfig.business.openingHours.display}
              </p>
            </div>
          </div>
        </div>

        <EnquiryForm
          formId={siteConfig.form.formspreeId}
          allowFileUploads={siteConfig.form.allowFileUploads}
        />
      </section>
  );
}
