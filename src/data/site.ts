// Use public folder images so local/deployed site serves them directly.
// Drop your real image files into `public/images/` with these names.
import logoOfficial from "/images/logo_official.svg";
import logoLight from "/images/logo_light.png";
import logoDark from "/images/logo_dark.png";
import logoSymbol from "/images/logo_symbol.png";
import onion from "/images/product-onion.png";
import tamarind from "/images/product-tamarind.png";
import hero from "/images/hero.jpg";
import about from "/images/about.jpg";
import trust from "/images/trust.jpg";

export const images = {
  logoOfficial,
  logoLight,
  logoDark,
  logoSymbol,
  hero,
  about,
  trust,
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
    image: tamarind,
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
    image: onion,
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
