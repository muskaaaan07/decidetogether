
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Shortlist Dream Project',
    description: 'Use our Search & Map, 30-sec videos & Live Virtual Site Visit to quickly shortlist your top 3 projects.',
    align: 'left'
  },
  {
    number: '02',
    title: 'Express Interest',
    description: 'After shortlisting your top 3 projects, plan a site visit to choose your Dream Project—our RM will guide you with facts & data.',
    align: 'right'
  },
  {
    number: '03',
    title: 'Join Group',
    description: 'Once You have Shortlisted Your Dream Home, Join the Active Group of That Particular Project & choose your favorite Inventory based on current availability',
    align: 'left'
  },
  {
    number: '04',
    title: 'Unlock Discount',
    description: 'Enjoy exclusive discounts and benefits, saving significantly on your dream home through group buying power.',
    align: 'right'
  },
  {
    number: '05',
    title: 'Finalize Purchase',
    description: 'Once the group deal finalized, complete your individual purchase with confidence, knowing you secured the best possible value.',
    align: 'left'
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-24 bg-[#FAFAFA]">
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-[38px] font-[500] text-[#1A1A1A] leading-tight mb-2">
          How Does Group <br />
          <span className="text-[54px] font-[800] text-[#E66B4A]">decidetogether</span> Work?
        </h2>
        <p className="text-gray-400 text-[20px] font-medium">
          Follow the Simple <span className="text-[#E66B4A] border-b-2 border-[#E66B4A] pb-0.5">5 Steps</span> to Your Dream Home
        </p>
      </div>

      {/* Steps Container */}
      <div className="relative">
        {/* Curved Path Background (SVG) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full pointer-events-none overflow-visible">
          <svg width="100%" height="100%" viewBox="0 0 1000 1600" fill="none" preserveAspectRatio="none" className="h-full">
            <path 
              d="M500,0 C500,100 650,150 650,300 C650,450 350,450 350,600 C350,750 650,750 650,900 C650,1050 350,1050 350,1200 C350,1350 500,1400 500,1600" 
              stroke="#1A1A1A" 
              strokeWidth="3" 
              strokeDasharray="12 12" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Steps Content */}
        <div className="flex flex-col gap-32">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative flex items-center w-full ${step.align === 'left' ? 'justify-start' : 'justify-end'}`}
            >
              {/* Connector Point on Path */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-[#E66B4A] border-[5px] border-white shadow-md"></div>
              </div>

              {/* Step Card */}
              <div 
                className={`relative w-[45%] bg-gradient-to-r from-[#E66B4A] to-[#D1593C] rounded-[50px] p-8 md:p-10 shadow-[0_20px_40px_rgba(230,107,74,0.3)] transition-transform hover:scale-[1.02] duration-300
                  ${step.align === 'left' ? 'pr-20' : 'pl-20'}`}
              >
                {/* Step Number Badge */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 w-[110px] h-[110px] bg-white rounded-full flex flex-col items-center justify-center shadow-lg border border-orange-50
                    ${step.align === 'left' ? '-right-[55px]' : '-left-[55px]'}`}
                >
                  <span className="text-[14px] font-bold text-[#E66B4A] uppercase tracking-widest leading-none">Step</span>
                  <span className="text-[44px] font-[900] text-[#E66B4A] leading-none mt-1">{step.number}</span>
                  
                  {/* Small triangular pointer towards the center path */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-inherit rotate-45 -z-10
                      ${step.align === 'left' ? 'right-0 -mr-2' : 'left-0 -ml-2'}`}
                  ></div>
                </div>

                {/* Card Text */}
                <div className={`text-white ${step.align === 'left' ? 'text-left' : 'text-left'}`}>
                  <h3 className="text-[24px] md:text-[28px] font-[800] mb-3 leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-[15px] md:text-[17px] font-medium leading-[1.45]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
