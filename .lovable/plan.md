
# MostachIA Landing V3 — Transformacion Total

## Objetivo
Transformar la landing completa de MostachIA con la identidad visual real de la marca: paleta Navy/Mint/Dorado, dark mode obligatorio, glassmorphism premium, y componentes pulidos a nivel enterprise.

---

## Prerequisito: Logos
Los logos no estan subidos aun. La implementacion usara el logo de texto actual ("M" + "MostachIA") con los nuevos colores. Las etiquetas `<img>` quedaran preparadas para cuando se suban los archivos a `public/`.

---

## Fase 1: Sistema de Diseno Global

### 1.1 Variables CSS y Paleta (`src/index.css`)
- Reemplazar TODA la paleta de variables CSS (:root y .dark) con los colores reales de MostachIA
- Navy: #0F1E27 / #172D38 / #203D4B / #2A4F5F / #356173
- Mint: #5CB8A5 / #73D7CB / #93E2D8 / #B3ECE5
- Gold: #E5A832 / #F7C667 / #F9D68F
- Steel: #5A7B8C / #7293A4 / #8FABB8
- Eliminar la rama `:root` (light mode) — solo dark mode permanente
- Actualizar gradientes (.text-gradient-primary) para usar mint #73D7CB
- Fondo del body: gradiente navy #0F1E27 a #172D38
- Glass cards: bg rgba(32,61,75,0.3), bordes rgba(115,215,203,0.1)
- Glows: mint rgba(115,215,203,0.3-0.5)
- Eliminar toda referencia a colores genéricos verdes (hsl 160/162)

### 1.2 Tailwind Config (`tailwind.config.ts`)
- Agregar colores custom: navy, mint, gold, steel con todas sus variantes
- Actualizar shadows (glow, glow-lg) para usar mint #73D7CB
- Mantener animaciones existentes

### 1.3 Theme Provider (`src/hooks/useTheme.tsx`)
- Forzar dark mode permanente — eliminar toggle y light mode

### 1.4 Botones Globales (`src/index.css`)
- Primary: bg gradient #73D7CB a #5CB8A5, texto #0F1E27
- Outline: transparente, border mint 30%, texto mint
- WhatsApp: bg #25D366, texto blanco
- Actualizar .btn-glow, .glass-card, .glass-nav con nuevos colores

---

## Fase 2: Navbar (`src/components/Navbar.tsx`)
- Fondo: rgba(15, 30, 39, 0.8) con backdrop-blur-xl
- Logo: mantener texto "M MostachIA" con nuevos colores mint (preparar `<img>` para despues)
- Links: color #D9DADC, hover #73D7CB
- Boton WhatsApp: outline con borde #73D7CB
- Boton Agendar: bg gradient mint, texto navy #0F1E27
- Borde inferior: rgba(115, 215, 203, 0.1)
- Progress bar: gradiente mint
- Mobile menu: bg rgba(15, 30, 39, 0.98)

---

## Fase 3: Hero Section (`src/components/HeroSection.tsx`)
- Mantener estructura actual (badge, H1, subtitle, CTAs, stats, marquee)
- Actualizar TODOS los colores:
  - Badge: bg rgba(115,215,203,0.1), borde rgba(115,215,203,0.3), texto #73D7CB
  - H1 palabras "IA" y "Resultados": color #73D7CB con text-shadow glow pulsante
  - Subtitle: color #D9DADC
  - Micro-proof: color #7293A4
  - Stats cards: bg rgba(32,61,75,0.3), numeros en #73D7CB
  - Marquee: iconos en steel, hover mint
- CTA primary: shimmer button con background mint #73D7CB
- CTA secondary: outline mint
- Aurora background: actualizar colores a navy/mint

### 3.1 Aurora Background (`src/components/ui/aurora-background.tsx`)
- Recolorear radiales a tonos navy y mint tenues

---

## Fase 4: Servicios (`src/components/ServiciosSection.tsx`)
- Mantener layout split actual (lista izquierda + preview derecha)
- Actualizar todos los colores de cards, badges, tech pills
- Badge "Mas Popular": bg rgba(247,198,103,0.15), borde gold, texto #F7C667
- Badge "Demo Interactiva": bg rgba(115,215,203,0.1), texto #73D7CB
- Cards: bg rgba(32,61,75,0.25), borde rgba(115,215,203,0.08)
- Hover: borde rgba(115,215,203,0.25), sombra mint
- Tech pills: font mono, color #7293A4
- CTAs: texto #73D7CB
- Preview panel: actualizar colores internos de las mini-demos
- Banner inferior: borde dorado sutil rgba(247,198,103,0.2)

---

## Fase 5: Demos (`src/components/IntegratedDemoHub.tsx`)
- Tabs: activo bg #73D7CB texto #0F1E27, inactivo texto #7293A4
- Browser chrome: bg rgba(15,30,39,0.8), dots y texto #7293A4
- Iframe container: borde rgba(115,215,203,0.1)
- BorderBeam: colores mint y gold
- CTA card: borde mint glow
- Video placeholder: gradiente navy, icono play #73D7CB con glow pulsante

---

## Fase 6: Como Trabajamos (`src/components/HowItWorksSection.tsx`)
- Timeline: linea base rgba(115,215,203,0.1), progreso mint gradient
- Nodos: circulo mint cuando activo, rgba(115,215,203,0.2) inactivo
- Cards: bg rgba(32,61,75,0.25), borde rgba(115,215,203,0.08)
- Numeros watermark: rgba(115,215,203,0.15)
- Badges: bg rgba(115,215,203,0.1) texto #73D7CB
- CTA: PulsatingButton con colores mint

---

## Fase 7: Industrias (`src/components/IndustriasSection.tsx`)
- Cards: mismo estilo glass con nuevos colores
- Icono en circulo: bg rgba(115,215,203,0.1)
- Bullets: dot mint #73D7CB
- Hover CTA: "Consultar para este rubro" en mint
- Banner inferior: borde dorado sutil

---

## Fase 8: Integraciones (`src/components/IntegrationsSection.tsx`)
- Badge "Integraciones Reales": bg mint/10, borde mint/20, texto mint
- Marquee icons: en glass circles bg rgba(32,61,75,0.5), hover mint
- Nombres: #7293A4, hover foreground
- Fade edges: gradiente navy (no background generico)

---

## Fase 9: Trust / Confianza (`src/components/TrustSection.tsx`)
- Cards: glass con nuevos colores
- Iconos: circulo bg rgba(115,215,203,0.1), size 48px
- Titulo: blanco, descripcion #D9DADC
- Garantias chips: bg rgba(115,215,203,0.05), borde rgba(115,215,203,0.15), checkmarks #73D7CB

---

## Fase 10: FAQ (`src/components/FAQSection.tsx`)
- Accordion: trigger cerrado con border-bottom rgba(115,215,203,0.08), texto blanco
- Trigger abierto: texto #73D7CB
- ChevronDown: #73D7CB
- Content: texto #D9DADC
- CTA WhatsApp: boton verde #25D366

---

## Fase 11: Contacto (`src/components/ContactFormSection.tsx`)
- Titulo: "Hablemos de **tu Proyecto**" (mint con glow)
- Inputs: bg rgba(32,61,75,0.4), border rgba(115,215,203,0.15), focus glow mint
- Placeholder: #7293A4
- Submit: shimmer button mint
- Info cards: glass con nuevos colores
- Horarios: Lun-Vie 9:00-18:00 (GMT-3) (ya existe)

---

## Fase 12: Footer (`src/components/Footer.tsx`)
- Fondo: #0A1820 (mas oscuro que body)
- Borde superior: rgba(115,215,203,0.08)
- Logo: texto "MostachIA" con colores nuevos (preparado para img)
- Links: color #7293A4, hover #73D7CB
- Titulos columna: blanco, Sora 600, uppercase
- Copyright: "Procesos inteligentes, resultados superiores." en #5A7B8C

---

## Fase 13: Chat Widget (`src/components/FloatingWhatsApp.tsx`)
- FAB: gradiente #73D7CB a #5CB8A5, icono #0F1E27
- Punto online: verde pulsante
- Chat window: bg rgba(15,30,39,0.95), borde rgba(115,215,203,0.15)
- Header: gradiente mint (no primary generico)
- Avatar: emoji 🤖 (preparado para isotipo-mint.png)
- Mensajes bot: bg rgba(32,61,75,0.5), texto #D9DADC
- Mensajes user: bg rgba(115,215,203,0.2), texto blanco
- Quick replies: bg rgba(115,215,203,0.1), borde rgba(115,215,203,0.2), texto #73D7CB
- Typing dots: color #73D7CB
- Input: bg rgba(32,61,75,0.4), placeholder #5A7B8C
- Send button: bg #73D7CB, icono #0F1E27

---

## Fase 14: Componentes de Soporte
- **StickyCTA** (`src/components/StickyCTA.tsx`): bg rgba(15,30,39,0.9), borde-top mint, boton primary mint
- **ScrollToTop** (`src/components/ScrollToTop.tsx`): bg gradiente mint, icono #0F1E27
- **MagicCard** (`src/components/ui/magic-card.tsx`): bg rgba(32,61,75,0.3), borde rgba(115,215,203,0.1), hover rgba(115,215,203,0.25)
- **ParallaxBackground** (`src/components/ParallaxSection.tsx`): orbes en tonos navy/mint tenues
- **SectionTransition / AnimatedDivider**: linea via mint en lugar de border generico

---

## Fase 15: SEO y Polish Final

### 15.1 index.html
- Ya tiene buena estructura SEO — actualizar meta description si es necesario
- Schema.org ya existe — verificar que este completo
- Eliminar IBM Plex Mono del preconnect fonts (mantener solo Sora + Inter)

### 15.2 Cleanup
- Eliminar App.css (no se usa)
- Eliminar referencia a light mode en ThemeProvider
- Verificar voseo argentino en todos los textos

---

## Detalles Tecnicos

### Archivos a modificar (en orden):
1. `src/index.css` — paleta completa, variables, componentes base
2. `tailwind.config.ts` — colores custom navy/mint/gold/steel
3. `src/hooks/useTheme.tsx` — forzar dark mode
4. `src/components/Navbar.tsx` — colores nuevos
5. `src/components/HeroSection.tsx` — colores nuevos
6. `src/components/ui/aurora-background.tsx` — recolorear
7. `src/components/ServiciosSection.tsx` — colores nuevos
8. `src/components/IntegratedDemoHub.tsx` — colores nuevos
9. `src/components/HowItWorksSection.tsx` — colores nuevos
10. `src/components/IndustriasSection.tsx` — colores nuevos
11. `src/components/IntegrationsSection.tsx` — colores nuevos
12. `src/components/TrustSection.tsx` — colores nuevos
13. `src/components/FAQSection.tsx` — colores nuevos
14. `src/components/ContactFormSection.tsx` — colores nuevos
15. `src/components/Footer.tsx` — colores nuevos + copyright
16. `src/components/FloatingWhatsApp.tsx` — colores nuevos
17. `src/components/StickyCTA.tsx` — colores nuevos
18. `src/components/ScrollToTop.tsx` — colores nuevos
19. `src/components/ui/magic-card.tsx` — colores nuevos
20. `src/components/ParallaxSection.tsx` — colores nuevos
21. `src/components/SectionTransition.tsx` — colores nuevos
22. `src/App.css` — eliminar (no usado)

### Lo que NO cambia:
- Estructura de componentes y layout general
- Logica de webhooks (n8n), formularios (zod), chat widget
- Animaciones (framer-motion) — solo colores
- Estructura SEO de index.html (ya esta bien)
- Config de constantes (ya correcta)
- Orden de secciones en Index.tsx

### Riesgo principal:
La cantidad de archivos es grande pero los cambios son mayormente de color/estilo, no de logica. Se implementara en tandas paralelas para eficiencia.
