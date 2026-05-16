import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import JoinPilotImg from '../../assets/JoinPilotImg.png';

const JoinPilotPage = () => {
  const [formData, setFormData] = useState({
    founderName: '',
    coFounders: [''],
    phoneNumber: '',
    companyName: '',
    whatYouSell: '',
    category: '',
    otherCategory: '',
    helpWith: [], // Branding, Packaging, Digital marketing
    sellOnline: '' // Yes/No
  });
  
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Eatables', 'Accessories', 'Apparels', 'Beauticians', 'Boutiques', 'Footwear', 'Other'
  ];

  const helpOptions = ['Branding', 'Packaging', 'Digital marketing'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCoFounderChange = (index, value) => {
    const newCoFounders = [...formData.coFounders];
    newCoFounders[index] = value;
    setFormData(prev => ({ ...prev, coFounders: newCoFounders }));
  };

  const addCoFounder = () => {
    setFormData(prev => ({ ...prev, coFounders: [...prev.coFounders, ''] }));
  };

  const removeCoFounder = (index) => {
    if (formData.coFounders.length <= 1) {
      handleCoFounderChange(0, '');
      return;
    }
    const newCoFounders = formData.coFounders.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, coFounders: newCoFounders }));
  };

  const handleCheckboxChange = (option) => {
    setFormData(prev => {
      const current = prev.helpWith;
      if (current.includes(option)) {
        return { ...prev, helpWith: current.filter(item => item !== option) };
      } else {
        return { ...prev, helpWith: [...current, option] };
      }
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send data to an API here
    console.log('Submission:', formData);
    setSubmitted(true);
  };

  const inputClasses = "w-full px-5 py-3 rounded-2xl bg-white border border-soft-sage/30 focus:border-mint-green focus:ring-4 focus:ring-mint-green/10 outline-none transition-all duration-300 text-muted-dark-green placeholder:text-muted-dark-green/30 text-sm";
  const labelClasses = "block text-[13px] font-semibold text-muted-dark-green/80 mb-1.5 ml-1";

  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden w-full bg-white flex flex-col md:flex-row font-primary selection:bg-mint-green/20 relative">
      
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-30">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-soft-sage/20 text-muted-dark-green hover:bg-mint-green hover:text-white transition-all group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Home</span>
        </Link>
      </div>

      {/* Left Side: Illustration & Branding */}
      <div className="w-full md:w-1/2 bg-light-mint/40 p-8 lg:p-12 flex flex-col items-center justify-center relative overflow-hidden md:h-full border-b md:border-b-0 md:border-r border-soft-sage/10">
        {/* Subtle Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-mint-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-beige/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-lg space-y-12">
          <div className="space-y-6">
            <h2 className="text-mint-green font-brand text-5xl px-10 lg:text-6xl">Join Us Today</h2>
            <div className="w-32 h-0.5 bg-mint-green/30 rounded-full"></div>
          </div>

          <div className="relative group scale-105 transition-transform duration-700">
            <div className="absolute -inset-10 bg-mint-green/5 rounded-full blur-3xl group-hover:bg-mint-green/10 transition-colors duration-1000"></div>
            <img 
              src={JoinPilotImg} 
              alt="Join Pilot Illustration" 
              className="relative w-full h-auto drop-shadow-2xl animate-float mix-blend-multiply"
            />
          </div>

          <div className="space-y-6 pt-4">
            <p className="text-muted-dark-green/70 text-base leading-relaxed font-medium">
              Empowering women-led businesses in Patna to bloom digitally. Join our exclusive pilot program today.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Direct Support', 'Sales Growth', 'Digital Growth', 'Expert Guidance'].map((perk, i) => (
                <div key={perk} className="flex items-center gap-3 bg-white/80 p-3 rounded-2xl border border-soft-sage/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-mint-green/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-mint-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-bold text-muted-dark-green/80 uppercase tracking-widest">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 p-8 lg:p-20 xl:p-28 overflow-y-auto md:h-full scrollbar-thin bg-white flex items-start pt-24 lg:pt-32">
        {!submitted ? (
          <div className="max-w-xl mx-auto w-full space-y-12 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-green/10 text-mint-green text-[10px] font-bold uppercase tracking-widest mb-2 font-primary">
                <span className="w-1 h-1 rounded-full bg-mint-green animate-pulse"></span>
                Pilot Program
              </div>
              <h1 className="text-4xl lg:text-5xl font-brand text-muted-dark-green tracking-tight leading-tight">
                Mint Bloom <span className="text-mint-green italic font-primary">Onboarding</span>
              </h1>
              <div className="w-12 h-1 bg-gold-beige/40 rounded-full"></div>
              <p className="text-muted-dark-green/50 text-lg font-medium pt-2 font-primary">Tell us about you and your business</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Names Section */}
              <div className="space-y-6">
                <div>
                  <label className={labelClasses}>Founder's Name *</label>
                  <input
                    required
                    type="text"
                    name="founderName"
                    value={formData.founderName}
                    onChange={handleInputChange}
                    placeholder="Enter founder's name"
                    className={inputClasses}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between ml-1">
                    <label className={labelClasses}>Co-Founder Name(s)</label>
                    <button 
                      type="button" 
                      onClick={addCoFounder}
                      className="flex items-center gap-2 text-xs font-bold text-mint-green hover:text-muted-dark-green transition-all hover:scale-105"
                    >
                      <span className="w-5 h-5 rounded-full bg-mint-green/10 flex items-center justify-center text-lg leading-none">+</span>
                      Add Another
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {formData.coFounders.map((name, index) => (
                      <div key={index} className="flex gap-2 group animate-in slide-in-from-left-4 duration-300">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => handleCoFounderChange(index, e.target.value)}
                            placeholder={`Co-founder ${index + 1}`}
                            className={inputClasses}
                          />
                        </div>
                        {formData.coFounders.length > 1 && (
                          <button 
                            type="button" 
                            onClick={() => removeCoFounder(index)}
                            className="p-3 text-muted-dark-green/20 hover:text-red-400 transition-colors self-center"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Phone Number *</label>
                  <input
                    required
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="WhatsApp number"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Company Name (if any)</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your brand name"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* What do you sell? */}
              <div>
                <label className={labelClasses}>What do you sell? *</label>
                <textarea
                  required
                  name="whatYouSell"
                  value={formData.whatYouSell}
                  onChange={handleInputChange}
                  placeholder="Tell us about your beautiful products..."
                  rows="3"
                  className={`${inputClasses} resize-none py-4`}
                />
              </div>

              {/* Category */}
              <div className="space-y-4">
                <div>
                  <label className={labelClasses}>Category of Business *</label>
                  <select
                    required
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%20fill%3D%22none%22%20stroke%3D%22%233F6F58%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_1.5rem_center] bg-no-repeat py-4`}
                  >
                    <option value="" disabled>Select category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                {formData.category === 'Other' && (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                    <label className="block text-[12px] font-bold text-mint-green mb-2 ml-1 uppercase tracking-widest">Please specify category</label>
                    <input
                      type="text"
                      name="otherCategory"
                      value={formData.otherCategory}
                      onChange={handleInputChange}
                      placeholder="Type your category here"
                      className={inputClasses}
                    />
                  </div>
                )}
              </div>

              {/* Help Options */}
              <div className="space-y-4">
                <label className={labelClasses}>What do you need help with? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {helpOptions.map(option => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleCheckboxChange(option)}
                      className={`flex items-center justify-center px-4 py-2.5 rounded-xl border text-[13px] font-bold transition-all duration-500 ${
                        formData.helpWith.includes(option)
                          ? "bg-mint-green border-mint-green text-white shadow-xl shadow-mint-green/30 scale-[1.02]"
                          : "bg-white border-soft-sage/20 text-muted-dark-green hover:border-mint-green/50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Online Status */}
              <div className="space-y-4">
                <label className={labelClasses}>Do you sell online? *</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="flex-1 group cursor-pointer">
                      <input
                        type="radio"
                        name="sellOnline"
                        value={option}
                        checked={formData.sellOnline === option}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-full py-2.5 rounded-xl border text-[13px] font-bold text-center transition-all duration-500 ${
                        formData.sellOnline === option
                          ? "bg-muted-dark-green border-muted-dark-green text-white shadow-xl scale-[1.02]"
                          : "bg-white border-soft-sage/20 text-muted-dark-green group-hover:border-mint-green/50"
                      }`}>
                        {option}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-mint-green text-white font-bold text-lg hover:bg-muted-dark-green hover:shadow-2xl hover:shadow-mint-green/40 hover:-translate-y-1 transition-all duration-500 active:scale-[0.98] shadow-2xl shadow-mint-green/20"
                >
                  Submit Application
                </button>
                <p className="text-center text-[12px] text-muted-dark-green/40 mt-5 italic font-medium">
                  By submitting, you agree to our terms and conditions for the pilot program.
                </p>
              </div>

            </form>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-10 animate-in zoom-in fade-in duration-1000 max-w-md mx-auto">
            <div className="w-32 h-32 bg-mint-green rounded-full flex items-center justify-center shadow-2xl shadow-mint-green/40 relative">
              <div className="absolute inset-0 rounded-full bg-mint-green animate-ping opacity-20"></div>
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-primary font-bold text-muted-dark-green tracking-tight">Welcome Aboard!</h2>
              <p className="text-muted-dark-green/60 text-xl font-medium leading-relaxed">
                We've received your application. Our team will contact you on WhatsApp within 24 hours.
              </p>
            </div>
            <Link 
              to="/" 
              className="px-12 py-5 rounded-full bg-gold-beige text-muted-dark-green font-bold text-lg hover:bg-mint-green hover:text-white transition-all duration-500 shadow-xl shadow-gold-beige/20 inline-flex items-center gap-3 group"
            >
              Go to Homepage
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #fdfdfd;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #DCEFE4;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #A8C3B0;
        }
      `}} />
    </div>
  );
};

export default JoinPilotPage;

