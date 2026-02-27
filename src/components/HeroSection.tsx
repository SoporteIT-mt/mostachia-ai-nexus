import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Calendar, ArrowRight, Play } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { BorderBeam } from '@/components/ui/border-beam';
import { BlurFade } from '@/components/ui/blur-fade';
import { CONFIG } from '@/config/constants';
import { useIsMobile } from '@/hooks/use-mobile';

const AVATARS = [
  { initials: 'MR', gradient: 'from-mint-400 to-emerald-600' },
  { initials: 'LP', gradient: 'from-amber-400 to-orange-500' },
  { initials: 'SC', gradient: 'from-cyan-400 to-blue-500' },
  { initials: 'JD', gradient: 'from-violet-400 to-purple-600' },
  { initials: 'AK', gradient: 'from-rose-400 to-pink-600' },
];

// Mini dashboard cards for the mockup
const MOCK_CARDS = [
  { label: 'Leads captados', value: '1,284', change: '+23%', color: 'mint' },
  { label: 'Respuestas IA', value: '8,491', change: '+47%', color: 'mint' },
  { label: 'Tiempo ahorrado', value: '342h', change: '+18%', color: 'gold' },
  { label: 'Conversiones', value: '89%', change: '+12%', color: 'mint' },
];

export const HeroSection = () => {
  const mockupRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // 3D Mouse Tracking for mockup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToServicios = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1f3d4b' }}
    >
      {/* Background: DotPattern */}
      <DotPattern width={24} height={24} cr={0.8} className="opacity-[0.07] text-white" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col items-center text-center">

        {/* 1. Badge Pill */}
        <BlurFade delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 mb-8">
            <span className="text-sm font-medium text-mint-400">
              🤖 +50 agentes IA desplegados en LATAM
            </span>
          </div>
        </BlurFade>

        {/* 2. H1 Masivo */}
        <BlurFade delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.15] mb-6">
            <span className="block text-white">
              Tu equipo digital con{' '}
              <span className="text-mint-400">IA</span>,
            </span>
            <span className="block text-gradient-primary">
              listo para escalar.
            </span>
          </h1>
        </BlurFade>

        {/* 3. Subtítulo */}
        <BlurFade delay={0.2}>
          <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-muted-foreground mb-10">
            Automatizamos procesos, generamos dashboards inteligentes y conectamos agentes de IA a tus datos reales.
          </p>
        </BlurFade>

        {/* 4. CTA Row */}
        <BlurFade delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  shimmerColor="rgba(127, 205, 179, 0.8)"
                  background="linear-gradient(135deg, #60b99a, #4a9e82)"
                  borderRadius="12px"
                  className="px-7 py-4 text-base sm:text-lg font-semibold shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Agendar Diagnóstico Gratis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </ShimmerButton>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={scrollToServicios}
                className="flex items-center gap-2 px-7 py-4 rounded-xl border border-white/20 hover:border-mint-400/50 bg-white/[0.04] text-white font-medium text-base sm:text-lg backdrop-blur-sm transition-all hover:bg-white/[0.08]"
              >
                <Play className="w-4 h-4" />
                Ver cómo funciona
              </button>
            </motion.div>
          </div>
        </BlurFade>

        {/* 5. Social Proof Bar */}
        <BlurFade delay={0.4}>
          <div className="flex items-center justify-center gap-3 mt-8 mb-16">
            <div className="flex -space-x-2">
              {AVATARS.map((avatar, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-navy-900 bg-gradient-to-br ${avatar.gradient} flex items-center justify-center`}
                >
                  <span className="text-[10px] font-bold text-white">{avatar.initials}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Confiado por{' '}
              <span className="text-mint-400 font-semibold">+30 empresas</span>{' '}
              en 8 industrias
            </p>
          </div>
        </BlurFade>

        {/* 6. 3D Interactive Mockup */}
        <BlurFade delay={0.5} yOffset={40}>
          <div
            ref={mockupRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-5xl mx-auto mt-12"
            style={{ perspective: '1200px' }}
          >
            <motion.div
              style={
                isMobile
                  ? { transformStyle: 'preserve-3d' as const }
                  : { rotateX, rotateY, transformStyle: 'preserve-3d' as const }
              }
              className={`relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(96,185,154,0.15)] bg-[#0F1E27] ${isMobile ? 'float' : ''}`}
            >
              <BorderBeam
                size={250}
                duration={10}
                colorFrom="hsl(155 40% 55%)"
                colorTo="hsl(42 90% 70%)"
              />

              {/* MacOS-style top bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-3 text-xs text-white/30 font-mono">dashboard.mostachia.com</span>
              </div>

              {/* Dashboard content */}
              <div className="p-4 sm:p-6">
                {/* Header row */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-mint-400/10 border border-mint-400/20 flex items-center justify-center">
                      <img src="/isotipo-mint.png" alt="MostachIA" className="w-5 h-5 object-contain" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80 font-display">Panel de Control</div>
                      <div className="text-[10px] text-white/30">MostachIA Dashboard</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400/70 font-mono">En vivo</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {MOCK_CARDS.map((card, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 sm:p-4"
                    >
                      <div className="text-[10px] sm:text-xs text-white/40 mb-1">{card.label}</div>
                      <div className="text-lg sm:text-xl font-bold text-white/90 font-mono">{card.value}</div>
                      <div className={`text-[10px] sm:text-xs font-medium mt-1 ${card.color === 'gold' ? 'text-amber-400/80' : 'text-mint-400/80'}`}>
                        {card.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini chart placeholder */}
                <div className="mt-3 sm:mt-4 rounded-xl bg-white/[0.02] border border-white/[0.04] p-3 sm:p-4 h-20 sm:h-28 flex items-end gap-1">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const h = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 20;
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-mint-400/40 to-mint-400/10"
                        style={{ height: `${h}%` }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Glow under mockup */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-mint-400/15 rounded-full blur-3xl pointer-events-none" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};
