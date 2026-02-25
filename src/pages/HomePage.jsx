import React from 'react';
import heroImg from "../assets/images/hero.jpg";
import menCategory from "../assets/images/men-category.jpg";
import womenCategory from "../assets/images/women-category.jpg";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// This is our homepage - the first thing users see
// Think of it as the front window of a fancy store

const HomePage = () => {
  // Animation for hero section
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Animation for categories
  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - big banner at the top */}
      <motion.section
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative h-screen max-h-[800px] overflow-hidden"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="MODA Fashion - Latest Collection"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Content overlay */}
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Discover Your Style
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Explore our curated collection of premium fashion for men and women
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-x-4"
            >
              <Link
                to="/men"
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Shop Men
              </Link>
              <Link
                to="/women"
                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors duration-300"
              >
                Shop Women
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 dark:text-white"
        >
          Shop by Category
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Category */}
          <motion.div
            variants={categoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-lg"
          >
            <Link to="/men">
              <img
                src={menCategory}
                alt="Men's Fashion"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-2xl md:text-3xl font-serif font-bold">
                  Men's Collection
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Women's Category */}
          <motion.div
            variants={categoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-lg"
          >
            <Link to="/women">
              <img
                src={womenCategory}
                alt="Women's Fashion"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-2xl md:text-3xl font-serif font-bold">
                  Women's Collection
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;