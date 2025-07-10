import { useState } from "react";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();

  return (
    <section
  id="contact"
  className="relative w-full py-16 bg-cover bg-center min-h-screen flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=crop&h=800&w=1600&q=80')",
      fontFamily: "'Sora', sans-serif",
  }}
>
  <button className="absolute top-2 left-2" onClick={(e) => {
    e.preventDefault();
    navigate('/')
  }}>
    <MoveLeft className="bg-white rounded-full p-1 h-8 w-8"/>
  </button>
  <div className="relative max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-white">
      Contact Us
    </h2>
    <form
      className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      action={"https://submit-form.com/on8AUDGDl"}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded hover:bg-green-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
  );
};

export default ContactForm;