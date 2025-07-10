import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const Nav = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const linkClasses = (path) =>
    `flex flex-col justify-around gap-1 items-center rounded-lg px-2 py-1 transition transform hover:scale-105 hover:bg-opacity-20 ${
      location.pathname === path
        ? `border-b-2 ${
            theme === 'dark' ? 'border-purple-400 text-purple-300' : 'border-purple-600 text-purple-700'
          }`
        : ''
    }`;

  const iconClasses = theme === 'light' ? 'text-black' : 'text-white';
  const textClasses = `md:text-sm text-xs font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`;

  return (
    <nav
      className={`p-3 rounded-3xl shadow-xl fixed md:left-10 lg:left-48 lg:right-56 md:right-14 md:top-2 left-5 right-5 border z-10 ${
        theme === 'dark' ? 'bg-black border-neutral-700' : 'bg-white border-neutral-200'
      }`}
    >
      <div className="flex justify-between mx-2 md:mx-5 md:gap-8">
        <Link to="/main">
          <div className={linkClasses('/main')}>
            <span className={`material-symbols-outlined ${iconClasses}`}>home</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Home
            </p>
          </div>
        </Link>

        <Link to="/opper">
          <div className={linkClasses('/opper')}>
            <span className={`material-symbols-outlined ${iconClasses}`}>groups</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Opportunities
            </p>
          </div>
        </Link>

        <Link to="/job">
          <div className={linkClasses('/job')}>
            <span className={`material-symbols-outlined ${iconClasses}`}>work</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Jobs
            </p>
          </div>
        </Link>

        <Link to="/notifications">
          <div className={linkClasses('/notifications')}>
            <span className={`material-symbols-outlined ${iconClasses}`}>notifications</span>
            <p className={textClasses} style={{ fontFamily: "'Nunito Sans'" }}>
              Notifications
            </p>
          </div>
        </Link>

        <Link to="/myProfile">
          <div className={linkClasses('/myProfile')}>
            <span className={`material-symbols-outlined ${iconClasses}`}>person</span>
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