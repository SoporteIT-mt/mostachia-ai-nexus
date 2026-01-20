import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: '5 Señales de que tu Empresa Necesita IA (Y No lo Sabe)',
    excerpt: 'Identificá los cuellos de botella operativos que la inteligencia artificial puede resolver hoy mismo.',
    category: 'IA en Empresas',
    readTime: '5 min',
    date: '15 Ene 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Guía Completa: Migración de SQL sin Downtime',
    excerpt: 'Paso a paso para trasladar millones de registros sin interrumpir tu operación.',
    category: 'Automatización SQL',
    readTime: '8 min',
    date: '10 Ene 2026',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'ROI Real: Casos de Éxito en Automatización',
    excerpt: 'Números concretos de empresas que multiplicaron su productividad con MostachIA.',
    category: 'Casos de Éxito',
    readTime: '6 min',
    date: '5 Ene 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="blog" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15, type: "spring", stiffness: 150 }}
            >
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Recursos</span>
            </motion.div>
            <h2 className="section-title mb-4">
              Recursos & <span className="text-primary">Blog</span>
            </h2>
            <p className="section-subtitle">
              Insights de IA aplicada a negocios reales
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Button variant="ghost" className="mt-4 md:mt-0 group">
              Ver todos los artículos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};