"use client";

import { useForm, ValidationError } from "@formspree/react";

const fieldInput =
  "min-h-[52px] w-full border border-border bg-background px-3.5 text-foreground";

const fieldError =
  "m-0 font-sans text-xs font-medium leading-[18px] text-red-700";

export function EnquiryForm() {
  const [state, handleSubmit] = useForm("xoeaqbdo");

  if (state.succeeded) {
    return (
      <div className="flex flex-col gap-4 border border-border bg-surface p-6 shadow-soft lg:p-9">
        <h3 className="m-0 font-display text-2xl font-medium leading-[30px] text-foreground">
          Enquiry sent
        </h3>
        <p className="m-0 font-sans text-[17px] leading-body text-muted">
          Thanks for getting in touch. Mike will reply as soon as he can.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border border-border bg-surface p-6 shadow-soft lg:p-9"
    >
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
            Email address
          </span>
          <input
            type="email"
            id="email"
            name="email"
            required
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
            Phone number
          </span>
          <input
            type="tel"
            id="phone"
            name="phone"
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
      <p className="-mt-1 m-0 font-sans text-xs font-medium leading-[18px] text-muted">
        A phone number is helpful if Mike needs to discuss the work quickly.
      </p>
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
          <option value="Landscaping">Landscaping</option>
          <option value="Patio paving">Patio paving</option>
          <option value="Fencing">Fencing</option>
          <option value="Garden maintenance">Garden maintenance</option>
          <option value="Garden clearance">Garden clearance</option>
          <option value="Pressure washing">Pressure washing</option>
        </select>
        <ValidationError
          prefix="Service"
          field="service"
          errors={state.errors}
          className={fieldError}
        />
      </label>
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
      <ValidationError errors={state.errors} className={fieldError} />
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
