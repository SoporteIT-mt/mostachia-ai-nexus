import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoUrl: string;
  title: string;
}

export const DemoModal = ({ isOpen, onClose, demoUrl, title }: DemoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 demo-window flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="demo-window-header">
              <div className="flex items-center gap-2">
                <button 
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-destructive hover:bg-destructive/80 transition-colors"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/50 rounded-lg px-4 py-1.5 text-xs text-muted-foreground font-mono max-w-md mx-auto text-center flex items-center justify-center gap-2">
                  <span>demo.mostachia.com/{title.toLowerCase().replace(/\s+/g, '-')}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Minus className="w-4 h-4" />
                <Square className="w-3 h-3" />
                <button onClick={onClose}>
                  <X className="w-4 h-4 hover:text-foreground transition-colors" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div id="demo-container" className="flex-1 overflow-hidden bg-background">
              <iframe
                src={demoUrl}
                className="w-full h-full border-0"
                title={title}
                loading="lazy"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};