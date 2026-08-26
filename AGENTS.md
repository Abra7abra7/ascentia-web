# ASCENTIA Corporate Website

**Owner:** Marian Stancik — CEO @ ASCENTIA s.r.o.  
**Domain:** ascentia.sk (Vercel)  
**Repo:** https://github.com/Abra7abra7/ascentia-web  
**IČO:** 51858959  
**DIČ:** 2120700340  
**IČ DPH:** SK2120700340  
**Sídlo:** Klincová 37/B, 821 08 Bratislava - Ružinov  
**Zápis:** Obchodný register Mestského súdu Bratislava III, oddiel Sro, vložka č. 130384/B  
**Deň zápisu:** 02.08.2018  
**Brand:** Polar #002147 + Kyberbronz #CD7F32  
**Tón:** Professional, authoritative, B2B — no marketing fluff  

---

## 1. Executive Overview

Corporate website for **ASCENTIA s.r.o.** — an autonomous AI company at the intersection of AI engineering, drone operations, marketing automation, and EU regulatory compliance.

Built on the same zero-build architecture as marianstancik.dev:
- **Vanilla HTML/CSS/JS** — no frameworks, no build tools
- **Vercel** deployment (Git push → main)
- **SEO-first** — schema.org, GEO/llms.txt, sitemap, GA4
- **Responsive** — mobile-first, iPhone compatible
- **Security-first** — CSP headers, no credentials in repo

---

## 2. Domain Model

### Core Concepts

| Term | Definition |
|------|-----------|
| **ASCENTIA** | Autonomous AI company providing engineering, compliance, and operational services |
| **Polar** | Brand primary colour `#002147` — depth, science, authority |
| **Kyberbronz** | Brand accent `#CD7F32` — premium hardware, copper, craftsmanship |
| **AI Agent** | Autonomous software entity (Hermes, marketing bots, voice agents) |
| **Compliance-by-Design** | Legal architecture built into systems from day one |
| **UAV Operations** | Drone services: monitoring, inspection, IBV, mapping |
| **Voice Agent MVP** | €800 setup + €165/mo — entry-level AI voice solution |
| **Premium Agent** | €1150 + €265/mo — full AI marketing agent suite |

### Brand Identity

| Element | Value |
|---------|-------|
| **Font (headings/body)** | Cormorant Garamond (serif) — elegance, authority |
| **Font (UI/labels)** | Inter (sans-serif) — clarity, modern |
| **Primary** | Polar `#002147` |
| **Accent** | Kyberbronz `#CD7F32` (+ light `#E8B86D`, dark `#B87333`) |
| **Background** | Aerodynamic white `#F8FAFC` / clean white `#FFFFFF` |
| **Text** | Obsidian black `#111827` / `#374151` |
| **Logo** | Bronze "A" SCENTIA logotype, horizontal + vertical variants |

---

## 3. Wayfinder Map — Site Plan

### Destination
A fully functional, responsive corporate website for ASCENTIA s.r.o. deployed on Vercel at ascentia.sk, following the same architecture as marianstancik.dev. Single-page layout with anchor navigation, or multi-page depending on content depth.

### Notes
- Use skills from `mattpocock/skills` for planning (wayfinder, domain-modeling, writing-plans)
- All media local in repo (no R2 signed URLs)
- SEO: schema.org Organization + LocalBusiness + Service, GEO/llms.txt, sitemap, robots.txt
- CSP headers via Vercel config
- i18n: SK primary, EN fallback (SK law firm, SK clients)
- Playwright visual testing before deploy

### Decisions so far

| Decision | Resolution |
|----------|-----------|
| Architecture | Zero-build vanilla HTML/CSS/JS (same as marianstancik.dev) |
| Deployment | Vercel, Git push → main, `cleanUrls: true` |
| Design | Dior-style: minimalist, monochrome + bronze accent, serif typography |
| Pages | Single-page w/ sections vs multi-page TBD (depends on content depth) |
| Media | Local in `/images/`, WebP + JPEG fallback via `<picture>` |
| SEO | Schema.org JSON-LD, llms.txt, sitemap.xml, robots.txt |
| Analytics | GA4 via Google tag (server-side, not cookie-based) |

---

## 4. Page Structure & Content

### 4.1 Hero Section
- Full-screen hero: bronze "A" SCENTIA logotype
- Tagline: "Autonomous AI. Engineered in Europe. Compliant by Design."
- Subtle bronze gradient background
- CTA: "Get in Touch" → scroll to contact
- Stats bar: 3 domains, 19+ cron jobs, 24/7 runtime, EU infra

### 4.2 Services Section
**4 service cards** in a 2×2 grid:
1. **AI Agents & Automation** — Hermes Agent, custom MCP servers, voice agents
2. **AI Marketing Agents** — autonomous content pipelines, social media automation
3. **UAV Operations & Edge AI** — drone monitoring, inspection, mapping, A1/A3 certified
4. **AI Compliance & Legal-by-Design** — EU AI Act, GDPR, NIS2, technical documentation

### 4.3 Products Section
- **Hermes Agent** — 24/7 autonomous AI entity
- **AI Marketing Agents** — content automation suite
- **Voice Agent MVP** — €800 setup + €165/mo
- **Premium Agent** — €1150 + €265/mo

### 4.4 About Section
- Mission: "Building autonomous AI systems that are secure, compliant, and effective."
- Founder bio: Marian Stancik — AI Engineer, UAV pilot, Law scholar (PF UK)
- Values: Security-first, Compliance-by-Design, European Infrastructure
- Stats: 3 domains, 19+ active cron jobs, 24/7 runtime, €2.6M insured

### 4.5 Contact Section
- Email: marian_stancik@agentmail.to
- LinkedIn, GitHub, X/Twitter, YouTube
- IČO: 51858959, DIČ: 2120700340
- Tatra banka: SK60 1100 0000 0029 4827 4072
- GDPR-compliant contact form (Vercel serverless → AgentMail)

### 4.6 Footer
- Logo, tagline, social links
- Navigate: Services, Products, About, Contact
- © 2026 ASCENTIA s.r.o. — "Build better. Stay legal."
- Built with ✦ by Hermes Agent

---

## 5. Technical Architecture

### 5.1 File Structure
```
ascentia-web/
├── index.html              # Single page (or multi-page)
├── css/
│   └── main.css           # All styles, no frameworks
├── js/
│   ├── main.js            # Interactions, scroll, hamburger, i18n
│   └── i18n.js            # Language switcher (SK/EN)
├── images/
│   ├── logo-horizontal.svg
│   ├── logo-vertical.svg
│   ├── hero-bg.webp
│   └── ... (brand assets)
├── AGENTS.md              # This file
├── vercel.json            # Vercel config (cleanUrls, headers, CSP)
├── robots.txt             # AI crawler access
├── sitemap.xml            # SEO sitemap
├── llms.txt               # GEO knowledge graph
├── llms-full.txt          # Full GEO knowledge graph
└── .gitignore
```

### 5.2 Vercel Config (vercel.json)
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }
      ]
    },
    {
      "source": "/(.*)\\.(webp|jpg|jpeg|png|svg|ico|woff2|woff)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 5.3 SEO & GEO
- **Schema.org:** Organization + LocalBusiness + Service + ContactPoint
- **llms.txt:** H1 + blockquote + markdown links per llmstxt.org v2
- **Robots.txt:** All AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot, etc.)
- **Sitemap.xml:** Auto-generated on build
- **Meta tags:** OG, Twitter Card, viewport, description, canonical

### 5.4 Design System (CSS Tokens)
```css
:root {
  --polar: #002147;
  --kyberbronz: #CD7F32;
  --kyberbronz-light: #E8B86D;
  --kyberbronz-dark: #B87333;
  --biela: #F8FAFC;
  --obsidian: #111827;
  --obsidian-light: #374151;
  --pure-white: #FFFFFF;
  --border-light: rgba(205, 127, 50, 0.15);
  --bg-card: #FFFFFF;
  --bg-card-hover: #F8FAFC;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --max-width: 1200px;
}
```

---

## 6. Development Workflow

### 6.1 Commit Convention
Emoji prefix + SK/EN description:
- `🎨 Hero: bronze grad background + stats bar`
- `📱 Mobile: hamburger menu, responsive grid`
- `🔍 SEO: schema.org Organization + LocalBusiness`
- `🔒 Security: CSP headers via vercel.json`

### 6.2 Pre-deploy Checklist
- [ ] All pages return 200 OK
- [ ] No mixed-content errors
- [ ] Mobile responsive (iPhone test)
- [ ] WebP + JPEG fallback via `<picture>`
- [ ] Playwright visual test (L0-L7)
- [ ] CSP headers present
- [ ] Schema.org JSON-LD valid
- [ ] Sitemap + robots.txt present
- [ ] llms.txt present and valid

### 6.3 Branch Strategy
- `main` — production (Vercel auto-deploy)
- Direct commits to main (single-developer, trunk-based)

---

## 7. Implementation Plan (Tickets)

### Phase 1: Foundation
- [ ] **AGENTS.md** — this file ✅
- [ ] `vercel.json` — CSP, cleanUrls, caching headers
- [ ] `robots.txt` — AI crawler access
- [ ] `css/main.css` — brand tokens, reset, typography, layout
- [ ] `js/main.js` — hamburger menu, smooth scroll, IntersectionObserver
- [ ] `js/i18n.js` — SK/EN language switcher

### Phase 2: Content & Sections
- [ ] Hero: bronze logotype, tagline, stats bar, CTA
- [ ] Services: 4 service cards (2×2 grid)
- [ ] Products: pricing cards (voice agent MVP + premium)
- [ ] About: founder bio, values, stats
- [ ] Contact: form + social links + company details
- [ ] Footer: full footer with nav, social, legal

### Phase 3: SEO & GEO
- [ ] Schema.org JSON-LD (Organization + Service + ContactPoint)
- [ ] `llms.txt` + `llms-full.txt`
- [ ] `sitemap.xml`
- [ ] OG + Twitter Card meta tags

### Phase 4: Polish & Deploy
- [ ] Responsive: mobile (480px), tablet (768px), desktop (1024px)
- [ ] Animations: fade-in on scroll, card hover effects
- [ ] Playwright visual test
- [ ] Git push → Vercel
- [ ] DNS: ascentia.sk → Vercel

---

## 8. Related Resources

- `/opt/hermes-vault/01-ASCENTIA/` — full company vault
- `/opt/hermes-vault/01-ASCENTIA/02-IDENTITY/01-BRAND-FOUNDATION.md` — brand colours, positioning
- `/opt/hermes-vault/01-ASCENTIA/02-IDENTITY/04-MESSAGING/01-storybrand-sb7.md` — StoryBrand framework
- `/opt/hermes-vault/01-ASCENTIA/04-PRODUCTS/` — product details
- `/root/marian-stancik-web/` — reference implementation (same architecture)
- Matt Pocock skills: `domain-modeling`, `wayfinder`, `writing-plans`, `codebase-design`

---

*Planned with Matt Pocock's wayfinder methodology. Build with zero-build architecture. Deploy on Vercel.*