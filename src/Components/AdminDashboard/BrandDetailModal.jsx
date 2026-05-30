import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Mail, Phone, Tag, CheckSquare, Plus, FileText, Upload, Check, Paintbrush, Package, Megaphone } from 'lucide-react';
import { getProgressPercentage } from '../../data/adminMockData';

const BrandDetailModal = ({ brand, isOpen, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState('overview'); // overview, checklist, activity
  const [brandingStatus, setBrandingStatus] = useState('');
  const [packagingStatus, setPackagingStatus] = useState('');
  const [digitalMarketingStatus, setDigitalMarketingStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [checklist, setChecklist] = useState([]);
  const [newCheckItem, setNewCheckItem] = useState('');
  const [timeline, setTimeline] = useState([]);
  const [newActivity, setNewActivity] = useState('');
  const [mockups, setMockups] = useState([]);
  const [newMockupName, setNewMockupName] = useState('');

  useEffect(() => {
    if (brand) {
      setBrandingStatus(brand.brandingStatus || 'Pending');
      setPackagingStatus(brand.packagingStatus || 'Pending');
      setDigitalMarketingStatus(brand.digitalMarketingStatus || 'Pending');
      setNotes(brand.notes || '');
      setChecklist(brand.checklist || []);
      setTimeline(brand.timeline || []);
      setMockups(brand.mockups || []);
    }
  }, [brand]);

  if (!isOpen || !brand) return null;

  // Handle status updates and auto-calculate overall progress
  const handleStatusChange = (field, value) => {
    let updatedBrand = { ...brand };
    if (field === 'branding') {
      setBrandingStatus(value);
      updatedBrand.brandingStatus = value;
    } else if (field === 'packaging') {
      setPackagingStatus(value);
      updatedBrand.packagingStatus = value;
    } else if (field === 'marketing') {
      setDigitalMarketingStatus(value);
      updatedBrand.digitalMarketingStatus = value;
    }
    
    // Add timeline entry for progress change
    const newAction = `${field.charAt(0).toUpperCase() + field.slice(1)} status updated to ${value}`;
    const dateStr = new Date().toISOString().split('T')[0];
    const updatedTimeline = [{ action: newAction, date: dateStr }, ...timeline];
    setTimeline(updatedTimeline);
    updatedBrand.timeline = updatedTimeline;

    updatedBrand.checklist = checklist;
    updatedBrand.notes = notes;
    updatedBrand.mockups = mockups;
    onSave(updatedBrand);
  };

  // Toggle checklist items
  const handleToggleChecklist = (id) => {
    const updated = checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setChecklist(updated);
    
    const updatedBrand = {
      ...brand,
      brandingStatus,
      packagingStatus,
      digitalMarketingStatus,
      notes,
      checklist: updated,
      timeline,
      mockups
    };
    onSave(updatedBrand);
  };

  // Add new checklist item
  const handleAddCheckItem = (e) => {
    e.preventDefault();
    if (!newCheckItem.trim()) return;

    const newItem = {
      id: `${brand.id}-${Date.now()}`,
      text: newCheckItem.trim(),
      completed: false
    };

    const updated = [...checklist, newItem];
    setChecklist(updated);
    setNewCheckItem('');

    const updatedBrand = {
      ...brand,
      brandingStatus,
      packagingStatus,
      digitalMarketingStatus,
      notes,
      checklist: updated,
      timeline,
      mockups
    };
    onSave(updatedBrand);
  };

  // Add custom activity to timeline
  const handleAddActivity = (e) => {
    e.preventDefault();
    if (!newActivity.trim()) return;

    const dateStr = new Date().toISOString().split('T')[0];
    const updated = [{ action: newActivity.trim(), date: dateStr }, ...timeline];
    setTimeline(updated);
    setNewActivity('');

    const updatedBrand = {
      ...brand,
      brandingStatus,
      packagingStatus,
      digitalMarketingStatus,
      notes,
      checklist,
      timeline: updated,
      mockups
    };
    onSave(updatedBrand);
  };

  // Save notes
  const handleNotesBlur = () => {
    const updatedBrand = {
      ...brand,
      brandingStatus,
      packagingStatus,
      digitalMarketingStatus,
      notes,
      checklist,
      timeline,
      mockups
    };
    onSave(updatedBrand);
  };

  // Simulate mockup upload
  const handleMockupUpload = (e) => {
    e.preventDefault();
    if (!newMockupName.trim()) return;

    const updated = [...mockups, newMockupName.trim()];
    setMockups(updated);
    setNewMockupName('');

    const updatedBrand = {
      ...brand,
      brandingStatus,
      packagingStatus,
      digitalMarketingStatus,
      notes,
      checklist,
      timeline,
      mockups: updated
    };
    onSave(updatedBrand);
  };




  const calculatedPercentage = getProgressPercentage({
    ...brand,
    brandingStatus,
    packagingStatus,
    digitalMarketingStatus,
    checklist
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-muted-dark-green/30 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-soft-sage/30 overflow-hidden z-10 flex flex-col max-h-[85vh] font-primary"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-soft-sage/10 bg-gradient-to-r from-light-mint/20 to-transparent">
            <div>
              <span className="px-3 py-1 text-xs font-semibold tracking-wider text-mint-green uppercase bg-light-mint rounded-full border border-mint-green/20">
                Incubation Profile
              </span>
              <h2 className="text-3xl font-serif text-muted-dark-green mt-2 flex items-center gap-3">
                {brand.brandName}
                <span className="text-lg font-primary font-normal text-muted-dark-green/60">
                  by {brand.founderName}
                </span>
              </h2>
              <p className="text-sm text-muted-dark-green/50 mt-1 flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" /> {brand.category}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white shadow-sm border border-soft-sage/20 text-muted-dark-green/70 hover:text-mint-green hover:bg-light-mint/20 active:scale-95 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Grid Layout */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            
            {/* Left Column: Brand Info & Status Dropdowns */}
            <div className="lg:col-span-1 space-y-6 flex flex-col">
              {/* Card: Brand Info */}
              <div className="bg-white/80 rounded-2xl p-5 border border-soft-sage/20 shadow-sm space-y-4">
                <h3 className="text-sm font-semibold text-muted-dark-green uppercase tracking-wider">
                  Contact & Meta
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-muted-dark-green/80">
                    <Calendar className="w-4 h-4 text-mint-green shrink-0" />
                    <span>Joined: {brand.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-dark-green/80">
                    <Mail className="w-4 h-4 text-mint-green shrink-0" />
                    <a href={`mailto:${brand.contactEmail}`} className="hover:text-mint-green hover:underline truncate">
                      {brand.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-dark-green/80">
                    <Phone className="w-4 h-4 text-mint-green shrink-0" />
                    <span>{brand.contactPhone}</span>
                  </div>
                </div>
              </div>

              {/* Card: Milestone Phase Stepper */}
              <div className="bg-white/80 rounded-2xl p-5 border border-soft-sage/20 shadow-sm space-y-5">
                <h3 className="text-sm font-semibold text-muted-dark-green uppercase tracking-wider">
                  Incubation Phases
                </h3>

                {/* Form-style vertical stepper */}
                <div className="flex flex-col">
                  {[
                    { field: 'branding',  label: 'Branding',         sub: 'Identity & visuals',   status: brandingStatus },
                    { field: 'packaging', label: 'Packaging',         sub: 'Materials & print',    status: packagingStatus },
                    { field: 'marketing', label: 'Digital Marketing', sub: 'Campaigns & launch',   status: digitalMarketingStatus },
                  ].map((step, idx, arr) => {
                    const done = step.status === 'Completed';
                    const isLast = idx === arr.length - 1;
                    // Connector is green when THIS step is done (path to next is lit)
                    const connectorGreen = done;

                    return (
                      <div key={step.field}>
                        {/* Step row — click anywhere to toggle */}
                        <button
                          onClick={() => handleStatusChange(step.field, done ? 'Pending' : 'Completed')}
                          className="w-full flex items-center gap-4 text-left group cursor-pointer focus:outline-none"
                        >
                          {/* Step circle */}
                          <div className={`relative w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-all duration-300 border-2 ${
                            done
                              ? 'bg-mint-green border-mint-green text-white shadow-lg shadow-mint-green/25'
                              : 'bg-white border-soft-sage/60 text-muted-dark-green/50 group-hover:border-mint-green/50 group-hover:text-mint-green/70'
                          }`}>
                            {done
                              ? <Check className="w-5 h-5" strokeWidth={2.5} />
                              : <span>{idx + 1}</span>
                            }
                          </div>

                          {/* Step label */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold leading-tight transition-colors ${
                              done ? 'text-muted-dark-green' : 'text-muted-dark-green/55 group-hover:text-muted-dark-green/80'
                            }`}>
                              {step.label}
                            </p>
                            <p className="text-[10px] text-muted-dark-green/38 mt-0.5">{step.sub}</p>
                          </div>

                          {/* Badge */}
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0 border transition-all duration-300 ${
                            done
                              ? 'bg-light-mint text-mint-green border-mint-green/20'
                              : 'bg-gray-50 text-gray-400 border-gray-200'
                          }`}>
                            {done ? '✓ Done' : 'Pending'}
                          </span>
                        </button>

                        {/* Connector line between steps */}
                        {!isLast && (
                          <div className="flex gap-4 items-stretch py-0.5">
                            {/* Aligns with circle centre */}
                            <div className="w-10 flex justify-center shrink-0">
                              <div className={`w-0.5 h-7 rounded-full transition-all duration-500 ${
                                connectorGreen ? 'bg-mint-green/50' : 'bg-soft-sage/25'
                              }`} />
                            </div>
                            <div />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Summary Card */}
              <div className="bg-light-mint/30 rounded-2xl p-5 border border-mint-green/20 shadow-sm flex flex-col justify-between items-center text-center">
                <div className="w-full flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-muted-dark-green/60 uppercase">Incubation Score</span>
                  <span className="text-xs font-bold text-mint-green">{calculatedPercentage}%</span>
                </div>
                
                {/* Circular indicator */}
                <div className="relative w-28 h-28 flex items-center justify-center mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="#E8F5EE" strokeWidth="8" fill="transparent" />
                    <circle 
                      cx="56" cy="56" r="48" stroke="#6BAF92" strokeWidth="8" fill="transparent"
                      strokeDasharray={301.6}
                      strokeDashoffset={301.6 - (301.6 * calculatedPercentage) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  <span className="absolute text-2xl font-serif font-bold text-muted-dark-green">
                    {calculatedPercentage}%
                  </span>
                </div>
                <p className="text-xs text-muted-dark-green/75 italic">
                  Overall progress based on tasks & milestone statuses
                </p>
              </div>
            </div>

            {/* Right Columns: Tabs for Overview, Checklist & Timeline */}
            <div className="lg:col-span-2 space-y-6 flex flex-col">
              {/* Tab Navigation */}
              <div className="flex border-b border-soft-sage/20 gap-6">
                {[
                  { id: 'overview', label: 'Incubation Log' },
                  { id: 'checklist', label: 'Milestone Checklist' },
                  { id: 'activity', label: 'Timeline & History' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-sm font-semibold tracking-wide transition-all border-b-2 cursor-pointer ${
                      activeTab === tab.id
                        ? 'border-mint-green text-mint-green'
                        : 'border-transparent text-muted-dark-green/50 hover:text-muted-dark-green/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="flex-1 min-h-[350px]">
                {activeTab === 'overview' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Notes Section */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-muted-dark-green uppercase tracking-wider">
                        Operational Notes & Strategy
                      </h3>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        onBlur={handleNotesBlur}
                        placeholder="Write brand notes, creative directives or incubation milestones here..."
                        className="w-full h-44 p-4 rounded-2xl bg-white border border-soft-sage/20 focus:border-mint-green focus:ring-4 focus:ring-mint-green/5 outline-none transition-all duration-300 text-sm text-muted-dark-green/90 leading-relaxed resize-none shadow-sm placeholder:text-muted-dark-green/30"
                      />
                      <p className="text-[11px] text-muted-dark-green/40 text-right">
                        Click outside the box to autosave changes.
                      </p>
                    </div>

                    {/* Reference Mockups Section */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-muted-dark-green uppercase tracking-wider">
                        Incubation Reference Mockups
                      </h3>
                      
                      {/* Grid of mockups */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {mockups.map((m, i) => (
                          <div 
                            key={i} 
                            className="bg-light-mint/20 rounded-xl p-3 border border-soft-sage/10 shadow-sm flex items-center gap-3 group hover:border-mint-green/30 transition-colors"
                          >
                            <FileText className="w-5 h-5 text-mint-green shrink-0" />
                            <span className="text-xs font-medium text-muted-dark-green truncate" title={m}>
                              {m}
                            </span>
                          </div>
                        ))}

                        {/* Upload Simulator Input */}
                        <form onSubmit={handleMockupUpload} className="col-span-2 sm:col-span-3 flex gap-2 mt-2">
                          <input
                            type="text"
                            placeholder="Add reference file name (e.g. logo_v2.png)..."
                            value={newMockupName}
                            onChange={(e) => setNewMockupName(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-xl bg-white border border-soft-sage/20 outline-none text-xs text-muted-dark-green focus:border-mint-green focus:ring-2 focus:ring-mint-green/5"
                          />
                          <button
                            type="submit"
                            className="px-4 py-2 rounded-xl bg-mint-green text-white text-xs font-semibold hover:bg-muted-dark-green transition-colors flex items-center gap-1.5 cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" /> Attach
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'checklist' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-muted-dark-green uppercase tracking-wider">
                        Tasks checklist progress
                      </h3>
                      <span className="text-xs font-semibold text-muted-dark-green/60">
                        {checklist.filter(c => c.completed).length} / {checklist.length} Completed
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-light-mint rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-mint-green rounded-full transition-all duration-500"
                        style={{ 
                          width: `${checklist.length > 0 
                            ? (checklist.filter(c => c.completed).length / checklist.length) * 100 
                            : 0}%` 
                        }}
                      />
                    </div>

                    {/* Checklist Items list */}
                    <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                      {checklist.length === 0 ? (
                        <div className="text-center py-6 text-sm text-muted-dark-green/40 italic">
                          No checklists added yet.
                        </div>
                      ) : (
                        checklist.map((item) => (
                          <label 
                            key={item.id}
                            className={`flex items-center gap-3 p-3.5 rounded-xl border border-soft-sage/10 bg-white/70 shadow-sm cursor-pointer hover:border-mint-green/30 transition-all ${
                              item.completed ? 'opacity-65' : ''
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={item.completed}
                              onChange={() => handleToggleChecklist(item.id)}
                              className="peer sr-only"
                            />
                            <div className="w-5 h-5 rounded-md border border-soft-sage bg-white flex items-center justify-center peer-checked:bg-mint-green peer-checked:border-mint-green transition-colors shrink-0">
                              {item.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                            </div>
                            <span className={`text-sm text-muted-dark-green/80 select-none ${
                              item.completed ? 'line-through text-muted-dark-green/40' : ''
                            }`}>
                              {item.text}
                            </span>
                          </label>
                        ))
                      )}
                    </div>

                    {/* Add checklist form */}
                    <form onSubmit={handleAddCheckItem} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add new brand task milestone..."
                        value={newCheckItem}
                        onChange={(e) => setNewCheckItem(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-white border border-soft-sage/20 outline-none text-sm text-muted-dark-green focus:border-mint-green focus:ring-4 focus:ring-mint-green/5"
                      />
                      <button
                        type="submit"
                        className="px-5 py-3 rounded-xl bg-mint-green text-white font-semibold text-sm hover:bg-muted-dark-green hover:shadow-md transition-all flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" /> Add Task
                      </button>
                    </form>
                  </div>
                )}

                {activeTab === 'activity' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <h3 className="text-sm font-semibold text-muted-dark-green uppercase tracking-wider">
                      Incubation History
                    </h3>

                    {/* Vertical Timeline UI */}
                    <div className="relative pl-6 space-y-6 max-h-[220px] overflow-y-auto pr-1">
                      {/* Vertical line connector */}
                      <div className="absolute left-2.5 top-2 bottom-2 w-[1.5px] bg-soft-sage/40" />

                      {timeline.length === 0 ? (
                        <div className="text-center py-6 text-sm text-muted-dark-green/40 italic">
                          No history logged.
                        </div>
                      ) : (
                        timeline.map((act, i) => (
                          <div key={i} className="relative flex items-start gap-4">
                            {/* Dot */}
                            <div className="absolute -left-[20.5px] w-2.5 h-2.5 rounded-full bg-mint-green border-2 border-white ring-4 ring-light-mint shadow-sm" />
                            
                            <div className="flex-1 bg-white/60 rounded-xl p-3 border border-soft-sage/10 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                              <span className="text-sm font-medium text-muted-dark-green">
                                {act.action}
                              </span>
                              <span className="text-xs text-muted-dark-green/45 whitespace-nowrap">
                                {act.date}
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Add timeline activity form */}
                    <form onSubmit={handleAddActivity} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Log custom incubation event (e.g. Packaging completed)..."
                        value={newActivity}
                        onChange={(e) => setNewActivity(e.target.value)}
                        className="flex-1 px-4 py-3 rounded-xl bg-white border border-soft-sage/20 outline-none text-sm text-muted-dark-green focus:border-mint-green focus:ring-4 focus:ring-mint-green/5"
                      />
                      <button
                        type="submit"
                        className="px-5 py-3 rounded-xl bg-mint-green text-white font-semibold text-sm hover:bg-muted-dark-green transition-all flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" /> Log Event
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BrandDetailModal;
