import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  results: {
    team: [],
    services: [],
  },
  isSearching: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.results = { team: [], services: [] };
      state.isSearching = false;
    },
  },
});

export const { setQuery, setResults, setIsSearching, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;

