import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This is the main layout that wraps all our pages
// Think of it as a frame that holds the navbar, content, and footer together

const MainLayout = () => {
  // Animation for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,  // Start 20 pixels down
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      y: -20,  // Exit by moving up 20 pixels
      transition: {
        duration: 0.3,
        ease: "easeIn",
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Navbar - always at the top */}
      <Navbar />
      
      {/* Main content area - grows to fill available space */}
      <main className="flex-grow pt-16"> {/* pt-16 adds padding top to account for fixed navbar */}
        <AnimatePresence mode="wait">
          {/* Outlet is where the current page will be rendered */}
          {/* The key helps Framer Motion know when the page changes */}
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Footer - always at the bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;