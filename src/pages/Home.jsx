import React from 'react';
import HomeHero from '../components/homeparts/HomeHero'; // Assuming you put HomeHero in your components folder
import HomeSectionWrapper from '../components/homeparts/HomeSectionWrapper'; // Assuming you put HomeSectionWrapper in your components folder
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import News from '../pages/News';
import Contact from '../pages/Contact';
import { HomeLayout } from '../layouts/Layout';
import HomeSlider from '../components/homeparts/HomeSlider';

const Home = () => {
  return (
    <HomeLayout>
      <div className="w-full flex justify-center mb-8">
        <HomeSlider />
      </div>
      <HomeHero />
      <HomeSectionWrapper id="about" >
        <About isSummary={true} />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="services" >
        <Services />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="portfolio">
        <Portfolio />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="news">
        <News />
      </HomeSectionWrapper>
      <HomeSectionWrapper id="contact">
        <Contact isSummary={true} />
      </HomeSectionWrapper>
    </HomeLayout>
  );
};

export default Home;