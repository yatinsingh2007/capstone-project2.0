import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { Button } from './ui/button';
import { AnimatedGridPattern } from './ui/grid-background';
import { Spotlight } from './ui/spotlight';

const HeroSection = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

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

        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${theme === 'dark' ? 'bg-emerald-600' : 'bg-sky-400'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${theme === 'dark' ? 'bg-sky-600' : 'bg-emerald-400'}`}></div>
      </div>

      <div className={`relative z-10 text-center max-w-4xl px-4 md:px-8 backdrop-blur-sm rounded-3xl p-8 md:p-12 ${theme === 'dark' ? 'bg-gray-900/40' : 'bg-white/40'} border ${theme === 'dark' ? 'border-gray-700/50' : 'border-white/50'} shadow-2xl`} style={{ fontFamily: "'Sora', sans-serif" }}>
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Welcome to NextHorizon
        </h1>
        <h2 className={`text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r ${theme === 'dark' ? 'from-emerald-400 to-sky-400' : 'from-sky-600 to-emerald-600'} bg-clip-text text-transparent`}>
          Empower Your Career Today
        </h2>
        <p className={`text-lg md:text-xl mb-10 font-light ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Discover curated opportunities, connect with industry experts, and take your career to the next level.
        </p>
        <Button
          size="lg"
          className={`text-lg px-8 py-6 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Start Your Journey Today
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;