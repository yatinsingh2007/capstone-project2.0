import { useEffect, useState , useContext } from 'react';
import OpportunityCard from './OppertunitieCard';
import Nav from './Nav';
import { ThemeContext } from '../context/ThemeProvider';
import { Sun , Moon } from 'lucide-react';

const Opportunities = () => {
  const [persons, setPersons] = useState([]);
  const {theme , setTheme} = useContext(ThemeContext)
  useEffect(() => {
    fetch(`https://mocki.io/v1/5062a989-533b-42fb-af6f-28d0e1607bf8`)
      .then((resp) => resp.json())
      .then((data) => {
        setPersons(data);
      });
  }, []);


  return (
    <>
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
            {persons.map((person) => (
              <OpportunityCard
                key={person.id}
                photo={person.photo}
                bio={person.bio}
                name={person.name}
                job={person.job}
                company={person.company}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Opportunities;