const languages = {
  en: {
    title: "Welcome to my site",
    tagline: "Anyone can become an entrepreneur !",
    description: "Twelve chapters to build ambitious startups in Europe",
    langSwitcher: "Français"
  },
  fr: {
    title: "Bienvenue sur mon site",
    tagline: "Tout le monde peut devenir un entrepreneur !",
    description: "12 étapes pour construire des startups ambitieuses en Europe",
    langSwitcher: "English"
  }
};

const title = document.querySelector("title");
const tagline = document.querySelector("h1");
const description = document.querySelector("p");
const switcher = document.querySelector("#language-switcher");
const html = document.querySelector("html");

const selectLanguage = e => {
  let choice = e.target.dataset.lang;
  changeLanguage(choice);
  console.log(choice);
};

const changeLanguage = lang => {
  title.innerText = languages[lang].title;
  tagline.innerText = languages[lang].tagline;
  description.innerText = languages[lang].description;
  switcher.innerText = languages[lang].langSwitcher;
  switcher.dataset.lang = lang == "en" ? "fr" : "en";
  html.setAttribute("lang", lang);
};

switcher.addEventListener("click", selectLanguage);
