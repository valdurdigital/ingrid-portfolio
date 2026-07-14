/* ──────────────────────────────────────────────────
   Hero entrance — simple text reveal over a full-bleed
   photo background. Loader stage was removed.
   ────────────────────────────────────────────────── */

function initHeroReveal() {
  const container = document.querySelector('.willem-header');
  if (!container) return;

  // Hero visible immediately — if GSAP fails or reduced-motion, no animation.
  container.classList.remove('is--hidden');

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof gsap === 'undefined' || reduced) {
    container.classList.remove('is--loading');
    return;
  }

  const eyebrow = container.querySelector('.willem-bottom__eyebrow');
  const letters = container.querySelectorAll('.willem__letter-white');
  const credit  = container.querySelector('.willem-credit');

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out' },
    onComplete() { container.classList.remove('is--loading'); },
  });

  if (eyebrow) {
    tl.from(eyebrow, { yPercent: 100, opacity: 0, duration: 0.9 });
  }
  if (letters.length) {
    tl.from(letters, {
      yPercent: 100,
      duration: 1.1,
      stagger: 0.035,
    }, '<0.15');
  }
  if (credit) {
    tl.from(credit, { yPercent: 100, opacity: 0, duration: 0.7 }, '<0.4');
  }
}

initHeroReveal();
