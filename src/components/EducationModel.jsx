import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/ThemeProvider";
import { Helmet } from "react-helmet";

const EducationModel = () => {
  const { theme } = useContext(ThemeContext);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const [educationData, setEducationData] = useState({
    title: "",
    description: "",
    date: "",
  });

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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description, date }),
          credentials: "include",
        }
      );
      const data = await resp.json();

      if (data.success) {
        toast.success("Education added successfully");
        userData.user.education = data.education;
        localStorage.setItem("userData", JSON.stringify(userData));
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
    <>
      <Helmet>
        <title>Add Education</title>
        <meta
          name="description"
          content="Add your education details to your profile."
        />
      </Helmet>

      <div
        className={`min-h-screen overflow-y-auto flex items-center justify-center px-4 py-10 ${
          theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
      >
        <form
          onSubmit={handleAddEducation}
          className={`w-full max-w-lg p-8 rounded-xl shadow-xl max-h-[90vh] overflow-y-auto ${
            theme === "dark"
              ? "bg-gray-900 text-white border border-gray-700"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="text-gray-500 hover:text-red-600 text-xl font-bold"
              onClick={() => window.history.back()}
            >
              &times;
            </button>
          </div>
          <h3 className="text-2xl font-bold mb-6 text-center">Add Education</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. B.Tech in Computer Science"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  title: e.target.value,
                })
              }
              value={educationData.title}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Studied at NIT"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) =>
                setEducationData({
                  ...educationData,
                  description: e.target.value,
                })
              }
              value={educationData.description}
            />
          </div>

          <div className="mb-4">
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
                educationData.date
                  ? new Date(educationData.date)
                  : new Date()
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
            Add Education
          </button>
        </form>
      </div>
    </>
  );
};

export default EducationModel;