/* =====================================================
   ASCENTIA s. r. o. — Main JavaScript
   ===================================================== */

const LANG_KEY = 'ascentia-lang';

const I18N = {
  sk: {
    skipLink: 'Preskočiť na obsah',
    navAria: 'Hlavná navigácia',
    logoAria: 'ASCENTIA domov',
    menuAria: 'Menu',
    navServices: 'Služby',
    navProducts: 'Produkty',
    navAbout: 'O nás',
    navContact: 'Kontakt',
    navContactCta: '✦ Kontakt',
    navPrivacy: 'Ochrana súkromia',
    navTerms: 'Podmienky',
    navDisclaimer: 'Zrieknutie zodpovednosti',
    heroTagline: 'Autonómna AI. Vyrobené v Európe. Kompliantné od návrhu.',
    heroCta: 'Kontaktujte nás',
    heroCta2: 'Naše služby',
    stat1: 'Aktívnych agentov',
    stat2: 'Cron jobov',
    stat3: 'Runtime',
    stat4: 'Poistenie',
    lblServices: '✦ Služby',
    servicesHeading: 'Čo robíme',
    servicesIntro: 'Od autonómnych agentov až po UAV operácie — všetko kompliantné s európskou reguláciou.',
    s1Title: 'AI Agenti & Automatizácia',
    s1Desc: 'Vývoj autonómnych AI agentov na mieru. Hermes Agent, MCP servery, voice agenti, automatizácia workflowov.',
    s1f1: 'Hermes Agent — 24/7 autonómna entita',
    s1f2: 'Custom MCP servery a tooling',
    s1f3: 'Voice agenti od €800/mesiac',
    s2Title: 'AI Marketing Agenti',
    s2Desc: 'Automatizované content pipeline. Sociálne siete, blog, repurposing a analytika v jednom ekosystéme.',
    s2f1: 'Automatický content kalendár',
    s2f2: 'Multi-platform posting (X, LI, blog)',
    s2f3: 'AI repurposing a analýza',
    s3Title: 'UAV Operácie & Edge AI',
    s3Desc: 'Profesionálne dronové služby s A1/A3 certifikáciou. Monitoring, inšpekcia, IBV, fotogrametria.',
    s3f1: 'Letecký monitoring a inšpekcia',
    s3f2: 'Edge AI na palube (RPi5 + Vision)',
    s3f3: 'Poistenie €2.6M, EASA certifikované',
    s4Title: 'AI Compliance & Legal-by-Design',
    s4Desc: 'Právna architektúra vstavaná do systémov. EU AI Act, GDPR, NIS2, technická dokumentácia.',
    s4f1: 'EU AI Act risk tiering a compliance',
    s4f2: 'GDPR a NIS2 audit',
    s4f3: 'Technical files a dokumentácia',
    lblProducts: '✦ Produkty',
    productsHeading: 'Hotové riešenia',
    productsIntro: 'Odskúšané produkty pripravené na nasadenie. Transparentné ceny, žiadne skryté poplatky.',
    vatNoteHome: 'Ceny sú uvedené tak, ako sú zobrazené. Spoločnosť nie je platiteľom DPH.',
    p1Title: 'Hermes Agent',
    p1Desc: '24/7 autonómna AI entita na vašej infraštruktúre. Vlastné profily, cron joby, MCP tooling.',
    p1f1: 'Vlastný profil na mieru',
    p1f2: 'Neobmedzené cron joby',
    p1f3: 'Vlastné MCP servery',
    p1f4: 'Premium LLM routing',
    p2Badge: 'Najobľúbenejšie',
    p2Title: 'AI Marketing Agents',
    p2Desc: 'Kompletný content engine. Automatické blogy, sociálne siete, repurposing v jednom balíku.',
    p2f1: 'Multi-platform posting (X, LI, blog)',
    p2f2: 'AI repurposing a analytika',
    p2f3: 'Content kalendár a stratégia',
    p2f4: 'Daily reporty na email',
    p3Title: 'Voice Agent MVP',
    p3Desc: 'AI voice agent pre vašu firmu. Príjem hovorov, kvalifikácia leadov, automatické odpovede.',
    p3f1: 'Príjem a routing hovorov',
    p3f2: 'Lead kvalifikácia',
    p3f3: 'CRM integrácia',
    p3f4: 'Implementácia do 10 dní',
    p4Title: 'UAV Monitoring',
    p4Desc: 'Profesionálne dronové služby. Monitoring, inšpekcia, fotogrametria, IBV.',
    p4f1: 'Letecký monitoring a inšpekcia',
    p4f2: 'Fotogrametria a 3D mapovanie',
    p4f3: 'IBV a tepelné skenovanie',
    p4f4: 'Paušály od €500/mesiac',
    lblAbout: '✦ O nás',
    aboutHeading: 'Autonómna AI. Kompliantná od návrhu.',
    aboutP1: 'ASCENTIA s. r. o. je slovenská AI firma špecializujúca sa na vývoj autonómnych agentov, UAV operácií a AI compliance. Naše systémy sú navrhnuté tak, aby spĺňali európske regulácie — od EU AI Act až po GDPR.',
    aboutP2: 'Každý produkt je postavený na rokoch praktických skúseností v AI inžinierstve, práve a letectve. Veríme, že AI musí byť bezpečná, transparentná a efektívna — a to je presne to, čo dodávame.',
    aboutP3: 'Agentová infraštruktúra beží na európskych serveroch (Hetzner Cloud, Nürnberg/Helsinki). Web je na Vercel (USA, EU-US DPF).',
    v1Title: '🔒 Security-First',
    v1Desc: 'Bezpečnosť nie je doplnok — je to základná vrstva každého systému.',
    v2Title: '⚖️ Compliance-by-Design',
    v2Desc: 'Právna architektúra vstavaná do systému od prvého commitu.',
    v3Title: '🌍 Európska infraštruktúra',
    v3Desc: 'Agentová infraštruktúra v EÚ. Žiadne riziko extrateritoriálneho prístupu k dátam agentov.',
    v4Title: '🛠️ Build, not buzz',
    v4Desc: 'Žiadny AI humbuk. Kód, testy, deploy — overené v praxi.',
    founderName: 'Márian Stančík',
    founderTitle: 'AI Engineer, CEO @ ASCENTIA',
    f1: 'AI inžinier — Python, TypeScript, Go',
    f2: 'UAV pilot A1/A3 — 1500g custom build',
    f3: 'Študent práva',
    f4: 'Hermes Agent — 24/7 autonómny runtime',
    lblContact: '✦ Kontakt',
    contactHeading: 'Spojte sa s nami',
    contactIntro: 'Máte otázku? Potrebujete konzultáciu? Pošlite správu a ozveme sa do 24 hodín.',
    contactP1: 'Každý projekt začína konzultáciou — zadarmo, bez záväzkov.',
    labelSeat: 'Sídlo:',
    labelRegister: 'Zapísaná:',
    labelDirector: 'Konateľ:',
    labelBank: 'Banka:',
    imprintSeat: 'Sídlo:',
    formName: 'Meno',
    formMessage: 'Správa',
    formSubmit: 'Odoslať správu',
    formConsent: 'Odoslaním formuláru súhlasíte so spracovaním Vašich osobných údajov za účelom odpovede na Vašu správu. Viac informácií v',
    formConsentLink: 'Zásadách ochrany osobných údajov',
    phName: 'Vaše meno',
    phEmail: 'vas@email.sk',
    phMessage: 'Čo potrebujete?',
    phMessageLong: 'Čo potrebujete? Popíšte váš projekt alebo otázku.',
    sending: 'Odosielam...',
    formOk: 'Ďakujeme! Správa bola odoslaná. Ozveme sa do 24 hodín.',
    formErr: 'Nastala chyba. Skúste neskôr alebo napíšte priamo na marianstancik@agentmail.to',
    faqHeading: 'Často kladené otázky',
    faq1q: 'Čo robí ASCENTIA?',
    faq1a: 'ASCENTIA poskytuje AI agentov, marketingovú automatizáciu, UAV operácie a AI compliance pre európske firmy. Všetky systémy sú navrhnuté tak, aby spĺňali EU AI Act, GDPR a NIS2 — od prvého commitu.',
    faq2q: 'Kde sídli ASCENTIA?',
    faq2a: 'Klincová 37/B, 821 08 Bratislava-Ružinov, Slovensko. Zapísaná v Obchodnom registri Mestského súdu Bratislava III, oddiel Sro, vložka č. 130384/B. IČO: 51858959, DIČ: 2120816071. Konateľ Márian Stančík koná samostatne.',
    faq3q: 'Je ASCENTIA GDPR kompliantná?',
    faq3a: 'Áno. Compliance-by-Design je základný princíp všetkých našich systémov. Spracúvanie osobných údajov je v súlade s Nariadením (EÚ) 2016/679 (GDPR) a Zákonom č. 18/2018 Z.z. Viac v <a href="/privacy" style="color: var(--kyberbronz); text-decoration: underline;">Zásadách ochrany osobných údajov</a>.',
    faq4q: 'Akú infraštruktúru používate?',
    faq4a: 'Agentová infraštruktúra: Hetzner Cloud (Nürnberg/Helsinki). Web: Vercel Edge (USA, EU-US DPF) — spracúva aj kontaktný formulár. Žiadny Google Analytics.',
    faq5q: 'Ako môžem začať spolupracovať?',
    faq5a: 'Stačí vyplniť <a href="/contact" style="color: var(--kyberbronz); text-decoration: underline;">kontaktný formulár</a>. Prvá konzultácia je zdarma a bez záväzkov. Ozveme sa do 24 hodín.',
    fCol1Title: 'Navigácia',
    fCol2Title: 'Produkty',
    fCol3Title: 'Kontakt',
    footerTagline: 'Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance. Built in Europe. Compliant by Design.',
    fMotto: 'Build better. Stay legal.',
    pageTitle: 'ASCENTIA — Autonómna AI Firma | AI Agenti, Drony, Compliance',
    metaDesc: 'ASCENTIA s. r. o. — autonómna AI firma. AI agenti, UAV operácie, marketingová automatizácia a súlad s EU AI Act.',
  },
  en: {
    skipLink: 'Skip to content',
    navAria: 'Main navigation',
    logoAria: 'ASCENTIA home',
    menuAria: 'Menu',
    navServices: 'Services',
    navProducts: 'Products',
    navAbout: 'About',
    navContact: 'Contact',
    navContactCta: '✦ Contact',
    navPrivacy: 'Privacy',
    navTerms: 'Terms',
    navDisclaimer: 'Disclaimer',
    heroTagline: 'Autonomous AI. Engineered in Europe. Compliant by Design.',
    heroCta: 'Contact Us',
    heroCta2: 'Our Services',
    stat1: 'Active agents',
    stat2: 'Cron jobs',
    stat3: 'Runtime',
    stat4: 'Insurance',
    lblServices: '✦ Services',
    servicesHeading: 'What We Do',
    servicesIntro: 'From autonomous agents to UAV operations — all compliant with EU regulation.',
    s1Title: 'AI Agents & Automation',
    s1Desc: 'Custom autonomous AI agent development. Hermes Agent, MCP servers, voice agents, workflow automation.',
    s1f1: 'Hermes Agent — 24/7 autonomous entity',
    s1f2: 'Custom MCP servers and tooling',
    s1f3: 'Voice agents from €800/month',
    s2Title: 'AI Marketing Agents',
    s2Desc: 'Automated content pipeline. Social, blog, repurposing and analytics in one ecosystem.',
    s2f1: 'Automatic content calendar',
    s2f2: 'Multi-platform posting (X, LI, blog)',
    s2f3: 'AI repurposing and analysis',
    s3Title: 'UAV Operations & Edge AI',
    s3Desc: 'Professional drone services with A1/A3 certification. Monitoring, inspection, IBV, photogrammetry.',
    s3f1: 'Aerial monitoring and inspection',
    s3f2: 'Onboard edge AI (RPi5 + Vision)',
    s3f3: '€2.6M insurance, EASA certified',
    s4Title: 'AI Compliance & Legal-by-Design',
    s4Desc: 'Legal architecture built into systems. EU AI Act, GDPR, NIS2, technical documentation.',
    s4f1: 'EU AI Act risk tiering and compliance',
    s4f2: 'GDPR and NIS2 audit',
    s4f3: 'Technical files and documentation',
    lblProducts: '✦ Products',
    productsHeading: 'Ready Solutions',
    productsIntro: 'Proven products ready to deploy. Transparent pricing, no hidden fees.',
    vatNoteHome: 'Prices as listed. The company is not a VAT payer.',
    p1Title: 'Hermes Agent',
    p1Desc: '24/7 autonomous AI entity on your infrastructure. Custom profiles, cron jobs, MCP tooling.',
    p1f1: 'Custom profile',
    p1f2: 'Unlimited cron jobs',
    p1f3: 'Custom MCP servers',
    p1f4: 'Premium LLM routing',
    p2Badge: 'Most popular',
    p2Title: 'AI Marketing Agents',
    p2Desc: 'Complete content engine. Automated blogs, social, repurposing in one package.',
    p2f1: 'Multi-platform posting (X, LI, blog)',
    p2f2: 'AI repurposing and analytics',
    p2f3: 'Content calendar and strategy',
    p2f4: 'Daily email reports',
    p3Title: 'Voice Agent MVP',
    p3Desc: 'AI voice agent for your company. Inbound calls, lead qualification, automated replies.',
    p3f1: 'Call intake and routing',
    p3f2: 'Lead qualification',
    p3f3: 'CRM integration',
    p3f4: 'Implementation within 10 days',
    p4Title: 'UAV Monitoring',
    p4Desc: 'Professional drone services. Monitoring, inspection, photogrammetry, IBV.',
    p4f1: 'Aerial monitoring and inspection',
    p4f2: 'Photogrammetry and 3D mapping',
    p4f3: 'IBV and thermal scanning',
    p4f4: 'Retainers from €500/month',
    lblAbout: '✦ About',
    aboutHeading: 'Autonomous AI. Compliant by Design.',
    aboutP1: 'ASCENTIA s. r. o. is a Slovak AI company specialised in autonomous agents, UAV operations and AI compliance. Our systems are designed to meet European regulation — from the EU AI Act to GDPR.',
    aboutP2: 'Every product is built on years of practical experience in AI engineering, law and aviation. We believe AI must be safe, transparent and effective — and that is what we deliver.',
    aboutP3: 'Agent infrastructure runs on European servers (Hetzner Cloud, Nuremberg/Helsinki). The website is hosted on Vercel (USA, EU-US DPF).',
    v1Title: '🔒 Security-First',
    v1Desc: 'Security is not an add-on — it is the base layer of every system.',
    v2Title: '⚖️ Compliance-by-Design',
    v2Desc: 'Legal architecture built into the system from the first commit.',
    v3Title: '🌍 European infrastructure',
    v3Desc: 'Agent infrastructure in the EU. No extra-territorial access to agent data.',
    v4Title: '🛠️ Build, not buzz',
    v4Desc: 'No AI hype. Code, tests, deploy — proven in production.',
    founderName: 'Márian Stančík',
    founderTitle: 'AI Engineer, CEO @ ASCENTIA',
    f1: 'AI engineer — Python, TypeScript, Go',
    f2: 'UAV pilot A1/A3 — 1500g custom build',
    f3: 'Law student',
    f4: 'Hermes Agent — 24/7 autonomous runtime',
    lblContact: '✦ Contact',
    contactHeading: 'Get in Touch',
    contactIntro: 'Have a question? Need a consultation? Send us a message and we will reply within 24 hours.',
    contactP1: 'Every project starts with a consultation — free, no obligation.',
    labelSeat: 'Registered office:',
    labelRegister: 'Registered:',
    labelDirector: 'Managing director:',
    labelBank: 'Bank:',
    imprintSeat: 'Registered office:',
    formName: 'Name',
    formMessage: 'Message',
    formSubmit: 'Send Message',
    formConsent: 'By submitting this form you agree to the processing of your personal data in order to reply to your message. More information in the',
    formConsentLink: 'Privacy Policy',
    phName: 'Your name',
    phEmail: 'you@email.com',
    phMessage: 'How can we help?',
    phMessageLong: 'How can we help? Describe your project or question.',
    sending: 'Sending...',
    formOk: 'Thank you! Your message was sent. We will reply within 24 hours.',
    formErr: 'Something went wrong. Please try later or email marianstancik@agentmail.to',
    faqHeading: 'Frequently asked questions',
    faq1q: 'What does ASCENTIA do?',
    faq1a: 'ASCENTIA provides AI agents, marketing automation, UAV operations and AI compliance for European companies. All systems are designed to meet the EU AI Act, GDPR and NIS2 — from the first commit.',
    faq2q: 'Where is ASCENTIA based?',
    faq2a: 'Klincová 37/B, 821 08 Bratislava-Ružinov, Slovakia. Registered in the Commercial Register of the Municipal Court Bratislava III, Section Sro, Insert No. 130384/B. IČO: 51858959, DIČ: 2120816071. Managing director Márian Stančík acts independently.',
    faq3q: 'Is ASCENTIA GDPR compliant?',
    faq3a: 'Yes. Compliance-by-Design is a core principle of our systems. Personal data is processed in line with Regulation (EU) 2016/679 (GDPR) and Slovak Act No. 18/2018 Coll. See the <a href="/privacy" style="color: var(--kyberbronz); text-decoration: underline;">Privacy Policy</a>.',
    faq4q: 'What infrastructure do you use?',
    faq4a: 'Agent infrastructure: Hetzner Cloud (Nuremberg/Helsinki). Website: Vercel Edge (USA, EU-US DPF) — also processes the contact form. No Google Analytics.',
    faq5q: 'How do I start working with you?',
    faq5a: 'Fill in the <a href="/contact" style="color: var(--kyberbronz); text-decoration: underline;">contact form</a>. The first consultation is free and without obligation. We reply within 24 hours.',
    fCol1Title: 'Navigation',
    fCol2Title: 'Products',
    fCol3Title: 'Contact',
    footerTagline: 'Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance. Built in Europe. Compliant by Design.',
    fMotto: 'Build better. Stay legal.',
    pageTitle: 'ASCENTIA — Autonomous AI Company | AI Agents, Drones, Compliance',
    metaDesc: 'ASCENTIA s. r. o. — Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance.',
  },
};

function currentLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'sk') return q;
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'en' || stored === 'sk') return stored;
  } catch (e) { /* ignore */ }
  return 'sk';
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.sk;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
  });
  // Homepage IDs (index.html) — fill leftovers; never clobber form fields
  Object.keys(dict).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.hasAttribute('data-i18n') || el.hasAttribute('data-i18n-html')) return;
    if (el.querySelector('[data-i18n], [data-i18n-html]')) return;
    const tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'META' || tag === 'FORM') return;
    if (id === 'faq3a' || id === 'faq5a') {
      el.innerHTML = dict[id];
    } else {
      el.textContent = dict[id];
    }
  });
  const title = document.querySelector('title');
  if (title && dict.pageTitle && document.body.querySelector('#heroTagline')) {
    title.textContent = dict.pageTitle;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.metaDesc && document.body.querySelector('#heroTagline')) {
    metaDesc.setAttribute('content', dict.metaDesc);
  }
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.getElementById(lang === 'sk' ? 'btnSk' : 'btnEn');
  if (btn) btn.classList.add('active');
}

function switchLanguage(lang) {
  if (lang !== 'en' && lang !== 'sk') return;
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  applyI18n(lang);
}

// ===== Hamburger Menu =====
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks && hamburger && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navHeight = 80;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    const status = document.getElementById('formStatus');
    const dict = I18N[currentLang()] || I18N.sk;

    status.className = 'form-status';
    status.textContent = dict.sending;
    status.style.display = 'block';

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        status.className = 'form-status success';
        status.textContent = dict.formOk;
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = dict.formErr;
    }
  });
}

applyI18n(currentLang());
