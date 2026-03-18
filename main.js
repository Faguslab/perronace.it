document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  /* NAV scroll */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  /* Hamburger */
  const burger  = document.getElementById('navBurger');
  const overlay = document.getElementById('navOverlay');
  function closeMenu() {
    burger.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  /* Hero ken-burns */
  setTimeout(() => document.getElementById('heroImg').classList.add('loaded'), 100);

  /* Reveal on scroll */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* Fagus Lab gallery */
  const gallery = document.getElementById('flGallery');
  const cards   = Array.from(gallery.querySelectorAll('.fl-card'));
  function activate(i) { cards.forEach((c, j) => c.classList.toggle('fl-active', j === i)); }
  cards.forEach((card, i) => {
    card.addEventListener('mouseenter', () => activate(i));
    card.addEventListener('click', () => { if (!card.classList.contains('fl-active')) activate(i); });
  });
  gallery.addEventListener('mouseleave', () => activate(0));

  /* Scroll a #libro per QR */
  if (window.location.hash === '#libro') {
    setTimeout(() => {
      const el = document.getElementById('libro');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }
});
