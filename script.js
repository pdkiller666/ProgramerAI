// ===== Mobile Menu Toggle =====
(function() {
  'use strict';

  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  if (burger && nav) {
    burger.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', isOpen);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    const navLinks = nav.querySelectorAll('.header__nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('nav--open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  } else {
    console.warn('Mobile menu elements not found. Ensure .header__burger and .header__nav exist in the DOM.');
  }
})();

// ===== Contact Form Validation =====
(function() {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) {
    console.warn('Contact form not found. Ensure #contactForm exists in the DOM.');
    return;
  }

  const fields = [
    { id: 'name', errorElement: form.querySelector('#name + .form-error') },
    { id: 'email', errorElement: form.querySelector('#email + .form-error') },
    { id: 'message', errorElement: form.querySelector('#message + .form-error') }
  ];

  function validateField(input, errorElement) {
    if (!input || !errorElement) return true;
    const value = input.value.trim();
    let errorMessage = '';

    if (input.hasAttribute('required') && value === '') {
      errorMessage = 'Это поле обязательно';
    } else if (input.type === 'email' && value !== '') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        errorMessage = 'Введите корректный email';
      }
    }

    errorElement.textContent = errorMessage;
    input.style.borderColor = errorMessage ? 'var(--color-accent)' : 'rgba(108, 99, 255, 0.2)';
    return errorMessage === '';
  }

  // Real-time validation on blur
  fields.forEach(function(field) {
    const input = document.getElementById(field.id);
    if (input && field.errorElement) {
      input.addEventListener('blur', function() {
        validateField(input, field.errorElement);
      });

      input.addEventListener('input', function() {
        if (field.errorElement.textContent !== '') {
          validateField(input, field.errorElement);
        }
      });
    }
  });

  // Form submit handler
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    fields.forEach(function(field) {
      const input = document.getElementById(field.id);
      if (!validateField(input, field.errorElement)) {
        isValid = false;
      }
    });

    if (isValid) {
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
      }

      // Simulate async request
      setTimeout(function() {
        alert('Сообщение отправлено! Спасибо за обратную связь.');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Отправить';
        }
        // Reset error states
        fields.forEach(function(field) {
          const input = document.getElementById(field.id);
          if (input) input.style.borderColor = 'rgba(108, 99, 255, 0.2)';
          if (field.errorElement) field.errorElement.textContent = '';
        });
      }, 1500);
    }
  });
})();

// ===== Smooth Scroll for Anchor Links (fallback) =====
(function() {
  'use strict';

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
})();

// ===== Intersection Observer for Animations =====
(function() {
  'use strict';

  const animateElements = document.querySelectorAll('.skill-card, .project-card, .stat');
  if (animateElements.length === 0) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animateElements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();