import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company, type Product } from "@/data/site";

export function Contact({ enquiryProduct }: { enquiryProduct?: Product | null }) {
  const link =
    "underline-offset-4 transition-colors hover:text-gold-ink hover:underline focus-visible:text-gold-ink focus-visible:underline";
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: (
        <>
          {company.phones.map((phone, i) => (
            <span key={phone}>
              {i > 0 ? " / " : null}
              <a href={`tel:${phone.replace(/\s/g, "")}`} className={link}>
                {phone}
              </a>
            </span>
          ))}
        </>
      ),
    },
    {
      icon: Mail,
      label: "Email",
      value: (
        <a href={`mailto:${company.email}`} className={link}>
          {company.email}
        </a>
      ),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: (
        <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className={link}>
          {company.whatsapp}
        </a>
      ),
    },
    {
      icon: MapPin,
      label: "Address",
      value: (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={link}
        >
          {company.address}
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk business"
          intro="Reach our team directly by phone, WhatsApp or email — we respond to every enquiry personally."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex gap-4 rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-gold transition-transform duration-300 group-hover:scale-110">
                <item.icon size={18} />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed break-words text-primary">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <EnquiryForm product={enquiryProduct} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)]">
              <iframe
                title="Laxmikant Worldlink location on Google Maps"
                src={company.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[22rem] w-full border-0"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${company.phones[0]?.replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-navy-deep"
            >
              <Phone size={16} />
              Call Us
            </a>
            <a
              href={`mailto:${company.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-gold hover:bg-card"
            >
              Email Us
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
