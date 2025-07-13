const testimonials = [
  {
    name: "Jane Doe",
    text: "NextHorizon transformed my job search experience!",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    text: "I connected with amazing mentors through this platform.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Johnson",
    text: "Highly recommend it to anyone serious about their career.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Lee",
    text: "The opportunities listed here helped me land my dream internship.",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sophia Patel",
    text: "A very intuitive and supportive platform for freshers.",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Daniel Garcia",
    text: "The UI is clean, and the mentors are amazing!",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Priya Verma",
    text: "I never expected such high-quality resources in one place.",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Liam Wright",
    text: "From workshops to mentorship, it covers everything I needed.",
    photo: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    name: "Aisha Ahmed",
    text: "This platform helped me transition from student to working professional.",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Ethan Kim",
    text: "NextHorizon gave me the confidence to approach real-world projects.",
    photo: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Chloe Anderson",
    text: "I love how personalized the experience feels.",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Raj Malhotra",
    text: "Game-changer for anyone looking to grow in tech.",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const TestimonialCarousel = () => (
  <section className="py-12 bg-gray-50" style={{ fontFamily: "'Sora', sans-serif" }} id="testimonials">
    <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
    <div className="flex overflow-x-auto space-x-6 px-4 pb-4 snap-x snap-mandatory">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="max-w-[250px] bg-white rounded shadow p-6 flex-shrink-0 snap-center"
        >
          {t.photo && (
            <img
              src={t.photo}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
          )}
          <p className="italic mb-2">"{t.text}"</p>
          <h4 className="font-semibold">{t.name}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialCarousel;