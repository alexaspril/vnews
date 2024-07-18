import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "news": "News",
      "loadmore": "Load more news",
    }
  },
  ru: {
    translation: {
      "news": "Новости",
      "loadmore": "Больше новостей",
    }
  },
  // другие языки
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // по умолчанию
    keySeparator: false,
    interpolation: {
      escapeValue: false, // уже экранирует
    }
  });

export default i18n;
