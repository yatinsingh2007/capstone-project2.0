import { useEffect, useState, useContext } from "react";
import { Edit3 } from "lucide-react";
import PostCard from "../components/PostCard";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from '../components/Nav'
import { Sun, Moon } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import MainFooter from "./MainFooter";
import { Helmet } from "react-helmet";
const MainPage = () => {
  const navigate = useNavigate()
  const { theme, setTheme } = useContext(ThemeContext);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const resp = await fetch("https://nexthorizon-backend-1.onrender.com/feed", {
            credentials: 'include'
          });
          const data = await resp.json();
          setCardData(data);
        } catch (err) {
          console.error("Failed to fetch:", err);
        }
      })();
    }, 1000)
  }, []);
  return (
    <>
      <Helmet>
        <title>Main Page - NextHorizon</title>
        <meta name="description" content="Connect with professionals, share insights, and explore opportunities on NextHorizon." />
        <meta name="keywords" content="NextHorizon, professional networking, job opportunities, career growth" />
        <meta name="author" content="NextHorizon Team" />
        <meta property="og:title" content="Main Page - NextHorizon" />
        <meta property="og:description" content="Connect with professionals, share insights, and explore opportunities on NextHorizon." />
      </Helmet>
      <section className={`relative min-h-screen px-4 py-10 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>

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

        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40">
          <button
            onClick={() => navigate('/create-post')}
            className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 transform ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
            aria-label="Add Post"
          >
            <Edit3 className="w-6 h-6" />
          </button>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto mt-24 flex justify-center">
          {cardData.length === 0 ? (
            <div className={`border-2 ${theme === "light" ? 'border-t-black border-white' : 'border-t-white border-black'} animate-spin rounded-full h-6 w-6`}></div>
          ) : (
            <div className="flex flex-col gap-8 w-full">
              {cardData.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default MainPage;