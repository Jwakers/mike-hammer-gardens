"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { MhMonogram } from "@/components/MhMonogram";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

const sectionShell =
  "border-b border-border px-5 max-[560px]:px-5 lg:px-12 xl:px-20";

const primaryButton =
  "inline-flex items-center justify-center bg-primary px-6 py-3.5 font-sans text-sm font-bold leading-5 text-primary-foreground transition-colors hover:bg-[#162B22]";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus({ preventScroll: true });
      }
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 900px)").matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "clip";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const firstLink = panelRef.current.querySelector<HTMLElement>("a");
    firstLink?.focus({ preventScroll: true });
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Opaque chrome stays above the backdrop so the bar + panel never dim */}
      <div className={`${sectionShell} relative z-50 bg-background`}>
        <div className="flex items-center justify-between gap-6 py-[18px] lg:py-[22px]">
          <Link
            href="#top"
            className="inline-flex min-w-0 items-center gap-2.5 lg:gap-3.5"
            aria-label="Mike Hamer Gardens home"
            onClick={closeMenu}
          >
            <span className="hidden shrink-0 lg:inline-flex">
              <MhMonogram width={36} height={36} />
            </span>
            <span className="inline-flex shrink-0 lg:hidden">
              <MhMonogram width={22} height={22} />
            </span>
            <span className="truncate font-display text-[17px] font-medium leading-none tracking-[-0.015em] text-foreground sm:text-lg lg:text-xl lg:leading-[1.1]">
              Mike Hamer Gardens
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-3 lg:gap-9">
            <nav
              className="hidden items-center gap-7 font-sans text-sm leading-[22px] text-muted lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.href === "#top"
                      ? "font-medium text-foreground"
                      : "font-medium"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-primary px-4 py-2.5 font-sans text-sm font-bold leading-5 text-primary-foreground transition-colors hover:bg-[#162B22]"
                onClick={closeMenu}
              >
                Quote
              </Link>
              <button
                ref={buttonRef}
                type="button"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-foreground"
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                {/* Fixed 22×14 box — both bars rotate from center into a clean X */}
                <span
                  className="relative block h-3.5 w-[22px]"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute left-0 top-0 block h-0.5 w-full origin-center bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                      open ? "translate-y-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 block h-0.5 w-full bg-foreground transition-opacity duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 block h-0.5 w-full origin-center bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                      open ? "-translate-y-1.5 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>

            <Link href="#contact" className={`${primaryButton} max-lg:hidden`}>
              Request a Quote
            </Link>
          </div>
        </div>

        <div
          id={menuId}
          className="grid transition-[grid-template-rows] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:hidden"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <nav
              ref={panelRef}
              className="border-t border-border px-0 pb-7 pt-1 transition-[opacity,transform] duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
              aria-label="Mobile"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-6px)",
                transitionDelay: open ? "40ms" : "0ms",
                pointerEvents: open ? "auto" : "none",
              }}
            >
              <ul className="m-0 flex list-none flex-col p-0">
                {navLinks.map((link) => (
                  <li key={link.href} className="border-b border-border">
                    <Link
                      href={link.href}
                      tabIndex={open ? undefined : -1}
                      className="block py-4 font-sans text-base font-medium leading-[26px] text-foreground transition-colors hover:text-accent"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                tabIndex={open ? undefined : -1}
                className={`${primaryButton} mt-6 w-full`}
                onClick={closeMenu}
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Backdrop sits under the chrome; only dims page content */}
      <div
        className={`fixed inset-0 z-40 bg-[rgba(44,44,42,0.28)] transition-opacity duration-[280ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </header>
  );
}
