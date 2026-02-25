import React from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center dark:text-white">
          Sign In
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Login functionality coming soon. You'll be able to sign in to your account.
        </p>
      </div>
    </motion.div>
  );
};

export default LoginPage;