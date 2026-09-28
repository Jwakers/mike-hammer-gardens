"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { HashLink } from "@/components/HashLink";
import {
  beforeAfterPairs,
  galleryPhotos,
  matchesFilter,
  type GalleryFilter,
} from "@/config/gallery";

const sectionShell =
  "border-b border-border px-5 max-[560px]:px-5 lg:px-12 xl:px-20";

const primaryButton =
  "inline-flex items-center justify-center bg-primary px-6 py-3.5 font-sans text-sm font-bold leading-5 text-primary-foreground transition-colors hover:bg-[#162B22] max-[560px]:w-full";

const bodyMuted =
  "m-0 font-sans text-[17px] leading-body text-muted max-[560px]:text-base max-[560px]:leading-[1.55]";

const sectionHeading =
  "m-0 font-display text-[clamp(34px,4vw,40px)] font-medium leading-[1.2] tracking-tight text-foreground";

function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {tags.map((tag, index) => (
        <span
          key={tag}
          className={`font-sans text-[12px] font-semibold uppercase leading-4 tracking-label ${
            index === 0 ? "text-accent" : "text-muted"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ImageTag({ label }: { label: string }) {
  return (
    <span className="bg-surface px-2.5 py-1.5 font-sans text-[11px] font-bold uppercase leading-[14px] tracking-label text-accent">
      {label}
    </span>
  );
}

export function GalleryPageContent() {
  const [filter, setFilter] = useState<GalleryFilter>("All work");

  const pairs = useMemo(
    () => beforeAfterPairs.filter((pair) => matchesFilter(pair.tags, filter)),
    [filter],
  );

  const photos = useMemo(
    () => galleryPhotos.filter((photo) => matchesFilter(photo.tags, filter)),
    [filter],
  );

  const explicitlyFeaturedPairs = pairs.filter((pair) => pair.featured);
  const featuredPairs =
    explicitlyFeaturedPairs.length > 0
      ? explicitlyFeaturedPairs
      : pairs.slice(0, 1);
  const featuredPairIds = new Set(featuredPairs.map((pair) => pair.id));
  const supportingPairs = pairs.filter(
    (pair) => !featuredPairIds.has(pair.id),
  );
  const featuredPhoto = photos.find((photo) => photo.featured) ?? photos[0];
  const gridPhotos = photos.filter((photo) => photo.id !== featuredPhoto?.id);

  return (
    <>
      <section className={`${sectionShell} py-12 lg:pb-12 lg:pt-20`}>
        <div className="flex max-w-[720px] flex-col gap-4">
          <p className="m-0 font-sans text-[13px] font-semibold uppercase leading-4 tracking-label text-accent">
            Garden gallery
          </p>
          <h1 className="m-0 font-display text-[clamp(40px,6vw,56px)] font-medium leading-[1.1] tracking-tight text-primary">
            A closer look at our work.
          </h1>
          <p className={bodyMuted}>
            Explore a growing collection of garden projects, with new work added
            over time.
          </p>
        </div>
      </section>

      {/* 
      --------------------------------------------------------------
      Hiding for now until more content is added
      --------------------------------------------------------------
      
      <section
        className={`${sectionShell} border-b border-border bg-sage-wash py-6`}
        aria-label="Filter gallery by work type"
      >
        <div className="flex flex-wrap gap-3">
          {galleryFilters.map((item) => {
            const active = item === filter;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={
                  active
                    ? "bg-primary px-[18px] py-2.5 font-sans text-[13px] font-bold leading-4 text-primary-foreground"
                    : "border border-border bg-surface px-[18px] py-2.5 font-sans text-[13px] font-semibold leading-4 text-foreground transition-colors hover:border-primary"
                }
              >
                {item}
              </button>
            );
          })}
        </div>
      </section> */}

      <section className={`${sectionShell} py-[72px] lg:py-20`}>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-[640px]">
            <p className="m-0 font-sans text-[13px] font-semibold uppercase leading-4 tracking-label text-accent">
              Before &amp; after
            </p>
            <h2 className={`${sectionHeading} mt-3`}>
              See the difference made
            </h2>
            <p className={`${bodyMuted} mt-3`}>
              Drag the slider to reveal each transformation — from overgrown
              boundaries to finished stone, timber and turf.
            </p>
          </div>
        </div>

        {pairs.length === 0 ? (
          <p className={bodyMuted}>
            No before-and-after pairs for this filter.
          </p>
        ) : (
          <div className="flex flex-col gap-12 lg:gap-10">
            {featuredPairs.map((pair) => (
              <article key={pair.id} className="flex flex-col gap-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="m-0 font-display text-xl font-medium leading-7 text-primary">
                    {pair.title}
                  </h3>
                  <TagList tags={pair.tags} />
                </div>
                <BeforeAfterSlider
                  beforeSrc={pair.beforeSrc}
                  afterSrc={pair.afterSrc}
                  beforeAlt={pair.beforeAlt}
                  afterAlt={pair.afterAlt}
                />
              </article>
            ))}

            <div className="flex flex-col gap-10">
              {supportingPairs.map((pair) => (
                <article key={pair.id} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="m-0 font-display text-xl font-medium leading-7 text-primary">
                      {pair.title}
                    </h3>
                    <TagList tags={pair.tags} />
                  </div>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="font-sans text-[12px] font-semibold uppercase leading-4 tracking-label text-muted">
                        Before
                      </span>
                      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-[360px]">
                        <Image
                          src={pair.beforeSrc}
                          alt={pair.beforeAlt}
                          fill
                          className="object-cover"
                          style={{
                            objectPosition: pair.beforePosition ?? "50% 50%",
                          }}
                          sizes="(max-width: 900px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-sans text-[12px] font-semibold uppercase leading-4 tracking-label text-muted">
                        After
                      </span>
                      <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-[360px]">
                        <Image
                          src={pair.afterSrc}
                          alt={pair.afterAlt}
                          fill
                          className="object-cover"
                          style={{
                            objectPosition: pair.afterPosition ?? "50% 50%",
                          }}
                          sizes="(max-width: 900px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className={`${sectionShell} bg-sage-wash py-[72px] lg:py-20`}>
        <div className="mb-10 max-w-[640px] lg:mb-12">
          <p className="m-0 font-sans text-[13px] font-semibold uppercase leading-4 tracking-label text-accent">
            Finished work
          </p>
          <h2 className={`${sectionHeading} mt-3`}>
            Gardens as they stand today
          </h2>
          <p className={`${bodyMuted} mt-3`}>
            A selection of completed projects — each tagged by the kind of work
            shown.
          </p>
        </div>

        {photos.length === 0 ? (
          <p className={bodyMuted}>No finished photos for this filter.</p>
        ) : (
          <div className="flex flex-col gap-10 lg:gap-12">
            {featuredPhoto ? (
              <article className="flex flex-col gap-4">
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-[520px]">
                  <Image
                    src={featuredPhoto.src}
                    alt={featuredPhoto.alt}
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: featuredPhoto.imagePosition ?? "50% 50%",
                    }}
                    sizes="(max-width: 900px) 100vw, 1280px"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 lg:bottom-6 lg:left-6">
                    {featuredPhoto.tags.map((tag) => (
                      <ImageTag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
                <div className="max-w-[560px]">
                  <h3 className="m-0 font-display text-xl font-medium leading-7 text-primary">
                    {featuredPhoto.title}
                  </h3>
                  <p className="mt-1.5 mb-0 font-sans text-[15px] leading-6 text-muted">
                    {featuredPhoto.description}
                  </p>
                </div>
              </article>
            ) : null}

            {gridPhotos.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {gridPhotos.map((photo) => (
                  <article key={photo.id} className="flex flex-col gap-3.5">
                    <div className="relative aspect-[5/4] overflow-hidden lg:aspect-auto lg:h-[320px]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        style={{
                          objectPosition: photo.imagePosition ?? "50% 50%",
                        }}
                        sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                      />
                      <div className="absolute bottom-4 left-4">
                        <ImageTag label={photo.tags[0] ?? "Garden work"} />
                      </div>
                    </div>
                    <div>
                      <h3 className="m-0 font-sans text-[15px] font-semibold leading-[22px] text-primary">
                        {photo.title}
                      </h3>
                      <p className="mt-1 mb-0 font-sans text-sm leading-5 text-muted">
                        {photo.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </section>

      <section
        className={`${sectionShell} flex flex-col items-start justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-16`}
      >
        <div className="max-w-[640px]">
          <h2 className="m-0 font-display text-[clamp(28px,3vw,32px)] font-medium leading-[1.2] tracking-tight text-foreground">
            Ready to transform your garden?
          </h2>
          <p className={`${bodyMuted} mt-3`}>
            Tell Mike about the work and he will get back with clear next steps.
          </p>
        </div>
        <HashLink href="/#contact" className={primaryButton}>
          Request a Quote
        </HashLink>
      </section>
    </>
  );
}
