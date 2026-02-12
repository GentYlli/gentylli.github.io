// Shared breadcrumb generator
// Builds breadcrumb from meta[name="breadcrumb"] or URL
// Maps common labels to hrefs and uses flexible matching
// NOW WITH MULTILINGUAL SUPPORT
(function () {
  'use strict';
  
  // URL map - stays the same regardless of language
  var map = {
    'kryefaqja': '/index.html',
    'home': '/index.html',
    'kcs': '/html/kcs.html',
    'gypsum': '/html/kcs.html',
    'solutions': '/html/solutions.html',
    'zgjidhjet': '/html/solutions.html',
    'applications': '/html/applications.html',
    'aplikime': '/html/applications.html',
    'document center': '/html/document-center.html',
    'qendra e dokumentave': '/html/document-center.html',
    'kcs produkte': '/html/kcs-produkte.html',
    'kcs-produkte': '/html/kcs-produkte.html',
    'kcs products': '/html/kcs-produkte.html',
    'mineral': '/html/mineral.html',
    'metal': '/html/metal.html',
    'wood design': '/html/wood-design.html',
    'dizajn druri': '/html/wood-design.html',
    'wood wool': '/html/wood-wool.html',
    'lesh druri': '/html/wood-wool.html',
    'offices': '/html/offices.html',
    'zyra': '/html/offices.html',
    'education': '/html/education.html',
    'arsim': '/html/education.html',
    'transport': '/html/transport.html',
    'healthcare': '/html/healthcare.html',
    'shëndetësi': '/html/healthcare.html',
    'retail': '/html/retail.html',
    'tregti': '/html/retail.html',
    'leisure & hospitality': '/html/leisure-hospitality.html',
    'argëtim & mikpritje': '/html/leisure-hospitality.html',
    'pft': '/html/pft.html',
    'kontakto': '/html/kontakto.html',
    'contact': '/html/kontakto.html',
    'bojera': '/html/bojera.html',
    'paints': '/html/bojera.html',
    'gips': '/html/gips.html',
    'kapot': '/html/kapot.html',
    'coating': '/html/kapot.html'
  };
  
  // Translation map for breadcrumb labels
  var translations = {
    sq: {
      'home': 'Kryefaqja',
      'kcs': 'KCS',
      'solutions': 'Zgjidhjet',
      'applications': 'Aplikime',
      'mineral': 'Mineral',
      'metal': 'Metal',
      'wood design': 'Dizajn Druri',
      'wood wool': 'Lesh Druri',
      'offices': 'Zyra',
      'education': 'Arsim',
      'transport': 'Transport',
      'healthcare': 'Shëndetësi',
      'retail': 'Tregti',
      'leisure & hospitality': 'Argëtim & Mikpritje',
      'kcs produkte': 'KCS Produkte',
      'document center': 'Qendra e Dokumentave',
      'pft': 'PFT',
      'contact': 'Kontakto',
      'paints': 'Bojëra',
      'gypsum': 'Gips',
      'coating': 'Kapot'
    },
    en: {
      'kryefaqja': 'Home',
      'kcs': 'KCS',
      'zgjidhjet': 'Solutions',
      'aplikime': 'Applications',
      'mineral': 'Mineral',
      'metal': 'Metal',
      'dizajn druri': 'Wood Design',
      'lesh druri': 'Wood Wool',
      'zyra': 'Offices',
      'arsim': 'Education',
      'transport': 'Transport',
      'shëndetësi': 'Healthcare',
      'tregti': 'Retail',
      'argëtim & mikpritje': 'Leisure & Hospitality',
      'kcs produkte': 'KCS Products',
      'qendra e dokumentave': 'Document Center',
      'pft': 'PFT',
      'kontakto': 'Contact',
      'bojëra': 'Paints',
      'gips': 'Gypsum',
      'kapot': 'Coating'
    }
  };
  
  // Get current language from localStorage
  function getCurrentLanguage() {
    return localStorage.getItem('language') || 'sq';
  }
  
  // Translate breadcrumb label
  function translateLabel(text) {
    if (!text) return text;
    var lang = getCurrentLanguage();
    var lower = text.trim().toLowerCase();
    
    // Check if translation exists
    if (translations[lang] && translations[lang][lower]) {
      return translations[lang][lower];
    }
    
    // Return original if no translation found
    return text;
  }
  
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
      
      // Translate the segment label
      var translatedLabel = translateLabel(seg);
      
      if (idx < segments.length - 1) {
        var href = findHrefByText(seg) || (seg.toLowerCase() === 'kryefaqja' || seg.toLowerCase() === 'home' ? '/index.html' : '#');
        var a = document.createElement('a');
        a.setAttribute('href', href);
        a.textContent = translatedLabel;
        li.appendChild(a);
      } else {
        li.textContent = translatedLabel;
        li.setAttribute('aria-current', 'page');
        li.classList.add('current');
      }
      list.appendChild(li);
    });
  }
  
  document.addEventListener('DOMContentLoaded', generateBreadcrumbs);
  
  // Regenerate breadcrumbs when language changes
  window.addEventListener('languageChanged', generateBreadcrumbs);
  
  // Expose for dev / testing
  window.__breadcrumbs = {
    generate: generateBreadcrumbs,
    map: map,
    translations: translations
  };
})();