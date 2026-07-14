/* Pill nav — toggle glass state on scroll. */
(function initPillNav() {
  const nav = document.getElementById('pill-nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
