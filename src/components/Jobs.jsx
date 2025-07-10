import React from "react";
import Nav from "./Nav";
import { ThemeContext } from "../context/ThemeProvider";
import {Sun , Moon} from 'lucide-react'
import MainFooter from "./MainFooter";

const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);
  const { theme , setTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    fetch("https://mocki.io/v1/2ff3c85e-218f-4180-9242-59f0be3fc271")
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
    <div
      className={`min-h-screen px-4 md:px-16 py-10 font-['Montserrat'] transition-colors duration-300 ${containerClass}`}
    >
      <Nav />
      <div className="fixed md:top-4 md:right-4 md:z-10 bottom-5 right-5">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition"
        >
          {theme === 'light' ? <Moon className="text-white" /> : <Sun className="text-yellow-400" />}
        </button>
      </div>
      <div className="text-center mt-32 mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Opportunities Await</h1>
        <p className={`${textSecondary} mt-2`}>
          Step into your future with these openings.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`rounded-3xl p-6 transition-transform hover:scale-[1.02] duration-300 flex flex-col justify-between ${cardClass}`}
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className={`h-12 w-12 object-cover rounded-full border-2 ${isDark ? "border-white" : "border-black"} shadow`}
              />
              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className={`text-sm ${textSecondary}`}>{job.company}</p>
              </div>
            </div>

            <img
              src={job.image}
              alt={`${job.title} visual`}
              className="rounded-2xl w-full object-cover max-h-[260px] mb-4 shadow-sm"
            />

            <p className={`text-sm ${textMuted} mb-4`}>{job.description}</p>

            <div className={`text-sm mb-6 space-y-1 ${textMuted}`}>
              <p><strong>📍 Location:</strong> {job.location}</p>
              <p><strong>🕒 Type:</strong> {job.type}</p>
              <p><strong>📅 Posted:</strong> {job.postedAt}</p>
            </div>

            <button
              className={`mt-auto py-2.5 px-6 rounded-xl font-medium transition-all duration-200 ${buttonClass}`}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
      <MainFooter />
    </div>
  );
};

export default Jobs;