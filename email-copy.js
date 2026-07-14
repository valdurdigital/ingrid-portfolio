/* Email copy-to-clipboard with tooltip — shared across all pages */
(function () {
  var EMAIL = 'ingridvalderaurday@gmail.com';

  /* Create one shared tooltip */
  var tip = document.createElement('div');
  tip.className = 'copy-tooltip';
  tip.textContent = 'Copied!';
  document.body.appendChild(tip);

  var hideTimer;

  function showTip(el) {
    var rect = el.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset;
    tip.classList.remove('copy-tooltip--visible');
    /* position above the clicked element */
    tip.style.left = (rect.left + rect.width / 2) + 'px';
    tip.style.top  = (rect.top + scrollY - 44) + 'px';
    /* force reflow so transition fires */
    void tip.offsetWidth;
    tip.classList.add('copy-tooltip--visible');
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      tip.classList.remove('copy-tooltip--visible');
    }, 2000);
  }

  function handleClick(e) {
    e.preventDefault();
    navigator.clipboard.writeText(EMAIL).then(function () {
      showTip(e.currentTarget);
    }).catch(function () {
      /* fallback */
      var ta = document.createElement('textarea');
      ta.value = EMAIL;
      ta.style.position = 'fixed';
      ta.style.opacity  = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showTip(e.currentTarget);
    });
  }

  document.querySelectorAll('[data-copy-email]').forEach(function (el) {
    el.addEventListener('click', handleClick);
  });
})();
