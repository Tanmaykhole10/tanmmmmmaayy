import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";
import { introDelay } from "@/lib/intro";

export function WhatsAppButton() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={company.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Laxmikant Worldlink on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6 + introDelay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.65)] sm:bottom-7 sm:right-7"
    >
      {reduced ? null : (
        <motion.span
          aria-hidden="true"
          animate={{ scale: [1, 1.7], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />
      )}
      <MessageCircle size={26} className="relative" />
    </motion.a>
  );
}
