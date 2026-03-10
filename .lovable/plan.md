

## Fix Responsive Mobile -- 6 Issues

### 1. Hero CTA hidden by navbar (`src/components/HeroSection.tsx`)
- Line 17: Change `pb-10` to `pb-28 sm:pb-10` so the CTA clears the bottom navbar on mobile
- Line 45: Change `text-6xl md:text-8xl` to `text-4xl sm:text-5xl md:text-8xl` for better mobile title sizing

### 2. Navbar safe area (`src/components/ui/tubelight-navbar.tsx`)
- Line 80: Change `bottom-4` to `bottom-6` 
- Add `pb-[env(safe-area-inset-bottom)]` to the inner container div

### 3. FloatingWhatsApp overlaps navbar (`src/components/FloatingWhatsApp.tsx`)
- Line 211: Change `bottom-6 right-6` to `bottom-24 right-4 sm:bottom-6 sm:right-6` on the FAB button

### 4. ScrollToTop overlaps navbar (`src/components/ScrollToTop.tsx`)
- Line 43: Change `bottom-6 right-6 md:bottom-24 md:right-6` to `bottom-24 right-4 sm:bottom-6 sm:right-6`

### 5. StickyCTA z-index (`src/components/StickyCTA.tsx`)
- Change `z-30` to `z-40` for consistency
- Change `bottom-0` to `bottom-20 sm:bottom-0` so it sits above the navbar

### 6. HowItWorks CTA button truncated (`src/components/HowItWorksSection.tsx`)
- Line 286: Change button className to `w-full sm:w-auto text-base sm:text-lg font-bold px-6 sm:px-12 py-5 sm:py-6 group shadow-[0_4px_24px_rgba(96,185,154,0.4)]`
- Line 289: Split button text into mobile/desktop variants: `<span className="hidden sm:inline">Agendá tu Consultoría Gratuita</span><span className="sm:hidden">Agendar Consultoría</span>`
- Line 73: Change `px-6` to `px-4 sm:px-6` on the container

### Z-index hierarchy
- Navbar: z-50 (already correct)
- FloatingWhatsApp FAB: z-40 (already correct)
- ScrollToTop: z-50 → z-40
- StickyCTA: z-30 → z-40

