import React from 'react';

/* ─── Step Icons ─── */

// Step 1: Product / Handmade box icon
const ProductIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    {/* Open box */}
    <rect x="10" y="22" width="36" height="24" rx="4" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="2" />
    {/* Box flaps */}
    <path d="M10 26 L28 18 L46 26" stroke="#6BAF92" strokeWidth="2" fill="none" strokeLinejoin="round" />
    {/* Items in box */}
    <rect x="18" y="14" width="10" height="12" rx="2" fill="#EAD9C6" stroke="#EAD9C6" strokeWidth="1" />
    <circle cx="35" cy="18" r="5" fill="#A8C3B0" opacity="0.7" />
    {/* Heart on box (handmade love) */}
    <path d="M24 34 C24 34 21 31 21 29 C21 27.5 22.5 27 24 28.5 C25.5 27 27 27.5 27 29 C27 31 24 34 24 34Z" fill="#6BAF92" />
    <rect x="30" y="32" width="8" height="3" rx="1.5" fill="#A8C3B0" opacity="0.5" />
    <rect x="30" y="37" width="5" height="2" rx="1" fill="#A8C3B0" opacity="0.3" />
  </svg>
);

// Step 2: Design / Branding palette icon
const BrandingIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    {/* Palette shape */}
    <ellipse cx="28" cy="30" rx="20" ry="17" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="2" />
    {/* Palette hole */}
    <ellipse cx="22" cy="24" rx="4" ry="3.5" fill="#FAFAFA" stroke="#A8C3B0" strokeWidth="1.2" />
    {/* Paint dots */}
    <circle cx="18" cy="34" r="3.5" fill="#6BAF92" />
    <circle cx="28" cy="38" r="3" fill="#EAD9C6" />
    <circle cx="36" cy="35" r="3" fill="#3F6F58" opacity="0.6" />
    <circle cx="36" cy="25" r="2.5" fill="#A8C3B0" />
    {/* Paintbrush */}
    <rect x="38" y="10" width="3" height="18" rx="1.5" fill="#EAD9C6" transform="rotate(20, 38, 10)" />
    <rect x="36.5" y="7" width="4" height="8" rx="2" fill="#6BAF92" transform="rotate(20, 36.5, 7)" />
  </svg>
);

// Step 3: Phone / Social media icon
const DigitalIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    {/* Phone frame */}
    <rect x="14" y="6" width="28" height="44" rx="6" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="2" />
    {/* Screen */}
    <rect x="18" y="12" width="20" height="30" rx="2" fill="#FAFAFA" />
    {/* Notch */}
    <rect x="23" y="8" width="10" height="3" rx="1.5" fill="#A8C3B0" opacity="0.5" />
    {/* Instagram-like layout on screen */}
    <circle cx="24" cy="18" r="3" fill="#A8C3B0" opacity="0.5" />
    <rect x="29" y="16" width="7" height="2" rx="1" fill="#3F6F58" opacity="0.2" />
    <rect x="29" y="19.5" width="5" height="1.5" rx="0.75" fill="#A8C3B0" opacity="0.3" />
    {/* Photo grid */}
    <rect x="19" y="24" width="8" height="7" rx="1.5" fill="#DCEFE4" />
    <rect x="29" y="24" width="8" height="7" rx="1.5" fill="#EAD9C6" />
    <rect x="19" y="33" width="8" height="7" rx="1.5" fill="#EAD9C6" />
    <rect x="29" y="33" width="8" height="7" rx="1.5" fill="#DCEFE4" />
    {/* Home button */}
    <rect x="25" y="44" width="6" height="2" rx="1" fill="#A8C3B0" opacity="0.4" />
    {/* Floating heart notification */}
    <g transform="translate(38, 4)">
      <circle cx="6" cy="6" r="7" fill="white" stroke="#6BAF92" strokeWidth="1.2" />
      <path d="M6 9 C6 9 3.5 7 3.5 5.5 C3.5 4.5 4.5 4 6 5 C7.5 4 8.5 4.5 8.5 5.5 C8.5 7 6 9 6 9Z" fill="#6BAF92" />
    </g>
  </svg>
);

// Step 4: Shopping / Growth / Delivery icon
const SellingIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
    {/* Shopping bag */}
    <path d="M12 20 L10 46 Q10 48 12 48 L44 48 Q46 48 46 46 L44 20 Z" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="2" />
    {/* Bag handles */}
    <path d="M20 20 Q20 10 28 10 Q36 10 36 20" fill="none" stroke="#6BAF92" strokeWidth="2.5" strokeLinecap="round" />
    {/* Growth arrow on bag */}
    <path d="M18 38 L24 32 L30 35 L38 26" stroke="#6BAF92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 25 L39 25 L39 30" stroke="#6BAF92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Star / sparkle (success) */}
    <g transform="translate(40, 4)">
      <circle cx="6" cy="6" r="7" fill="#6BAF92" />
      <path d="M3.5 6 L5.5 6 L6 3.5 L6.5 6 L8.5 6 L7 7.5 L7.5 9.5 L6 8 L4.5 9.5 L5 7.5 Z" fill="white" />
    </g>
  </svg>
);

/* ─── Steps Data ─── */
const steps = [
  {
    number: "01",
    title: "You bring your product",
    description: "Start with what you already make — homemade, local, or small-scale.",
    Icon: ProductIcon,
  },
  {
    number: "02",
    title: "We shape your brand",
    description: "We help you create your name, logo, and packaging direction.",
    Icon: BrandingIcon,
  },
  {
    number: "03",
    title: "We build your digital presence",
    description: "We set up your Instagram, product photos, and online identity.",
    Icon: DigitalIcon,
  },
  {
    number: "04",
    title: "You start selling with confidence",
    description: "Your products go live on platforms like Meesho and Amazon.",
    Icon: SellingIcon,
  },
];

/* ─── Main Component ─── */
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-light-mint/30 relative overflow-hidden scroll-mt-24">


      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-soft-sage/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl w-[90%] mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-dark-green leading-tight">
            Simple steps to start your <br className="hidden md:block" />
            <span className="font-brand text-3xl md:text-4xl lg:text-5xl text-muted-dark-green/85">brand journey</span>
          </h2>
          <p className="text-muted-dark-green/55 text-base py-2 lg:py-4 md:text-lg font-light max-w-lg mx-auto leading-relaxed">
            From your product to your first online sale — we guide you at every step.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-8 h-px bg-soft-sage/50"></div>
            <div className="w-2 h-2 rounded-full bg-mint-green/40"></div>
            <div className="w-8 h-px bg-soft-sage/50"></div>
          </div>
        </div>

        {/* ── Steps Timeline ── */}
        <div className="relative">

          {/* Horizontal connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-soft-sage/40 to-transparent"></div>
            {/* animated dashes */}
            <div className="absolute inset-0 border-t-2 border-dashed border-mint-green/20"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">

                {/* Step Number Circle + Icon */}
                <div className="relative mb-8">
                  {/* Soft glow behind */}
                  <div className="absolute -inset-4 bg-mint-green/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Main circle */}
                  <div className="relative w-[7.5rem] h-[7.5rem] rounded-full bg-white border-2 border-soft-sage/30 shadow-md shadow-mint-green/5 flex items-center justify-center group-hover:border-mint-green/50 group-hover:shadow-lg group-hover:shadow-mint-green/10 group-hover:scale-105 transition-all duration-500 ease-out">
                    <step.Icon />
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-mint-green text-white text-xs font-bold flex items-center justify-center shadow-md shadow-mint-green/30 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Vertical connector (mobile / tablet only) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-px h-8 bg-gradient-to-b from-soft-sage/40 to-transparent mb-2 sm:hidden"></div>
                )}

                {/* Card body */}
                <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-3xl px-6 py-7 border border-gold-beige/15 shadow-sm group-hover:shadow-lg group-hover:shadow-mint-green/5 group-hover:-translate-y-1 transition-all duration-500 w-full max-w-[280px]">
                  <h3 className="text-lg font-semibold text-muted-dark-green mb-2 group-hover:text-mint-green transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-dark-green/60 text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Flow arrow between cards (desktop only, not after last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute" style={{
                    top: '4.5rem',
                    left: `${(index + 1) * 25}%`,
                    transform: 'translateX(-50%)',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-mint-green/40">
                      <path d="M6 10 L14 10 M11 6 L15 10 L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default HowItWorks;
