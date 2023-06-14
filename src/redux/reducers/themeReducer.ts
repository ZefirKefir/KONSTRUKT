import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface themeReducer {
  theme: string,
}

export const themeReducer = createSlice({
  name: 'themer',
  initialState: {
    theme: localStorage.getItem('theme') || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  },
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    }
  },
})

export const { setTheme } = themeReducer.actions;
export default themeReducer.reducer;