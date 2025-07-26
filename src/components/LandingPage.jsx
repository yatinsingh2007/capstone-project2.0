import React, { useEffect , useState } from 'react';
const HeroSection = React.lazy(() => import('./HeroSection'));
const Footer = React.lazy(() => import('./Footer'));
const FeatureCarousel = React.lazy(() => import('./FeatureCarousel'));
const TestimonialCarousel = React.lazy(() => import('./TestimonialCarousel'));
const SellingPoints = React.lazy(() => import('./SellingPoints'));
const HomeNav = React.lazy(() => import('./HomeNav'));
const Hamburg = React.lazy(() => import('./Hamburg'));
import { Helmet } from 'react-helmet';
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
    <>
      <Helmet>
        <title>NextHorizon</title>
        <meta name="description" content="Explore opportunities, connect with professionals, and enhance your career with NextHorizon." />
      </Helmet>
      <main>
        {smallScreen ? <Hamburg /> : <HomeNav />}
        <HeroSection />
        <FeatureCarousel />
        <SellingPoints />
        <TestimonialCarousel />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;