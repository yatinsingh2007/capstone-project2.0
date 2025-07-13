import { useRef, useState, useContext } from 'react';
import { Eye, EyeOff  , Sun , Moon , MoveLeft} from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import  {ThemeContext}  from '../context/ThemeProvider';

const SignUp = () => {
  const navigate = useNavigate();
  const { theme , setTheme } = useContext(ThemeContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);
  const [enterName, setEnterName] = useState(true);
  const [enterEmail, setEnterEmail] = useState(true);
  const [enterPassword, setEnterPassword] = useState(true);
  const [isSubmitted , setIsSubmited] = useState(false)
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
        setIsSubmited(true)
        const response = await fetch('http://localhost:7777/auth/register', {
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
    <section className={`flex flex-col items-center justify-center min-h-screen px-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition"
        >
          {theme === 'light' ? <Moon className="text-white" /> : <Sun className="text-yellow-400" />}
        </button>
      </div>
      <div className='absolute left-4 top-4 z-10'>
        <button
          onClick={() => navigate('/')}
          className={`${theme === 'light' ? 'bg-black' : 'bg-white'} rounded-full p-2 shadow-md transition`}
        >
          <MoveLeft className={`${theme === 'light' ? 'text-white' : 'text-black'}`}/>
        </button>
      </div>
      <main className="flex flex-col p-6 md:p-10 w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: "'Sora', sans-serif" }}>
          Create Account
        </h1>

        <form className="flex flex-col gap-4 w-full" onSubmit={handleSignUp}>
          <div className="flex flex-col">
            <label className="text-current text-sm mb-1">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${theme === 'light' ? 'bg-gray-100 text-black border-2 border-black' : 'bg-black text-white border-2 border-white'}`}
              placeholder="Enter your name"
              required
              onBlur={(e) => {
                if (!e.target.value) {
                  setEnterName(false);
                  nameRef.current.style.border = '1px solid red';
                } else {
                  setEnterName(true);
                  nameRef.current.style.border = '';
                }
              }}
              ref={nameRef}
            />
            {!enterName && <p className="text-red-500 text-sm">Please enter a valid name</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-current text-sm mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`rounded-xl  p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${theme === 'light' ? 'bg-gray-100 text-black border-2 border-black' : 'bg-black text-white border-2 border-white'}`}
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
            <label className="text-current text-sm mb-1">Password:</label>
            <div className="relative">
              <input
                type={!togglePassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`rounded-xl  p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-300 ${theme === 'light' ? 'bg-gray-100 text-black border-black border-2' : 'bg-black text-white border-2 border-white'}`}
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
              {!togglePassword ? (
                <div className={`absolute top-4 right-4 cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`} onClick={() => setTogglePassword(!togglePassword)}>
                    <Eye size={20} />
                </div>
                ) : (
                <div className={`absolute top-4 right-4 cursor-pointer ${theme === 'light' ? 'text-black' : 'text-white'}`} onClick={() => setTogglePassword(!togglePassword)}>
                    <EyeOff size={20} />
                </div>
              )}
            </div>
            {!enterPassword && <p className="text-red-500 text-sm">Please enter a valid password</p>}
          </div>
          <button
            type="submit"
            className={`rounded-full p-3 font-semibold mt-6 w-full transition ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            {
              !isSubmitted ? <p>Signup</p> : <div className={`${theme === 'light' ? 'animate-spin border-t-2 border-white rounded-full w-3 h-3' : 'animate-spin border-t-2 border-black rounded-full w-3 h-3'}`}></div>
            }
          </button>
        </form>
      </main>
    </section>
  );
};

export default SignUp;