import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlurFade } from '@/components/ui/blur-fade';
import { Spotlight } from '@/components/ui/spotlight';
import { Marquee } from '@/components/ui/marquee';

interface Integration {
  name: string;
  svg: React.ReactNode;
}

// All integrations as inline SVGs to avoid broken external URLs
const allIntegrations: Integration[] = [
  {
    name: 'WhatsApp',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    name: 'MySQL',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.723-1.01 1.084-1.583 1.084-.16 0-.36-.04-.6-.127v-.553c.097.012.21.02.338.02.26 0 .468-.07.627-.206.19-.163.284-.352.284-.566 0-.144-.057-.39-.17-.74L6.23 14.615h.857l.87 2.692c.14.46.197.76.165.9-.374 1.18-.643 1.926-.808 2.238l-.006.004z"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.852 1.81 2.054.836 3.228.354 4.986.454 7.38c.025.609.156 1.236.304 1.9.149.666.363 1.407.63 2.17.534 1.528 1.25 3.243 2.063 4.41.39.586.858 1.137 1.434 1.438.287.149.608.234.939.213.263-.018.527-.1.727-.255.248.36.544.633.865.832.354.218.739.35 1.136.381.396.031.756-.058 1.062-.246a1.87 1.87 0 0 0 .391-.32c.054.047.107.09.163.127.59.382 1.21.482 1.812.402.601-.08 1.165-.356 1.645-.706l.004-.003.457-.339c.236-.174.46-.31.67-.38a.88.88 0 0 1 .304-.053c.077 0 .136.009.183.025.167.175.434.35.741.485.364.16.79.26 1.236.29h.013c.94.019 1.74-.33 2.322-.907.583-.578.972-1.365 1.162-2.2.146-.635.198-1.293.168-1.932l-.003-.044c.387-.424.713-.934.966-1.527.387-.914.585-2.006.502-3.236A4.725 4.725 0 0 0 23.5 5.104a5.89 5.89 0 0 0-1.14-1.745A7.532 7.532 0 0 0 19.67.653 8.924 8.924 0 0 0 17.128 0z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218z"/>
      </svg>
    ),
  },
  {
    name: 'n8n',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12.69 3.32l-1.2.53a.5.5 0 0 0-.27.27l-.53 1.2a.25.25 0 0 1-.46 0l-.53-1.2a.5.5 0 0 0-.27-.27l-1.2-.53a.25.25 0 0 1 0-.46l1.2-.53a.5.5 0 0 0 .27-.27l.53-1.2a.25.25 0 0 1 .46 0l.53 1.2a.5.5 0 0 0 .27.27l1.2.53a.25.25 0 0 1 0 .46zM18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-6 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-6 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>
    ),
  },
  {
    name: 'Make',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.8H6.432V7.2h11.136v9.6z"/>
      </svg>
    ),
  },
  {
    name: 'Zapier',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M15.557 11.988h4.428l-3.138 3.138v4.428l-3.138-3.138H9.281l3.138-3.138V8.85l3.138 3.138zm-7.114 0H4.015l3.138-3.138V4.422l3.138 3.138h4.428L11.581 10.698v4.428L8.443 11.988z"/>
      </svg>
    ),
  },
  {
    name: 'Telegram',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    name: 'Gmail',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
  {
    name: 'Supabase',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.197l-.888 5.555C5.108 22.898 8.118 24 11.738 24c2.666 0 4.745-.64 6.264-1.899 1.613-1.336 2.402-3.344 2.402-5.718 0-4.196-2.549-5.873-6.428-7.233z"/>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104zm-1.332-17.66a3.104 3.104 0 0 0-1.607-.463c-1.288 0-1.942.672-2.298 1.337l3.905-1.874zm-2.704 1.142c0 .038-.775 2.501-.775 2.501a3.204 3.204 0 0 0-1.396-.328c-1.128 0-1.185.707-1.185.886 0 .972 2.534 1.344 2.534 3.628 0 1.795-1.139 2.951-2.673 2.951-1.843 0-2.784-.978-2.784-.978l.494-1.633s.968.832 1.786.832c.533 0 .751-.42.751-.726 0-1.269-2.079-1.326-2.079-3.415 0-1.756 1.261-3.455 3.81-3.455.985 0 1.517.283 1.517.283v-.546z"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L2.58 2.48c-.467.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.726l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM1.936 1.035l13.869-1.027c1.681-.14 2.1.093 2.801.607l3.876 2.707c.467.326.607.747.607 1.213v16.378c0 1.026-.373 1.632-1.681 1.726l-15.458.933c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.87-1.632z"/>
      </svg>
    ),
  },
  {
    name: 'MercadoPago',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c2.34 0 4.453.94 5.988 2.46H6.012A8.36 8.36 0 0 1 12 3.6zm6.636 3.66c.44.6.812 1.256 1.1 1.956H4.264c.288-.7.66-1.356 1.1-1.956zm1.6 3.156c.108.432.18.876.216 1.332H3.548c.036-.456.108-.9.216-1.332zm.168 2.532a8.36 8.36 0 0 1-.168 1.332H3.764a8.36 8.36 0 0 1-.168-1.332zm-.648 2.532c-.288.7-.66 1.356-1.1 1.956H5.364a8.36 8.36 0 0 1-1.1-1.956zm-1.768 3.156A8.36 8.36 0 0 1 12 20.4a8.36 8.36 0 0 1-5.988-2.46z"/>
      </svg>
    ),
  },
  {
    name: 'Google Sheets',
    svg: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M11.318 12.545H7.91v-1.909h3.41v1.909zM14.728 0v6h6l-6-6zm1.363 10.636h-3.41v1.909h3.41v-1.909zm0 3.273h-3.41v1.909h3.41v-1.909zM7.91 14.545h3.41v-1.909H7.91v1.909zm0 3.273h3.41v-1.909H7.91v1.909zm0 3.272h3.41v-1.909H7.91v1.909zm6.818 0h3.41v-1.909h-3.41v1.909zm0-3.272h3.41v-1.909h-3.41v1.909zM14.091 6V0H3.818C3.272 0 2.726.545 2.726 1.09v21.82c0 .545.546 1.09 1.091 1.09h16.364c.545 0 1.09-.545 1.09-1.09V6h-7.18zM6.545 21.273V9.273h10.91v12H6.544z"/>
      </svg>
    ),
  },
];

const row1 = allIntegrations.slice(0, Math.ceil(allIntegrations.length / 2));
const row2 = allIntegrations.slice(Math.ceil(allIntegrations.length / 2));

export const IntegrationsSection = () => {
  return (
    <section id="integraciones" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="relative text-center mb-16">
          <Spotlight size={600} fill="hsl(162 100% 39% / 0.10)" />
          <BlurFade>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Integraciones Reales</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Se Integra con <span className="text-gradient-primary">Todo tu Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conectamos con las herramientas que ya usás.
            </p>
          </BlurFade>
        </div>

        {/* Marquee rows with inline SVG icons */}
        <BlurFade delay={0.2} className="max-w-5xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <Marquee speed={35} pauseOnHover>
              {row1.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 mx-6 group cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-foreground/50 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                    {item.svg}
                  </div>
                  <span className="text-[10px] text-muted-foreground/70 group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <Marquee speed={35} pauseOnHover reverse>
              {row2.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 mx-6 group cursor-default">
                  <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-foreground/50 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                    {item.svg}
                  </div>
                  <span className="text-[10px] text-muted-foreground/70 group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.4} className="text-center">
          <p className="text-muted-foreground mb-4">
            ¿No ves tu herramienta? <span className="text-primary font-medium">Desarrollamos integraciones custom.</span>
          </p>
          <Button variant="outline" className="rounded-xl px-6" asChild>
            <a href="#contacto">
              Consultar por integración
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </BlurFade>
      </div>
    </section>
  );
};
