import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Signup details:", { email, password });
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
            />
          </div>

          <div className="flex flex-col">
            <label className="text-black text-sm mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg bg-gray-100 p-2 text-black border border-gray-300 text-center w-full"
              placeholder="Create a password"
              required
            />
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