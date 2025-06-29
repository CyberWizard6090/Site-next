'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme =
  | 'light'
  | 'dark'
  | 'black-white'
  | 'white-black'
  | 'brown-beige'
  | 'dark-blue-sky'
  | 'green-brown';

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
