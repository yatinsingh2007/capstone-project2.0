import React, { useRef } from 'react';

const Nav = () => {
  const homeRef = useRef(null);
  const groupRef = useRef(null);
  const workRef = useRef(null);
  const chatRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null)

  const clearBorders = () => {
    homeRef.current.style.borderBottom = '';
    groupRef.current.style.borderBottom = '';
    workRef.current.style.borderBottom = '';
    chatRef.current.style.borderBottom = '';
    notificationRef.current.style.borderBottom = '';
    profileRef.current.style.borderBottom = '';
  };

  const handleClick = (ref) => {
    clearBorders();
    ref.current.style.borderBottom = '2px solid black';
  };

  return (
    <div className=' bg-white p-3 rounded-3xl shadow-xl md:mr-0 fixed md:left-10 lg:left-48 lg:right-56 md:right-14 md:top-2 left-5'>
      <div className='flex gap-2 justify-between mx-4 md:mx-5 md:gap-9'>

        <a href='#'>
          <div
            ref={homeRef}
            className='flex flex-col justify-between gap-2 items-center'
            onClick={(e) => {
              e.preventDefault();
              handleClick(homeRef);
            }}
          >
            <span className="material-symbols-outlined">home</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Home</p>
          </div>
        </a>

        <a href='#'>
          <div
            ref={groupRef}
            className='flex flex-col justify-between gap-2 items-center'
            onClick={(e) => {
              e.preventDefault();
              handleClick(groupRef);
            }}
          >
            <span className="material-symbols-outlined">groups</span>
            <p className='md:text-base text-xs' style={{fontFamily : '"Nunito Sans"'}}>Opportunities</p>
          </div>
        </a>

        <a href='#'>
          <div
            ref={workRef}
            className='flex flex-col justify-between gap-2 items-center'
            onClick={(e) => {
              e.preventDefault();
              handleClick(workRef);
            }}
          >
            <span className="material-symbols-outlined">work</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Jobs</p>
          </div>
        </a>

        <a href='#'>
          <div
            ref={chatRef}
            className='flex flex-col justify-between gap-2 items-center'
            onClick={(e) => {
              e.preventDefault();
              handleClick(chatRef);
            }}
          >
            <span className="material-symbols-outlined">chat</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Messages</p>
          </div>
        </a>

        <a href='#'>
          <div
            ref={notificationRef}
            className='flex flex-col justify-between gap-2 items-center'
            onClick={(e) => {
              e.preventDefault();
              handleClick(notificationRef);
            }}
          >
            <span className="material-symbols-outlined">notifications</span>
            <p className='md:text-base text-xs' style={{fontFamily : "'Nunito Sans'"}}>Notifications</p>
          </div>
        </a>

        <a href='#'>
          <div ref={profileRef}
          className='flex flex-col justify-between gap-2 items-center'
          onClick={(e) => {
            e.preventDefault();
            handleClick(profileRef)
          }}>
            <span className="material-symbols-outlined">person</span>
            <p className='md:text-base text-xs'>Profile</p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Nav;