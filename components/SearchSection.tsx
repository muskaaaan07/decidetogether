
import React, { useState } from 'react';

interface SearchSectionProps {
  onFilterChange?: (city: string, location: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onFilterChange }) => {
  const [selectedCity, setSelectedCity] = useState('Gurugram');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState('');

  const cities = ['Gurugram', 'Greater Noida', 'New Delhi'];

  const tagsRow1 = [
    'Dwarka Expressway',
    'Golf Course Road',
    'Central Gurgaon',
    'Sohna Road',
    'Golf Course Extension'
  ];

  const tagsRow2 = [
    'SPR',
    'Sohna',
    'Gwal Pahari',
    'New Gurgaon',
    'Manesar'
  ];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
    setActiveLocation(''); // Reset location on city change
    if (onFilterChange) onFilterChange(city, '');
  };

  const handleTagClick = (tag: string) => {
    const newTag = activeLocation === tag ? '' : tag;
    setActiveLocation(newTag);
    if (onFilterChange) onFilterChange(selectedCity, newTag);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 mt-20 relative z-20">
      <div className="flex flex-col gap-8">
        
        {/* Main Search Bar Container */}
        <div className="bg-[#F2F4F7] border border-gray-100 rounded-full flex items-center p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          
          {/* City Selector */}
          <div className="flex-[0.8] px-8 py-2 border-r border-gray-300/60 group cursor-pointer hover:bg-black/[0.02] transition-all rounded-l-full relative">
            <div 
              className="flex flex-col"
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">City</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`text-gray-400 transition-transform duration-200 ${isCityDropdownOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E66B4A" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[19px] font-extrabold text-[#E66B4A] tracking-tight">{selectedCity}</span>
              </div>
            </div>

            {/* Dropdown Menu */}
            {isCityDropdownOpen && (
              <div className="absolute top-[100%] left-4 mt-2 w-[200px] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                {cities.map(city => (
                  <div 
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="px-6 py-3 hover:bg-orange-50 text-[16px] font-bold text-gray-800 cursor-pointer transition-colors"
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="flex-[2.2] px-10 py-2 border-r border-gray-300/60 group cursor-pointer hover:bg-black/[0.02] transition-all">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Find Your Dream Home</span>
              <input 
                type="text" 
                placeholder="Search for Developers, Location, Projects"
                className="bg-transparent outline-none text-[17px] font-bold text-gray-800 placeholder:text-gray-300 mt-1.5 w-full tracking-tight"
              />
            </div>
          </div>

          {/* Filter Selector */}
          <div className="flex-[1.2] px-8 py-2 group cursor-pointer hover:bg-black/[0.02] transition-all">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Inventory | Budget</span>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[17px] font-bold text-gray-300 tracking-tight">Select Filter</span>
              </div>
            </div>
          </div>

          {/* Search Button & Voice */}
          <div className="flex items-center bg-[#E66B4A] rounded-full p-1 ml-2">
            <button className="flex items-center gap-3 px-10 py-4.5 text-white hover:bg-[#D1593C] transition-all rounded-full active:scale-95">
              <span className="text-[19px] font-extrabold tracking-tight">Search</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <div className="w-[1.5px] h-8 bg-white/20 mx-1"></div>
            <button className="p-4.5 text-white hover:scale-110 transition-transform active:scale-90">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Tag Filters with pill-styling */}
        <div className="flex flex-col gap-4 px-2">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-3">
            {tagsRow1.map((tag) => (
              <button 
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`${activeLocation === tag ? 'bg-[#D1593C]' : 'bg-[#EF7F61]'} text-white px-7 py-3 rounded-full font-bold text-[15px] hover:bg-[#E66B4A] transition-all hover:scale-[1.02] active:scale-95 shadow-sm`}
              >
                {tag}
              </button>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-wrap gap-3">
            {tagsRow2.map((tag) => (
              <button 
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`${activeLocation === tag ? 'bg-[#D1593C]' : 'bg-[#EF7F61]'} text-white px-7 py-3 rounded-full font-bold text-[15px] hover:bg-[#E66B4A] transition-all hover:scale-[1.02] active:scale-95 shadow-sm`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchSection;
