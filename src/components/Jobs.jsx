import React from "react";
import Nav from "./Nav";
import { ThemeContext } from "../context/ThemeProvider";
import { Sun, Moon } from 'lucide-react'
import MainFooter from "./MainFooter";
import { Helmet } from "react-helmet";

const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);
  const { theme, setTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    fetch("https://mocki.io/v1/2eaaffc2-52be-4174-b23e-d09445f6706f")
      .then((resp) => resp.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  const isDark = theme === "dark";

  const containerClass = isDark
    ? "bg-black text-white"
    : "bg-white text-black";

  const cardClass = isDark
    ? "bg-[#111] border border-white/10 shadow-md"
    : "bg-white border border-black/10 shadow-md";

  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const textMuted = isDark ? "text-gray-300" : "text-gray-700";

  const buttonClass = isDark
    ? "bg-white text-black hover:bg-gray-200"
    : "bg-black text-white hover:bg-gray-900";

  return (
    <>
      <Helmet>
        <title>Job Opportunities - NextHorizon</title>
        <meta name="description" content="Explore the latest job opportunities available at NextHorizon. Find your dream job today!" />
        <meta name="keywords" content="jobs, career, opportunities, NextHorizon" />
        <meta name="author" content="NextHorizon Team" />
        <meta property="og:title" content="Job Opportunities - NextHorizon" />
        <meta property="og:description" content="Explore the latest job opportunities available at Next" />
      </Helmet>
      <div className={`relative min-h-screen px-4 md:px-16 py-10 font-['Montserrat'] transition-colors duration-500 overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>

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
          <h1 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Opportunities Await
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Step into your future with these openings.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between backdrop-blur-xl border group ${isDark
                  ? 'bg-gray-900/60 border-gray-700/50 text-white hover:bg-gray-900/80'
                  : 'bg-white/70 border-white/50 text-gray-900 hover:bg-white/90'
                }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className={`h-14 w-14 object-cover rounded-xl border-2 shadow-md ${isDark ? "border-gray-700" : "border-white"}`}
                />
                <div>
                  <h2 className="text-xl font-bold leading-tight">{job.title}</h2>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{job.company}</p>
                </div>
              </div>

              <div className="mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src={job.image}
                  alt={`${job.title} visual`}
                  className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{job.description}</p>

              <div className={`text-sm mb-8 space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-current">📍 Location:</span> {job.location}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-current">🕒 Type:</span> {job.type}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-current">📅 Posted:</span> {job.postedAt}
                </p>
              </div>

              <button
                className={`mt-auto py-3 px-6 rounded-xl font-bold transition-all duration-300 transform active:scale-95 shadow-lg ${isDark
                    ? 'bg-white text-black hover:bg-gray-200 hover:shadow-white/10'
                    : 'bg-black text-white hover:bg-gray-800 hover:shadow-black/20'
                  }`}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
        <MainFooter />
      </div>
    </>
  );
};

export default Jobs;