import React from 'react';
import watercolorSplashes from '../../assets/LandingPageImg/watercolor-splashes.png';
import watercolourBg from '../../assets/LandingPageImg/watercolour-bg.png';



/* ─── Audience Icons (Minimal, soft line style) ─── */

const CakeIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Cake base */}
    <rect x="8" y="22" width="24" height="10" rx="3" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Cake top layer */}
    <rect x="11" y="15" width="18" height="9" rx="2.5" fill="#FAFAFA" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Frosting drips */}
    <path d="M11 17 Q14 20 17 17 Q20 20 23 17 Q26 20 29 17" stroke="#A8C3B0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    {/* Candle */}
    <rect x="18.5" y="9" width="3" height="7" rx="1" fill="#EAD9C6" />
    {/* Flame */}
    <ellipse cx="20" cy="8" rx="2" ry="3" fill="#6BAF92" opacity="0.7" />
  </svg>
);

const HangerIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Hook */}
    <path d="M20 8 Q20 5 22 5 Q24 5 24 7" stroke="#6BAF92" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Hanger triangle */}
    <path d="M20 12 L6 28 L34 28 Z" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Bar */}
    <line x1="6" y1="28" x2="34" y2="28" stroke="#6BAF92" strokeWidth="2" strokeLinecap="round" />
    {/* Dress silhouette */}
    <path d="M14 28 L12 36 L28 36 L26 28" fill="#EAD9C6" opacity="0.5" stroke="#A8C3B0" strokeWidth="1" />
  </svg>
);

const BrushIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Mirror */}
    <circle cx="20" cy="16" r="10" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    <circle cx="20" cy="16" r="6.5" fill="#FAFAFA" stroke="#A8C3B0" strokeWidth="1" />
    {/* Handle */}
    <rect x="18" y="26" width="4" height="10" rx="2" fill="#EAD9C6" stroke="#6BAF92" strokeWidth="1.2" />
    {/* Sparkle */}
    <circle cx="18" cy="13" r="1.2" fill="#6BAF92" opacity="0.5" />
    <circle cx="23" cy="17" r="0.8" fill="#6BAF92" opacity="0.4" />
  </svg>
);

const TiffinIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Bottom container */}
    <rect x="8" y="22" width="24" height="10" rx="4" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Middle container */}
    <rect x="8" y="13" width="24" height="10" rx="4" fill="#FAFAFA" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Lid */}
    <path d="M7 13 Q7 8 20 8 Q33 8 33 13" fill="#EAD9C6" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Handle on lid */}
    <rect x="17" y="5" width="6" height="4" rx="2" fill="none" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Clasp */}
    <line x1="6" y1="20" x2="8" y2="20" stroke="#A8C3B0" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="20" x2="34" y2="20" stroke="#A8C3B0" strokeWidth="1.5" strokeLinecap="round" />
    {/* Steam */}
    <path d="M16 4 Q17 1 18 4" stroke="#A8C3B0" strokeWidth="0.8" fill="none" opacity="0.6" />
    <path d="M22 3 Q23 0 24 3" stroke="#A8C3B0" strokeWidth="0.8" fill="none" opacity="0.6" />
  </svg>
);

const CraftIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Yarn ball */}
    <circle cx="16" cy="22" r="10" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    <path d="M8 18 Q16 28 24 18" stroke="#A8C3B0" strokeWidth="1" fill="none" />
    <path d="M10 25 Q16 16 22 25" stroke="#A8C3B0" strokeWidth="1" fill="none" />
    {/* Knitting needle */}
    <line x1="22" y1="28" x2="35" y2="8" stroke="#6BAF92" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="35" cy="7" r="2" fill="#EAD9C6" stroke="#6BAF92" strokeWidth="1" />
    {/* Thread trailing */}
    <path d="M24 16 Q28 18 26 22" stroke="#6BAF92" strokeWidth="1" fill="none" opacity="0.5" />
  </svg>
);

const ShopIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Shop body */}
    <rect x="6" y="18" width="28" height="16" rx="2" fill="#FAFAFA" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Awning */}
    <path d="M4 18 Q10 12 20 12 Q30 12 36 18" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Awning scallops */}
    <path d="M4 18 Q8 22 12 18 Q16 22 20 18 Q24 22 28 18 Q32 22 36 18" fill="#EAD9C6" stroke="#6BAF92" strokeWidth="1.2" />
    {/* Door */}
    <rect x="16" y="26" width="8" height="8" rx="1" fill="#DCEFE4" stroke="#A8C3B0" strokeWidth="1" />
    <circle cx="22" cy="30" r="0.8" fill="#6BAF92" />
    {/* Window */}
    <rect x="8" y="22" width="5" height="5" rx="1" fill="#DCEFE4" stroke="#A8C3B0" strokeWidth="0.8" />
    <rect x="27" y="22" width="5" height="5" rx="1" fill="#DCEFE4" stroke="#A8C3B0" strokeWidth="0.8" />
  </svg>
);

const GroupIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Center person */}
    <circle cx="20" cy="13" r="5" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    <ellipse cx="20" cy="26" rx="7" ry="5" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Left person */}
    <circle cx="9" cy="16" r="4" fill="#FAFAFA" stroke="#A8C3B0" strokeWidth="1.3" />
    <ellipse cx="9" cy="28" rx="5.5" ry="4" fill="#FAFAFA" stroke="#A8C3B0" strokeWidth="1.3" />
    {/* Right person */}
    <circle cx="31" cy="16" r="4" fill="#FAFAFA" stroke="#A8C3B0" strokeWidth="1.3" />
    <ellipse cx="31" cy="28" rx="5.5" ry="4" fill="#FAFAFA" stroke="#A8C3B0" strokeWidth="1.3" />
    {/* Connection lines */}
    <path d="M14 22 Q17 20 16 17" stroke="#EAD9C6" strokeWidth="1" fill="none" opacity="0.6" />
    <path d="M26 22 Q23 20 24 17" stroke="#EAD9C6" strokeWidth="1" fill="none" opacity="0.6" />
  </svg>
);

const PackageIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    {/* Box */}
    <rect x="6" y="14" width="28" height="20" rx="3" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    {/* Box lid */}
    <path d="M4 14 L20 6 L36 14" fill="#FAFAFA" stroke="#6BAF92" strokeWidth="1.5" strokeLinejoin="round" />
    {/* Center ribbon vertical */}
    <line x1="20" y1="6" x2="20" y2="34" stroke="#EAD9C6" strokeWidth="2" />
    {/* Center ribbon horizontal */}
    <line x1="6" y1="24" x2="34" y2="24" stroke="#EAD9C6" strokeWidth="2" />
    {/* Bow */}
    <ellipse cx="17" cy="23" rx="4" ry="3" fill="none" stroke="#6BAF92" strokeWidth="1.2" transform="rotate(-15, 17, 23)" />
    <ellipse cx="23" cy="23" rx="4" ry="3" fill="none" stroke="#6BAF92" strokeWidth="1.2" transform="rotate(15, 23, 23)" />
    <circle cx="20" cy="24" r="1.5" fill="#6BAF92" />
  </svg>
);

/* ─── Audience Data ─── */
const audiences = [
  { label: "Home Bakers", Icon: CakeIcon },
  { label: "Boutique Owners", Icon: HangerIcon },
  { label: "Beauticians", Icon: BrushIcon },
  { label: "Tiffin Services", Icon: TiffinIcon },
  { label: "Handmade Sellers", Icon: CraftIcon },
  { label: "Small Local Businesses", Icon: ShopIcon },
  { label: "Self Help Groups", Icon: GroupIcon },
  { label: "Product Businesses", Icon: PackageIcon },
];

/* ─── Main Component ─── */
const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-24 md:py-32 bg-warm-white relative overflow-hidden scroll-mt-24">


      {/* Subtle decorative blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-light-pastel-green/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-beige/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Watercolor Background Textures */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
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



      <div className="max-w-6xl w-[90%] mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <p className="text-mint-green font-serif text-sm tracking-widest uppercase">
            Who It's For
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-muted-dark-green leading-tight">
            Made for women building <br className="hidden md:block" />
            <span className="font-brand text-3xl md:text-4xl lg:text-5xl text-muted-dark-green/85">something of their own</span>
          </h2>
          <p className="text-muted-dark-green/55 text-base py-2 lg:py-4 md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Whether you started from your kitchen table or a small rented shop — if you make something with care, we're here to help it reach the world.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-8 h-px bg-soft-sage/50"></div>
            <div className="w-2 h-2 rounded-full bg-mint-green/40"></div>
            <div className="w-8 h-px bg-soft-sage/50"></div>
          </div>
        </div>

        {/* ── Audience Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 bg-white rounded-[1.75rem] px-5 py-8 border border-gold-beige/15 shadow-sm hover:shadow-lg hover:shadow-mint-green/8 hover:-translate-y-1.5 hover:border-mint-green/25 transition-all duration-500 ease-out cursor-default"
            >
              {/* Icon container */}
              <div className="w-16 h-16 rounded-2xl bg-light-pastel-green/40 flex items-center justify-center group-hover:bg-mint-green/15 group-hover:scale-110 transition-all duration-400">
                <item.Icon />
              </div>

              {/* Label */}
              <span className="text-sm md:text-base font-semibold text-muted-dark-green/80 group-hover:text-mint-green transition-colors duration-300 text-center leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Closing reassurance line ── */}
        <div className="mt-14 md:mt-16 text-center">
          <p className="text-muted-dark-green/45 text-sm md:text-base font-light italic max-w-lg mx-auto">
            And anyone else turning a skill or passion into a small business — you belong here too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
