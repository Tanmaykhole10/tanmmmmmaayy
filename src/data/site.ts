// Use public folder images so local/deployed site serves them directly.
// Drop your real image files into `public/images/` with these names.
import logoOfficial from "/images/logo_official.svg";
import logoLight from "/images/logo_light.png";
import logoDark from "/images/logo_dark.png";
import logoSymbol from "/images/logo_symbol.png";
import onion from "/images/product-onion.png";
import tamarind from "/images/product-tamarind.png";
import whiteOnion from "/images/white-onion-powder.png";
import gingerPowder from "/images/ginger-powder.png";
import garlicPowder from "/images/garlic-powder.png";
import corianderPowder from "/images/coriander-powder.png";
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
    id: "white-onion-powder",
    name: "White Onion Powder",
    category: "Dehydrated powder",
    image: whiteOnion,
    short: "Pure, natural white onion powder with a clean flavour and smooth finish.",
    description:
      "White Onion Powder is crafted from carefully selected white onions and processed hygienically to retain natural aroma and taste. It is ideal for seasoning, marinades and food manufacturing applications.",
    highlights: [
      "100% natural",
      "No artificial flavouring or colour",
      "Hygienically processed",
      "Clean onion aroma",
      "Premium quality",
      "Kitchen-ready",
    ],
    details: [
      { label: "Product form", value: "Fine powder" },
      { label: "Packaging", value: "Resealable pouch" },
      { label: "Net weight", value: "As per order" },
      { label: "Origin", value: "India" },
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
  {
    id: "ginger-powder",
    name: "Ginger Powder",
    category: "Dehydrated powder",
    image: gingerPowder,
    short: "Warm, fresh ginger flavour in a clean and convenient powdered form.",
    description:
      "Our Ginger Powder is produced from premium ginger roots and dried under hygienic conditions to preserve the natural taste, aroma and warming character expected in culinary applications.",
    highlights: [
      "100% natural",
      "Strong ginger aroma",
      "No artificial additives",
      "Hygienically processed",
      "Premium quality",
      "Ready for blends",
    ],
    details: [
      { label: "Product form", value: "Fine powder" },
      { label: "Packaging", value: "Stand-up pouch" },
      { label: "Net weight", value: "As per order" },
      { label: "Origin", value: "India" },
    ],
  },
  {
    id: "garlic-powder",
    name: "Garlic Powder",
    category: "Dehydrated powder",
    image: garlicPowder,
    short: "Intense garlic flavour with a smooth texture for ready-to-use seasoning.",
    description:
      "Garlic Powder delivers the rich, savoury profile of fresh garlic in a convenient powdered format. It is ideal for soups, marinades, sauces, seasoning blends and food service use.",
    highlights: [
      "100% natural",
      "Bold garlic taste",
      "No artificial flavouring",
      "Hygienically processed",
      "Easy to use",
      "Premium grade",
    ],
    details: [
      { label: "Product form", value: "Fine powder" },
      { label: "Packaging", value: "Resealable pouch" },
      { label: "Net weight", value: "As per order" },
      { label: "Origin", value: "India" },
    ],
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    category: "Dehydrated powder",
    image: corianderPowder,
    short: "A fresh, aromatic coriander flavour for daily cooking and spice blends.",
    description:
      "Coriander Powder is prepared from selected coriander seeds and processed under clean, controlled conditions to preserve the natural aroma and flavour profile valued in everyday cooking.",
    highlights: [
      "100% natural",
      "Aromatic flavour",
      "No artificial colours",
      "Hygienically processed",
      "Premium quality",
      "Food-service ready",
    ],
    details: [
      { label: "Product form", value: "Fine powder" },
      { label: "Packaging", value: "Stand-up pouch" },
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
