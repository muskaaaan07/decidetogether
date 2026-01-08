
import React, { useState, useRef } from 'react';

interface Article {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  image: string;
  fullTitle: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Max Estate 361 Gurgaon',
    subtitle: "Complete Guide to Sector 36A's Premium Luxury Project 2026",
    category: 'Investments',
    date: '07 Jan 2026',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    fullTitle: "Max Estate 361 Gurgaon: Complete Guide to Sector 36A's Premium Luxury Project 2026"
  },
  {
    id: 2,
    title: 'Complete Guide to REITs',
    subtitle: 'Real Estate Investment Trusts in India',
    category: 'Market Trends',
    date: '31 Dec 2025',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800',
    fullTitle: 'Complete Guide to Real Estate Investment Trusts (REITs) in India'
  },
  {
    id: 3,
    title: 'Group Buying Benefits',
    subtitle: 'How to save significantly on your next home',
    category: 'Group Buying',
    date: '15 Dec 2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    fullTitle: 'The Power of Group Buying: How Families are Saving Crores Together'
  },
  {
    id: 4,
    title: 'Market Trends 2026',
    subtitle: 'What to expect from the NCR real estate market',
    category: 'Market Trends',
    date: '01 Jan 2026',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    fullTitle: '2026 Market Outlook: Why Gurugram remains the top investment destination'
  }
];

const ArticlesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Investments');
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ['Investments', 'Market Trends', 'Group Buying'];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-[1320px] mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">Articles</span>
        <h2 className="text-[54px] font-[800] text-[#1A1A1A] leading-tight mb-4 tracking-tighter">
          Unlocking Real Estate
        </h2>
        <p className="text-gray-400 text-[20px] font-medium max-w-[800px] mx-auto">
          Your key to understanding market shifts, property laws, and investment tips
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-3.5 rounded-full font-bold text-[16px] transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-[#E66B4A] text-white shadow-lg shadow-orange-200 scale-105' 
                : 'bg-orange-50 text-[#E66B4A] hover:bg-orange-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative group">
        {/* Navigation */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-[-24px] top-[40%] -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-gray-800 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-[-24px] top-[40%] -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 text-gray-800 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-4"
        >
          {articles.map((article) => (
            <div 
              key={article.id}
              className="min-w-full md:min-w-[calc(50%-16px)] snap-start group/card"
            >
              <div className="relative h-[340px] rounded-[32px] overflow-hidden mb-6 shadow-lg">
                {/* Background Image */}
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700" />
                
                {/* Diagonal Overlay Split */}
                <div 
                  className="absolute inset-y-0 left-0 w-[60%] bg-[#E66B4A] p-8 md:p-10 flex flex-col justify-between"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
                >
                  <div className="relative z-10">
                    <div className="absolute inset-0 opacity-10 pointer-events-none -m-10">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`grid-art-${article.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-art-${article.id})`} />
                      </svg>
                    </div>
                    <span className="text-white/80 font-bold text-[14px] block mb-6">decidetogether.in</span>
                    <h3 className="text-white text-[32px] md:text-[38px] font-[800] leading-[1] mb-2 tracking-tight">
                      {article.title}
                    </h3>
                    <p className="text-white/90 text-[15px] font-medium leading-tight">
                      {article.subtitle}
                    </p>
                  </div>
                  <div className="bg-black/20 w-fit px-3 py-1 rounded-md">
                    <span className="text-white text-[13px] font-bold">{article.date}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-2">
                <h4 className="text-[20px] font-[800] text-[#1A1A1A] mb-6 leading-tight group-hover/card:text-[#E66B4A] transition-colors">
                  {article.fullTitle}
                </h4>
                <button className="flex items-center gap-2.5 bg-white border border-gray-100 shadow-sm rounded-full px-8 py-3.5 font-bold text-[16px] text-gray-800 hover:bg-gray-50 hover:shadow-md transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
