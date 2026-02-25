import { createSlice } from '@reduxjs/toolkit';

// This is like a small storage room just for theme settings
// We use createSlice to make it easy to manage theme state

// Check if user already had a theme preference saved
const getInitialTheme = () => {
  // Look in localStorage (browser's memory) for saved theme
  const savedTheme = localStorage.getItem('theme');
  // Check if user prefers dark mode on their device
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Return saved theme, or dark if preferred, or light as default
  return savedTheme || (prefersDark ? 'dark' : 'light');
};

const initialState = {
  mode: getInitialTheme(),  // Start with the theme we figured out above
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // This is like a light switch - it toggles between light and dark
    toggleTheme: (state) => {
      // Switch from light to dark or dark to light
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      // Save to localStorage so it remembers next time
      localStorage.setItem('theme', state.mode);
      
      // Also update the HTML element's class for Tailwind dark mode
      if (state.mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

// Export the action so components can use it
export const { toggleTheme } = themeSlice.actions;

// Export the reducer to be used in the store
export default themeSlice.reducer;