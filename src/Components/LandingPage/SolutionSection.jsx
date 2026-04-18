import React from 'react';
import WomenIllustration from '../../assets/LandingPageImg/WomenIllustration.png';


/* ─── Illustration Components ─── */

// Card 1: Brand Creation — Paint palette + tag + packaging box scene
const BrandIllustration = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Soft background circle */}
    <circle cx="140" cy="100" r="85" fill="#DCEFE4" opacity="0.5" />

    {/* Paint Palette */}
    <g transform="translate(45, 35)">
      <ellipse cx="55" cy="65" rx="55" ry="50" fill="#FAFAFA" stroke="#6BAF92" strokeWidth="2" />
      {/* Paint palette hole */}
      <ellipse cx="55" cy="45" rx="12" ry="10" fill="#DCEFE4" stroke="#A8C3B0" strokeWidth="1.5" />
      {/* Color dots on palette */}
      <circle cx="25" cy="55" r="8" fill="#6BAF92" />
      <circle cx="40" cy="80" r="7" fill="#EAD9C6" />
      <circle cx="65" cy="85" r="7" fill="#A8C3B0" />
      <circle cx="82" cy="70" r="6" fill="#3F6F58" />
      <circle cx="80" cy="50" r="6" fill="#DCEFE4" />
      {/* Paintbrush */}
      <rect x="95" y="20" width="4" height="40" rx="2" fill="#EAD9C6" transform="rotate(30, 95, 20)" />
      <rect x="89" y="14" width="6" height="15" rx="3" fill="#6BAF92" transform="rotate(30, 89, 14)" />
    </g>

    {/* Brand Tag / Label */}
    <g transform="translate(160, 25)">
      <rect x="0" y="15" width="65" height="85" rx="8" fill="white" stroke="#6BAF92" strokeWidth="1.8" />
      {/* Tag hole */}
      <circle cx="32" cy="28" r="5" fill="none" stroke="#A8C3B0" strokeWidth="1.5" />
      {/* Tag string */}
      <path d="M32 23 Q32 10 45 8" stroke="#A8C3B0" strokeWidth="1.2" fill="none" />
      {/* Logo placeholder on tag */}
      <rect x="12" y="42" width="40" height="8" rx="4" fill="#DCEFE4" />
      <rect x="18" y="56" width="28" height="4" rx="2" fill="#A8C3B0" opacity="0.5" />
      <rect x="22" y="65" width="20" height="4" rx="2" fill="#A8C3B0" opacity="0.3" />
      {/* Decorative leaf on tag */}
      <path d="M25 78 Q32 70 39 78 Q32 82 25 78Z" fill="#6BAF92" opacity="0.6" />
    </g>

    {/* Small packaging box at bottom */}
    <g transform="translate(100, 130)">
      <rect x="0" y="8" width="80" height="50" rx="6" fill="white" stroke="#EAD9C6" strokeWidth="1.5" />
      {/* Box flaps */}
      <path d="M0 18 L40 8 L80 18" stroke="#EAD9C6" strokeWidth="1.5" fill="none" />
      {/* Ribbon */}
      <line x1="40" y1="8" x2="40" y2="58" stroke="#6BAF92" strokeWidth="2" />
      <line x1="0" y1="35" x2="80" y2="35" stroke="#6BAF92" strokeWidth="2" />
      {/* Bow */}
      <ellipse cx="34" cy="33" rx="8" ry="5" fill="none" stroke="#6BAF92" strokeWidth="1.5" transform="rotate(-20, 34, 33)" />
      <ellipse cx="46" cy="33" rx="8" ry="5" fill="none" stroke="#6BAF92" strokeWidth="1.5" transform="rotate(20, 46, 33)" />
    </g>

    {/* Floating sparkles */}
    <circle cx="50" cy="25" r="2" fill="#EAD9C6" opacity="0.8" />
    <circle cx="240" cy="45" r="2.5" fill="#6BAF92" opacity="0.5" />
    <circle cx="35" cy="140" r="1.8" fill="#A8C3B0" opacity="0.6" />
  </svg>
);

// Card 2: Digital Presence — Phone with Instagram-style profile & interactions
const DigitalIllustration = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Soft background circle */}
    <circle cx="140" cy="100" r="85" fill="#DCEFE4" opacity="0.35" />

    {/* Phone Frame */}
    <g transform="translate(85, 10)">
      <rect x="0" y="0" width="110" height="180" rx="16" fill="white" stroke="#A8C3B0" strokeWidth="2" />
      {/* Screen notch */}
      <rect x="35" y="4" width="40" height="6" rx="3" fill="#DCEFE4" />

      {/* Profile Header */}
      <circle cx="28" cy="32" r="12" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.2" />
      {/* Person silhouette in profile pic */}
      <circle cx="28" cy="29" r="4" fill="#6BAF92" opacity="0.5" />
      <ellipse cx="28" cy="38" rx="6" ry="4" fill="#6BAF92" opacity="0.3" />

      {/* Username + bio lines */}
      <rect x="48" y="25" width="50" height="5" rx="2.5" fill="#3F6F58" opacity="0.25" />
      <rect x="48" y="34" width="35" height="3" rx="1.5" fill="#A8C3B0" opacity="0.4" />

      {/* Stats row */}
      <g transform="translate(10, 52)">
        <text x="12" y="8" fontSize="7" fontWeight="600" fill="#3F6F58" textAnchor="middle" fontFamily="sans-serif">245</text>
        <text x="12" y="16" fontSize="4.5" fill="#A8C3B0" textAnchor="middle" fontFamily="sans-serif">Posts</text>
        <text x="45" y="8" fontSize="7" fontWeight="600" fill="#3F6F58" textAnchor="middle" fontFamily="sans-serif">1.2k</text>
        <text x="45" y="16" fontSize="4.5" fill="#A8C3B0" textAnchor="middle" fontFamily="sans-serif">Followers</text>
        <text x="78" y="8" fontSize="7" fontWeight="600" fill="#3F6F58" textAnchor="middle" fontFamily="sans-serif">380</text>
        <text x="78" y="16" fontSize="4.5" fill="#A8C3B0" textAnchor="middle" fontFamily="sans-serif">Following</text>
      </g>

      {/* Photo Grid (3x3 Instagram-style) */}
      <g transform="translate(8, 78)">
        {[0, 1, 2].map(row =>
          [0, 1, 2].map(col => (
            <rect
              key={`${row}-${col}`}
              x={col * 32}
              y={row * 30}
              width="30"
              height="28"
              rx="4"
              fill={
                (row + col) % 3 === 0 ? '#DCEFE4' :
                (row + col) % 3 === 1 ? '#EAD9C6' : '#A8C3B0'
              }
              opacity="0.5"
            />
          ))
        )}
      </g>
    </g>

    {/* Floating "Like" notification bubble — top right */}
    <g transform="translate(200, 20)">
      <rect x="0" y="0" width="55" height="28" rx="14" fill="white" stroke="#6BAF92" strokeWidth="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
      {/* Heart icon */}
      <path d="M14 18 C14 18 10 14 10 11 C10 9 12 8 14 10 C16 8 18 9 18 11 C18 14 14 18 14 18Z" fill="#6BAF92" />
      <text x="30" y="17" fontSize="7" fontWeight="600" fill="#3F6F58" fontFamily="sans-serif">+128</text>
    </g>

    {/* Floating camera icon — bottom left */}
    <g transform="translate(20, 135)">
      <rect x="0" y="0" width="48" height="38" rx="10" fill="white" stroke="#A8C3B0" strokeWidth="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
      {/* Camera body */}
      <rect x="12" y="14" width="24" height="16" rx="4" fill="none" stroke="#6BAF92" strokeWidth="1.5" />
      <circle cx="24" cy="22" r="5" fill="none" stroke="#6BAF92" strokeWidth="1.3" />
      <circle cx="24" cy="22" r="2" fill="#6BAF92" opacity="0.4" />
      <rect x="19" y="12" width="10" height="4" rx="2" fill="none" stroke="#6BAF92" strokeWidth="1" />
    </g>

    {/* Floating comment bubble — middle left */}
    <g transform="translate(25, 60)">
      <rect x="0" y="0" width="45" height="24" rx="12" fill="white" stroke="#EAD9C6" strokeWidth="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
      <rect x="10" y="8" width="25" height="3" rx="1.5" fill="#A8C3B0" opacity="0.5" />
      <rect x="10" y="14" width="15" height="3" rx="1.5" fill="#A8C3B0" opacity="0.3" />
    </g>

    {/* Sparkle dots */}
    <circle cx="250" cy="150" r="2" fill="#6BAF92" opacity="0.4" />
    <circle cx="45" cy="30" r="1.5" fill="#EAD9C6" opacity="0.7" />
  </svg>
);

// Card 3: Online Selling — Shopping bag + delivery box + marketplace badges + growth
const SellingIllustration = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Soft background circle */}
    <circle cx="140" cy="100" r="85" fill="#DCEFE4" opacity="0.35" />

    {/* Shopping Bag (Center) */}
    <g transform="translate(90, 30)">
      {/* Bag body */}
      <path d="M10 55 L5 145 Q5 155 15 155 L85 155 Q95 155 95 145 L90 55 Z" fill="white" stroke="#6BAF92" strokeWidth="2" />
      {/* Bag opening */}
      <rect x="5" y="50" width="90" height="10" rx="3" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
      {/* Bag handles */}
      <path d="M30 50 Q30 25 50 25 Q70 25 70 50" fill="none" stroke="#6BAF92" strokeWidth="2.5" strokeLinecap="round" />

      {/* Items peeking out of bag */}
      <rect x="20" y="35" width="18" height="22" rx="3" fill="#EAD9C6" stroke="#EAD9C6" strokeWidth="1" />
      <rect x="42" y="30" width="16" height="27" rx="3" fill="#DCEFE4" stroke="#A8C3B0" strokeWidth="1" />
      <circle cx="65" cy="45" r="8" fill="#A8C3B0" opacity="0.5" />

      {/* Leaf decoration on bag */}
      <path d="M40 100 Q50 85 60 100 Q50 105 40 100Z" fill="#6BAF92" opacity="0.25" />
      <line x1="50" y1="100" x2="50" y2="115" stroke="#6BAF92" strokeWidth="1" opacity="0.3" />

      {/* "Shipped" checkmark badge on bag */}
      <g transform="translate(55, 115)">
        <circle cx="12" cy="12" r="12" fill="#6BAF92" />
        <path d="M6 12 L10 16 L18 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>

    {/* Marketplace Badge — Amazon style (top-left) */}
    <g transform="translate(20, 40)">
      <rect x="0" y="0" width="52" height="36" rx="10" fill="white" stroke="#EAD9C6" strokeWidth="1.3" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
      <text x="26" y="16" fontSize="7" fontWeight="700" fill="#3F6F58" textAnchor="middle" fontFamily="sans-serif">amazon</text>
      {/* Amazon smile arrow */}
      <path d="M14 24 Q26 30 38 24" stroke="#EAD9C6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M36 22 L38 24 L35 25" stroke="#EAD9C6" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </g>

    {/* Marketplace Badge — Meesho style (top-right) */}
    <g transform="translate(210, 30)">
      <rect x="0" y="0" width="52" height="36" rx="10" fill="white" stroke="#A8C3B0" strokeWidth="1.3" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
      <text x="26" y="16" fontSize="7" fontWeight="700" fill="#6BAF92" textAnchor="middle" fontFamily="sans-serif">meesho</text>
      <rect x="10" y="22" width="32" height="4" rx="2" fill="#DCEFE4" />
    </g>

    {/* Growth Arrow (bottom-right) */}
    <g transform="translate(205, 110)">
      <rect x="0" y="0" width="55" height="55" rx="14" fill="white" stroke="#6BAF92" strokeWidth="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
      {/* Chart bars */}
      <rect x="10" y="35" width="7" height="10" rx="2" fill="#DCEFE4" />
      <rect x="20" y="28" width="7" height="17" rx="2" fill="#A8C3B0" />
      <rect x="30" y="20" width="7" height="25" rx="2" fill="#6BAF92" opacity="0.6" />
      <rect x="40" y="12" width="7" height="33" rx="2" fill="#6BAF92" />
      {/* Upward arrow */}
      <path d="M12 30 L42 10" stroke="#3F6F58" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3,2" />
      <path d="M38 8 L44 10 L40 15" stroke="#3F6F58" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </g>

    {/* Delivery / Shipping indicator (bottom-left) */}
    <g transform="translate(15, 130)">
      <rect x="0" y="0" width="55" height="40" rx="10" fill="white" stroke="#A8C3B0" strokeWidth="1.2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))" />
      {/* Truck icon */}
      <rect x="8" y="12" width="22" height="16" rx="3" fill="none" stroke="#6BAF92" strokeWidth="1.5" />
      <path d="M30 18 L38 18 L42 24 L42 28 L30 28 Z" fill="none" stroke="#6BAF92" strokeWidth="1.3" />
      <circle cx="17" cy="30" r="3.5" fill="none" stroke="#6BAF92" strokeWidth="1.3" />
      <circle cx="17" cy="30" r="1.2" fill="#6BAF92" />
      <circle cx="38" cy="30" r="3.5" fill="none" stroke="#6BAF92" strokeWidth="1.3" />
      <circle cx="38" cy="30" r="1.2" fill="#6BAF92" />
    </g>

    {/* Sparkle accents */}
    <circle cx="75" cy="20" r="2" fill="#6BAF92" opacity="0.4" />
    <circle cx="260" cy="85" r="1.8" fill="#EAD9C6" opacity="0.7" />
    <circle cx="50" cy="115" r="2" fill="#A8C3B0" opacity="0.5" />
  </svg>
);

/* ─── Solution Card Data ─── */
const solutions = [
  {
    title: "Brand Creation",
    subtext: "Turn your product into a real brand",
    features: ["Name", "Logo", "Packaging direction", "Brand identity"],
    Illustration: BrandIllustration,
    bgColor: "bg-light-pastel-green/30",
  },
  {
    title: "Digital Presence",
    subtext: "Build a professional online presence",
    features: ["Instagram setup", "Product photos", "Business profile", "Better presentation"],
    Illustration: DigitalIllustration,
    bgColor: "bg-soft-sage/15",
  },
  {
    title: "Online Selling",
    subtext: "Start selling beyond your local area",
    features: ["Meesho onboarding", "Amazon onboarding", "Marketplace readiness", "Digital selling support"],
    Illustration: SellingIllustration,
    bgColor: "bg-gold-beige/20",
  },
];

/* ─── Checkmark Icon ─── */
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
    <circle cx="9" cy="9" r="9" fill="#DCEFE4" />
    <path d="M5.5 9.5 L8 12 L12.5 6.5" stroke="#6BAF92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Main Solution Section Component ─── */
const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      
      {/* Fixed Background Illustration with controlled opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-25 pointer-events-none bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${WomenIllustration})`,
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Subtle decorative background blobs */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-light-pastel-green/20 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-gold-beige/15 rounded-full blur-3xl pointer-events-none z-0"></div>



      <div className="max-w-7xl w-[90%] mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 space-y-5">
         
          <h2 className="text-3xl md:text-4xl font-serif lg:text-5xl  text-muted-dark-green leading-tight">
            How <span className="font-brand text-2xl md:text-3xl lg:text-4xl text-muted-dark-green/85">Mint Bloom</span> helps <br className="hidden md:block" />
            your business grow
          </h2>
          <p className="text-muted-dark-green/55 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            From your first logo to your first online sale — we walk with you at every step.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-8 h-px bg-soft-sage/50"></div>
            <div className="w-2 h-2 rounded-full bg-mint-green/40"></div>
            <div className="w-8 h-px bg-soft-sage/50"></div>
          </div>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white rounded-[2.5rem] p-6 md:p-7 border border-gold-beige/15 shadow-sm hover:shadow-xl hover:shadow-mint-green/8 hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              {/* Illustration Area */}
              <div className={`${card.bgColor} rounded-[2rem] p-4 mb-8 aspect-[4/3] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500 ease-out overflow-hidden`}>
                <card.Illustration />
              </div>

              {/* Card Title & Subtitle */}
              <div className="px-2">
                <h3 className="text-xl md:text-2xl font-semibold text-muted-dark-green mb-2 group-hover:text-mint-green transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-muted-dark-green/60 text-base font-light italic mb-7">
                  {card.subtext}
                </p>

                {/* Feature List with Checkmarks */}
                <div className="pt-5 border-t border-soft-sage/20">
                  <ul className="space-y-3.5">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-dark-green/70 group-hover:text-muted-dark-green/90 transition-colors duration-300">
                        <CheckIcon />
                        <span className="text-[0.95rem] font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
