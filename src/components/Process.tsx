import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ClipboardCheck, Package, ShieldCheck, Sprout, Truck } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";

// NOTE: keep this wording true to how the business really works.
const steps = [
  { icon: Sprout, title: "Sourcing", body: "Raw materials are selected for each product we prepare." },
  { icon: ShieldCheck, title: "Hygienic processing", body: "Products are prepared with careful, hygienic handling." },
  { icon: ClipboardCheck, title: "Quality check", body: "Batches are checked so quality stays consistent." },
  { icon: Package, title: "Packing", body: "Packed hygienically, with white label packaging on request." },
  { icon: Truck, title: "Dispatch", body: "Orders are coordinated and dispatched to our buyers." },
];

export function Process() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.3 });

  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="From preparation to dispatch"
          intro="A simple, careful path so what reaches you stays consistent."
        />

        <ol ref={ref} className="relative mt-16 space-y-10 pl-16 sm:pl-20">
          {/* track + line that draws while scrolling */}
          <span aria-hidden="true" className="absolute bottom-4 left-[1.45rem] top-4 w-px bg-border sm:left-[1.95rem]" />
          <motion.span
            aria-hidden="true"
            style={reduced ? undefined : { scaleY }}
            className="absolute bottom-4 left-[1.45rem] top-4 w-px origin-top bg-[image:var(--gradient-gold)] sm:left-[1.95rem]"
          />

          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-16 top-0 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-card text-gold shadow-[var(--shadow-soft)] sm:-left-20 sm:h-14 sm:w-14">
                <s.icon size={20} />
              </span>
              <Reveal delay={0.05 * i} y={20}>
                <p className="eyebrow">Step {i + 1}</p>
                <h3 className="mt-1 text-2xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
