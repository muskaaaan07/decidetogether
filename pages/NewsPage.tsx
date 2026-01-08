
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface NewsPageProps {
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

const NewsPage: React.FC<NewsPageProps> = (props) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar {...props} />
      <main className="max-w-[1000px] mx-auto px-6 py-24">
        <div className="mb-20">
          <h1 className="text-[54px] font-[800] text-[#1A1A1A] tracking-tighter">Latest News</h1>
        </div>
        
        <div className="space-y-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col md:flex-row gap-10 pb-12 border-b border-gray-100 group">
               <div className="w-full md:w-[300px] h-[200px] bg-gray-100 rounded-3xl overflow-hidden">
                 <img src={`https://images.unsplash.com/photo-1590601448391-684e96d81494?auto=format&fit=crop&q=80&w=600`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
               </div>
               <div className="flex-1 py-2">
                 <span className="text-[12px] font-bold text-[#E66B4A] uppercase tracking-widest mb-2 block">12th Jan 2026</span>
                 <h3 className="text-[28px] font-[800] text-[#1A1A1A] mb-4 group-hover:text-[#E66B4A] transition-colors">Real Estate Prices in Gurugram Expected to Stabilize</h3>
                 <p className="text-gray-500 font-medium leading-relaxed">Recent market analysis shows a steadying of prices across luxury segments as inventory levels reach equilibrium...</p>
               </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
