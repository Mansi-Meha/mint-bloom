import React, { useState, useEffect, useMemo } from 'react';
import { 
  Plus, 
  Pencil, 
  Trash2, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  ShoppingBag, 
  Globe, 
  Store, 
  X, 
  Link, 
  AlertCircle, 
  Check,
  Eye,
  Search,
  SlidersHorizontal,
  LayoutGrid,
  List
} from 'lucide-react';

// Preset high-quality images for the brand catalogue
const PRESET_IMAGES = [
  { label: 'Silk Pattern (Green)', url: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=600&q=80' },
  { label: 'Linen Fabric (Sage)', url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80' },
  { label: 'Organic Cotton (Olive)', url: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=600&q=80' },
  { label: 'Kurta Apparel', url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80' },
  { label: 'Embroidery Detail', url: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80' },
  { label: 'Jute Canvas Bag', url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80' }
];

// Default sample products with full fields
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Silk Scarf',
    category: 'Accessories',
    price: '₹850',
    description: 'Handcrafted 100% pure silk scarf with traditional botanical prints, made using eco-friendly natural plant dyes. Exceptionally soft texture with a delicate satin sheen.',
    images: [
      'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=600&q=80'
    ],
    buyLinks: [
      { platform: 'Shopify', url: 'https://shopify.com' },
      { platform: 'Etsy', url: 'https://etsy.com' }
    ],
    status: 'Active'
  },
  {
    id: 2,
    name: 'Hand-embroidered Kurta',
    category: 'Apparels',
    price: '₹2,200',
    description: 'Elegant organic cotton kurta featuring intricate hand embroidery by local women artisans. Lightweight, breathable fabric designed for comfortable all-day wear across seasons.',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80'
    ],
    buyLinks: [
      { platform: 'Shopify', url: 'https://shopify.com' }
    ],
    status: 'Active'
  },
  {
    id: 3,
    name: 'Jute Tote Bag',
    category: 'Accessories',
    price: '₹450',
    description: 'Spacious and durable tote bag crafted from 100% natural biodegradable jute fiber. Features sturdy soft cotton handles and a botanical printed front pocket for quick storage.',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=600&q=80'
    ],
    buyLinks: [
      { platform: 'Etsy', url: 'https://etsy.com' }
    ],
    status: 'Inactive'
  }
];

// Helper to get platform icon
const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case 'shopify':
      return <ShoppingBag className="w-3.5 h-3.5" />;
    case 'etsy':
      return <Store className="w-3.5 h-3.5" />;
    case 'amazon':
      return <ShoppingBag className="w-3.5 h-3.5" />;
    default:
      return <ExternalLink className="w-3.5 h-3.5" />;
  }
};

// Interactive Product Card Component
const ProductCard = ({ product, onEdit, onDelete }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isDescExpanded, setIsDescExpanded] = useState(false);

  const images = product.images && product.images.length > 0 
    ? product.images 
    : ['https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80']; // Fallback

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const activeLink = product.buyLinks && product.buyLinks.length > 0 ? product.buyLinks[0] : null;
  const secondaryLinks = product.buyLinks && product.buyLinks.length > 1 ? product.buyLinks.slice(1) : [];

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-3xl border border-soft-sage/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full font-primary">
      {/* Image Gallery Header */}
      <div className="relative h-60 w-full bg-soft-sage/10 overflow-hidden group/image shrink-0">
        <img 
          src={images[currentImgIndex]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Category Overlay */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-muted-dark-green text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
          {product.category}
        </span>

        {/* Status Overlay */}
        <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm backdrop-blur-md ${
          product.status === 'Active' 
            ? 'bg-light-mint/90 text-mint-green border border-mint-green/20' 
            : 'bg-red-50/90 text-red-500 border border-red-200'
        }`}>
          {product.status}
        </span>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/25 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 active:scale-90 transition-all opacity-0 group-hover/image:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/25 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 active:scale-90 transition-all opacity-0 group-hover/image:opacity-100 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {images.map((_, i) => (
              <span 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentImgIndex === i ? 'bg-white scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold text-muted-dark-green leading-tight mb-2 group-hover:text-mint-green transition-colors">
            {product.name}
          </h3>
          
          <div className="text-xs text-muted-dark-green/70 leading-relaxed font-medium mb-4">
            <p className={isDescExpanded ? '' : 'line-clamp-3'}>
              {product.description || 'No description provided for this product.'}
            </p>
            {product.description && product.description.length > 120 && (
              <button 
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="text-mint-green hover:underline font-bold mt-1 block cursor-pointer"
              >
                {isDescExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        </div>

        <div>
          <div className="border-t border-soft-sage/15 my-4" />

          {/* Pricing & Buying links */}
          <div className="flex items-center justify-between gap-4 mb-5">
            <div>
              <p className="text-[10px] uppercase font-bold text-muted-dark-green/40 tracking-wider">Price</p>
              <p className="text-xl font-bold text-muted-dark-green">{product.price}</p>
            </div>

            {/* Buying CTAs */}
            <div className="flex items-center gap-1.5 flex-1 justify-end">
              {activeLink ? (
                <>
                  <a 
                    href={activeLink.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 max-w-[130px] flex items-center justify-center gap-1.5 bg-mint-green hover:bg-muted-dark-green text-white font-semibold text-xs py-2 px-3.5 rounded-xl transition-all shadow-md shadow-mint-green/10 hover:shadow-lg active:scale-98 cursor-pointer"
                  >
                    {getPlatformIcon(activeLink.platform)}
                    <span className="truncate">Buy on {activeLink.platform}</span>
                  </a>

                  {/* Secondary Channel Badges */}
                  {secondaryLinks.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Buy on ${link.platform}`}
                      className="w-8 h-8 rounded-xl border border-soft-sage/30 hover:border-mint-green bg-white text-muted-dark-green/75 hover:text-mint-green flex items-center justify-center transition-all hover:bg-light-mint/20 active:scale-90 cursor-pointer"
                    >
                      {getPlatformIcon(link.platform)}
                    </a>
                  ))}
                </>
              ) : (
                <span className="text-[10px] italic font-semibold text-muted-dark-green/40 flex items-center gap-1">
                  <Link className="w-3 h-3" /> No buy links
                </span>
              )}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="flex items-center justify-between border-t border-soft-sage/10 pt-4 text-xs font-semibold">
            <button 
              onClick={() => onEdit(product)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-muted-dark-green/60 hover:text-mint-green hover:bg-light-mint/30 transition-all cursor-pointer"
            >
              <Pencil className="w-3.5 h-3.5" strokeWidth={2} />
              Edit
            </button>
            <button 
              onClick={() => onDelete(product.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-muted-dark-green/60 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add & Edit Product Modal Dialog
const ProductModal = ({ isOpen, onClose, product, onSave }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Accessories');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [buyLinks, setBuyLinks] = useState([]);
  const [linkPlatform, setLinkPlatform] = useState('Shopify');
  const [linkUrl, setLinkUrl] = useState('');
  const [status, setStatus] = useState('Active');
  const [errorMsg, setErrorMsg] = useState('');

  // Categories list
  const CATEGORIES = ['Accessories', 'Apparels', 'Footwear', 'Home Decor', 'Organic Skincare', 'Specialty Tea', 'Wellness Tech', 'Others'];

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setCategory(product.category || 'Accessories');
      setPrice(product.price || '');
      setDescription(product.description || '');
      setImages(product.images || []);
      setBuyLinks(product.buyLinks || []);
      setStatus(product.status || 'Active');
    } else {
      setName('');
      setCategory('Accessories');
      setPrice('');
      setDescription('');
      setImages([]);
      setBuyLinks([]);
      setStatus('Active');
    }
    setImageUrlInput('');
    setLinkUrl('');
    setErrorMsg('');
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleAddImage = (url) => {
    const toAdd = url || imageUrlInput.trim();
    if (!toAdd) return;
    
    // Check if it's already in the images list
    if (images.includes(toAdd)) {
      setErrorMsg('Image URL is already added.');
      return;
    }
    
    setImages([...images, toAdd]);
    setImageUrlInput('');
    setErrorMsg('');
  };

  const handleRemoveImage = (idxToRemove) => {
    setImages(images.filter((_, i) => i !== idxToRemove));
  };

  const handleAddBuyLink = () => {
    if (!linkUrl.trim()) return;
    
    // Quick validation
    let formattedUrl = linkUrl.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    // Check if platform is already added
    if (buyLinks.some(l => l.platform.toLowerCase() === linkPlatform.toLowerCase())) {
      setErrorMsg(`Store link for ${linkPlatform} is already added. Modify or delete it first.`);
      return;
    }

    setBuyLinks([...buyLinks, { platform: linkPlatform, url: formattedUrl }]);
    setLinkUrl('');
    setErrorMsg('');
  };

  const handleRemoveBuyLink = (idxToRemove) => {
    setBuyLinks(buyLinks.filter((_, i) => i !== idxToRemove));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Product name is required.');
      return;
    }
    if (!price.trim()) {
      setErrorMsg('Price is required.');
      return;
    }

    // Prepare save payload
    const payload = {
      id: product ? product.id : Date.now(),
      name: name.trim(),
      category,
      price: price.trim(),
      description: description.trim(),
      images,
      buyLinks,
      status
    };

    onSave(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-muted-dark-green/35 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Dialog container */}
      <div className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-soft-sage/30 overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-soft-sage/10 bg-gradient-to-r from-light-mint/20 to-transparent shrink-0">
          <div>
            <h3 className="text-2xl font-serif font-bold text-muted-dark-green">
              {product ? 'Edit Product Details' : 'Add New Product'}
            </h3>
            <p className="text-xs text-muted-dark-green/60 font-medium mt-0.5">
              Fill in details, upload multiple images, and define purchase channels.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-light-mint/30 text-muted-dark-green/75 hover:text-mint-green transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3.5 bg-red-50 text-red-600 rounded-xl text-xs font-semibold border border-red-100">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-muted-dark-green/75 uppercase tracking-wide">Product Name *</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Pure Silk Pashmina"
                className="w-full px-4 py-3 rounded-xl bg-warm-white/50 border border-soft-sage/35 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all text-sm text-muted-dark-green"
              />
            </div>

            {/* Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-muted-dark-green/75 uppercase tracking-wide">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-warm-white/50 border border-soft-sage/35 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all text-sm text-muted-dark-green font-medium cursor-pointer"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-muted-dark-green/75 uppercase tracking-wide">Price / MSRP *</label>
              <input 
                type="text" 
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. ₹850 or $45"
                className="w-full px-4 py-3 rounded-xl bg-warm-white/50 border border-soft-sage/35 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all text-sm text-muted-dark-green"
              />
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-muted-dark-green/75 uppercase tracking-wide">Listing Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-warm-white/50 border border-soft-sage/35 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all text-sm text-muted-dark-green font-medium cursor-pointer"
              >
                <option value="Active">Active (Visible)</option>
                <option value="Inactive">Inactive (Hidden)</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted-dark-green/75 uppercase tracking-wide">Product Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell customers about the materials, design history, and uniqueness of this product..."
              rows={3}
              className="w-full p-4 rounded-xl bg-warm-white/50 border border-soft-sage/35 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all text-sm text-muted-dark-green leading-relaxed resize-none"
            />
          </div>

          {/* Multi-Image Upload */}
          <div className="space-y-3 p-4 bg-light-mint/10 border border-soft-sage/15 rounded-2xl">
            <label className="text-xs font-bold text-muted-dark-green/85 uppercase tracking-wide block">Product Images (Multiple Allowed)</label>
            
            {/* Added Images Preview List */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-xl border border-soft-sage/20 overflow-hidden group/thumb">
                    <img src={img} alt="preview" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => handleRemoveImage(i)}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity text-white cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <span className="absolute bottom-1 right-1 bg-black/40 backdrop-blur-sm text-[8px] text-white px-1.5 py-0.5 rounded font-bold">
                      #{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Preset recommendations */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-muted-dark-green/50 uppercase tracking-wider block">Or click to add premium mock presets:</span>
              <div className="flex flex-wrap gap-1.5">
                {PRESET_IMAGES.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAddImage(preset.url)}
                    className="px-2.5 py-1 text-[10px] font-semibold bg-white border border-soft-sage/35 hover:border-mint-green hover:bg-light-mint/20 text-muted-dark-green rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-2.5 h-2.5 text-mint-green" />
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Image URL entry */}
            <div className="flex gap-2">
              <input 
                type="url"
                value={imageUrlInput}
                onChange={(e) => setImageUrlInput(e.target.value)}
                placeholder="Enter image URL (e.g., https://unsplash.com/...)"
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-soft-sage/25 focus:border-mint-green outline-none"
              />
              <button
                type="button"
                onClick={() => handleAddImage()}
                className="px-4 py-2 bg-muted-dark-green text-white font-semibold text-xs rounded-xl hover:bg-mint-green transition-all flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" /> Add URL
              </button>
            </div>
          </div>

          {/* Buy Links (Purchase Channels) */}
          <div className="space-y-3 p-4 bg-light-mint/10 border border-soft-sage/15 rounded-2xl">
            <label className="text-xs font-bold text-muted-dark-green/85 uppercase tracking-wide block">Buy Links / Purchase Channels</label>
            
            {/* Added Links Table */}
            {buyLinks.length > 0 && (
              <div className="space-y-2">
                {buyLinks.map((link, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-white border border-soft-sage/15 rounded-xl text-xs">
                    <div className="flex items-center gap-2 font-semibold text-muted-dark-green">
                      {getPlatformIcon(link.platform)}
                      <span>{link.platform}</span>
                      <span className="text-[10px] font-normal text-muted-dark-green/45 truncate max-w-[280px] font-mono">({link.url})</span>
                    </div>
                    <button 
                      type="button"
                      onClick={() => handleRemoveBuyLink(i)}
                      className="p-1 text-muted-dark-green/40 hover:text-red-500 rounded transition-all cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Add Buy Link Fields */}
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={linkPlatform}
                onChange={(e) => setLinkPlatform(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl bg-white border border-soft-sage/25 focus:border-mint-green outline-none font-semibold text-muted-dark-green shrink-0 cursor-pointer"
              >
                <option value="Shopify">Shopify</option>
                <option value="Etsy">Etsy</option>
                <option value="Amazon">Amazon</option>
                <option value="Website">Custom Website</option>
              </select>
              
              <input 
                type="text"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="Product buying page URL (e.g. shopify.com/product-url)"
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-soft-sage/25 focus:border-mint-green outline-none"
              />

              <button
                type="button"
                onClick={handleAddBuyLink}
                className="px-4 py-2 bg-muted-dark-green text-white font-semibold text-xs rounded-xl hover:bg-mint-green transition-all flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <Plus className="w-3 h-3" /> Link Store
              </button>
            </div>
          </div>

          {/* Buttons Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-soft-sage/10 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-soft-sage/30 text-xs font-bold text-muted-dark-green/75 hover:bg-light-mint/20 hover:text-mint-green transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-mint-green text-white text-xs font-bold hover:bg-muted-dark-green shadow-md shadow-mint-green/20 hover:shadow-lg transition-all cursor-pointer"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Product Catalogue Component
const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // null means adding a new product

  // Load from localStorage or defaults
  useEffect(() => {
    const saved = localStorage.getItem('mb_brand_catalogue');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setProducts(parsed);
        } else {
          setProducts(DEFAULT_PRODUCTS);
        }
      } catch (err) {
        setProducts(DEFAULT_PRODUCTS);
      }
    } else {
      localStorage.setItem('mb_brand_catalogue', JSON.stringify(DEFAULT_PRODUCTS));
      setProducts(DEFAULT_PRODUCTS);
    }
  }, []);

  const saveProductsList = (newList) => {
    setProducts(newList);
    localStorage.setItem('mb_brand_catalogue', JSON.stringify(newList));
  };

  const removeProduct = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this product from your catalogue?');
    if (confirmed) {
      const filtered = products.filter(p => p.id !== id);
      saveProductsList(filtered);
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (savedProduct) => {
    if (selectedProduct) {
      // Edit existing
      const updated = products.map(p => p.id === savedProduct.id ? savedProduct : p);
      saveProductsList(updated);
    } else {
      // Create new
      saveProductsList([savedProduct, ...products]);
    }
  };

  const handleViewProfileClick = () => {
    let businessName = 'Flora & Linen';
    const profileSaved = localStorage.getItem('mb_profile_data');
    if (profileSaved) {
      try {
        const profile = JSON.parse(profileSaved);
        if (profile.businessName) {
          businessName = profile.businessName;
        }
      } catch (e) {
        console.error(e);
      }
    }
    window.open(`/discover?brand=${encodeURIComponent(businessName)}`, '_blank');
  };

  // ── Search & filter state ──────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const allCategories = useMemo(() => {
    const cats = new Set(products.map(p => p.category).filter(Boolean));
    return ['All', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q));
      const matchesCategory = filterCategory === 'All' || p.category === filterCategory;
      const matchesStatus = filterStatus === 'All' || p.status === filterStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, searchQuery, filterCategory, filterStatus]);

  const activeCount = products.filter(p => p.status === 'Active').length;
  const inactiveCount = products.filter(p => p.status === 'Inactive').length;

  return (
    <div className="flex flex-col gap-6 p-8 pb-24 w-full font-primary">
      {/* Top action row */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif text-muted-dark-green font-semibold">Product Catalogue</h2>
          <p className="text-muted-dark-green/60 font-medium mt-1">Manage and showcase your storefront collections with direct purchase channels.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={handleViewProfileClick}
            className="flex items-center gap-2 px-5 py-3 border border-mint-green/35 text-mint-green hover:bg-light-mint/30 rounded-xl font-bold text-xs hover:shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            View Public Profile
          </button>
          <button 
            onClick={handleAddClick}
            className="flex items-center gap-2 px-5 py-3 bg-mint-green hover:bg-muted-dark-green text-white rounded-xl font-bold text-xs hover:shadow-lg active:scale-98 transition-all shadow-md shadow-mint-green/25 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
            Add Product
          </button>
        </div>
      </div>

      {/* ── Stats chips ── */}
      <div className="flex flex-wrap items-center gap-3 -mt-2">
        {[
          { label: 'Total', value: products.length, color: 'bg-white border-soft-sage/25 text-muted-dark-green' },
          { label: 'Active', value: activeCount, color: 'bg-light-mint/60 border-mint-green/20 text-mint-green' },
          { label: 'Inactive', value: inactiveCount, color: 'bg-gray-50 border-gray-200 text-gray-400' },
        ].map(chip => (
          <span key={chip.label} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-sm ${chip.color}`}>
            <span className="font-bold text-sm">{chip.value}</span> {chip.label}
          </span>
        ))}
      </div>

      {/* ── Search + Filter Row ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-dark-green/35" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search products by name, category or description…"
            className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl bg-white/80 border border-soft-sage/25 focus:border-mint-green focus:ring-2 focus:ring-mint-green/10 outline-none text-muted-dark-green placeholder:text-muted-dark-green/35 transition-all shadow-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-dark-green/35 hover:text-muted-dark-green transition-colors cursor-pointer">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category filter */}
        <select
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          className="px-3 py-2.5 text-sm rounded-xl bg-white/80 border border-soft-sage/25 focus:border-mint-green outline-none text-muted-dark-green font-medium shadow-sm cursor-pointer"
        >
          {allCategories.map(c => <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>)}
        </select>

        {/* Status filter */}
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          className="px-3 py-2.5 text-sm rounded-xl bg-white/80 border border-soft-sage/25 focus:border-mint-green outline-none text-muted-dark-green font-medium shadow-sm cursor-pointer"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Grid / List toggle */}
        <div className="flex items-center bg-white/80 border border-soft-sage/25 rounded-xl overflow-hidden shadow-sm shrink-0">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2.5 transition-colors cursor-pointer ${
              viewMode === 'grid' ? 'bg-mint-green text-white' : 'text-muted-dark-green/50 hover:bg-light-mint/30'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2.5 transition-colors cursor-pointer ${
              viewMode === 'list' ? 'bg-mint-green text-white' : 'text-muted-dark-green/50 hover:bg-light-mint/30'
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Result count label ── */}
      {(searchQuery || filterCategory !== 'All' || filterStatus !== 'All') && (
        <p className="text-xs text-muted-dark-green/55 -mt-2">
          Showing <span className="font-semibold text-muted-dark-green">{filteredProducts.length}</span> of {products.length} products
          {searchQuery && <> matching <span className="font-semibold text-mint-green">"{searchQuery}"</span></>}
        </p>
      )}

      {/* Grid / List catalogue view */}
      {products.length === 0 ? (
        <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-soft-sage/20 p-12 text-center max-w-md mx-auto my-12 shadow-sm space-y-4">
          <div className="w-12 h-12 bg-light-mint rounded-2xl flex items-center justify-center mx-auto text-mint-green shadow-inner">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-muted-dark-green">Your Catalogue is Empty</h4>
            <p className="text-xs text-muted-dark-green/65 mt-1 leading-relaxed">Get started by creating your first product. Add description, images, and Shopify/Etsy buying options.</p>
          </div>
          <button 
            onClick={handleAddClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-mint-green text-white font-bold text-xs rounded-xl hover:bg-muted-dark-green transition-all shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add First Product
          </button>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-soft-sage/15 p-10 text-center max-w-sm mx-auto my-8 shadow-sm space-y-3">
          <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto text-muted-dark-green/30">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-muted-dark-green">No products found</h4>
            <p className="text-xs text-muted-dark-green/55 mt-1">Try adjusting your search or filters.</p>
          </div>
          <button
            onClick={() => { setSearchQuery(''); setFilterCategory('All'); setFilterStatus('All'); }}
            className="text-xs font-semibold text-mint-green hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onEdit={handleEditClick}
              onDelete={removeProduct}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2 mt-2">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="flex items-center gap-4 bg-white/80 border border-soft-sage/20 rounded-2xl px-4 py-3 hover:shadow-md hover:border-mint-green/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-light-mint">
                {product.images && product.images[0]
                  ? <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  : <ShoppingBag className="w-6 h-6 text-mint-green/40 m-auto mt-4" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-muted-dark-green truncate group-hover:text-mint-green transition-colors">{product.name}</p>
                <p className="text-[11px] text-muted-dark-green/50 mt-0.5">{product.category} · {product.price}</p>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border shrink-0 ${
                product.status === 'Active'
                  ? 'bg-light-mint text-mint-green border-mint-green/20'
                  : 'bg-gray-50 text-gray-400 border-gray-200'
              }`}>
                {product.status}
              </span>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={() => handleEditClick(product)} className="p-2 rounded-lg text-muted-dark-green/40 hover:text-mint-green hover:bg-light-mint/40 transition-all cursor-pointer">
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => removeProduct(product.id)} className="p-2 rounded-lg text-muted-dark-green/40 hover:text-red-400 hover:bg-red-50 transition-all cursor-pointer">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Modal */}
      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onSave={handleSaveProduct}
      />
    </div>
  );
};

export default ProductCatalogue;
