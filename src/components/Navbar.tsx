import { Layers, Rocket, GitBranch, Users, MessageCircle, BookOpen } from "lucide-react";
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar";
import { CONFIG } from "@/config/constants";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

// Switcher de idioma inline
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const switchTo = (lang: string) => {
    if (lang === 'en') {
      const newPath = pathname.startsWith('/en') ? pathname : '/en' + (pathname === '/' ? '' : pathname);
      navigate(newPath || '/en');
    } else {
      const newPath = pathname.startsWith('/en') ? pathname.replace(/^\/en/, '') || '/' : pathname;
      navigate(newPath);
    }
  };

  const current = i18n.language;

  return (
    <div className="flex items-center gap-1 text-xs font-medium px-2">
      <button
        onClick={() => switchTo('es')}
        className={current === 'es' ? 'text-primary font-bold' : 'text-white/40 hover:text-white/70 transition-colors'}
      >
        ES
      </button>
      <span className="text-white/20">|</span>
      <button
        onClick={() => switchTo('en')}
        className={current === 'en' ? 'text-primary font-bold' : 'text-white/40 hover:text-white/70 transition-colors'}
      >
        EN
      </button>
    </div>
  );
};

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const blogUrl = isEn ? '/en/blog' : '/blog';

  const NAV_ITEMS: NavItem[] = [
    { name: t('navbar.ecosystem'), url: "#servicios", icon: Layers },
    { name: t('navbar.inAction'), url: "#agentes", icon: Rocket },
    { name: t('navbar.method'), url: "#proceso", icon: GitBranch },
    { name: t('navbar.blog'), url: blogUrl, icon: BookOpen },
    { name: t('navbar.team'), url: "#quienes-somos", icon: Users },
    { name: t('navbar.whatsapp'), url: CONFIG.WHATSAPP_URL, icon: MessageCircle },
  ];

  return (
    <NavBar
      items={NAV_ITEMS}
      logo={
        <img
          src="/isotipo-mint.png"
          alt="MostachIA"
          className="h-7 w-7 object-contain"
        />
      }
      extraRight={<LanguageSwitcher />}
    />
  );
};

export default Navbar;
