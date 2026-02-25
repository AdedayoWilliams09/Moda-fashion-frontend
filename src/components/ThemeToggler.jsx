import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

// This component is a button that switches between light and dark mode
// Think of it like a light switch for your entire website

const ThemeToggler = () => {
  // useDispatch is like a remote control to send commands to our storage
  const dispatch = useDispatch();
  
  // useSelector is like a window to look into our storage and see what's inside
  const { mode } = useSelector((state) => state.theme);

  // Animation settings for the button
  // These are like instructions for how the button should move
  const buttonAnimation = {
    whileHover: { scale: 1.1 },  // Make it 10% bigger when hovered
    whileTap: { scale: 0.9 },     // Make it 10% smaller when clicked
    transition: { type: "spring", stiffness: 400, damping: 17 }  // Springy feel
  };

  // Animation for the icon inside
  const iconAnimation = {
    initial: { rotate: -30, opacity: 0 },  // Start rotated and invisible
    animate: { rotate: 0, opacity: 1 },     // End normal and visible
    exit: { rotate: 30, opacity: 0 },       // When leaving, rotate and fade out
    transition: { duration: 0.2 }            // Take 0.2 seconds
  };

  return (
    <motion.button
      onClick={() => dispatch(toggleTheme())}
      className={`
        p-2 rounded-full
        ${mode === 'light' 
          ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' 
          : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
        }
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${mode === 'light' ? 'focus:ring-gray-500' : 'focus:ring-yellow-500'}
      `}
      aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      {...buttonAnimation}
    >
      {/* Show sun icon in light mode, moon icon in dark mode */}
      {/* We use motion.div to animate the icon when it changes */}
      <motion.div
        key={mode}  // Key changes when mode changes, triggering animation
        {...iconAnimation}
      >
        {mode === 'light' ? (
          <IoSunnyOutline className="w-5 h-5" />
        ) : (
          <IoMoonOutline className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggler;