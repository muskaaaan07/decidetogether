
import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury building at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay Card */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[840px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[48px] p-12 md:p-20 text-center shadow-2xl">
          <h2 className="text-white text-[48px] md:text-[64px] font-[800] leading-[1] mb-6 tracking-tight">
            Stay Informed, Save More!
          </h2>
          <p className="text-white/80 text-[20px] md:text-[22px] font-medium leading-relaxed mb-12 max-w-[600px] mx-auto">
            Get updates on group-buying deals and exclusive savings opportunities.
          </p>

          <form className="flex flex-col md:flex-row gap-0 max-w-[650px] mx-auto rounded-[32px] overflow-hidden shadow-2xl">
            <input 
              type="email" 
              placeholder="enter your email"
              className="flex-1 px-10 py-6 bg-white outline-none text-lg font-medium text-gray-800 placeholder:text-gray-400"
              required
            />
            <button 
              type="submit"
              className="bg-[#E66B4A] hover:bg-[#D1593C] text-white px-12 py-6 font-[800] text-[20px] transition-all active:scale-[0.98]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
