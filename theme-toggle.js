/* Theme toggle — shared across all pages */
(function () {
  var html = document.documentElement;
  var btn  = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var cur  = html.getAttribute('data-theme') || 'dark';
    var next = cur === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('iv-theme', next); } catch (e) {}
  });
})();
