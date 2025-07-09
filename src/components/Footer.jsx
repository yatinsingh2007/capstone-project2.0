import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black text-white py-8 px-4" style={{ fontFamily: "'Sora', sans-serif" }}>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p className="text-center text-sm">
      &copy; 2025 NextHorizon. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  </footer>
);

export default Footer;