import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/site";

const points = [
  {
    title: "Consistent quality standards",
    body: "Every batch is prepared to the same standard so partners know exactly what they receive.",
  },
  {
    title: "Transparent product information",
    body: "We share what we know about our products — nothing overstated, nothing invented.",
  },
  {
    title: "Responsive business communication",
    body: "Clear, timely responses to enquiries, requirements and packaging discussions.",
  },
  {
    title: "Flexible partnership support",
    body: "From bulk requirements to white label packaging, we adapt to how you work.",
  },
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 sm:py-32">
      <img
        src={images.trust}
        alt=""
        aria-hidden="true"
        width={1600}
        height={1100}
        loading="lazy"
        onError={(e) => (e.currentTarget.style.display = "none")}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-gold/30 bg-navy-deep/60 p-8 shadow-[var(--shadow-lift)] backdrop-blur-md sm:p-10">
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <img
                src={images.logoMark}
                alt=""
                width={480}
                height={407}
                loading="lazy"
                className="h-16 w-auto drop-shadow-[0_8px_24px_rgba(236,72,153,0.3)] sm:h-24"
              />
              <div className="leading-none">
                <p
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-semibold tracking-[0.14em] text-cream sm:text-4xl"
                >
                  LAXMIKANT
                </p>
                <p className="mt-2 flex items-center gap-3 text-[0.65rem] font-medium tracking-[0.46em] text-gold sm:text-sm">
                  <span aria-hidden="true" className="h-px w-6 bg-gold/70" />
                  WORLDLINK
                </p>
              </div>
            </div>
            <p className="mt-7 text-sm leading-relaxed text-cream/75">
              Hygienically prepared. No artificial flavouring. We are flexible to provide
              white label packaging.
            </p>
            <p className="mt-4 font-display text-2xl text-gold">
              || विश्वास : एवं आधार : ||
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow-dark">Built On Trust</p>
            <h2 className="mt-3 text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
              A business relationship you can rely on
            </h2>
            <div className="gold-rule mt-5" aria-hidden="true" />
          </Reveal>

          <div className="mt-9 space-y-4">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="flex gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-cream/[0.07]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check size={16} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg text-cream">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/65">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
