import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';

// This is the main component that controls which page to show
// Think of it as a TV remote that changes channels

function App() {
  const location = useLocation();
  const { mode } = useSelector((state) => state.theme);

  // Apply dark mode class to html element
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <AnimatePresence mode="wait">
      {/* Routes tells React Router which component to show for each URL */}
      <Routes location={location} key={location.pathname}>
        {/* All routes inside MainLayout will have the navbar and footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="men" element={<MenPage />} />
          <Route path="women" element={<WomenPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;