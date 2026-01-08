
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import PropertiesSection from '../components/PropertiesSection';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection';
import AboutSection from '../components/AboutSection';
import SavingsCalculatorSection from '../components/SavingsCalculatorSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ArticlesSection from '../components/ArticlesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ExclusiveDealsSection from '../components/ExclusiveDealsSection';
import FAQSection from '../components/FAQSection';
import EMICalculatorSection from '../components/EMICalculatorSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

interface HomePageProps {
  onSignInClick: () => void;
  onPropertiesClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onArticlesClick: () => void;
  onCaseStudiesClick: () => void;
  onNewsClick: () => void;
  onFAQClick: () => void;
  onHomeClick: () => void;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const [selectedCity, setSelectedCity] = useState('Gurugram');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleFilterChange = (city: string, location: string) => {
    setSelectedCity(city);
    setSelectedLocation(location);
  };

  return (
    <>
      <Navbar {...props} />
      
      <main className="overflow-hidden">
        <Hero onJoinClick={props.onSignInClick} />
        
        <SearchSection onFilterChange={handleFilterChange} />
        
        <PropertiesSection selectedCity={selectedCity} selectedLocation={selectedLocation} />
        <div id="how-it-works-section">
          <HowItWorksSection />
        </div>

        <ProjectShowcaseSection onBookVisit={props.onSignInClick} />

        <AboutSection onGetInTouch={props.onSignInClick} />

        <div id="calculator-section">
          <SavingsCalculatorSection />
        </div>

        <EMICalculatorSection />

        <div id="articles-section">
          <ArticlesSection />
        </div>

        <TestimonialsSection />

        

        <div id="faq-section">
          <FAQSection />
        </div>

        <div id="newsletter-section">
          <NewsletterSection />
        </div>

        <ExclusiveDealsSection onGetInTouch={props.onSignInClick} />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
