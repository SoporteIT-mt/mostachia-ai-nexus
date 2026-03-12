

## Audit de Produccion — MostachIA

### Diagnostico: Repetitividad en Mobile

El problema principal es que en mobile, el usuario scrollea por **~20 cards con layout identico** (icono + titulo + descripcion en `glass-card`):

```text
PainSection       → 3 cards (glass-card, icon+title+desc)
ServiciosSection  → 5 cards (complex, pero glass-card)
TrustSection      → 4 cards (glass-card, icon+title+desc)  ← MUY similar a PainSection
ResultsSection    → 4 cards (glass-card, icon+title+desc)  ← MUY similar
IndustriasSection → 6 cards (magic-card, icon+title+bullets)
BlogPreview       → 3 cards (glass-card)
ContactForm       → 2 cards (glass-card)
                    ─────────
                    ~27 recuadros en mobile
```

### Plan de Optimizacion

#### 1. Reducir cards repetitivas en mobile

- **PainSection**: En mobile, mostrar los 3 pains como una lista compacta horizontal (chips/tags) en vez de 3 cards apiladas. Ahorra scroll y rompe la monotonia.
- **TrustSection**: En mobile, mostrar los 4 diferenciadores como lista simple con icono inline (sin glass-card), similar a como ya se muestran las garantias (chips). Desktop queda igual.
- **ResultsSection**: En mobile, cambiar de 4 cards apiladas a un slider horizontal (2 visibles a la vez) para ahorrar scroll.
- **IndustriasSection**: En mobile, mostrar solo 4 industrias (las mas relevantes) con un boton "Ver todas" en vez de las 6 apiladas.

#### 2. Ajustar botones para mobile

- HowItWorksSection CTA: `py-5 sm:py-6` es muy grande. Reducir a `py-3.5 sm:py-5`.
- Todos los ShimmerButton CTA intermedios: `py-3 sm:py-4` en mobile para que no dominen la pantalla.
- Los botones de navegacion del carousel de agentes (`w-12 h-12`) son grandes en mobile. Reducir a `w-10 h-10` en mobile.

#### 3. Separadores visuales entre secciones

Agregar separadores sutiles (linea gradiente horizontal como la de IntegrationsSection) entre PainSection/ServiciosSection y TrustSection/ResultsSection para romper la monotonia visual.

#### 4. Checklist de produccion (ya listo)

| Item | Estado |
|------|--------|
| SEO meta tags + OG | OK |
| Structured data (JSON-LD) | OK |
| sitemap.xml + robots.txt | OK |
| Formulario con validacion + webhook | OK |
| Analytics (GA4-ready) | OK |
| Lazy loading imagenes + rutas | OK |
| ScrollToTop entre paginas | OK |
| 404 page | OK |
| Politica de privacidad | OK |
| Accesibilidad (aria-labels) | OK |
| WhatsApp FAB | OK |
| Responsive navbar | OK |

#### 5. Items pendientes para produccion

- **Google Analytics**: Agregar el script de GA4 en `index.html` (el `trackEvent` ya esta preparado).
- **Favicon**: Ya existe en `/public/favicon.ico`.
- **Dominio custom**: Configurar desde Lovable Settings > Domains despues de publicar.

### Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/PainSection.tsx` | Layout compacto en mobile (chips horizontales) |
| `src/components/TrustSection.tsx` | Lista simple sin cards en mobile |
| `src/components/ResultsSection.tsx` | Slider horizontal en mobile |
| `src/components/IndustriasSection.tsx` | Limitar a 4 en mobile + "Ver todas" |
| `src/components/HowItWorksSection.tsx` | Reducir tamanio de CTA button |
| `src/components/AgentVideoShowcase.tsx` | Botones nav mas chicos en mobile |

