
import React from 'react';

interface FooterProps {
  onHomeClick?: () => void;
  onPropertiesClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
  onArticlesClick?: () => void;
  onCaseStudiesClick?: () => void;
  onNewsClick?: () => void;
  onFAQClick?: () => void;
  onSignInClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onHomeClick,
  onPropertiesClick,
  onAboutClick,
  onContactClick,
  onArticlesClick,
  onCaseStudiesClick,
  onNewsClick,
  onFAQClick,
  onSignInClick
}) => {
  const currentYear = new Date().getFullYear();

  const overviewLinks = [
    { label: 'Home', onClick: onHomeClick },
    { label: 'Properties', onClick: onPropertiesClick },
    { label: 'Corporate', onClick: onAboutClick }, // Redirecting to About for now
    { label: 'About us', onClick: onAboutClick },
    { label: 'Contact us', onClick: onContactClick },
  ];

  const quickLinks = [
    { label: 'Join Group', onClick: onSignInClick },
    { label: 'Testimonials', onClick: onHomeClick }, // Live on Home page
    { label: 'Articles', onClick: onArticlesClick },
    { label: 'Case Studies', onClick: onCaseStudiesClick },
    { label: 'News', onClick: onNewsClick },
    { label: 'FAQs', onClick: onFAQClick },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div 
              onClick={onHomeClick}
              className="flex items-center cursor-pointer group"
            >
              <img 
                src="/logo.png" 
                alt="TogetherBuying.in Logo" 
                className="h-[84px] w-auto object-contain"
                onError={(e) => {
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
            <p className="text-gray-500 font-bold text-[18px] leading-relaxed max-w-[280px] tracking-tight">
              Shared dreams. Smart ownership. Helping you buy your dream home as a team.
            </p>
          </div>

          {/* Overview Column */}
          <div className="space-y-8">
            <h4 className="text-[19px] font-[800] text-[#1A1A1A] tracking-tight">Overview</h4>
            <ul className="space-y-5">
              {overviewLinks.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={item.onClick}
                    className="text-gray-500 font-[600] text-[17px] hover:text-[#E66B4A] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-8">
            <h4 className="text-[19px] font-[800] text-[#1A1A1A] tracking-tight">Quick Links</h4>
            <ul className="space-y-5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={item.onClick}
                    className="text-gray-500 font-[600] text-[17px] hover:text-[#E66B4A] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-[19px] font-[800] text-[#1A1A1A] tracking-tight">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 font-[700] text-[16px] leading-snug">
                  1405, Supernova Astralis, Sector - 94, Noida, 201301
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-[13px] font-bold uppercase tracking-wider">Email:</span>
                <a href="mailto:hello@togetherbuying.in" className="text-gray-800 font-[800] text-[17px] hover:text-[#E66B4A] transition-colors">
                  hello@togetherbuying.in
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-[13px] font-bold uppercase tracking-wider">Phone:</span>
                <a href="tel:+917042580018" className="text-gray-800 font-[800] text-[17px] hover:text-[#E66B4A] transition-colors">
                  +91 7042580018
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-[13px] font-bold uppercase tracking-wider">WhatsApp No:</span>
                <a href="https://wa.me/917042580018" className="text-gray-800 font-[800] text-[17px] hover:text-[#E66B4A] transition-colors">
                  +91 7042580018
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Footer */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 text-gray-400 font-bold text-[14px]">
            <span>© {currentYear} Together Buying. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span>A brand of My Housing Advisor Private Limited.</span>
            <span className="hidden md:inline">|</span>
            <span>Powered by Codeweb</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 font-bold hover:text-[#E66B4A] transition-colors text-[14px]">Terms of use</a>
              <a href="#" className="text-gray-400 font-bold hover:text-[#E66B4A] transition-colors text-[14px]">Privacy policy</a>
            </div>
            
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="#" className="text-gray-800 hover:text-[#E66B4A] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-gray-800 hover:text-[#E66B4A] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-gray-800 hover:text-[#E66B4A] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
