# Orbira Labs Website

Premium, minimal brand website for Orbira Labs - an independent product lab developing simple, fluid digital products.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with SEO
│   ├── globals.css        # Global styles & design tokens
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── SectionHeader.tsx
│   │   └── OrbitalBackground.tsx
│   └── sections/          # Page sections
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── BrandThesis.tsx
│       ├── FeaturedProduct.tsx
│       ├── ProductEcosystem.tsx
│       ├── Approach.tsx
│       ├── Founder.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── lib/
    ├── constants.ts       # Site config, products, content
    └── utils.ts           # Utility functions
```

## Design System

### Colors

- **Background:** `#09090b` (dark)
- **Foreground:** `#fafafa` (light text)
- **Brand Primary:** `#6366f1` (indigo)
- **Brand Secondary:** `#8b5cf6` (violet)
- **Brand Accent:** `#22d3ee` (cyan)

### Typography

- Font: Geist Sans
- Hierarchy: Semibold headings, regular body text
- Scale: Responsive sizing with Tailwind

### Components

- Rounded corners: `2xl` to `3xl`
- Thin borders: `border-white/8`
- Glass morphism where appropriate
- Subtle hover lifts and transitions

## Features

- Responsive design (mobile-first)
- Smooth scroll animations
- Orbital background effects
- Product status badges (Live, In Progress, Concept)
- SEO optimized with metadata and schema
- Accessible (ARIA labels, focus states)

## Content Management

All content is managed in `src/lib/constants.ts`:

- `SITE_CONFIG` - Site metadata and contact info
- `PRODUCTS` - Product catalog with statuses
- `PRINCIPLES` - Brand principles
- `PROCESS_STEPS` - Approach methodology
- `FOUNDER` - Founder information

## Future Expansion

The architecture supports:
- Individual product detail pages
- Blog/content pages
- Multi-language support
- CMS integration

## License

© 2026 Orbira Labs. All rights reserved.
