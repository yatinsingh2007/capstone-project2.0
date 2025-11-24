import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { toast } from "react-toastify";
import { X, Upload, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { AnimatedGridPattern } from './ui/grid-background';
import { Spotlight } from './ui/spotlight';

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
    <section className={`relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden transition-colors duration-500 ${isDark ? 'dark bg-gray-950' : 'bg-gradient-to-br from-sky-50 to-emerald-50'}`}>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatedGridPattern className="opacity-30" />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill={theme === 'dark' ? '#10b981' : '#0ea5e9'}
        />
        <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-emerald-600' : 'bg-emerald-400'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-sky-600' : 'bg-sky-400'}`}></div>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className={`relative z-10 w-full max-w-2xl backdrop-blur-xl border rounded-3xl p-8 md:p-10 shadow-2xl transition-all duration-500 animate-fade-in ${isDark ? 'bg-gray-900/60 border-gray-700/50 text-white' : 'bg-white/70 border-white/50 text-gray-900'
          }`}
        encType="multipart/form-data"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
            Create a New Post
          </h2>
          <Button
            type="button"
            onClick={() => navigate('/main')}
            variant="outline"
            size="icon"
            className={`rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-800/80 border-gray-700 text-white hover:bg-gray-700' : 'bg-white/80 border-gray-200 text-gray-900 hover:bg-gray-50'
              }`}
            aria-label="Close"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Title
            </label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`h-12 rounded-xl transition-all duration-200 ${isDark ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900 placeholder:text-gray-400'
                }`}
              placeholder="Enter post title"
              required
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <label className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Company
            </label>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`h-12 rounded-xl transition-all duration-200 ${isDark ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900 placeholder:text-gray-400'
                }`}
              placeholder="Company name"
              required
            />
          </div>

          {/* Type */}
          <div className="space-y-2">
            <label className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full h-12 rounded-xl px-4 transition-all duration-200 ${isDark ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900'
                } border focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-emerald-500' : 'focus:ring-sky-500'}`}
              required
            >
              <option value="">Select Type</option>
              <option value="job">Job</option>
              <option value="internship">Internship</option>
              <option value="scholarship">Scholarship</option>
              <option value="contest">Contest</option>
            </select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className={`w-full rounded-xl px-4 py-3 transition-all duration-200 resize-none ${isDark ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900 placeholder:text-gray-400'
                } border focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-emerald-500' : 'focus:ring-sky-500'}`}
              placeholder="Describe the opportunity..."
              required
            />
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Post Image */}
            <div className="space-y-2">
              <label className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Post Image
              </label>
              <div className={`relative h-12 rounded-xl border-2 border-dashed transition-all duration-200 ${isDark ? 'border-gray-700 hover:border-emerald-500' : 'border-gray-300 hover:border-sky-500'
                }`}>
                <input
                  type="file"
                  name="postImage"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex items-center justify-center h-full gap-2">
                  <ImageIcon size={18} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {formData.postImage ? formData.postImage.name : 'Choose image'}
                  </span>
                </div>
              </div>
            </div>

            {/* Company Logo */}
            <div className="space-y-2">
              <label className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Company Logo
              </label>
              <div className={`relative h-12 rounded-xl border-2 border-dashed transition-all duration-200 ${isDark ? 'border-gray-700 hover:border-emerald-500' : 'border-gray-300 hover:border-sky-500'
                }`}>
                <input
                  type="file"
                  name="companyLogo"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                <div className="flex items-center justify-center h-full gap-2">
                  <Upload size={18} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {formData.companyLogo ? formData.companyLogo.name : 'Choose logo'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Tags (comma-separated)
            </label>
            <Input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className={`h-12 rounded-xl transition-all duration-200 ${isDark ? 'bg-gray-800/50 border-gray-700 focus:border-emerald-500 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-200 focus:border-sky-500 text-gray-900 placeholder:text-gray-400'
                }`}
              placeholder="e.g., Remote, Full-time, Tech"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className={`h-12 rounded-xl font-bold w-full transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${isDark ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'
              }`}
          >
            Create Post
          </Button>
        </div>
      </form>
    </section>
  );
};

export default PostForm;