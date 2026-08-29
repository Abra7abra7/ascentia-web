# Legal Compliance Audit Report

**Date:** August 26, 2026  
**Audited sites:** marianstancik.dev, ascentia.sk  
**Jurisdiction:** EU (GDPR, AI Act) + Slovak Republic (Z. 18/2018 Z.z.)  
**Auditor:** Legal Compliance Specialist

---

## 1. GDPR Compliance (SK law 18/2018 Z.z. + EU 2016/679)

### 1.1 Privacy Policy

| Site | Status | Detail |
|------|--------|--------|
| marianstancik.dev | ❌ **MISSING** | No Privacy Policy page found. `/privacy` returns 404. |
| ascentia.sk | ❌ **MISSING** | No Privacy Policy page found. `/privacy` returns error. |

**Impact:** Both sites collect personal data (name, email, message) via contact forms. A Privacy Policy per Art. 13 GDPR is **mandatory** and currently absent on both sites. This is the highest-priority fix.

### 1.2 Contact Form Data Processing

Both sites have a contact form collecting: **name, email, message** → POST to `/api/subscribe` (Vercel serverless function).

| Requirement | Status | Notes |
|------------|--------|-------|
| Legal basis identified | ❌ **MISSING** | No privacy notice near the form |
| Retention period stated | ❌ **MISSING** | Not documented anywhere |
| Processor list | ❌ **MISSING** | Vercel + AgentMail not disclosed |
| Consent checkbox | ❌ **MISSING** | No checkbox for data processing consent |

**Legal basis analysis:** For contact forms, the likely basis is **Art. 6(1)(b)** (pre-contractual measures) or **Art. 6(1)(f)** (legitimate interest — responding to enquiries). However, without an explicit notice, this is non-compliant.

### 1.3 Vercel as Processor (US company)

| Requirement | Status | Notes |
|------------|--------|-------|
| Vercel DPF certified | ✅ **COMPLIANT** | Vercel Inc. is certified under EU-US DPF |
| DPA in place | ⚠️ **LIKELY OK** | Vercel provides DPA via its ToS/security page |
| SCCs needed | ✅ **NO — DPF suffices** | DPF certification eliminates need for SCCs |
| Disclosure to users | ❌ **MISSING** | Not mentioned on either site |

### 1.4 Google Fonts — GDPR Compliance

| Site | Status | Notes |
|------|--------|-------|
| marianstancik.dev | ✅ **COMPLIANT** | No Google Fonts CDN loading. Uses system font stack only |
| ascentia.sk | ❌ **NON-COMPLIANT** | Loads Google Fonts from CDN: `fonts.googleapis.com` + `fonts.gstatic.com`. Visitors' IP addresses are sent to Google (US) servers. |

**Legal risk:** The Regional Court of Munich (Case 3 O 17493/20, Jan 2022) ruled that embedding Google Fonts from Google's CDN without consent or legitimate interest violates GDPR (Art. 6(1)). Each page view results in Google receiving the visitor's IP.

**Fix options for ascentia.sk:**
1. Self-host Cormorant Garamond and Inter fonts (recommended)
2. Switch to GDPR-compliant font CDN (e.g., Bunny Fonts)
3. Keep Google Fonts but add consent + update Privacy Policy

### 1.5 AgentMail as Processor

| Requirement | Status | Notes |
|------------|--------|-------|
| AgentMail DPA available | ✅ **COMPLIANT** | AgentMail ToS explicitly mentions DPA (Data Processing Addendum) |
| AgentMail Privacy Policy | ✅ **COMPLIANT** | Available at agentmail.to/legal/privacy-policy |
| Disclosure to users | ❌ **MISSING** | AgentMail not mentioned as processor on either site |

### 1.6 Data Subject Rights

| Requirement | Status | Notes |
|------------|--------|-------|
| Rights mentioned (Art. 15-22) | ❌ **MISSING** | Not mentioned anywhere on either site. Right to access, rectification, erasure, restriction, portability, objection not documented. |
| GDPR contact email | ❌ **MISSING** | No `gdpr@` or `privacy@` contact mentioned |

### 1.7 Cookie Consent

| Requirement | Status | Notes |
|------------|--------|-------|
| Cookies used | ✅ **NO COOKIES** | Both sites confirmed: no analytics, no cookies, no tracking |
| Cookie consent needed | ✅ **NOT NEEDED** | No cookies → no consent required |

---

## 2. Company Data Accuracy (ascentia.sk)

| Requirement | Status | Notes |
|------------|--------|-------|
| IČO 51858959 displayed | ✅ **CORRECT** | Shown in contact section and schema.org markup |
| DIČ 2120700340 displayed | ✅ **CORRECT** | Shown in contact section and schema.org markup |
| IČ DPH SK2120700340 | ✅ **CORRECT** | Shown in contact section and schema.org markup |
| Company name "ASCENTIA s.r.o." | ✅ **CORRECT** | Used consistently throughout site |
| Registered office address | ❌ **MISSING** | No physical address shown anywhere. Schema.org markup only shows `addressCountry: SK` without street/office address. |
| Founding date (2018-10-24) | ✅ **PRESENT** | In schema.org markup |
| IBAN SK60 1100 0000 0029 4827 4072 | ✅ **PRESENT** | In contact section |
| Bank (Tatra banka) | ✅ **PRESENT** | In contact section |

**Note:** Slovak law (Z. 22/2004 Z.z. §6) and typical Impressum requirements mandate displaying the registered office address on commercial websites. The absence of a physical address is a compliance gap.

---

## 3. E-commerce / Pricing Compliance (ascentia.sk)

### 3.1 Pricing Display

| Product | Price Shown | VAT Info | Status |
|---------|-------------|----------|--------|
| Hermes Agent | €1,500 setup + €500/mo | ❌ **No VAT mention** | ❌ **Non-compliant** |
| AI Marketing Agents | €1,150 setup + €265/mo | ❌ **No VAT mention** | ❌ **Non-compliant** |
| Voice Agent MVP | €800 setup + €165/mo | ❌ **No VAT mention** | ❌ **Non-compliant** |
| UAV Monitoring | €180 / 2h letu | ❌ **No VAT mention** | ❌ **Non-compliant** |

**Requirement:** Per Slovak law (Z. 222/2004 Z.z. o DPH) and EU Consumer Rights Directive, all prices must clearly state whether VAT (DPH) is included or excluded. As a Slovak VAT-registered company (IČ DPH: SK2120700340), ASCENTIA must specify whether prices are with or without VAT.

### 3.2 Seller Identification

| Requirement | Status | Notes |
|------------|--------|-------|
| Company name | ✅ **CORRECT** | ASCENTIA s.r.o. |
| IČO | ✅ **CORRECT** | 51858959 |
| DIČ | ✅ **CORRECT** | 2120700340 |
| IČ DPH | ✅ **CORRECT** | SK2120700340 |
| Registered office | ❌ **MISSING** | No physical address |
| Register info (Obchodný register) | ❌ **MISSING** | No mention of which register the company is registered in + file number |

### 3.3 Consumer Rights

| Requirement | Status | Notes |
|------------|--------|-------|
| Withdrawal period info | ❌ **MISSING** | No 14-day withdrawal right mentioned |
| Complaint/complaint procedure | ❌ **MISSING** | No complaint procedure documented |
| ADR info (alternative dispute resolution) | ❌ **MISSING** | No link to SOS/SOPS platform |

**Note:** If ASCENTIA sells primarily B2B (business-to-business), some consumer rights (withdrawal period) may not apply. However, the site does not explicitly state that it only serves business clients, leaving ambiguity.

---

## 4. AI Act Compliance (EU 2024/1689)

### 4.1 AI Services Described

| Site | AI Services | Status |
|------|------------|--------|
| marianstancik.dev | ✅ Describes Hermes Agent, AI agents | Mentions AI systems but as personal projects |
| ascentia.sk | ✅ Describes "AI Agenti & Automatizácia", "AI Marketing Agenti", "Voice Agent MVP" | Actively sells AI services |

### 4.2 Transparency Obligations (Art. 50 AI Act)

| Requirement | Status | Notes |
|------------|--------|-------|
| Disclaimer for AI-generated content | ❌ **MISSING** | No disclaimer on either site |
| AI transparency for chatbots/interactions | ❌ **MISSING** | If AI agents interact with humans, Art. 50(1) requires disclosure |
| Labeling of AI-generated output | ❌ **MISSING** | "Built with Hermes Agent" footer is not a sufficient Art. 50 disclaimer |

**Art. 50(1) AI Act:** "Providers of AI systems intended to interact with natural persons shall ensure that natural persons are informed that they are interacting with an AI system." This applies to ascentia.sk's Hermes Agent and AI Marketing Agents services.

**Art. 50(2) AI Act:** AI-generated text must be marked as artificially generated or manipulated.

### 4.3 Current Compliance Status

| Site | Art. 50 Compliance | Risk Level |
|------|-------------------|------------|
| marianstancik.dev | ❌ **Non-compliant** | Medium (blog posts may be AI-generated without disclosure) |
| ascentia.sk | ❌ **Non-compliant** | High (sells AI services without required transparency disclaimers) |

---

## 5. Required Legal Documents — Summary

| Document | marianstancik.dev | ascentia.sk | Priority |
|----------|-------------------|-------------|----------|
| **Privacy Policy** (GDPR Art. 13) | ❌ Missing | ❌ Missing | 🔴 **URGENT** — Both |
| **Terms of Service** | ⚠️ Not needed (personal site, no sales) | ❌ Missing — sells services | 🔴 **HIGH** — ascentia.sk |
| **Cookie Policy** | ✅ Not needed (no cookies) | ✅ Not needed (no cookies) | ✅ OK |
| **Imprint/Impressum** (Obchodný register) | ⚠️ Not required for personal site | ❌ Missing — company site | 🟡 **MEDIUM** — ascentia.sk |
| **AI Act Transparency Disclaimer** | ❌ Missing | ❌ Missing | 🟡 **MEDIUM** — Both |

---

## 6. Data Flow Summary

```
User fills contact form (name, email, message)
    ↓ POST /api/subscribe
Vercel Serverless (USA — DPF certified)
    ↓ email notification
AgentMail (USA — has DPA)
    ↓ 
Marian Stancik (Controller — reads email)
```

**Processors identified:**
1. **Vercel Inc.** — US company, DPF certified ✅, DPA available ✅
2. **AgentMail, Inc.** — US company, has DPA ✅
3. **Google LLC** (ascentia.sk only) — US company, receives IP via Google Fonts ❌

---

## 7. Priority Actions & Exact Fix Text

### 🔴 PRIORITY 1 — Add Privacy Policy to Both Sites

Create a privacy page (e.g., `/privacy-policy.html`) on both sites with the following minimum content:

```html
<!-- privacy-policy.html — to be added as a new page on both sites -->

<!DOCTYPE html>
<html lang="sk">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zásady ochrany osobných údajov — [Site Name]</title>
</head>
<body>

<h1>Zásady ochrany osobných údajov</h1>
<p>Posledná aktualizácia: 26. augusta 2026</p>

<h2>1. Prevádzkovateľ</h2>
<p>
  <!-- marianstancik.dev version -->
  <strong>Marian Stancik</strong><br>
  Email: marianstancik@agentmail.to
</p>
<p>
  <!-- ascentia.sk version -->
  <strong>ASCENTIA s.r.o.</strong><br>
  IČO: 51858959, DIČ: 2120700340, IČ DPH: SK2120700340<br>
  Email: marianstancik@agentmail.to
</p>

<h2>2. Aké osobné údaje spracúvame</h2>
<p>Prostredníctvom kontaktného formulára zbierame: meno, e-mailovú adresu a obsah správy. Údaje nám poskytujete dobrovoľne.</p>

<h2>3. Účel a právny základ</h2>
<p>Vaše údaje spracúvame za účelom odpovede na Vašu správu. Právnym základom je plnenie opatrení prijatých pred uzavretím zmluvy (Čl. 6 ods. 1 písm. b) GDPR) a/alebo oprávnený záujem na komunikácii (Čl. 6 ods. 1 písm. f) GDPR).</p>

<h2>4. Doba uchovávania</h2>
<p>Vaše údaje uchovávame po dobu nevyhnutnú na vybavenie Vašej požiadavky, maximálne však 12 mesiacov od poslednej komunikácie.</p>

<h2>5. Príjemcovia (sprostredkovatelia)</h2>
<p>Vaše údaje môžu byť spracúvané prostredníctvom nasledujúcich sprostredkovateľov:</p>
<ul>
  <li><strong>Vercel Inc.</strong> — hosting webstránky (USA, certifikovaný v EU-US DPF)</li>
  <li><strong>AgentMail Inc.</strong> — e-mailová komunikácia (USA, uzavretá DPA)</li>
  <!-- ascentia.sk only -->
  <li><strong>Google LLC</strong> — fonty (USA, pripojenie na Google Fonts) — <em>iba ascentia.sk</em></li>
</ul>

<h2>6. Prenos do tretích krajín</h2>
<p>Vercel Inc. a AgentMail Inc. sú certifikované v rámci EU-US Data Privacy Framework, čím je zabezpečená primeraná úroveň ochrany podľa Čl. 45 GDPR.</p>
<!-- ascentia.sk only: -->
<p>Google LLC je certifikovaný v rámci EU-US Data Privacy Framework.</p>

<h2>7. Vaše práva</h2>
<p>Máte právo:</p>
<ul>
  <li>na prístup k Vašim osobným údajom (Čl. 15 GDPR)</li>
  <li>na opravu nesprávnych údajov (Čl. 16 GDPR)</li>
  <li>na vymazanie údajov (Čl. 17 GDPR, „právo byť zabudnutý”)</li>
  <li>na obmedzenie spracúvania (Čl. 18 GDPR)</li>
  <li>na prenosnosť údajov (Čl. 20 GDPR)</li>
  <li>namietať proti spracúvaniu (Čl. 21 GDPR)</li>
</ul>
<p>Svoje práva môžete uplatniť zaslaním e-mailu na: marianstancik@agentmail.to</p>

<h2>8. Právo podať sťažnosť</h2>
<p>Ak sa domnievate, že spracúvanie porušuje GDPR, máte právo podať sťažnosť na:<br>
<strong>Úrad na ochranu osobných údajov SR</strong><br>
Hraničná 12, 820 07 Bratislava<br>
https://dataprotection.gov.sk</p>

<h2>9. Kontakt</h2>
<p>Vo všetkých záležitostiach ochrany údajov nás kontaktujte na: marianstancik@agentmail.to</p>

</body>
</html>
```

### 🔴 PRIORITY 2 — Add Privacy Notice Near Contact Form (Both Sites)

Add this text immediately above or below the "Submit" button on the contact form:

```html
<p style="font-size: 0.75rem; color: #666; margin-top: 0.5rem;">
  Odoslaním formuláru súhlasíte so spracovaním Vašich osobných údajov 
  za účelom odpovede na Vašu správu. Viac informácií v 
  <a href="/privacy-policy.html">Zásadách ochrany osobných údajov</a>.
</p>
```

### 🔴 PRIORITY 3 — Self-Host Google Fonts on ascentia.sk

Replace the current Google Fonts CDN links in `<head>` with self-hosted versions:

**Remove these lines from index.html:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

**Replace with:** Download Cormorant Garamond + Inter TTF files, convert to WOFF2, and serve them locally with `@font-face` declarations in CSS.

### 🔴 PRIORITY 4 — Add VAT Info to Prices on ascentia.sk

Add VAT disclaimer near pricing:

```html
<p class="vat-disclaimer" style="font-size: 0.75rem; color: #666; margin-top: 2rem; text-align: center;">
  Všetky ceny sú uvedené bez DPH (DPH bude pridaná podľa platnej sadzby).
  ASCENTIA s.r.o. je platiteľ DPH (IČ DPH: SK2120700340).
</p>
```

### 🔴 PRIORITY 5 — Add Registered Office to ascentia.sk

In the contact section, add:

```html
<div class="detail"><span>Sídlo:</span> [Registered office address — TO BE ADDED]</div>
<div class="detail"><span>Zapísaná:</span> Obchodný register Okresného súdu [mesto], oddiel: Sro, vložka č. [number]</div>
```

### 🟡 PRIORITY 6 — Add AI Act Transparency Disclaimer (Both Sites)

For ascentia.sk (footer):

```html
<p class="ai-disclaimer" style="font-size: 0.75rem; color: rgba(255,255,255,0.5);">
  ⚖️ V súlade s Nariadením (EÚ) 2024/1689 (AI Act): Niektoré služby uvedené 
  na tejto stránke zahŕňajú systémy umelej inteligencie určené na interakciu 
  s fyzickými osobami. Obsah označený ako „generovaný AI” je vytvorený 
  systémami umelej inteligencie.
</p>
```

For marianstancik.dev (footer):

```html
<p class="ai-disclaimer" style="font-size: 0.7rem; color: #8888A0;">
  ⚖️ In accordance with EU AI Act (Regulation 2024/1689): Content on this 
  site may be AI-assisted or AI-generated. Blog posts are authored/overseen 
  by Marian Stancik.
</p>
```

### 🟡 PRIORITY 7 — Add Terms of Service for ascentia.sk

Create `/terms.html` with standard legal sections: scope of services, pricing, payment terms, delivery, limitation of liability, governing law (Slovak), dispute resolution.

### 🟡 PRIORITY 8 — Add GDPR Contact Email

Create a dedicated privacy inbox: `gdpr@ascentia.sk` (for ascentia.sk) and ensure it's monitored.

---

## 8. Executive Summary

| Category | marianstancik.dev | ascentia.sk |
|----------|-------------------|-------------|
| **Overall GDPR Status** | ❌ **Non-compliant** | ❌ **Non-compliant** |
| **Privacy Policy** | ❌ Missing | ❌ Missing |
| **Google Fonts** | ✅ Self-hosted | ❌ CDN loading (violates Munich ruling) |
| **Cookies** | ✅ None | ✅ None |
| **Company Info** | N/A (personal) | ✅ IČO/DIČ correct, ❌ address missing |
| **Pricing Compliance** | N/A (no sales) | ❌ No VAT info on prices |
| **Consumer Rights** | N/A (not e-commerce) | ❌ Withdrawal period/complaints missing |
| **AI Act Transparency** | ❌ Missing | ❌ Missing |
| **Processor Disclosure** | ❌ Missing | ❌ Missing |
| **Data Subject Rights** | ❌ Missing | ❌ Missing |

### Quick-Fix Order (Prioritized)

1. 🔴 **Add Privacy Policy** to both sites (template above)
2. 🔴 **Add privacy notice** near contact forms
3. 🔴 **Self-host Google Fonts** on ascentia.sk (or add to Privacy Policy)
4. 🔴 **Add VAT disclaimer** to pricing on ascentia.sk
5. 🔴 **Add registered office** to ascentia.sk contact section
6. 🟡 **Add AI Act disclaimer** to both sites
7. 🟡 **Create Terms of Service** for ascentia.sk
8. 🟡 **Create GDPR/privacy email** and document retention procedures

---

*This audit is based on publicly available information and source code review of both websites. It does not constitute legal advice. We recommend consultation with a qualified legal professional for full compliance validation.*