import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/moda-logo.jpeg";
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import ThemeToggler from './ThemeToggler';

// This is the top navigation bar that appears on every page
// Think of it as the table of contents for our website

// Navigation links data - we put them in an array so we can loop through them
// This follows the DRY principle (Don't Repeat Yourself)
const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/men', name: 'Men' },
  { path: '/women', name: 'Women' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Listen for scroll events to change navbar appearance
  // This is like having a sensor that detects how far down the page we've scrolled
  useEffect(() => {
    const handleScroll = () => {
      // If we've scrolled more than 10 pixels, change the navbar
      setIsScrolled(window.scrollY > 10);
    };

    // Add the scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up - remove the listener when component is removed
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Animation variants for the navbar
  const navbarVariants = {
    hidden: { y: -100 },        // Start 100 pixels above screen
    visible: { 
      y: 0,                     // End at normal position
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Animation for mobile menu sliding in
  const mobileMenuVariants = {
    hidden: { x: '-100%' },     // Start off screen to the left
    visible: { 
      x: 0,                      // End at normal position
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { 
      x: '-100%',                // Slide out to left when closing
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-white dark:bg-gray-900'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo section - left side */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src={logo}
                  alt="MODA Fashion" 
                  className="h-12 w-auto"
                  loading="eager"  // Load logo immediately since it's above the fold
                />
                <span className="font-serif text-xl font-bold dark:text-white">
                  MODA
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - center section (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    relative px-3 py-2 text-sm font-medium
                    transition-colors duration-300
                    ${location.pathname === link.path
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                    }
                  `}
                >
                  {link.name}
                  {/* Animated underline for active link */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <ThemeToggler />
              
              {/* Cart icon */}
              <Link
                to="/cart"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 relative"
                aria-label="Shopping cart"
              >
                <FiShoppingCart className="w-5 h-5" />
                {/* Cart count badge - will be updated later */}
                <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* User icon / Login */}
              <Link
                to="/login"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                aria-label="Login or sign up"
              >
                <FiUser className="w-5 h-5" />
              </Link>

              {/* Mobile menu button - only visible on mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - dark overlay behind menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-900 z-50 md:hidden shadow-xl"
            >
              <div className="p-4">
                <div className="mb-8">
                  <img 
                    src={logo}
                    alt="MODA Fashion" 
                    className="h-8 w-auto mb-2"
                  />
                </div>
                
                {/* Mobile navigation links */}
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`
                        block px-4 py-2 text-base font-medium rounded-lg
                        transition-colors duration-300
                        ${location.pathname === link.path
                          ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;