import { useEffect, useState, useContext } from "react";
import PostCard from "../components/PostCard";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from '../components/Nav'

const MainPage = () => {
  const { theme } = useContext(ThemeContext);
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