import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { CONFIG } from "@/config/constants";

const TEAM_MEMBERS: FocusRailItem[] = [
  {
    id: "juan-cruz",
    title: "Juan Cruz Bertorello",
    description:
      "No espera que las herramientas existan — las construye. Como Chief AI Officer de MostachIA, diseña los sistemas de agentes que automatizan procesos, generan reportes y potencian negocios de industrias tan distintas como el cine, la gastronomía y el retail. Su motor es convertir problemas concretos en soluciones que funcionan solas.",
    meta: "Chief AI Officer",
    imageSrc: "/team/juan-cruz.jpg",
    href: "https://www.linkedin.com/in/juancruzbertorello/",
  },
  {
    id: "diego",
    title: "Diego González",
    description:
      "Es el puente entre lo que MostachIA puede hacer y lo que cada cliente realmente necesita. Escucha primero, propone después. Tiene la habilidad de traducir desafíos de negocio en soluciones concretas, y de generar confianza desde el primer café — o el primer mensaje de WhatsApp.",
    meta: "Business Lead",
    imageSrc: "/team/diego.jpg",
    href: "https://www.linkedin.com/in/diego-gonzalez/",
  },
  {
    id: "florencia",
    title: "Florencia Ferrer Cabrera",
    description:
      "La que hace que MostachIA se vea, se sienta y se entienda. Detrás de cada pieza de comunicación hay una decisión estratégica suya. Combina criterio creativo con foco en resultados, y se asegura de que la marca diga exactamente lo que tiene que decir, en el momento y el lugar correctos.",
    meta: "Brand & Comms",
    imageSrc: "/team/florencia.jpg",
    href: "https://www.linkedin.com/in/florencia-ferrer-cabrera/",
  },
  {
    id: "juan-andres",
    title: "Juan Andrés Huenz",
    description:
      "El que hace que todo funcione cuando nadie está mirando. Diseña y mantiene la infraestructura sobre la que corren los agentes, los flujos y las integraciones de cada cliente. Meticuloso, resolutivo y siempre un paso adelante de los problemas antes de que aparezcan.",
    meta: "Lead Infrastructure",
    imageSrc: "/team/juan-andres.jpg",
    href: "https://www.linkedin.com/in/juan-andres-huenz/",
  },
];

export const TeamSection = () => {
  return (
    <section id="quienes-somos" className="relative w-full overflow-hidden">
      {/* Header — sits ON TOP of the FocusRail */}
      <div className="relative z-10 bg-neutral-950 pt-20 lg:pt-28 pb-0">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-400/10 px-4 py-1.5 text-sm font-medium text-mint-400 mb-4">
            👥 El equipo detrás de MostachIA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
            Quiénes{" "}
            <span className="bg-gradient-to-r from-mint-400 to-emerald-300 bg-clip-text text-transparent">
              Somos
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Un equipo argentino combinando tecnología de punta con visión de negocio.
          </p>
        </div>
      </div>

      {/* FocusRail — FULL immersive section */}
      <FocusRail items={TEAM_MEMBERS} autoPlay interval={5000} loop />

      {/* CTA — sits below the rail */}
      <div className="relative z-10 bg-neutral-950 pb-20 lg:pb-28 pt-0">
        <div className="flex justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
