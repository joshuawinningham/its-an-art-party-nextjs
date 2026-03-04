# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js site for "It's an Art Party" — a mobile art and paint party business for kids in Charlotte, NC. Converted from a WordPress theme to a static Next.js app.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with `@tailwindcss/typography` plugin
- **Fonts:** Chewy (display) + Lato (body) via `next/font/google`
- **Images:** `next/image` for optimization, served from `public/images/`
- **Hosting:** Vercel (auto-deploys on push to `main`)
- **Forms:** Contact form via Resend (`/api/inquiry`) with optional webhook support

## Development Commands

```bash
npm run dev       # Start dev server on localhost:3000
npm run build     # Production build
npm run start     # Serve production build locally
npm run lint      # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, header, footer, JSON-LD)
│   ├── page.tsx                # Homepage (10 sections)
│   ├── globals.css             # Tailwind + custom components
│   ├── about/page.tsx
│   ├── art-lessons/page.tsx
│   ├── kids-birthdays/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Single post (SSG)
│   ├── not-found.tsx
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # Robots.txt
│   └── api/inquiry/route.ts    # Contact form endpoint
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav with mobile menu
│   │   └── Footer.tsx          # 3-column footer with blog links
│   ├── sections/               # Page section components
│   │   ├── Hero.tsx            # Homepage hero with rotating words
│   │   ├── FeatureCards.tsx
│   │   ├── About.tsx
│   │   ├── AsSeenIn.tsx
│   │   ├── Gallery.tsx
│   │   ├── PartyOptions.tsx
│   │   ├── Pricing.tsx
│   │   ├── Cta.tsx             # Shared CTA (accepts per-page props)
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── PageHero.tsx        # Inner page hero
│   └── ScrollAnimations.tsx    # Client component for scroll animations
├── hooks/
│   └── useRotatingWord.ts
└── lib/
    └── blog.ts                 # Blog data (hardcoded posts + utility functions)
```

## Content

All content is hardcoded — no CMS. Blog posts are defined in `src/lib/blog.ts` with HTML content strings. Page content is directly in each page component.

**Original source:** WordPress theme at `/Users/Josh/Desktop/projects/its-an-art-party-wp/`

## Design System

Colors, fonts, spacing, and custom components (`.btn-chunky`, `.blob`, `.paint-drip-*`, `.polaroid`, `.tape`, `.pin`, `.animate-on-scroll`, `.fun-underline`, `.speckle-bg`) are defined in `globals.css`. Color palette: teal, pink, gold, cream, dark.

## SEO

- Per-page metadata with Yoast-matching titles
- Open Graph tags on all pages
- Canonical URLs via `alternates.canonical`
- Robots meta tag (index, follow)
- Dynamic sitemap at `/sitemap.xml`
- JSON-LD structured data (LocalBusiness + WebSite)
- `NEXT_PUBLIC_SITE_URL` env var controls the canonical domain

## Pending

- Social media links in footer are `#` placeholders (same as live WP site)

## Git & Deployment

- **Repo:** https://github.com/joshuawinningham/its-an-art-party-nextjs
- **Hosting:** Vercel (auto-deploys from `main`)
- **Important:** Do NOT include `Co-Authored-By: Claude` in commit messages
