
# Integrar Logos Oficiales de MostachIA

## Que se va a hacer

Reemplazar los logos de texto ("M" + "MostachIA") por las imagenes reales del branding en tres ubicaciones: Navbar, Footer y Chat Widget.

## Mapeo de archivos subidos

| Archivo subido | Nombre destino en public/ | Uso |
|---|---|---|
| `2.png` | `logo-horizontal-oscuro.png` | Navbar (isotipo mint + texto claro, ideal para fondo navy oscuro) |
| `MostachIA_1.png` | `logo-slogan.png` | Footer (logo completo con slogan "Procesos inteligentes, resultados superiores") |
| `9.png` | `isotipo-mint.png` | Chat Widget header (solo isotipo mint) |

## Cambios por archivo

### 1. Copiar 3 imagenes a `public/`
- `user-uploads://2.png` a `public/logo-horizontal-oscuro.png`
- `user-uploads://MostachIA_1.png` a `public/logo-slogan.png`
- `user-uploads://9.png` a `public/isotipo-mint.png`

### 2. `src/components/Navbar.tsx` (lineas 124-148)
- Reemplazar el bloque del logo (div con "M" + span "MostachIA") por un `<img>` tag:
  - `src="/logo-horizontal-oscuro.png"` (logo mint sobre fondo oscuro)
  - `alt="MostachIA"`
  - `height: 36px` con `width: auto`
  - Mantener el `motion.a` wrapper con hover/tap animations

### 3. `src/components/Footer.tsx` (lineas 30-37)
- Reemplazar el bloque del logo por un `<img>` tag:
  - `src="/logo-slogan.png"` (logo con slogan completo)
  - `alt="MostachIA - Procesos inteligentes, resultados superiores"`
  - `height: 50px` con `width: auto`

### 4. `src/components/FloatingWhatsApp.tsx` (linea 228-229)
- Reemplazar el emoji "robot" por un `<img>` tag:
  - `src="/isotipo-mint.png"`
  - `alt="MostachIA"`
  - Tamano 28x28px dentro del circulo existente de 40px

## Lo que NO cambia
- Toda la logica de navegacion, scroll, animaciones
- Colores y estilos (ya migrados en la fase anterior)
- Mobile menu (mantiene texto si se quiere, o usa el mismo logo)
