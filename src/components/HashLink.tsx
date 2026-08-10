"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type HashLinkProps = ComponentProps<typeof Link>;

function resolveHref(href: HashLinkProps["href"]): string | null {
  if (typeof href === "string") return href;
  if (typeof href === "object" && href !== null) {
    const pathname = href.pathname ?? "";
    const hash = href.hash ?? "";
    if (!hash) return pathname || null;
    return `${pathname}${hash.startsWith("#") ? hash : `#${hash}`}`;
  }
  return null;
}

function getHash(href: string): string | null {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  const hash = href.slice(hashIndex);
  return hash.length > 1 ? hash : null;
}

function getPath(href: string): string {
  const hashIndex = href.indexOf("#");
  const withoutHash = hashIndex === -1 ? href : href.slice(0, hashIndex);
  return withoutHash === "" ? "/" : withoutHash;
}

function scrollToHash(hash: string) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  document.querySelector(hash)?.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (props.target && props.target !== "_self") return;

    const resolved = resolveHref(href);
    if (!resolved) return;

    const hash = getHash(resolved);
    if (!hash) return;

    const targetPath = getPath(resolved);
    if (targetPath !== pathname) return;

    // Same-page hash links: always smooth-scroll via JS (never html scroll-behavior).
    event.preventDefault();
    scrollToHash(hash);

    if (window.location.hash !== hash) {
      window.history.pushState(null, "", `${pathname}${hash}`);
    }
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
