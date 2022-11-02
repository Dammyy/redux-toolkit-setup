import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from '../Snackbar/snackbarSlice';

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});

export default store
