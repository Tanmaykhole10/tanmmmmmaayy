import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { images } from "@/data/site";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep"
    >
      <motion.img
        src={images.hero}
        alt="Digital blue globe representing global export network"
        width={1920}
        height={1280}
        fetchPriority="high"
        initial={{ scale: reduced ? 1 : 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />

      <motion.div
        aria-hidden="true"
        animate={reduced ? {} : { y: [0, -22, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={reduced ? {} : { y: [0, 26, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-4 h-80 w-80 rounded-full bg-lotus/10 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 lg:px-8"
      >
        <motion.div variants={item} className="mb-8">
          <img
            src={images.logoSymbol}
            alt="Laxmikant Worldlink lotus emblem"
            width={826}
            height={701}
            className="h-20 w-auto sm:h-24"
          />

        </motion.div>

        <motion.p variants={item} className="eyebrow">
          {"\n"}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 max-w-3xl text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          Laxmikant Worldlink
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          Connecting quality products with trusted business relationships. We prepare and
          supply hygienically processed food products — free from artificial flavouring —
          for buyers who value consistency and care.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={() => scrollTo("products")}
            className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform duration-300 hover:scale-[1.03]"
          >
            Explore Products
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-full border border-cream/35 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:bg-cream/10"
          >
            Contact Us
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
