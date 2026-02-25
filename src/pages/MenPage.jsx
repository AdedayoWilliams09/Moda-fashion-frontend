import React from 'react';
import { motion } from 'framer-motion';

const MenPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 dark:text-white">
          Men's Collection
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Our men's collection is coming soon. Stay tuned for premium fashion essentials and luxury pieces.
        </p>
      </div>
    </motion.div>
  );
};

export default MenPage;