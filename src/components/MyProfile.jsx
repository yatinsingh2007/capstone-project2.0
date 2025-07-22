import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from "./Nav";

const MyProfile = () => {
  const { theme } = useContext(ThemeContext);
  let userData = JSON.parse(localStorage.getItem("userData"))?.user_data[0]
  if(!userData) {
    userData = {
      name: "John Doe",
      email: "johndoe@gmail.com", 
      profilePic: "https://via.placeholder.com/150",
      profession: "Software Engineer",
      workingAt: "Tech Company",
      bio: "A passionate software engineer with a love for coding and technology.",
      education: "Bachelor's in Computer Science",        
      workExperience: "5 years in software development",
      createdAt: new Date().toISOString(),
    };
  } 


  return (
    <>
      <Nav />
      <div
        className={`max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center gap-6 mt-20">
          <img
            src={
              userData.profilePic
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-400"
          />
          <div>
            <h2 className="text-2xl font-semibold">{userData.name}</h2>
            <p className="text-sm text-gray-500">{userData.email}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  theme === "dark"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-200 text-black"
                }`}
              >
                {userData.profession || "Profession not specified"}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  theme === "dark"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-200 text-black"
                }`}
              >
                {userData.workingAt || "Company not specified"}
              </span>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-1">About</h3>
          <p className="text-sm leading-relaxed">
            {userData.bio || "You haven't added a bio yet."}
          </p>
        </div>

        {/* Education & Experience */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold">Education</p>
            <p>{userData.education || "Not specified"}</p>
          </div>
          <div>
            <p className="font-semibold">Work Experience</p>
            <p>{userData.workExperience || "Not specified"}</p>
          </div>
        </div>

        {/* Joined */}
        <div className="mt-4 text-xs text-gray-500">
          Joined on {new Date(userData.createdAt).toLocaleTimeString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className={`px-5 py-2 rounded-md border ${
              theme === "dark"
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white text-black hover:bg-neutral-200"
            } text-sm transition`}
            onClick={() => {
              // navigate to edit profile
            }}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default MyProfile;