

## Multi-Interaction per Agent — Plan

### Approach

Modify `AgentChatWrapper` to support a second interaction sequence (second user prompt + typing + second mockup). Each agent definition gets a `secondPrompt` string, and each agent gets a `SecondMockup` component.

### Changes

#### 1. Agent data (`agentes` array, lines 11-57)
Add `secondPrompt` field to each agent:
- Analytics: `"Armame un dashboard interactivo con estos datos"`
- Marketing: `"Enviá la campaña optimizada a toda la lista"`
- Content: `"Generame también el caption y los hashtags"`
- Sales: `"Agendame una reunión con María López para mañana"`
- Support: `"Mostrame las métricas de soporte de hoy"`

#### 2. `AgentChatWrapper` (lines 59-123)
- Accept new props: `secondPrompt`, `secondChildren`
- Extend step state to include steps 3-5:
  - Step 3 (4000ms): Show second user bubble
  - Step 4 (4600ms): Show typing dots for second response
  - Step 5 (6100ms): Show second mockup
- Add `useRef` for auto-scroll: when step 3+ triggers, scroll the chat container down smoothly
- Render second interaction block after the first mockup when step >= 3

#### 3. Five new compact mockup components

**`SecondMockupAnalytics`**: Dashboard-generated confirmation card with BarChart3 icon, "Ver Dashboard Interactivo" link card, and email notification text.

**`SecondMockupMarketing`**: Mail sent confirmation with check icon, 3-stat row (2,847 recipients, 10:30 AM send time, preview email), green "Enviada ✓" badge.

**`SecondMockupContent`**: Caption text block with sample copy, hashtag chips in purple, footer with scheduling prompt.

**`SecondMockupSales`**: Calendar + check icon, emerald-bordered card with meeting details (María López, tomorrow 14:00), WhatsApp/email confirmation, Meet link.

**`SecondMockupSupport`**: "Resumen del día" with Activity icon, 2x2 grid of stats (23 tickets, 28s response, 98% CSAT, 94% resolution) with mini progress indicators, proactive footer.

#### 4. Wiring (lines 580, 689-691)
- Create `secondMockupComponents` array parallel to `mockupComponents`
- Pass `secondPrompt` and second mockup as children to `AgentChatWrapper`

#### 5. Auto-rotate timer (line 591)
Change from `15000` to `20000` ms to allow time for both interactions.

#### 6. Scroll behavior
Add a `ref` on the chat content container (line 680) and pass it to `AgentChatWrapper` so it can call `scrollIntoView({ behavior: 'smooth' })` on the second interaction elements.

### Files modified
- `src/components/ServiciosSection.tsx` — all changes in one file

