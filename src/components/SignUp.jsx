import { useRef, useState, useContext } from 'react';
import { Eye, EyeOff, Sun, Moon, MoveLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { Helmet } from 'react-helmet';

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
      <section className={`relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>

        <div className="absolute inset-0 z-0">
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-50 ${theme === 'dark' ? 'bg-emerald-900' : 'bg-emerald-300'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-50 ${theme === 'dark' ? 'bg-sky-900' : 'bg-sky-300'}`}></div>
        </div>

        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate('/')}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}
          >
            <MoveLeft size={20} />
          </button>
        </div>

        <main className={`relative z-10 flex flex-col p-8 md:p-12 w-full max-w-md rounded-3xl shadow-2xl backdrop-blur-xl border transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900/60 border-gray-700/50 text-white' : 'bg-white/70 border-white/50 text-gray-900'}`}>

          <div className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold mb-2 tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
              Create Account
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Join us to connect with professionals
            </p>
          </div>

          <form className="flex flex-col gap-5 w-full" onSubmit={handleSignUp}>
            <div className="flex flex-col gap-1.5">
              <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`rounded-xl p-3.5 w-full transition-all duration-200 outline-none border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900 placeholder-gray-400'} focus:ring-4 focus:ring-blue-500/10`}
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

            <div className="flex flex-col gap-1.5">
              <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`rounded-xl p-3.5 w-full transition-all duration-200 outline-none border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900 placeholder-gray-400'} focus:ring-4 focus:ring-blue-500/10`}
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

            <div className="flex flex-col gap-1.5">
              <label className={`text-xs font-semibold uppercase tracking-wider ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Password</label>
              <div className="relative">
                <input
                  type={!togglePassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`rounded-xl p-3.5 w-full transition-all duration-200 outline-none border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-50 border-gray-200 focus:border-blue-500 focus:bg-white text-gray-900 placeholder-gray-400'} focus:ring-4 focus:ring-blue-500/10`}
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

            <button
              type="submit"
              className={`rounded-xl p-4 font-bold mt-4 w-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex justify-center items-center ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
            >
              {
                !isSubmitted ? 'Sign Up' : (
                  <div className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${theme === 'dark' ? 'border-black' : 'border-white'}`}></div>
                )
              }
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default SignUp;