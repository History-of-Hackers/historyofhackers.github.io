// Theme toggle (persisted) + search redirect + auto table-of-contents.
// Progressive enhancement: the site is fully readable with this script
// disabled -- nothing here is required to read an article.
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

  // Auto-generated "Contents" box, Wikipedia-style: numbers every h2/h3
  // inside .entity-content and lists them right after the why-matters line.
  const content = document.querySelector('.entity-content');
  const tocSlot = document.getElementById('tocSlot');
  if (content && tocSlot) {
    const heads = Array.from(content.querySelectorAll('h2, h3'));
    if (heads.length >= 2) {
      let html = '<div class="toc-box"><div class="toc-title">Contents</div><ol>';
      let h2Open = false, subOpen = false;
      heads.forEach(function (h, i) {
        const id = 'sec-' + i;
        h.id = id;
        if (h.tagName === 'H2') {
          if (subOpen) { html += '</ol>'; subOpen = false; }
          if (h2Open) { html += '</li>'; }
          html += '<li><a href="#' + id + '">' + h.textContent + '</a>';
          h2Open = true;
        } else {
          if (!subOpen) { html += '<ol type="a">'; subOpen = true; }
          html += '<li><a href="#' + id + '">' + h.textContent + '</a></li>';
        }
      });
      if (subOpen) html += '</ol>';
      if (h2Open) html += '</li>';
      html += '</ol></div>';
      tocSlot.innerHTML = html;
    }
  }
})();
