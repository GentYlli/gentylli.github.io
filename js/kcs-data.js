const productsData = {
    kcs: [
  {
    name_sq: "AMF ECOMIN ORBIT",
    name_en: "AMF ECOMIN ORBIT",
    image: "../images/kcs/ecomin-orbit.png",
    description_sq: "Zgjidhje tavani me kosto efektive me sipërfaqe të hollë dhe teksturë të imët.",
    description_en: "Cost-effective ceiling solution with smooth surface and fine texture.",
    specs_sq: [
      "Absorbimi i zërit: 0,20 (L) αw",
      "Reflektim i dritës: 85%"
    ],
    specs_en: [
      "Sound absorption: 0.20 (L) αw",
      "Light reflectance: 85%"
    ]
  },

  {
    name_sq: "AMF ECOMIN PLANET",
    name_en: "AMF ECOMIN PLANET",
    image: "../images/kcs/ecomin-planet.png",
    description_sq: "Tavan ekonomik me sipërfaqe uniforme dhe thithje të mirë akustike.",
    description_en: "Economical ceiling with uniform surface and good acoustic absorption.",
    specs_sq: [
      "Absorbimi i zërit: 0,55 αw",
      "Reflektim i dritës: 85%"
    ],
    specs_en: [
      "Sound absorption: 0.55 αw",
      "Light reflectance: 85%"
    ]
  },

  {
    name_sq: "AMF ECOMIN FILIGRAN",
    name_en: "AMF ECOMIN FILIGRAN",
    image: "../images/kcs/ecomin-filigran.png",
    description_sq: "Tavan me vrima, i përshtatshëm për zona që kërkojnë thithje të mirë të zërit.",
    description_en: "Perforated ceiling suitable for areas requiring good sound absorption.",
    specs_sq: [
      "Absorbimi i zërit: 0,55 αw",
      "Reflektim i dritës: 86%"
    ],
    specs_en: [
      "Sound absorption: 0.55 αw",
      "Light reflectance: 86%"
    ]
  },

  {
    name_sq: "AMF THERMATEX THERMOFON",
    name_en: "AMF THERMATEX THERMOFON",
    image: "../images/kcs/thermatex-thermofon.png",
    description_sq: "Pllakë tavani me sipërfaqe të lëmuar dhe dizajn modern për rehati të lartë akustike.",
    description_en: "Ceiling tile with smooth surface and modern design for high acoustic comfort.",
    specs_sq: [
      "Absorbimi i zërit: 0,80 (H) αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.80 (H) αw",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX SCHLICHT HYGENA",
    name_en: "AMF THERMATEX SCHLICHT HYGENA",
    image: "../images/kcs/thermatex-schlicht-hygena.png",
    description_sq: "Pllakë e lëmuar dhe elegante, ideale për ambiente të qeta dhe higjienike.",
    description_en: "Smooth and elegant tile, ideal for quiet and hygienic environments.",
    specs_sq: [
      "Absorbimi i zërit: 0,10 (L) αw",
      "Reflektim i dritës: 92%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.10 (L) αw",
      "Light reflectance: 92%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX ALPHA",
    name_en: "AMF THERMATEX ALPHA",
    image: "../images/kcs/thermatex-alpha.png",
    description_sq: "Pllakë moderne e bardhë për thithje të shkëlqyer të zërit.",
    description_en: "Modern white tile for excellent sound absorption.",
    specs_sq: [
      "Absorbimi i zërit: 0,95 αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.95 αw",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX ALPHA ONE",
    name_en: "AMF THERMATEX ALPHA ONE",
    image: "../images/kcs/thermatex-alpha-one.png",
    description_sq: "Zgjidhje optimale për zona me kërkesa maksimale akustike.",
    description_en: "Optimal solution for areas with maximum acoustic requirements.",
    specs_sq: [
      "Absorbimi i zërit: 1,00 αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 1.00 αw",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX ALPHA HD",
    name_en: "AMF THERMATEX ALPHA HD",
    image: "../images/kcs/thermatex-alpha-hd.png",
    description_sq: "Kombinim i shkëlqyer i absorbimit dhe zbutjes së zërit.",
    description_en: "Excellent combination of sound absorption and attenuation.",
    specs_sq: [
      "Absorbimi i zërit: 0,90 αw",
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.90 αw",
      "Sound attenuation: 34 dB",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX ALPHA E ZEZË",
    name_en: "AMF THERMATEX ALPHA BLACK",
    image: "../images/kcs/thermatex-alpha-bl.png",
    description_sq: "Pllakë tavani e zezë me performancë shumë të lartë akustike dhe pamje elegante.",
    description_en: "Black ceiling tile with very high acoustic performance and elegant appearance.",
    specs_sq: [
      "Absorbimi i zërit: 1,00 αw",
      "Reduktimi i zërit: Rw 14 dB"
    ],
    specs_en: [
      "Sound absorption: 1.00 αw",
      "Sound reduction: Rw 14 dB"
    ]
  },

  {
    name_sq: "AMF THERMATEX ALPHA E NGJYROSUR",
    name_en: "AMF THERMATEX ALPHA COLORED",
    image: "../images/kcs/thermatex-alpha-colored.png",
    description_sq: "Pllakë moderne në ngjyra krem dhe argjend me absorbim të lartë të zërit.",
    description_en: "Modern tile in cream and silver colors with high sound absorption.",
    specs_sq: [
      "Absorbimi i zërit: 0,95 αw",
      "Reduktimi i zërit: Rw 14 dB"
    ],
    specs_en: [
      "Sound absorption: 0.95 αw",
      "Sound reduction: Rw 14 dB"
    ]
  },

  {
    name_sq: "AMF THERMATEX ACOUSTIC",
    name_en: "AMF THERMATEX ACOUSTIC",
    image: "../images/kcs/thermatex-acoustic.png",
    description_sq: "Sipërfaqe e laminuar me absorbim dhe izolim të shkëlqyer akustik.",
    description_en: "Laminated surface with excellent acoustic absorption and insulation.",
    specs_sq: [
      "Absorbimi i zërit: 0,65 (H) αw",
      "Zbutje e zërit: 40 dB",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.65 (H) αw",
      "Sound attenuation: 40 dB",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX DB ACOUSTIC",
    name_en: "AMF THERMATEX DB ACOUSTIC",
    image: "../images/kcs/thermatex-db-acoustic.png",
    description_sq: "Zgjidhje ideale për zbutje maksimale të zërit dhe dizajn të përjetshëm.",
    description_en: "Ideal solution for maximum sound attenuation and timeless design.",
    specs_sq: [
      "Absorbimi i zërit: 0,65 (H) αw",
      "Zbutje e zërit: 41 dB (24 mm)",
      "Zbutje e zërit: 43 dB (30 mm)",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.65 (H) αw",
      "Sound attenuation: 41 dB (24 mm)",
      "Sound attenuation: 43 dB (30 mm)",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX SF ACOUSTIC",
    name_en: "AMF THERMATEX SF ACOUSTIC",
    image: "../images/kcs/thermatex-sf-acoustic.png",
    description_sq: "Sistem tavani me profile pothuajse të padukshme.",
    description_en: "Ceiling system with nearly invisible profiles.",
    specs_sq: [
      "Absorbimi i zërit: 0,65 (H) αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.65 (H) αw",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX SILENCE",
    name_en: "AMF THERMATEX SILENCE",
    image: "../images/kcs/thermatex-silence.png",
    description_sq: "Tavan i dyfishtë me lesh mineral për kërkesa akustike shumë të larta.",
    description_en: "Double ceiling with mineral wool for very high acoustic requirements.",
    specs_sq: [
      "Absorbimi i zërit: 0,85 (H) αw",
      "Reflektim i dritës: 88%",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.85 (H) αw",
      "Light reflectance: 88%",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX FEINSTRATOS",
    name_en: "AMF THERMATEX FEINSTRATOS",
    image: "../images/kcs/thermatex-feinstratos.png",
    description_sq: "Pamje uniforme falë teksturës së imët.",
    description_en: "Uniform appearance thanks to fine texture.",
    specs_sq: [
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 85%"
    ],
    specs_en: [
      "Sound attenuation: 34 dB",
      "Light reflectance: 85%"
    ]
  },

  {
    name_sq: "AMF THERMATEX FEINSTRATOS MICRO PERF",
    name_en: "AMF THERMATEX FEINSTRATOS MICRO PERF",
    image: "../images/kcs/thermatex-feinstratos-micro-perf.png",
    description_sq: "Teksturë e imët me përthithje të mirë të zërit.",
    description_en: "Fine texture with good sound absorption.",
    specs_sq: [
      "Absorbimi i zërit: 0,70 αw",
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 85%"
    ],
    specs_en: [
      "Sound absorption: 0.70 αw",
      "Sound attenuation: 34 dB",
      "Light reflectance: 85%"
    ]
  },

  {
    name_sq: "AMF THERMATEX STAR",
    name_en: "AMF THERMATEX STAR",
    image: "../images/kcs/thermatex-star.png",
    description_sq: "Pllakë me vrima të imta, ideale për zyra dhe klasa.",
    description_en: "Tile with micro-perforations, ideal for offices and classrooms.",
    specs_sq: [
      "Absorbimi i zërit: 0,60 αw",
      "Zbutje e zërit: 34 dB",
      "Reflektim i dritës: 88%"
    ],
    specs_en: [
      "Sound absorption: 0.60 αw",
      "Sound attenuation: 34 dB",
      "Light reflectance: 88%"
    ]
  },

  {
    name_sq: "AMF THERMATEX MERCURE",
    name_en: "AMF THERMATEX MERCURE",
    image: "../images/kcs/thermatex-mercure.png",
    description_sq: "Panel modern me vrima të imta dhe cilësi të lartë.",
    description_en: "Modern panel with micro-perforations and high quality.",
    specs_sq: [
      "Absorbimi i zërit: 0,60 αw",
      "Reflektim i dritës: 85%"
    ],
    specs_en: [
      "Sound absorption: 0.60 αw",
      "Light reflectance: 85%"
    ]
  },

  {
    name_sq: "AMF THERMATEX FEINFRESKO",
    name_en: "AMF THERMATEX FEINFRESKO",
    image: "../images/kcs/thermatex-feinfresko.png",
    description_sq: "Sipërfaqe me teksturë të pabarabartë dhe absorbim të mirë.",
    description_en: "Surface with uneven texture and good absorption.",
    specs_sq: [
      "Absorbimi i zërit: 0,60 (H) αw",
      "Zbutje e zërit: 32 dB"
    ],
    specs_en: [
      "Sound absorption: 0.60 (H) αw",
      "Sound attenuation: 32 dB"
    ]
  },

  {
    name_sq: "AMF THERMATEX SYMETRA",
    name_en: "AMF THERMATEX SYMETRA",
    image: "../images/kcs/thermatex-symetra.png",
    description_sq: "Pllakë me vrima uniforme dhe mbrojtje nga zjarri.",
    description_en: "Tile with uniform perforations and fire protection.",
    specs_sq: [
      "Absorbimi i zërit: 0,70 αw",
      "Zbutje e zërit: 34 dB"
    ],
    specs_en: [
      "Sound absorption: 0.70 αw",
      "Sound attenuation: 34 dB"
    ]
  },

  {
    name_sq: "AMF THERMATEX THERMACLEAN S",
    name_en: "AMF THERMATEX THERMACLEAN S",
    image: "../images/kcs/thermatex-thermaclean-s.png",
    description_sq: "Tavan higjienik me rezistencë ndaj mikrobeve dhe pastrim të lehtë.",
    description_en: "Hygienic ceiling with antimicrobial resistance and easy cleaning.",
    specs_sq: [
      "Absorbimi i zërit: 0,10 (L) αw",
      "Reflektim i dritës: 81%",
      "Zbutje e zërit: 34 dB",
      "ISO 4"
    ],
    specs_en: [
      "Sound absorption: 0.10 (L) αw",
      "Light reflectance: 81%",
      "Sound attenuation: 34 dB",
      "ISO 4"
    ]
  },

  {
    name_sq: "AMF THERMATEX LAGUNA",
    name_en: "AMF THERMATEX LAGUNA",
    image: "../images/kcs/thermatex-laguna.png",
    description_sq: "Tavan modern me strukturë të ngjashme me pika uji.",
    description_en: "Modern ceiling with water drop-like structure.",
    specs_sq: [
      "Absorbimi i zërit: 0,10 (L) αw",
      "Reflektim i dritës: 88%",
      "Zbutje e zërit: 34 dB"
    ],
    specs_en: [
      "Sound absorption: 0.10 (L) αw",
      "Light reflectance: 88%",
      "Sound attenuation: 34 dB"
    ]
  },

  {
    name_sq: "AMF THERMATEX LAGUNA MICRO PERF",
    name_en: "AMF THERMATEX LAGUNA MICRO PERF",
    image: "../images/kcs/thermatex-laguna-micro-perf.png",
    description_sq: "Version mikro-perforuar me pamje të pastër dhe performancë të mirë.",
    description_en: "Micro-perforated version with clean appearance and good performance.",
    specs_sq: [
      "Absorbimi i zërit: 0,60 αw",
      "Reflektim i dritës: 88%",
      "Zbutje e zërit: 34 dB"
    ],
    specs_en: [
      "Sound absorption: 0.60 αw",
      "Light reflectance: 88%",
      "Sound attenuation: 34 dB"
    ]
  },

  {
    name_sq: "AMF THERMATEX AQUATEC",
    name_en: "AMF THERMATEX AQUATEC",
    image: "../images/kcs/thermatex-aquatec.png",
    description_sq: "Zgjidhje për zona me lagështi ekstreme dhe kërkesa higjienike.",
    description_en: "Solution for areas with extreme humidity and hygiene requirements.",
    specs_sq: [
      "Absorbimi i zërit: 0,90 αw",
      "Reflektim i dritës: 88%",
      "Rezistencë ndaj lagështirës: deri 100% RH",
      "ISO 3"
    ],
    specs_en: [
      "Sound absorption: 0.90 αw",
      "Light reflectance: 88%",
      "Humidity resistance: up to 100% RH",
      "ISO 3"
    ]
  },

  {
    name_sq: "AMF THERMATEX ANTARIS C",
    name_en: "AMF THERMATEX ANTARIS C",
    image: "../images/kcs/thermatex-antaris-c.png",
    description_sq: "Pllakë minerale me rezistencë të lartë ndaj zjarrit dhe akustikë të mirë.",
    description_en: "Mineral tile with high fire resistance and good acoustics.",
    specs_sq: [
      "Absorbimi i zërit: 0,70 αw",
      "Reflektim i dritës: 86%",
      "ISO 5"
    ],
    specs_en: [
      "Sound absorption: 0.70 αw",
      "Light reflectance: 86%",
      "ISO 5"
    ]
  }
]

};

// Function to generate product HTML with current language
function generateProductHTML(product) {
  const lang = currentLang || 'sq';
  const name = product[`name_${lang}`] || product.name_sq;
  const description = product[`description_${lang}`] || product.description_sq;
  const specs = product[`specs_${lang}`] || product.specs_sq || [];
  
  const specsHTML = (specs && specs.length > 0)
    ? `<br><ul>${specs.map(spec => `<li>${spec}</li>`).join('')}</ul>`
    : '';
    
  const whatsappText = encodeURIComponent(`Përshëndetje! Dua të pyes për ${name}`);
  const contactBtnText = translations[lang]?.contact_for_price || "Kontakto për Çmim";
  
  return `
    <div class="produkt">
      <div class="img-container">
        <div class="img-box">
          <span><img src="${product.image}" onclick="openLightbox('${product.image}')" alt="${name}"></span>
        </div>
      </div>
      <div class="produkt-details">
        <div class="produkt-name">
          <strong><h1>${name}</h1></strong>
        </div>
        <div class="produkt-pershkrim">
          <p>${description}</p>
          ${specsHTML}
        </div>
        <div class="produkt-contact">
          <a href="https://wa.me/355695731993?text=${whatsappText}" class="contact-btn" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i> ${contactBtnText}
          </a>
        </div>
      </div>
    </div>
  `;
}

// Function to load products when page loads
function loadProducts() {
  const kcsContainer = document.getElementById('kcs');
  if (kcsContainer && productsData.kcs) {
    kcsContainer.innerHTML = productsData.kcs
      .map(product => generateProductHTML(product))
      .join('');
  }
}

// Reload products when language changes
function reloadProducts() {
  loadProducts();
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', loadProducts);

// Listen for custom language change event
window.addEventListener('languageChanged', reloadProducts);