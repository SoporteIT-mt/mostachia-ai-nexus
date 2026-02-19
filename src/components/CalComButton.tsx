import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONFIG } from '@/config/constants';

interface CalComButtonProps {
  text?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export const CalComButton = ({ 
  text = 'Agendar Consultoría',
  className = '',
  variant = 'default',
  size = 'default',
}: CalComButtonProps) => {
  const handleClick = () => {
    window.open(CONFIG.CALCOM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`btn-glow rounded-xl ${className}`}
      aria-label="Agendar consultoría gratuita"
    >
      <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
      {text}
    </Button>
  );
};
