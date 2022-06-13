import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        backend: {
            loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
        },
        supportedLngs: ['en', 'ru', 'uk'],
        // lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        ns: ['common', 'home', 'login', 'form', 'signup'],
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            useSuspense: true,
        },
    })

export default i18n
