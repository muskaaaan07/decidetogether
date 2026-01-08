
import React from 'react';

interface AboutSectionProps {
  onGetInTouch: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onGetInTouch }) => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-20">
      {/* Upper Header Text */}
      <div className="mb-10 pl-2">
        <h2 className="text-[44px] font-[800] text-[#1A1A1A] leading-[1.1] mb-2 tracking-tight">
          Unlock unbeatable deals through<br />group buyings
        </h2>
        <p className="text-gray-400 font-medium text-[20px] tracking-tight">
          save big, stay secure, and enjoy full<br />support from start to finish.
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="relative bg-[#E66B4A] rounded-[48px] overflow-hidden min-h-[580px] flex items-center shadow-2xl shadow-orange-100">
        
        {/* Background Grid Pattern (Simulated with SVG) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-10 md:px-20 py-16">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-[55%]">
            <h1 className="text-white text-[72px] font-[800] leading-[1.05] mb-8 tracking-tighter">
              About Decide<br />Together
            </h1>
            
            <p className="text-white/95 text-[22px] font-[500] leading-[1.5] mb-12 max-w-[580px]">
              Buying a home is expensive, but what if home buyers could team up with their future neighbours & negotiate better deals just like big investors do? That's what we've built at decidetogether.in a platform that helps homebuyers unlock exclusive discounts through collective buying.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={onGetInTouch}
                className="bg-white text-gray-900 px-10 py-4.5 rounded-full font-[800] text-[18px] shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Get in touch
              </button>
              
              <button className="flex items-center gap-2.5 bg-[#D1593C] text-white px-9 py-4.5 rounded-full font-[800] text-[18px] hover:bg-[#C04E33] transition-all group">
                <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="hidden lg:flex w-full lg:w-[40%] items-center justify-end">
            <div className="relative group">
              {/* Using a high-fidelity building image from Unsplash as placeholder for the specific cutout */}
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" 
                alt="High-rise building" 
                className="w-[420px] h-auto rounded-[24px] shadow-2xl transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700"
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)' }}
              />
              {/* Overlay shadow for depth */}
              <div className="absolute inset-0 bg-black/5 rounded-[24px] pointer-events-none transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-700"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
