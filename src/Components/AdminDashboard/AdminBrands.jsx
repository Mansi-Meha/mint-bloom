import React, { useState, useEffect } from 'react';
import { getBrandsData, updateBrand, getProgressPercentage } from '../../data/adminMockData';
import BrandDetailModal from './BrandDetailModal';
import { Mail, Phone, Tag, Calendar, ShoppingBag, Eye, Search, SlidersHorizontal, Plus, Grid, List } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminBrands = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // grid vs list

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

  // Filter criteria
  const categories = ['All', ...new Set(brands.map(b => b.category))];
  const statuses = ['All', 'Live', 'Draft', 'Under Review'];

  const filteredBrands = brands.filter(b => {
    const matchesSearch = 
      b.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.founderName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'All' || b.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || b.storefrontStatus === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStorefrontPill = (status) => {
    switch (status) {
      case 'Live':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/50">
            Storefront: Live
          </span>
        );
      case 'Under Review':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/50">
            Reviewing Storefront
          </span>
        );
      case 'Draft':
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 border border-gray-200/50">
            Draft Mode
          </span>
        );
    }
  };

  return (
    <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto font-primary pb-24">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif text-muted-dark-green">Brand Incubees</h2>
          <p className="text-muted-dark-green/60 font-medium mt-1">Discover, manage, and curate partner creators</p>
        </div>
        
        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-white rounded-xl border border-soft-sage/20 p-1 self-start shadow-sm">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg cursor-pointer ${viewMode === 'grid' ? 'bg-light-mint text-mint-green' : 'text-muted-dark-green/60 hover:text-muted-dark-green'}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg cursor-pointer ${viewMode === 'list' ? 'bg-light-mint text-mint-green' : 'text-muted-dark-green/60 hover:text-muted-dark-green'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-soft-sage/20 p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex items-center bg-white rounded-xl border border-soft-sage/25 px-4 py-2 flex-1 shadow-inner max-w-md">
          <input 
            type="text" 
            placeholder="Search brands or founders..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-xs text-muted-dark-green placeholder:text-muted-dark-green/30"
          />
          <Search className="w-3.5 h-3.5 text-muted-dark-green/45 shrink-0" />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Category Filter */}
          <div className="relative flex items-center bg-white rounded-xl border border-soft-sage/25 px-3 py-2 shadow-inner">
            <Tag className="w-3.5 h-3.5 text-muted-dark-green/45 mr-2" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-transparent border-none outline-none text-xs text-muted-dark-green font-medium cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
              ))}
            </select>
          </div>

          {/* Storefront Status Filter */}
          <div className="relative flex items-center bg-white rounded-xl border border-soft-sage/25 px-3 py-2 shadow-inner">
            <ShoppingBag className="w-3.5 h-3.5 text-muted-dark-green/45 mr-2" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent border-none outline-none text-xs text-muted-dark-green font-medium cursor-pointer"
            >
              {statuses.map(st => (
                <option key={st} value={st}>{st === 'All' ? 'All Storefronts' : st}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Brand Listing View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.length === 0 ? (
            <div className="col-span-full text-center py-16 bg-white/70 rounded-3xl border border-soft-sage/20 text-muted-dark-green/50 italic">
              No brands found matching the filter criteria.
            </div>
          ) : (
            filteredBrands.map((brand) => {
              const percentage = getProgressPercentage(brand);
              return (
                <motion.div
                  key={brand.id}
                  whileHover={{ y: -6, boxShadow: '0 12px 25px -10px rgba(63, 111, 88, 0.12)' }}
                  onClick={() => handleOpenDetail(brand)}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-soft-sage/20 shadow-sm flex flex-col justify-between cursor-pointer hover:border-mint-green/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Header: Name and Status */}
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xl font-serif text-muted-dark-green font-bold group-hover:text-mint-green">
                          {brand.brandName}
                        </h3>
                        <p className="text-xs font-semibold text-muted-dark-green/50 mt-0.5">
                          Founder: {brand.founderName}
                        </p>
                      </div>
                      {getStorefrontPill(brand.storefrontStatus)}
                    </div>

                    {/* Meta fields */}
                    <div className="space-y-2 pt-2 border-t border-soft-sage/10 text-xs">
                      <div className="flex items-center gap-2 text-muted-dark-green/70">
                        <Tag className="w-3.5 h-3.5 text-mint-green shrink-0" />
                        <span>Category: {brand.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-dark-green/70">
                        <Calendar className="w-3.5 h-3.5 text-mint-green shrink-0" />
                        <span>Joined Bloom: {brand.joinDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-dark-green/70">
                        <ShoppingBag className="w-3.5 h-3.5 text-mint-green shrink-0" />
                        <span>{brand.productCount} Incubation Products</span>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-xs font-semibold text-muted-dark-green/70">
                        <span>Incubation Progress</span>
                        <span>{percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-light-mint/70 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-mint-green rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex justify-between items-center text-xs">
                    <span className="text-muted-dark-green/45 italic truncate max-w-[150px]">
                      {brand.contactEmail}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDetail(brand);
                      }}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-light-mint text-mint-green border border-mint-green/10 font-bold hover:bg-mint-green hover:text-white transition-all cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      Manage
                    </button>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      ) : (
        /* List View */
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-soft-sage/20 shadow-sm overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-soft-sage/10 bg-light-mint/10 text-muted-dark-green/60 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Brand Name</th>
                  <th className="py-4 px-4">Founder</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Storefront Status</th>
                  <th className="py-4 px-4">Joined Date</th>
                  <th className="py-4 px-4 text-center">Products</th>
                  <th className="py-4 px-6 text-center">Progress</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-soft-sage/10 text-sm">
                {filteredBrands.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="py-12 text-center text-muted-dark-green/40 italic">
                      No brands found matching the criteria.
                    </td>
                  </tr>
                ) : (
                  filteredBrands.map((brand) => {
                    const percentage = getProgressPercentage(brand);
                    return (
                      <tr 
                        key={brand.id}
                        onClick={() => handleOpenDetail(brand)}
                        className="group hover:bg-light-mint/5 transition-colors cursor-pointer"
                      >
                        <td className="py-4.5 px-6 font-bold text-muted-dark-green group-hover:text-mint-green transition-colors">
                          {brand.brandName}
                        </td>
                        <td className="py-4.5 px-4 text-muted-dark-green/80">{brand.founderName}</td>
                        <td className="py-4.5 px-4 text-xs font-medium text-muted-dark-green/65">{brand.category}</td>
                        <td className="py-4.5 px-4">{getStorefrontPill(brand.storefrontStatus)}</td>
                        <td className="py-4.5 px-4 text-xs text-muted-dark-green/50">{brand.joinDate}</td>
                        <td className="py-4.5 px-4 text-center font-semibold text-muted-dark-green">{brand.productCount}</td>
                        <td className="py-4.5 px-6">
                          <div className="flex items-center gap-2 min-w-[100px]">
                            <div className="flex-1 h-1.5 bg-light-mint/70 rounded-full overflow-hidden">
                              <div className="h-full bg-mint-green" style={{ width: `${percentage}%` }} />
                            </div>
                            <span className="text-xs font-bold text-muted-dark-green">{percentage}%</span>
                          </div>
                        </td>
                        <td className="py-4.5 px-6 text-center" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => handleOpenDetail(brand)}
                            className="p-1.5 rounded-lg bg-white border border-soft-sage/30 text-muted-dark-green hover:border-mint-green hover:bg-light-mint/20 active:scale-95 transition-all cursor-pointer"
                          >
                            <Eye className="w-4 h-4" />
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
      )}

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

export default AdminBrands;
