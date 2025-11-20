import { useEffect, useState, useContext } from 'react';
import OpportunityCard from './OppertunitieCard';
import Nav from './Nav';
import { ThemeContext } from '../context/ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import MainFooter from './MainFooter';
import { Helmet } from 'react-helmet';

const Opportunities = () => {
  const [persons, setPersons] = useState([]);
  const { theme, setTheme } = useContext(ThemeContext)
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const resp = await fetch(`https://nexthorizon-backend-1.onrender.com/mypossibleConnections`, {
            credentials: 'include'
          })
          const connectionData = await resp.json()
          setPersons(connectionData.possibleConnections)
        } catch (err) {
          console.log(err.message)
        }
      })();
    }, 1000);
  }, [])
  return (
    <>
      <Helmet>
        <title>Opportunities - NextHorizon</title>
        <meta name="description" content="Explore professional opportunities and connect with potential collaborators on NextHorizon." />
        <meta name="keywords" content="NextHorizon, professional opportunities, networking, career growth" />
        <meta name="author" content="NextHorizon Team" />
        <meta property="og:title" content="Opportunities - NextHorizon" />
        <meta property="og:description" content="Explore professional opportunities and connect with potential collaborators on NextHorizon." />
      </Helmet>
      <div className={`relative min-h-screen px-4 md:px-16 py-10 font-sans transition-colors duration-500 overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>

        {/* Background Gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-50 ${theme === 'dark' ? 'bg-emerald-900' : 'bg-emerald-300'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-50 ${theme === 'dark' ? 'bg-sky-900' : 'bg-sky-300'}`}></div>
        </div>

        <Nav />

        <div className="fixed md:top-6 md:right-6 z-50 bottom-5 right-5">
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <div className="relative z-10 text-center mt-32 mb-16">
          <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Connect & Collaborate
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Discover professionals and expand your network.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {persons.length === 0 && (
              <div className='flex justify-center col-span-full'>
                <div className={`rounded-full w-8 h-8 border-4 ${theme === "light" ? 'border-t-black border-white' : 'border-t-white border-black'} animate-spin`}></div>
              </div>
            )}
            {persons.map((person, i) => (
              <OpportunityCard
                key={i}
                photo={person.profilePic}
                bio={person.bio}
                name={person.name}
                job={person.job}
                company={person.company}
                _id={person._id}
              />
            ))}
          </div>
        </div>
        <MainFooter />
      </div>
    </>
  );
};

export default Opportunities;