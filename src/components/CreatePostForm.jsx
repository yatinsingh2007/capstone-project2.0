import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    description: "",
    postImage: null,
    companyLogo: null,
    tags: "",
    type: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("tags", formData.tags);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("postImage", formData.postImage);
      formDataToSend.append("companyLogo", formData.companyLogo);

      const response = await fetch("http://localhost:7777/create/post", {
        method: "POST",
        body: formDataToSend
      });

      if (!response.ok) throw new Error("Failed to create post");
      await response.json();

      toast.success("Post created successfully!");

      setFormData({
        title: "",
        company: "",
        description: "",
        postImage: null,
        companyLogo: null,
        tags: "",
        type: ""
      });

    } catch (err) {
      console.error(err);
      toast.error("Error creating post.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative max-w-2xl mx-auto border p-6 rounded-xl space-y-4 my-10 ${
        isDark ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"
      }`}
      encType="multipart/form-data"
    >
      <button
        type="button"
        onClick={() => navigate('/main')}
        className={`absolute top-4 right-4 p-1 rounded-full ${
          isDark ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500"
        }`}
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <h2 className="text-xl font-semibold">Create a New Post</h2>

      {["title", "company"].map((field) => (
        <div key={field}>
          <label className="block mb-1 capitalize">{field}</label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              isDark
                ? "bg-gray-900 border-gray-600 text-white"
                : "bg-gray-50 border-gray-300 text-black"
            }`}
          />
        </div>
      ))}

      <div>
        <label className="block mb-1">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${
            isDark
              ? "bg-gray-900 border-gray-600 text-white"
              : "bg-gray-50 border-gray-300 text-black"
          }`}
          required
        >
          <option value="">Select Type</option>
          <option value="job">Job</option>
          <option value="internship">Internship</option>
          <option value="scholarship">Scholarship</option>
          <option value="contest">Contest</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`w-full border rounded px-3 py-2 ${
            isDark
              ? "bg-gray-900 border-gray-600 text-white"
              : "bg-gray-50 border-gray-300 text-black"
          }`}
        />
      </div>

      <div>
        <label className="block mb-1">Post Image</label>
        <input
          type="file"
          name="postImage"
          onChange={handleFileChange}
          className={`w-full border rounded px-3 py-2 ${
            isDark
              ? "bg-gray-900 border-gray-600 text-white"
              : "bg-gray-50 border-gray-300 text-black"
          }`}
        />
      </div>

      <div>
        <label className="block mb-1">Company Logo</label>
        <input
          type="file"
          name="companyLogo"
          onChange={handleFileChange}
          className={`w-full border rounded px-3 py-2 ${
            isDark
              ? "bg-gray-900 border-gray-600 text-white"
              : "bg-gray-50 border-gray-300 text-black"
          }`}
        />
      </div>

      <div>
        <label className="block mb-1">Tags (comma-separated)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${
            isDark
              ? "bg-gray-900 border-gray-600 text-white"
              : "bg-gray-50 border-gray-300 text-black"
          }`}
        />
      </div>

      <button
        type="submit"
        className={`w-full py-2 rounded ${
          isDark
            ? "border border-gray-600 text-white hover:bg-white hover:text-black"
            : "border border-gray-600 text-black hover:bg-black hover:text-white"
        }`}
      >
        Create Post
      </button>
    </form>
  );
};

export default PostForm;