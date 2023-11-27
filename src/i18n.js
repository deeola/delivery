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


// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import enTranslation from "./locales/en.json";
// import arTranslation from "./locales/ar.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: enTranslation },
//     ar: { translation: arTranslation },
//   },
//   lng: "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HttpApi from "i18next-http-backend";


// const langs = "en" || "ar";


// const getCustomHeaders = () => {
//   return { "x-localization": i18n.language || "en" };
// };


// let state = {
//   myVariable: "en",
// };

// export const getMyVariable = () => state.myVariable;

// console.log(state.myVariable)

// export const setMyVariable = (newValue) => {

//   state.myVariable = newValue;
//   console.log("Updated myVariable:", state.myVariable);
// };

// console.log("new Updated myVariable:", state.myVariable)



// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .init({
//     lng: "en",
//     fallbackLng: "en",
//     debug: true,
//     supportedLngs: ["en", "ar"],
//     initImmediate: false,
//     backend: {
//       loadPath: "https://devadmin.mstqbl.com/api/v1/lang",
//       customHeaders: { "x-localization": state.myVariable},
//       parse: (result) => {
//         try {
     
          

//           const translationData = JSON.parse(result);
        

//           const flattenedData = {};
     

//           translationData.data.forEach((item) => {
//             // Assuming each item has a unique key
//             flattenedData[item.key] = item.value;
//           });

//           return flattenedData;
//         } catch (error) {
//           console.error("Error loading translations:", error);
//           return {};
//         }
//       }
//     },
//   });


let myVariable = 'en';

const getCustomHeaders = () => {
  return { 'x-localization': i18n.language || 'en' };
};

export const getMyVariable = () => myVariable;

export const setMyVariable = (newValue) => {
  myVariable = newValue;
  console.log('Updated myVariable:', myVariable);
};

export const initializeI18n = () => {
  i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    supportedLngs: ["en", "ar"],
    initImmediate: false,
    backend: {
      loadPath: "https://devadmin.mstqbl.com/api/v1/lang",
      customHeaders: { "x-localization": myVariable},
      parse: (result) => {
        try {
     
          

          const translationData = JSON.parse(result);
        

          const flattenedData = {};
     

          translationData.data.forEach((item) => {
            // Assuming each item has a unique key
            flattenedData[item.key] = item.value;
          });

          return flattenedData;
        } catch (error) {
          console.error("Error loading translations:", error);
          return {};
        }
      }
    },
  });
};

initializeI18n()
    

export default i18n;

// customHeaders: {
//   "x-localization": i18n.language !== "undefined" ? "ar" : "en",
// },