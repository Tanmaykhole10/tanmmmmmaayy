import { useEffect, useRef, type CSSProperties, type ReactElement } from "react";

const stroke = { fill: "currentColor", fillOpacity: 0.12, stroke: "currentColor", strokeWidth: 1.5 } as const;

function Onion() {
  return (
    <svg viewBox="0 0 48 60" className="h-full w-full" fill="none">
      <path d="M24 6 C26 14 40 20 40 36 C40 50 32 56 24 56 C16 56 8 50 8 36 C8 20 22 14 24 6 Z" {...stroke} />
      <path d="M24 8 C19 24 19 42 24 56 M24 8 C29 24 29 42 24 56" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function Ginger() {
  return (
    <svg viewBox="0 0 52 60" className="h-full w-full" fill="none">
      <path d="M8 34 C8 26 16 24 20 28 C22 20 30 18 34 24 C40 22 46 28 42 34 C46 40 40 46 34 42 C30 48 22 46 20 42 C14 46 6 42 8 34 Z" {...stroke} />
    </svg>
  );
}
function Tamarind() {
  return (
    <svg viewBox="0 0 60 56" className="h-full w-full" fill="none">
      <path d="M6 40 C14 14 40 8 54 14 C56 18 52 22 46 22 C34 24 22 30 16 44 C12 50 4 46 6 40 Z" {...stroke} />
      <path d="M22 22 L24 32 M32 16 L33 26 M42 14 L42 22" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

type Item = {
  C: () => ReactElement;
  cls: string;
  size: string;
  vars: Record<string, string>;
  mobile?: boolean;
};

const items: Item[] = [
  { C: Onion, cls: "left-[6%] top-[18%] text-gold", size: "h-14 w-12", vars: { "--t": "13s", "--d": "0s", "--r0": "-10deg", "--r1": "6deg" }, mobile: true },
  { C: Tamarind, cls: "right-[8%] top-[22%] text-gold-soft", size: "h-12 w-14", vars: { "--t": "15s", "--d": "-3s", "--r0": "8deg", "--r1": "-8deg" }, mobile: true },
  { C: Ginger, cls: "left-[44%] bottom-[12%] text-gold", size: "h-14 w-14", vars: { "--t": "14s", "--d": "-6s", "--r0": "-6deg", "--r1": "10deg" } },
  { C: Onion, cls: "right-[20%] bottom-[18%] text-lotus", size: "h-10 w-9", vars: { "--t": "12s", "--d": "-2s", "--r0": "12deg", "--r1": "-6deg" } },
  { C: Tamarind, cls: "left-[24%] top-[10%] text-gold-soft", size: "h-9 w-11", vars: { "--t": "16s", "--d": "-8s", "--r0": "-12deg", "--r1": "4deg" } },
  { C: Ginger, cls: "right-[36%] top-[8%] text-gold", size: "h-10 w-10", vars: { "--t": "17s", "--d": "-5s", "--r0": "6deg", "--r1": "-10deg" } },
];

/** Decorative only: hidden from screen readers, paused when scrolled out of view. */
export function FloatingIngredients() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      el.dataset.paused = entry.isIntersecting ? "false" : "true";
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map(({ C, cls, size, vars, mobile }, i) => (
        <span
          key={i}
          className={`float-item ${cls} ${size} ${mobile ? "" : "hidden sm:block"}`}
          style={vars as CSSProperties}
        >
          <C />
        </span>
      ))}
    </div>
  );
}
