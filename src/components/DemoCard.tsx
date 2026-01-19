import { motion } from 'framer-motion';
import { ArrowUpRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface DemoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  isFlagship?: boolean;
  isLocked?: boolean;
  onTryDemo: () => void;
}

export const DemoCard = ({
  title,
  description,
  icon: Icon,
  badge,
  isFlagship = false,
  isLocked = false,
  onTryDemo,
}: DemoCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-card p-6 h-full flex flex-col relative group ${
        isFlagship ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl" />
      </div>

      <div className="relative flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
            isFlagship 
              ? 'bg-gradient-to-br from-primary to-accent' 
              : 'bg-primary/10'
          }`}>
            <Icon className={`w-7 h-7 ${isFlagship ? 'text-white' : 'text-primary'}`} />
          </div>
          {badge && (
            <span className="badge-flagship">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className={`font-bold mb-2 ${isFlagship ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        <p className={`text-muted-foreground flex-1 ${isFlagship ? 'text-base' : 'text-sm'}`}>
          {description}
        </p>

        {/* Action */}
        <div className="mt-6">
          {isLocked ? (
            <Button
              variant="outline"
              className="w-full rounded-xl group/btn"
              disabled
            >
              <Lock className="w-4 h-4 mr-2" />
              Próximamente
            </Button>
          ) : (
            <Button
              onClick={onTryDemo}
              className={`w-full rounded-xl group/btn ${isFlagship ? 'btn-glow' : ''}`}
              variant={isFlagship ? 'default' : 'outline'}
            >
              Probar Demo
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Button>
          )}
        </div>
      </div>

      {/* Locked overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] rounded-2xl flex items-center justify-center">
          <div className="text-center p-4">
            <Lock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Suscríbete para acceso total
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};
