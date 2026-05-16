import React, { useState } from 'react';
import watercolorSplashes from '../../assets/LandingPageImg/watercolor-splashes.png';
import watercolourBg from '../../assets/LandingPageImg/watercolour-bg.png';

/* ─── WhatsApp Icon ─── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Lock / Shield Icon ─── */
const ShieldIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-mint-green/60">
    <path d="M10 2 L3 5 L3 10 C3 14.5 6 17.5 10 19 C14 17.5 17 14.5 17 10 L17 5 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M7 10.5 L9 12.5 L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Main Component ─── */
const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatYouSell: '',
    instagram: '',
    businessName: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-24 md:py-32 bg-warm-white relative overflow-hidden">

        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-cover bg-center ">
              <img 
                src={watercolorSplashes} 
                alt="" 
                className="w-full h-full object-cover opacity-30 mix-blend-multiply" 
                 
              />
            </div>
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply">
              <img 
                src={watercolourBg} 
                alt="" 
                className="w-full h-full object-cover" 
              />
            </div>

      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-light-pastel-green/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-beige/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl w-[90%] mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-14 md:mb-18 space-y-4">
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-muted-dark-green font-serif leading-tight">
            Start Your <span className="font-brand text-3xl md:text-4xl lg:text-5xl text-muted-dark-green/85">Brand Journey</span> Today
          </h2>
          <p className="text-muted-dark-green/55 text-base py-2 lg:py-4 md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            You don't need a big budget or a business degree — just a product you believe in. We'll handle the rest, one step at a time.
          </p>
          {/* Divider */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-8 h-px bg-soft-sage/50"></div>
            <div className="w-2 h-2 rounded-full bg-mint-green/40"></div>
            <div className="w-8 h-px bg-soft-sage/50"></div>
          </div>
        </div>

        {/* ── Two-Part Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">

          {/* ── LEFT: Primary CTA Actions ── */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-gold-beige/15 shadow-sm flex flex-col justify-center">

            <div className="space-y-8">
              {/* Heading */}
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-semibold text-muted-dark-green leading-snug">
                  Ready to take the <br className="hidden sm:block" />
                  <span className="text-mint-green italic">first step?</span>
                </h3>
                <p className="text-muted-dark-green/55 text-base font-light leading-relaxed max-w-sm">
                  Join our early pilot program and get personal guidance to build your brand from scratch.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="space-y-3">
                <button className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-semibold text-white bg-mint-green shadow-xl shadow-mint-green/25 hover:bg-muted-dark-green hover:shadow-2xl hover:shadow-muted-dark-green/15 hover:-translate-y-1 transition-all duration-300 active:scale-95">
                  Apply for Pilot
                </button>
                <p className="text-muted-dark-green/40 text-sm font-light">
                  Limited spots available for our first batch
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gold-beige/25"></div>
                <span className="text-muted-dark-green/30 text-sm font-light">or</span>
                <div className="flex-1 h-px bg-gold-beige/25"></div>
              </div>

              {/* WhatsApp CTA */}
              <div className="space-y-2">
                <button className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 px-8 py-3.5 rounded-full text-base font-semibold text-muted-dark-green border-2 border-soft-sage/30 hover:bg-mint-green/5 hover:border-mint-green/40 hover:text-mint-green transition-all duration-300 active:scale-95">
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </button>
                <p className="text-muted-dark-green/40 text-sm font-light">
                  Prefer a quick chat? Message us directly — we're friendly, promise ☺
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-gold-beige/15 shadow-sm">

            <div className="space-y-6">
              {/* Form Heading */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-muted-dark-green">
                  Want us to reach out to you?
                </h3>
                <p className="text-muted-dark-green/50 text-sm font-light">
                  Leave your details and our team will get in touch within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-muted-dark-green/70 mb-1.5">
                    Your Name <span className="text-mint-green">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Kumari"
                    className="w-full px-5 py-3 rounded-2xl bg-light-mint/30 border border-soft-sage/25 text-muted-dark-green placeholder:text-muted-dark-green/30 focus:outline-none focus:border-mint-green/50 focus:ring-2 focus:ring-mint-green/10 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-muted-dark-green/70 mb-1.5">
                    Phone Number <span className="text-mint-green">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-5 py-3 rounded-2xl bg-light-mint/30 border border-soft-sage/25 text-muted-dark-green placeholder:text-muted-dark-green/30 focus:outline-none focus:border-mint-green/50 focus:ring-2 focus:ring-mint-green/10 transition-all duration-300 text-sm"
                  />
                </div>

                {/* What do you sell */}
                <div>
                  <label className="block text-sm font-medium text-muted-dark-green/70 mb-1.5">
                    What do you sell? <span className="text-mint-green">*</span>
                  </label>
                  <input
                    type="text"
                    name="whatYouSell"
                    required
                    value={formData.whatYouSell}
                    onChange={handleChange}
                    placeholder="e.g. homemade pickles, candles, jute bags..."
                    className="w-full px-5 py-3 rounded-2xl bg-light-mint/30 border border-soft-sage/25 text-muted-dark-green placeholder:text-muted-dark-green/30 focus:outline-none focus:border-mint-green/50 focus:ring-2 focus:ring-mint-green/10 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Optional Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Instagram */}
                  <div>
                    <label className="block text-sm font-medium text-muted-dark-green/70 mb-1.5">
                      Instagram Handle <span className="text-muted-dark-green/30 text-xs">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder="@yourhandle"
                      className="w-full px-5 py-3 rounded-2xl bg-light-mint/30 border border-soft-sage/25 text-muted-dark-green placeholder:text-muted-dark-green/30 focus:outline-none focus:border-mint-green/50 focus:ring-2 focus:ring-mint-green/10 transition-all duration-300 text-sm"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-medium text-muted-dark-green/70 mb-1.5">
                      Business Name <span className="text-muted-dark-green/30 text-xs">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Priya's Kitchen"
                      className="w-full px-5 py-3 rounded-2xl bg-light-mint/30 border border-soft-sage/25 text-muted-dark-green placeholder:text-muted-dark-green/30 focus:outline-none focus:border-mint-green/50 focus:ring-2 focus:ring-mint-green/10 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 active:scale-[0.98] ${
                    submitted
                      ? 'bg-light-pastel-green text-mint-green cursor-default'
                      : 'bg-muted-dark-green text-white hover:bg-mint-green shadow-lg shadow-muted-dark-green/10 hover:shadow-mint-green/20'
                  }`}
                >
                  {submitted ? "✓  We'll reach out soon!" : "Request a Callback"}
                </button>

                {/* Trust microcopy */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <ShieldIcon />
                  <p className="text-muted-dark-green/35 text-xs font-light">
                    We'll only contact you regarding the Mint Bloom pilot. No spam, ever.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
