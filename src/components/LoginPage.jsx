import React, { useState, useContext } from 'react';
import { Eye, EyeOff, Sun, Moon, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { GridBackground, AnimatedGridPattern } from './ui/grid-background';
import { Spotlight } from './ui/spotlight';

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

      <section className={`relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'dark bg-gray-950' : 'bg-gray-50'}`}>

        {/* Aceternity UI Backgrounds */}
        <div className="absolute inset-0 z-0">
          <AnimatedGridPattern className="opacity-50" />
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill={theme === 'dark' ? '#10b981' : '#3b82f6'}
          />

          {/* Gradient Overlays */}
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-30 ${theme === 'dark' ? 'bg-emerald-600' : 'bg-emerald-400'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-30 ${theme === 'dark' ? 'bg-sky-600' : 'bg-sky-400'}`}></div>
        </div>

        {/* Theme Toggle */}
        <div className="absolute top-6 right-6 z-20">
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="outline"
            size="icon"
            className={`rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800/80 border-gray-700 text-yellow-400 hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-20">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            size="icon"
            className={`rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800/80 border-gray-700 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-50'}`}
          >
            <MoveLeft size={20} />
          </Button>
        </div>

        {/* Login Card */}
        <Card className={`relative z-10 w-full max-w-md backdrop-blur-xl border transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700/50' : 'bg-white/70 border-white/50'}`}>
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Welcome Back
            </CardTitle>
            <CardDescription className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Enter your details to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-5 w-full" onSubmit={handleLogin}>
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Email Address
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-12 rounded-xl transition-all duration-200 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900 placeholder:text-gray-400'}`}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={!togglePassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`h-12 rounded-xl pr-12 transition-all duration-200 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900 placeholder:text-gray-400'}`}
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

              <Button
                type="submit"
                disabled={isSubmitted}
                className={`h-12 rounded-xl font-bold mt-2 w-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
              >
                {isSubmitted ? (
                  <div className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-black' : 'border-white'}`}></div>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default LoginPage;