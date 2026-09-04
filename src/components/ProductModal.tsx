import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";
import type { Product } from "@/data/site";

export function ProductModal({
  product,
  onClose,
  onEnquire,
}: {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

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
          <div
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-[1.75rem] bg-card shadow-[var(--shadow-lift)] sm:rounded-[1.75rem]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-card/90 text-primary backdrop-blur transition-colors hover:bg-secondary"
            >
              <X size={18} />
            </button>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-secondary/70 p-8">
                <img
                  src={product.image}
                  alt={`${product.name} pack`}
                  width={620}
                  height={720}
                  className="mx-auto h-64 w-auto object-contain sm:h-96"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="eyebrow">{product.category}</p>
                <h3 className="mt-2 text-3xl text-primary">{product.name}</h3>
                <div className="gold-rule mt-4" aria-hidden="true" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {product.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-primary/80"
                    >
                      <Check size={15} className="shrink-0 text-gold" />
                      {h}
                    </li>
                  ))}
                </ul>

                <dl className="mt-7 divide-y divide-border/70 border-y border-border/70">
                  {product.details.map((d) => (
                    <div key={d.label} className="flex justify-between gap-4 py-2.5">
                      <dt className="text-sm text-muted-foreground">{d.label}</dt>
                      <dd className="text-sm font-medium text-primary">{d.value}</dd>
                    </div>
                  ))}
                </dl>

                <button
                  type="button"
                  onClick={() => onEnquire(product)}
                  className="mt-7 w-full rounded-full bg-[image:var(--gradient-gold)] px-6 py-3.5 text-sm font-semibold text-navy-deep transition-transform duration-300 hover:scale-[1.02]"
                >
                  Enquire About This Product
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
