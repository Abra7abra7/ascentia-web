# ASCENTIA Corporate Website

## Project Overview

Corporate website for **ASCENTIA s.r.o.** (IČO: 51858959) — an autonomous AI company founded by Marian Stančík. The site serves as the company's primary public-facing web presence, showcasing its services, products, and positioning at the intersection of AI engineering and EU regulation.

## Tech Stack

- **Static HTML/CSS/JS** — no build tools, no framework
- **Typography:** Cormorant Garamond (serif, headings/body) + Inter (sans-serif, UI elements) via Google Fonts
- **No dependencies** — pure vanilla implementation

## Brand Identity

| Element | Value |
|---------|-------|
| **Primárna farba** | Polar `#002147` — hĺbka, veda, štátotvornosť |
| **Akcentová farba** | Kyberbronz `#CD7F32` — prémiový hardvér, meď |
| **Pozadie** | Aerodynamická biela `#F8FAFC` / čistá biela `#FFFFFF` |
| **Text** | Obsidiánová čerň `#111827` |
| **Logo font** | Times New Roman / Georgia (serif) |
| **Tón** | Sebavedomý, profesionálny, bez marketingovej vaty |

## Site Sections

1. **Hero** — Big bronze "A" SCENTIA logo, tagline, CTA
2. **Services** — AI Agenti, Marketingové Boty, Drone Operácie, Právna Compliance
3. **Products** — Hermes Agent, AI Marketing Agents
4. **About** — Misia, Vízia, Positioning, Hodnoty, Founder
5. **Contact** — Formulár, social links, IČO/DIČ

## Content Sources

- `/opt/hermes-vault/01-ASCENTIA/00-INDEX.md` — company overview and product pillars
- `/opt/hermes-vault/01-ASCENTIA/02-IDENTITY/01-BRAND-FOUNDATION.md` — brand colours, positioning, mission, vision
- `/opt/hermes-vault/01-ASCENTIA/02-IDENTITY/04-MESSAGING/01-storybrand-sb7.md` — StoryBrand messaging framework, CTA
- `/opt/hermes-vault/01-ASCENTIA/04-PRODUCTS/ai-marketing-agents/ai-marketing-agents.md` — AI Marketing Agents product detail
- `/opt/hermes-vault/01-ASCENTIA/02-IDENTITY/03-ASSETS/LOGO/logo-ascentia-horizontal.svg` — logo SVG

## Social Links

- X/Twitter: https://x.com
- LinkedIn: https://linkedin.com
- Facebook: https://facebook.com
- GitHub: https://github.com/Abra7abra7

## Related Repositories

- `/root/ascentia-web/` — this site
- `/root/ai-marketing-agents/` — AI Marketing Agents product
- `/opt/hermes-vault/` — full company vault

## Design Notes

- **Dior-style aesthetic:** Minimalist, monochrome + single bronze accent, generous whitespace, refined serif typography
- **Responsive:** Mobile-first breakpoints at 480px, 768px, 1024px
- **Animations:** Subtle fade-in on scroll via IntersectionObserver
- **Navigation:** Fixed top bar with blur backdrop, mobile hamburger menu
