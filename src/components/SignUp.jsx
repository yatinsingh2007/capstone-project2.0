import { useRef, useState, useContext } from 'react';
import { Eye, EyeOff, Sun, Moon, MoveLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { Helmet } from 'react-helmet';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { AnimatedGridPattern } from './ui/grid-background';
import { Spotlight } from './ui/spotlight';

const SignUp = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(true);
  const [enterName, setEnterName] = useState(true);
  const [enterEmail, setEnterEmail] = useState(true);
  const [enterPassword, setEnterPassword] = useState(true);
  const [isSubmitted, setIsSubmited] = useState(false)
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      setIsSubmited(true)
      const response = await fetch('https://nexthorizon-backend-1.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data)
      toast.success('User Created SucessFully')
      navigate('/login')
    } catch (error) {
      console.error('Error:', error);
      setIsSubmited(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Sign Up - NextHorizon</title>
        <meta name="description" content="Create your NextHorizon account to connect with professionals and explore opportunities." />
      </Helmet>

      <section className={`relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'dark bg-gray-950' : 'bg-gray-50'}`}>

        {/* Aceternity UI Backgrounds */}
        <div className="absolute inset-0 z-0">
          <AnimatedGridPattern className="opacity-50" />
          <Spotlight
            className="-top-40 right-0 md:right-60 md:-top-20"
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

        {/* SignUp Card */}
        <Card className={`relative z-10 w-full max-w-md backdrop-blur-xl border transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700/50' : 'bg-white/70 border-white/50'}`}>
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Create Account
            </CardTitle>
            <CardDescription className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Join us to connect with professionals
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-5 w-full" onSubmit={handleSignUp}>
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Full Name
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`h-12 rounded-xl transition-all duration-200 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900 placeholder:text-gray-400'}`}
                  placeholder="John Doe"
                  required
                  onBlur={(e) => {
                    if (!e.target.value) {
                      setEnterName(false);
                    } else {
                      setEnterName(true);
                    }
                  }}
                  ref={nameRef}
                />
                {!enterName && <p className="text-red-500 text-xs mt-1">Please enter a valid name</p>}
              </div>

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
                  onBlur={(e) => {
                    if (!e.target.value) {
                      setEnterEmail(false);
                    } else {
                      setEnterEmail(true);
                    }
                  }}
                  ref={emailRef}
                />
                {!enterEmail && <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>}
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
                    placeholder="Create a password"
                    required
                    onBlur={(e) => {
                      if (!e.target.value) {
                        setEnterPassword(false);
                      } else {
                        setEnterPassword(true);
                      }
                    }}
                    ref={passwordRef}
                  />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer hover:opacity-80 transition-opacity ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
                    onClick={() => setTogglePassword(!togglePassword)}
                  >
                    {!togglePassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </div>
                </div>
                {!enterPassword && <p className="text-red-500 text-xs mt-1">Please enter a valid password</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitted}
                className={`h-12 rounded-xl font-bold mt-2 w-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
              >
                {!isSubmitted ? 'Sign Up' : (
                  <div className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-black' : 'border-white'}`}></div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default SignUp;