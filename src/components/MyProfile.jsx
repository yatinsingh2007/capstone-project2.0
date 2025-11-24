import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Nav from "./Nav";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainFooter from "./MainFooter";
const MyProfile = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  let userData = JSON.parse(localStorage.userData)
  if (!userData) {
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
      <div className={`relative min-h-screen flex flex-col justify-between transition-colors duration-500 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-slate-950 to-slate-900' : 'bg-gray-50'}`}>
        {/* Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Gradient Overlays */}
          <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${theme === 'dark' ? 'opacity-30 bg-emerald-500' : 'opacity-50 bg-emerald-300'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] ${theme === 'dark' ? 'opacity-30 bg-cyan-500' : 'opacity-50 bg-sky-300'}`}></div>
        </div>

        <Nav />

        <div className="relative z-10 flex-grow flex items-center justify-center px-4 py-20">
          <div
            className={`w-full max-w-3xl mt-10 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-xl border transition-all duration-300 ${theme === "dark"
              ? "bg-slate-900/70 border-slate-700/60 text-white"
              : "bg-white/70 border-white/50 text-gray-900"
              }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 border-b border-gray-500/20 pb-8">
              <img
                src={userData.user.profilePic}
                alt="Profile"
                className={`w-32 h-32 rounded-full object-cover border-4 shadow-lg ${theme === 'dark' ? 'border-gray-700' : 'border-white'}`}
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">{userData.user.name}</h2>
                <p className={`text-base mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{userData.user.email}</p>
                <p className={`text-sm font-medium uppercase tracking-wide ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{userData.user.profession || "Professional"}</p>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">📝</span> About
                </h3>
                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {userData.user.bio || "You haven't added a bio yet."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎓</span> Education
                  </h3>
                  <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
                    <p className="font-medium">{userData.user.education || "Not specified"}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">💼</span> Experience
                  </h3>
                  <div className={`p-4 rounded-2xl space-y-3 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
                    {userData.user?.work && userData.user?.work.length > 0 ? (
                      userData.user.work.map((work, index) => (
                        <div key={index} className="text-sm">
                          <p className="font-bold text-base">{work.position}</p>
                          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                            {work.company} • {work.startDate} - {work.endDate || "Present"}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm">Not specified</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                Joined on {new Date(userData.user.createdAt).toLocaleTimeString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>

              <button
                className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    await fetch(`https://nexthorizon-backend-1.onrender.com/auth/logout`, {
                      method: 'GET',
                      credentials: 'include',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });
                    localStorage.removeItem("userData");
                    navigate("/login");
                    toast.success("Logged out successfully!");
                  } catch (err) {
                    console.log(err.message);
                    toast.error("Error logging out. Please try again.");
                  }
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-10"><MainFooter /></div>
      </div>
    </>
  );
};

export default MyProfile;
