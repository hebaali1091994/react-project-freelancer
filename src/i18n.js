import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import comin_en from "./translation/en.json";
import comin_ar from "./translation/ar.json";
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: comin_en,
  },
  ar: {
    translation: comin_ar,
  },
};


i18n.
use(initReactI18next).
use(LanguageDetector).init({
  resources,
  //lang: "en",
  fallbackLng:"en",
  detection: {
    order: [
      "localStorage",
      "querystring",
      "cookie",
      "navigator",
      "htmlTag",
      "path",
      "subdomain",
    ],

    caches: ["localStorage", "cookie"],
  },
  // keySeparator: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
