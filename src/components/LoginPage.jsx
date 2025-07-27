import React, { useState,  useContext } from 'react';
import { Eye, EyeOff, Sun, Moon , MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import  {ThemeContext}  from '../context/ThemeProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const res = await fetch('https://nexthorizon-backend-1.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      toast.success(`Login Successfull`)
      localStorage.setItem('userData', JSON.stringify(data));
      navigate('/main');
    } catch (err) {
      console.error(err.message);
      setIsSubmitted(false);
      toast.error('Invalid credentials')
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - NextHorizon</title>
        <meta name="description" content="Login to your NextHorizon account to connect with professionals and explore opportunities." />
      </Helmet>
      <section className={`flex flex-col items-center justify-center min-h-screen px-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition"
        >
          {theme === 'light' ? <Moon className="text-white" /> : <Sun className="text-yellow-400" />}
        </button>
      </div>
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => navigate('/')}
          className={`${theme === 'light' ? 'bg-black' : 'bg-white'} rounded-full p-2 shadow-md transition`}
        >
          <MoveLeft className={`${theme === 'light' ? 'text-white' : 'text-black'}`}/>
        </button>
      </div>
      <main className="flex flex-col p-6 md:p-10 w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: "'Sora', sans-serif" }}>
          Login
        </h1>

        <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label className="text-current text-sm mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${theme === 'light' ? 'bg-gray-100 text-black border-2 border-black' : 'bg-black text-white border-2 border-white'}`}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-current text-sm mb-1">Password:</label>
            <div className="relative">
              <input
                type={!togglePassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${theme === 'light' ? 'bg-gray-100 text-black border-2 border-black' : 'bg-black text-white border-2 border-white'}`}
                placeholder="Enter your password"
                required
              />
              <div
                className={`absolute top-4 right-4 cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`}
                onClick={() => setTogglePassword(!togglePassword)}
              >
                {!togglePassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`rounded-full p-3 font-semibold mt-6 w-full transition ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'} flex justify-center`}
          >
            {isSubmitted ? <div className={`${theme === 'light' ? 'rounded-full border-2 border-t-white border-black animate-spin w-3 h-3' : 'rounded-full border-2 border-t-black border-white animate-spin w-3 h-3'}`}></div> : 'Login'}
          </button>
        </form>
      </main>
    </section>
    </>
  );
};

export default LoginPage;