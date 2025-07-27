import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { Plus } from 'lucide-react';
import { Helmet } from "react-helmet";
import 'react-calendar/dist/Calendar.css';
const MyProfile = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  let userData = JSON.parse(localStorage.userData)
  if(!userData) {
    userData = {}
    userData.user = {
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
      <Helmet>
        <title>{userData.user?.name || `Client`}</title>
        <meta name="description" content="View and edit your profile information." />
      </Helmet>
      <Nav />
      <div 
        className={`max-w-2xl mx-auto mt-10 p-6 rounded-xl shadow-lg ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center gap-6 mt-20">
          <img
            src={
              userData.user.profilePic
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-400 "
          />
          <div>
            <h2 className="text-2xl font-semibold">{userData.user.name}</h2>
            <p className="text-sm text-gray-500">{userData.user.email}</p>
            <p className="text-sm text-gray-500">{userData.user.gender}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-1">About</h3>
          <p className="text-sm leading-relaxed">
            {userData.user.bio || "You haven't added a bio yet."}
          </p>
        </div>

        {/* Education & Experience */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="flex items-center justify-between mb-2 ">
              <p className="font-semibold">Education</p>
              <button onClick={(e) => {
                e.preventDefault();
                navigate('/education');
              }}> <Plus/></button>
              </div>
            </div>
            <p>{userData.user.education || "Not specified"}</p>
            
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">Work Experience</p>
              <button onClick={(e) => {
                e.preventDefault();
              }}> <Plus/> </button>
            </div>
            {userData.user?.work && userData.user?.work.length > 0 ? (
              userData.user.work.map((work, index) => (
                <p key={index} className="text-sm">
                  {work.position} at {work.company} ({work.startDate} - {work.endDate || "Present"})
                </p>
              ))
            ) : (
              <p className="text-sm">Not specified</p>
            )}
          </div>
        </div>

        {/* Joined */}
        <div className="mt-4 text-xs text-gray-500">
          Joined on {new Date(userData.user.createdAt).toLocaleTimeString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
    </>
  );
};

export default MyProfile;
