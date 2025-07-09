import { Link } from 'react-router-dom';
import logo from '../assets/nexthorizon-high-resolution-logo-transparent.png';
const HomeNav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 text-black z-20 backdrop-blur-sm" style={{ fontFamily: "'Sora', sans-serif" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="text-xl font-bold">
              <img src={logo} alt="NextHorizon Logo" className="h-8 w-auto" />
            </div>
            <ul className="flex md:flex space-x-6 font-light">
                <li><a href="#home" className="hover:text-blue-800">Home</a></li>
                <li><a href="#benefits" className="hover:text-blue-800">Benefits</a></li>
                <li><a href="#features" className="hover:text-blue-800">Features</a></li>
                <li><a href="#testimonials" className="hover:text-blue-800">Testimonials</a></li>
                <li>
                  <Link to="/contact" className="hover:text-blue-800">Contact</Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-blue-800">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default HomeNav