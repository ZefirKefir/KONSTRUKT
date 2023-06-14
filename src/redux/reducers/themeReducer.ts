import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface themeReducer {
  theme: string,
}

const userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const themeReducer = createSlice({
  name: 'themer',
  initialState: {
    theme: localStorage.getItem('theme') || userTheme,
  },
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    }
  },
})

export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;