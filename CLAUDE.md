# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **DerMobileAufbereiter (DMA)** - a German mobile car detailing service website built with Astro and React. The business offers professional interior and exterior car cleaning services directly at customer locations.

## Development Commands

```bash
# Install dependencies (uses npm, not bun despite README)
npm install

# Development server
npm run dev          # Runs on localhost:4321

# Production build
npm run build        # Builds to ./dist/

# Preview production build
npm run preview

# Astro CLI commands
npm run astro        # Access Astro CLI
```

## Architecture & Tech Stack

- **Framework**: Astro 5.9.0 with React 19.1.0 integration
- **Styling**: Tailwind CSS 4.1.4 with custom component library
- **Animations**: Motion (Framer Motion successor)
- **UI Components**: Radix UI primitives + custom components in `/src/components/ui/`
- **Icons**: Heroicons, Tabler Icons, Lucide React
- **Language**: German (business targets German market)

## Key Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components (Button, Drawer, etc.)
│   ├── pages/Home.tsx         # Main page component
│   ├── hero.tsx               # Animated hero section
│   ├── contact-drawer.tsx     # Booking integration with Cal.com
│   ├── price-list.tsx         # Service packages (€50 Basic, €100 Luxury)
│   ├── reviews.tsx            # Customer testimonials with before/after images
│   └── navbar.tsx, footer.tsx, dock.tsx
├── pages/index.astro          # Homepage entry point
├── styles/global.css          # Global styles and Tailwind config
└── lib/utils.ts              # Utility functions
```

## Business Context

- **Services**: Two packages - Basis Paket (€50) and Luxus Paket (€100)
- **Contact**: dermobileaufbereiter@gmail.com, 017643190053
- **Booking**: Integrated with https://cal.com/dermobileaufbereiter/
- **Target Market**: German-speaking car owners seeking mobile detailing

## Component Architecture

- **Page Structure**: Astro entry point (`index.astro`) renders React `<Home/>` component
- **Client Hydration**: Components use `client:only` and `client:load` directives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation**: Motion components throughout for smooth UX
- **Icons**: Consistent use of Heroicons (outline style preferred)

## Content & Images

- **Customer Photos**: Before/after images in `/public/images/` (e.g., `liviu_before.png`, `liviu_after.png`)
- **Testimonials**: Real customer reviews with German names and feedback
- **Typography**: Geist font family (included in `/public/fonts/`)

## Development Notes

- Uses modern React patterns (function components, hooks)
- TypeScript enabled throughout
- All text content is in German
- No testing framework currently configured
- Production site deployed to GitHub Pages (`edly-software.github.io/dma`)