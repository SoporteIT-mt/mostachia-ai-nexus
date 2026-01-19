import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Database, DollarSign, Users, Zap, Clock } from 'lucide-react';

const metrics = [
  { icon: DollarSign, value: 12000000, prefix: '$', suffix: '', label: 'Ahorrados a clientes', format: 'currency' },
  { icon: Database, value: 450, prefix: '', suffix: '+', label: 'Bases Migradas', format: 'number' },
  { icon: Users, value: 150, prefix: '', suffix: '+', label: 'Empresas Transformadas', format: 'number' },
  { icon: Zap, value: 10000000, prefix: '', suffix: '+', label: 'Automatizaciones Ejecutadas', format: 'compact' },
  { icon: Clock, value: 98, prefix: '', suffix: '%', label: 'Precisión IA', format: 'number' },
  { icon: TrendingUp, value: 340, prefix: '', suffix: '%', label: 'ROI Promedio', format: 'number' },
];

const formatValue = (value: number, format: string, prefix: string, suffix: string) => {
  if (format === 'currency') {
    return `${prefix}${(value / 1000000).toFixed(0)}M${suffix}`;
  }
  if (format === 'compact') {
    return `${prefix}${(value / 1000000).toFixed(0)}M${suffix}`;
  }
  return `${prefix}${value}${suffix}`;
};

const CountUpNumber = ({ 
  end, 
  format, 
  prefix, 
  suffix 
}: { 
  end: number; 
  format: string; 
  prefix: string; 
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, isInView]);

  return (
    <span ref={ref} className="stat-number text-2xl md:text-3xl">
      {formatValue(count, format, prefix, suffix)}
    </span>
  );
};

export const MetricsTicker = () => {
  return (
    <section className="py-6 border-y border-border/50 overflow-hidden relative">
      {/* Glow effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex ticker-animate">
        {[...metrics, ...metrics].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 px-8 md:px-12 whitespace-nowrap"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <metric.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CountUpNumber 
                end={metric.value} 
                format={metric.format} 
                prefix={metric.prefix} 
                suffix={metric.suffix}
              />
              <p className="text-xs text-muted-foreground font-medium">{metric.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};