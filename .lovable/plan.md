

## Fix Mobile Bottom Zone -- 4 Changes

### 1. Remove StickyCTA from render (`src/pages/Index.tsx`)
- Line 48: Replace `<StickyCTA />` with `{false && <StickyCTA />}` to disable without deleting the component file

### 2. FloatingWhatsApp FAB position (`src/components/FloatingWhatsApp.tsx`)
- Line 211: Change `bottom-24 right-4 sm:bottom-6 sm:right-6` to `bottom-20 right-4 sm:bottom-6 sm:right-6` (closer to navbar, no StickyCTA collision anymore)

### 3. Hide ScrollToTop on mobile (`src/components/ScrollToTop.tsx`)
- Line 38: Add `hidden sm:flex` to the button className so it only appears on desktop
- Keep `sm:bottom-6 sm:right-6 z-40` for desktop positioning

### 4. Navbar safe area (`src/components/ui/tubelight-navbar.tsx`)
- Line 75: Change `bottom-6` to `bottom-0` so it sits flush at the bottom edge
- The inner div already has `pb-[env(safe-area-inset-bottom)]` -- no change needed there

### Result on mobile
Only 2 fixed elements: Navbar (bottom-0, z-50) and FloatingWhatsApp FAB (bottom-20, z-40). Clean and uncluttered.

