import React, { useState, useEffect } from 'react';
import { getBrandsData, updateBrand, getProgressPercentage } from '../../data/adminMockData';
import BrandDetailModal from './BrandDetailModal';
import { AlertCircle, ArrowRight, CheckSquare, Layers, Tag, Eye, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminTracker = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePhase, setActivePhase] = useState('branding'); // branding, packaging, marketing
  const [viewType, setViewType] = useState('kanban'); // kanban vs table

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

  // Group brands by status for the active phase
  const getPhaseStatus = (brand, phase) => {
    if (phase === 'branding') return brand.brandingStatus || 'Pending';
    if (phase === 'packaging') return brand.packagingStatus || 'Pending';
    if (phase === 'marketing') return brand.digitalMarketingStatus || 'Pending';
    return 'Pending';
  };

  const columns = ['Pending', 'In Progress', 'Review', 'Completed'];

  const getColColor = (col) => {
    switch (col) {
      case 'Completed': return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-800';
      case 'Review': return 'bg-amber-500/10 border-amber-500/20 text-amber-800';
      case 'In Progress': return 'bg-blue-500/10 border-blue-500/20 text-blue-800';
      case 'Pending':
      default: return 'bg-gray-500/10 border-gray-500/20 text-gray-700';
    }
  };

  return (
    <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto font-primary pb-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-serif text-muted-dark-green">Workflow Progress Tracker</h2>
          <p className="text-muted-dark-green/60 font-medium mt-1">Operational view of branding design, packaging lines and launching efforts</p>
        </div>
        
        {/* Toggle Kanban vs Table */}
        <div className="flex items-center gap-2 bg-white rounded-xl border border-soft-sage/20 p-1 self-start shadow-sm text-xs font-semibold">
          <button 
            onClick={() => setViewType('kanban')}
            className={`px-3 py-2 rounded-lg cursor-pointer transition-colors ${viewType === 'kanban' ? 'bg-light-mint text-mint-green' : 'text-muted-dark-green/60 hover:text-muted-dark-green'}`}
          >
            Kanban Board
          </button>
          <button 
            onClick={() => setViewType('table')}
            className={`px-3 py-2 rounded-lg cursor-pointer transition-colors ${viewType === 'table' ? 'bg-light-mint text-mint-green' : 'text-muted-dark-green/60 hover:text-muted-dark-green'}`}
          >
            Tabular Matrix
          </button>
        </div>
      </div>

      {/* Kanban Navigation Tabs */}
      {viewType === 'kanban' && (
        <div className="flex bg-white/70 border border-soft-sage/15 p-1 rounded-2xl max-w-md shadow-sm gap-2">
          {[
            { id: 'branding', label: '1. Branding Status' },
            { id: 'packaging', label: '2. Packaging Line' },
            { id: 'marketing', label: '3. Digital Launch' }
          ].map(phase => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activePhase === phase.id
                  ? 'bg-mint-green text-white shadow-sm shadow-mint-green/10'
                  : 'text-muted-dark-green/65 hover:text-muted-dark-green hover:bg-light-mint/35'
              }`}
            >
              {phase.label}
            </button>
          ))}
        </div>
      )}

      {/* Views */}
      {viewType === 'kanban' ? (
        /* Kanban Board View */
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {columns.map(col => {
            const colBrands = brands.filter(b => getPhaseStatus(b, activePhase) === col);
            return (
              <div 
                key={col}
                className="flex flex-col bg-white/40 backdrop-blur-sm rounded-3xl border border-soft-sage/15 p-4 min-h-[450px]"
              >
                {/* Column Title Header */}
                <div className="flex items-center justify-between mb-4 px-2">
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-lg border ${getColColor(col)}`}>
                    {col}
                  </span>
                  <span className="text-xs font-bold text-muted-dark-green/40">
                    {colBrands.length}
                  </span>
                </div>

                {/* Column Cards Container */}
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto max-h-[500px] pr-1">
                  {colBrands.length === 0 ? (
                    <div className="flex-1 border-2 border-dashed border-soft-sage/15 rounded-2xl flex items-center justify-center p-6 text-center text-xs text-muted-dark-green/35 italic">
                      No brands in this phase
                    </div>
                  ) : (
                    colBrands.map(brand => {
                      const percentage = getProgressPercentage(brand);
                      const completedTasks = brand.checklist?.filter(c => c.completed).length || 0;
                      const totalTasks = brand.checklist?.length || 0;

                      return (
                        <motion.div
                          key={brand.id}
                          whileHover={{ scale: 1.02, y: -2, boxShadow: '0 8px 16px -6px rgba(63, 111, 88, 0.1)' }}
                          onClick={() => handleOpenDetail(brand)}
                          className="bg-white rounded-2xl p-4.5 border border-soft-sage/15 shadow-sm hover:border-mint-green/30 transition-all cursor-pointer space-y-3"
                        >
                          <div>
                            <span className="text-[10px] text-mint-green font-bold bg-light-mint px-2 py-0.5 rounded-md border border-mint-green/10">
                              {brand.category}
                            </span>
                            <h4 className="font-bold text-muted-dark-green mt-2 text-base">
                              {brand.brandName}
                            </h4>
                            <p className="text-xs text-muted-dark-green/55">
                              Founder: {brand.founderName}
                            </p>
                          </div>

                          {/* Progress bar */}
                          <div className="space-y-1">
                            <div className="flex justify-between items-center text-[10px] text-muted-dark-green/60">
                              <span className="flex items-center gap-1">
                                <CheckSquare className="w-3 h-3 text-mint-green" />
                                {completedTasks}/{totalTasks} tasks
                              </span>
                              <span className="font-bold">{percentage}%</span>
                            </div>
                            <div className="w-full h-1 bg-light-mint/70 rounded-full overflow-hidden">
                              <div className="h-full bg-mint-green" style={{ width: `${percentage}%` }} />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Matrix Tabular View */
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-soft-sage/20 shadow-sm overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-soft-sage/10 bg-light-mint/10 text-muted-dark-green/60 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Brand Name</th>
                  <th className="py-4 px-4">Branding Phase</th>
                  <th className="py-4 px-4">Packaging Line</th>
                  <th className="py-4 px-4">Digital Marketing</th>
                  <th className="py-4 px-6 text-center">Incubation Completion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-soft-sage/10 text-sm">
                {brands.map((brand) => {
                  const percentage = getProgressPercentage(brand);
                  return (
                    <tr 
                      key={brand.id}
                      onClick={() => handleOpenDetail(brand)}
                      className="hover:bg-light-mint/5 transition-colors cursor-pointer"
                    >
                      <td className="py-4.5 px-6 font-bold text-muted-dark-green">{brand.brandName}</td>
                      <td className="py-4.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          brand.brandingStatus === 'Completed' ? 'bg-light-mint text-muted-dark-green' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {brand.brandingStatus}
                        </span>
                      </td>
                      <td className="py-4.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          brand.packagingStatus === 'Completed' ? 'bg-light-mint text-muted-dark-green' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {brand.packagingStatus}
                        </span>
                      </td>
                      <td className="py-4.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                          brand.digitalMarketingStatus === 'Completed' ? 'bg-light-mint text-muted-dark-green' : 'bg-gray-100 text-gray-500'
                        }`}>
                          {brand.digitalMarketingStatus}
                        </span>
                      </td>
                      <td className="py-4.5 px-6">
                        <div className="flex items-center gap-3 justify-center max-w-[200px] mx-auto">
                          <div className="flex-1 h-1.5 bg-light-mint/70 rounded-full overflow-hidden">
                            <div className="h-full bg-mint-green" style={{ width: `${percentage}%` }} />
                          </div>
                          <span className="text-xs font-bold text-muted-dark-green">{percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
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

export default AdminTracker;
