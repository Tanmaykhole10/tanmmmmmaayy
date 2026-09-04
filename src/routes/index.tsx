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
import { products, type Product } from "@/data/site";

const SITE_URL = "https://laxmi-world-connect.lovable.app";

const title = "Laxmikant Worldlink — Quality Food Products";
const description =
  "Laxmikant Worldlink prepares and supplies natural, hygienically processed food products including premium tamarind pulp and red onion powder. Enquire with our team.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://laxmi-world-connect.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://laxmi-world-connect.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Laxmikant Worldlink",
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
              image: p.image,
              category: p.category,
              url: `${SITE_URL}/#products`,
              brand: { "@type": "Brand", name: "Laxmikant Worldlink" },
            },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  const handleEnquire = (_product: Product) => {
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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onEnquire={handleEnquire} />
        <WhyChooseUs />
        <TrustSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
