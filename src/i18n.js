    // src/i18n.js
    import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';

    import enTranslation from './locales/en/translation.json';
    import ruTranslation from './locales/ru/translation.json';
    import uzTranslation from './locales/uz/translation.json';


    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources: {
          en: {
            translation: enTranslation
          },
          ru: {
            translation: ruTranslation
          },
          uz: {
            translation: uzTranslation
          }
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language if translation is missing
        interpolation: {
          escapeValue: false // react already escapes by default
        }
      });

    export default i18n;