import React, { useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { auth } from '../fireBase/fireBaseConfig';  
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { toast } from 'react-toastify';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);
  const [enterEmail, setEnterEmail] = useState(true);
  const [enterPassword, setEnterPassword] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created:', userCredential.user);
      toast.success('Account created successfully!');
    } catch (error) {
      console.error('Error signing up:', error.message);
        toast.error('Error creating account. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col border-2 border-gray-300 rounded-2xl shadow-lg p-8 md:p-20">
        <h1 className="font-bold text-black text-2xl md:text-4xl mb-6" style={{ fontFamily: '"Lexend Zetta"' }}>
          Create Account
        </h1>

        <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full">
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
                ref={emailRef}
            />
            {!enterEmail && <p className="text-red-500 text-sm">Please enter a valid email</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-black text-sm mb-1">Password:</label>
            <input
              type={!togglePassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full"
              placeholder="Create a password"
              required
                onBlur={(e) => {
                    if (!e.target.value) {
                    setEnterPassword(false);
                    passwordRef.current.style.border = '1px solid red';
                    } else {
                    setEnterPassword(true);
                    passwordRef.current.style.border = '';
                    }
                }}
                ref={passwordRef}
            />
            {!enterPassword && <p className="text-red-500 text-sm">Please enter a valid password</p>}
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
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;