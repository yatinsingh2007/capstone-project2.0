import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { motion } from 'framer-motion';
import logo from '../assets/nexthorizon-high-resolution-logo-transparent.png';

const HomeNav = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', to: '/faqs' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-500 ${isDark ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-200'
        }`}
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold"
        >
          <img src={logo} alt="NextHorizon Logo" className="h-8 w-auto" />
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 font-medium">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.to ? (
                <Link
                  to={link.to}
                  className={`transition-colors duration-200 relative group ${isDark ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-700 hover:text-sky-600'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isDark ? 'bg-emerald-400' : 'bg-sky-600'
                    }`} />
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`transition-colors duration-200 relative group ${isDark ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-700 hover:text-sky-600'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isDark ? 'bg-emerald-400' : 'bg-sky-600'
                    }`} />
                </a>
              )}
            </motion.li>
          ))}

          {/* Login Button */}
          <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${isDark
                  ? 'bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-white/20'
                  : 'bg-black text-white hover:bg-gray-900 shadow-lg hover:shadow-black/20'
                }`}
            >
              Login
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default HomeNav;