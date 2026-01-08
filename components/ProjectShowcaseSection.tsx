
import React, { useState } from 'react';

interface ShowcaseItem {
  id: number;
  image: string;
  broker: {
    name: string;
    role: string;
    rating: number;
    avatar: string;
  };
  property: {
    title: string;
    location: string;
    description: string;
    priceRange: string;
  };
}

const showcaseData: ShowcaseItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
    broker: {
      name: 'Priyank Singh',
      role: 'Relationship Manager',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=priyank'
    },
    property: {
      title: 'Max Estate 360',
      location: 'Sector - 36A, Gurugram, Haryana',
      description: 'Max Estate 360 is a luxurious residential project that offers a unique blend of modern architecture and natural beauty.',
      priceRange: '₹ 5.28 Cr - ₹ 7.14 Cr'
    }
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    broker: {
      name: 'Amit Sharma',
      role: 'Senior Consultant',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=amit'
    },
    property: {
      title: 'Tulip Monsella',
      location: 'Sector - 53, Gurugram, Haryana',
      description: 'Discover ultimate luxury at Tulip Monsella, where every corner is designed for a grand lifestyle experience.',
      priceRange: '₹ 8.50 Cr - ₹ 12.00 Cr'
    }
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    broker: {
      name: 'Rohit Verma',
      role: 'Investment Advisor',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=rohit'
    },
    property: {
      title: 'Emaar Urban Ascent',
      location: 'Sector - 112, Gurugram, Haryana',
      description: 'Emaar Urban Ascent brings you modern apartments with state-of-the-art facilities and seamless connectivity.',
      priceRange: '₹ 4.42 Cr - ₹ 5.95 Cr'
    }
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600',
    broker: {
      name: 'Sneha Kapoor',
      role: 'Real Estate Specialist',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=sneha'
    },
    property: {
      title: 'Ambience Creacions',
      location: 'Sector - 22, Gurugram, Haryana',
      description: 'Live in a masterpiece of craftsmanship at Ambience Creacions, featuring spacious layouts and premium finishes.',
      priceRange: '₹ 3.20 Cr - ₹ 6.50 Cr'
    }
  }
];

interface ProjectShowcaseProps {
  onBookVisit: () => void;
}

const ProjectShowcaseSection: React.FC<ProjectShowcaseProps> = ({ onBookVisit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % showcaseData.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + showcaseData.length) % showcaseData.length);

  const current = showcaseData[currentIndex];

  return (
    <section className="max-w-[1320px] mx-auto px-6 py-20 relative">
      <div className="relative w-full h-[650px] rounded-[40px] overflow-hidden shadow-2xl">
        {/* Background Image with Transition */}
        <div className="absolute inset-0 transition-all duration-700 ease-in-out">
          <img 
            src={current.image} 
            alt={current.property.title} 
            className="w-full h-full object-cover"
          />
          {/* Subtle Dark Overlay for better contrast */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Exclusive Ribbon */}
        <div className="absolute top-10 left-0 z-20">
          <div className="relative bg-[#E66B4A] text-white py-3 px-12 font-[800] text-[20px] tracking-tight shadow-lg">
            Exclusive Properties
            {/* The Ribbon Cutout */}
            <div className="absolute -right-6 top-0 bottom-0 w-8 bg-[#E66B4A] [clip-path:polygon(0%_0%,100%_50%,0%_100%)]"></div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-gray-800"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          onClick={next}
          className="absolute right-[460px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all text-gray-800"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Floating Property Card */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 w-[380px] bg-white rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] p-8 pt-14">
          
          {/* Broker Profile */}
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2">
            <div className="relative w-[100px] h-[100px] rounded-full border-[6px] border-white shadow-xl overflow-hidden">
              <img 
                src={current.broker.avatar} 
                alt={current.broker.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <h4 className="text-[20px] font-[800] text-[#1A1A1A] leading-tight mb-1">{current.broker.name}</h4>
            <p className="text-[13px] font-bold text-gray-400 mb-2 uppercase tracking-wide">{current.broker.role}</p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-[#22C55E] rounded-md flex items-center justify-center">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100 mb-6" />

          {/* Property Details */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-1">
              <h3 className="text-[26px] font-[900] text-[#1A1A1A] tracking-tight">{current.property.title}</h3>
              <div className="flex flex-col gap-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-[14px] font-bold text-gray-400 mb-4">{current.property.location}</p>
            <p className="text-[14px] font-medium text-gray-500 leading-relaxed mb-6">
              {current.property.description}
            </p>

            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Price</span>
              <span className="text-[24px] font-[900] text-[#1A1A1A] tracking-tight">{current.property.priceRange}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-[#F8F9FA] border-2 border-gray-100 py-3.5 rounded-2xl font-[800] text-[15px] flex items-center justify-center gap-2 text-gray-800 hover:bg-gray-100 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              CALL
            </button>
            <button 
              onClick={onBookVisit}
              className="flex-[1.5] bg-[#E66B4A] text-white py-3.5 rounded-2xl font-[800] text-[15px] shadow-[0_10px_20px_-5px_rgba(230,107,74,0.4)] hover:bg-[#D1593C] transition-all active:scale-95"
            >
              BOOK A VISIT
            </button>
          </div>

          {/* Floating Share/Like Buttons */}
          <div className="absolute right-[-24px] top-[140px] flex flex-col gap-3">
             <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-400 hover:text-[#E66B4A] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M16 3h5v5M4 20L20 4M21 16v5h-5M15 15l5 5M4 4l5 5"></path>
                </svg>
             </button>
             <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-400 hover:text-[#E66B4A] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex items-center justify-center gap-3 mt-10">
        {showcaseData.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-10 bg-[#E66B4A]' : 'w-2.5 bg-gray-200'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
