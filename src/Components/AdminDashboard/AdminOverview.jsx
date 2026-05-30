import React, { useState, useEffect } from 'react';
import { getBrandsData, updateBrand, getProgressPercentage } from '../../data/adminMockData';
import BrandDetailModal from './BrandDetailModal';
import { Users, Layers, CheckCircle2, TrendingUp, Search, SlidersHorizontal, ArrowRight, Eye, Edit3 } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminOverview = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Load brands from localStorage on mount
  useEffect(() => {
    setBrands(getBrandsData());
  }, []);

  const handleSaveBrand = (updatedBrand) => {
    const newBrandsList = updateBrand(updatedBrand);
    setBrands(newBrandsList);
    // Keep current selected brand in sync if modal is open
    if (selectedBrand && selectedBrand.id === updatedBrand.id) {
      setSelectedBrand(updatedBrand);
    }
  };

  const handleRowClick = (brand) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  // Calculations for cards
  const totalBrands = brands.length;
  const activeIncubation = brands.filter(b => b.brandingStatus !== 'Completed' || b.packagingStatus !== 'Completed' || b.digitalMarketingStatus !== 'Completed').length;
  const liveStorefronts = brands.filter(b => b.storefrontStatus === 'Live').length;

  const categories = ['All', ...new Set(brands.map(b => b.category))];

  // Filtering
  const filteredBrands = brands.filter(b => {
    const matchesSearch = 
      b.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.founderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'All' || b.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Status Pill — only Pending or Completed
  const getStatusPill = (status) => {
    if (status === 'Completed') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-light-mint text-muted-dark-green border border-mint-green/20">
          <span className="w-1.5 h-1.5 rounded-full bg-mint-green" />
          Completed
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-400 border border-gray-200/70">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        Pending
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-8 p-8 w-full font-primary pb-24">
      {/* Title Header */}
      <div>
        <h2 className="text-3xl font-serif text-muted-dark-green">Admin Command</h2>
        <p className="text-muted-dark-green/60 font-medium mt-1">Brand Incubation & Storefront Discovery Management</p>
      </div>

      {/* Overview Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div 
          whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(107, 175, 146, 0.15)' }}
          className="relative overflow-hidden bg-gradient-to-br from-white/95 to-light-mint/35 backdrop-blur-md rounded-3xl p-6 border border-soft-sage/20 shadow-sm flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 bg-white rounded-2xl border border-soft-sage/10 text-mint-green shadow-sm">
              <Users className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold text-mint-green bg-light-mint px-2 py-1 rounded-full flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +2 new
            </span>
          </div>
          <div>
            <p className="text-sm text-muted-dark-green/60 font-semibold uppercase tracking-wider mb-1">Total Onboarded Brands</p>
            <p className="text-4xl font-serif text-muted-dark-green font-bold">{totalBrands}</p>
          </div>
          {/* Subtle design element */}
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-mint-green/5 rounded-tl-full pointer-events-none" />
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(107, 175, 146, 0.15)' }}
          className="relative overflow-hidden bg-gradient-to-br from-white/95 to-amber-50/15 backdrop-blur-md rounded-3xl p-6 border border-soft-sage/20 shadow-sm flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 bg-white rounded-2xl border border-soft-sage/10 text-amber-600 shadow-sm">
              <Layers className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-semibold text-muted-dark-green/55">Incubating Stages</span>
          </div>
          <div>
            <p className="text-sm text-muted-dark-green/60 font-semibold uppercase tracking-wider mb-1">Brands in Incubation</p>
            <p className="text-4xl font-serif text-muted-dark-green font-bold">{activeIncubation}</p>
          </div>
          {/* Subtle design element */}
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-amber-500/5 rounded-tl-full pointer-events-none" />
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(107, 175, 146, 0.15)' }}
          className="relative overflow-hidden bg-gradient-to-br from-white/95 to-emerald-50/15 backdrop-blur-md rounded-3xl p-6 border border-soft-sage/20 shadow-sm flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-start">
            <div className="p-3 bg-white rounded-2xl border border-soft-sage/10 text-emerald-600 shadow-sm">
              <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              100% Online
            </span>
          </div>
          <div>
            <p className="text-sm text-muted-dark-green/60 font-semibold uppercase tracking-wider mb-1">Live Storefronts</p>
            <p className="text-4xl font-serif text-muted-dark-green font-bold">{liveStorefronts}</p>
          </div>
          {/* Subtle design element */}
          <div className="absolute right-0 bottom-0 w-24 h-24 bg-emerald-500/5 rounded-tl-full pointer-events-none" />
        </motion.div>
      </div>

      {/* Main Section: Brand Progress Tracker Table */}
      <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-soft-sage/20 shadow-sm overflow-hidden flex flex-col">
        {/* Table controls */}
        <div className="p-6 border-b border-soft-sage/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-muted-dark-green">Brand Incubator Matrix</h3>
            <p className="text-xs text-muted-dark-green/50">Tracking operational phases: Branding, Packaging & Marketing</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative flex items-center bg-white rounded-full border border-soft-sage/25 px-4 py-2 w-64 shadow-inner">
              <input 
                type="text" 
                placeholder="Filter by brand or founder..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-xs text-muted-dark-green placeholder:text-muted-dark-green/30"
              />
              <Search className="w-3.5 h-3.5 text-muted-dark-green/45 shrink-0" />
            </div>

            {/* Category Filter */}
            <div className="relative flex items-center bg-white rounded-full border border-soft-sage/25 px-4 py-2 shadow-inner">
              <SlidersHorizontal className="w-3.5 h-3.5 text-muted-dark-green/45 mr-2" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-muted-dark-green font-medium cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-soft-sage/10 bg-light-mint/15 text-muted-dark-green/60 text-xs font-semibold uppercase tracking-wider">
                <th className="py-4 px-6">Brand Name</th>
                <th className="py-4 px-4">Founder</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4 text-center">Branding</th>
                <th className="py-4 px-4 text-center">Packaging</th>
                <th className="py-4 px-4 text-center">Digital Marketing</th>
                <th className="py-4 px-6 text-center">Overall Progress</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-soft-sage/10 text-sm">
              {filteredBrands.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-12 text-center text-muted-dark-green/40 italic">
                    No brands match the selected criteria.
                  </td>
                </tr>
              ) : (
                filteredBrands.map((brand) => {
                  const percentage = getProgressPercentage(brand);
                  return (
                    <tr 
                      key={brand.id}
                      onClick={() => handleRowClick(brand)}
                      className="group hover:bg-light-mint/10 transition-colors cursor-pointer border-b border-soft-sage/5 last:border-0"
                    >
                      <td className="py-4.5 px-6 font-semibold text-muted-dark-green group-hover:text-mint-green transition-colors">
                        {brand.brandName}
                      </td>
                      <td className="py-4.5 px-4 text-muted-dark-green/80">
                        {brand.founderName}
                      </td>
                      <td className="py-4.5 px-4 text-xs font-medium text-muted-dark-green/65">
                        {brand.category}
                      </td>
                      <td className="py-4.5 px-4 text-center">
                        {getStatusPill(brand.brandingStatus)}
                      </td>
                      <td className="py-4.5 px-4 text-center">
                        {getStatusPill(brand.packagingStatus)}
                      </td>
                      <td className="py-4.5 px-4 text-center">
                        {getStatusPill(brand.digitalMarketingStatus)}
                      </td>
                      <td className="py-4.5 px-6">
                        <div className="flex flex-col gap-1.5 min-w-[120px] justify-center">
                          <div className="flex items-center justify-between text-xs font-semibold text-muted-dark-green/70">
                            <span>Incubated</span>
                            <span>{percentage}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-light-mint/70 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className="h-full bg-gradient-to-r from-mint-green/80 to-mint-green rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-4.5 px-6 text-center" onClick={(e) => e.stopPropagation()}>
                        <button 
                          onClick={() => handleRowClick(brand)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white shadow-sm border border-soft-sage/20 text-xs font-medium text-muted-dark-green hover:border-mint-green/40 hover:bg-light-mint/20 active:scale-95 transition-all cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-mint-green" />
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Row Detail Modal */}
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

export default AdminOverview;
