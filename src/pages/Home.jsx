import React, { use, useEffect } from 'react';
import HomeHero from '../components/homeparts/HomeHero'; // Assuming you put HomeHero in your components folder
import HomeSectionWrapper from '../components/homeparts/HomeSectionWrapper'; // Assuming you put HomeSectionWrapper in your components folder
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import News from '../pages/News';
import Contact from '../pages/Contact';
import HomeSlider from '../components/homeparts/HomeSlider';
import { usePageContext } from '../context/PageContext';

const Home = () => {
  const { isHome, setIsHome } = usePageContext(); // Use the context to determine the page type
  const location = window.location.pathname

  // console.log("Current location:", location);

  useEffect(() => {
    location === '/home' ? setIsHome(true) : setIsHome(false);
  }, [location]);

  return (
    <>
      <div className="w-full flex justify-center mb-8">
        <HomeSlider />
      </div>
      <HomeHero />
      <HomeSectionWrapper id="about" >
        <About isSummary={true} isHome={isHome} />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="services" >
        <Services isSummary={true} />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="portfolio">
        <Portfolio isSummary={true} />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="news">
        <News isSummary={true} />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="contact">
        <Contact isSummary={true} />
      </HomeSectionWrapper>
    </>
  );
};

export default Home;