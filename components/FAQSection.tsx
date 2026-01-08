
import React, { useState } from 'react';

const categories = [
  'About Together Buying',
  'Joining a Group & Key Benefits',
  'Membership & Subscription Fees',
  'Our Clients & Success Stories'
];

const faqs = [
  {
    category: 'About Together Buying',
    question: 'What is TogetherBuying?',
    answer: 'TogetherBuying.in is India\'s premier group buying community for real estate. We help home buyers pool their purchasing power to negotiate institutional-level discounts from developers, making dream homes more affordable.'
  },
  {
    category: 'About Together Buying',
    question: 'How does TogetherBuying work?',
    answer: 'We aggregate demand for specific residential projects. Once a group reaches its target size, our experts negotiate a bulk discount with the developer. Each member then purchases their individual unit at this discounted rate.'
  },
  {
    category: 'About Together Buying',
    question: 'Why should I choose TogetherBuying over brokers or traditional channels?',
    answer: 'Unlike traditional brokers who earn commissions from sales, we focus on the collective power of buyers. Our model allows you to unlock discounts (up to 20%) that are typically reserved for large-scale investors or institutional players.'
  }
];

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1320px] mx-auto px-6 py-24">
      {/* Header Text */}
      <div className="text-center mb-16">
        <h2 className="text-[56px] font-[800] text-[#1A1A1A] leading-[1.05] tracking-tight">
          You have Questions.<br />
          We have Answers.
        </h2>
      </div>

      {/* FAQS Banner */}
      <div className="relative bg-[#F2E3DC] rounded-[48px] p-12 mb-20 flex flex-col md:flex-row items-center justify-between border border-orange-100/50">
        <div className="max-w-[500px]">
          <h3 className="text-[#E66B4A] text-[42px] font-[900] tracking-tight mb-4 uppercase">FAQS</h3>
          <p className="text-[#1A1A1A]/80 text-[19px] font-medium leading-relaxed">
            Get answers to some commonly asked questions about Together Buying platform and our business.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex items-center opacity-90">
          <img 
            src="/logo.png" 
            alt="TogetherBuying.in Logo" 
            className="h-[84px] w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div class="flex items-center gap-1.5">
                  <div class="flex flex-col leading-none text-right">
                    <span class="text-[#E66B4A] font-[800] text-[26px] tracking-[-0.03em]">Together</span>
                    <span class="font-[800] text-[26px] tracking-[-0.03em] text-[#1A1A1A]">buying.in</span>
                  </div>
                </div>
              `;
            }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Sidebar Category */}
        <div className="w-full md:w-[320px] bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 h-fit">
          <h4 className="text-[18px] font-[800] text-[#1A1A1A] mb-6 tracking-tight">Category</h4>
          <div className="flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-3 text-left p-4 rounded-[16px] font-bold text-[14px] transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#F2E3DC] text-[#E66B4A]' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {cat === 'About Together Buying' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 9.5L12 3L21 9.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="flex-1">
          <h3 className="text-[32px] font-[800] text-[#1A1A1A] mb-10 tracking-tight">{activeCategory}</h3>
          
          <div className="space-y-4">
            {faqs.filter(faq => faq.category === activeCategory).map((faq, idx) => (
              <div 
                key={idx} 
                className="border-b border-gray-100 pb-4 overflow-hidden"
              >
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left py-6 group"
                >
                  <div className="flex items-center gap-4">
                     <div className="w-2.5 h-2.5 bg-gray-300 rounded-sm"></div>
                     <span className="text-[20px] font-[800] text-[#1A1A1A] tracking-tight group-hover:text-[#E66B4A] transition-colors">
                       {faq.question}
                     </span>
                  </div>
                  <svg 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className={`text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-500 text-[17px] leading-relaxed font-medium pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
