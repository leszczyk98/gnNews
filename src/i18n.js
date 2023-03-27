import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    countries: {
      us: "United States",
      pl: "Poland",
      ar: "Argentina",
      au: "Australia",
      at: "Austria",
      be: "Belgium",
      br: "Brazil",
      bg: "Bulgaria",
      ca: "Canada",
      ch: "Switzerland",
      cn: "China",
      co: "Colombia",
      cu: "Cuba",
      cz: "Czech Republic",
      de: "Germany",
      eg: "Egypt",
      fr: "France",
      gb: "United Kingdom",
    },
    other: {
        view: "View:",
        click: "Click",
        articles: "{{ count }} articles",
        articles_one: "{{ count }} article",
    }
  },
  pl: {
    countries: {
      us: "Stany Zjednoczone",
      pl: "Polska",
      ar: "Argentyna",
      au: "Australia",
      at: "Austria",
      be: "Belgia",
      br: "Brazylia",
      bg: "Bułgaria",
      ca: "Kanada",
      ch: "Switzerland",
      cn: "Chiny",
      co: "Kolumbia",
      cu: "Kuba",
      cz: "Czechy",
      de: "Niemcy",
      eg: "Egipt",
      fr: "Francja",
      gb: "Wielka Brytania",
    },
    other: {
        view: "Widok:",
        click: "Click",
        articles: "{{ count }} artykułów",
        articles_one: "{{ count }} artykuł",
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
