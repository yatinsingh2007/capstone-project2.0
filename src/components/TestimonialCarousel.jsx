import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { AnimatedTestimonials } from './ui/animated-testimonials';

const testimonials = [
  {
    name: "Jane Doe",
    designation: "Software Engineer",
    text: "NextHorizon transformed my job search experience! The platform connected me with amazing opportunities and mentors who helped me grow professionally.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    designation: "Product Manager",
    text: "I connected with amazing mentors through this platform. The quality of connections and opportunities here is unmatched in the industry.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Johnson",
    designation: "UX Designer",
    text: "Highly recommend it to anyone serious about their career. The resources and community support are exceptional.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Lee",
    designation: "Data Scientist",
    text: "The opportunities listed here helped me land my dream internship. The platform's AI-powered matching is incredibly accurate.",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sophia Patel",
    designation: "Marketing Specialist",
    text: "A very intuitive and supportive platform for freshers. The onboarding process was smooth and the community is welcoming.",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Daniel Garcia",
    designation: "Full Stack Developer",
    text: "The UI is clean, and the mentors are amazing! I've learned so much from the experienced professionals on this platform.",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const TestimonialCarousel = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`py-20 transition-colors duration-500 ${theme === 'dark' ? 'dark bg-gray-950' : 'bg-gray-50'}`}
      style={{ fontFamily: "'Sora', sans-serif" }}
      id="testimonials"
    >
      <div className="text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          What Our Users Say
        </h2>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Hear from professionals who transformed their careers with NextHorizon
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
};

export default TestimonialCarousel;