
import React from 'react';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 pt-10 pb-16 relative">
      {/* Main Relative Container (No overflow-hidden here so badges can bleed) */}
      <div className="relative min-h-[540px]">
        
        {/* Background & Content Wrapper (This handles the clipping of the image and pattern) */}
        <div className="absolute inset-0 bg-[#E66B4A] rounded-[56px] overflow-hidden hero-pattern shadow-2xl shadow-orange-100">
          {/* Background Detail */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none"></div>

          {/* Hero Image - Clipped at bottom by the overflow-hidden parent */}
          <div className="absolute right-0 bottom-0 w-[65%] h-full hidden lg:block pointer-events-none">
            <div className="relative w-full h-full flex items-end justify-end">
              <img 
                src="/img.jpg" 
                alt="Luxury Home" 
                className="max-h-[120%] w-auto object-contain transform translate-y-0 translate-x-12"
              />
            </div>
          </div>
        </div>

        {/* Content - Positioned over the background */}
        <div className="relative z-10 w-full lg:w-[60%] pl-10 md:pl-20 pr-8 py-20">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/90 text-sm font-bold tracking-wide mb-6 backdrop-blur-sm border border-white/10">
            DREAM HOME DESTINATION
          </div>
          
          <h2 className="text-white/95 text-xl md:text-2xl font-semibold mb-2">
            Looking to buy your Dream Home?
          </h2>
          
          <h1 className="text-white text-6xl md:text-[84px] font-[900] leading-[0.95] mb-8 tracking-[-0.04em] text-shadow-sm">
            Why Pay <br /> More alone?
          </h1>
          
          <p className="text-white/90 text-2xl font-medium mb-12 max-w-md">
            Unlock Bigger Savings Together! Join India's largest group buying community.
          </p>
          
          <button 
            onClick={onJoinClick}
            className="group flex items-center gap-3 bg-white text-[#E66B4A] px-10 py-5 rounded-full font-[800] text-xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Join Community
            <div className="bg-[#E66B4A] text-white p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </button>
        </div>

        {/* Floating Badges - Absolute to the container, translated to overlap the bottom edge */}
        <div className="absolute bottom-0 left-10 md:left-24 translate-y-1/2 flex flex-col md:flex-row gap-5 items-center z-30">
          
          {/* Badge 1: Savings */}
          <div className="bg-white rounded-[40px] py-3.5 px-4 pr-10 flex items-center gap-4 shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-gray-50 group hover:scale-105 transition-transform duration-300">
            <div className="flex -space-x-3.5 ml-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-11 h-11 rounded-full border-[3px] border-white overflow-hidden shadow-sm">
                   <img 
                    className="w-full h-full object-cover" 
                    src={`https://i.pravatar.cc/150?u=user${i}`} 
                    alt="User"
                  />
                </div>
              ))}
              <div className="w-11 h-11 rounded-full border-[3px] border-white bg-[#1A1A1A] text-white flex items-center justify-center text-[10px] font-black">
                150+
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 text-[17px] font-extrabold leading-tight">we've saved Rs. 25Cr for</span>
              <span className="text-gray-500 text-[15px] font-semibold">150+ Families.</span>
            </div>
          </div>

          {/* Badge 2: Unique Plans */}
          <div className="bg-white rounded-[40px] py-3.5 px-4 pr-10 flex items-center gap-4 shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-gray-50 group hover:scale-105 transition-transform duration-300">
            <div className="w-11 h-11 bg-orange-50 rounded-full flex items-center justify-center ml-1 border border-orange-100/50">
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E66B4A" strokeWidth="2.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 text-[17px] font-extrabold leading-tight">Unique Group</span>
              <span className="text-gray-500 text-[15px] font-semibold">buying plans.</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
