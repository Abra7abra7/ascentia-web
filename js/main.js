/* =====================================================
   ASCENTIA s.r.o. — Main JavaScript
   ===================================================== */

// ===== Hamburger Menu =====
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});

// ===== Navbar scroll effect =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== Intersection Observer for fade-in =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    const status = document.getElementById('formStatus');

    status.className = 'form-status';
    status.textContent = 'Odosielam...';
    status.style.display = 'block';

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        status.className = 'form-status success';
        status.textContent = 'Ďakujeme! Správa bola odoslaná. Ozveme sa do 24 hodín.';
        contactForm.reset();
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Nastala chyba. Skúste neskôr alebo napíšte priamo na marianstancik@agentmail.to';
    }
  });
}

// ===== Language Switcher =====
function switchLanguage(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.getElementById(lang === 'sk' ? 'btnSk' : 'btnEn');
  if (btn) btn.classList.add('active');

  if (lang === 'en') {
    const el = id => document.getElementById(id);
    if (el('heroTagline')) el('heroTagline').textContent = 'Autonomous AI. Engineered in Europe. Compliant by Design.';
    if (el('heroCta')) el('heroCta').textContent = 'Contact Us';
    if (el('heroCta2')) el('heroCta2').textContent = 'Our Services';
    if (el('servicesHeading')) el('servicesHeading').textContent = 'What We Do';
    if (el('servicesIntro')) el('servicesIntro').textContent = 'From autonomous agents to UAV operations — all compliant with EU regulation.';
    if (el('s1Title')) el('s1Title').textContent = 'AI Agents & Automation';
    if (el('s2Title')) el('s2Title').textContent = 'AI Marketing Agents';
    if (el('s3Title')) el('s3Title').textContent = 'UAV Operations & Edge AI';
    if (el('s4Title')) el('s4Title').textContent = 'AI Compliance & Legal-by-Design';
    if (el('productsHeading')) el('productsHeading').textContent = 'Ready Solutions';
    if (el('aboutHeading')) el('aboutHeading').textContent = 'Autonomous AI. Compliant by Design.';
    if (el('contactHeading')) el('contactHeading').textContent = 'Get in Touch';
    if (el('contactIntro')) el('contactIntro').textContent = "Have a question? Need a consultation? Send us a message and we'll reply within 24 hours.";
    if (el('formSubmit')) el('formSubmit').textContent = 'Send Message';
    if (el('stat1')) el('stat1').textContent = 'Active agents';
    if (el('stat2')) el('stat2').textContent = 'Cron jobs';
    if (el('stat3')) el('stat3').textContent = 'Runtime';
    if (el('stat4')) el('stat4').textContent = 'Insurance';
    if (el('p1Title')) el('p1Title').textContent = 'Hermes Agent';
    if (el('p2Title')) el('p2Title').textContent = 'AI Marketing Agents';
    if (el('p3Title')) el('p3Title').textContent = 'Voice Agent MVP';
    if (el('p4Title')) el('p4Title').textContent = 'UAV Monitoring';
    if (el('founderName')) el('founderName').textContent = 'Marian Stancik';
    if (el('founderTitle')) el('founderTitle').textContent = 'AI Engineer, CEO @ ASCENTIA';
    if (el('footerTagline')) el('footerTagline').textContent = 'Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance. Built in Europe. Compliant by Design.';
    if (el('fMotto')) el('fMotto').textContent = 'Build better. Stay legal.';
    const title = document.querySelector('title');
    if (title) title.textContent = 'ASCENTIA — Autonomous AI Company | AI Agents, Drones, Compliance';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'ASCENTIA s.r.o. — Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance.';
    document.querySelector('html').lang = 'en';
  } else {
    const el = id => document.getElementById(id);
    if (el('heroTagline')) el('heroTagline').textContent = 'Autonómna AI. Vyrobené v Európe. Kompliantné od návrhu.';
    if (el('heroCta')) el('heroCta').textContent = 'Kontaktujte nás';
    if (el('heroCta2')) el('heroCta2').textContent = 'Naše služby';
    if (el('servicesHeading')) el('servicesHeading').textContent = 'Čo robíme';
    if (el('servicesIntro')) el('servicesIntro').textContent = 'Od autonómnych agentov až po UAV operácie — všetko kompliantné s európskou reguláciou.';
    if (el('s1Title')) el('s1Title').textContent = 'AI Agenti & Automatizácia';
    if (el('s2Title')) el('s2Title').textContent = 'AI Marketing Agenti';
    if (el('s3Title')) el('s3Title').textContent = 'UAV Operácie & Edge AI';
    if (el('s4Title')) el('s4Title').textContent = 'AI Compliance & Legal-by-Design';
    if (el('productsHeading')) el('productsHeading').textContent = 'Hotové riešenia';
    if (el('aboutHeading')) el('aboutHeading').textContent = 'Autonómna AI. Kompliantná od návrhu.';
    if (el('contactHeading')) el('contactHeading').textContent = 'Spojte sa s nami';
    if (el('contactIntro')) el('contactIntro').textContent = 'Máte otázku? Potrebujete konzultáciu? Pošlite správu a ozveme sa do 24 hodín.';
    if (el('formSubmit')) el('formSubmit').textContent = 'Odoslať správu';
    if (el('stat1')) el('stat1').textContent = 'Aktívnych agentov';
    if (el('stat2')) el('stat2').textContent = 'Cron jobov';
    if (el('stat3')) el('stat3').textContent = 'Runtime';
    if (el('stat4')) el('stat4').textContent = 'Poistenie';
    if (el('p1Title')) el('p1Title').textContent = 'Hermes Agent';
    if (el('p2Title')) el('p2Title').textContent = 'AI Marketing Agents';
    if (el('p3Title')) el('p3Title').textContent = 'Voice Agent MVP';
    if (el('p4Title')) el('p4Title').textContent = 'UAV Monitoring';
    if (el('founderName')) el('founderName').textContent = 'Marian Stancik';
    if (el('founderTitle')) el('founderTitle').textContent = 'AI Engineer, CEO @ ASCENTIA';
    if (el('footerTagline')) el('footerTagline').textContent = 'Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance. Built in Europe. Compliant by Design.';
    if (el('fMotto')) el('fMotto').textContent = 'Build better. Stay legal.';
    const title = document.querySelector('title');
    if (title) title.textContent = 'ASCENTIA — Autonómna AI Firma | AI Agenti, Drony, Compliance';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = 'ASCENTIA s.r.o. — Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance.';
    document.querySelector('html').lang = 'sk';
  }
}