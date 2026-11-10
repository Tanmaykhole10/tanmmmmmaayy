import { motion, useReducedMotion } from "motion/react";
import { Package, ShieldCheck } from "lucide-react";
import logoMark from "/images/logo-symbol.webp";
import onion from "/images/product-onion.webp";
import tamarind from "/images/product-tamarind.webp";
import ginger from "/images/ginger-powder.webp";

/** Brand showcase for the About section: real product packs on a branded panel. */
export function AboutShowcase() {
  const reduced = useReducedMotion();
  const bob = (dist: number, dur: number, delay = 0) =>
    reduced
      ? {}
      : {
          animate: { y: [0, -dist, 0] },
          transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <div className="relative mx-auto w-full max-w-xl px-3 sm:px-0">
      {/* offset gold frame */}
      <div
        aria-hidden="true"
        className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] border border-gold/35 sm:block"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy-deep shadow-[var(--shadow-lift)]">
        {/* soft light + slow rotating ring */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(212,175,55,0.26),transparent_62%)]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[52%] h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 animate-[spin_70s_linear_infinite] rounded-full border border-dashed border-gold/25 motion-reduce:animate-none"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[52%] h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15"
        />

        {/* heading area */}
        <div className="absolute inset-x-0 top-6 flex flex-col items-center text-center sm:top-8">
          <img src={logoMark} alt="" width={480} height={407} className="h-9 w-auto sm:h-11" loading="lazy" />
          <p className="mt-2 text-[0.62rem] font-medium uppercase tracking-[0.4em] text-gold-soft sm:text-xs">
            Pure · Natural · Trusted
          </p>
        </div>

        {/* product packs */}
        <motion.img
          src={tamarind}
          alt="Laxmikant Worldlink premium tamarind pulp pack"
          width={766}
          height={1024}
          loading="lazy"
          {...bob(9, 7, 0.6)}
          className="absolute bottom-[9%] left-[3%] w-[37%] -rotate-6 drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)]"
        />
        <motion.img
          src={ginger}
          alt="Laxmikant Worldlink ginger powder pack"
          width={733}
          height={1100}
          loading="lazy"
          {...bob(10, 8, 1.2)}
          className="absolute bottom-[10%] right-[3%] w-[36%] rotate-6 drop-shadow-[0_24px_30px_rgba(0,0,0,0.5)]"
        />
        <motion.img
          src={onion}
          alt="Laxmikant Worldlink red onion powder pack"
          width={820}
          height={1024}
          loading="lazy"
          {...bob(12, 6.5)}
          className="absolute bottom-[5%] left-1/2 z-10 w-[50%] -translate-x-1/2 drop-shadow-[0_30px_36px_rgba(0,0,0,0.55)]"
        />
      </div>

      {/* floating badges (facts already stated on the site) */}
      <motion.div
        {...bob(7, 5.5)}
        className="absolute -right-1 top-[22%] z-20 flex items-center gap-2.5 rounded-2xl border border-gold/30 bg-cream/95 px-3.5 py-2.5 shadow-[var(--shadow-lift)] backdrop-blur sm:-right-8"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
          <ShieldCheck size={18} />
        </span>
        <span className="text-xs font-medium leading-tight text-primary sm:text-sm">
          Hygienic
          <br />
          processing
        </span>
      </motion.div>

      <motion.div
        {...bob(8, 6.5, 1)}
        className="absolute -left-1 bottom-[24%] z-20 flex items-center gap-2.5 rounded-2xl border border-gold/30 bg-cream/95 px-3.5 py-2.5 shadow-[var(--shadow-lift)] backdrop-blur sm:-left-8"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
          <Package size={18} />
        </span>
        <span className="text-xs font-medium leading-tight text-primary sm:text-sm">
          White label
          <br />
          available
        </span>
      </motion.div>
    </div>
  );
}
