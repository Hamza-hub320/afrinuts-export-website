import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations from src folder
import homeEN from './locales/en/home.json';
import homeFR from './locales/fr/home.json';
import commonEN from './locales/en/common.json';
import commonFR from './locales/fr/common.json';
import aboutEN from './locales/en/about.json';
import aboutFR from './locales/fr/about.json';
import productsEN from './locales/en/products.json';
import productsFR from './locales/fr/products.json';
import farmEN from './locales/en/farm.json';
import farmFR from './locales/fr/farm.json';
import contactEN from './locales/en/contact.json';
import contactFR from './locales/fr/contact.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['home', 'common', 'about', 'products', 'farm', 'contact'],
    defaultNS: 'common',
    resources: {
      en: {
        home: homeEN,
        common: commonEN,
        about: aboutEN,
        products: productsEN,
        farm: farmEN,
        contact: contactEN
      },
      fr: {
        home: homeFR,
        common: commonFR,
        about: aboutFR,
        products: productsFR,
        farm: farmFR,
        contact: contactFR
      }
    },
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng'
    }
  });

export default i18n;