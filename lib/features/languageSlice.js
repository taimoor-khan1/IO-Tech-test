import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locale: 'en',
  direction: 'ltr',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.locale = action.payload;
      state.direction = action.payload === 'ar' ? 'rtl' : 'ltr';
    },
    toggleLanguage: (state) => {
      const newLocale = state.locale === 'en' ? 'ar' : 'en';
      state.locale = newLocale;
      state.direction = newLocale === 'ar' ? 'rtl' : 'ltr';
    },
  },
});

export const { setLocale, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;

