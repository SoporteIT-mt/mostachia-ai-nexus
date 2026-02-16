import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalComButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'default' | 'lg' | 'xl';
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

// Cal.com booking link - replace with your actual Cal.com username
const CAL_LINK = 'https://cal.com/mostachia/consultoria';

export const CalComButton = ({ 
  variant = 'primary', 
  size = 'lg',
  children = 'Agendar Consultoría',
  className = '',
  showIcon = true
}: CalComButtonProps) => {
  const handleClick = () => {
    // Opens Cal.com in a new tab or could use Cal.com embed
    window.open(CAL_LINK, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'primary') {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          size={size}
          className={`btn-glow rounded-xl px-8 group ${className}`}
          onClick={handleClick}
        >
          {showIcon && <Calendar className="mr-2 w-5 h-5" />}
          {children}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    );
  }

  if (variant === 'outline') {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          size={size}
          variant="outline"
          className={`rounded-xl px-8 border-2 border-white/20 hover:border-primary/50 bg-white/5 backdrop-blur-sm group ${className}`}
          onClick={handleClick}
        >
          {showIcon && <Calendar className="mr-2 w-5 h-5" />}
          {children}
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        size={size}
        variant="ghost"
        className={`rounded-xl group ${className}`}
        onClick={handleClick}
      >
        {showIcon && <Calendar className="mr-2 w-5 h-5" />}
        {children}
      </Button>
    </motion.div>
  );
};
