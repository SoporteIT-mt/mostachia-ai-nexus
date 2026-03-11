import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG, trackEvent, CRO_EVENTS } from '@/config/constants';

export const FloatingWhatsApp = () => {
  const [fabVisible, setFabVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFabVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {fabVisible && (
        <motion.a
          href={CONFIG.WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(CRO_EVENTS.CTA_WHATSAPP_CLICK, { location: 'floating' })}
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 hover:shadow-emerald-500/40 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <img src="/isotipo-mint.png" alt="WhatsApp" className="h-7 w-7 object-contain brightness-0 invert" />
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-neutral-950" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
