import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { images, navLinks } from "@/data/site";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToSection(id), open ? 220 : 0);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/20 bg-cream/95 py-2 shadow-[0_10px_40px_-30px_rgba(15,25,60,0.7)] backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="flex min-w-0 items-center"
          aria-label="Laxmikant Worldlink — go to top"
        >
          <span className="flex items-center gap-3">
            <img
              src={images.logoMark}
              alt=""
              width={480}
              height={407}
              className={`w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-500 ${
                scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
              }`}
            />
            <span className="flex flex-col text-left leading-none">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className={`text-xl font-semibold tracking-[0.14em] transition-colors duration-500 sm:text-2xl ${
                  scrolled ? "text-primary" : "text-cream"
                }`}
              >
                LAXMIKANT
              </span>
              <span className="mt-1.5 flex items-center gap-2 text-[0.6rem] font-medium tracking-[0.46em] text-gold sm:text-[0.66rem]">
                <span aria-hidden="true" className="h-px w-4 bg-gold/70" />
                WORLDLINK
              </span>
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNav(link.id)}
              className={`group relative py-1 text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-primary/80 hover:text-primary"
                  : "text-cream/85 hover:text-cream"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("contact")}
            className={`rounded-full px-6 py-2.5 text-sm font-medium shadow-[var(--shadow-soft)] lift-btn ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-navy-deep"
                : "bg-gold text-navy-deep hover:bg-gold-soft"
            }`}
          >
            Contact Us
          </button>
        </div>


        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`justify-self-end rounded-full border p-2.5 lg:hidden ${
            scrolled ? "border-gold/30 text-primary" : "border-cream/30 text-cream"
          }`}

          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden border-t border-gold/15 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                    active === link.id
                      ? "bg-primary/5 text-primary"
                      : "text-primary/75 hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                type="button"
                onClick={() => handleNav("contact")}
                className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
