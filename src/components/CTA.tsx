import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  const reduced = useReducedMotion();

  return (
    <section className="px-5 py-24 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[image:var(--gradient-navy)] px-7 py-16 text-center sm:px-14 sm:py-20">
        <motion.span
          aria-hidden="true"
          animate={reduced ? {} : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -top-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
        />
        <motion.span
          aria-hidden="true"
          animate={reduced ? {} : { x: [0, -28, 0], y: [0, 22, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-lotus/15 blur-3xl"
        />

        <Reveal>
          <p className="eyebrow">Get In Touch</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
            Let's build a strong business connection
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70">
            Get in touch with Laxmikant Worldlink to learn more about our products and
            business offerings.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-8 py-3.5 text-sm font-semibold text-navy-deep transition-transform duration-300 hover:scale-[1.03]"
          >
            Contact Us
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
