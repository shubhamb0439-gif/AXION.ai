/**
 * Icon registry. Each entry holds only the inner SVG geometry; the <Icon>
 * primitive supplies the shared <svg> wrapper, stroke width and colour.
 * Colour is intentionally left to CSS (`.x svg { stroke: ... }`) so a single
 * glyph adapts to every context without per-call overrides.
 *
 * To add an icon: drop a new entry here. No component needs to change.
 */
export const STROKE = { strokeLinecap: 'round', strokeLinejoin: 'round' };

export const ICONS = {
  bolt: { body: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /> },
  shield: { body: <><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></> },
  cloud: { body: <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.5A4 4 0 0 0 6.5 19h11Z" /> },
  code: { body: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /> },
  brain: { body: <path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 1 5 3 3 0 0 0 5 1V4a1 1 0 0 0-1-1ZM15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-1 5 3 3 0 0 1-5 1V4a1 1 0 0 1 1-1Z" /> },
  target: { body: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></> },
  users: { body: <><path d="M16 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="3.2" /><path d="M22 19v-2a4 4 0 0 0-3-3.8M16 3.3A4 4 0 0 1 16 11" /></> },
  chart: { body: <><path d="M3 3v18h18" /><path d="m7 14 3-4 3 3 5-7" /></> },
  rocket: { body: <><path d="M5 14c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2.2 0-3s-2.2-.8-3 0Z" /><path d="M9 11c5-5 8-5 11-5 0 3 0 6-5 11l-3 1-4-4 1-3Z" /><circle cx="15" cy="9" r="1.5" /></> },
  device: { body: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18h2" /></> },
  db: { body: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.6 3.6 3 8 3s8-1.4 8-3V5M4 12c0 1.6 3.6 3 8 3s8-1.4 8-3" /></> },
  gear: { body: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7l-.1-.1A2 2 0 1 1 7.3 4l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" /></> },
  palette: { body: <><path d="M12 2a10 10 0 0 0 0 20 2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 1 2-4h2a4 4 0 0 0 4-4 10 10 0 0 0-10-8Z" /><circle cx="7.5" cy="10.5" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="16.5" cy="10.5" r="1" /></> },
  layers: { body: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></> },
  plug: { body: <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6" /> },
  refresh: { body: <path d="M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5" /> },
  box: { body: <><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" /><path d="m3 8 9 5 9-5M12 13v9" /></> },
  flag: { body: <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1ZM4 22v-7" /> },
  heart: { body: <path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3 1 4 2.5 1-1.5 2-2.5 4-2.5 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21Z" /> },
  bank: { body: <path d="M3 21h18M4 10h16M5 10V7l7-4 7 4v3M6 10v8M10 10v8M14 10v8M18 10v8" /> },
  factory: { body: <path d="M3 21V9l5 3V9l5 3V9l5 3V21H3ZM3 9 2 3h2l1 6" /> },
  cart: { body: <><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h2l2.5 13h12l2-9H6" /></> },
  cap: { body: <><path d="m2 8 10-4 10 4-10 4L2 8Z" /><path d="M6 10v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 8v6" /></> },
  gov: { body: <path d="M3 21h18M4 21V10M20 21V10M9 21V13h6v8M3 10l9-6 9 6" /> },
  truck: { body: <><path d="M2 6h11v10H2zM13 9h4l3 3v4h-7" /><circle cx="6" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></> },
  id: { body: <><rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="8" cy="11" r="2.2" /><path d="M5 16c.6-1.6 4.4-1.6 5 0M14 9h5M14 13h4" /></> },
  crane: { body: <><path d="M5 21V4l14 1M5 4l8 1M9 4v4M13 8v6M13 14h-2.5" /><path d="M3 21h18" /></> },
  spark: { body: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /> },
  check: { sw: 2, body: <path d="m5 12 5 5 9-11" /> },
  x: { sw: 2, body: <path d="M6 6l12 12M18 6 6 18" /> },
  arrow: { sw: 2, body: <path d="M5 12h14M13 6l6 6-6 6" /> },
  cal: { body: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></> },
  mail: { body: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></> },
  phone: { body: <path d="M5 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" /> },
  linkedin: { body: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4" /></> },
  xSocial: { body: <path d="M4 4l16 16M20 4 4 20" /> },
  star: { fill: true, body: <path d="m12 2 3 6.5 7 .8-5 4.8 1.4 7L12 18l-6.4 3 1.4-7-5-4.8 7-.8L12 2Z" /> },
};
