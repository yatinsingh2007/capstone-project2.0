import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const Nav = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const linkClasses = (path) =>
    `flex flex-col justify-center gap-1 items-center rounded-xl px-4 py-2 transition-all duration-300 ${location.pathname === path
      ? `${theme === 'dark' ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-500/30' : 'bg-opacity-20 bg-black text-black'} scale-105`
      : `hover:bg-opacity-10 ${theme === 'dark' ? 'hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-300' : 'hover:bg-black text-gray-500 hover:text-black'}`
    }`;

  const iconClasses = "";
  const textClasses = "md:text-xs text-[10px] font-semibold tracking-wide";

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 md:top-6 top-auto bottom-6 md:bottom-auto z-50 border backdrop-blur-xl shadow-2xl rounded-full px-6 py-3 transition-all duration-500 ${theme === 'dark'
        ? 'bg-slate-900/80 border-slate-700/70 shadow-emerald-500/10'
        : 'bg-white/70 border-white/50'
        }`}
    >
      <div className="flex items-center gap-2 md:gap-6">
        <Link to="/main">
          <div className={linkClasses('/main')}>
            <span className="material-symbols-outlined text-xl md:text-2xl">home</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Home
            </p>
          </div>
        </Link>

        <Link to="/opper">
          <div className={linkClasses('/opper')}>
            <span className="material-symbols-outlined text-xl md:text-2xl">groups</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Network
            </p>
          </div>
        </Link>

        <Link to="/job">
          <div className={linkClasses('/job')}>
            <span className="material-symbols-outlined text-xl md:text-2xl">work</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Jobs
            </p>
          </div>
        </Link>

        <Link to="/notifications">
          <div className={linkClasses('/notifications')}>
            <span className="material-symbols-outlined text-xl md:text-2xl">notifications</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Alerts
            </p>
          </div>
        </Link>

        <Link to="/myProfile">
          <div className={linkClasses('/myProfile')}>
            <span className="material-symbols-outlined text-xl md:text-2xl">person</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Profile
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;