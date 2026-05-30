import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowUpRight, ShoppingBag, Eye, Heart, Share2, 
  Compass, Award, ExternalLink, ShieldCheck, ChevronRight, 
  Check, ArrowRight, BookOpen, Star, Feather, Gem, 
  Smile, Grid, Info, Send, X, Mail, Phone, MapPin, Users
} from 'lucide-react';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';

// Mock Data for Brands
const featuredBrands = [
  {
    id: 1,
    name: "Aura Clay",
    bio: "Handcrafted minimal ceramic tableware and earthy home accents.",
    category: "Handmade",
    banner: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    followers: "12.4k",
    redirectUrl: "https://www.etsy.com"
  },
  {
    id: 2,
    name: "Flora & Linen",
    bio: "Ethical, slow-fashion clothing made from pure premium organic linen.",
    category: "Fashion",
    banner: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    followers: "8.9k",
    redirectUrl: "https://www.shopify.com"
  },
  {
    id: 3,
    name: "Bloom Stationery",
    bio: "Botanical planners, linen journals, and organic watercolor art prints.",
    category: "Stationery",
    banner: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    followers: "15.2k",
    redirectUrl: "https://www.amazon.com"
  },
  {
    id: 4,
    name: "Sol Jewelry",
    bio: "Demi-fine jewelry inspired by organic textures and morning light.",
    category: "Jewelry",
    banner: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    followers: "6.7k",
    redirectUrl: "https://wa.me/919876543210"
  }
];

// Mock Data for Products
const featuredProducts = [
  {
    id: 101,
    name: "Minimalist Ceramic Mug",
    brand: "Aura Clay",
    price: "₹1,250",
    platform: "Etsy",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-[#F37121]/10 text-[#F37121] border-[#F37121]/20",
    url: "https://www.etsy.com"
  },
  {
    id: 102,
    name: "Oversized Linen Shirt",
    brand: "Flora & Linen",
    price: "₹3,400",
    platform: "Shopify",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-[#96BF48]/10 text-[#5E8E3E] border-[#96BF48]/20",
    url: "https://www.shopify.com"
  },
  {
    id: 103,
    name: "Daily Gratitude Planner",
    brand: "Bloom Stationery",
    price: "₹899",
    platform: "Amazon",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20",
    url: "https://www.amazon.com"
  },
  {
    id: 104,
    name: "Sunbeam Drop Earrings",
    brand: "Sol Jewelry",
    price: "₹1,850",
    platform: "WhatsApp",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20",
    url: "https://wa.me/919876543210"
  },
  {
    id: 105,
    name: "Wabi-Sabi Tea Bowl",
    brand: "Aura Clay",
    price: "₹1,600",
    platform: "Meesho",
    image: "https://images.unsplash.com/photo-1576016770956-debb63d900ee?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-[#AD267F]/10 text-[#AD267F] border-[#AD267F]/20",
    url: "https://www.meesho.com"
  },
  {
    id: 106,
    name: "Pressed Botanical Bookmark",
    brand: "Bloom Stationery",
    price: "₹249",
    platform: "Etsy",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    badgeColor: "bg-[#F37121]/10 text-[#F37121] border-[#F37121]/20",
    url: "https://www.etsy.com"
  }
];

// Categories with Colors & Custom SVGs
const categories = [
  { 
    name: "Fashion", 
    color: "bg-[#FDF6F6] hover:bg-[#FBEBEB] text-[#8C6262] border-[#F3D7D7]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 5a2 2 0 1 1 4 0c0 1.15-.83 2.16-1.95 2.28L12 7.37L2.47 18.28a1.5 1.5 0 0 0 .34 2.38l.41.2a1.5 1.5 0 0 0 1.83-.41L12 11.83l6.95 8.62a1.5 1.5 0 0 0 1.83.41l.41-.2a1.5 1.5 0 0 0 .34-2.38L12 7.37" />
      </svg>
    )
  },
  { 
    name: "Handmade", 
    color: "bg-[#F7F9F6] hover:bg-[#EFF3EE] text-[#556F4E] border-[#D6E2D3]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
        <path d="M7.5 10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
        <path d="M16.5 10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
      </svg>
    )
  },
  { 
    name: "Home Decor", 
    color: "bg-[#FBF8F3] hover:bg-[#F7F1E6] text-[#7C664C] border-[#EADECB]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  { 
    name: "Stationery", 
    color: "bg-[#F5F8FA] hover:bg-[#EBF1F5] text-[#4A6475] border-[#D0DFE8]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  },
  { 
    name: "Art", 
    color: "bg-[#FAF5FB] hover:bg-[#F2E7F5] text-[#6E4E7C] border-[#ECD5F2]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8.5 14a2.5 2.5 0 0 0 5 0c0-1.38-1.12-2.5-2.5-2.5S8.5 12.62 8.5 14z" />
        <path d="M12 2v10" />
      </svg>
    )
  },
  { 
    name: "Jewelry", 
    color: "bg-[#FDF9F3] hover:bg-[#FAF1E3] text-[#7C6339] border-[#EAD5BA]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    )
  },
  { 
    name: "Self Care", 
    color: "bg-[#F4FAF8] hover:bg-[#E7F5F1] text-[#3D7063] border-[#CEEDE5]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
        <path d="M12 6v6l3 3" />
      </svg>
    )
  },
  { 
    name: "Accessories", 
    color: "bg-[#F9FAF4] hover:bg-[#F2F5E7] text-[#636C3D] border-[#E4EABA]",
    icon: (cls) => (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  }
];

const DiscoverPage = () => {
  const [followedBrands, setFollowedBrands] = useState([]);
  const [redirectingProduct, setRedirectingProduct] = useState(null);
  const [redirectProgress, setRedirectProgress] = useState(0);
  const [learningBrand, setLearningBrand] = useState(null);
  const [allBrands, setAllBrands] = useState(featuredBrands);
  const [allProducts, setAllProducts] = useState(featuredProducts);

  const location = useLocation();

  useEffect(() => {
    // 1. Load custom profile data if exists
    const profileSaved = localStorage.getItem('mb_profile_data');
    let customBrand = null;
    let updatedBrands = [...featuredBrands];

    if (profileSaved) {
      try {
        const profile = JSON.parse(profileSaved);
        if (profile.businessName) {
          customBrand = {
            id: 'custom-brand',
            name: profile.businessName,
            bio: profile.tagline || 'No bio provided.',
            category: profile.category || 'Handmade',
            banner: localStorage.getItem('mb_profile_banner') || "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800",
            avatar: localStorage.getItem('mb_profile_avatar') || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
            followers: "0",
            redirectUrl: profile.shopWebsite || profile.shopify || "https://shopify.com"
          };
          
          // Replace mock brand if same name, else add it
          const idx = updatedBrands.findIndex(b => b.name.toLowerCase() === customBrand.name.toLowerCase());
          if (idx !== -1) {
            updatedBrands[idx] = { ...updatedBrands[idx], ...customBrand, id: updatedBrands[idx].id };
          } else {
            updatedBrands.push(customBrand);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }

    setAllBrands(updatedBrands);

    // 2. Load custom products if they exist
    const productsSaved = localStorage.getItem('mb_brand_catalogue');
    let updatedProducts = [...featuredProducts];

    if (productsSaved) {
      try {
        const products = JSON.parse(productsSaved);
        if (Array.isArray(products)) {
          const currentBrandName = customBrand ? customBrand.name : "Flora & Linen";
          
          // Filter out mock products of the same brand name to avoid duplication
          updatedProducts = updatedProducts.filter(p => p.brand.toLowerCase() !== currentBrandName.toLowerCase());

          // Map local products to discover products
          const mappedLocalProducts = products.map(p => ({
            id: `local-${p.id}`,
            name: p.name,
            brand: currentBrandName,
            price: p.price,
            platform: p.buyLinks && p.buyLinks.length > 0 ? p.buyLinks[0].platform : 'Storefront',
            image: p.images && p.images.length > 0 ? p.images[0] : 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400',
            badgeColor: 'bg-mint-green/10 text-mint-green border-mint-green/20',
            url: p.buyLinks && p.buyLinks.length > 0 ? p.buyLinks[0].url : 'https://shopify.com'
          }));

          updatedProducts = [...mappedLocalProducts, ...updatedProducts];
        }
      } catch (e) {
        console.error(e);
      }
    }
    setAllProducts(updatedProducts);

    // 3. Auto-open modal based on query parameter
    const params = new URLSearchParams(location.search);
    const brandParam = params.get('brand');
    if (brandParam) {
      const found = updatedBrands.find(
        b => b.name.toLowerCase() === brandParam.toLowerCase() || b.id.toString() === brandParam
      );
      if (found) {
        setLearningBrand(found);
      }
    }
  }, [location.search]);

  // Toggle follow status
  const toggleFollow = (brandId) => {
    if (followedBrands.includes(brandId)) {
      setFollowedBrands(followedBrands.filter(id => id !== brandId));
    } else {
      setFollowedBrands([...followedBrands, brandId]);
    }
  };

  // Mock Redirect Action
  const handleRedirect = (product) => {
    setRedirectingProduct(product);
    setRedirectProgress(0);
  };

  // Animate loader bar in redirect modal
  useEffect(() => {
    let interval;
    if (redirectingProduct) {
      interval = setInterval(() => {
        setRedirectProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              // Open mock external page
              window.open(redirectingProduct.url, '_blank');
              setRedirectingProduct(null);
            }, 600);
            return 100;
          }
          return prev + 5;
        });
      }, 80);
    }
    return () => clearInterval(interval);
  }, [redirectingProduct]);

  return (
    <div className="min-h-screen flex flex-col bg-warm-white font-primary relative overflow-x-hidden select-none selection:bg-mint-green/20">
      
      {/* Navigation */}
      <NavBar />

      {/* Floating dreamy blurred background shapes */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-light-mint/50 rounded-full blur-3xl opacity-60 -z-10 animate-pulse duration-10000"></div>
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#EAD9C6]/20 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] bg-light-pastel-green/40 rounded-full blur-3xl opacity-60 -z-10"></div>

      <main className="flex-1 pt-24">

        {/* ── 1. HERO SECTION ── */}
        <section className="relative w-full max-w-7xl mx-auto px-6 py-16 md:py-28 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-green/10 text-muted-dark-green text-[11px] font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 text-mint-green animate-pulse" />
              Creator & Business Discovery
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6.5xl font-serif text-muted-dark-green leading-tight tracking-tight"
            >
              Discover Beautiful Brands & <br />
              <span className="font-brand text-mint-green text-5xl sm:text-6.5xl md:text-8.5xl inline-block -rotate-1 tracking-normal py-2">Curated Storefronts</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-muted-dark-green/70 text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Explore aesthetic businesses, handmade products, creator storefronts and curated collections. Connect directly to their shops.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a 
                href="#trending-brands" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-mint-green text-white font-semibold text-base shadow-xl shadow-mint-green/20 hover:bg-muted-dark-green hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Brands
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link 
                to="/join-pilot" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/80 border border-soft-sage/30 text-muted-dark-green font-semibold text-base backdrop-blur-md hover:bg-gold-beige/10 hover:border-mint-green hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
              >
                Create Your Showcase
              </Link>
            </motion.div>
          </div>

          {/* Floating Aesthetic Graphic Elements (Pinterest Style mockup cards) */}
          <div className="hidden xl:block absolute -left-12 top-1/4 w-72 p-4 bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl shadow-xl rotate-[-6deg] animate-float">
            <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300" alt="mock" className="w-full h-40 object-cover rounded-xl" />
            <div className="mt-3 text-left">
              <span className="text-[10px] uppercase font-bold text-mint-green tracking-widest bg-mint-green/10 px-2.5 py-0.5 rounded-full">Stationery</span>
              <p className="font-semibold text-muted-dark-green text-sm mt-1.5">Bloom Stationery</p>
              <p className="text-[11px] text-muted-dark-green/50">Curated Journals</p>
            </div>
          </div>

          <div className="hidden xl:block absolute -right-12 top-1/3 w-64 p-4 bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl shadow-xl rotate-[8deg] animate-float duration-7000">
            <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=300" alt="mock" className="w-full h-36 object-cover rounded-xl" />
            <div className="mt-3 text-left">
              <span className="text-[10px] uppercase font-bold text-[#7C664C] tracking-widest bg-[#FBF8F3] px-2.5 py-0.5 rounded-full">Ceramics</span>
              <p className="font-semibold text-muted-dark-green text-sm mt-1.5">Aura Clay Studio</p>
              <p className="text-[11px] text-muted-dark-green/50">Hand-thrown Tableware</p>
            </div>
          </div>
        </section>


        {/* ── 2. TRENDING BRANDS SECTION ── */}
        <section id="trending-brands" className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-soft-sage/10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-mint-green tracking-[0.2em]">All Brands</span>
              <h2 className="text-3xl md:text-4xl font-serif text-muted-dark-green">Our Curated Storefronts</h2>
            </div>
            <p className="text-muted-dark-green/60 text-sm max-w-xs mt-4 md:mt-0">
              Curated businesses launching their latest designs online. Tap a brand to view their public storefront.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allBrands.map((brand) => {
              const isFollowing = followedBrands.includes(brand.id);
              return (
                <div 
                  key={brand.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-soft-sage/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Banner image wrapper */}
                  <div className="relative h-32 overflow-hidden bg-light-mint">
                    <img 
                      src={brand.banner} 
                      alt={brand.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-muted-dark-green bg-white/90 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {brand.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 pt-0 flex-1 flex flex-col items-center text-center relative">
                    {/* Avatar (overlapping banner) */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white bg-warm-white -mt-8 shadow-md relative z-10 shrink-0">
                      <img src={brand.avatar} alt={brand.name} className="w-full h-full object-cover" />
                    </div>

                    <h3 className="font-semibold text-lg text-muted-dark-green mt-3 group-hover:text-mint-green transition-colors">
                      {brand.name}
                    </h3>
                    <span className="text-[11px] text-muted-dark-green/40 font-medium">@{brand.name.toLowerCase().replace(/\s+/g, '')}</span>

                    <p className="text-xs text-muted-dark-green/65 mt-3 line-clamp-2 leading-relaxed font-light px-2 flex-1">
                      {brand.bio}
                    </p>

                    <div className="w-full border-t border-soft-sage/10 my-4"></div>

                    <button
                      onClick={() => setLearningBrand(brand)}
                      className="w-full py-2.5 mt-auto rounded-xl border border-soft-sage/40 text-muted-dark-green text-sm font-semibold hover:bg-mint-green hover:border-mint-green hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                     
                      Learn 
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* ── 3. TRENDING PRODUCTS SECTION ── */}
        <section className="w-full bg-light-mint/30 border-y border-soft-sage/10 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-mint-green tracking-[0.2em]">Curated Pieces</span>
                <h2 className="text-3xl md:text-4xl font-serif text-muted-dark-green">Trending Products</h2>
              </div>
              <p className="text-muted-dark-green/60 text-sm max-w-xs mt-4 md:mt-0">
                Direct links to purchase from creator-selected storefronts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-soft-sage/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-warm-white">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Platform Badge Overlay */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm backdrop-blur-md ${product.badgeColor}`}>
                        {product.platform}
                      </span>
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <div>
                      <p className="text-[11px] font-bold text-mint-green/80 uppercase tracking-widest">@{product.brand.toLowerCase().replace(/\s+/g, '')}</p>
                      <h3 className="font-semibold text-lg text-muted-dark-green group-hover:text-mint-green transition-colors mt-1 line-clamp-1">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-soft-sage/10 mt-auto">
                      <span className="text-lg font-bold text-muted-dark-green">{product.price}</span>
                      <button
                        onClick={() => handleRedirect(product)}
                        className="px-5 py-2.5 rounded-full bg-muted-dark-green/5 text-muted-dark-green hover:bg-mint-green hover:text-white font-semibold text-xs transition-all duration-300 flex items-center gap-1.5"
                      >
                        View Product
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── 4. CATEGORIES SECTION ── */}
        <section id="categories" className="w-full max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
          <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-bold text-mint-green tracking-[0.2em]">Explore by Theme</span>
            <h2 className="text-3xl md:text-4xl font-serif text-muted-dark-green">Browse Storefront Categories</h2>
            <p className="text-muted-dark-green/60 text-sm">
              Discover unique creators specializing in aesthetic craft, organic clothing, and slow lifestyle items.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <a 
                href="#trending-brands" 
                key={cat.name}
                className={`flex flex-col items-center justify-center p-8 rounded-3xl border transition-all duration-300 text-center group cursor-pointer ${cat.color}`}
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {cat.icon("w-6 h-6")}
                </div>
                <h3 className="font-semibold text-sm mt-4 tracking-wide">{cat.name}</h3>
                <span className="text-[10px] opacity-50 mt-1 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  View Brands <ChevronRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </section>


       
                 


        {/* ── 6. PUBLIC STOREFRONT PREVIEW ── */}
        <section className="w-full bg-[#EAD9C6]/10 border-y border-[#EAD9C6]/20 py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold text-mint-green tracking-[0.2em]">Live Preview Mockup</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-muted-dark-green leading-tight">
                Your Brand, Exactly the Way You Envisioned It
              </h2>
              <p className="text-muted-dark-green/70 text-sm sm:text-base leading-relaxed font-light">
                Mint Bloom gives creators a gorgeous, minimalist public storefront. No complex e-commerce integrations or catalog forms. Just display your best work, tell your story, and point customers directly to where they can buy.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Personalized cover banner & avatar",
                  "Direct links to Amazon, Etsy, Meesho or Shopify",
                  "One-click WhatsApp order options",
                  "Beautiful, clean layout optimized for mobile screens"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-dark-green/80 font-medium">
                    <div className="w-5 h-5 rounded-full bg-mint-green/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-mint-green" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Interactive Phone Screen Mockup */}
            <div className="lg:col-span-7 flex justify-center relative">
              
              {/* Decorative behind glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] bg-mint-green/10 rounded-full blur-3xl -z-10"></div>

              {/* Phone Frame */}
              <div className="w-[340px] h-[640px] bg-[#1E293B] rounded-[48px] p-3 shadow-2xl border-4 border-muted-dark-green/20 relative shrink-0">
                {/* Speaker pill */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                </div>

                {/* Inner Screen */}
                <div className="w-full h-full bg-warm-white rounded-[38px] overflow-hidden relative flex flex-col font-primary select-none border border-gray-150">
                  
                  {/* Public Storefront Banner */}
                  <div className="h-28 w-full bg-light-pastel-green relative">
                    <img 
                      src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400" 
                      alt="Banner Mock" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  {/* Public Profile Section */}
                  <div className="px-5 pt-0 pb-3 flex flex-col items-center text-center relative -mt-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-white shadow-md">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Avatar Mock" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold text-sm text-muted-dark-green mt-2">Sol Jewelry</h3>
                    <p className="text-[10px] text-muted-dark-green/50">Handmade organic earrings & chains.</p>
                    <p className="text-[11px] text-muted-dark-green/70 mt-2 px-4 leading-normal font-light">
                      Inspired by morning light. Shipping across India 🇮🇳
                    </p>

                    {/* Social Mock Icons */}
                    <div className="flex gap-2.5 mt-3">
                      {['instagram', 'whatsapp', 'website'].map(social => (
                        <span key={social} className="w-6.5 h-6.5 rounded-full bg-white border border-soft-sage/20 flex items-center justify-center text-muted-dark-green text-[10px]">
                          {social[0].toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Products Showcase */}
                  <div className="flex-1 px-5 overflow-y-auto pb-4 scrollbar-none space-y-3">
                    <p className="text-[10px] font-bold text-muted-dark-green/40 uppercase tracking-widest text-left">Collections</p>
                    
                    {/* Mock product rows */}
                    {[
                      { name: "Sunbeam Drop Earrings", price: "₹1,850", platform: "WhatsApp" },
                      { name: "Organic Hoop Gold", price: "₹2,200", platform: "Etsy" }
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-white rounded-2xl border border-soft-sage/10 flex items-center gap-3 shadow-sm">
                        <div className="w-11 h-11 bg-light-mint rounded-lg overflow-hidden shrink-0">
                          <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=150" alt="prod" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <p className="text-xs font-semibold text-muted-dark-green truncate">{item.name}</p>
                          <p className="text-[10px] text-muted-dark-green/50">{item.price}</p>
                        </div>
                        <span className="text-[9px] font-bold text-mint-green bg-mint-green/10 border border-mint-green/20 px-2 py-0.5 rounded-full shrink-0">
                          {item.platform}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="p-4 bg-white border-t border-soft-sage/10 text-center">
                    <span className="text-[9px] font-bold text-muted-dark-green/40 tracking-[0.2em] uppercase">Powered by Mint Bloom</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ── 7. WHY MINT BLOOM ── */}
        <section className="w-full max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase font-bold text-mint-green tracking-[0.2em]">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-serif text-muted-dark-green">Why Choose Mint Bloom?</h2>
            <p className="text-muted-dark-green/60 text-sm">
              We build tools for independent creators to help their business blossom without platform transaction fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Showcase Your Brand",
                desc: "Ditch boring links. Display products in a high-density, gorgeous gallery layout reflecting your brand's unique character.",
                icon: <Compass className="w-6 h-6 text-mint-green" />
              },
              {
                title: "Redirect Customers Anywhere",
                desc: "Amazon, Etsy, Shopify, Instagram or WhatsApp. Keep your existing selling flow; we just make finding you easier.",
                icon: <ExternalLink className="w-6 h-6 text-mint-green" />
              },
              {
                title: "Build Your Public Storefront",
                desc: "Establish a permanent search-friendly home link on the internet for your bio and social accounts in minutes.",
                icon: <Grid className="w-6 h-6 text-mint-green" />
              },
              {
                title: "Grow Your Audience",
                desc: "Get featured on our Discover portal, participate in local pilot listings, and unlock community analytics tools.",
                icon: <Sparkles className="w-6 h-6 text-mint-green" />
              }
            ].map((pillar, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-white border border-soft-sage/15 shadow-sm hover:shadow-lg transition-all duration-300 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-light-mint flex items-center justify-center mx-auto">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-base text-muted-dark-green">{pillar.title}</h3>
                <p className="text-xs text-muted-dark-green/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>



      </main>

      {/* ── REDIRECTING MODAL / DIALOG ── */}
      <AnimatePresence>
        {redirectingProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#3F6F58]/20 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[32px] border border-soft-sage/20 shadow-2xl p-8 max-w-md w-full text-center space-y-6 relative overflow-hidden"
            >
              {/* Product mini avatar */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto shadow border border-soft-sage/10">
                <img src={redirectingProduct.image} alt={redirectingProduct.name} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold text-mint-green uppercase tracking-widest">Redirecting</span>
                <h3 className="font-semibold text-lg text-muted-dark-green">
                  Connecting to {redirectingProduct.platform}
                </h3>
                <p className="text-xs text-muted-dark-green/60 max-w-xs mx-auto leading-relaxed">
                  We are taking you to {redirectingProduct.brand}'s official storefront on {redirectingProduct.platform} to complete your order.
                </p>
              </div>

              {/* Loader animation bar */}
              <div className="w-full h-1.5 bg-light-mint rounded-full overflow-hidden relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-mint-green rounded-full transition-all duration-75"
                  style={{ width: `${redirectProgress}%` }}
                ></div>
              </div>

              {/* Extra helper buttons */}
              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => setRedirectingProduct(null)}
                  className="flex-1 py-3.5 rounded-xl border border-soft-sage/30 text-muted-dark-green font-semibold text-xs hover:bg-gold-beige/10 transition-colors"
                >
                  Cancel
                </button>
                <a 
                  href={redirectingProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-xl bg-mint-green text-white font-semibold text-xs hover:bg-muted-dark-green transition-colors flex items-center justify-center gap-1 shadow-md shadow-mint-green/20"
                >
                  Go Directly
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Security Badge */}
              <div className="text-[10px] text-muted-dark-green/45 flex items-center justify-center gap-1 bg-light-mint/30 py-2 rounded-xl">
                <ShieldCheck className="w-3.5 h-3.5 text-mint-green" />
                Secure connection verify complete
              </div>
            </motion.div>
          </motion.div>
        )}
        {/* Learn Brand Modal */}
        {learningBrand && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-muted-dark-green/20 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setLearningBrand(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white w-full h-full flex flex-col relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Banner */}
              <div className="relative h-64 bg-light-mint">
                <img src={learningBrand.banner} alt={learningBrand.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
                <button
                  onClick={() => setLearningBrand(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md hover:bg-white hover:text-muted-dark-green text-white rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto relative z-10 -mt-14">
                <div className="max-w-6xl mx-auto px-8 md:px-16 py-8">
                {/* Brand Info Section */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-md shrink-0 bg-white">
                    <img src={learningBrand.avatar} alt={learningBrand.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 pt-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-muted-dark-green">{learningBrand.name}</h2>
                    <span className="inline-block mt-1 text-xs font-bold uppercase tracking-wider text-mint-green bg-light-mint px-3 py-1 rounded-full">
                      {learningBrand.category}
                    </span>
                    <p className="mt-3 text-muted-dark-green/70 text-sm md:text-base leading-relaxed max-w-2xl">
                      {learningBrand.bio}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {/* Left Column: Contact & Details */}
                  <div className="md:col-span-1 space-y-6">
                    <div className="bg-warm-white p-5 rounded-2xl border border-soft-sage/30 space-y-4">
                      <h3 className="text-sm font-semibold text-muted-dark-green uppercase tracking-wider">Contact & Info</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-muted-dark-green/70">
                          <Mail className="w-4 h-4 text-mint-green" />
                          <a href={`mailto:hello@${learningBrand.name.toLowerCase().replace(/\s+/g, '')}.com`} className="hover:text-mint-green transition-colors">
                            hello@{learningBrand.name.toLowerCase().replace(/\s+/g, '')}.com
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-dark-green/70">
                          <Phone className="w-4 h-4 text-mint-green" />
                          <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-dark-green/70">
                          <MapPin className="w-4 h-4 text-mint-green" />
                          <span>Mumbai, India</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-dark-green/70 pt-2 border-t border-soft-sage/20">
                          <Users className="w-4 h-4 text-mint-green" />
                          <span>{learningBrand.followers} followers</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Brand Catalogue */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-serif text-muted-dark-green mb-4 border-b border-soft-sage/20 pb-2">
                      Brand Catalogue
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {allProducts.filter(p => p.brand === learningBrand.name).length > 0 ? (
                        allProducts.filter(p => p.brand === learningBrand.name).map(product => (
                          <div key={product.id} className="group bg-white rounded-xl border border-soft-sage/20 shadow-sm overflow-hidden flex items-center gap-3 p-3 hover:shadow-md hover:border-mint-green/30 transition-all">
                            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-light-mint">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-muted-dark-green truncate group-hover:text-mint-green transition-colors">{product.name}</h4>
                              <p className="text-xs text-muted-dark-green/60 mt-0.5 font-medium">{product.price}</p>
                              {product.description && (
                                <p className="text-xs text-muted-dark-green/50 mt-1.5 line-clamp-2 leading-relaxed">
                                  {product.description}
                                </p>
                              )}
                            </div>
                            <button 
                              onClick={() => { setLearningBrand(null); handleRedirect(product); }}
                              className="p-2 rounded-full bg-light-mint text-mint-green hover:bg-mint-green hover:text-white transition-colors shrink-0"
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-2 py-8 text-center text-sm text-muted-dark-green/50 bg-warm-white rounded-xl border border-soft-sage/20 border-dashed">
                          No featured products currently listed in our curated section.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Custom Styles for Floating animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes floatSec {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-12px) rotate(9deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float.duration-7000 {
          animation: floatSec 7s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default DiscoverPage;
