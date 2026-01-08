
import React, { useState, useEffect } from 'react';

interface SlideData {
  city: string;
  savedAmount: string;
  totalSavings: string;
  families: string;
  image: string;
}

const slides: SlideData[] = [
  {
    city: 'New Delhi',
    savedAmount: '40 Lakhs',
    totalSavings: '25cr +',
    families: '125+',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1600'
  },
  {
    city: 'Gurugram',
    savedAmount: '60 Lakhs',
    totalSavings: '42cr +',
    families: '200+',
    image: 'https://images.unsplash.com/photo-1590601448391-684e96d81494?auto=format&fit=crop&q=80&w=1600'
  },
  {
    city: 'Greater Noida',
    savedAmount: '35 Lakhs',
    totalSavings: '18cr +',
    families: '90+',
    image: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=1600'
  }
];

const SavingsCalculatorSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [apartmentCost, setApartmentCost] = useState(11.27); // In Crores
  const [buyerCount, setBuyerCount] = useState(6);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Formula: approx 9% savings based on the image example (1.01 / 11.27 is ~0.09)
  const calculatedSavings = (apartmentCost * (buyerCount / 6) * 0.09).toFixed(2);

  const current = slides[currentIndex];

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-6 relative">
        {/* Main Section Container - Reduced Height to 620px */}
        <div className="relative w-full h-[620px] rounded-[60px] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
            <img 
              src={current.image} 
              alt={current.city}
              className="w-full h-full object-cover brightness-[0.85]"
            />
            {/* Subtle Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10"></div>
          </div>

          {/* Navigation Arrows - Adjusted for better visibility on background */}
          <button 
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-40 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-gray-800 border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-[480px] top-1/2 -translate-y-1/2 z-40 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-gray-800 border border-gray-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* LEFT AREA: Info & Branding */}
          <div className="absolute top-[60px] left-[12%] z-20 flex flex-col items-start h-full">
            {/* Orange Info Card */}
            <div className="bg-[#EF7F61] p-10 md:p-12 rounded-[56px] shadow-2xl max-w-[500px] border border-white/20 backdrop-blur-sm relative overflow-hidden">
               {/* Grid Pattern Background */}
               <div className="absolute inset-0 opacity-[0.15] pointer-events-none p-4">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid-calc-compact" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-calc-compact)" />
                  </svg>
                </div>

              {/* Headline Text - fixed alignment */}
              <h2 className="text-white text-[64px] font-[900] leading-[0.95] mb-6 tracking-[-0.03em] relative z-10">
                We Saved <br />
                {current.totalSavings} for <br />
                {current.families} families.
              </h2>
              <p className="text-white/90 text-[20px] font-[600] tracking-tight relative z-10 leading-tight">
                Save more and more with Decide Together.
              </p>
            </div>

            {/* Location & Savings Badge - Bottom Aligned */}
            <div className="absolute bottom-[100px] left-8 flex flex-col items-start gap-4">
              <div className="bg-[#EF7F61] px-7 py-3 rounded-[20px] text-white font-[800] text-[18px] shadow-xl border border-white/20 transform -rotate-1">
                Saved {current.savedAmount}
              </div>
              <div className="flex items-center gap-4 text-white text-[64px] font-[900] tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#EF7F61] shadow-2xl">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" fill="white" />
                  </svg>
                </div>
                {current.city}
              </div>
            </div>
          </div>

          {/* RIGHT AREA: Calculator Card - Made smaller/more compact */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[40px] z-20 w-full max-w-[420px]">
            <div className="bg-white p-10 rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-gray-50 flex flex-col gap-8">
              <h3 className="text-[38px] font-[900] text-[#1A1A1A] leading-[0.95] tracking-tight mb-2">
                Calculate how Much<br />Can You Save?
              </h3>

              {/* Slider 1: Apartment Cost */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <label className="text-gray-400 font-bold text-[14px] uppercase tracking-wider">Apartment Cost</label>
                  <div className="bg-[#FFF5F2] px-4 py-2 rounded-xl border border-[#EF7F61]/10">
                    <span className="text-[#EF7F61] font-[900] text-[17px]">₹ {apartmentCost} Cr</span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    step="0.1" 
                    value={apartmentCost}
                    onChange={(e) => setApartmentCost(parseFloat(e.target.value))}
                    className="w-full h-3.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#EF7F61]"
                    style={{
                        background: `linear-gradient(to right, #EF7F61 0%, #EF7F61 ${(apartmentCost/50)*100}%, #f3f4f6 ${(apartmentCost/50)*100}%, #f3f4f6 100%)`
                    }}
                  />
                  <div className="flex justify-between mt-3 text-[11px] font-extrabold text-gray-300 uppercase tracking-widest">
                    <span>₹ 1 Cr</span>
                    <span>₹ 50 Cr</span>
                  </div>
                </div>
              </div>

              {/* Slider 2: Number of Buyers */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <label className="text-gray-400 font-bold text-[14px] uppercase tracking-wider">No of Buyers</label>
                  <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                    <span className="text-gray-900 font-[900] text-[17px]">{buyerCount}</span>
                  </div>
                </div>
                <div className="relative pt-1">
                  <input 
                    type="range" 
                    min="2" 
                    max="50" 
                    value={buyerCount}
                    onChange={(e) => setBuyerCount(parseInt(e.target.value))}
                    className="w-full h-3.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#EF7F61]"
                    style={{
                        background: `linear-gradient(to right, #EF7F61 0%, #EF7F61 ${(buyerCount/50)*100}%, #f3f4f6 ${(buyerCount/50)*100}%, #f3f4f6 100%)`
                    }}
                  />
                  <div className="flex justify-between mt-3 text-[11px] font-extrabold text-gray-300 uppercase tracking-widest">
                    <span>2</span>
                    <span>50</span>
                  </div>
                </div>
              </div>

              {/* Savings Result Display */}
              <div className="mt-4 flex flex-col items-center gap-4">
                <span className="text-gray-500 font-[800] text-[18px] tracking-tight">Save Upto</span>
                <div className="w-full bg-[#EF7F61] py-5 rounded-[24px] text-center shadow-[0_15px_30px_rgba(239,127,97,0.3)] transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-white text-[38px] font-[900] tracking-tight leading-none">₹ {calculatedSavings} Crore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculatorSection;
