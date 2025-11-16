import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';
import languageReducer from './features/languageSlice';
import formReducer from './features/formSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      language: languageReducer,
      form: formReducer,
    },
  });
};

