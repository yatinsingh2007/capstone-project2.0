import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="md:pl-16 pl-9">
          <h1 style={{ fontFamily: '"Lexend Zetta"' }} className="text-xl p-8">
            <span
              style={{ fontFamily: '"Nothing You Could Do",cursive' }}
              className="text-4xl"
            >
              Next
            </span>
            Horizon
          </h1>
          <div className="md:pl-10 p-4 md:pb-0">
            <motion.p
                className="md:m-56 md:mb-48 md:ml-4 mt-32 md:pt-0 text-left md:leading-loose md:text-3xl leading-loose mb-12 border-l-4 border-black pl-4 ml-2"
                style={{ fontFamily: '"Nunito Sans"' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                Discover your next big opportunity. At NextHorizon, we connect talent with the future. Whether you're starting your career or looking for your next leap, our platform is built to help you explore, grow, and succeed. Join us today and take the first step toward your Next Horizon.
            </motion.p>
            </div>

          <div className="md:pl-12 pb-8 flex md:gap-28 gap-48 md:pt-0 pt-28">
            <button className="rounded-lg bg-[#090DFF] p-2 text-white text-xl font-semibold"
            onClick={(e) => {
              e.preventDefault();
              navigate('/signup');
            }}
            style={{fontFamily: '"Karla", sans-serif'}}>
              SignUp
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}
              className="rounded-lg bg-[#090DFF] p-2 text-white text-xl font-semibold"
              style={{fontFamily: '"Karla", sans-serif'}}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;