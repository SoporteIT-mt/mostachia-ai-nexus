

## Fix: Replace broken svgl.app logos with SimpleIcons CDN

The file structure is clean (no duplicate dividers). The only change needed is swapping all logo URLs to `cdn.simpleicons.org/[name]/white` and removing `brightness-0 invert` since SimpleIcons serves pre-colored SVGs.

### Changes in `src/components/IntegrationsSection.tsx`

**Lines 5-27**: Replace both logo arrays with SimpleIcons CDN URLs:
- Row 1: openai, whatsapp, zapier, stripe, supabase, notion, postgresql, shopify, anthropic
- Row 2: slack, gmail, telegram, mongodb, googlesheets, github, n8n, make, googlegemini

**Lines 73 and 93**: Update image classes — remove `brightness-0 invert`, bump size to `h-7 md:h-8 w-auto`.

No other changes. Header, CTA, dividers, and InfiniteSlider props stay as-is.

