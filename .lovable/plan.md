

## Plan: Optimización Integral — 7 Fases

### Phase 1: Spacing Standardization

**`src/components/HeroSection.tsx`** — Change `min-h-screen` to `min-h-[85vh]` and reduce `pb-20` to `pb-10` to bring Stats closer.

**`src/components/PainSection.tsx`** — Change `py-16 md:py-24 lg:py-32` to `py-16 lg:py-20`.

**`src/components/TrustSection.tsx`** — Standardize to `py-16 lg:py-20`.

**`src/components/HowItWorksSection.tsx`** — Change `py-24 md:py-32` to `py-16 lg:py-20`.

**`src/components/IndustriasSection.tsx`** — Change `py-24 md:py-32` to `py-16 lg:py-20`.

**`src/components/IntegrationsSection.tsx`** — Change `py-24 md:py-32` to `py-16 lg:py-20`.

**`src/components/ServiciosSection.tsx`** — Standardize to `py-16 lg:py-20`.

**`src/components/ContactFormSection.tsx`** — Standardize to `py-16 lg:py-20`.

**`src/components/FAQSection.tsx`** — Standardize to `py-16 lg:py-20`.

Leave TeamSection and AgentVideoShowcase untouched.

---

### Phase 2: CTA Text Variation

| File | Current Text | New Text |
|------|-------------|----------|
| `HeroSection.tsx` L86 | "Agendar Diagnóstico Gratis" | "Empezar Ahora — Es Gratis" |
| `HowItWorksSection.tsx` L289 | "Agendar Diagnóstico Gratis" | "Agendá tu Consultoría Gratuita" |
| `IndustriasSection.tsx` L164 | "Agendar Diagnóstico Gratis" | "Hablemos de tu Rubro" |
| `ContactFormSection.tsx` L225 | "Agendar Diagnóstico Gratis" | "Reservar Horario" |
| `StickyCTA.tsx` L43 | "Agendar Diagnóstico Gratis" | "Agendar Gratis" |

Also clean remaining emojis:
- `HowItWorksSection.tsx` L269: Remove "🚀" from "🚀 ¿Listo para arrancar?"
- `ContactFormSection.tsx` L172: Remove "🔒" from privacy text
- `ContactFormSection.tsx` L205: Remove "🇦🇷" from "Córdoba, Argentina 🇦🇷"
- `FloatingWhatsApp.tsx` L33-36: Remove emojis from quick replies ("💰", "🎯", "📅", "🔧")

---

### Phase 3: WhatsApp Navbar Differentiation

Instead of extracting WhatsApp from the NavBar (which would require restructuring the fixed positioning), style it differently inside the existing component.

**`src/components/ui/tubelight-navbar.tsx`**: Add an `isExternal` check — if `item.url.startsWith("http")`, render with a green accent style (`bg-emerald-500/15 text-emerald-400 border border-emerald-500/30`) instead of the standard tab style. No tubelight effect on external items. On mobile, show green-tinted icon.

---

### Phase 4: FloatingWhatsApp Polish

**`src/components/FloatingWhatsApp.tsx`**:
- FAB button: Replace `MessageCircle` icon with the MostachIA isotipo (`/isotipo-mint.png`) inside a rounded container. Keep gradient and online dot.
- Quick replies: Remove emoji prefixes, keep text only ("Precios y planes", "Ver servicios", "Agendar reunión", "Integraciones").

The header already uses the isotipo and shows "En línea" with green dot — no changes needed there.

---

### Phase 5: Section Reorder

**`src/pages/Index.tsx`**: Swap `AgentVideoShowcase` and `ServiciosSection` so Servicios comes first (explain what you do), then showcase (show it in action).

```
Current:  Trust → AgentVideoShowcase → Servicios
New:      Trust → Servicios → AgentVideoShowcase
```

---

### Phase 6: Scroll Progress Subtlety

**`src/components/ScrollProgress.tsx`**:
- Remove the percentage text (`{pct}%` span)
- Change bar width from `w-1` to `w-0.5`
- Reduce overall opacity to `opacity-40` on the container

---

### Phase 7: Responsive Audit

**`src/components/IntegrationsSection.tsx`**: Make orbit responsive — use Tailwind responsive classes on the container: `w-[360px] h-[360px] md:w-[540px] md:h-[540px]`. Reduce orbit radii via CSS custom properties or inline styles that check for smaller screens. Inner: 100px mobile / 150px desktop. Outer: 160px mobile / 240px desktop. Icon sizes: 36px mobile / 44px desktop. Use a `useIsMobile` hook or media query.

**`src/components/StickyCTA.tsx`**: Already has safe area padding (`env(safe-area-inset-bottom)`). Verify z-index doesn't clash with navbar (`z-30` vs navbar `z-50`).

**General**: Most components already use responsive Tailwind classes (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`). The orbit is the main responsive concern.

---

### Files to edit (10 total)

| File | Phases |
|------|--------|
| `HeroSection.tsx` | 1, 2 |
| `PainSection.tsx` | 1 |
| `TrustSection.tsx` | 1 |
| `HowItWorksSection.tsx` | 1, 2 |
| `IndustriasSection.tsx` | 1, 2 |
| `IntegrationsSection.tsx` | 1, 7 |
| `ContactFormSection.tsx` | 1, 2 |
| `FAQSection.tsx` | 1 |
| `ServiciosSection.tsx` | 1 |
| `StickyCTA.tsx` | 2 |
| `FloatingWhatsApp.tsx` | 4 |
| `ScrollProgress.tsx` | 6 |
| `tubelight-navbar.tsx` | 3 |
| `Index.tsx` | 5 |

