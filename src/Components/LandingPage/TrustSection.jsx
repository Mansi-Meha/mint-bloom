import React from 'react';

/* ─── Trust Icons ─── */

const LocationIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M20 4 C13 4 8 9.5 8 16 C8 24 20 36 20 36 C20 36 32 24 32 16 C32 9.5 27 4 20 4Z" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.8" />
    <circle cx="20" cy="16" r="5" fill="#FAFAFA" stroke="#6BAF92" strokeWidth="1.5" />
    <circle cx="20" cy="16" r="1.8" fill="#6BAF92" />
  </svg>
);

const WomenIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <circle cx="20" cy="11" r="6" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.8" />
    <path d="M8 34 C8 26 13 22 20 22 C27 22 32 26 32 34" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.8" strokeLinecap="round" />
    <g transform="translate(27, 5)">
      <circle cx="5" cy="5" r="5.5" fill="white" stroke="#A8C3B0" strokeWidth="1" />
      <path d="M5 8 C5 8 2.5 6 2.5 4.5 C2.5 3.5 3.5 3 5 4.2 C6.5 3 7.5 3.5 7.5 4.5 C7.5 6 5 8 5 8Z" fill="#6BAF92" />
    </g>
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <path d="M12 26 L14 36 L26 36 L28 26 Z" fill="#EAD9C6" stroke="#6BAF92" strokeWidth="1.5" />
    <rect x="10" y="24" width="20" height="4" rx="2" fill="#EAD9C6" stroke="#6BAF92" strokeWidth="1.5" />
    <path d="M20 24 L20 14" stroke="#6BAF92" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 18 Q14 14 14 8 Q20 10 20 18Z" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.2" />
    <path d="M20 14 Q26 10 28 5 Q22 6 20 14Z" fill="#A8C3B0" opacity="0.6" stroke="#6BAF92" strokeWidth="1" />
    <circle cx="20" cy="8" r="2" fill="#6BAF92" opacity="0.4" />
  </svg>
);

const BeginnerIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
    <rect x="4" y="28" width="10" height="8" rx="2" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    <rect x="15" y="20" width="10" height="16" rx="2" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    <rect x="26" y="12" width="10" height="24" rx="2" fill="#DCEFE4" stroke="#6BAF92" strokeWidth="1.5" />
    <line x1="31" y1="5" x2="31" y2="14" stroke="#6BAF92" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M31 5 L38 8 L31 11Z" fill="#6BAF92" opacity="0.7" />
    <circle cx="8" cy="24" r="1" fill="#A8C3B0" />
    <circle cx="20" cy="17" r="1" fill="#A8C3B0" />
  </svg>
);

/* ─── Trust Points Data ─── */
const trustPoints = [
  {
    Icon: LocationIcon,
    title: "Pilot launching in Patna",
    description: "Starting where it matters most — right in the heart of Bihar.",
  },
  {
    Icon: WomenIcon,
    title: "Focused on women-led businesses",
    description: "Every tool shaped around what women entrepreneurs actually need.",
  },
  {
    Icon: GrowthIcon,
    title: "Practical, affordable growth",
    description: "Simple, step-by-step support that fits your budget.",
  },
  {
    Icon: BeginnerIcon,
    title: "For first-time brand builders",
    description: "No experience needed — we walk you through everything.",
  },
];

/* ─── Main Component ─── */
const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-light-mint/25 relative overflow-hidden">

      {/* Subtle background blobs */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-soft-sage/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-gold-beige/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl w-[90%] mx-auto relative z-10">

        {/* ── Two-Part Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-mint-green font-serif text-sm tracking-widest uppercase">
                Why Trust Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-muted-dark-green leading-tight">
                Built for local women entrepreneurs, <span className="font-brand text-4xl md:text-5xl text-muted-dark-green/85">starting in Bihar</span>
              </h2>
            </div>

            <p className="text-muted-dark-green/60 text-base md:text-lg font-light leading-relaxed max-w-lg">
              We know how hard it is to grow a small business with limited resources, no guidance, and no one who truly understands your challenges. That's exactly why Mint Bloom exists.
            </p>

            {/* Key message points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-mint-green/60 shrink-0"></div>
                <p className="text-muted-dark-green/70 text-[0.95rem] leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Every business we work with gets <span className="font-medium text-muted-dark-green">personal, hands-on guidance</span> tailored to their products and goals.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-mint-green/60 shrink-0"></div>
                <p className="text-muted-dark-green/70 text-[0.95rem] leading-relaxed">
                  Our team understands the <span className="font-medium text-muted-dark-green">real challenges of running a small business in Bihar</span> — from limited access to design tools to navigating online marketplaces.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-mint-green/60 shrink-0"></div>
                <p className="text-muted-dark-green/70 text-[0.95rem] leading-relaxed">
                  We're not a big agency — we're a <span className="font-medium text-muted-dark-green">small, passionate team</span> building something meaningful alongside you.
                </p>
              </div>
            </div>

            {/* Subtle trust badge */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-5 py-2.5 border border-soft-sage/20">
                <div className="w-2 h-2 rounded-full bg-mint-green/60 animate-pulse"></div>
                <p className="text-muted-dark-green/50 text-sm font-light">
                  Building a support system, not just a service.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Trust Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center gap-4 bg-white/80 backdrop-blur-sm rounded-[2rem] p-7 md:p-8 border border-gold-beige/15 shadow-sm hover:shadow-lg hover:shadow-mint-green/6 hover:-translate-y-1.5 transition-all duration-500 ease-out"
              >
                {/* Icon container */}
                <div className="w-16 h-16 rounded-2xl bg-light-pastel-green/50 flex items-center justify-center group-hover:bg-mint-green/15 group-hover:scale-110 transition-all duration-400">
                  <point.Icon />
                </div>

                {/* Text */}
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-muted-dark-green group-hover:text-mint-green transition-colors duration-300 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-muted-dark-green/50 text-sm leading-relaxed font-light">
                    {point.description}
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

export default TrustSection;
