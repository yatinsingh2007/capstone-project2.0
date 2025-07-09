import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&h=800&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

      <div className="relative z-10 text-center max-w-3xl px-4" style={{ fontFamily: "'Sora', sans-serif" }}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
          Welcome to NextHorizon
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Empower Your Career Today
        </h2>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light">
          Discover curated opportunities, connect with industry experts, and take your career to the next level.
        </p>
        <button
          className="bg-black text-white px-6 py-3 rounded text-lg hover:scale-105 transition-all duration-75"
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Start From Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;