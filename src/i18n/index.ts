import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";

const resources = {
  en: {
    translation: en, // Assuming en.json contains the translations under a 'translation' key
  },
  ar: {
    translation: ar, // Assuming ar.json contains the translations under a 'translation' key
  },
};

i18n

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "en", // default language to use.
  });

export default { i18n };
