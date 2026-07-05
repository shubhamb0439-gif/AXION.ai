# AXION — Landing Site (React + Vite)

A premium marketing site for AXION, refactored from a single HTML file into a
structured React application organised around SOLID principles.

## Run it

```bash
npm install
npm run dev      # local dev server (Vite prints the URL)
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
```

Requires Node 18+.

## Where things live

```
src/
├─ main.jsx                 App entry (mounts React, loads styles)
├─ App.jsx                  Composition root — declares page order only
├─ styles/
│  ├─ tokens.css            Design tokens (colour, type, radius, motion)
│  └─ global.css            Reset + all component styles
├─ data/                    All copy & content (edit here, not in components)
│  ├─ capabilities.js  comparison.js  process.js   services.js
│  ├─ industries.js    techStack.js   stats.js     pricing.js
│  ├─ portfolio.js     testimonials.js faqs.js     site.js
├─ hooks/                   One behaviour per hook
│  ├─ useReveal.js          scroll-in animation
│  ├─ useCountUp.js         animated stat counters
│  ├─ useScrolled.js        navbar glass-on-scroll
│  ├─ useOrbitalField.js    hero constellation canvas
│  ├─ useMagnetic.js        cursor-magnetic buttons
│  ├─ useRailProgress.js    process-rail scroll progress
│  └─ useReducedMotion.js   honours prefers-reduced-motion
└─ components/
   ├─ primitives/           Icon, Button, Section, SectionHeading, Reveal
   ├─ brand/                Logo, iconRegistry
   ├─ layout/               Background, Navbar, Footer
   └─ sections/             Hero, WhyUs, Philosophy, Process, Services,
                            Industries, TechStack, Stats, Pricing, Portfolio,
                            Testimonials, Faq, Contact
```

## How SOLID maps onto the code

- **Single Responsibility** — each component renders one thing; each hook owns one
  behaviour; content lives in `data/`, not inside components.
- **Open/Closed** — sections render from data arrays. Add a service, FAQ, phase, or
  pricing tier by editing a file in `data/` — no component changes.
- **Liskov Substitution** — `Button` variants (`primary` / `ghost`) are interchangeable
  through one prop contract; `Reveal`'s `as` prop swaps the tag without changing behaviour.
- **Interface Segregation** — content is split per domain so each section imports only
  the data it needs.
- **Dependency Inversion** — components depend on the `Icon` abstraction and the
  icon registry, never on raw SVG; behaviour is injected via hooks.

## Before launch — replace placeholders

- **Portfolio** (`src/data/portfolio.js`) — placeholder case studies.
- **Testimonials** (`src/data/testimonials.js`) — placeholder quotes; use real,
  attributed ones.
- **Contact details** (`src/data/site.js`) — `hello@axion.dev`,
  `+1 (000) 000-0000`, and the LinkedIn slug are placeholders.
