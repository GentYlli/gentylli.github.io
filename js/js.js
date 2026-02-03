//sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }



  


let lastScrollTop =
window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll',
function handleScroll() {
  
  if(window.pageYOffset > 600){
    document.getElementById('toTop').style.display = "block";
    document.getElementById('toTop').style.animation = "fade-in 0.2s";
    }else if(window.pageYOffset <= 600){
      document.getElementById('toTop').style.animation = "fade-out 0.2s";
      document.getElementById('toTop').style.display = "none";
    }

  const scrollTopPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTopPosition > lastScrollTop) {
      document.querySelector('.header').style.top = "-100%";
  } else if (scrollTopPosition < lastScrollTop) {
      document.querySelector('.header').style.top = "0";
  }
  lastScrollTop =
    scrollTopPosition <= 0 ? 0 : scrollTopPosition;
},
false,
);




function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// Accessible dropdown behavior: click/tap to open, click outside or Escape to close
(function initDropdowns(){
  function setup(){
    const dropdownParents = Array.from(document.querySelectorAll('.dropdown-btn'));
    if (!dropdownParents.length) return;

    let openDropdown = null;
    function closeAll(){
      dropdownParents.forEach(p => {
        p.classList.remove('open');
        p.removeAttribute('data-open');
        const toggle = p.querySelector('a, button');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
      openDropdown = null;
    }

    dropdownParents.forEach(parent => {
      const toggle = parent.querySelector('a, button');
      const menu = parent.querySelector('.dropdown');
      if (!toggle || !menu) return;

      toggle.setAttribute('aria-haspopup', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('role', 'button');
      // make anchors without href focusable (some markup uses <a> without href)
      if (toggle.tagName && toggle.tagName.toLowerCase() === 'a' && !toggle.hasAttribute('href')) {
        toggle.setAttribute('tabindex', '0');
      }

      toggle.addEventListener('click', function(e){
        // Toggle menu open/close
        e.preventDefault();
        const isOpen = parent.classList.contains('open');
        closeAll();
        if (!isOpen) {
          parent.classList.add('open');
          parent.setAttribute('data-open', 'true');
          toggle.setAttribute('aria-expanded', 'true');
          openDropdown = parent;
          // focus first focusable item in menu
          const first = menu.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
          if (first) first.focus();
        }
      });

      // fallback: if parent itself is clicked (e.g., clicking around the toggle), toggle menu
      parent.addEventListener('click', function(e){
        // if click inside the dropdown menu, do nothing (let links work)
        if (menu.contains(e.target)) return;
        // if the original click target is the toggle or its children, ignore because toggle handler will run
        if (toggle.contains(e.target)) return;
        // otherwise, treat click on parent area as a toggle
        e.preventDefault();
        const isOpen = parent.classList.contains('open');
        closeAll();
        if (!isOpen) {
          parent.classList.add('open');
          parent.setAttribute('data-open', 'true');
          toggle.setAttribute('aria-expanded', 'true');
          openDropdown = parent;
          const first = menu.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
          if (first) first.focus();
        }
      });

      toggle.addEventListener('keydown', function(e){
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle.click(); }
        if (e.key === 'Escape') { closeAll(); toggle.focus(); }
      });
    });

    document.addEventListener('click', function(e){
      if (!openDropdown) return;
      if (openDropdown.contains(e.target)) return;
      closeAll();
    });

    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeAll(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup); else setup();
})();




