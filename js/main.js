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
      status.textContent = 'Nastala chyba. Skúste neskôr alebo napíšte priamo na marian_stancik@agentmail.to';
    }
  });
}

// ===== Language Switcher =====
function switchLanguage(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(lang === 'sk' ? 'btnSk' : 'btnEn').classList.add('active');

  if (lang === 'en') {
    document.getElementById('heroTagline').textContent = 'Autonomous AI. Engineered in Europe. Compliant by Design.';
    document.getElementById('heroCta').textContent = 'Contact Us';
    document.getElementById('heroCta2').textContent = 'Our Services';
    document.getElementById('servicesHeading').textContent = 'What We Do';
    document.getElementById('servicesIntro').textContent = 'From autonomous agents to UAV operations — all compliant with EU regulation.';
    document.getElementById('s1Title').textContent = 'AI Agents & Automation';
    document.getElementById('s2Title').textContent = 'AI Marketing Agents';
    document.getElementById('s3Title').textContent = 'UAV Operations & Edge AI';
    document.getElementById('s4Title').textContent = 'AI Compliance & Legal-by-Design';
    document.getElementById('productsHeading').textContent = 'Ready Solutions';
    document.getElementById('aboutHeading').textContent = 'Autonomous AI. Compliant by Design.';
    document.getElementById('contactHeading').textContent = 'Get in Touch';
    document.getElementById('contactIntro').textContent = 'Have a question? Need a consultation? Send us a message and we\'ll reply within 24 hours.';
    document.getElementById('formSubmit').textContent = 'Send Message';
    document.getElementById('heroCta').textContent = 'Contact Us';
    document.getElementById('heroCta2').textContent = 'Our Services';
    document.querySelector('title').textContent = 'ASCENTIA — Autonomous AI Company | AI Agents, Drones, Compliance';
    document.querySelector('meta[name="description"]').content = 'ASCENTIA s.r.o. — Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance.';
    document.querySelector('html').lang = 'en';
  } else {
    document.getElementById('heroTagline').textContent = 'Autonómna AI. Vyrobené v Európe. Kompliantné od návrhu.';
    document.getElementById('heroCta').textContent = 'Kontaktujte nás';
    document.getElementById('heroCta2').textContent = 'Naše služby';
    document.getElementById('servicesHeading').textContent = 'Čo robíme';
    document.getElementById('servicesIntro').textContent = 'Od autonómnych agentov až po UAV operácie — všetko kompliantné s európskou reguláciou.';
    document.getElementById('s1Title').textContent = 'AI Agenti & Automatizácia';
    document.getElementById('s2Title').textContent = 'AI Marketing Agenti';
    document.getElementById('s3Title').textContent = 'UAV Operácie & Edge AI';
    document.getElementById('s4Title').textContent = 'AI Compliance & Legal-by-Design';
    document.getElementById('productsHeading').textContent = 'Hotové riešenia';
    document.getElementById('aboutHeading').textContent = 'Autonómna AI. Kompliantná od návrhu.';
    document.getElementById('contactHeading').textContent = 'Spojte sa s nami';
    document.getElementById('contactIntro').textContent = 'Máte otázku? Potrebujete konzultáciu? Pošlite správu a ozveme sa do 24 hodín.';
    document.getElementById('formSubmit').textContent = 'Odoslať správu';
    document.querySelector('title').textContent = 'ASCENTIA — Autonómna AI Firma | AI Agenti, Drony, Compliance';
    document.querySelector('meta[name="description"]').content = 'ASCENTIA s.r.o. — Autonomous AI company. AI agents, UAV operations, marketing automation, and EU AI Act compliance.';
    document.querySelector('html').lang = 'sk';
  }
}