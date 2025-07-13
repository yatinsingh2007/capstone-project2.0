import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
const faqs = [
  {
    question: "What is NextHorizon?",
    answer:
      "NextHorizon is a platform that connects you with verified opportunities, internships, and professionals to accelerate your career growth.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Simply click the 'Sign Up' button on the top right and follow the registration steps. You can also sign up with Google for faster access.",
  },
  {
    question: "Is NextHorizon free to use?",
    answer:
      "Yes! Creating an account and browsing opportunities is completely free. We also offer premium features for advanced networking.",
  },
  {
    question: "How do I verify my profile?",
    answer:
      "After signing up, go to your profile settings and submit verification documents. Our team will review them within 48 hours.",
  },
  {
    question: "Can I post my own opportunities?",
    answer:
      "Absolutely. Once your profile is verified, you can create and share opportunities directly from your dashboard.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-12 bg-gray-50 min-h-screen"
      style={{ fontFamily: "'Sora', sans-serif" }}
      id="faqs"
    >
      <button className="fixed top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors" onClick={() => navigate('/')}>
        <MoveLeft className="w-6 h-6"/>
      </button>
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            >
              <span className="font-medium">{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="p-4 border-t text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;