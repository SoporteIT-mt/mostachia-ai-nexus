export const CONFIG = {
  // Chat Widget → n8n webhook REAL
  N8N_CHAT_WEBHOOK: 'https://n8n.srv945661.hstgr.cloud/webhook/mostachia-soporte',
  
  // Formulario de contacto → n8n webhook
  N8N_LEAD_WEBHOOK: 'https://n8n.srv945661.hstgr.cloud/webhook/nuevo-lead-web',
  
  // Cal.com — Agendamiento
  CALCOM_URL: 'https://cal.com/mostachia/consultoria',
  
  // WhatsApp — Número REAL del agente
  WHATSAPP_NUMBER: '5493564667968',
  WHATSAPP_URL: 'https://wa.me/5493564667968?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20MostachIA',
  
  // Redes Sociales
  INSTAGRAM_URL: 'https://www.instagram.com/mostachia.ia',
  LINKEDIN_URL: 'https://www.linkedin.com/company/mostachia',
  
  // Email
  EMAIL: 'hola@mostachia.com',
} as const;

// Event tracking (preparado para GA4)
export const trackEvent = (event: string, params?: Record<string, any>) => {
  if (import.meta.env.DEV) console.log(`[Analytics] ${event}`, params);
  // Descomentar cuando GA4 esté listo:
  // window.gtag?.('event', event, params);
};
