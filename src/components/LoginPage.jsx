import React, { useState, useContext } from 'react';
import { Eye, EyeOff, Sun, Moon, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(true);
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
      <section className={`relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>

        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-50 ${theme === 'dark' ? 'bg-emerald-900' : 'bg-emerald-300'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-50 ${theme === 'dark' ? 'bg-sky-900' : 'bg-sky-300'}`}></div>
        </div>

        {/* Theme Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate('/')}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}
          >
            <MoveLeft size={20} />
          </button>
        </div>

        {/* Login Card */}
        <main className={`relative z-10 flex flex-col p-8 md:p-12 w-full max-w-md rounded-3xl shadow-2xl backdrop-blur-xl border transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700/50 text-white' : 'bg-white/70 border-white/50 text-gray-900'}`}>

          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold mb-2 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Welcome Back
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Enter your details to access your account
            </p>
          </div>

          <form className="flex flex-col gap-5 w-full" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1.5">
              <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`rounded-xl p-3.5 w-full transition-all duration-200 outline-none border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900 placeholder-gray-400'} focus:ring-4 focus:ring-blue-500/10`}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Password</label>
              <div className="relative">
                <input
                  type={!togglePassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`rounded-xl p-3.5 w-full transition-all duration-200 outline-none border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900 placeholder-gray-400'} focus:ring-4 focus:ring-blue-500/10`}
                  placeholder="••••••••"
                  required
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer hover:opacity-80 transition-opacity ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                  onClick={() => setTogglePassword(!togglePassword)}
                >
                  {!togglePassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`rounded-xl p-4 font-bold mt-4 w-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex justify-center items-center ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
            >
              {isSubmitted ? (
                <div className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-black' : 'border-white'}`}></div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default LoginPage;