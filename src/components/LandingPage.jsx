import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { AuthContext } from '../context/AuthProvider';
import { Moon, Sun } from 'lucide-react';

const LandingPage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col items-center min-h-screen px-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition"
        >
          {theme === 'light' ? <Moon className="text-white" /> : <Sun className="text-yellow-400" />}
        </button>
      </div>

      <div className="max-w-2xl text-center mt-36">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Welcome To NextHorizon
        </h1>
        <p className="text-base md:text-lg mb-10 text-left mt-16" style={{ fontFamily: "'Nunito Sans'" }}>
          Discover curated opportunities, connect with industry experts, and take your career to the next horizon.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-60">
          {user === null ? (
            <p>Loading...</p>
          ) : user === false ? (
            <>
              <button
                onClick={() => navigate('/signup')}
                className={`px-8 py-3 bg-white text-black rounded text-lg font-semibold hover:opacity-80 transition ${theme === 'light' && 'border-black border-2'}`}
              >
                Sign Up
              </button>
              <button
                onClick={() => navigate('/login')}
                className={`px-8 py-3 border border-white text-white rounded text-lg font-semibold hover:opacity-80 transition ${theme === 'light' && 'bg-black text-white'}`}
              >
                Sign In
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate('/main')}
              className="px-8 py-3 bg-green-600 text-white rounded text-lg font-semibold hover:bg-green-700 transition"
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;