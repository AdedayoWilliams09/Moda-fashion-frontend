import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/moda-logo.jpeg";
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

// This is the footer that appears at the bottom of every page
// Think of it as the end credits of a movie

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Footer sections data
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Men\'s Collection', path: '/men' },
        { name: 'Women\'s Collection', path: '/women' },
        { name: 'New Arrivals', path: '/new' },
        { name: 'Sale', path: '/sale' },
      ]
    },
    {
      title: 'Help',
      links: [
        { name: 'FAQs', path: '/faqs' },
        { name: 'Shipping', path: '/shipping' },
        { name: 'Returns', path: '/returns' },
        { name: 'Size Guide', path: '/size-guide' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', path: '/about' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  // Animation for footer sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,  // Each child appears 0.1 seconds after the previous
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src={logo}
                alt="MODA Fashion" 
                className="h-12 w-auto"
                loading="lazy"
              />
              <span className="font-serif text-xl font-bold dark:text-white">
                MODA
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Premium fashion for the modern individual. Discover our curated collection of men's and women's clothing, from everyday essentials to luxury designer pieces.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 bg-white dark:bg-gray-800 rounded-full
                    text-gray-600 dark:text-gray-400
                    hover:text-black dark:hover:text-white
                    hover:shadow-md
                    transition-all duration-300
                  "
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="
                        text-gray-600 dark:text-gray-400
                        hover:text-black dark:hover:text-white
                        transition-colors duration-300
                        text-sm
                      "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar with copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="
            mt-12 pt-8
            border-t border-gray-200 dark:border-gray-800
            text-center text-gray-600 dark:text-gray-400 text-sm
          "
        >
          <p>&copy; {currentYear} MODA Fashion. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;