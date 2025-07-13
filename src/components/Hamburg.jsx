import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/nexthorizon-high-resolution-logo-transparent.png"
import {Link} from 'react-router-dom';

const Hamburg = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="bg-white/70 text-black fixed top-0 w-full z-20 backdrop-blur-sm" style={{ fontFamily: "'Sora', sans-serif" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          navOpen ? 'max-h-96 opacity-100 bg-white/70 backdrop-blur-sm' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 font-light">
          <li><a href="#home" className="hover:text-blue-800">Home</a></li>
          <li><a href="#benefits" className="hover:text-blue-800">Benefits</a></li>
          <li><a href="#features" className="hover:text-blue-800">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-800">Testimonials</a></li>
          <li>
            <Link to="/faqs" className="hover:text-blue-800">FAQs</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-800">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-800">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburg;
