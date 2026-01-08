import React, { useState } from 'react';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [phone, setPhone] = useState('');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-[1040px] bg-white rounded-[36px] overflow-hidden flex flex-col md:flex-row shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] animate-in zoom-in-95 duration-300">
        
        {/* Image Side */}
        <div className="relative w-full md:w-[45%] h-[240px] md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000" 
            alt="Modern Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
            <h2 className="text-3xl font-black text-white mb-3 tracking-tight">Simplified Property Buying</h2>
            <p className="text-white/80 text-lg font-medium leading-relaxed">
              From dreaming to owning — we make the process easy and achievable.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col bg-white">
          {/* Header Actions */}
          <div className="flex items-center justify-between mb-12">
            <button 
              onClick={onClose}
              className="group flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-bold text-lg"
            >
              <div className="p-1 rounded-full group-hover:bg-gray-100 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </div>
              Cancel
            </button>
            
            <button className="flex items-center gap-2 bg-[#F8F9FA] border border-gray-100 px-5 py-2.5 rounded-2xl font-bold text-gray-700 hover:bg-gray-100 transition-all">
               <svg className="text-[#25D366]" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.551 4.197 1.597 6.01L0 24l6.135-1.61a11.782 11.782 0 005.91 1.583h.005c6.637 0 12.05-5.414 12.05-12.051a11.82 11.82 0 00-3.539-8.528z" />
              </svg>
              Chat
            </button>
          </div>

          {/* Form Content */}
          <h1 className="text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight leading-[1.1]">
            Login with mobile number to explore decidetogether
          </h1>
          <p className="text-gray-500 font-medium mb-10">We'll send you an OTP for verification.</p>

          <div className="space-y-6 mb-10">
            <div className="group">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-1">Mobile Number</label>
              <div className="flex bg-[#F8F9FA] rounded-[24px] border-2 border-transparent focus-within:border-[#E66B4A] focus-within:bg-white transition-all overflow-hidden">
                <div className="flex items-center gap-2.5 px-6 py-5 border-r border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                  <img src="https://flagcdn.com/w40/in.png" alt="IN" className="w-7 rounded-sm shadow-sm" />
                  <span className="font-bold text-gray-800 text-lg">+91</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <input 
                  type="tel" 
                  placeholder="Enter phone number"
                  className="w-full px-8 py-5 bg-transparent outline-none text-xl font-bold text-[#1A1A1A] placeholder:text-gray-300"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                />
              </div>
            </div>
          </div>

          <button 
            className="w-full bg-[#1A1A1A] text-white font-black py-5 rounded-[24px] text-xl hover:bg-black hover:shadow-2xl hover:shadow-black/20 transition-all active:scale-[0.98]"
          >
            Sign in
          </button>

          {/* Footer Info */}
          <div className="mt-auto pt-10">
            <p className="text-[11px] leading-relaxed text-gray-400 font-bold uppercase tracking-wider">
              By joining, you agree to the <a href="#" className="text-gray-900 underline hover:text-[#E66B4A]">Terms and Conditions</a> and <a href="#" className="text-gray-900 underline hover:text-[#E66B4A]">Privacy Policy</a>. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;