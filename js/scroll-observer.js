/**
 * ==========================================================================
 * APPLE-STYLE BIDIRECTIONAL SCROLL OBSERVER
 * Handles smooth bidirectional reveal animations and triggers counters.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Trigger counter animation if element has counter elements
        const counters = entry.target.querySelectorAll('.counter-value');
        if (counters.length > 0) {
          counters.forEach(counter => {
            if (!counter.dataset.animated && window.animateCounter) {
              window.animateCounter(counter);
            }
          });
        }
      } else {
        // Rollback design: when scrolling back up above or far away, gracefully reset
        const rect = entry.target.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          entry.target.classList.remove('is-visible');
          const counters = entry.target.querySelectorAll('.counter-value');
          counters.forEach(counter => {
            counter.dataset.animated = '';
          });
        }
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
});
