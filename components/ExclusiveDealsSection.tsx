
import React from 'react';

interface ExclusiveDealsSectionProps {
  onGetInTouch: () => void;
}

const ExclusiveDealsSection: React.FC<ExclusiveDealsSectionProps> = ({ onGetInTouch }) => {
  return (
    <section className="max-w-[1320px] mx-auto px-6 py-12">
      <div className="relative bg-[#EF7F61] rounded-[48px] overflow-hidden p-12 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-orange-100">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-exclusive" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-exclusive)" />
          </svg>
        </div>

        {/* Left Side: Content */}
        <div className="relative z-10 w-full md:w-[70%] text-left">
          <h2 className="text-white text-[56px] md:text-[72px] font-[800] leading-[1.05] mb-6 tracking-tight">
            Top Exclusive<br />Properties
          </h2>
          <p className="text-white/95 text-[20px] md:text-[22px] font-[500] leading-relaxed max-w-[500px]">
            Book a Visit now and get the Biggest offer on Exclusive Properties.
          </p>
        </div>

        {/* Right Side: Action Button */}
        <div className="relative z-10 mt-10 md:mt-0">
          <button 
            onClick={onGetInTouch}
            className="bg-white text-[#1A1A1A] px-12 py-5 rounded-full font-[800] text-[20px] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get in touch
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default ExclusiveDealsSection;
