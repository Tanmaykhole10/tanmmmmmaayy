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
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
            <img
              src={images.logoLight}
              alt="Laxmikant Worldlink logo"
              width={856}
              height={752}
              loading="lazy"
              className="h-24 w-auto rounded-xl"
            />
            <p className="mt-6 text-sm leading-relaxed text-primary/75">
              Hygienically prepared. No artificial flavouring. We are flexible to provide
              white label packaging.
            </p>
            <p className="mt-4 font-display text-2xl text-primary">
              || विश्वास : एवं आधार : ||
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Built On Trust</p>
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
                className="flex gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-5 transition-colors duration-300 hover:border-gold/40"
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
