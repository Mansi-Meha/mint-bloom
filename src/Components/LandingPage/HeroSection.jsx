import React from 'react';
import heroIllustration from '../../assets/hero-illustration.png';
import watercolourBg from '../../assets/watercolour-bg.png';

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center bg-warm-white overflow-hidden pt-18 lg:pt-22">


            {/* Watercolor Background Texture */}
            <div
                className="absolute inset-0 z-0 opacity-80 pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: `url(${watercolourBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(2px)'
                }}
            ></div>

            <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 py-10 lg:py-18">

                {/* Left: Illustration */}
                <div className="relative order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
                    <div className="relative z-10 w-full max-w-[620px] mx-auto group">
                        {/* Soft Glow */}
                        <div className="absolute -inset-10 bg-light-pastel-green/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>

                        {/* Image Container (Soft Themed Background + Rounded Corners) */}
                        <div className="relative z-10 bg-light-pastel-green/10 rounded-[4rem] p-4 transition-transform duration-700 ease-out hover:scale-[1.03] shadow-inner shadow-mint-green/5">
                            <img
                                src={heroIllustration}
                                alt="Mint Bloom Team Empowerment"
                                className="w-full h-auto rounded-full object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>

                    {/* Decorative Floating Blobs */}
                    <div className="absolute -top-12 -left-12 w-40 h-40 bg-gold-beige/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-mint-green/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                {/* Right: Content */}
                <div className="order-1 lg:order-2 flex flex-col items-start gap-10 animate-in fade-in slide-in-from-right-8 duration-1000 ease-out">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-muted-dark-green leading-[1.1] tracking-tight">
                            From <span className="text-mint-green italic serif">Local Product</span> <br className="hidden md:block" />
                            to <span className="font-brand text-3xl md:text-4xl lg:text-5xl block mt-2 text-muted-dark-green/90">Recognized Brand</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-dark-green/75 max-w-[580px] leading-relaxed font-light">
                            Helping women entrepreneurs build branding, packaging, digital presence, and online sales.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-10 py-4 rounded-full text-lg font-semibold text-white bg-mint-green shadow-xl shadow-mint-green/30 hover:bg-muted-dark-green hover:shadow-2xl hover:shadow-muted-dark-green/20 hover:-translate-y-1 transition-all duration-300 active:scale-95">
                            Join Early Pilot
                        </button>
                        <button className="flex-1 sm:flex-none px-10 py-4 rounded-full text-lg font-semibold text-muted-dark-green border-2 border-soft-sage/30 hover:bg-gold-beige/20 hover:border-mint-green hover:text-mint-green transition-all duration-300 active:scale-95">
                            See How It Works
                        </button>
                    </div>

                    {/* Social Proof / Trust Line */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8 border-t border-muted-dark-green/10 w-full lg:w-3/4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-warm-white shadow-sm overflow-hidden bg-soft-sage/20 flex items-center justify-center`}>
                                    <div className="w-full h-full bg-gradient-to-tr from-mint-green/20 to-gold-beige/20"></div>
                                </div>
                            ))}
                        </div>
                        <div className="text-sm md:text-base text-muted-dark-green/70">
                            Launching first with <span className="text-muted-dark-green font-bold bg-light-pastel-green/50 px-2 py-0.5 rounded-lg">women-led businesses in Bihar</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extreme Bottom Decorative Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-warm-white to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;
