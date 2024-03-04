import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from '../common/i18n';

const messages = {
    en: {
        translations: common.en,
    },
    ja: {
        translations: common.ja,
    },
};

i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    ns: 'translations',
    debug: false,
    resources: messages,
    compatibilityJSON: 'v3',
});

export default i18next;
