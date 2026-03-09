import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FocusRail, type FocusRailItem } from '@/components/ui/focus-rail';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { BlurFade } from '@/components/ui/blur-fade';
import { CONFIG } from '@/config/constants';

const TEAM_MEMBERS: FocusRailItem[] = [
  {
    id: 'juan-cruz',
    title: 'Juan Cruz Bertorello',
    description:
      'Liderando la visión de automatización inteligente para LATAM. Estrategia comercial, desarrollo de negocio y relación con clientes.',
    meta: 'CEO & Co-founder',
    imageSrc: '/team/juan-cruz.jpg',
    href: 'https://www.linkedin.com/in/juancruzbertorello/',
  },
  {
    id: 'diego',
    title: 'Diego González',
    description:
      'Arquitecto de las soluciones técnicas y la plataforma de agentes. Infraestructura, bases de datos y automatización avanzada.',
    meta: 'CTO & Co-founder',
    imageSrc: '/team/diego.jpg',
    href: 'https://www.linkedin.com/in/diego-gonzalez/',
  },
  {
    id: 'florencia',
    title: 'Florencia Ferrer Cabrera',
    description:
      'Diseñando experiencias de usuario excepcionales y optimizando los procesos de entrega de cada proyecto.',
    meta: 'Head of Ops & UX',
    imageSrc: '/team/florencia.jpg',
    href: 'https://www.linkedin.com/in/florencia-ferrer-cabrera/',
  },
  {
    id: 'juan-andres',
    title: 'Juan Andrés Huenz',
    description:
      'Construyendo los agentes de IA que potencian cada solución. Desarrollo, machine learning e integración de APIs.',
    meta: 'Lead AI Developer',
    imageSrc: '/team/juan-andres.jpg',
    href: 'https://www.linkedin.com/in/juan-andres-huenz/',
  },
];

export const TeamSection = () => {
  return (
    <section id="quienes-somos" className="relative w-full py-20 lg:py-28 overflow-hidden">
      {/* Subtle radial glow behind section */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mint-400/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Section header */}
      <div className="container mx-auto px-4 sm:px-6">
        <BlurFade delay={0.1} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 text-sm font-medium text-mint-400 mb-4">
            👥 El equipo detrás de MostachIA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            Quiénes Somos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
            Un equipo argentino combinando tecnología de punta con visión de negocio.
          </p>
        </BlurFade>
      </div>

      {/* FocusRail — the 3D card carousel */}
      <FocusRail items={TEAM_MEMBERS} autoPlay interval={5000} loop />

      {/* CTA button */}
      <div className="container mx-auto px-4 sm:px-6">
        <BlurFade delay={0.3} className="flex justify-center mt-12">
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                shimmerColor="rgba(127, 205, 179, 0.8)"
                background="linear-gradient(135deg, #60b99a, #4a9e82)"
                borderRadius="12px"
                className="px-7 py-4 text-base font-semibold shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Conocé al equipo en una llamada
                <ArrowRight className="ml-2 w-4 h-4" />
              </ShimmerButton>
            </a>
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
};

export default TeamSection;
