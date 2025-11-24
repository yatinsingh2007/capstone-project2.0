import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { Sun, Moon, Bell, Check, X } from 'lucide-react';
import Nav from './Nav';
import MainFooter from './MainFooter';
import { Button } from './ui/button';
import { AnimatedGridPattern } from './ui/grid-background';
import { Spotlight } from './ui/spotlight';
import { motion, AnimatePresence } from 'framer-motion';

const Notifications = () => {
  const [connections, setConnections] = useState([]);
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`https://nexthorizon-backend-1.onrender.com/connections`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (resp.status === 404) {
          setConnections([]);
          return;
        }
        const data = await resp.json();
        setConnections(data.requestUsers);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const handleAccept = async (userId) => {
    try {
      await fetch(`https://nexthorizon-backend-1.onrender.com/connect/accept`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: userId }),
      });
      setConnections((prev) => prev.filter((u) => u._id !== userId));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleReject = async (userId) => {
    try {
      await fetch(`https://nexthorizon-backend-1.onrender.com/connect/reject`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: userId }),
      });
      setConnections((prev) => prev.filter((u) => u._id !== userId));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <section className={`relative min-h-screen px-4 py-10 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-gradient-to-br from-slate-950 to-slate-900' : 'bg-gradient-to-br from-sky-50 to-emerald-50'}`}>

        {/* Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <AnimatedGridPattern className="opacity-30" />
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill={theme === 'dark' ? '#34d399' : '#0ea5e9'}
          />
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${isDark ? 'opacity-30 bg-emerald-500' : 'opacity-20 bg-emerald-400'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${isDark ? 'opacity-30 bg-cyan-500' : 'opacity-20 bg-sky-400'}`}></div>
        </div>

        <Nav />

        {/* Theme Toggle */}
        <div className="fixed md:top-6 md:right-6 z-50 bottom-5 right-5">
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="outline"
            size="icon"
            className={`rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${isDark ? 'bg-slate-800/90 border-cyan-500/30 text-yellow-400 hover:bg-slate-700 hover:border-cyan-400/50' : 'bg-white/80 border-gray-200 text-gray-600 hover:bg-gray-50'}`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto mt-32 mb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bell className={`w-10 h-10 ${isDark ? 'text-emerald-400' : 'text-sky-600'}`} />
              <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: "'Sora', sans-serif" }}>
                Notifications
              </h1>
            </div>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {connections.length > 0 ? `You have ${connections.length} connection ${connections.length === 1 ? 'request' : 'requests'}` : 'No new connection requests'}
            </p>
          </motion.div>

          {/* Notifications List */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {connections.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`backdrop-blur-xl border rounded-3xl p-12 text-center shadow-lg ${isDark ? 'bg-slate-900/70 border-slate-700/60' : 'bg-white/70 border-white/50'
                    }`}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-slate-800/50' : 'bg-gray-100/50'
                    }`}>
                    <Bell className={`w-10 h-10 ${isDark ? 'text-slate-600' : 'text-gray-400'}`} />
                  </div>
                  <p className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    You're all caught up!
                  </p>
                  <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    New connection requests will appear here.
                  </p>
                </motion.div>
              ) : (
                connections.map((user, index) => (
                  <motion.div
                    key={user._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`backdrop-blur-xl border rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${isDark ? 'bg-slate-900/70 border-slate-700/60 hover:bg-slate-900/90 hover:border-slate-600/70' : 'bg-white/70 border-white/50 hover:bg-white/90'
                      }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      {/* User Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-full blur-md opacity-50 ${isDark ? 'bg-blue-500' : 'bg-blue-300'}`}></div>
                          <img
                            src={user.profilePic || 'https://via.placeholder.com/64'}
                            alt={user.name}
                            className={`relative w-16 h-16 rounded-full object-cover border-4 shadow-lg ${isDark ? 'border-slate-700' : 'border-white'}`}
                          />
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {user.name}
                          </h3>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {user.profession || 'Professional'}
                          </p>
                          {user.company && (
                            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                              {user.company}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleAccept(user._id)}
                          className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:from-emerald-400 hover:to-cyan-400 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
                        >
                          <Check size={18} />
                          Accept
                        </Button>
                        <Button
                          onClick={() => handleReject(user._id)}
                          variant="outline"
                          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          <X size={18} />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default Notifications;