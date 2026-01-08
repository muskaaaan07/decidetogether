
import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Shyamghan Gamango',
    avatar: 'https://i.pravatar.cc/150?u=shyam',
    rating: 5,
    text: "Not going to lie, the process felt slow at first, but when the final price came in, I ended up saving way more than I expected. The team was supportive throughout."
  },
  {
    id: 2,
    name: 'Vidyant Sharma',
    avatar: 'https://i.pravatar.cc/150?u=vidyant',
    rating: 5,
    text: "Thanks you for virtual tour for my site. It was very informative, will surely move ahead with you guys for my next property investment. Truly professional."
  },
  {
    id: 3,
    name: 'Vikrant Grover',
    avatar: 'https://i.pravatar.cc/150?u=vikrant',
    rating: 5,
    text: "Thanks to the amazing team, we found a stunning luxury flat that fits our lifestyle perfectly. They negotiated a deal that was simply not possible individually."
  },
  {
    id: 4,
    name: 'Anjali Desai',
    avatar: 'https://i.pravatar.cc/150?u=anjali',
    rating: 5,
    text: "The group buying model actually works! Saved nearly 15 Lakhs on my new apartment in Sector 112. The transparency in the process was refreshing."
  },
  {
    id: 5,
    name: 'Rahul Malhotra',
    avatar: 'https://i.pravatar.cc/150?u=rahul',
    rating: 5,
    text: "I was skeptical about group buying, but decidetogether proved me wrong. Got a premium unit at a price I couldn't find anywhere else in the market."
  },
  {
    id: 6,
    name: 'Sonalika Singh',
    avatar: 'https://i.pravatar.cc/150?u=sonalika',
    rating: 5,
    text: "Excellent service and great savings. The relationship manager was always available to answer my queries. Highly recommended for first-time buyers."
  },
  {
    id: 7,
    name: 'Amitabh Gupta',
    avatar: 'https://i.pravatar.cc/150?u=amitabh',
    rating: 5,
    text: "Secured a great deal on a 4BHK in Dwarka Expressway. The documentation and process were handled very smoothly. Saved almost 20 Lakhs!"
  },
  {
    id: 8,
    name: 'Preeti Vardhan',
    avatar: 'https://i.pravatar.cc/150?u=preeti',
    rating: 5,
    text: "The collective bargaining power really shows in the final quotes. It's the smartest way to buy property in India today. Very satisfied with the outcome."
  },
  {
    id: 9,
    name: 'Karan Thapar',
    avatar: 'https://i.pravatar.cc/150?u=karan',
    rating: 5,
    text: "Top notch experience. They helped me compare projects with actual data rather than just marketing fluff. The group discount was the cherry on top."
  },
  {
    id: 10,
    name: 'Megha Oberoi',
    avatar: 'https://i.pravatar.cc/150?u=megha',
    rating: 5,
    text: "Love the concept of decidetogether. Finally, we homebuyers have some leverage against big developers. Saved significant money on my dream penthouse."
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1100) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[54px] font-[800] text-[#1A1A1A] leading-tight mb-6 tracking-tighter">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 text-[20px] font-medium max-w-[850px] mx-auto leading-relaxed">
            Hear from satisfied buyers who saved big with group purchasing, and builders who love the efficiency of decidetogether
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/testimonials">
          {/* Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-28px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-800 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/testimonials:opacity-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-[-28px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-800 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/testimonials:opacity-100"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Slides Track */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-700 ease-in-out py-4"
              style={{ transform: `translateX(-${currentIndex * (100 / (testimonials.length / itemsPerPage))}%)` }}
            >
              {testimonials.map((t) => (
                <div 
                  key={t.id}
                  className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:shadow-xl hover:shadow-gray-100 transition-all duration-300"
                  style={{ minWidth: `calc((100% - ${(itemsPerPage - 1) * 24}px) / ${itemsPerPage})` }}
                >
                  <div>
                    {/* Google Logo */}
                    <div className="mb-6">
                      <svg viewBox="0 0 24 24" width="28" height="28">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F97316">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-[19px] font-medium text-[#1A1A1A] leading-relaxed mb-8">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <button className="text-[15px] font-bold text-[#4285F4] w-fit hover:underline text-left">Read More</button>
                    
                    {/* User Profile */}
                    <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                      <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <span className="text-[17px] font-[800] text-[#1A1A1A] tracking-tight">{t.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar / Slider Decor */}
          <div className="mt-8 mb-4 max-w-[800px] mx-auto relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
             <div 
                className="absolute h-full bg-gray-400 transition-all duration-700"
                style={{ 
                  width: `${(100 / totalPages)}%`, 
                  left: `${(currentIndex * (100 / totalPages))}%` 
                }}
             ></div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
             {[...Array(totalPages)].map((_, idx) => (
               <button 
                key={idx}
                onClick={() => goToPage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-10 bg-[#E66B4A]' : 'w-2.5 bg-gray-200 hover:bg-gray-300'}`}
               />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
