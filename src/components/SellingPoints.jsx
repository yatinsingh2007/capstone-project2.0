const SellingPoints = () => (
  <section
    className="py-16 bg-white"
    style={{ fontFamily: "'Sora', sans-serif" }}
    id="benefits"
  >
    <main className="flex flex-col md:flex-row items-center max-w-6xl mx-auto mb-12 px-4">
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Personalized Recommendations</h3>
        <p>
          Our intelligent algorithm curates the most relevant opportunities tailored
          to your unique skills and goals.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspb8JDTwj2XoulelPZ-_CR2MuICXXYY9QvlXE4nQD7dZz4YArxXA927s5RAxchT7ozNA&usqp=CAU"
          alt="Personalized Recommendations"
          className="rounded shadow w-full h-64 object-cover"
        />
      </div>
    </main>
    <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl mx-auto mb-12 px-4 gap-2">
      <div className="flex-1 mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Expert Community</h3>
        <p>
          Connect with industry leaders and mentors who can help you grow your career faster.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="https://www.uscreen.tv/wp-content/uploads/2022/05/online-community-expert-tips-1050x600.jpg"
          alt="Expert Community"
          className="rounded shadow w-full h-64 object-cover"
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
          src="https://freshers.jobs/wp-content/uploads/2025/03/Why-Company-Verification-Is-Crucial-for-Freshers-Seeking-Reliable-Job-Opportunities-758x379.webp"
          alt="Verified Opportunities"
          className="rounded shadow w-full h-64 object-cover"
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHRRc16V-lK6OSwRz-qSXFaReOEPLKCTCBNP-WhbdWKIRmUUdegBkQByxtowAdVLvUYg&usqp=CAU"
          alt="Continuous Learning"
          className="rounded shadow w-full h-64 object-cover"
        />
      </div>
    </div>
  </section>
);

export default SellingPoints;