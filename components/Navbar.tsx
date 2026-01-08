
import React, { useState } from 'react';

interface NavbarProps {
  onSignInClick: () => void;
  onPropertiesClick?: () => void;
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
  onArticlesClick?: () => void;
  onCaseStudiesClick?: () => void;
  onNewsClick?: () => void;
  onFAQClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onSignInClick, 
  onPropertiesClick, 
  onHomeClick, 
  onAboutClick, 
  onContactClick,
  onArticlesClick,
  onCaseStudiesClick,
  onNewsClick,
  onFAQClick
}) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const resourceLinks = [
    { label: 'Articles', onClick: onArticlesClick },
    { label: 'Case Studies', onClick: onCaseStudiesClick },
    { label: 'News', onClick: onNewsClick },
    { label: 'FAQs', onClick: onFAQClick }
  ];

  return (
    <nav className="sticky top-0 z-[60] bg-white/90 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-[1280px] mx-auto px-6 h-[84px] flex items-center justify-between">
        {/* Logo Section - Replaced with Image */}
        <div 
          onClick={onHomeClick}
          className="flex items-center cursor-pointer group h-full"
        >
          <img 
            src="/logo.png" 
            alt="decidetogether.in Logo" 
            className="h-[54px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="flex flex-col leading-none">
                  <span class="text-[#E66B4A] font-[800] text-[26px] tracking-[-0.03em]">Together</span>
                  <span class="font-[800] text-[26px] tracking-[-0.03em] text-[#1A1A1A]">buying.in</span>
                </div>
              `;
            }}
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={onHomeClick}
            className="text-gray-500 font-semibold hover:text-[#E66B4A] transition-colors py-2 relative group"
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-[#E66B4A] rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button 
            onClick={onPropertiesClick}
            className="text-gray-500 font-semibold hover:text-[#E66B4A] transition-colors py-2 relative group"
          >
            Properties
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-[#E66B4A] rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button 
            onClick={onAboutClick}
            className="text-gray-500 font-semibold hover:text-[#E66B4A] transition-colors py-2 relative group"
          >
            About Us
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-[#E66B4A] rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          <button 
            onClick={onContactClick}
            className="text-gray-500 font-semibold hover:text-[#E66B4A] transition-colors py-2 relative group"
          >
            Contact Us
            <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-[#E66B4A] rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </button>
          
          {/* Resources with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className={`flex items-center gap-1 font-semibold transition-colors py-2 group ${isResourcesOpen ? 'text-[#E66B4A]' : 'text-gray-500 hover:text-[#E66B4A]'}`}>
              Resources
              <svg 
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"
                className={`transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span className={`absolute bottom-0 left-1/2 h-[3px] bg-[#E66B4A] rounded-full transition-all duration-300 ${isResourcesOpen ? 'w-full left-0' : 'w-0'}`}></span>
            </button>

            {/* Dropdown Menu */}
            {isResourcesOpen && (
              <div className="absolute top-[100%] left-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="w-[220px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden py-3">
                  {resourceLinks.map((link) => (
                    <button 
                      key={link.label}
                      onClick={link.onClick}
                      className="w-full text-left px-7 py-3 text-[17px] font-[600] text-gray-500 hover:text-[#E66B4A] hover:bg-orange-50/50 transition-all"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:block border-2 border-gray-100 text-[#1A1A1A] font-bold px-7 py-2.5 rounded-full hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95">
            Corporate
          </button>
          <button 
            onClick={onSignInClick}
            className="bg-[#E66B4A] text-white font-bold px-9 py-3 rounded-full hover:bg-[#D1593C] transition-all shadow-[0_10px_20px_-5px_rgba(230,107,74,0.3)] active:scale-95"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
