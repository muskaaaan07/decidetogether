
import React, { useState, useMemo } from 'react';

const EMICalculatorSection: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(8000000); // 80 Lakhs
  const [interestRate, setInterestRate] = useState(6.75);
  const [tenure, setTenure] = useState(20);

  const stats = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;

    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emiValue * n;
    const interestAmount = totalPayable - P;

    return {
      emi: Math.round(emiValue),
      totalPayable: Math.round(totalPayable),
      interestAmount: Math.round(interestAmount),
      principal: P
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const loanAmountLabel = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lacs`;
    return `₹${val}`;
  };

  // Arc calculation for gauge
  // Semi-circle path (d): M 10 100 A 90 90 0 0 1 190 100
  // Interest to Principal Ratio for gauge coloring
  const interestRatio = stats.interestAmount / stats.totalPayable;
  const strokeDash = 283; // Circumference of semi-circle arc (approx)
  const offset = strokeDash * (1 - interestRatio);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-[54px] font-[800] text-center text-[#1A1A1A] mb-16 tracking-tighter">
          EMI Calculator
        </h2>

        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col lg:flex-row gap-20">
          
          {/* Sliders Container */}
          <div className="flex-1 space-y-12">
            
            {/* Loan Amount Slider */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-gray-500 font-bold text-[15px]">Loan Amount</label>
                <div className="bg-white px-4 py-1.5 rounded-xl border border-gray-100">
                  <span className="text-[#1A1A1A] font-[900] text-[16px]">{loanAmountLabel(loanAmount)}</span>
                </div>
              </div>
              <div className="relative pt-2">
                <input 
                  type="range" 
                  min="100000" 
                  max="130000000" 
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#E66B4A]"
                  style={{
                    background: `linear-gradient(to right, #E66B4A 0%, #E66B4A ${(loanAmount/130000000)*100}%, #f3f4f6 ${(loanAmount/130000000)*100}%, #f3f4f6 100%)`
                  }}
                />
                <div className="flex justify-between mt-3 text-[12px] font-bold text-gray-300">
                  <span>₹ 1 Lac</span>
                  <span>₹ 13 Cr</span>
                </div>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-gray-500 font-bold text-[15px]">Interest Rate (% P.A.)</label>
                <div className="bg-white px-4 py-1.5 rounded-xl border border-gray-100">
                  <span className="text-[#1A1A1A] font-[900] text-[16px]">{interestRate}%</span>
                </div>
              </div>
              <div className="relative pt-2">
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="0.05"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#E66B4A]"
                  style={{
                    background: `linear-gradient(to right, #E66B4A 0%, #E66B4A ${(interestRate/30)*100}%, #f3f4f6 ${(interestRate/30)*100}%, #f3f4f6 100%)`
                  }}
                />
                <div className="flex justify-between mt-3 text-[12px] font-bold text-gray-300">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label className="text-gray-500 font-bold text-[15px]">Loan Tenure</label>
                <div className="bg-white px-4 py-1.5 rounded-xl border border-gray-100">
                  <span className="text-[#1A1A1A] font-[900] text-[16px]">{tenure} Years</span>
                </div>
              </div>
              <div className="relative pt-2">
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#E66B4A]"
                  style={{
                    background: `linear-gradient(to right, #E66B4A 0%, #E66B4A ${(tenure/30)*100}%, #f3f4f6 ${(tenure/30)*100}%, #f3f4f6 100%)`
                  }}
                />
                <div className="flex justify-between mt-3 text-[12px] font-bold text-gray-300">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

          </div>

          {/* Visualization Container */}
          <div className="flex-1 flex flex-col items-center justify-center">
            
            {/* Gauge */}
            <div className="relative w-full max-w-[400px] aspect-[2/1.2] flex items-center justify-center mb-12">
               <svg viewBox="0 0 200 120" className="w-full h-full transform -rotate-0">
                  {/* Background Path */}
                  <path 
                    d="M 20 100 A 80 80 0 0 1 180 100" 
                    fill="none" 
                    stroke="#F3F4F6" 
                    strokeWidth="14" 
                    strokeLinecap="round"
                  />
                  {/* Foreground Path (EMI Visualizer) */}
                  <path 
                    d="M 20 100 A 80 80 0 0 1 180 100" 
                    fill="none" 
                    stroke="#E66B4A" 
                    strokeWidth="14" 
                    strokeLinecap="round"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 * (1 - (tenure/30))} 
                    className="transition-all duration-500 ease-out"
                  />
               </svg>
               
               {/* Center Text */}
               <div className="absolute bottom-[20%] flex flex-col items-center">
                 <span className="text-gray-400 font-bold text-[14px] uppercase tracking-wider mb-2">Your Monthly Home EMI</span>
                 <span className="text-[48px] font-[900] text-[#1A1A1A] tracking-tighter leading-none">
                   {formatCurrency(stats.emi)}
                 </span>
               </div>
            </div>

            {/* Summary Grid */}
            <div className="w-full grid grid-cols-3 gap-8 border-t border-gray-50 pt-10">
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] font-bold uppercase tracking-widest mb-2">Interest Amount</span>
                <span className="text-[#E66B4A] text-[20px] font-[900] tracking-tight">{formatCurrency(stats.interestAmount)}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] font-bold uppercase tracking-widest mb-2">Principal Amount</span>
                <span className="text-[#EF7F61] text-[20px] font-[900] tracking-tight">{formatCurrency(stats.principal)}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px] font-bold uppercase tracking-widest mb-2">Total Payable Amount</span>
                <span className="text-[#1A1A1A] text-[20px] font-[900] tracking-tight">{formatCurrency(stats.totalPayable)}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EMICalculatorSection;
