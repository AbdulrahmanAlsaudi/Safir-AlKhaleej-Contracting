const langBtn = document.getElementById("langToggle");

let currentLang = "ar";

const translations = {
  ar: {
    dir: "rtl",
    lang: "ar",
    brandMain: "شركة سفــير الخليج",
    brandSub: "للمــــــــقـــــاولات",
    
    // sidebar 
sidebar: ["الرئيسية", "الخدمات", "اعرف أكثر", "طلب مشروع", "تواصل معنا"],

    // Hero
    heroTitle: "شـركة سفــير الخليج للمـقاولات",
    heroSub: "خدمات احترافية في المقاولات العامة، الكهرباء، السباكة، والصيانة العامة.",

    // About
    aboutTitle: "مــن نحـن",
    aboutText:
      "شـركة سفــير الخليج للمـقاولات تقدم خدمات احترافية في مجالات المقاولات الهندسية، تنفيذ أعمال البناء والتشطيبات، الكهرباء، السباكة، الصيانة، أعمال الحدادة والدهان، وعزل الأسطح والمنشأت. نلتزم بأعلى معايير الجودة والدقة في تنفيذ المشاريع من خلال فريق هندسي وفني متخصص.",

    // Services
    servicesTitle: "خـدمـاتـنا",

    services: [
      "مقاولات عامة",
      "صيانة عامة",
      "صيانة وتشطيب",
      "أعمال الكهرباء",
      "أعمال سباكة"
    ],

    // Features
    featuresTitle: "تعـرف أكثر علـى خـدماتـنا",
    features: [
      ["مقاولات عامة", "تنفيذ معماري وإنشائي احترافي"],
      ["صيانة عامة", "أعمال صيانة شاملة للمباني القائمة"],
      ["الترميم", "أعمال ترميم شاملة للمباني القائمة"],
      ["البناء والتشطيب", "تنفيذ أعمال البناء والتشطيبات النهائية بجودة"],
      ["أعمال كهربائية وسباكة", "جميع الأعمال المتعلقة بالكهرباء والسباكة"],
      ["أعمال الحدادة والدهان", "تصنيع وتركيب الهناجر والدهانات الداخلية والخارجية"],
      ["العزل", "حلول فعالة لعزل الأسطح والمنشأت"]
    ],

    // Order
    orderTitle: "طلــب مـشروع",
    labels: [
      "اسم العميل",
      "رقم الهاتف",
      "عنوان العميل",
      "الخدمة المطلوبة",
      "البريد الإلكتروني"
    ],
    submit: "إرسال الطلب",

    // Contact
    contactBrand: "شـركة سفــير الخليج للمـقاولات",
contactDesc:
  "مؤسسة مقاولات متخصصة في مجال البناء، ومجال الكهرباء والسباكة، حيث تمتلك المؤسسة أفضل الكوادر والمعدات والأدوات الحديثة لضمان تنفيذ الأعمال بجودة واحترافية عالية.",
contactUs: "للتواصل بنا",
followUs: "تابعنا على",

    footer: "© 2025 شـركة سفــير الخليج للمـقاولات"
  },

  en: {
    dir: "ltr",
    lang: "en",
    brandMain: "Safir AlKhaleej",
    brandSub: "Contracting",
    
sidebar: ["Home", "Services", "About", "Project Request", "Contact"],

    heroTitle: "Safir AlKhaleej Contracting",
    heroSub:
      "Professional services in general contracting, electricity, plumbing, and maintenance.",

    aboutTitle: "About Us",
    aboutText:
      "Safir AlKhaleej Contracting provides professional services in engineering design and contracting, construction and finishing works, electrical and plumbing services, metal and painting works, and insulation solutions. We are committed to the highest standards of quality and precision.",

    servicesTitle: "Our Services",

    services: [
      "General Contracting",
      "General Maintenance",
      "Maintenance & Finishing",
      "Electrical Work",
      "Water Plumbing"
    ],

    featuresTitle: "Learn More About Our Services",
    features: [
      ["General Contracting", "Professional architectural and construction implementation"],
      ["General Maintenance", "Comprehensive maintenance of existing buildings"],
      ["Construction & Finishing", "High-quality construction and finishing works"],
      ["Renovation", "Comprehensive renovation services"],
      ["Electrical & Plumbing", "All electrical and plumbing services"],
      ["Metal & Painting Works", "Hangars manufacturing and painting works"],
      ["Insulation", "Effective insulation solutions for buildings"]
    ],

    orderTitle: "Project Request",
    labels: [
      "Customer Name",
      "Phone Number",
      "Address",
      "Required Service",
      "Email Address"
    ],
    submit: "Submit Request",

    contactBrand: "Safir AlKhaleej Contracting",
contactDesc:
  "A contracting company specialized in construction, electrical and plumbing works, equipped with the best teams, tools and modern equipment to ensure high-quality and professional execution.",
contactUs: "Contact Us",
followUs: "Follow Us",

    footer: "© 2025 Safir AlKhaleej Contracting"
  }
};

/*langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(currentLang);
  langBtn.innerHTML = `🌐 ${currentLang === "ar" ? "EN" : "AR"}`;
});*/

function applyLanguage(lang) {
  const t = translations[lang];

  document.documentElement.dir = t.dir;
  document.documentElement.lang = t.lang;

  //document.querySelector(".brand").textContent = t.brand;//
  
  
    const brandEl = document.querySelector(".brand");
  if (brandEl) {
    brandEl.innerHTML = `
      ${t.brandMain}
      <span>${t.brandSub}</span>
    `;
  }
    
  // Sidebar translation
document.querySelectorAll(".sidebar-nav ul li a").forEach((link, i) => {
  link.textContent = t.sidebar[i];
});
  document.querySelector(".hero h1").textContent = t.heroTitle;
  document.querySelector(".hero-sub").textContent = t.heroSub;

  document.querySelector("#about h2").textContent = t.aboutTitle;
  document.querySelector("#about p").textContent = t.aboutText;

  document.querySelector("#services h2").textContent = t.servicesTitle;

  document.querySelectorAll(".services-grid .card h3").forEach((el, i) => {
    el.textContent = t.services[i];
  });

  document.querySelector(".features .title").textContent = t.featuresTitle;

  document.querySelectorAll(".feature").forEach((feature, i) => {
    feature.querySelector("h3").textContent = t.features[i][0];
    feature.querySelector("p").textContent = t.features[i][1];
  });

  document.querySelector("#order h2").textContent = t.orderTitle;

  document.querySelectorAll(".order-form label").forEach((label, i) => {
    label.textContent = t.labels[i];
  });

  document.querySelector(".submit-btn").textContent = t.submit;

// Contact section
document.querySelector(".logo2 div").textContent = t.contactBrand;
document.querySelector(".contact-desc").textContent = t.contactDesc;

// العناوين داخل قسم التواصل
const contactHeadings = document.querySelectorAll("#contact h3");
contactHeadings[0].textContent = t.contactUs;
contactHeadings[1].textContent = t.followUs;
  document.querySelector(".footer p").textContent = t.footer;
}
