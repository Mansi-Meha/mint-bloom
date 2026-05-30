import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MintBloomLogo from '../../assets/LandingPageImg/MintBloomLogo.png';
import watercolourBg from '../../assets/LandingPageImg/watercolour-bg.png';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    const handleAdminLogin = (e) => {
        e.preventDefault();
        navigate('/admin');
    };

    return (
        <div className="flex h-screen w-full bg-warm-white overflow-hidden font-primary relative">
            {/* BACK BUTTON (TOP LEFT) */}
            <div className="absolute top-6 left-6 z-50">
                <Link 
                    to="/" 
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/90 shadow-lg border border-soft-sage/20 text-muted-dark-green font-medium hover:text-white hover:bg-mint-green transition-all group active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>
            </div>

            {/* LEFT SIDE: Visual Section */}
            <div className="hidden lg:flex w-1/2 relative flex-col justify-center px-16 xl:px-24 overflow-hidden">
                {/* Background Watercolor Layer */}
                <div 
                    className="absolute inset-0 z-0 opacity-40 mix-blend-multiply transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${watercolourBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Botanical Decorative Elements (SVG) */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60">
                    <svg className="absolute -top-20 -left-20 w-96 h-96 text-soft-sage animate-pulse" viewBox="0 0 200 200" fill="currentColor">
                        <path d="M40,100 Q40,40 100,40 Q160,40 160,100 Q160,160 100,160 Q40,160 40,100" />
                    </svg>
                    <svg className="absolute -bottom-32 -right-32 w-[500px] h-[500px] text-mint-green/20 rotate-12" viewBox="0 0 200 200" fill="currentColor">
                        <path d="M40,100 Q40,40 100,40 Q160,40 160,100 Q160,160 100,160 Q40,160 40,100" />
                    </svg>
                    {/* Abstract Leaf Shapes */}
                    <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-gold-beige/40 blur-sm"></div>
                    <div className="absolute bottom-1/3 right-20 w-8 h-8 rounded-full bg-light-pastel-green/30 blur-md"></div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col gap-8 animate-in fade-in slide-in-from-left-12 duration-1000">
                    <div className="space-y-4">
                        <h1 className="text-5xl xl:text-7xl text-muted-dark-green font-serif leading-tight">
                            Small Steps. <br />
                            <span className="italic text-mint-green">Big Possibilities.</span>
                        </h1>
                        <p className="text-xl xl:text-2xl text-muted-dark-green/70 font-light tracking-wide">
                            We help you build • brand • grow
                        </p>
                    </div>

                    {/* Floating Soft UI Bubbles */}
                    <div className="flex flex-wrap gap-4 pt-10">
                        {['Build your brand', 'Sell online', 'Grow your business'].map((text, i) => (
                            <div 
                                key={i} 
                                className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-sm font-medium text-muted-dark-green/80 flex items-center gap-2 animate-bounce"
                                style={{ animationDelay: `${i * 200}ms`, animationDuration: '3s' }}
                            >
                                <span className="w-2 h-2 rounded-full bg-mint-green"></span>
                                {text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Extreme Bottom Text hint */}
                <div className="absolute bottom-12 left-16 xl:left-24 text-muted-dark-green/40 text-sm font-light uppercase tracking-widest">
                    Mint Bloom © 2026
                </div>
            </div>

            {/* RIGHT SIDE: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24 bg-warm-white relative">
                {/* Decorative Subtle Gradient for Right Side on Mobile */}
                <div className="lg:hidden absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-light-pastel-green/20 to-transparent pointer-events-none"></div>

                <div className="w-full max-w-[420px] flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {/* Logo & Heading */}
                    <div className="flex flex-col items-center lg:items-start gap-6">
                        <Link to="/" className="group">
                            <img 
                                src={MintBloomLogo} 
                                alt="Mint Bloom" 
                                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" 
                            />
                        </Link>
                        <div className="text-center lg:text-left space-y-2">
                            <h2 className="text-3xl font-serif text-muted-dark-green">Login</h2>
                            <p className="text-muted-dark-green/60 font-light">Welcome back to your growth space.</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-6" onSubmit={handleLogin}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-dark-green/80 ml-1">Email address</label>
                                <input 
                                    type="email" 
                                    placeholder="hello@entrepreneur.com"
                                    className="w-full px-5 py-4 rounded-xl bg-white border border-soft-sage/20 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all duration-300 shadow-sm placeholder:text-muted-dark-green/30"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-dark-green/80 ml-1">Password</label>
                                <input 
                                    type="password" 
                                    placeholder="••••••••"
                                    className="w-full px-5 py-4 rounded-xl bg-white border border-soft-sage/20 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all duration-300 shadow-sm placeholder:text-muted-dark-green/30"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-1">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative">
                                    <input type="checkbox" className="peer sr-only" />
                                    <div className="w-5 h-5 rounded-md border-2 border-soft-sage/30 bg-white peer-checked:bg-mint-green peer-checked:border-mint-green transition-all duration-200 shadow-sm"></div>
                                    <svg className="absolute top-1 left-1 w-3 h-3 text-white hidden peer-checked:block pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                        <path d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-muted-dark-green/60 group-hover:text-muted-dark-green/90 transition-colors">Remember me</span>
                            </label>
                            <Link to="#" className="text-sm font-medium text-mint-green hover:text-muted-dark-green transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <button 
                                type="submit"
                                className="w-full py-4 rounded-xl bg-mint-green text-white font-semibold text-base shadow-lg shadow-mint-green/20 hover:bg-muted-dark-green hover:shadow-xl hover:shadow-muted-dark-green/15 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
                            >
                                Log In
                            </button>
                            <button 
                                type="button"
                                onClick={handleAdminLogin}
                                className="w-full py-4 rounded-xl bg-white border border-soft-sage text-muted-dark-green font-semibold text-base shadow-sm hover:border-mint-green hover:bg-light-mint/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
                            >
                                Admin Log In
                            </button>
                        </div>
                    </form>

                    {/* Footer Links */}
                    <div className="text-center pt-2">
                        <p className="text-muted-dark-green/60">
                            Don’t have an account? {' '}
                            <Link to="#" className="text-mint-green font-bold hover:underline underline-offset-4">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Simple Botanical hint on right side for desktop */}
                <div className="hidden lg:block absolute bottom-10 right-10 opacity-20 pointer-events-none">
                    <svg className="w-24 h-24 text-soft-sage" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M20,80 Q20,30 50,20 Q80,30 80,80 Q50,90 20,80" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
