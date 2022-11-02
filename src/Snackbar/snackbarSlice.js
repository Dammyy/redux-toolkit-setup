import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  message: '',
};

export const snackbarSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.show = true;
      state.message = action.payload;
    },
    hideSnackbar: (state) => {
      state.show = false;
      state.message = '';
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
