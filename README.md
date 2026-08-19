# 💍 PerfectRishta — UK's Premium Islamic Marriage Bureau

> A beautiful, production-grade matrimonial website for British Muslims. Built with Vite + React 19 + TypeScript + Tailwind CSS, featuring an elegant cinematic preloader with video, GSAP animations, smooth Lenis scroll, fully responsive pages, and comprehensive SEO meta tags.

---

## 📌 Table of Contents

- [✨ Project Overview](#-project-overview)
- [🎯 Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Dev Server](#running-the-dev-server)
  - [Building for Production](#building-for-production)
  - [Previewing the Production Build](#previewing-the-production-build)
- [🎨 Pages & Sections](#-pages--sections)
  - [Home Page (`/`)](#home-page-)
  - [About Page (`/about`)](#about-page-about)
  - [Join Page (`/join`)](#join-page-join)
  - [Profiles Page (`/profiles`)](#profiles-page-profiles)
  - [Proposals Page (`/proposals`)](#proposals-page-proposals)
- [🎬 Preloader (Video + GSAP Timeline)](#-preloader-video--gsap-timeline)
- [💎 Membership Tiers](#-membership-tiers)
- [🔍 SEO & Meta Data](#-seo--meta-data)
- [🧩 UI Component Library (shadcn/ui)](#-ui-component-library-shadcnui)
- [🔧 Customization Guide](#-customization-guide)
  - [Branding Colors](#branding-colors)
  - [Typography](#typography)
  - [Images & Assets](#images--assets)
  - [SEO / Contact Info](#seo--contact-info)
- [📝 License](#-license)

---

## ✨ Project Overview

**PerfectRishta** is a premium, elegantly designed Islamic marriage bureau website serving the British Muslim community. The site embodies a luxurious, wedding-inspired aesthetic with deep maroon tones, gold accents, cinematic video motion, and delicate ornamentation — reflecting the sacred, celebratory nature of the matchmaking service it represents.

This codebase is production-ready, fully responsive, SEO-optimized, and pre-loaded with all required pages, images, and content sections.

---

## 🎯 Key Features

| Feature | Status |
|---------|:------:|
| 🎥 **Cinematic Preloader** — MP4 wedding video + animated logo + shimmering gold progress bar + decorative frames | ✅ |
| 🧭 **Multi-page Routing** — 5 distinct pages (Home / About / Join / Profiles / Proposals) via React Router | ✅ |
| 🎬 **GSAP Timeline Animations** — 10-phase preloader, staggered hero reveals, ScrollTrigger integrations | ✅ |
| 🖼️ **Smooth Scrolling** — Lenis inertia-based smooth scroll with GSAP ticker sync | ✅ |
| 🎨 **Luxury Visual Design** — Maroon (#800020 / #4A0404) + Gold (#D4AF37) palette, bokeh overlays, glassmorphism cards | ✅ |
| 📱 **Fully Responsive** — Mobile-first, fluid typography with `clamp()`, mobile hamburger navigation | ✅ |
| 🔍 **Enterprise SEO** — Full meta tags, OpenGraph, Twitter Cards, Geo Tags, JSON-LD structured data | ✅ |
| 🎟️ **Pricing / Membership Section** — 3-tier plans (Silver / Gold / Platinum) with feature lists | ✅ |
| 🧩 **40+ UI Components** — shadcn/ui + Radix primitives pre-installed (Button, Card, Dialog, Form, etc.) | ✅ |
| 🔒 **StrictMode Compatible** — GSAP contexts properly cleaned up; refs reset to prevent double-effect deadlocks | ✅ |
| ♿ **A11y Conscious** — Semantic HTML, focusable nav links, labelled images, proper heading hierarchy | ✅ |

---

## 🛠️ Tech Stack

| Layer | Tooling | Version |
|-------|---------|---------|
| **Build Tool** | Vite | `^7.2.4` |
| **UI Framework** | React | `^19.2.0` |
| **Language** | TypeScript | `~5.9.3` |
| **Styling** | Tailwind CSS | `^3.4.19` |
| **CSS Plugins** | tailwindcss-animate, tw-animate-css | `^1.0.7`, `^1.4.0` |
| **Routing** | React Router DOM | `^7.18.2` |
| **Animations** | GSAP + ScrollTrigger | `^3.15.0` |
| **Smooth Scroll** | Lenis | `^1.3.25` |
| **Forms** | React Hook Form + Zod + @hookform/resolvers | `^7.70.0`, `^4.3.5` |
| **Primitives** | Radix UI (40+ components: Accordion, Dialog, Dropdown, Sheet, Select, Tabs...) | Various |
| **UI Library** | shadcn/ui | (components in `src/components/ui/`) |
| **Icons** | Lucide React | `^0.562.0` |
| **Date** | date-fns + react-day-picker | `^4.1.0`, `^9.13.0` |
| **3D (available)** | Three.js + types | `^0.185.1` |
| **Charts (available)** | Recharts | `^2.15.4` |
| **Carousels** | Embla Carousel React | `^8.6.0` |
| **Linting** | ESLint + typescript-eslint | `^9.39.1` |

---

## 📁 Project Structure

```
app/
├── public/
│   └── images/                      # All static image + video assets (hero, gallery, preloader, logo)
│       ├── hero-bg.jpg              # Main hero banner — wedding couple with bokeh
│       ├── bg-bokeh.jpg             # Overlay layer for blend modes
│       ├── bg-abstract.jpg / bg-floral.jpg / bg-geometric.jpg
│       ├── preloader-bg.jpg         # Preloader poster image
│       ├── preloader-video.mp4      # 🎥 Cinematic wedding video (preloader)
│       ├── preloader-couple.jpg
│       ├── pr-logo.jpg              # PerfectRishta brand logo
│       ├── about-couple.jpg
│       ├── mehndi-hands.jpg
│       ├── family-meeting.jpg
│       ├── wedding-bg.jpg
│       └── gallery-1.jpg → gallery-12.jpg   # Photo gallery assets
├── src/
│   ├── components/
│   │   ├── ui/                      # 40+ shadcn/ui Radix components
│   │   ├── Navigation.tsx           # Site-wide navbar with hamburger menu
│   │   ├── Preloader.tsx            # ⭐ Cinematic preloader w/ video + GSAP timeline
│   │   └── TextReveal.tsx           # Scroll-triggered text reveal helper
│   ├── sections/                    # Reusable page sections
│   │   ├── Hero.tsx                 # Generic hero section
│   │   ├── HeroHome.tsx             # Home page hero (story cards + CTA)
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx               # Site footer with contact + socials
│   │   ├── Locations.tsx
│   │   ├── LoveStory.tsx
│   │   ├── Membership.tsx           # 3-tier pricing / membership plans
│   │   ├── Process.tsx
│   │   ├── ServicesTimeline.tsx
│   │   └── WelcomeInfo.tsx
│   ├── pages/                       # Route-level pages (used in App.tsx <Routes/>)
│   │   ├── HomePage.tsx             # HeroHome + Membership + Footer
│   │   ├── AboutPage.tsx
│   │   ├── JoinPage.tsx
│   │   ├── ProfilesPage.tsx
│   │   ├── ProposalsPage.tsx
│   │   └── Home.tsx
│   ├── content/
│   │   └── seoContent.ts            # Centralized SEO / copy content
│   ├── hooks/
│   │   └── use-mobile.ts            # Hook for responsive mobile detection
│   ├── lib/
│   │   └── utils.ts                 # `cn()` helper (clsx + tailwind-merge), etc.
│   ├── App.tsx                      # Routes, preloader state, Navigation
│   ├── main.tsx                     # Entry (HashRouter + StrictMode)
│   ├── index.css                    # Tailwind base + brand tokens + typography
│   └── App.css
├── index.html                       # SEO meta tags, JSON-LD, fonts (Cormorant Garamond + Inter)
├── vite.config.ts                   # Port 3000, @ alias, kimi inspect plugin
├── tailwind.config.js               # Brand color tokens, font-display, font-body
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── eslint.config.js
├── postcss.config.js
├── components.json                  # shadcn/ui config
├── package.json                     # 495 packages (all dependencies listed)
├── package-lock.json
├── .gitignore
└── README.md                        # 👈 This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `>= 18` (recommended: Node 20 LTS)
- **npm**: Included with Node.js (this project uses `package-lock.json`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Farjaadrizvi110/perfectrishtatestvideoaddonpreloaderpage.git
cd perfectrishtatestvideoaddonpreloaderpage

# 2. Install all dependencies
npm install
# → Installs 495 packages from package-lock.json
```

### Running the Dev Server

```bash
npm run dev
# Vite v7.x starts → usually http://localhost:3000/
# If 3000 is occupied, Vite auto-switches to 3001, 3002, etc.
```

Open the URL in your browser. You will see:
1. ~12s cinematic **preloader video** (wedding clip) with logo, tagline, and progress bar
2. Automatic fade into the **Home page** with smooth GSAP content reveals

### Building for Production

```bash
npm run build
# Runs: tsc -b && vite build
# Output goes to ./dist/ directory
```

### Previewing the Production Build

```bash
npm run preview
# Serves the ./dist/ folder via Vite preview server
```

---

## 🎨 Pages & Sections

### Home Page (`/`)

Combines `HeroHome` → `Membership` → `Footer`.

- **HeroHome** Section ([HeroHome.tsx](file:///e:/Perfectrishta-website-test/app/src/sections/HeroHome.tsx)):
  - Full-viewport height banner with layered `hero-bg.jpg` + `bg-bokeh.jpg` (30% blend overlay) + maroon gradient
  - Animated headline *"The beginning of your love story"* (Cormorant Garamond light, `clamp(2.2rem, 5vw, 4rem)`)
  - 3 staggered glassmorphism story cards (backdrop-blur, 15% white border, 10% white fill)
  - Primary CTA → `/join` (gold pill button) + Secondary CTA → `/about` (white outline)
  - SVG wave divider into next section

- **Membership** Section ([Membership.tsx](file:///e:/Perfectrishta-website-test/app/src/sections/Membership.tsx)):
  - 3 pricing cards with full feature list items
  - See [Membership Tiers](#-membership-tiers) below for pricing

- **Footer** Section ([Footer.tsx](file:///e:/Perfectrishta-website-test/app/src/sections/Footer.tsx)):
  - Contact: `contact@perfectrishta.co.uk` · `+44 (0) 20 7946 0958`
  - Social: Instagram, Facebook, WhatsApp
  - Legal: Privacy Policy, Terms & Conditions, Safeguarding
  - Brand logo + copyright 2025

### About Page (`/about`)

Uses sections `About.tsx`, `LoveStory.tsx`, `WelcomeInfo.tsx`, `Process.tsx`, `FAQ.tsx`.

### Join Page (`/join`)

Registration / profile creation flow using the pre-installed shadcn form components (Form, Input, Checkbox, Select, etc.) with Zod validation.

### Profiles Page (`/profiles`)

Browse matrimonial profiles. Uses Card, Avatar, Badge, Pagination components.

### Proposals Page (`/proposals`)

Proposal management dashboard — uses Button, Dialog, Drawer, Tabs, Data Table.

---

## 🎬 Preloader (Video + GSAP Timeline)

**File**: [src/components/Preloader.tsx](file:///e:/Perfectrishta-website-test/app/src/components/Preloader.tsx)

The cinematic preloader is a 10-phase GSAP timeline, total duration ~12 seconds, with a 16-second **safety timeout** as fallback.

| Phase | Animation | Duration |
|-------|-----------|----------|
| 1 | Background video (`preloader-video.mp4`) slow zoom + fade in (from 1.15× → 1×) | 2.2s |
| 2 | Top gold gradient line sweeps in from left (origin-left scaleX) | 1.2s |
| 3 | Bottom gold gradient line sweeps in from right (origin-right scaleX) | 1.2s |
| 4 | `pr-logo.jpg` bounces in with `elastic.out(1, 0.6)` easing (scale 0.3→1 + y40→0) | 1.8s |
| 5 | Decorative circular ring rotates in with `back.out(1.7)` | 1.2s |
| 6 | Tagline *"The beginning of your love story"* fades up | 1.0s |
| 7 | Progress track reveals (scaleX 0→1) | 0.8s |
| 8 | Gold shimmering progress bar fills (0% → 100%), live percentage counter updates | 2.5s |
| 9 | Hold moment (dwell on completed state before exit) | 0.6s |
| 10 | Staggered exit: all UI y-30 fade-out → video fade → container fade | 0.8s + 1s + 0.5s |

**Safety Features** implemented to fix React 19 StrictMode:
- `safeOnComplete()` guard ensures `onComplete()` fires exactly once
- 16s `setTimeout` fallback forces completion even if GSAP fails
- Cleanup function resets `hasAnimated`, `onCompleteCalled` refs and clears timeout

---

## 💎 Membership Tiers

| Tier | Duration | Price | Key Inclusions |
|------|----------|-------|----------------|
| 🪙 **Silver** | 3 Months | **£99** | Initial consultation · Profile creation + vetting · Up to 3 curated introductions · Basic background verification · Email support |
| 🥇 **Gold** | 6 Months | **£199** | **Most Popular.** Everything in Silver · Up to 8 introductions · Priority matching · In-person home visit verification · Dedicated matchmaker · Phone + email support |
| 👑 **Platinum** | 12 Months | **£349** | Everything in Gold · **Unlimited introductions** · Premium profile placement · Family meeting facilitation · Ongoing relationship guidance · **24/7 priority support** |

> All fees non-refundable. Membership auto-renews unless cancelled 7 days before expiry.

---

## 🔍 SEO & Meta Data

Full SEO implementation lives in [index.html](file:///e:/Perfectrishta-website-test/app/index.html):

| Category | Coverage |
|----------|----------|
| **Primary Meta** | Title (60 chars), Description (155 chars), 15 targeted keywords, author, robots, canonical |
| **Open Graph (Facebook)** | og:type, og:url, og:title, og:description, og:image (hero-bg.jpg), og:locale=en_GB |
| **Twitter Cards** | twitter:card=summary_large_image, url, title, description, image |
| **Geo Tags** | geo.region=GB, geo.placename=United Kingdom |
| **Structured Data (JSON-LD)** | `Organization` schema (name, contact, email, telephone, address, serviceType, knowsAbout) and `Service` schema (Islamic Marriage Matchmaking) |
| **Additional** | Favicon (💍 emoji SVG), language `lang="en-GB"`, IE=edge, viewport meta |

Centralized copy available in [src/content/seoContent.ts](file:///e:/Perfectrishta-website-test/app/src/content/seoContent.ts).

---

## 🧩 UI Component Library (shadcn/ui)

40+ pre-installed Radix-based components in `src/components/ui/`:

accordion · alert-dialog · alert · aspect-ratio · avatar · badge · breadcrumb · button-group · button · calendar · card · carousel · chart · checkbox · collapsible · command · context-menu · dialog · drawer · dropdown-menu · empty · field · form · hover-card · input-group · input-otp · input · item · kbd · label · menubar · navigation-menu · pagination · popover · progress · radio-group · resizable · scroll-area · select · separator · sheet · sidebar · skeleton · slider · sonner · spinner · switch · table · tabs · textarea · toggle-group · toggle · tooltip

Usage example:
```tsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
```

---

## 🔧 Customization Guide

### Branding Colors

Defined in two places — keep in sync:

1. **Tailwind tokens**: `tailwind.config.js` (`--primary`, `--accent`, etc.)
2. **Inline inline-styles** in components use raw hex for precision:
   - Maroons: `#800020` (gradient), `#4A0404` (text, CTA on gold)
   - Golds: `#D4AF37` (line, progress), `#F3E5AB` (tagline text, shimmer)
3. **Global palette tokens**: `src/index.css` (`@layer base` → `:root`)

### Typography

- **Display (Headings)**: Cormorant Garamond serif (weights 300/400/500) → utility `.font-display`
- **Body (UI)**: Inter sans-serif (300/400/500/600) → utility `.font-body`
- Loaded in `index.html` via Google Fonts `<link>` tags.

### Images & Assets

Drop replacement assets into `public/images/` with the **same filenames** used in the codebase to avoid updating every reference:
- Logo → `pr-logo.jpg`
- Hero → `hero-bg.jpg`
- Preloader video → `preloader-video.mp4` (keep MP4, H.264 encoded, <10MB for best performance)

### SEO / Contact Info

- Replace contact emails / phone numbers in:
  - `index.html` (JSON-LD + meta title/description)
  - `src/sections/Footer.tsx`
  - `src/content/seoContent.ts`
- Replace canonical URL (`href="https://perfectrishta.co.uk"`) once live domain is active.

---

## 📝 License

© 2025 PerfectRishta. All rights reserved.

Made with 💍 for the British Muslim community.
