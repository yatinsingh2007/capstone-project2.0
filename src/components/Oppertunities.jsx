import { useEffect, useState , useContext } from 'react';
import OpportunityCard from './OppertunitieCard';
import Nav from './Nav';
import { ThemeContext } from '../context/ThemeProvider';
import { Sun , Moon } from 'lucide-react';
import MainFooter from './MainFooter';
import { Helmet } from 'react-helmet';

const Opportunities = () => {
  const [persons, setPersons] = useState([]);
  const {theme , setTheme} = useContext(ThemeContext)
  useEffect(() => {
    setTimeout(() => {
    (async() => {
      try{
        const resp = await fetch(`https://nexthorizon-backend-1.onrender.com/mypossibleConnections` , {
          credentials : 'include'
        })
        const connectionData = await resp.json()
        setPersons(connectionData.possibleConnections)
      }catch(err){
        console.log(err.message)
      }
    })();
    } , 1000);
  } , [])
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
      <div className={`p-6 ${theme === 'light' ? 'bg-white' : 'bg-black'} min-h-screen px-4 md:px-16 py-10 font-sans`}>
        <Nav />
        <div className="fixed md:top-4 md:right-4 md:z-10 bottom-5 right-5">
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition"
                >
                  {theme === 'light' ? <Moon className="text-white" /> : <Sun className="text-yellow-400" />}
                </button>
        </div>
        <div className="max-w-7xl mx-auto w-full pt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {persons.length === 0 && (
              <div className={`rounded-full w-4 h-4 border-2 ${theme === "light" ? 'border-t-black border-white' : 'border-t-white border-black'} border-2 animate-spin`}></div>
            )}
            {persons.map((person , i) => (
              <OpportunityCard
                key={i}
                photo={person.profilePic}
                bio={person.bio}
                name={person.name}
                job={person.job}
                company={person.company}
                _id = {person._id}
              />
            ))}
          </div>
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default Opportunities;