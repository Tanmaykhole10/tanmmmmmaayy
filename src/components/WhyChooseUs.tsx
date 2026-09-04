import { motion } from "motion/react";
import {
  Award,
  Sparkles,
  ShieldCheck,
  Globe2,
  Package,
  HeartHandshake,
} from "lucide-react";
import { SectionHeading } from "@/components/Reveal";

const features = [
  {
    icon: Award,
    title: "Premium Export Quality",
    body: "Products selected and prepared to a premium quality standard, pack after pack.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienically Processed",
    body: "Careful handling and clean processing from preparation through to packaging.",
  },
  {
    icon: Sparkles,
    title: "No Artificial Flavouring",
    body: "Natural aroma and taste, with no artificial flavouring or colour added.",
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    body: "Ready to serve buyers across markets with reliable dispatch and coordination.",
  },
  {
    icon: Package,
    title: "White Label Packaging",
    body: "Flexible white label packaging support for partners building their own brand.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Relationships",
    body: "A professional, responsive approach focused on long-term business partnerships.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-1/3 h-96 w-96 rounded-full bg-lotus/8 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Reasons businesses work with us"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[var(--shadow-soft)]"
            >
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-gold transition-transform duration-300 group-hover:-translate-y-1">
                <f.icon size={21} />
              </span>
              <h3 className="mt-5 text-xl text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
