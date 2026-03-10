

## Reorder Sections in Index.tsx

The current order has `TrustSection` before `ServiciosSection`. The new order moves Trust after the demo videos, creating a better conversion funnel.

### Change: `src/pages/Index.tsx` (lines 33-44)

Reorder the components inside `<main>` to:

```
HeroSection
StatsSection
PainSection
ServiciosSection        ← moved up (was after Trust)
AgentVideoShowcase      ← moved up (was after Servicios)
TrustSection            ← moved down (was before Servicios)
HowItWorksSection
IndustriasSection
IntegrationsSection
TeamSection
FAQSection
ContactFormSection
```

Only 3 components change position: `ServiciosSection` and `AgentVideoShowcase` move up, `TrustSection` moves down. Everything else stays in place.

### Navbar

The Navbar code is correct — exactly 5 items (Ecosistema IA, En Acción, Método, Equipo, WhatsApp) plus logo. No extra items exist. The "Cc"/"nativo" issue is not present in the source code, so it may have been a transient rendering artifact. No navbar changes needed.

