// Client-side directory rendering: fetches the manifest, applies
// era/type/tag/text filters, renders a card grid. Used by every
// /<type>/index.html listing page, the global /search/, and /timeline/.
(function () {
  function qs(id) { return document.getElementById(id); }

  async function loadManifest(base) {
    const res = await fetch(base + '/data/manifest.json');
    if (!res.ok) throw new Error('manifest fetch failed');
    return res.json();
  }

  function cardHTML(item, base) {
    const tags = (item.tags || []).slice(0, 5).map(t => '<span class="chip">' + t + '</span>').join(' ');
    return '<div class="card">' +
      '<h3><a href="' + base + '/' + item.url + '">' + item.title + '</a></h3>' +
      '<div class="card-meta">' + item.typeLabel + ' &middot; ' + (item.era || '') + '</div>' +
      '<p>' + item.summary + '</p>' +
      '<div>' + tags + '</div>' +
    '</div>';
  }

  function renderGrid(el, items, base, emptyMessage) {
    if (!items.length) {
      el.innerHTML = '<p class="no-results">' + (emptyMessage || 'No results.') + '</p>';
      return;
    }
    el.innerHTML = '<div class="card-grid">' + items.map(i => cardHTML(i, base)).join('') + '</div>';
  }

  window.HOH = { loadManifest, renderGrid, cardHTML };
})();
