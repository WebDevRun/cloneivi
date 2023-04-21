import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend) // lazy loads translations from /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'Welcome': 'Welcome',
        },
      },
      ru: {
        translation: {
          'Welcome': 'Привет',
        },
      },
    },
    fallbackLng: 'ru',
    lng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
