import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl leading-tight sm:text-4xl md:text-5xl ${
          tone === "dark" ? "text-cream" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <div
        className={`gold-rule mt-5 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed ${
            tone === "dark" ? "text-cream/70" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
