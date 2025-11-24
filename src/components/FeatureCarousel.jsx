import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import { motion } from 'framer-motion';
import { Briefcase, Users, Filter, CheckCircle, BookOpen } from 'lucide-react';

const features = [
  {
    title: "Opportunity Feed",
    description: "Scroll through the latest internships, projects, and networking posts tailored to your goals.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Briefcase,
  },
  {
    title: "Smart Connect",
    description: "Send, accept, or reject connect requests with industry professionals and mentors.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Users,
  },
  {
    title: "Filtered Discovery",
    description: "Use smart filters to discover opportunities by field, location, and interest.",
    image: "https://images.unsplash.com/photo-1600267165673-0f921f075fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Filter,
  },
  {
    title: "Verified Posts",
    description: "Know who created each opportunity. Engage only with authentic, verified posts.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: CheckCircle,
  },
  {
    title: "Continuous Learning",
    description: "Access resources, webinars, and tutorials to stay updated with the latest trends.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: BookOpen,
  },
];

const FeatureCarousel = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <section
      className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-sky-50 to-emerald-50'}`}
      style={{ fontFamily: "'Sora', sans-serif" }}
      id="features"
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
            Our Services
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to accelerate your career journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`backdrop-blur-xl border rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group ${isDark ? 'bg-gray-900/60 border-gray-700/50' : 'bg-white/70 border-white/50'
                  }`}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 p-3 rounded-xl backdrop-blur-md ${isDark ? 'bg-gray-900/60' : 'bg-white/60'
                    }`}>
                    <Icon className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-sky-600'}`} />
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;