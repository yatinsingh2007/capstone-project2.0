import React, { useEffect, useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../fireBase/fireBaseConfig.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    fetch(`https://496115492955378:bG20cdKCbB3pT-oLj1I3pngiEBY@api.cloudinary.com/v1_1/drelh1bvn/resources/image`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Email Sign-In Error:", error.message);
    }
  };

  return (
    <>
    <div>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-700'>
        <div className='flex flex-col border-2 border-gray-300 rounded-lg shadow-slate-400 shadow-lg p-6'>
            <h1 className='font-semibold text-white mb-1 text-xl md:text-4xl'>Welcome Back</h1>
            <p className='text-neutral-200 font-extralight mb-5 text-xs md:text-base'>Continue With Google</p>
            <button onClick={handleGoogleSignIn} className='rounded-lg bg-white p-1 flex items-center justify-around'>
            <img class="image" data-alt-override="false" alt="G" srcset="
            https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw 1x,
            https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw 2x
          " width="48" height="48" loading="lazy" src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw" className='h-4 w-4 ml-3'/>
            <span className='text-black text-sm md:text-base'>Sign in with Google</span>
            </button>
            <p className='text-sm mt-2 text-slate-100 font-extralight'>------------Or Continue With------------</p>
          <form>
              <label className='text-white'>Email:</label>
              <br/>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='rounded-lg bg-gray-800 p-1 mt-2 mb-2 text-white border-2 border-stone-100 text-center'
                placeholder='Enter your email'
              />
              <br/>
              <label className='text-white'>Password:</label>
              <br/>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='rounded-lg bg-gray-800 p-1 mt-2 mb-2 text-white border-2 border-stone-100 text-center'
                placeholder='Enter your password'
              />
              <br/>
              <button
                onClick={handleEmailSignIn}
                className='rounded-lg bg-white p-1 mt-2 mb-2'
              >
                Sign In
              </button>
              <p className='text-sm mt-2 text-slate-100 font-extralight'>Don't have an account? <a href="/signup" className='text-blue-500'>Sign Up</a></p>
          </form>
        </div>
      </div>
    </div>
    </>
  )
};

export default LoginPage;
