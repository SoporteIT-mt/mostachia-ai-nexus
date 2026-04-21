import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CONFIG } from "@/config/constants";
import { useTranslation } from 'react-i18next';

export const TeamSection = () => {
  const { t } = useTranslation();

  const TEAM_MEMBERS: FocusRailItem[] = [
    {
      id: "juan-cruz",
      title: t('team.m1Name'),
      description: t('team.m1Desc'),
      meta: t('team.m1Role'),
      imageSrc: "/team/juan-cruz.jpg.jpeg",
      href: "https://www.linkedin.com/in/juanbertorello/",
    },
    {
      id: "diego",
      title: t('team.m2Name'),
      description: t('team.m2Desc'),
      meta: t('team.m2Role'),
      imageSrc: "/team/diego.jpg.jpeg",
      href: "https://www.linkedin.com/in/diegogonzalez316/",
    },
    {
      id: "florencia",
      title: t('team.m3Name'),
      description: t('team.m3Desc'),
      meta: t('team.m3Role'),
      imageSrc: "/team/florencia.jpg",
      href: "https://www.linkedin.com/in/florencia-ferrer-0a6455148/",
    },
    {
      id: "juan-andres",
      title: t('team.m4Name'),
      description: t('team.m4Desc'),
      meta: t('team.m4Role'),
      imageSrc: "/team/juan-andres.jpg.jpeg",
      href: "https://www.linkedin.com/in/jahuenz/",
    },
  ];

  return (
    <section id="quienes-somos" className="relative w-full py-20 lg:py-28">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 text-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 text-sm font-medium text-mint-400 mb-4">
          {t('team.badge')}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
          {t('team.title')}{" "}
          <span className="bg-gradient-to-r from-mint-400 to-emerald-300 bg-clip-text text-transparent">
            {t('team.titleAccent')}
          </span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
          {t('team.subtitle')}
        </p>
      </div>

      {/* Carousel */}
      <FocusRail items={TEAM_MEMBERS} autoPlay interval={5000} loop />

      {/* CTA */}
      <div className="flex justify-center mt-8">
        <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
          <a href={CONFIG.CALCOM_URL} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              shimmerColor="rgba(127, 205, 179, 0.8)"
              background="linear-gradient(135deg, #60b99a, #4a9e82)"
              borderRadius="12px"
              className="px-7 py-4 text-base font-semibold shadow-[0_4px_24px_rgba(96,185,154,0.4)]"
            >
              <Calendar className="mr-2 w-5 h-5" />
              {t('team.ctaBtn')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </ShimmerButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
