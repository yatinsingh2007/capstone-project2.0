import { useEffect , useState } from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import FeatureCarousel from './FeatureCarousel'
import TestimonialCarousel from './TestimonialCarousel'
import SellingPoints from './SellingPoints'
import HomeNav from './HomeNav';
import Hamburg from './Hamburg';
const LandingPage = () => {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {smallScreen ? <Hamburg /> : <HomeNav />}
      <HeroSection />
      <FeatureCarousel />
      <SellingPoints />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
};

export default LandingPage;