import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../api/newsApi';

export const loadNews = createAsyncThunk(
  'news/loadNews',
  async ({ page, perPage }, { getState }) => {
    const { news } = getState().news;
    const fetchedNews = await fetchNews(page, perPage);

    fetchedNews.sort((a, b) => b.id - a.id);

    const newNews = fetchedNews.filter(item => !news.some(existingItem => existingItem.id === item.id));

    return newNews;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    currentPage: 1,
    perPage: 10,
    selectedNews: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    incrementPerPage(state) {
      state.perPage += 10;
    },
    resetNews(state) {
      state.news = [];
      state.currentPage = 1;
      state.perPage = 10;
    },
    setSelectedNews(state, action) {
      state.selectedNews = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = [...state.news, ...action.payload];
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementPerPage, resetNews, setSelectedNews } = newsSlice.actions;
export default newsSlice.reducer;
