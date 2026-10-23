import { useState } from "react";
import { SectionHeading } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { products, type Product } from "@/data/site";

export function Products({ onEnquire }: { onEnquire: (product: Product) => void }) {
  const [selected, setSelected] = useState<Product | null>(null);

  const enquire = (product: Product) => {
    setSelected(null);
    onEnquire(product);
  };

  return (
    <section id="products" className="relative bg-secondary/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Prepared with care, packed with consistency"
          intro="Displayed for information and business enquiries. Share your requirement and our team will get back to you."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {
            // Ensure tamarind pulp appears on the left and red onion on the right
            // by explicitly ordering these two products if present.
            (() => {
              const tam = products.find((p) => p.id === "tamarind-pulp");
              const oni = products.find((p) => p.id === "red-onion-powder");
              const others = products.filter((p) => p.id !== "tamarind-pulp" && p.id !== "red-onion-powder");
              const ordered = [tam, oni, ...others].filter(Boolean) as Product[];
              return ordered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onView={setSelected}
                  onEnquire={onEnquire}
                />
              ));
            })()
          }
        </div>
      </div>

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
        onEnquire={enquire}
      />
    </section>
  );
}
