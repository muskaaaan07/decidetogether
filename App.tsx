
import React, { useState, useEffect } from 'react';
import LoginModal from './components/LoginModal';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ArticlesPage from './pages/ArticlesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import NewsPage from './pages/NewsPage';
import FAQPage from './pages/FAQPage';

type Page = 'home' | 'properties' | 'about' | 'contact' | 'articles' | 'casestudies' | 'news' | 'faq';

const App: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoginModalOpen]);

  // Handle internal navigation
  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navHandlers = {
    onHomeClick: () => navigateTo('home'),
    onPropertiesClick: () => navigateTo('properties'),
    onAboutClick: () => navigateTo('about'),
    onContactClick: () => navigateTo('contact'),
    onArticlesClick: () => navigateTo('articles'),
    onCaseStudiesClick: () => navigateTo('casestudies'),
    onNewsClick: () => navigateTo('news'),
    onFAQClick: () => navigateTo('faq'),
    onSignInClick: () => setIsLoginModalOpen(true),
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'properties':
        return <PropertiesPage {...navHandlers} />;
      case 'about':
        return <AboutPage {...navHandlers} />;
      case 'contact':
        return <ContactPage {...navHandlers} />;
      case 'articles':
        return <ArticlesPage {...navHandlers} />;
      case 'casestudies':
        return <CaseStudiesPage {...navHandlers} />;
      case 'news':
        return <NewsPage {...navHandlers} />;
      case 'faq':
        return <FAQPage {...navHandlers} />;
      default:
        return <HomePage {...navHandlers} />;
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#E66B4A]/30">
      {renderPage()}

      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
