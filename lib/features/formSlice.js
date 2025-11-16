import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submittedEmails: [],
  isSubmitting: false,
  lastSubmission: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addSubmittedEmail: (state, action) => {
      if (!state.submittedEmails.includes(action.payload.toLowerCase())) {
        state.submittedEmails.push(action.payload.toLowerCase());
        state.lastSubmission = action.payload;
      }
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    clearLastSubmission: (state) => {
      state.lastSubmission = null;
    },
  },
});

export const { addSubmittedEmail, setIsSubmitting, clearLastSubmission } = formSlice.actions;
export default formSlice.reducer;

