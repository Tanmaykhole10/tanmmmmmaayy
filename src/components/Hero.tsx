import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { images } from "@/data/site";
import { FloatingIngredients } from "@/components/FloatingIngredients";
import { introDelay } from "@/lib/intro";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  // Background drifts down slower than the page scrolls (transform only)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 + introDelay } },
  };
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const wordItem = {
    hidden: { y: reduced ? 0 : "110%", opacity: reduced ? 1 : 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-deep"
    >
      <motion.div
        style={reduced ? undefined : { y: bgY }}
        className="absolute inset-x-0 -top-[18%] h-[118%] will-change-transform"
      >
        <motion.img
          src={images.hero}
          alt="Digital blue globe representing global export network"
          width={1920}
          height={1280}
          fetchPriority="high"
          onError={(e) => (e.currentTarget.style.display = "none")}
          initial={{ scale: reduced ? 1 : 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: introDelay * 0.85, ease: [0.22, 1, 0.36, 1] as const }}
          className="h-full w-full object-cover object-[69%_50%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/70 to-navy-deep/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
      <FloatingIngredients />

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

        <h1
          aria-label="Laxmikant Worldlink"
          className="mt-4 max-w-3xl text-4xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
        >
          {["Laxmikant", "Worldlink"].map((word) => (
            <span
              key={word}
              aria-hidden="true"
              className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom"
            >
              <motion.span variants={wordItem} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

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
            className="lift-btn group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-navy-deep transition-transform duration-300 hover:scale-[1.03]"
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
            className="lift-btn group inline-flex items-center gap-2 rounded-full border border-cream/35 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-gold hover:bg-cream/10"
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
