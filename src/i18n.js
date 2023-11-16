// // i18n.js
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from "i18next-http-backend";

// i18n
//   .use(HttpBackend)
//   .use(initReactI18next)
//   .use(LanguageDetector)
//   .init({
//     lng: "en",
//     fallbackLng: "en",
//     supportedLngs: ["en", "ar"],
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       //load api
//       loadPath: `http://localhost:4000/locales/{{lng}}/{{ns}}s.json`
//   },
//   });

// export default i18n;


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import arTranslation from "./locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;