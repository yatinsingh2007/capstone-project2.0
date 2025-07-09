import { useContext } from 'react';
import {Link ,  useLocation} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider';

const Nav = () => {
  const location = useLocation()
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={`p-3 rounded-3xl shadow-xl md:mr-0 fixed md:left-10 lg:left-48 lg:right-56 md:right-14 md:top-2 left-5 right-5 border ${theme === 'dark' ? 'bg-black border-white' : 'bg-white border-black'} fixed z-10`}>
      <div className='flex gap-2 justify-between mx-4 md:mx-5 md:gap-9'>
        <Link to='/main'>
          <div
            className={`${location.pathname === '/main' ? `flex flex-col justify-between gap-2 items-center border-b-2 ${theme === 'dark' ? 'border-white text-white' : 'border-black text-black'}` : 'flex flex-col justify-between gap-2 items-center'} transition hover:scale-105`}
          >
            <span className={`material-symbols-outlined ${theme === 'light' ? 'text-black' : 'text-white'}`}>home</span>
            <p className={`md:text-base text-xs ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{fontFamily : "'Nunito Sans'"}}>Home</p>
          </div>
        </Link>

        <Link to='/opper'>
          <div
            className={`${location.pathname === '/opper' ? `flex flex-col justify-between gap-2 items-center border-b-2 ${theme === 'dark' ? 'border-white' : 'border-black'}` : 'flex flex-col justify-between gap-2 items-center'} transition hover:scale-105`}
          >
            <span className={`material-symbols-outlined ${theme === 'light' ? 'text-black' : 'text-white'}`}>groups</span>
            <p className={`md:text-base text-xs ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{fontFamily : "'Nunito Sans'"}}>Opportunities</p>
          </div>
        </Link>

        <Link to='/job'>
          <div
            className={`${location.pathname === '/job' ? `flex flex-col justify-between gap-2 items-center border-b-2 ${theme === 'dark' ? 'border-white' : 'border-black'}` : 'flex flex-col justify-between gap-2 items-center'} transition hover:scale-105`}
          >
            <span className={`material-symbols-outlined ${theme === 'light' ? 'text-black' : 'text-white'}`}>work</span>
            <p className={`md:text-base text-xs ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{fontFamily : "'Nunito Sans'"}}>Jobs</p>
          </div>
        </Link>

        <Link to='/notifications'>
          <div
            className={`${location.pathname === '/notifications' ? `flex flex-col justify-between gap-2 items-center border-b-2 ${theme === 'dark' ? 'border-white' : 'border-black'}` : 'flex flex-col justify-between gap-2 items-center'} transition hover:scale-105`}
          >
            <span className={`material-symbols-outlined ${theme === 'light' ? 'text-black' : 'text-white'}`}>notifications</span>
            <p className={`md:text-base text-xs ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{fontFamily : "'Nunito Sans'"}}>Notifications</p>
          </div>
        </Link>

        <Link to='/myProfile'>
          <div
          className={`${location.pathname === '/myProfile' ? `flex flex-col justify-between gap-2 items-center border-b-2 ${theme === 'dark' ? 'border-white' : 'border-black'}` : 'flex flex-col justify-between gap-2 items-center'} transition hover:scale-105`}>
            <span className={`material-symbols-outlined ${theme === 'light' ? 'text-black' : 'text-white'}`}>person</span>
            <p className={`md:text-base text-xs ${theme === 'light' ? 'text-black' : 'text-white'}`} style={{fontFamily : "'Nunito Sans'"}}>Profile</p>
          </div>
        </Link>

      </div>
    </nav>
  );
};

export default Nav;