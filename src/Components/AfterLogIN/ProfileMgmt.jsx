import React, { useState, useRef, useEffect } from 'react';
import {
  AtSign, Globe, Link2, Play, Briefcase, Image,
  Mail, Phone, MessageCircle, MapPin, Camera, Upload,
  Pencil, Trash2, Save, Eye, X, ShoppingBag, ExternalLink
} from 'lucide-react';

/* ─── tiny helpers ───────────────────────────────────────── */
const inputCls =
  'w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-soft-sage/30 ' +
  'focus:border-mint-green focus:ring-4 focus:ring-mint-green/10 outline-none transition-all ' +
  'text-sm text-muted-dark-green placeholder:text-muted-dark-green/30 shadow-sm';

const labelCls = 'block text-[11px] font-bold text-muted-dark-green/60 uppercase tracking-widest mb-1.5';

const SectionCard = ({ title, subtitle, children }) => (
  <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-soft-sage/20 shadow-sm p-8 space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-muted-dark-green">{title}</h3>
      {subtitle && <p className="text-xs text-muted-dark-green/50 mt-0.5">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const ImageUploadOverlay = ({ onClick, label = 'Change Photo' }) => (
  <button
    onClick={onClick}
    className="absolute inset-0 flex flex-col items-center justify-center gap-2
               bg-muted-dark-green/30 opacity-0 hover:opacity-100 transition-opacity duration-300
               rounded-[inherit] text-white"
  >
    <Camera className="w-6 h-6" />
    <span className="text-xs font-semibold">{label}</span>
  </button>
);

/* ─── main component ─────────────────────────────────────── */
const ProfileMgmt = () => {
  /* banner */
  const [banner, setBanner] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const bannerRef = useRef();

  /* avatar */
  const [avatar, setAvatar] = useState(null);
  const avatarRef = useRef();

  /* form */
  const [form, setForm] = useState({
    businessName: '',
    tagline: '',
    category: '',
    location: '',
    email: '',
    phone: '',
    whatsapp: '',
    address: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    pinterest: '',
    youtube: '',
    website: '',
    shopify: '',
    shopWebsite: '',
    amazon: '',
    whatsappOrder: '',
  });

  useEffect(() => {
    const savedForm = localStorage.getItem('mb_profile_data');
    if (savedForm) {
      try {
        setForm(JSON.parse(savedForm));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Default initial data for consistency
      setForm({
        businessName: 'Flora & Linen',
        tagline: 'Ethical, slow-fashion clothing made from pure premium organic linen.',
        category: 'Apparels',
        location: 'Mumbai, India',
        email: 'hello@floralinen.com',
        phone: '+91 98765 43210',
        whatsapp: '+91 98765 43210',
        address: '102 Green Meadows, Bandra West, Mumbai',
        instagram: 'instagram.com/floralinen',
        facebook: 'facebook.com/floralinen',
        linkedin: '',
        pinterest: 'pinterest.com/floralinen',
        youtube: '',
        website: 'floralinen.com',
        shopify: 'floralinen.myshopify.com',
        shopWebsite: '',
        amazon: '',
        whatsappOrder: '',
      });
    }

    const savedAvatar = localStorage.getItem('mb_profile_avatar');
    if (savedAvatar) {
      setAvatar(savedAvatar);
    } else {
      setAvatar("https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200");
    }

    const savedBanner = localStorage.getItem('mb_profile_banner');
    if (savedBanner) {
      setBanner(savedBanner);
    } else {
      setBanner("https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800");
    }
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    localStorage.setItem('mb_profile_data', JSON.stringify(form));
    localStorage.setItem('mb_profile_avatar', avatar || '');
    localStorage.setItem('mb_profile_banner', banner || '');
    alert('Changes saved successfully!');
  };

  const handlePreview = () => {
    localStorage.setItem('mb_profile_data', JSON.stringify(form));
    localStorage.setItem('mb_profile_avatar', avatar || '');
    localStorage.setItem('mb_profile_banner', banner || '');
    window.open(`/discover?brand=${encodeURIComponent(form.businessName || 'Flora & Linen')}`, '_blank');
  };

  const handleCancel = () => {
    if (window.confirm('Discard unsaved changes?')) {
      window.location.reload();
    }
  };

  /* file helpers */
  const readFile = (file, setter) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setter(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleBannerDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) readFile(file, setBanner);
  };

  const socialFields = [
    { name: 'instagram', label: 'Instagram', icon: AtSign,     placeholder: 'instagram.com/yourbrand' },
    { name: 'facebook',  label: 'Facebook',  icon: Globe,      placeholder: 'facebook.com/yourbrand' },
    { name: 'linkedin',  label: 'LinkedIn',  icon: Briefcase,  placeholder: 'linkedin.com/in/yourname' },
    { name: 'pinterest', label: 'Pinterest', icon: Image,      placeholder: 'pinterest.com/yourbrand' },
    { name: 'youtube',   label: 'YouTube',   icon: Play,       placeholder: 'youtube.com/@yourbrand' },
    { name: 'website',   label: 'Website',   icon: Link2,      placeholder: 'yourwebsite.com' },
  ];

  const contactFields = [
    { name: 'email',    label: 'Email',            icon: Mail,           placeholder: 'hello@yourbrand.com', type: 'email' },
    { name: 'phone',    label: 'Phone Number',      icon: Phone,          placeholder: '+91 XXXXX XXXXX',    type: 'tel' },
    { name: 'whatsapp', label: 'WhatsApp',          icon: MessageCircle,  placeholder: '+91 XXXXX XXXXX',    type: 'tel' },
    { name: 'address',  label: 'Business Address',  icon: MapPin,         placeholder: 'Your full address',  type: 'text' },
  ];

  const shopFields = [
    { name: 'shopify',      label: 'Shopify',              icon: ShoppingBag,  placeholder: 'yourstore.myshopify.com' },
    { name: 'shopWebsite',  label: 'Website Shop',         icon: Globe,        placeholder: 'yourwebsite.com/shop' },
    { name: 'amazon',       label: 'Amazon / Etsy',        icon: ExternalLink, placeholder: 'amazon.in/shop/yourstore' },
    { name: 'whatsappOrder',label: 'WhatsApp Order Link',  icon: MessageCircle,placeholder: 'wa.me/91XXXXXXXXXX' },
  ];

  return (
    <div className="min-h-full pb-16 px-8 py-8 space-y-8 font-primary">
      {/* ── Header ─────────────────────────── */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-serif text-muted-dark-green">Profile Management</h2>
          <p className="text-muted-dark-green/60 font-medium mt-1 text-sm">
            Manage your public storefront — what customers see matters.
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleCancel} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-soft-sage/40 text-muted-dark-green text-sm font-semibold hover:bg-soft-sage/10 transition-all cursor-pointer">
            <X className="w-4 h-4" /> Cancel
          </button>
          <button onClick={handlePreview} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-mint-green/40 text-mint-green text-sm font-semibold hover:bg-mint-green/10 transition-all cursor-pointer">
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button onClick={handleSave} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mint-green text-white text-sm font-semibold hover:bg-muted-dark-green transition-all shadow-md shadow-mint-green/20 cursor-pointer">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>

      {/* ── Banner + Avatar ─────────────────── */}
      <SectionCard title="Cover & Profile Photo" subtitle="Recommended banner: 1440 × 320px · Profile: 200 × 200px">
        {/* Banner */}
        <div
          className={`relative w-full h-52 rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-300 cursor-pointer group
            ${isDragging ? 'border-mint-green bg-mint-green/5' : 'border-soft-sage/40 bg-soft-sage/10'}`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleBannerDrop}
          onClick={() => bannerRef.current.click()}
        >
          {banner ? (
            <>
              <img src={banner} alt="Banner" className="w-full h-full object-cover" />
              <ImageUploadOverlay onClick={() => bannerRef.current.click()} label="Change Banner" />
              <button
                onClick={(e) => { e.stopPropagation(); setBanner(null); }}
                className="absolute top-3 right-3 p-2 bg-white/80 rounded-full text-red-400 hover:bg-red-50 transition-colors shadow"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-dark-green/50">
              <div className="w-12 h-12 rounded-full bg-soft-sage/20 flex items-center justify-center">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium">Drag & drop or <span className="text-mint-green font-semibold">browse</span> to upload banner</p>
              <p className="text-xs">PNG, JPG or WEBP · Max 5MB</p>
            </div>
          )}
          <input ref={bannerRef} type="file" accept="image/*" className="hidden"
            onChange={(e) => readFile(e.target.files[0], setBanner)} />
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-6 -mt-2">
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-soft-sage/20 cursor-pointer group"
              onClick={() => avatarRef.current.click()}>
              {avatar ? (
                <>
                  <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                  <ImageUploadOverlay onClick={() => avatarRef.current.click()} label="Edit" />
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-dark-green/40 gap-1">
                  <Camera className="w-7 h-7" />
                  <span className="text-[9px] font-semibold uppercase tracking-widest">Upload</span>
                </div>
              )}
            </div>
            {avatar && (
              <button onClick={() => setAvatar(null)}
                className="absolute -top-1 -right-1 p-1.5 bg-white rounded-full text-red-400 shadow hover:bg-red-50 transition-colors border border-soft-sage/20">
                <X className="w-3 h-3" />
              </button>
            )}
            <input ref={avatarRef} type="file" accept="image/*" className="hidden"
              onChange={(e) => readFile(e.target.files[0], setAvatar)} />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-dark-green">Profile Photo</p>
            <p className="text-xs text-muted-dark-green/50 mt-0.5">Click the circle to upload · Square image recommended</p>
            <div className="flex gap-2 mt-3">
              <button onClick={() => avatarRef.current.click()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-mint-green/10 text-mint-green text-xs font-semibold hover:bg-mint-green/20 transition-colors">
                <Pencil className="w-3 h-3" /> Edit
              </button>
              {avatar && (
                <button onClick={() => setAvatar(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-400 text-xs font-semibold hover:bg-red-100 transition-colors">
                  <Trash2 className="w-3 h-3" /> Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* ── Business Info ───────────────────── */}
      <SectionCard title="Business Information" subtitle="This is what customers see on your public profile">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelCls}>Business Name</label>
            <input name="businessName" value={form.businessName} onChange={handleChange}
              placeholder="Your brand name" className={inputCls} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls}>Bio / Tagline</label>
            <textarea name="tagline" value={form.tagline} onChange={handleChange} rows={3}
              placeholder="A short description of what you do..." className={`${inputCls} resize-none`} />
          </div>
          <div>
            <label className={labelCls}>Category</label>
            <select name="category" value={form.category} onChange={handleChange} className={inputCls}>
              <option value="" disabled>Select category</option>
              {['Eatables', 'Accessories', 'Apparels', 'Beauticians', 'Boutiques', 'Footwear', 'Other'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Location</label>
            <input name="location" value={form.location} onChange={handleChange}
              placeholder="City, State" className={inputCls} />
          </div>
        </div>
      </SectionCard>

      {/* ── Social Links ────────────────────── */}
      <SectionCard title="Social Links" subtitle="Connect your social media to your storefront">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {socialFields.map(({ name, label, icon: Icon, placeholder }) => (
            <div key={name}>
              <label className={labelCls}>{label}</label>
              <div className="relative">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-dark-green/40" strokeWidth={1.5} />
                <input name={name} value={form[name]} onChange={handleChange}
                  placeholder={placeholder}
                  className={`${inputCls} pl-11`} />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Contact Info ────────────────────── */}
      <SectionCard title="Contact Information" subtitle="Visible to customers who want to reach you">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactFields.map(({ name, label, icon: Icon, placeholder, type }) => (
            <div key={name} className={name === 'address' ? 'sm:col-span-2' : ''}>
              <label className={labelCls}>{label}</label>
              <div className="relative">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-dark-green/40" strokeWidth={1.5} />
                <input type={type} name={name} value={form[name]} onChange={handleChange}
                  placeholder={placeholder}
                  className={`${inputCls} pl-11`} />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Shop Links ──────────────────────── */}
      <SectionCard title="Shop Links" subtitle="Add links to where customers can buy from you">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {shopFields.map(({ name, label, icon: Icon, placeholder }) => (
            <div key={name}>
              <label className={labelCls}>{label}</label>
              <div className="relative">
                <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-dark-green/40" strokeWidth={1.5} />
                <input name={name} value={form[name]} onChange={handleChange}
                  placeholder={placeholder}
                  className={`${inputCls} pl-11`} />
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Bottom Action Bar ───────────────── */}
      <div className="sticky bottom-6 flex justify-end gap-3 z-30">
        <button onClick={handleCancel} className="flex items-center gap-2 px-6 py-3 rounded-xl border border-soft-sage/40 text-muted-dark-green text-sm font-semibold hover:bg-soft-sage/10 transition-all bg-white/80 backdrop-blur-sm shadow-sm cursor-pointer">
          <X className="w-4 h-4" /> Cancel
        </button>
        <button onClick={handlePreview} className="flex items-center gap-2 px-6 py-3 rounded-xl border border-mint-green/40 text-mint-green text-sm font-semibold hover:bg-mint-green/10 transition-all bg-white/80 backdrop-blur-sm shadow-sm cursor-pointer">
          <Eye className="w-4 h-4" /> Preview Profile
        </button>
        <button onClick={handleSave} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-mint-green text-white text-sm font-semibold hover:bg-muted-dark-green transition-all shadow-lg shadow-mint-green/25 cursor-pointer">
          <Save className="w-4 h-4" /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileMgmt;
