import React, { useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeProvider";

const EducationModel = ({
  educationRef,
  educationData,
  setEducationData,
  userData,
  educationSetShow
}) => {
  const { theme } = useContext(ThemeContext);

  const handleAddEducation = async (e) => {
    e.preventDefault();
    const { title, description, date } = educationData;
    if (!title || !description || !date) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const resp = await fetch(
        `https://nexthorizon-backend-1.onrender.com/user/education/${userData.user._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description, date }),
          credentials: "include",
        }
      );
      const data = await resp.json();
      if (data.success) {
        toast.success("Education added successfully");
        userData.user.education = data.education;
        localStorage.setItem("userData", JSON.stringify(userData));
        educationSetShow(false);
        setEducationData({ title: "", description: "", date: "" });
      } else {
        toast.error(data.message || "Failed to add education");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while adding education");
    }
  };

  return (
    <div
      ref={educationRef}
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 p-6 rounded-xl shadow-xl w-[90%] max-w-lg z-50 ${
        theme === "dark"
          ? "bg-gray-900 text-white border border-gray-700"
          : "bg-white text-black border border-gray-200"
      }`}
    >
      <h3 className="text-lg font-semibold mb-4">Add Education</h3>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. B.Tech in Computer Science"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) =>
              setEducationData({ ...educationData, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Description<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Studied at NIT"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={(e) =>
              setEducationData({ ...educationData, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Date<span className="text-red-500">*</span>
          </label>
          <Calendar
            onChange={(date) =>
              setEducationData({
                ...educationData,
                date: date.toISOString().split("T")[0],
              })
            }
            value={
              educationData.date ? new Date(educationData.date) : new Date()
            }
            className={`${theme === "dark" ? "dark-calendar" : "light-calendar"}`}
          />
        </div>

        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mt-2"
          onClick={handleAddEducation}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default EducationModel;