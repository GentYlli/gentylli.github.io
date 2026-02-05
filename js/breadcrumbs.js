// Shared breadcrumb generator
// Builds breadcrumb from meta[name="breadcrumb"] or URL
// Maps common labels to hrefs and uses flexible matching
(function () {
  'use strict';

  var map = {
    'kryefaqja': '/index.html',
    'kcs': '/html/kcs.html',
    'solutions': '/html/solutions.html',
    'applications': '/html/applications.html',
    'document center': '/html/document-center.html',
    'kcs produkte': '/html/kcs-produkte.html',
    'kcs-produkte': '/html/kcs-produkte.html',
    'mineral': '/html/mineral.html',
    'metal': '/html/metal.html',
    'wood design': '/html/wood-design.html',
    'wood wool': '/html/wood-wool.html',
    'offices': '/html/offices.html',
    'education': '/html/education.html',
    'transport': '/html/transport.html',
    'healthcare': '/html/healthcare.html',
    'retail': '/html/retail.html',
    'leisure & hospitality': '/html/leisure-hospitality.html',
    'pft': '/html/pft.html',
    'kontakto': '/html/kontakto.html',
    'bojera': '/html/bojera.html',
    'gips': '/html/gips.html',
    'kapot': '/html/kapot.html'
  };

  function findHrefByText(text) {
    if (!text) return null;
    var lower = text.trim().toLowerCase();
    if (map[lower]) return map[lower];
    var anchors = Array.prototype.slice.call(document.querySelectorAll('a'));
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      if (a.textContent && a.textContent.trim().toLowerCase() === lower) return a.getAttribute('href');
    }
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      if (a.textContent && a.textContent.trim().toLowerCase().indexOf(lower) !== -1) return a.getAttribute('href');
    }
    var slug = lower.replace(/\s+/g, '-');
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      var h = (a.getAttribute('href') || '').toLowerCase();
      if (h.indexOf(slug) !== -1) return a.getAttribute('href');
    }
    return null;
  }

  function buildSegmentsFromMetaOrURL() {
    var meta = document.querySelector('meta[name="breadcrumb"]');
    var segments = [];
    if (meta && meta.content && meta.content.trim()) {
      segments = meta.content.split('>').map(function (s) { return s.trim(); }).filter(function (s) { return s; });
    } else {
      var path = location.pathname.replace(/\/$/, '');
      if (path === '' || path === '/index.html') {
        segments = ['Kryefaqja'];
      } else {
        var parts = path.split('/').filter(Boolean);
        var last = parts[parts.length - 1];
        var name = last.replace('.html', '').replace(/[-_]/g, ' ');
        name = decodeURIComponent(name);
        name = name.charAt(0).toUpperCase() + name.slice(1);
        segments = ['Kryefaqja', name];
      }
    }
    return segments;
  }

  function generateBreadcrumbs() {
    var nav = document.getElementById('breadcrumb-nav');
    if (!nav) return;
    var list = document.getElementById('breadcrumb-list');
    if (!list) return;

    var segments = buildSegmentsFromMetaOrURL();

    list.innerHTML = '';
    segments.forEach(function (seg, idx) {
      var li = document.createElement('li');
      li.className = 'breadcrumb-item';
      if (idx < segments.length - 1) {
        var href = findHrefByText(seg) || (seg.toLowerCase() === 'kryefaqja' ? '/index.html' : '#');
        var a = document.createElement('a');
        a.setAttribute('href', href);
        a.textContent = seg;
        li.appendChild(a);
      } else {
        li.textContent = seg;
        li.setAttribute('aria-current', 'page');
        li.classList.add('current');
      }
      list.appendChild(li);
    });
  }

  document.addEventListener('DOMContentLoaded', generateBreadcrumbs);

  // Expose for dev / testing
  window.__breadcrumbs = {
    generate: generateBreadcrumbs,
    map: map
  };
})();