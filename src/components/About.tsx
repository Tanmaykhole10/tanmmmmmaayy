import { Leaf, ShieldCheck, Handshake } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { images } from "@/data/site";

const pillars = [
  {
    icon: Leaf,
    title: "Natural by choice",
    body: "Products prepared without artificial flavouring or colour, keeping natural aroma and taste intact.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic processing",
    body: "Careful, hygienic handling and packaging at every step so what reaches you stays consistent.",
  },
  {
    icon: Handshake,
    title: "Business-first approach",
    body: "Flexible support including white label packaging, built around long-term working relationships.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-gold/8 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">About Us</p>
          <h2 className="mt-3 text-3xl leading-tight text-primary sm:text-4xl md:text-5xl">
            A quality-focused food products company
          </h2>
          <div className="gold-rule mt-5" aria-hidden="true" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Laxmikant Worldlink is a food products company based in Navi Mumbai, India. We
            prepare and supply natural food products such as tamarind pulp and dehydrated
            powders for kitchens, food businesses and trade partners.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our work is guided by a simple commitment: consistent quality, hygienic
            processing and honest products. We are also flexible in providing white label
            packaging for partners who want to build their own brand around dependable
            products.
          </p>

          <div className="mt-10 space-y-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <div className="group flex gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-[var(--shadow-soft)]">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-gold transition-transform duration-300 group-hover:scale-105">
                    <p.icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg text-primary">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" y={40}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] border border-gold/35 sm:block"
            />
            <img
              src={images.about}
              alt="Red onion powder and tamarind pulp with fresh ingredients on a plain navy background"
              width={1200}
              height={1408}
              loading="lazy"
              className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)] sm:h-[560px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
