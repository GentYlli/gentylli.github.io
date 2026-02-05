(function(){
  function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
  var row = qs('.shop .row');
  var prev = qs('.shop-prev');
  var next = qs('.shop-next');
  if (!row || !prev || !next) return;
  var items = Array.from(row.children);
  var currentIndex = 0;

  function clamp(i){ return Math.max(0, Math.min(items.length-1, i)); }

  function centerIndex(i, focus){
    i = clamp(i);
    var el = items[i];
    if (!el) return;
    var target = el.offsetLeft - (row.clientWidth - el.offsetWidth)/2;
    row.scrollTo({ left: target, behavior: 'smooth' });
    currentIndex = i;
    updateNav();
    if (focus !== false) el.querySelector('a')?.focus();
  }

  function updateNav(){
    prev.disabled = currentIndex <= 0;
    next.disabled = currentIndex >= items.length-1;
    // hide if not needed
    if (row.scrollWidth <= row.clientWidth + 1){
      prev.style.display = 'none'; next.style.display = 'none';
    } else { prev.style.display = ''; next.style.display = ''; }
  }

  function indexClosestToCenter(){
    var center = row.scrollLeft + row.clientWidth/2;
    var best = 0; var bestDist = Infinity;
    items.forEach(function(it, idx){
      var c = it.offsetLeft + it.offsetWidth/2;
      var d = Math.abs(c - center);
      if (d < bestDist){ bestDist = d; best = idx; }
    });
    return best;
  }

  var scrollTimeout;
  row.addEventListener('scroll', function(){
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function(){
      currentIndex = indexClosestToCenter();
      updateNav();
    }, 100);
  });

  prev.addEventListener('click', function(){ centerIndex(currentIndex - 1); });
  next.addEventListener('click', function(){ centerIndex(currentIndex + 1); });

  // keyboard left/right
  row.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft') { e.preventDefault(); centerIndex(currentIndex - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); centerIndex(currentIndex + 1); }
  });

  // recenter on resize
  window.addEventListener('resize', function(){ setTimeout(function(){ centerIndex(currentIndex, false); }, 120); });

  // initial center - try center first tile in view
  document.addEventListener('DOMContentLoaded', function(){
    // center the middle item by default
    var mid = Math.floor(items.length/2);
    centerIndex(mid, false);
    updateNav();
  });

  // delegate preview-button navigation (prevents nested anchors)
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.preview-link');
    if (btn && btn.dataset && btn.dataset.href) {
      window.location.href = btn.dataset.href;
    }
  });

})();