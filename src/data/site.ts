import logoLight from "@/assets/logo_official.png.asset.json";
import logoDark from "@/assets/logo_dark.png.asset.json";
import logoSymbol from "@/assets/logo_symbol.png.asset.json";
import onion from "@/assets/product-onion.asset.json";
import tamarind from "@/assets/product-tamarind.asset.json";
import hero from "@/assets/hero-globe.png.asset.json";
import about from "@/assets/about-plain.jpg.asset.json";
import trust from "@/assets/trust.jpg.asset.json";

export const images = {
  logoLight: logoLight.url,
  logoDark: logoDark.url,
  logoSymbol: logoSymbol.url,
  hero: hero.url,
  about: about.url,
  trust: trust.url,
};


export const company = {
  name: "Laxmikant Worldlink",
  phones: ["+91 89763 23628", "+91 90821 06764"],
  email: "laxmikantwl09@gmail.com",
  address:
    "Shiv Kalpataru Arcade Building No. 2, Room No. 302, Plot No. 1, Sector 17, Kamothe, Navi Mumbai 410209",
  whatsapp: "+91 89763 23628",
  hours: "[Business Hours]",
  maps: "[Google Maps Location]",
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  short: string;
  description: string;
  highlights: string[];
  details: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "tamarind-pulp",
    name: "Premium Tamarind Pulp",
    category: "Ready-to-use pulp",
    image: tamarind.url,
    short: "Ready-to-use tamarind pulp with a consistent, rich natural taste.",
    description:
      "Our Premium Tamarind Pulp is prepared for kitchens and food businesses that need a dependable, consistent tamarind base. It is ready to use straight from the pack, with no artificial colours added.",
    highlights: [
      "100% natural",
      "Ready to use",
      "Consistent taste",
      "No artificial colours",
      "Hygienically processed",
      "Commercial grade",
    ],
    details: [
      { label: "Product form", value: "Pulp" },
      { label: "Packaging", value: "Spouted stand-up pouch" },
      { label: "Pack size", value: "As per order" },
    ],
  },
  {
    id: "red-onion-powder",
    name: "Red Onion Powder",
    category: "Dehydrated powder",
    image: onion.url,
    short: "Pure, natural and flavourful red onion powder for everyday cooking.",
    description:
      "Red Onion Powder made from quality red onions, hygienically processed and packed to retain natural aroma and taste. No artificial flavouring or colour is added.",
    highlights: [
      "100% natural",
      "No artificial flavouring or colour",
      "Hygienically processed",
      "Natural aroma & taste",
      "Premium quality",
      "Made in India",
    ],
    details: [
      { label: "Product form", value: "Fine powder" },
      { label: "Packaging", value: "Resealable stand-up pouch" },
      { label: "Net weight", value: "As per order" },
      { label: "Origin", value: "India" },
    ],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];
