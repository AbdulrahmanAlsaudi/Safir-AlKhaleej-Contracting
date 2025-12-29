const langDropdown = document.querySelector(".lang-dropdown");
const langToggle = document.querySelector(".lang-toggle");

langToggle.addEventListener("click", () => {
  langDropdown.classList.toggle("open");
});

document.querySelectorAll(".lang-menu li").forEach(item => {
  item.addEventListener("click", () => {
    const selectedLang = item.dataset.lang;
    currentLang = selectedLang;
    applyLanguage(selectedLang);

    langToggle.innerHTML =
      '<img src="img/icon/translate_icon.svg" class="lang-icon">';

    langDropdown.classList.remove("open");
  });
});