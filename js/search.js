(function(){
  // Shared product search with highlighting and scoring
  function normalizeText(str) {
    if (!str) return '';
    return String(str)
      .toLowerCase()
      .replace(/ë/g, 'e')
      .replace(/Ë/g, 'e')
      .normalize && String.prototype.normalize
        ? String(str).toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/ë/g, 'e')
        : String(str).toLowerCase().replace(/ë/g, 'e').replace(/[\u0300-\u036f]/g, '');
  }

  function escapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

  function walkTextNodes(node, callback){
    if(!node) return;
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
    let cur;
    while(cur = walker.nextNode()){ callback(cur); }
  }

  function removeHighlights(el){
    if(!el) return;
    if (el.dataset && el.dataset.originalHtml) {
      el.innerHTML = el.dataset.originalHtml;
      return;
    }
    const highlights = el.querySelectorAll ? el.querySelectorAll('span.highlight') : [];
    highlights.forEach(span => { const txt = document.createTextNode(span.textContent); span.parentNode.replaceChild(txt, span); });
  }

  function highlightElement(el, tokens){
    if(!el || !tokens || tokens.length===0) return;
    removeHighlights(el);
    const parts = tokens.map(t => escapeRegex(t).replace(/e/g,'[eë]'));
    const pattern = parts.join('|');
    const re = new RegExp(pattern,'gi');
    walkTextNodes(el, textNode => {
      const parent = textNode.parentNode; if(!parent) return;
      const text = textNode.nodeValue; let match; let lastIndex = 0; const frag = document.createDocumentFragment(); re.lastIndex = 0;
      while((match = re.exec(text)) !== null){
        const before = text.slice(lastIndex, match.index);
        if (before) frag.appendChild(document.createTextNode(before));
        const span = document.createElement('span'); span.className = 'highlight'; span.textContent = match[0]; frag.appendChild(span);
        lastIndex = match.index + match[0].length;
        if (re.lastIndex === match.index) re.lastIndex++;
      }
      if (lastIndex === 0) return;
      const after = text.slice(lastIndex);
      if (after) frag.appendChild(document.createTextNode(after));
      parent.replaceChild(frag, textNode);
    });
  }

  function initSearchForInput(input) {
    if (!input) return;
    input.addEventListener('input', function(){
      const raw = this.value.trim();
      const searchTerm = normalizeText(raw);
      const tokens = searchTerm.split(/\s+/).filter(Boolean);
      const allProducts = Array.from(document.querySelectorAll('.produkt'));
      const allLists = document.querySelectorAll('.list');
      let visibleCount = 0;

      if (allProducts.length && !allProducts[0].dataset.origIndex) {
        allProducts.forEach((p,i)=>p.dataset.origIndex = i);
      }

      if (searchTerm.length > 0) {
        const scores = new Map();
        allProducts.forEach(product => {
          const nameEl = product.querySelector('.produkt-name h1');
          const descEl = product.querySelector('.produkt-pershkrim');
          const name = normalizeText(nameEl ? nameEl.textContent : '');
          const desc = normalizeText(descEl ? descEl.textContent : '');

          let score = 0;
          if (name === searchTerm) score += 200;
          if (name.startsWith(searchTerm)) score += 150;
          if (name.includes(searchTerm)) score += 100;
          tokens.forEach(t => { if (name.includes(t)) score += 20; if (desc.includes(t)) score += 10; });

          if (score > 0) {
            product.classList.remove('hidden');
            product.classList.add('match');
            scores.set(product, score);
            visibleCount++;
            // store original html for safe restore
            if (nameEl && !nameEl.dataset.originalHtml) nameEl.dataset.originalHtml = nameEl.innerHTML;
            if (descEl && !descEl.dataset.originalHtml) descEl.dataset.originalHtml = descEl.innerHTML;
            highlightElement(nameEl, tokens);
            highlightElement(descEl, tokens);
          } else {
            if (nameEl) removeHighlights(nameEl);
            if (descEl) removeHighlights(descEl);
            product.classList.remove('match');
            product.classList.add('hidden');
          }
        });

        allLists.forEach(list => {
          const matches = Array.from(list.querySelectorAll('.produkt:not(.hidden)'));
          if (matches.length > 0) {
            matches.sort((a,b)=>{
              const sa = scores.get(a) || 0; const sb = scores.get(b) || 0;
              if (sb !== sa) return sb - sa;
              return (Number(a.dataset.origIndex)||0) - (Number(b.dataset.origIndex)||0);
            });
            matches.forEach(m=>list.appendChild(m));
            list.style.display = '';
            list.style.maxHeight = 'none';
            list.style.overflow = 'visible';
          } else {
            list.style.display = 'none';
          }
        });

        const existingNoResults = document.querySelector('.no-results'); if (existingNoResults) existingNoResults.remove();
        if (visibleCount === 0) {
          const noResultsMsg = document.createElement('div');
          noResultsMsg.className = 'no-results';
          noResultsMsg.textContent = `Nuk u gjetën rezultate për "${raw}"`;
          const bar = document.querySelector('.bar'); if (bar) bar.after(noResultsMsg); else document.body.appendChild(noResultsMsg);
        }

      } else {
        // clear: show all lists/products, restore original HTML and remove highlights
        allLists.forEach(list => {
          const products = Array.from(list.querySelectorAll('.produkt'));
          products.sort((a,b)=> (Number(a.dataset.origIndex)||0)-(Number(b.dataset.origIndex)||0));
          products.forEach(p=>list.appendChild(p));
          list.style.display = '';
          // restore original inline styles if present
          list.style.maxHeight = list.dataset.origMaxHeight || '';
          list.style.overflow = list.dataset.origOverflow || '';
        });
        allProducts.forEach(product => {
          product.classList.remove('hidden');
          product.classList.remove('match');
          const nameEl = product.querySelector('.produkt-name h1');
          const descEl = product.querySelector('.produkt-pershkrim');
          if (nameEl) removeHighlights(nameEl);
          if (descEl) removeHighlights(descEl);
        });
        const existingNoResults = document.querySelector('.no-results'); if (existingNoResults) existingNoResults.remove();
      }
    });

    // clear on init
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function initAll() {
    document.querySelectorAll('.produkt').forEach(product => {
      const nameEl = product.querySelector('.produkt-name h1');
      const descEl = product.querySelector('.produkt-pershkrim');
      if (nameEl && !nameEl.dataset.originalHtml) nameEl.dataset.originalHtml = nameEl.innerHTML;
      if (descEl && !descEl.dataset.originalHtml) descEl.dataset.originalHtml = descEl.innerHTML;
    });
    // store original list inline styles so we can restore them on clear
    document.querySelectorAll('.list').forEach(list => {
      if (list && list.style) {
        list.dataset.origMaxHeight = list.style.maxHeight || '';
        list.dataset.origOverflow = list.style.overflow || '';
      }
    });

    const input = document.getElementById('product-search');
    if (input) initSearchForInput(input);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
