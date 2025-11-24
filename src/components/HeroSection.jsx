import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { Button } from './ui/button';
import { AnimatedGridPattern } from './ui/grid-background';
import { Spotlight } from './ui/spotlight';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'dark bg-gray-950' : 'bg-gradient-to-br from-sky-50 to-emerald-50'}`}
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <AnimatedGridPattern className="opacity-30" />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill={theme === 'dark' ? '#10b981' : '#0ea5e9'}
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${theme === 'dark' ? 'bg-emerald-600' : 'bg-sky-400'}`}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${theme === 'dark' ? 'bg-sky-600' : 'bg-emerald-400'}`}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`relative z-10 text-center max-w-4xl px-4 md:px-8 backdrop-blur-sm rounded-3xl p-8 md:p-12 ${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} border ${theme === 'dark' ? 'border-gray-700/50' : 'border-white/50'} shadow-2xl`}
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className={`w-6 h-6 ${theme === 'dark' ? 'text-emerald-400' : 'text-sky-600'}`} />
          <span className={`text-sm font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-emerald-400' : 'text-sky-600'}`}>
            Professional Networking Platform
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
        >
          Welcome to NextHorizon
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className={`text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${theme === 'dark' ? 'from-emerald-400 to-sky-400' : 'from-sky-600 to-emerald-600'} bg-clip-text text-transparent`}
        >
          Empower Your Career Today
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl mb-10 font-light leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Discover curated opportunities, connect with industry experts, and take your career to the next level.
        </motion.p>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className={`text-lg px-8 py-6 rounded-xl font-bold transition-all duration-300 transform hover:shadow-2xl group ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
            onClick={(e) => {
              e.preventDefault();
              navigate("/signup");
            }}
          >
            <span className="flex items-center gap-2">
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-8 border-t border-opacity-20 border-gray-500"
        >
          {[
            { label: 'Active Users', value: '10K+' },
            { label: 'Job Posts', value: '5K+' },
            { label: 'Success Stories', value: '2K+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <p className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </p>
              <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;