import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { motion } from 'framer-motion';
import { Target, Users as UsersIcon, CheckCircle, TrendingUp } from 'lucide-react';

const benefits = [
  {
    title: "Personalized Recommendations",
    description: "Our intelligent algorithm curates the most relevant opportunities tailored to your unique skills and goals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspb8JDTwj2XoulelPZ-_CR2MuICXXYY9QvlXE4nQD7dZz4YArxXA927s5RAxchT7ozNA&usqp=CAU",
    icon: Target,
  },
  {
    title: "Expert Community",
    description: "Connect with industry leaders and mentors who can help you grow your career faster.",
    image: "https://www.uscreen.tv/wp-content/uploads/2022/05/online-community-expert-tips-1050x600.jpg",
    icon: UsersIcon,
  },
  {
    title: "Verified Opportunities",
    description: "Every listing on NextHorizon is vetted by our team, ensuring you only apply to genuine, high-quality positions.",
    image: "https://freshers.jobs/wp-content/uploads/2025/03/Why-Company-Verification-Is-Crucial-for-Freshers-Seeking-Reliable-Job-Opportunities-758x379.webp",
    icon: CheckCircle,
  },
  {
    title: "Continuous Learning",
    description: "Access resources, webinars, and tutorials to stay updated with the latest trends and continuously upskill yourself.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHRRc16V-lK6OSwRz-qSXFaReOEPLKCTCBNP-WhbdWKIRmUUdegBkQByxtowAdVLvUYg&usqp=CAU",
    icon: TrendingUp,
  },
];

const SellingPoints = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <section
      className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-950' : 'bg-white'}`}
      style={{ fontFamily: "'Sora', sans-serif" }}
      id="benefits"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why Choose NextHorizon?
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Discover the features that set us apart
          </p>
        </motion.div>

        <div className="space-y-20">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isReverse = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ x: isReverse ? 10 : -10 }}
                  className="flex-1 space-y-4"
                >
                  <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${isDark ? 'bg-gradient-to-br from-emerald-600 to-sky-600' : 'bg-gradient-to-br from-sky-500 to-emerald-500'
                    }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {benefit.title}
                  </h3>

                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {benefit.description}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-1"
                >
                  <div className={`relative rounded-3xl overflow-hidden shadow-2xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200'
                    }`}>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900/50 to-transparent' : 'from-white/20 to-transparent'
                      }`} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SellingPoints;