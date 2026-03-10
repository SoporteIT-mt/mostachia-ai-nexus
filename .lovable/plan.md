

## Plan: IntersectionObserver for Navbar + Full Emoji Cleanup

This plan has two parts: (1) auto-detecting visible sections in the navbar, and (2) replacing all emojis with Lucide icons across the site.

---

### Part 1: IntersectionObserver in Tubelight Navbar

**File: `src/components/ui/tubelight-navbar.tsx`**

Add an `IntersectionObserver` that watches all section IDs referenced by nav items and updates `activeTab` based on which section is most visible.

- Filter items to only those with hash URLs (`#servicios`, `#agentes`, etc.) — skip external links like WhatsApp
- Use `threshold: 0.3` and `rootMargin: "-20% 0px -60% 0px"` to favor sections near the top of the viewport
- On intersection, update `activeTab` to the matching nav item's name
- Allow manual clicks to temporarily override (set a flag that clears after 1 second of scrolling)
- Clean up observer on unmount

**Nav items map to these section IDs:**
- "Ecosistema IA" → `#servicios`
- "En Acción" → `#agentes`
- "Método" → `#proceso`
- "Equipo" → `#quienes-somos`

---

### Part 2: Emoji Cleanup — Replace All Emojis with Lucide Icons

**File: `src/components/TrustSection.tsx`**
- Import `ShieldCheck, Zap, MapPin, Puzzle, Check` from lucide-react
- Change `diferenciadores` data: replace `emoji` string field with a `icon` React component reference:
  - `🔒` → `ShieldCheck`
  - `⚡` → `Zap`
  - `🇦🇷` → `MapPin`
  - `🔧` → `Puzzle`
- Render each icon in a `h-12 w-12 rounded-xl bg-primary/10 text-primary` container with `h-6 w-6` icon
- Change `garantias` array: remove emoji prefixes (`✅`, `🧉`), store plain text
- Render each garantia chip with `<Check className="h-3.5 w-3.5 text-emerald-400" />` prefix instead of emoji

**File: `src/components/IndustriasSection.tsx`**
- Import `Film, UtensilsCrossed, HeartPulse, Scale, ShoppingCart, GraduationCap` from lucide-react
- Change `industrias` data: replace `emoji` string with `icon` component reference:
  - `🎬` → `Film`
  - `🍽️` → `UtensilsCrossed`
  - `💊` → `HeartPulse`
  - `📊` → `Scale`
  - `🛒` → `ShoppingCart`
  - `🎓` → `GraduationCap`
- Render each in `h-12 w-12 rounded-xl bg-primary/10 text-primary` container

**File: `src/components/AgentVideoShowcase.tsx`**
- Remove `emoji` field from `Agent` interface and data
- Line 178: Remove `🤖` from badge text → just `"Nuestros Agentes en Acción"`
- Line 314: Replace `{agent.emoji}` with the agent's existing `icon` field (already has Lucide icons)

**File: `src/components/TeamSection.tsx`**
- Line 52: Remove `👥` from badge → just `"El equipo detrás de MostachIA"`

**File: `src/components/IntegrationsSection.tsx`**
- Line 152: Remove `⚡` from badge → just `"Integraciones Reales"`
- Improve letter-based orbit icons: change `bg-white/[0.06]` to `bg-white/[0.08]`, increase minimum font size, add `opacity-90`

**Files that are already clean (no changes needed):**
- `HeroSection.tsx` — uses `<Sparkles>` Lucide icon, no emoji
- `PainSection.tsx` — uses Lucide icons, badge has no emoji
- `ServiciosSection.tsx` — uses `<Sparkles>` Lucide icon, no emoji
- `FAQSection.tsx` — no emoji
- `ContactFormSection.tsx` — no emoji

---

### Summary of files to edit

| File | Changes |
|------|---------|
| `tubelight-navbar.tsx` | Add IntersectionObserver for auto-active tab |
| `TrustSection.tsx` | Replace emoji icons + guarantee chips with Lucide |
| `IndustriasSection.tsx` | Replace emoji icons with Lucide |
| `AgentVideoShowcase.tsx` | Remove emoji field, clean badge |
| `TeamSection.tsx` | Remove emoji from badge |
| `IntegrationsSection.tsx` | Remove emoji from badge, improve letter icons |

