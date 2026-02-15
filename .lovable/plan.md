
# Mejoras a Servicios y CTA de Consultoria

## 1. Logos con fondo transparente

Las imagenes de logos se subieron tal cual desde los archivos originales. **Lovable no puede procesar imagenes** (eliminar fondos, convertir a WebP, comprimir). Para esto necesitas usar una herramienta externa como:
- [remove.bg](https://remove.bg) para eliminar fondos
- [squoosh.app](https://squoosh.app) para comprimir/convertir a WebP

Una vez que tengas los archivos optimizados con fondo transparente, subilos de nuevo y los reemplazo en el proyecto.

---

## 2. Dashboard Preview mejorado en ServiciosSection

Reemplazar el `DashboardPreview` actual (que solo tiene 3 KPIs y barras simples) por un dashboard mucho mas impresionante:

### Nuevos elementos:
- **4 KPI cards** (en vez de 3): Ventas Hoy ($48.2K), Clientes Activos (1,847), Tickets Resueltos (94%), Leads Nuevos (127)
- **Grafico de torta/donut animado** con segmentos de colores (mint, gold, blue, steel) mostrando distribucion de ventas por canal
- **Grafico de barras mejorado** con etiquetas y hover effects
- **Mini tabla** con top 3 productos mas vendidos con ranking

### Implementacion tecnica:
- Donut chart hecho con SVG puro (circulos con `stroke-dasharray` animados con framer-motion)
- Leyenda debajo del donut con labels de color
- Barras con gradientes mint y animacion staggered

---

## 3. Nombres de agentes actualizados

Cambiar los titulos de los 4 servicios a:
1. **"Agente de Estadisticas y Dashboards"** (era "Dashboards Inteligentes con IA")
2. **"Agente de Soporte y Ventas"** (era "Agentes de IA para WhatsApp")
3. **"Agente de Marketing y Contenido"** (era "Automatizacion de Procesos") — se actualiza tambien la descripcion
4. **"Generacion y Seguimiento de Leads"** (era "Migracion de Bases de Datos") — se actualiza tambien la descripcion

---

## 4. Boton "Agendar Consultoria Gratuita" premium

El boton actual (PulsatingButton dentro de una glass card) se ve basico. Mejoras:

### Nuevo diseno:
- **Shimmer button** en vez de pulsating button — efecto de brillo deslizante continuo
- **Gradiente mint a teal** como fondo con texto navy oscuro
- **Border-radius redondeado** (rounded-full en vez de rounded-xl)
- **Icono animado**: el Calendar icon rota sutilmente al hover
- **Sombra glow mint** mas intensa: `0 0 40px rgba(115,215,203,0.4)`
- **Hover**: translateY(-3px) + sombra expandida + brillo mas fuerte
- **Animacion de entrada**: el boton entra con un bounce spring desde abajo con delay
- **Texto mas grande**: text-lg con font-weight 700
- **Micro-copy mejorado**: "30 minutos | Sin compromiso | 100% gratuito" con separadores en mint

### Card contenedora:
- Borde con gradiente mint sutil (no solid)
- Background con patron de dots muy tenue
- Titulo "Listo para arrancar?" con emoji cohete y glow en mint

---

## Archivos a modificar

1. `src/components/ServiciosSection.tsx` — Dashboard preview completo + nombres de agentes
2. `src/components/HowItWorksSection.tsx` — Boton CTA premium
