const SellingPoints = () => (
  <section
    className="py-16 bg-white"
    style={{ fontFamily: "'Sora', sans-serif" }}
  >
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto mb-12 px-4">
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Personalized Recommendations</h3>
        <p>
          Our intelligent algorithm curates the most relevant opportunities tailored
          to your unique skills and goals.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/selling-point1.jpg"
          alt="Personalized Recommendations"
          className="rounded shadow"
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto mb-12 px-4">
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Expert Community</h3>
        <p>
          Connect with industry leaders and mentors who can help you grow your career faster.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/selling-point2.jpg"
          alt="Expert Community"
          className="rounded shadow"
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto mb-12 px-4">
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Verified Opportunities</h3>
        <p>
          Every listing on NextHorizon is vetted by our team, ensuring you only apply
          to genuine, high-quality positions.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/selling-point3.jpg"
          alt="Verified Opportunities"
          className="rounded shadow"
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto px-4">
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
        <p>
          Access resources, webinars, and tutorials to stay updated with the latest trends
          and continuously upskill yourself.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="/selling-point4.jpg"
          alt="Continuous Learning"
          className="rounded shadow"
        />
      </div>
    </div>
  </section>
);

export default SellingPoints;