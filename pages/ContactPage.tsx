
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ContactPageProps {
  onSignInClick: () => void;
  onHomeClick: () => void;
  onPropertiesClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onArticlesClick: () => void;
  onCaseStudiesClick: () => void;
  onNewsClick: () => void;
  onFAQClick: () => void;
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar {...props} />

      <main>
        {/* Section: Connect With Us On */}
        <section className="max-w-[1280px] mx-auto px-6 pt-20 pb-16">
          <h2 className="text-[42px] font-[800] text-[#1A1A1A] mb-12 tracking-tight">Connect With Us On</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Card */}
            <a href="#" className="flex items-center gap-4 p-6 bg-[#FFF5F2] border-[1.5px] border-[#EF7F61]/30 rounded-[28px] group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden">
              <div className="w-14 h-14 bg-[#E66B4A] rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <span className="text-[19px] font-[700] text-[#E66B4A] relative z-10">@decidetogether.in</span>
            </a>

            {/* Facebook Card */}
            <a href="#" className="flex items-center gap-4 p-6 bg-[#FFF5F2] border-[1.5px] border-[#EF7F61]/30 rounded-[28px] group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden">
              <div className="w-14 h-14 bg-[#E66B4A] rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <span className="text-[19px] font-[700] text-[#E66B4A] relative z-10">@decidetogether.india</span>
            </a>

            {/* LinkedIn Card */}
            <a href="#" className="flex items-center gap-4 p-6 bg-[#FFF5F2] border-[1.5px] border-[#EF7F61]/30 rounded-[28px] group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden">
              <div className="w-14 h-14 bg-[#E66B4A] rounded-full flex items-center justify-center text-white shadow-lg relative z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span className="text-[19px] font-[700] text-[#E66B4A] relative z-10">@decidetogether</span>
            </a>
          </div>
        </section>

        {/* Section: Form and Map */}
        <section className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 bg-[#F2F4F7] rounded-[48px] p-10 md:p-14 border border-gray-100/50">
              <h3 className="text-[28px] md:text-[32px] font-[800] text-[#1A1A1A] mb-10 tracking-tight">Have questions? Reach out to us.</h3>
              <form className="space-y-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white px-6 py-4 rounded-[16px] outline-none font-bold" />
                <input type="email" placeholder="Email Address" className="w-full bg-white px-6 py-4 rounded-[16px] outline-none font-bold" />
                <textarea placeholder="Message" rows={4} className="w-full bg-white px-6 py-4 rounded-[16px] outline-none font-bold resize-none"></textarea>
                <button className="bg-[#E66B4A] text-white px-10 py-4 rounded-full font-black text-lg">Send Message</button>
              </form>
            </div>
            <div className="w-full lg:w-1/2 rounded-[48px] overflow-hidden bg-gray-100 flex items-center justify-center text-gray-400">Map Interface</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
