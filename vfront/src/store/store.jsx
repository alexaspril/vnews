import { configureStore } from '@reduxjs/toolkit';
import pageReducer, { setPage } from './pageSlice';
import languageReducer, { setLanguage } from './languageSlice';
import newsReducer from './newsSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
    language: languageReducer,
    news: newsReducer,
  },
});

const savedPage = localStorage.getItem('currentPage');
if (savedPage) {
  store.dispatch(setPage(savedPage));
}

const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  store.dispatch(setLanguage(savedLanguage));
}
