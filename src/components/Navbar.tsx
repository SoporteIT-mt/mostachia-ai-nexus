import { Layers, Rocket, GitBranch, Users, MessageCircle, BookOpen } from "lucide-react";
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar";
import { CONFIG } from "@/config/constants";

const NAV_ITEMS: NavItem[] = [
  { name: "Ecosistema IA", url: "#servicios", icon: Layers },
  { name: "En Acción", url: "#agentes", icon: Rocket },
  { name: "Método", url: "#proceso", icon: GitBranch },
  { name: "Blog", url: "/blog", icon: BookOpen },
  { name: "Equipo", url: "#quienes-somos", icon: Users },
  { name: "WhatsApp", url: CONFIG.WHATSAPP_URL, icon: MessageCircle },
];

export const Navbar = () => {
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
    />
  );
};

export default Navbar;
