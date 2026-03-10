# Hero Profesional + Stats Section + CTA Polish

## Problemas identificados

1. **H1 en 3 lineas** - "Tu Negocio con IA," / "Otro Nivel de" / "Resultados." deberia ser 2 lineas
2. **Beams apenas visibles** - la opacidad y el vignette overlay los tapan demasiado
3. **Espacio vacio excesivo** debajo de los CTAs y micro-proof
4. **Falta la seccion de estadisticas** (KPIs) que se removio del Hero

---

## 1. Hero H1 en 2 lineas (HeroSection.tsx)

Reestructurar el titulo para que quede en exactamente 2 lineas:

- **Linea 1:** "Tu Negocio con IA, Otro Nivel de"
- **Linea 2:** "Resultados."

Cambiar la estructura de 2 `<span className="block">` a:

- Linea 1: todo junto en un solo bloque con `AnimatedWords("Tu Negocio con")` +  `IA,` (mint) + `AnimatedWords(" Otro Nivel de")` 
- Linea 2: "Resultados." en gradient, centrado y mas grande visualmente

Aumentar el tamano tipografico para desktop: `lg:text-8xl` para que sea mas impactante.

## 2. Beams mas visibles (beams-background.tsx)

- Reducir la opacidad del vignette overlay: cambiar `transparent 40%` a `transparent 60%` para que los beams sean mas visibles en el centro
- Aumentar blur de `35px` a `30px` para beams mas definidos
- Base opacity de beams: `0.22 + Math.random() * 0.25` (mas intensos)

## 3. Eliminar espacio vacio del Hero (HeroSection.tsx)

- Cambiar `min-h-screen` a `min-h-[85vh]` para que el Hero no tenga tanto espacio vacio debajo
- Ajustar padding bottom

## 4. Nueva StatsSection entre Hero y Servicios

Crear `src/components/StatsSection.tsx` con los 4 KPIs en un grid horizontal:


| KPI              | Valor | Sufijo |
| ---------------- | ----- | ------ |
| Clientes Activos | 30    | +      |
| Industrias       | 8     | +      |
| Agentes IA 24/7  | 50    | +      |
| Implementacion   | 1-4   | sem    |


- Grid de 4 columnas (desktop) / 2x2 (mobile)
- Cada KPI usa `NumberTicker` para la animacion de conteo
- Fondo sutil glass con borde tenue
- Separadores verticales entre KPIs en desktop
- Colores: numeros en mint (#73D7CB), labels en muted

Insertar en Index.tsx entre `<HeroSection />` y el primer `<AnimatedDivider />`.

## 5. CTA "Como Trabajamos" - polish final (HowItWorksSection.tsx)

El boton ya tiene buen estilo pero:

- Verificar que el `group` class funciona para la animacion de flecha
- Asegurar que el hover glow se intensifica correctamente

---

## Archivos a modificar


| Archivo                                  | Cambio                                               |
| ---------------------------------------- | ---------------------------------------------------- |
| `src/components/HeroSection.tsx`         | H1 en 2 lineas, reducir min-h, tipografia mas grande |
| `src/components/ui/beams-background.tsx` | Beams mas visibles, reducir vignette                 |
| `src/components/StatsSection.tsx`        | CREAR - 4 KPIs con NumberTicker                      |
| `src/pages/Index.tsx`                    | Insertar StatsSection entre Hero y Servicios         |


## Detalle tecnico

### H1 nueva estructura:

```text
Linea 1: "Tu Negocio con IA, Otro Nivel de"
Linea 2: "Resultados."
```

El truco es poner todo en la linea 1 como `inline` y dejar que "Resultados." sea un `block` separado. Aumentar a `lg:text-8xl` para impacto visual.

### StatsSection:

- Usa `NumberTicker` del componente existente (`src/components/ui/number-ticker.tsx`)
- Background: `bg-white/[0.02]` con `backdrop-blur-sm` y `border border-white/[0.06]`
- Padding: `py-12` para que sea compacto
- Animacion: `BlurFade` staggered para cada KPI