

## Fix Logos + Remove ScrollToTop

### Current State
- **Navbar**: Already correct (`/isotipo-mint.png`, `h-7 w-7`, no bg container)
- **FloatingWhatsApp**: Already correct (`/isotipo-mint.png` for both FAB and chat header)
- **Footer**: Uses `/logo-slogan.png` but with `h-[50px]` — needs to be `h-8 sm:h-10`
- **IntegrationsSection**: No orbit/center icon — just sliders, no change needed
- **ScrollToTop**: Currently hidden on mobile (`hidden sm:flex`) but still shows on desktop overlapping chat widget

### Changes

| File | Change |
|------|--------|
| `src/components/Footer.tsx` | Line 31: Change `h-[50px]` to `h-8 sm:h-10` on the logo img |
| `src/pages/Index.tsx` | Remove `<ScrollToTop />` import and usage entirely |

### Detail

1. **Footer logo sizing** — reduce from 50px fixed to responsive `h-8 sm:h-10` (32px / 40px)
2. **ScrollToTop removal** — delete the import (line 18) and the `<ScrollToTop />` render (line 47), eliminating overlap with the chat widget. No other component changes needed.

Everything else is already correctly configured with the transparent PNG assets.

