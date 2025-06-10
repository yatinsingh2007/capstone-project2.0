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
            className="bg-gray-100 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 object-contain rounded-full bg-white p-1"
              />
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">{job.description}</p>

            <div className="flex flex-col gap-1 text-sm text-gray-600">
              <p><strong>📍 Location:</strong> {job.location}</p>
              <p><strong>🕒 Type:</strong> {job.type}</p>
              <p><strong>📅 Posted:</strong> {job.postedAt}</p>
            </div>

            <button className="mt-4 bg-[#090DFF] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;