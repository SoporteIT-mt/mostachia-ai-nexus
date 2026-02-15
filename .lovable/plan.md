
# Hero con BeamsBackground + Limpieza + CTA Mejorado

## Resumen
Reemplazar el fondo Aurora del hero por el componente BeamsBackground (rayos de luz animados con canvas), limpiar elementos que ensucian la seccion, y mejorar el boton CTA de "Como Trabajamos".

---

## 1. Nuevo componente: BeamsBackground

### Archivo: `src/components/ui/beams-background.tsx`
- Crear el componente BeamsBackground adaptado del codigo proporcionado
- Cambiar `import { motion } from "motion/react"` por `import { motion } from "framer-motion"` (ya instalado, no necesitamos instalar "motion")
- Adaptar los hues de los beams para que sean tonos mint/teal (hue 160-190 en vez de 190-260)
- El componente renderiza un canvas con beams animados que se mueven hacia arriba con blur y pulso
- Acepta `children` para colocar contenido encima
- Acepta `intensity` prop ("subtle" | "medium" | "strong")
- Incluir overlays de gradiente navy en la parte superior e inferior para transiciones suaves
- Fondo base: el navy oscuro del design system (#0F1E27)

### Estructura del componente:
```
div (relative, min-h-screen, overflow-hidden, bg navy)
  canvas (absolute, inset-0, pointer-events-none)
  div overlay superior (radial gradient vignette)
  div overlay inferior (gradient fade to background)
  div children (relative z-10)
```

---

## 2. Hero limpio y profesional

### Archivo: `src/components/HeroSection.tsx`

**Reemplazar** `AuroraBackground` por `BeamsBackground` como wrapper.

**Eliminar** estos elementos que ensucian:
- Spotlight (ya no necesario con beams)
- Stats grid (4 cards con NumberTicker) - se mueven a otra seccion o se eliminan
- Tech logos Marquee ("Integramos con las herramientas que ya usas") - ya existe en IntegrationsSection
- BlurFade wrappers innecesarios

**Mantener** (simplificado):
- Badge "Empresa argentina de automatizacion con IA"
- H1 con AnimatedWords ("Tu Negocio con IA, Otro Nivel de Resultados.")
- Subtitulo
- Los 2 CTAs (Shimmer "Agendar Consultoria" + Outline "WhatsApp")
- Micro-proof (consultoria gratuita, implementacion, equipo argentino)
- Parallax effects en titulo/subtitulo/CTAs

**Resultado**: Hero mucho mas limpio, solo badge + titulo + subtitulo + 2 botones + micro-proof sobre el fondo de beams animados.

---

## 3. CTA de "Como Trabajamos" mejorado

### Archivo: `src/components/HowItWorksSection.tsx`

El boton ShimmerButton actual se ve "medio mal". Mejoras:

- Aumentar el `borderRadius` a `"9999px"` (pill shape) -- ya esta asi, verificar
- Mejorar el gradiente: usar `linear-gradient(135deg, #73D7CB 0%, #5CB8A5 50%, #4AA394 100%)`
- Sombra glow mas definida: `0 0 30px rgba(115,215,203,0.35), 0 8px 32px rgba(0,0,0,0.4)`
- Agregar `ArrowRight` icon despues del texto con animacion de translate en hover
- Mejorar la animacion de entrada: spring con bounce mas suave (stiffness 150, damping 20)
- Padding mas generoso: `px-12 py-6`
- Agregar hover effect con `whileHover` de framer-motion: `scale: 1.04, y: -2`
- El card contenedor: aumentar el border-radius, mejorar el glow perimetral

---

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/components/ui/beams-background.tsx` | CREAR - componente canvas con beams animados |
| `src/components/HeroSection.tsx` | Reemplazar Aurora por Beams, eliminar stats y marquee |
| `src/components/HowItWorksSection.tsx` | Mejorar CTA button styling y animacion |

## Lo que NO cambia
- Navbar, Footer, servicios, demos, industrias, FAQ, contacto, chat widget
- Colores del design system (index.css, tailwind.config)
- Logica de scroll, parallax, animaciones de texto

## Detalle tecnico

### BeamsBackground - Adaptaciones:
- `framer-motion` en vez de `motion/react` (ya instalado)
- Hue range: 160-230 (mint a teal/blue) en vez de 190-260
- Canvas usa `blur(35px)` para efecto difuso
- 30 beams (MINIMUM_BEAMS * 1.5) con velocidad 0.5-1.7
- Angulo de beams: -35 +/- 10 grados
- Overlays: radial gradient vignette + bottom fade to --background
- Intensidad "medium" para el hero (no demasiado agresivo)
