import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { company, images, navLinks, products } from "@/data/site";

const go = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-8 text-cream/70">
      <Reveal className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={images.logoDark}
              alt="Laxmikant Worldlink logo"
              width={824}
              height={672}
              loading="lazy"
              className="h-20 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A quality-focused food products company preparing natural, hygienically
              processed products for kitchens and trade partners.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wide text-cream">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => go(l.id)}
                    className="transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wide text-cream">Products</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => go("products")}
                    className="text-left transition-colors duration-300 hover:text-gold"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
              <li className="text-cream/40">[Additional Product]</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold tracking-wide text-cream">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{company.phones.join(" / ")}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Laxmikant Worldlink. All rights reserved.
          </p>
          <p className="text-cream/50">Hygienically prepared | No artificial flavouring</p>
        </div>
      </Reveal>
    </footer>
  );
}
