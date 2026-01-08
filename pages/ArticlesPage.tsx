
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticlesSection from '../components/ArticlesSection';

interface ArticlesPageProps {
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

const ArticlesPage: React.FC<ArticlesPageProps> = (props) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar {...props} />
      <main className="py-20">
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
