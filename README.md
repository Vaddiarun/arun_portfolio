# Arun Kumar — Portfolio (React + Vite)

A premium, motion-rich personal portfolio for **Arun Kumar — Frontend Developer**.
Built with React 18 + Vite and hand-written CSS (no UI framework). Features an
animated particle background, scroll-reveal motion, animated counters, a typed
role headline, magnetic tilt/spotlight hover, an animated live-dashboard mock,
and a fully responsive layout.

## Tech

- **React 18** + **Vite 5**
- Custom CSS design system (`src/index.css`) — cyan/indigo/fuchsia on deep navy
- Fonts: Space Grotesk · Plus Jakarta Sans · JetBrains Mono (Google Fonts)
- Zero heavy runtime deps — motion is plain CSS + a small scroll-based hook

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> Requires Node 18+.

## Project structure

```
.
├── index.html                 # Vite entry (loads Google Fonts)
├── public/
│   ├── profile-pic.png        # hero portrait — replace with your own
│   └── favicon.svg
└── src/
    ├── main.jsx               # React root
    ├── App.jsx                # composes all sections, runs useMotion()
    ├── index.css              # full design system + all component styles
    ├── data/
    │   └── profile.js         # ← EDIT THIS to update all content (single source of truth)
    ├── hooks/
    │   └── useMotion.js        # scroll reveals, counters, nav, tilt, cursor glow
    └── components/
        ├── Background.jsx     # particle canvas + glow blobs + grid + progress bar
        ├── Navbar.jsx
        ├── Hero.jsx           # typed role headline + portrait
        ├── Marquee.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx       # featured IoT dashboard + project grid
        ├── Certifications.jsx # top 6 + expandable "show all"
        ├── Contact.jsx
        ├── Footer.jsx
        ├── BackToTop.jsx
        ├── icons.jsx          # inline SVG icon components
        └── RawSvg.jsx         # renders the category icon strings
```

## Editing content

Almost everything lives in **`src/data/profile.js`** — your name, contact details,
roles, education, skills, experience, projects and certifications. Update there and
the whole site reflects it. Swap `public/profile-pic.png` for your own photo.

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages). Build with `npm run build`
and deploy the `dist/` folder.
