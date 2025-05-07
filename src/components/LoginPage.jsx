import React, { useState , useRef } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../fireBase/fireBaseConfig';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import {Eye , EyeOff} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enterEmail, setEnterEmail] = useState(true);
  const [enterPassword, setEnterPassword] = useState(true);
  const [togglePassword , setTogglePassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      toast.success('Logged in successfully!');
      navigate('/profiledetails');
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };
  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      toast.success('Logged in successfully!');
      navigate('/profiledetails');
    } catch (error) {
      console.error("Email Sign-In Error:", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col border-2 border-gray-300 rounded-2xl shadow-lg p-8 md:p-20 md:mr-0">
        <h1 className="font-bold text-black text-2xl md:text-4xl mb-2" style={{ fontFamily: '"Lexend Zetta"' }}>
          Welcome Back
        </h1>
        <p className="text-gray-600 font-light mb-6 text-sm md:text-base" style={{ fontFamily: '"Nunito Sans"' }}>
          Continue with Google
        </p>

        <button 
          onClick={handleGoogleSignIn}
          className="rounded-lg bg-white border border-black p-2 flex items-center justify-center gap-3 hover:bg-gray-100 transition-all mb-6 w-full"
        >
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw"
            alt="Google Logo"
            className="h-5 w-5"
          />
          <span className="text-black text-sm md:text-base" style={{ fontFamily: '"Nunito Sans"' }}>
            Sign in with Google
          </span>
        </button>

        <div className="flex items-center gap-4 mb-6">
          <hr className="flex-grow border-t border-gray-400" />
          <p className="text-sm text-gray-500 font-light" style={{ fontFamily: '"Nunito Sans"' }}>
            or
          </p>
          <hr className="flex-grow border-t border-gray-400" />
        </div>

        <form onSubmit={handleEmailSignIn} className="flex flex-col gap-4 w-full">
  <div className="flex flex-col">
    <label className="text-black text-sm mb-1">Email:</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" 
      placeholder="Enter your email"
      required
      onBlur={(e) => {
        if (!e.target.value) {
          setEnterEmail(false);
          emailRef.current.style.border = '1px solid red';

        } else {
          setEnterEmail(true);
          emailRef.current.style.border = '';
        }
      }}
      ref = {emailRef}
    />
    {!enterEmail && <p className="text-red-500 text-sm">Please enter a valid email</p>}
  </div>
  <div>
`  <div className="flex flex-col">
    <label className="text-black text-sm mb-1">Password:</label>
    <input
      type={!togglePassword ? "text" : "password"}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full" 
      placeholder="Enter your password"
      required
      ref = {passwordRef}
      onBlur={(e) => {
        if (!e.target.value) {
          setEnterPassword(false);
          passwordRef.current.style.border = '1px solid red';
        } else {
          setEnterPassword(true);
          passwordRef.current.style.border = '';
        }
      }}
    />
    {!enterPassword && <p className="text-red-500 text-sm">Please enter a valid password</p>}
  </div>
  {!togglePassword ? (
    <div onClick={() => setTogglePassword(!togglePassword)}>
      <Eye size={20} />
    </div>
  ) : (
    <div onClick={() => setTogglePassword(!togglePassword)}>
      <EyeOff size={20} />
    </div>
  )}
  </div>
  <button
    type="submit"
    className="rounded-lg bg-[#090DFF] p-2 text-white font-semibold mt-4 hover:opacity-90 transition-all w-full"
    onClick={(e) => {
      e.preventDefault();
      if (emailRef.current.value === '' || passwordRef.current.value === '') {
        emailRef.current.style.border = '1px solid red';
        passwordRef.current.style.border = '1px solid red';
        toast.error('Please fill in all fields');
      }
      else {
        handleEmailSignIn(e);
        navigate('/profiledetails');
        toast.success('Logged in successfully!');
      }
    }}
  >
    Sign In
  </button>

  <p className="text-sm text-gray-600 font-light mt-4 text-center" style={{ fontFamily: '"Nunito Sans"' }}>
    Don't have an account?{' '}
    <Link to="/signup" className="text-blue-600 hover:underline">
      Sign Up
    </Link>
  </p>
</form>
      </div>
    </div>
  );
};
export default LoginPage;