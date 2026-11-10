import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TrustSection } from "@/components/TrustSection";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Loader } from "@/components/Loader";
import { Process } from "@/components/Process";
import { products, type Product } from "@/data/site";

const SITE_URL = "https://www.laxmikantworldlink.com";

const title = "Laxmikant Worldlink — Quality Food Products";
const description =
  "Laxmikant Worldlink, Navi Mumbai: tamarind pulp and red onion, white onion, ginger, garlic and coriander powders. Hygienically processed, consistent quality, white label packaging for businesses.";
const shareImage = `${SITE_URL}/images/og-image.jpg`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: shareImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Laxmikant Worldlink product packs: tamarind pulp, red onion powder and ginger powder" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: shareImage },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: "/images/hero.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Laxmikant Worldlink",
          url: SITE_URL,
          logo: `${SITE_URL}/images/logo_dark.png`,
          email: "laxmikantwl09@gmail.com",
          telephone: "+91 89763 23628",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Shiv Kalpataru Arcade Building No. 2, Room No. 302, Plot No. 1, Sector 17, Kamothe",
            addressLocality: "Navi Mumbai",
            postalCode: "410209",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              description: p.description,
              image: `${SITE_URL}${p.image}`,
              category: p.category,
              url: `${SITE_URL}/#product-${p.id}`,
              sku: p.id,
              brand: { "@type": "Brand", name: "Laxmikant Worldlink" },
            },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);

  const handleEnquire = (product: Product) => {
    setEnquiryProduct(product);
    setTimeout(
      () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      80,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onEnquire={handleEnquire} />
        <WhyChooseUs />
        <Process />
        <TrustSection />
        <CTA />
        <Contact enquiryProduct={enquiryProduct} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
