
import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Property {
  id: number;
  project_name: string;
  place: string;
  city: string;
  location: string;
  group_size: number;
  openings_left: number;
  developer_price: string;
  target_price: string;
  last_date: string;
  savings_text: string;
  discount_text: string;
  category: string;
  tags?: string[];
  image: string;
  map_link: string;
  possession_status: string;
  configuration: string;
  super_area: string;
}

const propertyList: Property[] = [
  // Gurugram
  {
    id: 1,
    project_name: "Ambience Creacions",
    place: "Sector - 22, Gurugram",
    city: "Gurugram",
    location: "Golf Course Road",
    group_size: 3,
    openings_left: 3,
    developer_price: "₹ 4.50 Cr",
    target_price: "₹ 3.85 Cr",
    last_date: "28th Feb, 26",
    savings_text: "Up to 65 Lakhs off",
    discount_text: "Get upto 15% discount on this property",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/Ambience+Creacions+Sector+22+Gurugram",
    possession_status: "Ready to move",
    configuration: "3 BHK",
    super_area: "2400 sq.ft."
  },
  {
    id: 2,
    project_name: "Aura 79",
    place: "Sector - 79, Gurugram",
    city: "Gurugram",
    location: "Dwarka Expressway",
    group_size: 5,
    openings_left: 4,
    developer_price: "₹ 1.80 Cr",
    target_price: "₹ 1.55 Cr",
    last_date: "28th Feb, 26",
    savings_text: "Up to 25 Lakhs off",
    discount_text: "Get upto 12% discount on this property",
    category: "Pre Launch",
    tags: ["Pre Launch"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/Aura+79+Sector+79+Gurugram",
    possession_status: "Under Construction",
    configuration: "2 BHK",
    super_area: "1400 sq.ft."
  },
  {
    id: 3,
    project_name: "M3M Crown",
    place: "Sector - 113, Gurugram",
    city: "Gurugram",
    location: "Dwarka Expressway",
    group_size: 8,
    openings_left: 2,
    developer_price: "₹ 3.20 Cr",
    target_price: "₹ 2.70 Cr",
    last_date: "15th Mar, 26",
    savings_text: "Up to 50 Lakhs off",
    discount_text: "Get upto 16% discount on this property",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/M3M+Crown+Sector+113+Gurugram",
    possession_status: "Ready to move",
    configuration: "4 BHK",
    super_area: "3200 sq.ft."
  },
  // New Delhi
  {
    id: 4,
    project_name: "Godrej South Estate",
    place: "Okhla, New Delhi",
    city: "New Delhi",
    location: "Central Gurgaon",
    group_size: 10,
    openings_left: 5,
    developer_price: "₹ 6.50 Cr",
    target_price: "₹ 5.80 Cr",
    last_date: "20th Feb, 26",
    savings_text: "Up to 70 Lakhs off",
    discount_text: "Get upto 10% discount on this property",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/Godrej+South+Estate+Okhla",
    possession_status: "Under Construction",
    configuration: "3 BHK",
    super_area: "2100 sq.ft."
  },
  {
    id: 5,
    project_name: "Unity Amaryllis",
    place: "Karol Bagh, New Delhi",
    city: "New Delhi",
    location: "Golf Course Road",
    group_size: 12,
    openings_left: 3,
    developer_price: "₹ 4.20 Cr",
    target_price: "₹ 3.75 Cr",
    last_date: "10th Mar, 26",
    savings_text: "Up to 45 Lakhs off",
    discount_text: "Get upto 12% discount on this property",
    category: "Pre Launch",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/Unity+Amaryllis+Karol+Bagh",
    possession_status: "Ready to move",
    configuration: "2 BHK",
    super_area: "1600 sq.ft."
  },
  {
    id: 6,
    project_name: "DLF Kings Court",
    place: "GK, New Delhi",
    city: "New Delhi",
    location: "Central Gurgaon",
    group_size: 4,
    openings_left: 1,
    developer_price: "₹ 15.00 Cr",
    target_price: "₹ 13.50 Cr",
    last_date: "28th Feb, 26",
    savings_text: "Up to 1.5 Cr off",
    discount_text: "Premium inventory",
    category: "Fast Selling",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/DLF+Kings+Court+GK",
    possession_status: "Ready to move",
    configuration: "4 BHK",
    super_area: "4500 sq.ft."
  },
  // Greater Noida
  {
    id: 7,
    project_name: "Godrej Nest",
    place: "Sec 150, Greater Noida",
    city: "Greater Noida",
    location: "Dwarka Expressway",
    group_size: 7,
    openings_left: 3,
    developer_price: "₹ 2.80 Cr",
    target_price: "₹ 2.45 Cr",
    last_date: "15th Apr, 26",
    savings_text: "Up to 35 Lakhs off",
    discount_text: "Limited offer",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/Godrej+Nest+Sector+150",
    possession_status: "Under Construction",
    configuration: "3 BHK",
    super_area: "1900 sq.ft."
  },
  {
    id: 8,
    project_name: "Ace Parkway",
    place: "Sec 150, Greater Noida",
    city: "Greater Noida",
    location: "Golf Course Road",
    group_size: 9,
    openings_left: 4,
    developer_price: "₹ 3.10 Cr",
    target_price: "₹ 2.75 Cr",
    last_date: "1st Mar, 26",
    savings_text: "Up to 35 Lakhs off",
    discount_text: "Great value",
    category: "Fast Selling",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/Ace+Parkway+Sector+150",
    possession_status: "Ready to move",
    configuration: "3 BHK",
    super_area: "2100 sq.ft."
  },
  {
    id: 9,
    project_name: "ATS Pious Orchards",
    place: "Sec 150, Greater Noida",
    city: "Greater Noida",
    location: "Dwarka Expressway",
    group_size: 15,
    openings_left: 8,
    developer_price: "₹ 1.95 Cr",
    target_price: "₹ 1.70 Cr",
    last_date: "30th Jun, 26",
    savings_text: "Up to 25 Lakhs off",
    discount_text: "New launch",
    category: "Pre Launch",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    map_link: "https://www.google.com/maps/search/ATS+Pious+Orchards",
    possession_status: "Under Construction",
    configuration: "3 BHK",
    super_area: "1750 sq.ft."
  }
];

const FilterDropdown: React.FC<{ 
  label: string; 
  value: string; 
  options: string[]; 
  onChange: (v: string) => void;
  placeholder?: string;
}> = ({ label, value, options, onChange, placeholder = "Select" }) => (
  <div className="relative group">
    <div className="flex flex-col gap-1 min-w-[170px]">
      <div className="flex items-center justify-between px-4 py-2 bg-white border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
          <span className="text-[14px] font-bold text-gray-800">{value || placeholder}</span>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <select 
      className="absolute inset-0 opacity-0 cursor-pointer w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const PropertyListingCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="w-full bg-[#FFFBEA] rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col mb-6 group animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="relative h-[260px] p-3">
      <div className="w-full h-full rounded-[24px] overflow-hidden relative">
        <img src={property.image} alt={property.project_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-3 right-3">
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#E66B4A] shadow-md hover:scale-110 transition-transform">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
        </div>
      </div>
    </div>

    <div className="px-7 py-5 flex flex-col">
      <div className="flex items-start justify-between mb-0.5">
        <h3 className="text-[26px] font-[900] text-[#1A1A1A] tracking-tight">{property.project_name}</h3>
        <button className="bg-[#E66B4A] text-white p-2.5 rounded-full shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </button>
      </div>
      <a href={property.map_link} target="_blank" rel="noopener noreferrer" className="text-gray-400 font-bold text-[15px] mb-6 flex items-center gap-1.5 hover:text-[#E66B4A] transition-colors underline decoration-dotted underline-offset-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        {property.place}
      </a>

      <div className="grid grid-cols-3 border-y border-gray-200/50 py-4 mb-6 relative">
        <div className="absolute left-1/3 top-4 bottom-4 w-[1px] bg-gray-200/50"></div>
        <div className="absolute left-2/3 top-4 bottom-4 w-[1px] bg-gray-200/50"></div>
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Group Size</span>
          <span className="text-[20px] font-[900] text-[#E66B4A] leading-none">{property.group_size}</span>
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Members</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Openings</span>
          <span className="text-[20px] font-[900] text-[#E66B4A] leading-none">{property.openings_left}</span>
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Left</span>
        </div>
        <div className="flex flex-col items-center text-center px-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">Last day to join</span>
          <span className="text-[15px] font-[900] text-[#E66B4A] leading-tight mt-1">{property.last_date}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Target Price</span>
          <span className="text-[28px] font-[900] text-[#1A1A1A] leading-none tracking-tight">{property.target_price}</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Developer Price</span>
          <span className="text-[16px] font-[900] text-gray-300 line-through leading-none decoration-gray-300">{property.developer_price}</span>
        </div>
      </div>

      <button className="w-full bg-[#E66B4A] text-white py-4 rounded-[20px] font-[900] text-[18px] shadow-[0_12px_24px_rgba(230,107,74,0.3)] hover:bg-[#D1593C] transition-all active:scale-[0.98]">
        Join Group
      </button>
    </div>
  </div>
);

interface PropertiesPageProps {
  onSignInClick: () => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onArticlesClick: () => void;
  onCaseStudiesClick: () => void;
  onNewsClick: () => void;
  onFAQClick: () => void;
}

const PropertiesPage: React.FC<PropertiesPageProps> = (props) => {
  const [selectedCity, setSelectedCity] = useState('Gurugram');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [filters, setFilters] = useState({
    possession: '',
    configuration: '',
    budget: '',
    area: ''
  });

  const cities = ['Gurugram', 'Greater Noida', 'New Delhi'];
  const locationTags = [
    'Dwarka Expressway', 'Golf Course Road', 'Central Gurgaon', 'Sohna Road', 'Golf Course Extension'
  ];

  const filteredList = useMemo(() => {
    return propertyList.filter(p => {
      const cityMatch = p.city === selectedCity;
      const locationMatch = selectedLocation === '' || p.location === selectedLocation;
      if (!cityMatch || !locationMatch) return false;
      if (filters.possession && p.possession_status !== filters.possession) return false;
      if (filters.configuration && p.configuration !== filters.configuration) return false;
      return true;
    });
  }, [filters, selectedCity, selectedLocation]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar {...props} />

      <div className="flex-shrink-0 px-8 py-4 bg-white border-b border-gray-50 flex items-center gap-3 overflow-x-auto no-scrollbar">
        {locationTags.map(tag => (
          <button 
            key={tag}
            onClick={() => setSelectedLocation(selectedLocation === tag ? '' : tag)}
            className={`flex-shrink-0 px-6 py-2 rounded-full font-bold text-[14px] transition-all ${selectedLocation === tag ? 'bg-[#D1593C] text-white shadow-md' : 'bg-orange-50 text-[#E66B4A] hover:bg-orange-100'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-[60%] flex flex-col bg-white border-r border-gray-100 shadow-[20px_0_30px_rgba(0,0,0,0.02)]">
          <div className="px-8 py-5 bg-white border-b border-gray-50 flex items-center gap-5 flex-wrap">
             <FilterDropdown label="Possession Status" value={filters.possession} onChange={(v) => setFilters({...filters, possession: v})} options={["Ready to move", "Under Construction"]} />
             <FilterDropdown label="Configuration Type" value={filters.configuration} onChange={(v) => setFilters({...filters, configuration: v})} options={["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"]} />
             <div className="flex-1"></div>
             <button onClick={() => { setFilters({possession:'', configuration:'', budget:'', area:''}); setSelectedLocation(''); }} className="px-6 py-3 bg-[#FEE2E2] text-[#E66B4A] rounded-full font-[900] text-[15px] hover:bg-[#FECACA]">Clear Filters</button>
          </div>
          <div className="flex-1 overflow-y-auto px-8 py-8 no-scrollbar scroll-smooth">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredList.map((p) => <PropertyListingCard key={p.id} property={p} />)}
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[40%] h-full relative bg-[#F8F9FA]">
           <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Map Interface</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesPage;
