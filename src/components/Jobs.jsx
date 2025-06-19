import React from "react";
import Nav from "./Nav";
const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    fetch("https://mocki.io/v1/2ff3c85e-218f-4180-9242-59f0be3fc271")
      .then((resp) => resp.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-20">
      <Nav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 bg-white border-2 shadow-2xl m-2 rounded-lg md:mx-16 lg:mx-48 w-full md:w-auto 2xl:mx-96 transition-all hover:shadow-3xl hover:scale-[1.01] flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="rounded-full h-10 w-10 object-cover border-2 border-blue-500 shadow-md"
              />
              <div>
                <h2 className="md:text-base p-2 text-s sm:mr-5 font-bold text-gray-800" style={{fontFamily : "'MontSerrat'", letterSpacing : '1px'}}>{job.title}</h2>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
            </div>

            <img src={job.image} alt={`${job.title} visual`} className="w-full rounded-3xl p-2 object-cover max-h-[400px] shadow-sm mb-4" />

            <p className="text-gray-700 text-sm mb-6">{job.description}</p>

            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <p><strong>📍 Location:</strong> {job.location}</p>
              <p><strong>🕒 Type:</strong> {job.type}</p>
              <p><strong>📅 Posted:</strong> {job.postedAt}</p>
            </div>

            <button className="mt-6 bg-[#090DFF] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;