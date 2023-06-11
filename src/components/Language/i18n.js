import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const locales = {
    en: 'English',
    vi: 'Tiếng Việt',
};
const resources = {
    en: {
        header: {
            upload: 'Upload',
            login: 'Login',
        },

        sidebar: {
            foryou: 'For you',
            following: 'Following',
            explore: 'Explore',
            live: 'Live',
            suggestedAccounts: 'Suggested accounts',
        },
    },
    vi: {
        header: {
            upload: 'Tải lên',
            login: 'Đăng nhập',
        },

        sidebar: {
            foryou: 'Dành cho bạn',
            following: 'Đang theo dõi',
            explore: 'Khám phá',
            live: 'Live',
            suggestedAccounts: 'Các tài khoản đang theo dõi',
        },
    },
};
const defaultNS = 'header';

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',
        ns: ['header', 'sidebar'],
        fallbackLng: 'vi',
        defaultNS,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
