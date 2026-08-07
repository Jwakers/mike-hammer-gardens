"use client";

import { useForm, ValidationError } from "@formspree/react";
import { type FormEvent, useEffect, useRef, useState } from "react";

const fieldInput =
  "min-h-[52px] w-full border border-border bg-background px-3.5 text-foreground";

const fieldError =
  "m-0 font-sans text-xs font-medium leading-[18px] text-red-700";

type EnquiryFormProps = {
  formId: string;
  services: readonly string[];
  allowFileUploads?: boolean;
};

export function EnquiryForm({
  formId,
  services,
  allowFileUploads = false,
}: EnquiryFormProps) {
  const [state, handleSubmit] = useForm(formId);
  const [contactError, setContactError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const formRegionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!state.succeeded) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    formRegionRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [state.succeeded]);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!email && !phone) {
      event.preventDefault();
      setContactError("Enter an email address or phone number so Mike can reply.");
      emailRef.current?.focus();
      return;
    }

    setContactError("");
    handleSubmit(event);
  }

  if (state.succeeded) {
    return (
      <div
        ref={formRegionRef}
        className="flex flex-col gap-4 border border-border bg-surface p-6 shadow-soft lg:p-9"
        role="status"
        aria-live="polite"
      >
        <h3 className="m-0 font-display text-2xl font-medium leading-[30px] text-foreground">
          Enquiry sent
        </h3>
        <p className="m-0 font-sans text-[17px] leading-body text-muted">
          Thanks for getting in touch. Mike will use the contact details you
          provided to respond to your enquiry.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submitEnquiry}
      className="flex flex-col gap-5 border border-border bg-surface p-6 shadow-soft lg:p-9"
      aria-busy={state.submitting}
    >
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-sans text-sm font-semibold leading-5 text-foreground">
            Full name
          </span>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldInput}
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className={fieldError}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-sans text-sm font-semibold leading-5 text-foreground">
            Email address{" "}
            <span className="font-normal text-muted">
              (email or phone required)
            </span>
          </span>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            aria-invalid={contactError ? true : undefined}
            aria-describedby={`contact-help${contactError ? " contact-error" : ""}`}
            onInput={() => setContactError("")}
            placeholder="you@example.com"
            className={fieldInput}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={fieldError}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-sans text-sm font-semibold leading-5 text-foreground">
            Phone number{" "}
            <span className="font-normal text-muted">
              (email or phone required)
            </span>
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            aria-invalid={contactError ? true : undefined}
            aria-describedby={`contact-help${contactError ? " contact-error" : ""}`}
            onInput={() => setContactError("")}
            placeholder="07xxx xxx xxx"
            className={fieldInput}
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
            className={fieldError}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-sans text-sm font-semibold leading-5 text-foreground">
            Postcode
          </span>
          <input
            type="text"
            id="postcode"
            name="postcode"
            required
            autoComplete="postal-code"
            inputMode="text"
            placeholder="GL5"
            className={fieldInput}
          />
          <ValidationError
            prefix="Postcode"
            field="postcode"
            errors={state.errors}
            className={fieldError}
          />
        </label>
      </div>
      <p
        id="contact-help"
        className="-mt-1 m-0 font-sans text-xs font-medium leading-[18px] text-muted"
      >
        Provide at least one contact method. A phone number can help Mike discuss
        the work with you.
      </p>
      {contactError ? (
        <p id="contact-error" className={fieldError} role="alert">
          {contactError}
        </p>
      ) : null}
      <label className="flex flex-col gap-2">
        <span className="font-sans text-sm font-semibold leading-5 text-foreground">
          Service required
        </span>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={fieldInput}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <ValidationError
          prefix="Service"
          field="service"
          errors={state.errors}
          className={fieldError}
        />
      </label>
      {allowFileUploads ? (
        <label className="flex flex-col gap-2">
          <span className="font-sans text-sm font-semibold leading-5 text-foreground">
            Photographs{" "}
            <span className="font-normal text-muted">(optional)</span>
          </span>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/jpeg,image/png,image/webp"
            multiple
            className="min-h-[52px] w-full border border-border bg-background px-3.5 py-3 text-foreground file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2 file:font-sans file:text-sm file:font-semibold file:text-primary-foreground"
            aria-describedby="photos-help"
          />
          <span
            id="photos-help"
            className="font-sans text-xs font-medium leading-[18px] text-muted"
          >
            Add JPG, PNG or WebP images if they help explain the work.
          </span>
          <ValidationError
            prefix="Photographs"
            field="photos"
            errors={state.errors}
            className={fieldError}
          />
        </label>
      ) : null}
      <label className="flex flex-col gap-2">
        <span className="font-sans text-sm font-semibold leading-5 text-foreground">
          Project description
        </span>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Briefly describe the work you’d like done"
          className="min-h-[110px] w-full resize-y border border-border bg-background px-3.5 py-3.5 text-foreground"
        />
        <ValidationError
          prefix="Description"
          field="description"
          errors={state.errors}
          className={fieldError}
        />
      </label>
      <label className="flex flex-row items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          value="yes"
          className="mt-0.5 size-[18px] accent-primary"
        />
        <span className="font-sans text-sm font-normal leading-5 text-muted">
          I agree to be contacted about this enquiry. Mike will only use these
          details to respond to this request.
        </span>
      </label>
      <ValidationError
        prefix="Consent"
        field="consent"
        errors={state.errors}
        className={fieldError}
      />
      <div aria-live="polite">
        <ValidationError errors={state.errors} className={fieldError} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full cursor-pointer items-center justify-center border-0 bg-primary px-7 py-[18px] font-sans text-base font-bold leading-[22px] text-primary-foreground transition-colors hover:bg-[#162B22] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.submitting ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
