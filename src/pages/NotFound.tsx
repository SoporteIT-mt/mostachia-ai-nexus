import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CONFIG } from "@/config/constants";
import { MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    const timer = setTimeout(() => navigate("/", { replace: true }), 8000);
    return () => clearTimeout(timer);
  }, [location.pathname, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-bold font-display text-primary">404</h1>
        <p className="mb-2 text-xl font-semibold">Esta página no existe</p>
        <p className="mb-6 text-muted-foreground">
          Puede que el enlace esté roto o que la página haya sido movida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Volver al inicio
          </a>
          <a
            href={CONFIG.WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            ¿Necesitás ayuda?
          </a>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Serás redirigido al inicio en 8 segundos…</p>
      </div>
    </div>
  );
};

export default NotFound;
