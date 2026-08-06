import type { SVGProps } from "react";

const PRIMARY = "#1F3A2E";
const BACKGROUND = "#F2F0EB";

/**
 * Master MH monogram logo.
 * Path-outlined Manrope ExtraBold so resizing never changes letterforms or proportions.
 * Source: Paper UI Kit → MH Monogram (96×96, 3px border, Manrope 800 / 34px).
 */
export function MhMonogram({
  title = "Mike Hamer Gardens",
  primary = PRIMARY,
  background = BACKGROUND,
  ...props
}: SVGProps<SVGSVGElement> & {
  title?: string;
  primary?: string;
  background?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      fill="none"
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      <rect width="96" height="96" fill={primary} />
      <rect x="3" y="3" width="90" height="90" fill={background} />
      <path fill={primary} d="M25.198 60.240L20.880 60.240L20.880 35.760L25.028 35.760L33.120 52.012L41.212 35.760L45.360 35.760L45.360 60.240L41.042 60.240L41.042 45.620L33.936 60.240L32.304 60.240L25.198 45.620Z" />
      <path fill={primary} d="M59.504 60.240L54.880 60.240L54.880 35.760L59.504 35.760L59.504 45.824L70.452 45.824L70.452 35.760L75.076 35.760L75.076 60.240L70.452 60.240L70.452 50.142L59.504 50.142Z" />
    </svg>
  );
}

export default MhMonogram;
