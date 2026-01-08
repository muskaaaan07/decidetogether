
import React, { useState, useRef, useMemo } from 'react';

const propertyData = [
  // Gurugram
  {
    "project_name": "Tulip Monsella",
    "place": "Sector - 53, Gurugram",
    "city": "Gurugram",
    "location": "Golf Course Road",
    "group_size": 5,
    "openings_left": 2,
    "developer_price": "₹ 10.50 Cr",
    "target_price": "₹ 8.62 Cr",
    "users_interested": 1,
    "category": "Featured",
    "last_date": "31st Jan, 26",
    "savings": "Up to 1.88 Crore off",
    "discount": "Get upto 18% discount on this property",
    "is_coupon": true
  },
  {
    "project_name": "Emaar Urban Ascent",
    "place": "Sector - 112, Gurugram",
    "city": "Gurugram",
    "location": "Dwarka Expressway",
    "group_size": 6,
    "openings_left": 4,
    "developer_price": "₹ 4.95 Cr",
    "target_price": "₹ 4.42 Cr",
    "users_interested": 1,
    "category": "Featured",
    "last_date": "31st Mar, 26",
    "savings": "Up to 53 L off",
    "discount": "Get upto 11% discount on this property",
    "is_coupon": true
  },
  {
    "project_name": "M3M Crown",
    "place": "Sector - 113, Gurugram",
    "city": "Gurugram",
    "location": "Dwarka Expressway",
    "group_size": 8,
    "openings_left": 2,
    "developer_price": "₹ 3.20 Cr",
    "target_price": "₹ 2.70 Cr",
    "users_interested": 1,
    "category": "Featured",
    "last_date": "15th Mar, 26",
    "savings": "Up to 50 Lakhs off",
    "discount": "Get upto 16% discount on this property",
    "is_coupon": true
  },
  // New Delhi
  {
    "project_name": "Godrej South Estate",
    "place": "Okhla, New Delhi",
    "city": "New Delhi",
    "location": "Central Gurgaon", // Mapping for test
    "group_size": 10,
    "openings_left": 5,
    "developer_price": "₹ 6.50 Cr",
    "target_price": "₹ 5.80 Cr",
    "users_interested": 2,
    "category": "Featured",
    "last_date": "20th Feb, 26",
    "savings": "Up to 70 Lakhs off",
    "discount": "Get upto 10% discount on this property",
    "is_coupon": true
  },
  {
    "project_name": "Unity Amaryllis",
    "place": "Karol Bagh, New Delhi",
    "city": "New Delhi",
    "location": "Golf Course Road", // Mapping for test
    "group_size": 12,
    "openings_left": 3,
    "developer_price": "₹ 4.20 Cr",
    "target_price": "₹ 3.75 Cr",
    "users_interested": 4,
    "category": "Pre Launch",
    "last_date": "10th Mar, 26",
    "savings": "Up to 45 Lakhs off",
    "discount": "Get upto 12% discount on this property",
    "is_coupon": true
  },
  {
    "project_name": "DLF Kings Court",
    "place": "Greater Kailash, New Delhi",
    "city": "New Delhi",
    "location": "Central Gurgaon",
    "group_size": 4,
    "openings_left": 1,
    "developer_price": "₹ 15.00 Cr",
    "target_price": "₹ 13.50 Cr",
    "users_interested": 1,
    "category": "Fast Selling",
    "last_date": "28th Feb, 26",
    "savings": "Up to 1.5 Crore off",
    "discount": "Get upto 10% discount on this property",
    "is_coupon": true
  },
  // Greater Noida
  {
    "project_name": "Godrej Nest",
    "place": "Sector 150, Greater Noida",
    "city": "Greater Noida",
    "location": "Dwarka Expressway", // Mapping for test
    "group_size": 7,
    "openings_left": 3,
    "developer_price": "₹ 2.80 Cr",
    "target_price": "₹ 2.45 Cr",
    "users_interested": 3,
    "category": "Featured",
    "last_date": "15th Apr, 26",
    "savings": "Up to 35 Lakhs off",
    "discount": "Get upto 12% discount on this property",
    "is_coupon": true
  },
  {
    "project_name": "Ace Parkway",
    "place": "Sector 150, Greater Noida",
    "city": "Greater Noida",
    "location": "Golf Course Road", // Mapping for test
    "group_size": 9,
    "openings_left": 4,
    "developer_price": "₹ 3.10 Cr",
    "target_price": "₹ 2.75 Cr",
    "users_interested": 2,
    "category": "Fast Selling",
    "last_date": "1st Mar, 26",
    "savings": "Up to 35 Lakhs off",
    "discount": "Get upto 11% discount on this property",
    "is_coupon": true
  },
  {
    "project_name": "ATS Pious Orchards",
    "place": "Sector 150, Greater Noida",
    "city": "Greater Noida",
    "location": "Dwarka Expressway",
    "group_size": 15,
    "openings_left": 8,
    "developer_price": "₹ 1.95 Cr",
    "target_price": "₹ 1.70 Cr",
    "users_interested": 5,
    "category": "Pre Launch",
    "last_date": "30th Jun, 26",
    "savings": "Up to 25 Lakhs off",
    "discount": "Get upto 13% discount on this property",
    "is_coupon": true
  }
];

const PropertyCard: React.FC<{ property: any }> = ({ property }) => {
  const formatPrice = (priceStr: string) => {
    const parts = priceStr.split(' ');
    // Handle "₹ 8.62 Cr"
    if (parts.length >= 3) {
      return { val: `${parts[0]} ${parts[1]}`, unit: parts[2] };
    }
    return { val: priceStr, unit: '' };
  };

  const target = formatPrice(property.target_price);
  const developer = formatPrice(property.developer_price);

  return (
    <div className="min-w-[400px] max-w-[400px] bg-[#FFFBEA] rounded-[40px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col group transition-all duration-300">
      {/* Top Image Section */}
      <div className="relative h-[250px] w-full p-3.5 pb-0">
        <div className="w-full h-full rounded-[30px] overflow-hidden relative">
          <img 
            src={property.city === "Gurugram" ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" : (property.city === "New Delhi" ? "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800")}
            alt={property.project_name}
            className="w-full h-full object-cover transition-transform duration-700"
          />
          
          <div className="absolute top-3.5 right-3.5 flex flex-col gap-2.5">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#E66B4A] shadow-md hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-500 shadow-md hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-7 pt-5 pb-6 flex flex-col">
        <div className="flex items-start justify-between mb-0">
          <h3 className="text-[25px] font-[800] text-[#1A1A1A] leading-tight tracking-tight">
            {property.project_name}
          </h3>
          <button className="bg-[#E66B4A] text-white p-2 rounded-full shadow-lg translate-y-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
        </div>
        <p className="text-gray-400 font-bold text-[14px] mb-6">{property.place}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 border-t border-gray-200/60 py-4 mb-6 relative">
          <div className="absolute left-1/3 top-4 bottom-4 w-[1px] bg-gray-200/60"></div>
          <div className="absolute left-2/3 top-4 bottom-4 w-[1px] bg-gray-200/60"></div>

          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Group Size</span>
            <span className="text-[20px] font-[900] text-[#E66B4A] leading-none mb-0.5">{property.group_size}</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Members</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Openings</span>
            <span className="text-[20px] font-[900] text-[#E66B4A] leading-none mb-0.5">{property.openings_left}</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Left</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1 text-center leading-none">Last day to join</span>
            <span className="text-[16px] font-[900] text-[#E66B4A] leading-tight mt-1">{property.last_date}</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center justify-start gap-12 mb-1.5">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Target Price</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Developer price</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-8">
              <div className="flex flex-col">
                <span className="text-[30px] font-[900] text-[#1A1A1A] leading-none tracking-tight">{target.val}</span>
                <span className="text-[30px] font-[900] text-[#1A1A1A] leading-none tracking-tight">{target.unit}</span>
              </div>
              
              {property.developer_price && (
                <div className="flex flex-col text-[#D1D5DB] relative mt-1">
                  <span className="text-[17px] font-[900] line-through leading-none decoration-[1.5px]">{developer.val}</span>
                  <span className="text-[17px] font-[900] line-through leading-none decoration-[1.5px] mt-1">{developer.unit}</span>
                </div>
              )}
            </div>
            
            <button className="bg-[#E66B4A] text-white px-8 py-3.5 rounded-full font-[800] text-[17px] shadow-[0_8px_20px_rgba(230,107,74,0.3)] hover:bg-[#D1593C] transition-all active:scale-95 translate-y-[-4px]">
              Join Group
            </button>
          </div>
        </div>

        {/* Success Badge */}
        <div className="flex items-center gap-1.5 text-[#22C55E] font-bold text-[14px] mb-5">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          {property.savings}
        </div>

        {/* Footer Text */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[11px] font-bold text-[#E66B4A] tracking-tight">{property.discount}</span>
          <span className="text-[11px] font-bold text-[#E66B4A] tracking-tight">1 users downloaded this coupon</span>
        </div>
      </div>
    </div>
  );
};

interface PropertiesSectionProps {
  selectedCity?: string;
  selectedLocation?: string;
}

const PropertiesSection: React.FC<PropertiesSectionProps> = ({ selectedCity = 'Gurugram', selectedLocation = '' }) => {
  const [activeTab, setActiveTab] = useState('Featured');
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabs = ['Featured', 'Pre Launch', 'Fast Selling'];

  const filteredProperties = useMemo(() => {
    return propertyData.filter(p => {
      const cityMatch = p.city === selectedCity;
      const locationMatch = selectedLocation === '' || p.location === selectedLocation;
      const tabMatch = activeTab === 'Featured' || p.category === activeTab;
      return cityMatch && locationMatch && tabMatch;
    });
  }, [selectedCity, selectedLocation, activeTab]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 424 : scrollLeft + 424;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-[1320px] mx-auto px-6 py-16">
      {/* Title Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[52px] font-[900] text-[#1A1A1A] tracking-tighter">Top Properties</h2>
        <button className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-7 py-2.5 font-[800] text-[15px] text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
          view all
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </div>

      {/* Nav Tabs */}
      <div className="flex items-center gap-10 mb-10 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[19px] font-[800] transition-all relative ${
              activeTab === tab ? 'text-[#E66B4A]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#E66B4A] rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Carousel Track */}
      <div className="relative group/carousel">
        {filteredProperties.length > 3 && (
          <>
            <button 
              onClick={() => scroll('left')}
              className="absolute left-[-28px] top-[40%] -translate-y-1/2 z-40 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50 text-gray-900 hover:scale-110 active:scale-90 transition-all opacity-0 group-hover/carousel:opacity-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-[-28px] top-[40%] -translate-y-1/2 z-40 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50 text-gray-900 hover:scale-110 active:scale-90 transition-all opacity-0 group-hover/carousel:opacity-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </>
        )}

        {/* Cards Row */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, idx) => (
              <PropertyCard key={`${property.project_name}-${idx}`} property={property} />
            ))
          ) : (
            <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
               <div className="text-center">
                 <p className="text-gray-400 font-bold text-lg mb-2">No properties found in this location</p>
                 <p className="text-gray-300">Try selecting a different city or clearing filters</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
