"use client";

import { motion } from "framer-motion";

const whatsappHref =
  "https://wa.me/919903334513?text=Hello%20Infralyx%20Technologies%2C%20I%20need%20a%20mobile%20repair%20service";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="group relative"
      >
        <div className="pointer-events-none absolute -left-[152px] top-1/2 hidden -translate-y-1/2 rounded-full border border-white/12 bg-slate-950/70 px-4 py-2 text-xs text-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl transition group-hover:block">
          Chat with us instantly
        </div>

        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          title="Chat with us instantly"
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 380, damping: 24 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.34),0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-md outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-200/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.89 11.89 0 0 0 12.03 0C5.44 0 .08 5.35.08 11.94c0 2.1.55 4.15 1.59 5.95L0 24l6.26-1.63a11.94 11.94 0 0 0 5.77 1.48h.01c6.59 0 11.95-5.35 11.95-11.94 0-3.2-1.25-6.2-3.47-8.43ZM12.04 21.7h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.71.97.99-3.62-.23-.37a9.81 9.81 0 0 1-1.51-5.2C2.22 6.05 6.44 1.83 12.04 1.83c2.64 0 5.12 1.03 6.98 2.9a9.78 9.78 0 0 1 2.89 6.98c0 5.6-4.23 9.99-9.87 9.99Zm5.43-7.41c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.69.15-.21.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.69-1.66-.95-2.27-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.54.08-.82.38-.28.3-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.15.15.2 2.15 3.28 5.21 4.6.73.31 1.3.5 1.75.64.73.23 1.39.2 1.91.12.58-.09 1.79-.73 2.05-1.44.25-.71.25-1.32.18-1.44-.07-.12-.27-.2-.56-.35Z" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
}