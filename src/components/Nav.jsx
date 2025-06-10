import React from 'react';
import {Link ,  useLocation} from 'react-router-dom'
const Nav = () => {
  const location = useLocation()
  return (
    <div className=' bg-white p-3 rounded-3xl shadow-xl md:mr-0 fixed md:left-10 lg:left-48 lg:right-56 md:right-14 md:top-2 left-5 right-5'>
      <div className='flex gap-2 justify-between mx-4 md:mx-5 md:gap-9'>

        <Link to='/main'>
          <div
            className={location.pathname === '/main' ? `flex flex-col justify-between gap-2 items-center border-b-2 border-black` : `flex flex-col justify-between gap-2 items-center`}
          >
            <span className="material-symbols-outlined">home</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Home</p>
          </div>
        </Link>

        <Link to='/opper'>
          <div
            className={location.pathname === '/opper' ? `flex flex-col justify-between gap-2 items-center border-b-2 border-black`:`flex flex-col justify-between gap-2 items-center`}
          >
            <span className="material-symbols-outlined">groups</span>
            <p className='md:text-base text-xs' style={{fontFamily : '"Nunito Sans"'}}>Opportunities</p>
          </div>
        </Link>

        <Link to='/job'>
          <div
            className={location.pathname === '/job' ? `flex flex-col justify-between gap-2 items-center border-b-2 border-black` : `flex flex-col justify-between gap-2 items-center`}
          >
            <span className="material-symbols-outlined">work</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Jobs</p>
          </div>
        </Link>

        <a href='#'>
          <div
            className='flex flex-col justify-between gap-2 items-center'
          >
            <span className="material-symbols-outlined">chat</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Messages</p>
          </div>
        </a>

        <Link to='/notifications'>
          <div
            className={location.pathname === '/notifications' ? `flex flex-col justify-between gap-2 items-center border-b-2 border-black` : `flex flex-col justify-between gap-2 items-center`}
          >
            <span className="material-symbols-outlined">notifications</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Notifications</p>
          </div>
        </Link>

        <Link to='/myProfile'>
          <div
          className={location.pathname === '/myProfile' ? `flex flex-col justify-between gap-2 items-center border-b-2 border-black` : `flex flex-col justify-between gap-2 items-center`}>
            <span className="material-symbols-outlined">person</span>
            <p className='md:text-base text-xs'>Profile</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Nav;