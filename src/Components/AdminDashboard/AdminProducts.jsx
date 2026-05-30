import React, { useState, useEffect } from 'react';
import { Star, Search, SlidersHorizontal, Package, Check, ShieldAlert, Sparkles, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const DEFAULT_PRODUCTS = [
  { id: 'p1', name: 'Raw Linen Table Runner', brand: 'Loom & Leaf', category: 'Sustainable Textiles', price: 48, status: 'Approved', spotlight: true, stock: 35 },
  { id: 'p2', name: 'Indigo Dye Throw Blanket', brand: 'Loom & Leaf', category: 'Sustainable Textiles', price: 110, status: 'Approved', spotlight: false, stock: 12 },
  { id: 'p3', name: 'Chamomile Cleansing Balm', brand: 'Clay & Herb', category: 'Organic Skincare', price: 34, status: 'Approved', spotlight: true, stock: 80 },
  { id: 'p4', name: 'Hibiscus Clay Hydrating Mask', brand: 'Clay & Herb', category: 'Organic Skincare', price: 42, status: 'Approved', spotlight: false, stock: 45 },
  { id: 'p5', name: 'Summer Solstice Wild Flowers', brand: 'Midi Floral', category: 'Artisanal Florals', price: 75, status: 'Pending Review', spotlight: false, stock: 15 },
  { id: 'p6', name: 'Hand-painted Ceramic Pitcher', brand: 'Midi Floral', category: 'Artisanal Florals', price: 95, status: 'Approved', spotlight: true, stock: 8 },
  { id: 'p7', name: 'Smart Hydro-Sensory Grow Kit', brand: 'Bloom Botanics', category: 'Wellness Tech', price: 149, status: 'Approved', spotlight: true, stock: 24 },
  { id: 'p8', name: 'Kyoto Ceremonial Matcha Set', brand: 'Slow Brew Tea Co.', category: 'Specialty Tea', price: 60, status: 'Approved', spotlight: false, stock: 50 },
  { id: 'p9', name: 'Handmade Organic Sencha Blend', brand: 'Slow Brew Tea Co.', category: 'Specialty Tea', price: 28, status: 'Pending Review', spotlight: false, stock: 120 }
];

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('All');
  const [spotlightOnly, setSpotlightOnly] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('mb_admin_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      localStorage.setItem('mb_admin_products', JSON.stringify(DEFAULT_PRODUCTS));
      setProducts(DEFAULT_PRODUCTS);
    }
  }, []);

  const saveProducts = (updatedList) => {
    setProducts(updatedList);
    localStorage.setItem('mb_admin_products', JSON.stringify(updatedList));
  };

  const toggleSpotlight = (id) => {
    const updated = products.map(p => 
      p.id === id ? { ...p, spotlight: !p.spotlight } : p
    );
    saveProducts(updated);
  };

  const handleApprove = (id) => {
    const updated = products.map(p => 
      p.id === id ? { ...p, status: 'Approved' } : p
    );
    saveProducts(updated);
  };

  // Filters
  const brandsList = ['All', ...new Set(products.map(p => p.brand))];
  
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = brandFilter === 'All' || p.brand === brandFilter;
    const matchesSpotlight = !spotlightOnly || p.spotlight;

    return matchesSearch && matchesBrand && matchesSpotlight;
  });

  return (
    <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto font-primary pb-24">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-serif text-muted-dark-green">Curator Catalogue</h2>
        <p className="text-muted-dark-green/60 font-medium mt-1">Review product listings, edit curation spotlight flags, and monitor global stocks</p>
      </div>

      {/* Analytics Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-soft-sage/20 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-muted-dark-green/50 uppercase">Global Products</span>
            <h3 className="text-3xl font-serif font-bold text-muted-dark-green mt-1">{products.length}</h3>
          </div>
          <div className="p-3 bg-light-mint rounded-xl text-mint-green">
            <Package className="w-5.5 h-5.5" />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-soft-sage/20 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-muted-dark-green/50 uppercase">Spotlight Curation</span>
            <h3 className="text-3xl font-serif font-bold text-muted-dark-green mt-1">
              {products.filter(p => p.spotlight).length}
            </h3>
          </div>
          <div className="p-3 bg-yellow-50 rounded-xl text-amber-500">
            <Star className="w-5.5 h-5.5" fill="currentColor" />
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-soft-sage/20 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-muted-dark-green/50 uppercase">Pending Audits</span>
            <h3 className="text-3xl font-serif font-bold text-muted-dark-green mt-1">
              {products.filter(p => p.status === 'Pending Review').length}
            </h3>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
            <ShieldAlert className="w-5.5 h-5.5" />
          </div>
        </div>
      </div>

      {/* Filters Area */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-soft-sage/20 p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex items-center bg-white rounded-xl border border-soft-sage/25 px-4 py-2 flex-1 shadow-inner max-w-sm">
          <input 
            type="text" 
            placeholder="Search products, materials, formulas..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-xs text-muted-dark-green placeholder:text-muted-dark-green/30"
          />
          <Search className="w-3.5 h-3.5 text-muted-dark-green/45 shrink-0" />
        </div>

        {/* Action controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Brand select */}
          <div className="relative flex items-center bg-white rounded-xl border border-soft-sage/25 px-3 py-2 shadow-inner">
            <Filter className="w-3.5 h-3.5 text-muted-dark-green/45 mr-2" />
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="bg-transparent border-none outline-none text-xs text-muted-dark-green font-medium cursor-pointer"
            >
              {brandsList.map(b => (
                <option key={b} value={b}>{b === 'All' ? 'All Partner Brands' : b}</option>
              ))}
            </select>
          </div>

          {/* Toggle Spotlight filter */}
          <button
            onClick={() => setSpotlightOnly(!spotlightOnly)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 cursor-pointer ${
              spotlightOnly
                ? 'bg-light-mint text-mint-green border-mint-green/30 font-bold'
                : 'bg-white text-muted-dark-green/70 border-soft-sage/25 hover:border-mint-green/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Spotlight Curation
          </button>
        </div>
      </div>

      {/* Grid of Curation Products */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-soft-sage/20 shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-soft-sage/10 bg-light-mint/10 text-muted-dark-green/60 text-xs font-semibold uppercase tracking-wider">
                <th className="py-4 px-6">Product Item</th>
                <th className="py-4 px-4">Brand</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">MSRP Price</th>
                <th className="py-4 px-4">Stock Level</th>
                <th className="py-4 px-4 text-center">Incubator Status</th>
                <th className="py-4 px-4 text-center">Curation Spotlight</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft-sage/10 text-sm">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-12 text-center text-muted-dark-green/40 italic">
                    No products matching search criteria.
                  </td>
                </tr>
              ) : (
                filteredProducts.map(p => (
                  <tr key={p.id} className="hover:bg-light-mint/5 transition-colors">
                    <td className="py-4.5 px-6 font-bold text-muted-dark-green">{p.name}</td>
                    <td className="py-4.5 px-4 text-muted-dark-green/80">{p.brand}</td>
                    <td className="py-4.5 px-4 text-xs font-medium text-muted-dark-green/60">{p.category}</td>
                    <td className="py-4.5 px-4 font-semibold text-muted-dark-green">${p.price}</td>
                    <td className="py-4.5 px-4 text-xs">
                      <span className={`font-semibold ${p.stock < 15 ? 'text-red-500' : 'text-muted-dark-green/70'}`}>
                        {p.stock} units
                      </span>
                    </td>
                    <td className="py-4.5 px-4 text-center">
                      {p.status === 'Approved' ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-250">
                          Approved
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                          In Review
                        </span>
                      )}
                    </td>
                    <td className="py-4.5 px-4 text-center">
                      <button
                        onClick={() => toggleSpotlight(p.id)}
                        className={`p-2 rounded-full border transition-all cursor-pointer ${
                          p.spotlight 
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20' 
                            : 'bg-white border-soft-sage/35 text-gray-400 hover:text-amber-500 hover:bg-amber-500/5 hover:border-amber-500/20'
                        }`}
                      >
                        <Star className="w-4 h-4" fill={p.spotlight ? 'currentColor' : 'none'} />
                      </button>
                    </td>
                    <td className="py-4.5 px-6 text-center">
                      {p.status === 'Pending Review' ? (
                        <button
                          onClick={() => handleApprove(p.id)}
                          className="px-3.5 py-1.5 rounded-xl bg-mint-green text-white text-xs font-bold hover:bg-muted-dark-green transition-all shadow-sm flex items-center justify-center gap-1 mx-auto cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5" /> Approve
                        </button>
                      ) : (
                        <span className="text-xs text-muted-dark-green/45 italic">Live Listing</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
