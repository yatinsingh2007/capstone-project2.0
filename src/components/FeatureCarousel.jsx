const features = [
  {
    title: "Opportunity Feed",
    description: "Scroll through the latest internships, projects, and networking posts tailored to your goals.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
  title: "Smart Connect",
  description: "Send, accept, or reject connect requests with industry professionals and mentors.",
  image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
},
{
  title: "Filtered Discovery",
  description: "Use smart filters to discover opportunities by field, location, and interest.",
  image: "https://images.unsplash.com/photo-1600267165673-0f921f075fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
},
  {
    title: "Verified Posts",
    description: "Know who created each opportunity. Engage only with authentic, verified posts.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "User Testimonials",
    description: "Real stories from real users. Learn how NextHorizon transformed their careers.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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