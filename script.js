// Niğmet Vinç ve Forklift - Etkileşimler
// - Smooth scroll
// - Hero slider
// - Basit form doğrulama & mesaj

(function () {
  // Smooth Scroll for navbar links
  const navLinks = document.querySelectorAll('.menu a');
  const navbar = document.getElementById('navbar');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (!el) return;
        const navHeight = navbar ? navbar.offsetHeight : 60;
        const extraOffset = 10; // küçük ofset
        const y = el.getBoundingClientRect().top + window.scrollY - (navHeight + extraOffset);
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Hero slider otomatik geçiş
  const slides = document.querySelectorAll('#heroSlider .slide');
  let current = 0;
  const nextSlide = () => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  };
  if (slides.length > 1) {
    setInterval(nextSlide, 5000); // 5 sn
  }

  // İletişim formu kaldırıldı; ek JS gerekmiyor

  // Mobile sidebar toggle (left drawer)
  const toggleButton = document.querySelector('.nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.querySelector('.nav-overlay');
  const menuLinks = document.querySelectorAll('.mobile-menu a');

  const closeMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('hidden', '');
    }
    if (overlay) {
      overlay.classList.remove('active');
      overlay.setAttribute('hidden', '');
    }
    if (toggleButton) toggleButton.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    if (mobileMenu) {
      mobileMenu.removeAttribute('hidden');
      // Trigger reflow to ensure the element is visible before adding 'open' class
      void mobileMenu.offsetWidth;
      mobileMenu.classList.add('open');
    }
    if (overlay) {
      overlay.removeAttribute('hidden');
      overlay.classList.add('active');
    }
    if (toggleButton) toggleButton.setAttribute('aria-expanded', 'true');
  };

  // Toggle menu when clicking the hamburger button
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      if (mobileMenu.hasAttribute('hidden') || !mobileMenu.classList.contains('open')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  // Close menu when clicking on overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on close button
  const closeButton = document.querySelector('.menu-close');
  if (closeButton) {
    closeButton.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on a menu link
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
})();


