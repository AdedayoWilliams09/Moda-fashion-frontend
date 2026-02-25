import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';

// This configures our central storage room
// It combines all our different storage rooms (slices) into one big storage
export const store = configureStore({
  reducer: {
    theme: themeReducer,  // Our theme settings storage
  },
});