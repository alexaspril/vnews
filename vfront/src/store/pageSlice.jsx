import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: localStorage.getItem('currentPage') || '/news',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
      localStorage.setItem('currentPage', action.payload);
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
