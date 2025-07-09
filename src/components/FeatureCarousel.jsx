const features = [
  {
    title: "Resume Review",
    description: "Get professional feedback on your resume.",
    image: "https://via.placeholder.com/400x300?text=Resume+Review",
  },
  {
    title: "1:1 Mentorship",
    description: "Book a session with an industry expert.",
    image: "https://via.placeholder.com/400x300?text=Mentorship",
  },
  {
    title: "Job Alerts",
    description: "Receive curated job alerts in your field.",
    image: "https://via.placeholder.com/400x300?text=Job+Alerts",
  },
  {
    title: "Interview Preparation",
    description: "Ace your interviews with expert tips and mock sessions.",
    image: "https://via.placeholder.com/400x300?text=Interview+Preparation",
  },
  {
    title: "Career Counseling",
    description: "Get career advice from experienced professionals.",
    image: "https://via.placeholder.com/400x300?text=Career+Counseling",
  },
  {
    title: "Skill Building Workshops",
    description: "Enhance your skills with hands-on training.",
    image: "https://via.placeholder.com/400x300?text=Skill+Workshops",
  },
];

const FeatureCarousel = () => (
  <section className="py-12 bg-gray-100" id="home" style={{ fontFamily: "'Sora', sans-serif" }}>
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
    <div className="flex overflow-x-auto space-x-6 px-4 pb-4 snap-x snap-mandatory">
      {features.map((item, idx) => (
        <div
          key={idx}
          className="min-w-[250px] bg-white rounded shadow p-4 flex-shrink-0 snap-center"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <button className="bg-black text-white px-4 py-2 rounded hover:scale-105 transition-all duration-150">
            Learn More
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureCarousel;