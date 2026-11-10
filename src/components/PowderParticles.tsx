import type { CSSProperties } from "react";

// Soft colour of each powder (falls back to gold)
const tints: Record<string, string> = {
  "red-onion-powder": "rgba(196, 84, 128, 0.9)",
  "tamarind-pulp": "rgba(140, 78, 40, 0.9)",
  "ginger-powder": "rgba(222, 178, 98, 0.95)",
  "white-onion-powder": "rgba(244, 236, 216, 0.95)",
  "garlic-powder": "rgba(238, 228, 200, 0.95)",
  "coriander-powder": "rgba(150, 172, 80, 0.9)",
};

// Fixed values (no Math.random) so server and browser render identical HTML.
const dots = Array.from({ length: 18 }, (_, i) => {
  const r = (n: number) => {
    const v = Math.sin((i + 1) * n) * 10000;
    return v - Math.floor(v);
  };
  return {
    x: (20 + r(12.9898) * 60).toFixed(1),
    s: (3 + r(78.233) * 5).toFixed(1),
    dx: ((r(39.346) - 0.5) * 70).toFixed(1),
    dur: (2.2 + r(11.135) * 1.8).toFixed(2),
    del: (r(93.989) * 2.4).toFixed(2),
  };
});

/** Fine powder that rises from the pack while the card is hovered. CSS only (see .powder-dot). */
export function PowderParticles({ productId }: { productId: string }) {
  const color = tints[productId] ?? "rgba(212, 175, 55, 0.9)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="powder-dot"
          style={
            {
              "--x": `${d.x}%`,
              "--s": `${d.s}px`,
              "--dx": `${d.dx}px`,
              "--dur": `${d.dur}s`,
              "--del": `${d.del}s`,
              "--c": color,
            } as CSSProperties
          }
        />
      ))}
    </span>
  );
}
