import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import en from '../Locales/en/translation.json'
import fr from '../Locales/fr/translation.json'

const storedLanguage = localStorage.getItem("lang") || "en"

i18n.use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: en,
      },

      fr: {
        translation: fr,
      }
    },
    lng: storedLanguage, 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });