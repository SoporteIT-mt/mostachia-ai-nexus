

## Plan de Mejoras Integral — MostachIA

Se implementan 5 mejoras sin quitar nada existente. Todo es aditivo.

---

### 1. Sitemap XML + Robots.txt actualizado

**`public/sitemap.xml`** — Crear archivo estático con URLs de la landing (y futuras páginas como `/privacidad`).

**`public/robots.txt`** — Agregar línea `Sitemap: https://mostachia.com/sitemap.xml`.

---

### 2. Sección "Resultados Reales" (Social Proof ligero)

Nueva sección `src/components/ResultsSection.tsx` posicionada entre `TrustSection` y `HowItWorksSection` en Index.tsx.

Contenido con datos modestos y creíbles (sin testimonios con foto):

- 3-4 cards tipo "mini caso" con datos anónimos pero realistas:
  - **Cine en Córdoba**: "Automatizamos la atención por WhatsApp. Hoy responde 200+ consultas diarias sin intervención humana."
  - **Restaurante**: "Dashboard de ventas en tiempo real. El dueño dejó de depender de Excel para tomar decisiones."
  - **E-commerce**: "Agente de soporte que resuelve el 85% de consultas sin escalar a un humano."
  - **Estudio Contable**: "Migración de base de datos legacy y reportes automatizados. 15 horas semanales recuperadas."

Cada card tiene: icono de industria, título corto, descripción de 1-2 líneas, y un chip con la métrica clave. Sin nombres de empresas, solo rubro + ciudad. Estilo glass-card consistente con el resto.

---

### 3. Banner de Social Proof pre-Contacto

Nueva sección compacta `src/components/SocialProofBanner.tsx` justo antes de `ContactFormSection`.

Un banner horizontal con 3-4 datos en fila:
- "30+ clientes confían en nosotros"
- "Respuesta promedio < 24hs"
- "98% de satisfacción"
- "Equipo 100% argentino"

Estilo: fondo sutil, chips/badges en fila, sin ser una sección pesada. Refuerza la decisión justo antes del formulario.

---

### 4. Página de Política de Privacidad

**`src/pages/Privacidad.tsx`** — Página con texto legal básico (recopilación de datos del formulario, uso de cookies, contacto para ejercer derechos).

**`src/App.tsx`** — Agregar ruta `/privacidad`.

**`src/components/Footer.tsx`** — Agregar link "Política de Privacidad" en la columna Empresa.

**`src/components/ContactFormSection.tsx`** — Agregar link a la política debajo del botón de envío.

---

### 5. Event Tracking preparado para GA4

**`src/config/constants.ts`** — Actualizar `trackEvent` para que detecte `window.gtag` automáticamente y envíe eventos cuando GA4 esté configurado. Sin cambiar la función, solo hacer que funcione si el script de GA4 está presente.

Agregar calls a `trackEvent` en puntos clave:
- `ContactFormSection.tsx` — on form submit
- `HeroSection.tsx` — on CTA click
- `FloatingWhatsApp.tsx` — on WhatsApp click
- `FAQSection.tsx` — on accordion open

---

### Archivos a crear/modificar

| Archivo | Acción |
|---------|--------|
| `public/sitemap.xml` | Crear |
| `public/robots.txt` | Modificar — agregar Sitemap |
| `src/components/ResultsSection.tsx` | Crear — mini casos anónimos |
| `src/components/SocialProofBanner.tsx` | Crear — banner pre-contacto |
| `src/pages/Privacidad.tsx` | Crear — política de privacidad |
| `src/pages/Index.tsx` | Modificar — insertar ResultsSection y SocialProofBanner |
| `src/App.tsx` | Modificar — agregar ruta /privacidad |
| `src/components/Footer.tsx` | Modificar — link a privacidad |
| `src/components/ContactFormSection.tsx` | Modificar — link a privacidad |
| `src/config/constants.ts` | Modificar — trackEvent con gtag |
| `src/components/HeroSection.tsx` | Modificar — trackEvent en CTA |
| `src/components/FloatingWhatsApp.tsx` | Modificar — trackEvent en click |
| `src/components/FAQSection.tsx` | Modificar — trackEvent en accordion |

