"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterSliderProps) {
  const labelId = useId();
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(44);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (!draggingRef.current || !frameRef.current) return;
      const rect = frameRef.current.getBoundingClientRect();
      const next = ((event.clientX - rect.left) / rect.width) * 100;
      setPosition(Math.min(92, Math.max(8, next)));
    };

    const onPointerUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    draggingRef.current = true;
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const next = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  };

  return (
    <div
      ref={frameRef}
      className={`relative aspect-[16/10] w-full touch-none overflow-hidden bg-sage-wash select-none lg:aspect-auto lg:h-[720px] ${className}`}
      onPointerDown={startDrag}
      role="group"
      aria-labelledby={labelId}
    >
      <span id={labelId} className="sr-only">
        Before and after comparison. Drag the slider to reveal more of either
        image.
      </span>

      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 900px) 100vw, 1280px"
        draggable={false}
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 1280px"
          draggable={false}
        />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-4 -translate-x-1/2"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-surface" />
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-border bg-surface">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 1L2 6L7 11"
              stroke="#1F3A2E"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
            <path
              d="M13 1L18 6L13 11"
              stroke="#1F3A2E"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>

      <div className="pointer-events-none absolute top-4 left-4 z-10 bg-[rgba(44,44,42,0.72)] px-3 py-2 font-sans text-[11px] font-bold uppercase leading-[14px] tracking-label text-surface">
        Before
      </div>
      <div className="pointer-events-none absolute top-4 right-4 z-10 bg-[rgba(44,44,42,0.72)] px-3 py-2 font-sans text-[11px] font-bold uppercase leading-[14px] tracking-label text-surface">
        After
      </div>

      <input
        type="range"
        min={8}
        max={92}
        value={Math.round(position)}
        aria-label="Reveal before or after"
        className="absolute inset-x-4 bottom-4 z-20 h-8 w-[calc(100%-2rem)] cursor-ew-resize appearance-none bg-transparent lg:opacity-0"
        onChange={(event) => setPosition(Number(event.target.value))}
      />
    </div>
  );
}
