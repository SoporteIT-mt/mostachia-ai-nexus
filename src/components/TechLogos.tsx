import { motion } from 'framer-motion';

// Real tech company/tool logos using SVG paths - Extended list
export const techLogos = [
  {
    name: 'Google Cloud',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-8.825-6.893zm5.097 13.39a3.846 3.846 0 0 1-2.853 1.395h-4.905c-1.934 0-3.612-1.606-3.677-3.541a3.7 3.7 0 0 1 3.54-3.851h.093a1.39 1.39 0 0 0 1.18-.678 5.192 5.192 0 0 1 4.809-2.788 4.986 4.986 0 0 1 4.623 3.544 1.478 1.478 0 0 0 1.127 1.033 2.322 2.322 0 0 1-.122 4.596 3.846 3.846 0 0 1-2.853-1.395"/>
      </svg>
    )
  },
  {
    name: 'AWS',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/>
      </svg>
    )
  },
  {
    name: 'Microsoft',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z"/>
      </svg>
    )
  },
  {
    name: 'Shopify',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.756c-.022-.142-.17-.227-.285-.249-.114-.022-2.357-.042-2.357-.042s-1.747-1.698-1.912-1.869c-.054-.054-.118-.075-.18-.089l-.955 21.566zM11.592 6.24c-.182.085-.387.17-.609.263 0-.127.005-.25.005-.385 0-1.177-.164-2.127-.432-2.88l1.762.268c-.318.767-.562 1.707-.726 2.734zm2.288-2.66c-.282-.032-.588-.032-.92-.032-.086 0-.168.011-.255.011.372-.653.856-1.219 1.45-1.56l-.275 1.581zm-.48-3.27c.052 0 .106.004.159.011-.77.418-1.589 1.473-1.935 3.587-.538.032-1.063.043-1.599.043-.005-1.017.075-1.753.234-2.297.429-1.466 1.56-2.368 3.141-1.344zm3.174 5.003c-.014-.096-.052-.16-.117-.202-1.738-.112-4.093.257-4.093.257s-.037.128-.06.252c1.29-.055 2.515-.055 3.638-.043.036.546.061 1.134.079 1.761l-1.186.385-.879.286c.019-.364.027-.729.027-1.093l-2.206.706s-.048 1.401-.064 2.159c.695-.224 1.442-.466 2.226-.717 0 0 0 0 0 0l.879-.287c-.02 1.189-.092 2.37-.21 3.517l-2.895.937c-.02-.728-.032-1.458-.032-2.19l-2.213.717v2.67l-2.053.666c-.017-.705-.027-1.41-.027-2.116l-2.213.719s.01 1.55.027 2.63c-.759.246-1.316.426-1.478.479-.162.054-.418.118-.45.365-.032.246 0 1.93.06 3.244.054 1.314.086 1.968.172 2.49.086.523.14.822.248.926.107.107.268.142.462.086.193-.055 6.262-2.032 6.262-2.032s.054-.033.064-.086c.011-.054.086-1.468.128-2.66l2.053-.666c.011.556.021 1.095.032 1.607.011.557-.021 1.127-.053 1.709-.032.581-.075 1.18-.14 1.807-.043.427-.086.87-.14 1.316l-.032.289 7.203-2.286c-.001.001.15-10.5-.233-13.067zM14.44 17.91c-.15.032-.289.064-.418.086-.129.021-.236.043-.322.064a.41.41 0 0 1-.15.021l.193-1.864.697-.225v1.918z"/>
      </svg>
    )
  },
  {
    name: 'Stripe',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
      </svg>
    )
  },
  {
    name: 'Twilio',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0zm0 20.25c-4.556 0-8.25-3.694-8.25-8.25S7.444 3.75 12 3.75s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25zm3.45-11.7a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm0 7.2a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm-6.9-7.2a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm0 7.2a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2z"/>
      </svg>
    )
  },
  {
    name: 'SendGrid',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M8 0h8v8h8v8h-8v8H8v-8H0V8h8V0zm8 16h8v8h-8v-8zM0 0h8v8H0V0z"/>
      </svg>
    )
  },
  {
    name: 'Slack',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    )
  },
  {
    name: 'Notion',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.186c-.094-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
      </svg>
    )
  },
  {
    name: 'Salesforce',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.345 0-.69-.045-1.02-.12a3.975 3.975 0 0 1-3.57 2.19c-.63 0-1.245-.15-1.785-.42a4.804 4.804 0 0 1-4.35 2.79c-2.31 0-4.26-1.665-4.69-3.87a4.013 4.013 0 0 1-.54.045c-2.34 0-4.23-1.92-4.23-4.29 0-1.86 1.17-3.435 2.82-4.035-.06-.345-.09-.69-.09-1.05 0-3.27 2.64-5.925 5.9-5.925 1.95-.015 3.72.96 4.72 2.805z"/>
      </svg>
    )
  },
  {
    name: 'HubSpot',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.2 2.2 0 0 0 17.238.84h-.065a2.2 2.2 0 0 0-2.193 2.193v.065a2.19 2.19 0 0 0 1.252 1.973v2.86a6.27 6.27 0 0 0-2.838 1.476l-7.55-5.874a2.625 2.625 0 1 0-1.39 1.884l7.32 5.69a6.28 6.28 0 0 0-.104 1.146 6.274 6.274 0 0 0 6.275 6.275c.192 0 .39-.017.59-.04l2.72 3.643a1.69 1.69 0 1 0 1.405-1.086l-2.61-3.493a6.274 6.274 0 0 0-2.622-10.622zm-.982 9.755a3.47 3.47 0 1 1 0-6.94 3.47 3.47 0 0 1 0 6.94z"/>
      </svg>
    )
  },
  {
    name: 'Zapier',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
        <path d="M15.633 1.927l-3.186 6.559-.15.309-.15-.309L8.96 1.927H3.058l3.186 6.559.15.309H0v6.41h6.394l-.15.309-3.186 6.559h5.902l3.187-6.559.15-.309.15.309 3.186 6.559h5.902l-3.186-6.559-.15-.309H24v-6.41h-6.394l.15-.309 3.186-6.559h-5.309zm-3.336 10.336a1.26 1.26 0 1 1 0-2.521 1.26 1.26 0 0 1 0 2.521z"/>
      </svg>
    )
  }
];

interface TechLogosBarProps {
  title?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'grid' | 'marquee';
}

export const TechLogosBar = ({ 
  title = "Integramos con las herramientas que ya usás", 
  className = "",
  variant = 'default'
}: TechLogosBarProps) => {
  // Marquee variant - infinite scroll animation
  if (variant === 'marquee') {
    return (
      <div className={`overflow-hidden ${className}`}>
        {title && (
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center mb-8"
          >
            {title}
          </motion.p>
        )}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee track */}
          <div className="flex animate-marquee">
            {[...techLogos, ...techLogos].map((logo, i) => (
              <motion.div
                key={`${logo.name}-${i}`}
                whileHover={{ scale: 1.2, y: -4 }}
                className="flex-shrink-0 w-14 h-14 mx-6 text-foreground/50 hover:text-primary transition-all duration-300 cursor-default"
                title={logo.name}
              >
                {logo.svg}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`${className}`}>
        {title && (
          <p className="text-sm text-muted-foreground text-center mb-6">
            {title}
          </p>
        )}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
          {techLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 p-2.5">
                {logo.svg}
              </div>
              <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity text-center">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center justify-center gap-6 flex-wrap ${className}`}>
        {techLogos.slice(0, 6).map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="w-8 h-8 text-foreground transition-all duration-300 cursor-default"
            title={logo.name}
          >
            {logo.svg}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      {title && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground text-center mb-8"
        >
          {title}
        </motion.p>
      )}
      <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
        {techLogos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.15, y: -4 }}
            className="w-10 h-10 md:w-11 md:h-11 text-foreground transition-all duration-300 cursor-default"
            title={logo.name}
          >
            {logo.svg}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Placeholder images for real people (using professional headshots from UI Faces/Unsplash style)
export const realPeopleImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
];

// Real company logos for cases/testimonials
export const realCompanyLogos = [
  { name: 'Mercado Libre', color: 'from-yellow-400 to-yellow-500', icon: '🛒' },
  { name: 'Globant', color: 'from-green-400 to-green-600', icon: '🌐' },
  { name: 'Despegar', color: 'from-purple-500 to-purple-700', icon: '✈️' },
  { name: 'Ualá', color: 'from-blue-500 to-blue-700', icon: '💳' },
  { name: 'Technisys', color: 'from-cyan-400 to-cyan-600', icon: '🏦' },
  { name: 'Auth0', color: 'from-orange-500 to-red-500', icon: '🔐' },
];

// Client logos for testimonials/cases section
export const clientLogos = [
  { name: 'TechCorp', initials: 'TC', color: 'from-blue-500 to-cyan-500' },
  { name: 'DataFlow', initials: 'DF', color: 'from-purple-500 to-pink-500' },
  { name: 'CloudScale', initials: 'CS', color: 'from-green-500 to-emerald-500' },
  { name: 'AIStack', initials: 'AI', color: 'from-orange-500 to-amber-500' },
  { name: 'Nexus', initials: 'NX', color: 'from-red-500 to-rose-500' },
  { name: 'Quantum', initials: 'QT', color: 'from-indigo-500 to-violet-500' },
];

export const ClientLogosBar = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-6 md:gap-10 flex-wrap ${className}`}>
    {clientLogos.map((client, i) => (
      <motion.div
        key={client.name}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm cursor-default group"
      >
        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${client.color} flex items-center justify-center shadow-lg`}>
          <span className="font-bold text-xs text-white">{client.initials}</span>
        </div>
        <span className="font-display font-semibold text-sm text-foreground/80 group-hover:text-foreground transition-colors hidden sm:block">
          {client.name}
        </span>
      </motion.div>
    ))}
  </div>
);
