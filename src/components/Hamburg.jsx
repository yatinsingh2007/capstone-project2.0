import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/nexthorizon-high-resolution-logo-transparent.png";

const Hamburg = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', to: '/faqs' },
    { name: 'Contact', to: '/contact' },
    { name: 'Login', to: '/login' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'
        }`}
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-xl transition-colors duration-200 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            }`}
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          {navOpen ? (
            <X className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setNavOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 h-full w-80 shadow-2xl ${isDark ? 'bg-gray-950' : 'bg-white'
                }`}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}">
                  <img src={logo} alt="Logo" className="h-8 w-auto" />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setNavOpen(false)}
                    className={`p-2 rounded-xl ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                  >
                    <X className={`h-6 w-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col p-6 space-y-2 flex-1">
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {link.to ? (
                        <Link
                          to={link.to}
                          onClick={() => setNavOpen(false)}
                          className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isDark
                              ? 'text-gray-300 hover:bg-gray-800 hover:text-emerald-400'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-sky-600'
                            }`}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setNavOpen(false)}
                          className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isDark
                              ? 'text-gray-300 hover:bg-gray-800 hover:text-emerald-400'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-sky-600'
                            }`}
                        >
                          {link.name}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>

                {/* Footer */}
                <div className={`p-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <p className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    © 2025 NextHorizon
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Hamburg;
