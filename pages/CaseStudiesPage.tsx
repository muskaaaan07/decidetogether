
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface CaseStudiesPageProps {
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

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = (props) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar {...props} />
      <main className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-[54px] font-[800] text-[#1A1A1A] tracking-tighter">Case Studies</h1>
          <p className="text-gray-400 text-xl font-medium mt-4">Discover how our communities saved crores on their dream homes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map(i => (
            <div key={i} className="bg-orange-50 rounded-[48px] p-12 border border-orange-100">
               <div className="w-16 h-16 bg-[#E66B4A] rounded-2xl mb-8 flex items-center justify-center text-white">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
               </div>
               <h3 className="text-[32px] font-[900] text-[#1A1A1A] mb-4">Project Alpha Savings</h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">Detailed breakdown of how 25 families pooled their demand to secure a 18% group discount, saving a total of ₹4.5 Crores collectively.</p>
               <button className="font-bold text-[#E66B4A] flex items-center gap-2 hover:gap-3 transition-all">
                 Read Full Case Study <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
               </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
