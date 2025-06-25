import { useEffect, useState, useContext } from "react";
import PostCard from "../components/PostCard";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from '../components/Nav'
import {Sun , Moon} from 'lucide-react'

const MainPage = () => {
  const { theme , setTheme } = useContext(ThemeContext);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/feed", {
      credentials: 'include'
    })
      .then((resp) => resp.json())
      .then((data) => {setCardData(data)
      })
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className={`min-h-screen px-4 py-10 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Nav/>
      <div className="fixed md:top-4 md:right-4 md:z-10 bottom-5 right-5">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition"
        >
          {theme === 'light' ? <Moon className="text-white" /> : <Sun className="text-yellow-400" />}
        </button>
      </div>
      <div className="max-w-7xl mx-auto mt-24">
        {cardData.length === 0 ? (
          <p className="text-center text-lg mt-20 font-semibold" style={{ fontFamily: "'Nunito Sans'" }}>
            No posts available at the moment.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;