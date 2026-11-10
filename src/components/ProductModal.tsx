import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Product } from "@/data/site";

export type ClickOrigin = { x: number; y: number } | null;

// Slide + fade when moving between products (direction aware)
const slide = {
  enter: (d: number) => ({ opacity: 0, x: d * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (d: number) => ({ opacity: 0, x: d * -48 }),
};

export function ProductModal({
  product,
  products,
  origin,
  onClose,
  onEnquire,
  onChange,
}: {
  product: Product | null;
  products: Product[];
  origin: ClickOrigin;
  onClose: () => void;
  onEnquire: (product: Product) => void;
  onChange: (product: Product) => void;
}) {
  const reduced = useReducedMotion();
  const [dir, setDir] = useState(1);
  const idx = product ? products.findIndex((p) => p.id === product.id) : -1;
  const total = products.length;

  const go = (step: number) => {
    if (idx < 0 || total < 2) return;
    setDir(step);
    onChange(products[(idx + step + total) % total]);
  };
  const goRef = useRef(go);
  goRef.current = go;

  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const isOpen = product !== null;

  // Move focus into the popup when it opens, and give it back when it closes
  useEffect(() => {
    if (isOpen) {
      lastFocus.current = document.activeElement as HTMLElement | null;
      const t = window.setTimeout(() => dialogRef.current?.focus(), 60);
      return () => window.clearTimeout(t);
    }
    lastFocus.current?.focus?.();
    return undefined;
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goRef.current(1);
      if (e.key === "ArrowLeft") goRef.current(-1);
      // keep Tab / Shift+Tab inside the popup
      if (e.key === "Tab" && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), select, input, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || active === dialogRef.current)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  // The popup grows out of the button that opened it
  const vw = typeof window === "undefined" ? 0 : window.innerWidth;
  const vh = typeof window === "undefined" ? 0 : window.innerHeight;
  const startX = origin && !reduced ? origin.x - vw / 2 : 0;
  const startY = origin && !reduced ? origin.y - vh / 2 : 40;
  const d = reduced ? 0 : dir;

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            initial={{ opacity: 0, x: startX, y: startY, scale: reduced ? 0.97 : 0.4 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto outline-none rounded-t-[1.75rem] bg-card shadow-[var(--shadow-lift)] sm:rounded-[1.75rem]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="lift-btn absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-border bg-card/90 text-primary backdrop-blur hover:bg-secondary"
            >
              <X size={18} />
            </button>

            {/* page-style transition between products */}
            <AnimatePresence mode="wait" custom={d} initial={false}>
              <motion.div
                key={product.id}
                custom={d}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
                className="grid gap-0 md:grid-cols-2"
              >
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.3}
                  dragSnapToOrigin
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70 || info.velocity.x < -500) go(1);
                    else if (info.offset.x > 70 || info.velocity.x > 500) go(-1);
                  }}
                  className="relative cursor-grab select-none bg-secondary/70 p-8 active:cursor-grabbing"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} pack`}
                    width={620}
                    height={720}
                    draggable={false}
                    className="mx-auto h-64 w-auto object-contain sm:h-96"
                  />
                  {total > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Previous product"
                        className="lift-btn absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/90 text-primary backdrop-blur hover:bg-card"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label="Next product"
                        className="lift-btn absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-card/90 text-primary backdrop-blur hover:bg-card"
                      >
                        <ChevronRight size={18} />
                      </button>
                      <p className="mt-3 text-center text-xs tracking-wide text-muted-foreground">
                        {idx + 1} / {total} · swipe or use the arrows
                      </p>
                    </>
                  ) : null}
                </motion.div>

                <div className="p-7 sm:p-9">
                  <p className="eyebrow">{product.category}</p>
                  <h3 className="mt-2 text-3xl text-primary">{product.name}</h3>
                  <div className="gold-rule mt-4" aria-hidden="true" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-primary/80">
                        <Check size={15} className="shrink-0 text-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-7 divide-y divide-border/70 border-y border-border/70">
                    {product.details.map((x) => (
                      <div key={x.label} className="flex justify-between gap-4 py-2.5">
                        <dt className="text-sm text-muted-foreground">{x.label}</dt>
                        <dd className="text-sm font-medium text-primary">{x.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <button
                    type="button"
                    onClick={() => onEnquire(product)}
                    className="lift-btn mt-7 w-full rounded-full bg-[image:var(--gradient-gold)] px-6 py-3.5 text-sm font-semibold text-navy-deep"
                  >
                    Enquire About This Product
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
