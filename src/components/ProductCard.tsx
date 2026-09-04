import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MessageSquare, Leaf, Sparkles } from "lucide-react";
import type { Product } from "@/data/site";

export function ProductCard({
  product,
  index,
  onView,
  onEnquire,
}: {
  product: Product;
  index: number;
  onView: (product: Product) => void;
  onEnquire: (product: Product) => void;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-[var(--shadow-lift)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[image:var(--gradient-gold)] transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="relative overflow-hidden bg-secondary/60 px-6 pb-6 pt-5">
        <motion.span
          aria-hidden="true"
          animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/15 blur-3xl"
        />

        <div className="relative flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-card/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-primary/80 backdrop-blur">
            <Leaf size={12} className="text-gold" />
            100% Natural
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lotus/30 bg-card/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-primary/80 backdrop-blur">
            <Sparkles size={12} className="text-lotus" />
            Premium
          </span>
        </div>

        <motion.img
          src={product.image}
          alt={`${product.name} pack by Laxmikant Worldlink`}
          width={620}
          height={720}
          loading="lazy"
          animate={reduced ? {} : { y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
          className="relative mx-auto mt-5 h-64 w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.07] sm:h-72"
        />
      </div>


      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="eyebrow">{product.category}</p>
        <h3 className="mt-2 text-2xl text-primary">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.short}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.highlights.slice(0, 3).map((h, i) => (
            <motion.span
              key={h}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
              className="rounded-full border border-gold/25 bg-secondary/70 px-3 py-1 text-xs text-primary/75 transition-colors duration-300 hover:border-gold/60 hover:bg-gold/10"
            >
              {h}
            </motion.span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onView(product)}
            className="group/btn inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-navy-deep"
          >
            View Details
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
            />
          </button>
          <button
            type="button"
            onClick={() => onEnquire(product)}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 px-5 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:border-gold hover:bg-secondary"
          >
            <MessageSquare size={15} />
            Enquire Now
          </button>
        </div>
      </div>
    </motion.article>
  );
}
