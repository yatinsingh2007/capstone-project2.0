const testimonials = [
  {
    name: "Jane Doe",
    text: "NextHorizon transformed my job search experience!",
    photo: "/customer1.jpg",
  },
  {
    name: "John Smith",
    text: "I connected with amazing mentors through this platform.",
    photo: "/customer2.jpg",
  },
  {
    name: "Emily Johnson",
    text: "Highly recommend it to anyone serious about their career.",
    photo: "/customer3.jpg",
  },
  {
    name: "Michael Lee",
    text: "The opportunities listed here helped me land my dream internship.",
    photo: "/customer4.jpg",
  },
  {
    name: "Sophia Patel",
    text: "A very intuitive and supportive platform for freshers.",
    photo: "/customer5.jpg",
  },
  {
    name: "Daniel Garcia",
    text: "The UI is clean, and the mentors are amazing!",
    photo: "/customer6.jpg",
  },
  {
    name: "Priya Verma",
    text: "I never expected such high-quality resources in one place.",
    photo: "/customer7.jpg",
  },
  {
    name: "Liam Wright",
    text: "From workshops to mentorship, it covers everything I needed.",
    photo: "/customer8.jpg",
  },
  {
    name: "Aisha Ahmed",
    text: "This platform helped me transition from student to working professional.",
    photo: "/customer9.jpg",
  },
  {
    name: "Ethan Kim",
    text: "NextHorizon gave me the confidence to approach real-world projects.",
    photo: "/customer10.jpg",
  },
  {
    name: "Chloe Anderson",
    text: "I love how personalized the experience feels.",
    photo: "/customer11.jpg",
  },
  {
    name: "Raj Malhotra",
    text: "Game-changer for anyone looking to grow in tech.",
    photo: "/customer12.jpg",
  },
];

const TestimonialCarousel = () => (
  <section className="py-12 bg-gray-50" style={{ fontFamily: "'Sora', sans-serif" }}>
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