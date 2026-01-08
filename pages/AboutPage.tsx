
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AboutPageProps {
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

const AboutPage: React.FC<AboutPageProps> = (props) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar {...props} />

      <main>
        {/* Section 1: Power of Group Buying */}
        <section className="max-w-[1200px] mx-auto px-6 pt-24 pb-20">
          <div className="text-center mb-20">
            <h1 className="text-[48px] md:text-[64px] font-[800] text-[#1A1A1A] leading-[1.1] tracking-tight mb-2">
              See the Power of <br />
              <span className="text-[#E66B4A]">Group Buying</span> in Action
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Stat Card 1: Yellow */}
            <div className="bg-[#FFF8E1] rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-[#FFECB3] rounded-[24px] flex items-center justify-center mb-10 relative z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBC02D" strokeWidth="2.5">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-[36px] font-[900] text-[#1A1A1A] leading-none mb-2">25+</span>
                <span className="text-[17px] font-[700] text-gray-800">Crore Saved</span>
              </div>
            </div>

            {/* Stat Card 2: Blue */}
            <div className="bg-[#E3F2FD] rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-[#BBDEFB] rounded-[24px] flex items-center justify-center mb-10 relative z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-[36px] font-[900] text-[#1A1A1A] leading-none mb-2">150+</span>
                <span className="text-[17px] font-[700] text-gray-800">Buyers Empowered</span>
              </div>
            </div>

            {/* Stat Card 3: Green */}
            <div className="bg-[#E8F5E9] rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-[#C8E6C9] rounded-[24px] flex items-center justify-center mb-10 relative z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#43A047" strokeWidth="2.5">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-[36px] font-[900] text-[#1A1A1A] leading-none mb-2">10+</span>
                <span className="text-[17px] font-[700] text-gray-800">Project Negotiated</span>
              </div>
            </div>

            {/* Stat Card 4: Purple */}
            <div className="bg-[#F3E5F5] rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              <div className="w-16 h-16 bg-[#E1BEE7] rounded-[24px] flex items-center justify-center mb-10 relative z-10">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8E24AA" strokeWidth="2.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-[36px] font-[900] text-[#1A1A1A] leading-none mb-2">20%</span>
                <span className="text-[17px] font-[700] text-gray-800">Average Discount Unlocked</span>
              </div>
            </div>
          </div>

          <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-[#1A1A1A]/80 text-[18px] md:text-[20px] font-medium leading-relaxed">
              In India, one of the biggest regrets for homebuyers has always been finding out later that a neighbour or colleague bought the same house for less. For years, individuals paid inflated prices while bulk buyers and institutions enjoyed exclusive discounts. At decidetogether, we're rewriting the story. By teaming up, buyers negotiate directly with developers, unlocking exclusive deals and pre-launch prices that were never available to individuals before.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
