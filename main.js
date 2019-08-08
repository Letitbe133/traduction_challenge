// languages array
const languages = {
  en: {
    title: "Welcome to my site",
    tagline: "Anyone can become an entrepreneur !",
    description: "Twelve steps to build ambitious startups in Europe",
    langSwitcher: "Français"
  },
  fr: {
    title: "Bienvenue sur mon site",
    tagline: "Tout le monde peut devenir entrepreneur !",
    description: "12 étapes pour construire des startups ambitieuses en Europe",
    langSwitcher: "English"
  }
};

// DOM elements
const title = document.querySelector("title");
const tagline = document.querySelector("h1");
const description = document.querySelector("p");
const switcher = document.querySelector("#language-switcher");
const html = document.querySelector("html");

// functions
const selectLanguage = event => {
  let choice = event.target.dataset.lang;
  changeLanguage(choice);
  // console.log(choice);
};

const changeLanguage = lang => {
  title.innerText = languages[lang].title;
  tagline.innerText = languages[lang].tagline;
  description.innerText = languages[lang].description;
  switcher.innerText = languages[lang].langSwitcher;
  switcher.dataset.lang = lang == "en" ? "fr" : "en";
  html.setAttribute("lang", lang);
};

// event listener
switcher.addEventListener("click", selectLanguage);
