import { useEffect, useState, useContext } from "react";
import { Edit3 } from "lucide-react";
import PostCard from "../components/PostCard";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from '../components/Nav'
import { Sun, Moon } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import MainFooter from "./MainFooter";
import { Helmet } from "react-helmet";
import { Button } from './ui/button';
import { AnimatedGridPattern } from './ui/grid-background';
import { Spotlight } from './ui/spotlight';
import { Skeleton } from './ui/skeleton';
import { motion } from 'framer-motion';

const PostSkeleton = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`border p-6 md:p-8 rounded-3xl ${isDark ? 'bg-slate-900/70 border-slate-700/60' : 'bg-white/70 border-white/50'}`}>
      <div className="flex items-center gap-4 mb-6">
        <Skeleton className={`w-14 h-14 rounded-xl ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`} />
        <div className="flex-1">
          <Skeleton className={`h-6 w-48 mb-2 ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`} />
          <Skeleton className={`h-4 w-32 ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`} />
        </div>
      </div>
      <Skeleton className={`h-64 w-full mb-6 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
      <Skeleton className={`h-4 w-full mb-2 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
      <Skeleton className={`h-4 w-3/4 mb-6 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
      <div className="flex gap-2 mb-6">
        <Skeleton className={`h-6 w-20 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
        <Skeleton className={`h-6 w-24 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
      </div>
      <div className="flex justify-between items-center pt-4">
        <div className="flex gap-3">
          <Skeleton className={`h-10 w-20 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
          <Skeleton className={`h-10 w-20 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
        </div>
        <Skeleton className={`h-10 w-32 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
      </div>
    </div>
  );
};

const MainPage = () => {
  const navigate = useNavigate()
  const { theme, setTheme } = useContext(ThemeContext);
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const resp = await fetch("https://nexthorizon-backend-1.onrender.com/feed", {
            credentials: 'include'
          });
          const data = await resp.json();
          setCardData(data);
          setIsLoading(false);
        } catch (err) {
          console.error("Failed to fetch:", err);
          setIsLoading(false);
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

      <section className={`relative min-h-screen px-4 py-10 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'dark bg-gradient-to-br from-slate-950 to-slate-900' : 'bg-gradient-to-br from-sky-50 to-emerald-50'}`}>

        <div className="fixed inset-0 z-0 pointer-events-none">
          <AnimatedGridPattern className="opacity-30" />
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill={theme === 'dark' ? '#34d399' : '#0ea5e9'}
          />

          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${theme === 'dark' ? 'opacity-30 bg-emerald-500' : 'opacity-20 bg-emerald-400'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${theme === 'dark' ? 'opacity-30 bg-cyan-500' : 'opacity-20 bg-sky-400'}`}></div>
        </div>

        <Nav />

        <div className="fixed md:top-6 md:right-6 z-50 bottom-5 right-5">
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="outline"
            size="icon"
            className={`rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'bg-slate-800/90 border-cyan-500/30 text-yellow-400 hover:bg-slate-700 hover:border-cyan-400/50' : 'bg-white/80 border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </div>

        <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40">
          <Button
            onClick={() => navigate('/create-post')}
            size="icon"
            className={`w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 transform ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
            aria-label="Add Post"
          >
            <Edit3 className="w-6 h-6" />
          </Button>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto mt-24">
          {isLoading ? (
            <div className="flex flex-col gap-8 w-full">
              <PostSkeleton theme={theme} />
              <PostSkeleton theme={theme} />
              <PostSkeleton theme={theme} />
            </div>
          ) : cardData.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center py-20 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
            >
              <p className="text-xl font-semibold mb-2">No posts yet</p>
              <p className="text-sm">Be the first to share something!</p>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-8 w-full">
              {cardData.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <PostCard post={post} />
                </motion.div>
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