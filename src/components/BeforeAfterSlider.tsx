"use client";

import { useCallback, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt?: string;
  /** "featured" büyük kart için, "standard" grid içi kartlar için */
  size?: "featured" | "standard";
};

export default function BeforeAfterSlider({
  before,
  after,
  alt = "",
  size = "standard",
}: Props) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => setDragging(false);

  const handleSize = size === "featured" ? 40 : 32;
  const iconSize = size === "featured" ? 20 : 16;
  const labelPad =
    size === "featured" ? "top-6 px-4 py-2" : "top-4 px-3 py-1 text-[10px]";

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className={`relative w-full h-full overflow-hidden rounded-lg bg-surface-container border-t border-outline-variant select-none ${
        dragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      role="slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${alt} öncesi ve sonrası karşılaştırma`}
    >
      {/* AFTER (tam) */}
      <img
        src={after}
        alt={alt ? `${alt} — sonrası` : "sonrası"}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className={`absolute right-4 ${labelPad} bg-surface-container-highest/90 backdrop-blur-md rounded border border-surface-tint/20 text-label-caps text-on-surface z-10`}
      >
        SONRA
      </div>

      {/* BEFORE (maskeli) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={before}
          alt={alt ? `${alt} — öncesi` : "öncesi"}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        />
        <div
          className={`absolute left-4 ${labelPad} bg-surface-container-highest/90 backdrop-blur-md rounded border border-surface-tint/20 text-label-caps text-on-surface z-10`}
        >
          ÖNCE
        </div>
      </div>

      {/* Slider çizgisi + handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-surface-tint z-20 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-1px)" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-container border border-surface-tint flex items-center justify-center shadow-2xl"
          style={{ width: handleSize, height: handleSize }}
        >
          <span
            className="material-symbols-outlined text-surface-tint"
            style={{ fontSize: iconSize, fontVariationSettings: "'wght' 300" }}
          >
            sync_alt
          </span>
        </div>
      </div>
    </div>
  );
}
