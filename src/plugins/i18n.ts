import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import common from '../common/i18n';

const messages = {
    en: {
        translation: common.en,
    },
    ja: {
        translation: common.ja,
    },
    vi: {
        translation: common.vi,
    },
};

console.log('messages: ', messages);

i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    resources: messages,
    compatibilityJSON: 'v3',
});

export default i18next;
