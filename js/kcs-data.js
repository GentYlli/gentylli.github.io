const productsData = {
    kcs: [
  {
    name: "AMF ECOMIN ORBIT",
    image: "../images/kcs/ecomin-orbit.png",
    description: "Zgjidhje tavani me kosto efektive me sipërfaqe të hollë dhe teksturë të imët.",
    specs: [
      "Absorbimi i zërit: 0,20 (L) αw",
      "Reflektim i dritës: 85%"
    ]
  },

  {
    name: "AMF ECOMIN PLANET",
    image: "../images/kcs/ecomin-planet.png",
    description: "Tavan ekonomik me sipërfaqe uniforme dhe thithje të mirë akustike.",
    specs: [
      "Absorbimi i zërit: 0,55 αw",
      "Reflektim i dritës: 85%"
    ]
  },

  {
    name: "AMF ECOMIN FILIGRAN",
    image: "../images/kcs/ecomin-filigran.png",
    description: "Tavan me vrima, i përshtatshëm për zona që kërkojnë thithje të mirë të zërit.",
    specs: [
      "Absorbimi i zërit: 0,55 αw",
      "Reflektim i dritës: 86%"
    ]
  },

  {
    name: "AMF THERMATEX THERMOFON",
    image: "../images/kcs/thermatex-thermofon.png",
    description: "Pllakë tavani me sipërfaqe të lëmuar dhe dizajn modern për rehati të lartë akustike.",
    specs: [
      "Absorbimi i zërit: 0,80 (H) αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX SCHLICHT HYGENA",
    image: "../images/kcs/thermatex-schlicht-hygena.png",
    description: "Pllakë e lëmuar dhe elegante, ideale për ambiente të qeta dhe higjienike.",
    specs: [
      "Absorbimi i zërit: 0,10 (L) αw",
      "Reflektim i dritës: 92%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX ALPHA",
    image: "../images/kcs/thermatex-alpha.png",
    description: "Pllakë moderne e bardhë për thithje të shkëlqyer të zërit.",
    specs: [
      "Absorbimi i zërit: 0,95 αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX ALPHA ONE",
    image: "../images/kcs/thermatex-alpha-one.png",
    description: "Zgjidhje optimale për zona me kërkesa maksimale akustike.",
    specs: [
      "Absorbimi i zërit: 1,00 αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX ALPHA HD",
    image: "../images/kcs/thermatex-alpha-hd.png",
    description: "Kombinim i shkëlqyer i absorbimit dhe zbutjes së zërit.",
    specs: [
      "Absorbimi i zërit: 0,90 αw",
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX ALPHA E ZEZË",
    image: "../images/kcs/thermatex-alpha-bl.png",
    description: "Pllakë tavani e zezë me performancë shumë të lartë akustike dhe pamje elegante.",
    specs: [
      "Absorbimi i zërit: 1,00 αw",
      "Reduktimi i zërit: Rw 14 dB"
    ]
  },

  {
    name: "AMF THERMATEX ALPHA E NGJYROSUR",
    image: "../images/kcs/thermatex-alpha-colored.png",
    description: "Pllakë moderne në ngjyra krem dhe argjend me absorbim të lartë të zërit.",
    specs: [
      "Absorbimi i zërit: 0,95 αw",
      "Reduktimi i zërit: Rw 14 dB"
    ]
  },

  {
    name: "AMF THERMATEX ACOUSTIC",
    image: "../images/kcs/thermatex-acoustic.png",
    description: "Sipërfaqe e laminuar me absorbim dhe izolim të shkëlqyer akustik.",
    specs: [
      "Absorbimi i zërit: 0,65 (H) αw",
      "Zbutje e zërit: 40 dB",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX DB ACOUSTIC",
    image: "../images/kcs/thermatex-db-acoustic.png",
    description: "Zgjidhje ideale për zbutje maksimale të zërit dhe dizajn të përjetshëm.",
    specs: [
      "Absorbimi i zërit: 0,65 (H) αw",
      "Zbutje e zërit: 41 dB (24 mm)",
      "Zbutje e zërit: 43 dB (30 mm)",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX SF ACOUSTIC",
    image: "../images/kcs/thermatex-sf-acoustic.png",
    description: "Sistem tavani me profile pothuajse të padukshme.",
    specs: [
      "Absorbimi i zërit: 0,65 (H) αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX SILENCE",
    image: "../images/kcs/thermatex-silence.png",
    description: "Tavan i dyfishtë me lesh mineral për kërkesa akustike shumë të larta.",
    specs: [
      "Absorbimi i zërit: 0,85 (H) αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX FEINSTRATOS",
    image: "../images/kcs/thermatex-feinstratos.png",
    description: "Pamje uniforme falë teksturës së imët.",
    specs: [
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 85%"
    ]
  },

  {
    name: "AMF THERMATEX FEINSTRATOS MICRO PERF",
    image: "../images/kcs/thermatex-feinstratos-micro-perf.png",
    description: "Teksturë e imët me përthithje të mirë të zërit.",
    specs: [
      "Absorbimi i zërit: 0,70 αw",
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 85%"
    ]
  },

  {
    name: "AMF THERMATEX STAR",
    image: "../images/kcs/thermatex-star.png",
    description: "Pllakë me vrima të imta, ideale për zyra dhe klasa.",
    specs: [
      "Absorbimi i zërit: 0,60 αw",
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 88%"
    ]
  },

  {
    name: "AMF THERMATEX MERCURE",
    image: "../images/kcs/thermatex-mercure.png",
    description: "Panel modern me vrima të imta dhe cilësi të lartë.",
    specs: [
      "Absorbimi i zërit: 0,60 αw",
      "Reflektim i dritës: 85%"
    ]
  },

  {
    name: "AMF THERMATEX FEINFRESKO",
    image: "../images/kcs/thermatex-feinfresko.png",
    description: "Sipërfaqe me teksturë të pabarabartë dhe absorbim të mirë.",
    specs: [
      "Absorbimi i zërit: 0,60 (H) αw",
      "Zbutje e zërit: 32 dB"
    ]
  },

  {
    name: "AMF THERMATEX SYMETRA",
    image: "../images/kcs/thermatex-symetra.png",
    description: "Pllakë me vrima uniforme dhe mbrojtje nga zjarri.",
    specs: [
      "Absorbimi i zërit: 0,70 αw",
      "Zbutje e zërit: 34 dB"
    ]
  },

  {
    name: "AMF THERMATEX THERMACLEAN S",
    image: "../images/kcs/thermatex-thermaclean-s.png",
    description: "Tavan higjienik me rezistencë ndaj mikrobeve dhe pastrim të lehtë.",
    specs: [
      "Absorbimi i zërit: 0,10 (L) αw",
      "Reflektim i dritës: 81%",
      "Zbutje e zërit: 34 dB",
      "ISO 4"
    ]
  },

  {
    name: "AMF THERMATEX LAGUNA",
    image: "../images/kcs/thermatex-laguna.png",
    description: "Tavan modern me strukturë të ngjashme me pika uji.",
    specs: [
      "Absorbimi i zërit: 0,10 (L) αw",
      "Reflektim i dritës: 88%",
      "Zbutje e zërit: 34 dB"
    ]
  },

  {
    name: "AMF THERMATEX LAGUNA MICRO PERF",
    image: "../images/kcs/thermatex-laguna-micro-perf.png",
    description: "Version mikro-perforuar me pamje të pastër dhe performancë të mirë.",
    specs: [
      "Absorbimi i zërit: 0,60 αw",
      "Reflektim i dritës: 88%",
      "Zbutje e zërit: 34 dB"
    ]
  },

  {
    name: "AMF THERMATEX AQUATEC",
    image: "../images/kcs/thermatex-aquatec.png",
    description: "Zgjidhje për zona me lagështi ekstreme dhe kërkesa higjienike.",
    specs: [
      "Absorbimi i zërit: 0,90 αw",
      "Reflektim i dritës: 88%",
      "Rezistencë ndaj lagështirës: deri 100% RH",
      "ISO 3"
    ]
  },

  {
    name: "AMF THERMATEX ANTARIS C",
    image: "../images/kcs/thermatex-antaris-c.png",
    description: "Pllakë minerale me rezistencë të lartë ndaj zjarrit dhe akustikë të mirë.",
    specs: [
      "Absorbimi i zërit: 0,70 αw",
      "Reflektim i dritës: 86%",
      "ISO 5"
    ]
  }
]

};

//function to generate product html
function generateProductHTML(product) {
  const specsHTML = product.specs.length > 0 
    ? `<br><ul>${product.specs.map(spec => `<li>${spec}</li>`).join('')}</ul>`
    : '';
    
  const whatsappText = encodeURIComponent(`Përshëndetje! Dua të pyes për ${product.name}`);
  
  return `
    <div class="produkt">
      <div class="img-container">
        <div class="img-box">
          <span><img src="${product.image}" onclick="openLightbox('${product.image}')" alt="${product.name}"></span>
        </div>
      </div>
      <div class="produkt-details">
        <div class="produkt-name">
          <strong><h1>${product.name}</h1></strong>
        </div>
        <div class="produkt-pershkrim">
          <p>${product.description}</p>
          ${specsHTML}
        </div>
        <div class="produkt-contact">
          <a href="https://wa.me/355XXXXXXXXX?text=${whatsappText}" class="contact-btn" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i> Kontakto për Çmim
          </a>
        </div>
      </div>
    </div>
  `;
}

// Function to load products when page loads
function loadProducts() {
  // Load Profile products
  const profileContainer = document.getElementById('kcs');
  if (profileContainer && productsData.kcs) {
    profileContainer.innerHTML = productsData.kcs
      .map(product => generateProductHTML(product))
      .join('');
  }
}


// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', loadProducts);
