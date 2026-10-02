document.addEventListener('DOMContentLoaded', () => {
  /* ============================================
     MENÚ HAMBURGUESA (MÓVIL)
  ============================================ */
  const menuToggle = document.getElementById('menuToggle');
  const menuPrincipal = document.getElementById('menuPrincipal');

  if (menuToggle && menuPrincipal) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuPrincipal.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar al hacer clic en cualquier enlace
    menuPrincipal.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuPrincipal.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!menuPrincipal.contains(e.target) && !menuToggle.contains(e.target)) {
        menuPrincipal.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Cerrar si se redimensiona a escritorio
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        menuPrincipal.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ============================================
     ANIMACIONES SCROLL (REVEAL)
  ============================================ */
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
});