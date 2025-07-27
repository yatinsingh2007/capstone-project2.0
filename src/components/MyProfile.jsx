import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from "./Nav";
// import { useNavigate } from "react-router-dom";
import { Plus } from 'lucide-react';
import { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const MyProfile = () => {
  const { theme } = useContext(ThemeContext);
  let userData = JSON.parse(localStorage.userData)
  if(!userData) {
    let userData = {}
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
  const [educationshow, educationSetShow] = useState(false);
  const [workshow, workSetShow] = useState(false);
  const [workData , setWorkData] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: ""
  })
  const [educationData , setEducationData] = useState({
    title: "",
    description: "",
    date: ""
  })
  const educationRef = useRef(null);
  const workRef = useRef(null);
  const handleEduToggleClick = (e) => {
    e.preventDefault();
    if (educationRef.current && !educationRef.current.contains(e.target)) {
      educationSetShow(false);
    }
  };
  const workToggleClick = (e) => {
    e.preventDefault();
    if (workRef.current && !workRef.current.contains(e.target)) {
      workSetShow(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>{userData.user.Name}'s Profile</title>
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
                educationSetShow(!educationshow);
              }}> <Plus/></button>

              <div className="flex items-center fixed">
              {educationshow && (<container ref = {educationRef} className="flex flex-col" onClick = {handleEduToggleClick}>
                <label className="mr-2">title:(*)</label><br/>
                <input type="text" placeholder="Type here..." className="ml-4 p-1 border border-gray-300 rounded" onChange={(e) => {
                  e.preventDefault();
                  setEducationData({...educationData, title: e.target.value});
                }}/>
                <label className="mr-2">description:(*)</label><br/>
                <input type="text" placeholder="Type here..." className="ml-4 p-1 border border-gray-300 rounded" onChange={(e) => {
                  e.preventDefault();
                  setEducationData({...educationData, description: e.target.value});
                }}/>
                <label className="mr-2">date:(*)</label><br/>
                <input type="date" placeholder="Type here..." className="ml-4 p-1 border border-gray-300 rounded" onChange = {(e) => {
                  e.preventDefault();
                  setEducationData({...educationData, date: e.target.value});
                }}/><br/>
                <button className="bg-white text-black rounded-xl shadow-lg" onClick={async (e) => {
                  const {title, description, date} = educationData;
                  if(!title || !description || !date) {
                    toast.error("Please fill all the fields");
                    return;
                  }
                  e.preventDefault();
                  try{
                    const resp = await fetch(`https://nexthorizon-backend-1.onrender.com/user/education/${userData.user._id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        title,
                        description,
                        date
                      }),
                      credentials: "include"
                    });
                    const data = await resp.json();
                    if(data.success) {
                      toast.success("Education added successfully");
                      userData.user.education = data.education;
                      localStorage.setItem('userData', JSON.stringify(userData));
                      educationSetShow(false);
                      setEducationData({
                        title: "",
                        description: "",
                        date: ""
                      });
                    } else {
                      toast.error(data.message || "Failed to add education");
                    }
                  }catch(err){
                    console.error(err);
                    toast.error("An error occurred while adding education");
                  }
                }}>Add</button>
              </container>)}
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


              {workshow && (<container ref = {workRef} className="flex flex-col" onClick = {workToggleClick}>
                <label className="mr-2">position:</label><br/>
                <input type="text" placeholder="Type here..." className="ml-4 p-1 border border-gray-300 rounded"/>
                <label className="mr-2">company:</label><br/>
                <input type="text" placeholder="Type here..." className="ml-4 p-1 border border-gray-300 rounded"/>
                <label className="mr-2">start date:</label><br/>
                <input type="date" placeholder="Type here..." className="ml-4 p-1 border border-gray-300 rounded"/>
                <label className="mr-2">end date:</label><br/>
                <input type="date" placeholder="Type here..." className="ml-4 p-1 border border-gray-300 rounded"/><br/>
                <button className="bg-white text-black rounded-xl" onClick={(e) => {
                  e.preventDefault();
                  const { position, company, startDate, endDate } = workData;
                  if(!position || !company || !startDate || !endDate) {
                    toast.error("Please fill all the fields");
                    return;
                  }
                  fetch(`https://nexthorizon-backend-1.onrender.com/user/work/${userData.user._id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ position, company, startDate, endDate }),
                    credentials: "include"
                  })
                  .then((resp) => resp.json())
                  .then((data) => {
                    if(data.success) {
                      toast.success("Work experience added successfully");
                      userData.user.work = data.work;
                      localStorage.setItem('userData', JSON.stringify(userData));
                      workSetShow(false);
                      setWorkData({
                        position: "",
                        company: "",
                        startDate: "",
                        endDate: ""
                      });
                    } else {
                      toast.error(data.message || "Failed to add work experience");
                    }
                  })
                  .catch((err) => {
                    console.error(err);
                    toast.error("An error occurred while adding work experience");
                  })
                }}  >Add</button>
              </container>)}
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

        
        {/* <div className="mt-6 flex justify-end">
          <button className={`px-5 py-2 rounded-md border ${ theme === "dark" ? "bg-black text-white hover:bg-neutral-800": "bg-white text-black hover:bg-neutral-200"} text-sm transition`}
            onClick={() => navigate('/editProfile')}>
            Edit Profile
          </button>
        </div> */}

      </div>
    </>
  );
};

export default MyProfile;