import React, { useState, useEffect } from 'react';
import { getBrandsData, updateBrand } from '../../data/adminMockData';
import BrandDetailModal from './BrandDetailModal';
import { Store, Globe, Eye, Check, X, EyeOff, Search, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminStorefronts = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setBrands(getBrandsData());
  }, []);

  const handleSaveBrand = (updatedBrand) => {
    const newBrandsList = updateBrand(updatedBrand);
    setBrands(newBrandsList);
    if (selectedBrand && selectedBrand.id === updatedBrand.id) {
      setSelectedBrand(updatedBrand);
    }
  };

  const handleOpenDetail = (brand) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const handlePublish = (brandId, status) => {
    const updated = brands.map(b => {
      if (b.id === brandId) {
        const updatedBrand = {
          ...b,
          storefrontStatus: status,
          timeline: [
            { 
              action: `Storefront status set to ${status}`, 
              date: new Date().toISOString().split('T')[0] 
            },
            ...(b.timeline || [])
          ]
        };
        updateBrand(updatedBrand);
        return updatedBrand;
      }
      return b;
    });
    setBrands(updated);
  };

  // Stats
  const totalStorefronts = brands.length;
  const liveCount = brands.filter(b => b.storefrontStatus === 'Live').length;
  const reviewCount = brands.filter(b => b.storefrontStatus === 'Under Review').length;
  const draftCount = brands.filter(b => b.storefrontStatus === 'Draft').length;

  const filteredBrands = brands.filter(b => 
    b.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto font-primary pb-24">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-serif text-muted-dark-green">Storefront Incubation Hub</h2>
        <p className="text-muted-dark-green/60 font-medium mt-1">Publish, audit, and preview digital discovery profiles</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Storefronts', count: totalStorefronts, bg: 'bg-white' },
          { label: 'Live Profiles', count: liveCount, bg: 'bg-light-mint/25 border-mint-green/20' },
          { label: 'Under Review', count: reviewCount, bg: 'bg-amber-500/5 border-amber-500/10' },
          { label: 'Drafts', count: draftCount, bg: 'bg-gray-100/40 border-gray-200' }
        ].map((s, idx) => (
          <div key={idx} className={`p-5 rounded-2xl border border-soft-sage/20 shadow-sm flex flex-col justify-between ${s.bg}`}>
            <span className="text-xs font-semibold text-muted-dark-green/50 uppercase tracking-wider">{s.label}</span>
            <span className="text-3xl font-serif font-bold text-muted-dark-green mt-2">{s.count}</span>
          </div>
        ))}
      </div>

      {/* Main Panel */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-soft-sage/20 shadow-sm overflow-hidden">
        {/* Controls */}
        <div className="p-6 border-b border-soft-sage/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h3 className="text-lg font-bold text-muted-dark-green">Digital Storefronts Status</h3>
          
          <div className="relative flex items-center bg-white rounded-xl border border-soft-sage/25 px-4 py-2 w-64 shadow-inner">
            <input 
              type="text" 
              placeholder="Search storefront name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-xs text-muted-dark-green placeholder:text-muted-dark-green/30"
            />
            <Search className="w-3.5 h-3.5 text-muted-dark-green/45 shrink-0" />
          </div>
        </div>

        {/* List of storefronts */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBrands.map(brand => (
            <motion.div 
              key={brand.id}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-5 border border-soft-sage/15 shadow-sm flex flex-col justify-between gap-4"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 bg-light-mint rounded-xl border border-mint-green/10 text-mint-green">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-muted-dark-green text-base flex items-center gap-1.5">
                      {brand.brandName}
                      {brand.storefrontStatus === 'Live' && (
                        <Globe className="w-3.5 h-3.5 text-emerald-500" />
                      )}
                    </h4>
                    <span className="text-xs text-muted-dark-green/50">{brand.category}</span>
                  </div>
                </div>

                {/* Status indicator badge */}
                <div>
                  {brand.storefrontStatus === 'Live' && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800">
                      Live
                    </span>
                  )}
                  {brand.storefrontStatus === 'Under Review' && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-850">
                      Under Review
                    </span>
                  )}
                  {brand.storefrontStatus === 'Draft' && (
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-gray-100 border border-gray-200 text-gray-500">
                      Draft
                    </span>
                  )}
                </div>
              </div>

              {/* Storefront Incubation details */}
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-soft-sage/10 text-xs">
                <div>
                  <span className="text-muted-dark-green/45 block">Founder & Lead</span>
                  <span className="font-semibold text-muted-dark-green mt-0.5 block">{brand.founderName}</span>
                </div>
                <div>
                  <span className="text-muted-dark-green/45 block">Product Listings</span>
                  <span className="font-semibold text-muted-dark-green mt-0.5 block">{brand.productCount} active items</span>
                </div>
              </div>

              {/* Actions row */}
              <div className="flex gap-2.5 pt-3 border-t border-soft-sage/10">
                <button
                  onClick={() => handleOpenDetail(brand)}
                  className="flex-1 py-2 rounded-xl bg-white border border-soft-sage/35 text-xs text-muted-dark-green font-semibold hover:border-mint-green/50 hover:bg-light-mint/10 active:scale-95 transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-mint-green" /> Profile Logs
                </button>

                {brand.storefrontStatus !== 'Live' ? (
                  <button
                    onClick={() => handlePublish(brand.id, 'Live')}
                    className="flex-1 py-2 rounded-xl bg-mint-green text-white text-xs font-bold shadow-sm shadow-mint-green/10 hover:bg-muted-dark-green hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Check className="w-3.5 h-3.5" /> Approve Live
                  </button>
                ) : (
                  <button
                    onClick={() => handlePublish(brand.id, 'Draft')}
                    className="flex-1 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-200 active:scale-95 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <EyeOff className="w-3.5 h-3.5" /> Set to Draft
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand Detail Modal */}
      {selectedBrand && (
        <BrandDetailModal 
          brand={selectedBrand}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedBrand(null);
          }}
          onSave={handleSaveBrand}
        />
      )}
    </div>
  );
};

export default AdminStorefronts;
