
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

interface FAQPageProps {
  onSignInClick: () => void;
  onHomeClick: () => void;
  onPropertiesClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onArticlesClick: () => void;
  onCaseStudiesClick: () => void;
  onNewsClick: () => void;
  onFAQClick: () => void;
}

const FAQPage: React.FC<FAQPageProps> = (props) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar {...props} />
      <main className="py-10">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
