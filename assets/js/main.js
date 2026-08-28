// Theme toggle (persisted) + mobile-friendly nav. Progressive enhancement:
// the site is fully readable with this script disabled.
(function () {
  const root = document.documentElement;
  function apply(theme) {
    if (theme === 'light' || theme === 'dark') root.setAttribute('data-theme', theme);
    else root.removeAttribute('data-theme');
  }
  apply(localStorage.getItem('hoh-theme'));

  const btn = document.getElementById('toggleTheme');
  if (btn) {
    btn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('hoh-theme', next);
      apply(next);
    });
  }

  const searchForm = document.getElementById('siteSearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const q = document.getElementById('siteSearchInput').value.trim();
      const base = document.body.getAttribute('data-root') || '.';
      window.location.href = base + '/search/?q=' + encodeURIComponent(q);
    });
  }
})();
