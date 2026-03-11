

## Pre-Publish Sprint — Plan

### 1. Contact Data (constants.ts, Footer, ContactFormSection)
- `constants.ts` line 20: `hola@mostachia.com` → `info@mostachia.com`
- `constants.ts` line 16: Instagram URL → `https://www.instagram.com/mostachia.ok/`
- Add `YOUTUBE_URL: 'https://www.youtube.com/@Mostach-IA'` to CONFIG
- `Footer.tsx` line 88: phone display → `+54 9 3564 66-7968`
- `ContactFormSection.tsx` line 192: phone display → `+54 9 3564 66-7968`

### 2. Team LinkedIn (TeamSection.tsx)
- Line 15: `juancruzbertorello` → `juanbertorello`
- Line 24: `diego-gonzalez` → `diegogonzalez316`
- Line 33: `florencia-ferrer-cabrera` → `florencia-ferrer-0a6455148`
- Line 42: `juan-andres-huenz` → `jahuenz`

### 3. Footer Updates (Footer.tsx)
- Add `Youtube` to lucide imports
- Add YouTube icon link after LinkedIn icon, using `CONFIG.YOUTUBE_URL`
- Line 102: Remove `🇦🇷` flag, keep text as `Córdoba, Argentina`

### 4. Favicon (index.html)
- Already has `<link rel="icon" href="/favicon.ico" />` on line 28. No change needed.

### 5. FloatingWhatsApp FAB Position
- The `hiddenBySticky` logic on line 79 hides FAB on mobile when scrolled past hero. This is overly aggressive — the StickyCTA is disabled (`{false && <StickyCTA />}`). Simplify: remove the `hiddenBySticky` state entirely so the FAB is always visible.

### 6. Improved Service Mockups (ServiciosSection.tsx)

**Analytics**: Add differentiated KPI colors (green/blue/red/amber), more detailed bar chart with gradient colors per bar, trend arrow indicator.

**Marketing**: Add progress bars for open rates, make ROAS banner more prominent with large number and up arrow.

**Content**: Add mini color preview squares simulating image thumbnails, expand brand kit with MostachIA colors.

**Sales**: Add visual mini funnel (Nuevo → Calificado → Cerrado) with counts, add channel icons (WhatsApp/Web) per lead.

**Support**: Add circular progress rings for CSAT/Resolution metrics instead of plain text.

### 7. Footer "AR" removal
- Line 102 currently shows `Córdoba, Argentina 🇦🇷`. Remove the flag emoji.

### Files to edit
1. `src/config/constants.ts` — email, Instagram, add YouTube
2. `src/components/TeamSection.tsx` — 4 LinkedIn URLs
3. `src/components/Footer.tsx` — YouTube icon, phone format, remove flag
4. `src/components/ContactFormSection.tsx` — phone format
5. `src/components/FloatingWhatsApp.tsx` — remove hiddenBySticky logic
6. `src/components/ServiciosSection.tsx` — enrich all 5 mockups

