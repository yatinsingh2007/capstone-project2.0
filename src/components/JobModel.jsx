import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeProvider";
import { Helmet } from "react-helmet";

const JobModel = () => {
  const { theme } = useContext(ThemeContext);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const [workData, setWorkData] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
  });

  const handleAddJob = async (e) => {
    e.preventDefault();
    const { position, company, startDate, endDate } = workData;
    if (!position || !company || !startDate || !endDate) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const resp = await fetch(
        `https://nexthorizon-backend-1.onrender.com/user/work/${userData.user._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ position, company, startDate, endDate }),
          credentials: "include",
        }
      );
      const data = await resp.json();

      if (data.success) {
        toast.success("Work experience added successfully");
        userData.user.work = data.work;
        localStorage.setItem("userData", JSON.stringify(userData));
        setWorkData({ position: "", company: "", startDate: "", endDate: "" });
      } else {
        toast.error(data.message || "Failed to add work experience");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while adding work experience");
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Work Experience</title>
        <meta
          name="description"
          content="Add your job or work experience to your profile."
        />
      </Helmet>

      <div
        className={`min-h-screen flex items-center justify-center px-4 ${
          theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
      >
        <form
          onSubmit={handleAddJob}
          className={`w-full max-w-lg p-8 rounded-xl shadow-xl ${
            theme === "dark"
              ? "bg-gray-900 text-white border border-gray-700"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Add Work Experience</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Position<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) =>
                setWorkData({ ...workData, position: e.target.value })
              }
              value={workData.position}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Company<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Google"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) =>
                setWorkData({ ...workData, company: e.target.value })
              }
              value={workData.company}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Start Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              onChange={(date) =>
                setWorkData({
                  ...workData,
                  startDate: date.toISOString().split("T")[0],
                })
              }
              value={
                workData.startDate ? new Date(workData.startDate) : new Date()
              }
              className={`rounded-lg border ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              End Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              onChange={(date) =>
                setWorkData({
                  ...workData,
                  endDate: date.toISOString().split("T")[0],
                })
              }
              value={
                workData.endDate ? new Date(workData.endDate) : new Date()
              }
              className={`rounded-lg border ${
                theme === "dark"
                  ? "bg-gray-800 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4"
          >
            Add Work Experience
          </button>
        </form>
      </div>
    </>
  );
};

export default JobModel;
