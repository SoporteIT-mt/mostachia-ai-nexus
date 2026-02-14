
# Plan Maestro: Rediseno Premium Completo — 8 Fases

## Resumen
Transformar cada seccion de la landing page de MostachIA implementando componentes premium inspirados en Aceternity UI, Magic UI y 21st.dev. Todo se implementa como source code propio (sin dependencias externas adicionales), usando Framer Motion + Tailwind CSS + CSS custom properties. La paleta permanece navy (#0B0F19) + mint (#60B99A / hsl 162) + violeta (#7C3AED) con dark theme permanente.

---

## Fase 1: Componentes Base Reutilizables

Crear 7 componentes atomicos en `src/components/ui/` que se reutilizaran en todas las fases siguientes:

**Archivos nuevos:**
- `blur-fade.tsx` — Wrapper con animacion blur(6px) a blur(0) + fade-in + translateY, disparado con `whileInView`. Acepta prop `delay` para stagger. Reemplaza los patrones manuales de `useInView` + `initial/animate` repetidos en cada seccion.
- `border-beam.tsx` — Pseudo-elemento con `conic-gradient` rotante que crea un orbe luminoso recorriendo el borde de un contenedor. Puro CSS con keyframes.
- `magic-card.tsx` — Card que trackea `onMouseMove`, calcula posicion relativa del cursor, y aplica un `radial-gradient` via CSS custom properties `--mouse-x` y `--mouse-y`. Gradiente mint/navy.
- `number-ticker.tsx` — Hook `useMotionValue` + `useTransform` + `useInView`. Anima un valor numerico de 0 al target con spring easing al entrar en viewport.
- `marquee.tsx` — Componente de scroll infinito horizontal. Dos copias del contenido con `animation: marquee Xs linear infinite`. Props: `pauseOnHover`, `reverse`, `vertical`, `speed`.
- `spotlight.tsx` — Efecto de luz conica CSS tipo Linear/Lamp para headers de seccion. Conic gradient que ilumina el titulo desde arriba.
- `pulsating-button.tsx` — Boton con pulso radiante expandiendose (pseudo-elemento con scale animation). `pulseColor` configurable.
- `dot-pattern.tsx` — Pattern SVG de puntos como fondo sutil para footer y secciones de credibilidad.
- `ripple.tsx` — Ondas concentricas expandiendose desde el centro. CSS keyframes con circulos concentricos.

**Archivo modificado:**
- `src/index.css` — Agregar keyframes para `border-beam-rotate`, `ripple-expand`, `dot-fade`. Agregar clases utilitarias `.animate-border-beam`, `.animate-ripple`.

---

## Fase 2: Hero Section (Pulido)

El Hero ya tiene Aurora Background y Shimmer Button. Se mejora con los nuevos componentes:

**Modificar `src/components/HeroSection.tsx`:**
- Reemplazar el subtitulo "Automatizamos procesos..." con `AnimatedGradientText` (texto con gradiente mint/gold que fluye animado) para que destaque mas.
- Reemplazar los 4 stats cards estaticos con `NumberTicker` para que los valores "+10", "6", "24/7" se animen contando al entrar en viewport.
- Reemplazar el marquee custom de `TechLogosBar` con el nuevo componente `Marquee` (mas robusto, con `pauseOnHover` real y velocidad configurable).
- Agregar un `Spotlight` sutil detras del H1 para crear un efecto de iluminacion conica.

---

## Fase 3: Servicios con Magic Cards + Bento Layout

**Modificar `src/components/ServiciosSection.tsx`:**
- Reemplazar las 4 glass-cards con `MagicCard` (cursor spotlight tracking con gradiente radial mint).
- Cambiar layout a Bento: la card "Dashboards IA" (mas popular) ocupa 2 columnas en desktop, las demas 1 columna cada una.
- Agregar `Spotlight` / Lamp Effect al header de la seccion (cono de luz iluminando el titulo).
- Cada icono emoji se envuelve en un contenedor con glow animado (pulse-glow).
- Envolver cada card en `BlurFade` con delays escalonados (0, 0.1, 0.2, 0.3).
- CTA banner inferior: agregar `BorderBeam` alrededor del contenedor para que el orbe luminoso recorra el borde.

---

## Fase 4: Demos con Border Beam + Tabs Mejoradas

**Modificar `src/components/IntegratedDemoHub.tsx`:**
- Agregar `BorderBeam` al contenedor del iframe (orbe mint/gold recorriendo el borde continuamente).
- Mejorar las tabs con underline deslizante animada usando `motion.div` con `layoutId="activeTab"` para que la barra se deslice entre tabs.
- El video placeholder: convertirlo en un "Hero Video Dialog" preparado — al hacer click abre un modal fullscreen con animacion scale-up (listo para cuando tengan video real).
- Envolver header y descripcion en `BlurFade`.

---

## Fase 5: Proceso con Timeline Mejorado

**Modificar `src/components/HowItWorksSection.tsx`:**
- Agregar efecto "Tracing Beam" en la linea de timeline: un gradiente luminoso (orbe) que sigue el progreso de scroll usando `useScroll` + `useTransform`, en lugar de solo llenar la barra.
- Cada step card: envolver en `MagicCard` con cursor spotlight tracking.
- Los numeros 01-04: usar `NumberTicker` para que se animen.
- Aplicar `BlurFade` con delays individuales a cada step.
- CTA final: reemplazar `btn-glow` con `PulsatingButton` con glow mint radiante.

---

## Fase 6: Industrias + Integraciones + Confianza

Tres secciones de credibilidad mejoradas:

**Modificar `src/components/IndustriasSection.tsx`:**
- Cards con `MagicCard` y cursor tracking.
- Quitar el overlay hover opaco y reemplazarlo con un CTA que aparece con slide-up suave dentro de la card (mas elegante).
- Aplicar `BlurFade` escalonado.

**Modificar `src/components/IntegrationsSection.tsx`:**
- Reemplazar el grid estatico con `Marquee` horizontal por categoria: dos filas de logos scrolleando en direcciones opuestas (una normal, una `reverse`).
- Corregir los 3 iconos con 404 (SQL Server, OpenAI, TiendaNube) usando SVGs inline como ya se hace en `TechLogos.tsx`.
- Agregar `Spotlight` al header.

**Modificar `src/components/TrustSection.tsx`:**
- Cards con `MagicCard` spotlight.
- Garantias chips: envolver en `BlurFade` escalonado para entrada con blur premium.
- Agregar `Spotlight` sutil en el header.

---

## Fase 7: FAQ + Contacto + Footer

**Modificar `src/components/FAQSection.tsx`:**
- Agregar `Spotlight` al header de la seccion.
- Envolver cada AccordionItem en `BlurFade` con delay escalonado (reemplazando el stagger manual actual).
- Mejorar la animacion del Accordion con `AnimatePresence` + `layout` prop para transiciones de altura mas suaves.

**Modificar `src/components/ContactFormSection.tsx`:**
- Agregar componente `Ripple` como fondo detras del formulario (ondas concentricas emanando del centro).
- Form inputs: agregar focus glow animado con ring + transition suave (CSS `focus-within` con box-shadow primary).
- CTA submit: reemplazar `btn-glow` con `ShimmerButton` (ya existe el componente, solo importarlo).
- Card de contacto derecha: envolver en `MagicCard`.

**Modificar `src/components/Footer.tsx`:**
- Agregar `DotPattern` como fondo sutil del footer.
- Links con clase `link-underline` al hover (ya existe en CSS, solo aplicarla).

---

## Fase 8: Efectos Globales + Performance + Cleanup

**Modificar `src/components/ParallaxSection.tsx`:**
- Reducir opacidad de orbs flotantes de /5 a /3.
- Agregar `will-change: transform` para GPU acceleration.
- Reducir tamano de blurs en mobile via responsive classes.

**Modificar `src/App.tsx`:**
- Envolver la app con `LazyMotion` de `framer-motion` con `domAnimation` features para reducir bundle de ~34KB a ~5KB.
- Agregar `MotionConfig reducedMotion="user"` para accesibilidad (respeta `prefers-reduced-motion`).

**Modificar `src/components/Navbar.tsx`:**
- Reducir links a 4 (Servicios, Demos, Proceso, Contacto) para CRO — menos links = mas conversion segun research.
- Cambiar el CTA "Agendar Consultoria" a color gold (#F7C667) para maximo contraste y conversion (segun data de A/B tests).

**Modificar `src/components/ScrollProgress.tsx`:**
- Agregar porcentaje numerico visible junto a la barra de progreso.

**Eliminar archivos obsoletos:**
- `DemosSection.tsx`, `DemoCard.tsx`, `DemoModal.tsx`, `DemoHubSection.tsx`
- `ThemeToggle.tsx`, `NavLink.tsx`
- `AnimatedGradientBackground.tsx`, `ConstellationBackground.tsx`, `ParallaxEffects.tsx`
- Verificar que ningun import los referencia.

---

## Detalles Tecnicos

### MagicCard
Escucha `onMouseMove`, calcula `(e.clientX - rect.left) / rect.width * 100` para X e Y, y setea CSS custom properties `--mouse-x` y `--mouse-y`. Un pseudo-elemento `::before` aplica `radial-gradient(600px circle at var(--mouse-x)% var(--mouse-y)%, hsl(162 100% 39% / 0.15), transparent 40%)`.

### BlurFade
Wrapper Framer Motion: `initial={{ opacity: 0, y: 6, filter: 'blur(6px)' }}`, `whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}`, `viewport={{ once: true }}`. Prop `delay` controla el timing.

### BorderBeam
Contenedor con `overflow: hidden` y borde interior. Un div absoluto con `conic-gradient(from var(--angle), transparent 80%, hsl(162 100% 50%) 100%)` que rota con `@keyframes border-beam { to { --angle: 360deg } }` usando `@property --angle`.

### NumberTicker
`useMotionValue(0)` + `animate(motionValue, targetValue, { duration: 2, ease: 'easeOut' })` disparado con `useInView`. Display: `useTransform(motionValue, v => Math.round(v))`.

### Marquee
Dos copias del children en un flex container. CSS animation `translateX(0) -> translateX(-50%)`. `pauseOnHover` via `hover:animation-play-state: paused`. `reverse` via `animation-direction: reverse`.

### Performance
- Todo es CSS + Framer Motion. CERO Canvas/WebGL.
- Solo se animan `transform` y `opacity` (GPU-accelerated).
- `BlurFade` usa `whileInView` nativo (Intersection Observer interno).
- `LazyMotion` reduce bundle de animaciones en ~85%.
- `MotionConfig reducedMotion="user"` para accesibilidad.

### Paleta (sin cambios)
- Primario: hsl(162 100% 39%) — Mint/Verde MostachIA
- Acento: hsl(262 83% 58%) — Violeta
- Gold para CTA primario: #F7C667 (nuevo, solo en botones CTA del navbar)
- Background: hsl(222 47% 7%) — Navy oscuro
- Glass: bg-white/5, backdrop-blur-xl, border-white/10
- Dark theme SIEMPRE activo

---

## Orden de Ejecucion

Las fases se ejecutan secuencialmente. Cada fase se completa antes de pasar a la siguiente:

1. Fase 1 — Componentes base (fundacion para todo lo demas)
2. Fase 2 — Hero
3. Fase 3 — Servicios
4. Fase 4 — Demos
5. Fase 5 — Proceso
6. Fase 6 — Industrias + Integraciones + Confianza
7. Fase 7 — FAQ + Contacto + Footer
8. Fase 8 — Global + Performance + Cleanup

Estimacion: ~8 ciclos de implementacion, uno por fase.
