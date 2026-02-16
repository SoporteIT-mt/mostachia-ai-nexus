import { useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

interface IntegrationIconProps {
  name: string;
  icon: string;
}

export const IntegrationIcon = ({ name, icon }: IntegrationIconProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div 
      className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Skeleton while loading */}
      {!isLoaded && !hasError && (
        <Skeleton className="w-6 h-6 md:w-7 md:h-7 rounded" />
      )}
      
      {/* Fallback for errors */}
      {hasError && (
        <div className="w-6 h-6 md:w-7 md:h-7 rounded bg-muted flex items-center justify-center text-[8px] font-medium text-muted-foreground">
          {name.charAt(0)}
        </div>
      )}
      
      {/* Actual image */}
      <img 
        src={icon} 
        alt={name}
        className={`w-6 h-6 md:w-7 md:h-7 relative z-10 opacity-70 group-hover:opacity-100 transition-all duration-300 ${
          isLoaded && !hasError ? 'block' : 'hidden'
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </motion.div>
  );
};
