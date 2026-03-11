

## Add YouTube Video to Analytics Agent

Single change in `src/components/AgentVideoShowcase.tsx`: add `videoUrl` to the analytics agent object (line ~36).

```ts
tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'Google Sheets'],
videoUrl: 'https://www.youtube.com/embed/msn2181HNDQ',
```

The component already handles video rendering via Dialog + iframe when `videoUrl` is present, and auto-generates the YouTube thumbnail. No other changes needed.

