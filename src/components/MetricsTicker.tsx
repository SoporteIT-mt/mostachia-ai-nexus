import React, { useEffect, useState, useRef } from 'react';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.8,
    rotateX: -15,
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
};

export const MetricsTicker = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-8 border-y border-border/50 overflow-hidden relative">
      {/* Glow effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div 
        className="flex ticker-animate"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[...metrics, ...metrics].map((metric, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex items-center gap-4 px-8 md:px-12 whitespace-nowrap group"
          >
            <motion.div 
              variants={iconVariants}
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.4 }
              }}
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 transition-all duration-300"
            >
              <metric.icon className="w-5 h-5 text-primary" />
            </motion.div>
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CountUpNumber 
                end={metric.value} 
                format={metric.format} 
                prefix={metric.prefix} 
                suffix={metric.suffix}
              />
              <p className="text-xs text-muted-foreground font-medium">{metric.label}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};