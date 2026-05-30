import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag, User, BarChart2, ChevronRight,
  Package, Tag, Eye, TrendingUp, Zap
} from 'lucide-react';

const OverView = () => {
  const [stats, setStats] = useState({
    total: 3,
    active: 2,
    inactive: 1,
    channels: 3,
    businessName: 'Flora & Linen',
  });

  useEffect(() => {
    // Load products
    const savedProducts = localStorage.getItem('mb_brand_catalogue');
    let total = 3, active = 2, inactive = 1, channels = 3;

    if (savedProducts) {
      try {
        const parsed = JSON.parse(savedProducts);
        if (Array.isArray(parsed)) {
          total = parsed.length;
          active = parsed.filter(p => p.status === 'Active').length;
          inactive = parsed.filter(p => p.status === 'Inactive').length;
          const allPlatforms = new Set(
            parsed.flatMap(p => (p.buyLinks || []).map(l => l.platform))
          );
          channels = allPlatforms.size || channels;
        }
      } catch (e) {
        console.error(e);
      }
    }

    // Load profile name
    let businessName = 'Flora & Linen';
    const savedProfile = localStorage.getItem('mb_profile_data');
    if (savedProfile) {
      try {
        const profile = JSON.parse(savedProfile);
        if (profile.businessName) businessName = profile.businessName;
      } catch (e) {
        console.error(e);
      }
    }

    setStats({ total, active, inactive, channels, businessName });
  }, []);

  const statCards = [
    {
      label: 'Total Products',
      value: stats.total,
      sub: `${stats.active} active · ${stats.inactive} inactive`,
      icon: <Package className="w-5 h-5" />,
      color: 'text-mint-green bg-light-mint border-mint-green/20',
    },
    {
      label: 'Buy Channels',
      value: stats.channels,
      sub: 'Shopify, Etsy & more',
      icon: <Tag className="w-5 h-5" />,
      color: 'text-[#7C664C] bg-[#FBF8F3] border-[#EAD5BA]',
    },
    {
      label: 'Profile Views',
      value: '1,284',
      sub: '+18% this week',
      icon: <Eye className="w-5 h-5" />,
      color: 'text-[#4A6475] bg-[#F5F8FA] border-[#D0DFE8]',
    },
  ];

  const quickActions = [
    { label: 'Manage Catalogue', to: '/dashboard/products', icon: <ShoppingBag className="w-4 h-4" /> },
    { label: 'Edit Profile', to: '/dashboard/profile', icon: <User className="w-4 h-4" /> },
    { label: 'View Storefront', onClick: () => window.open(`/discover?brand=${encodeURIComponent(stats.businessName)}`, '_blank'), icon: <Eye className="w-4 h-4" /> },
    { label: 'View Analytics', to: '#', icon: <BarChart2 className="w-4 h-4" /> },
  ];

  const recentActivity = [
    { action: `Storefront for "${stats.businessName}" is live`, time: 'Just now', dot: 'bg-mint-green' },
    { action: 'New enquiry received from a buyer', time: '5 hours ago', dot: 'bg-mint-green' },
    { action: `Product "Silk Scarf" was viewed 12 times`, time: 'Yesterday', dot: 'bg-soft-sage' },
    { action: 'Profile updated successfully', time: '3 days ago', dot: 'bg-soft-sage/60' },
  ];

  return (
    <div className="flex flex-col gap-6 p-8 font-primary">

      {/* ── Header ── */}
      <div>
        <h2 className="text-3xl font-serif text-muted-dark-green">Overview</h2>
        <p className="text-muted-dark-green/60 font-medium mt-1 text-sm">
          Welcome back — here's a snapshot of <span className="font-semibold text-muted-dark-green">{stats.businessName}</span>
        </p>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {statCards.map(s => (
          <div key={s.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-soft-sage/20 shadow-sm flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${s.color}`}>
              {s.icon}
            </div>
            <div>
              <p className="text-[10px] font-bold text-muted-dark-green/45 uppercase tracking-widest">{s.label}</p>
              <p className="text-3xl font-serif text-muted-dark-green leading-none mt-1">{s.value}</p>
              <p className="text-[11px] text-muted-dark-green/50 font-medium mt-1">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Quick Actions ── */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-soft-sage/20 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-mint-green" />
          <h3 className="text-sm font-bold text-muted-dark-green uppercase tracking-widest">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickActions.map((action, i) => (
            action.onClick ? (
              <button
                key={i}
                onClick={action.onClick}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-soft-sage/20 bg-warm-white hover:bg-light-mint/30 hover:border-mint-green/25 transition-all text-center group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-mint-green/10 text-mint-green flex items-center justify-center group-hover:bg-mint-green group-hover:text-white transition-all">
                  {action.icon}
                </span>
                <span className="text-xs font-semibold text-muted-dark-green/70 group-hover:text-muted-dark-green leading-tight">{action.label}</span>
              </button>
            ) : (
              <Link
                key={i}
                to={action.to}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-soft-sage/20 bg-warm-white hover:bg-light-mint/30 hover:border-mint-green/25 transition-all text-center group"
              >
                <span className="w-8 h-8 rounded-full bg-mint-green/10 text-mint-green flex items-center justify-center group-hover:bg-mint-green group-hover:text-white transition-all">
                  {action.icon}
                </span>
                <span className="text-xs font-semibold text-muted-dark-green/70 group-hover:text-muted-dark-green leading-tight">{action.label}</span>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* ── Bottom two-col: Incubation Progress + Recent Activity ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Incubation Stepper */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-soft-sage/20 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-mint-green" />
            <h3 className="text-sm font-bold text-muted-dark-green uppercase tracking-widest">Incubation Progress</h3>
          </div>
          <div className="flex flex-col">
            {[
              { label: 'Branding',         sub: 'Identity & visuals',   status: 'Completed' },
              { label: 'Packaging',         sub: 'Materials & print',    status: 'Completed' },
              { label: 'Digital Marketing', sub: 'Campaigns & launch',   status: 'Pending' },
            ].map((step, idx, arr) => {
              const done = step.status === 'Completed';
              const isLast = idx === arr.length - 1;
              return (
                <div key={idx}>
                  <div className="w-full flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-sm border-2 transition-all ${
                      done ? 'bg-mint-green border-mint-green text-white shadow-md shadow-mint-green/20' : 'bg-white border-soft-sage/50 text-muted-dark-green/40'
                    }`}>
                      {done
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        : <span className="text-xs">{idx + 1}</span>
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${done ? 'text-muted-dark-green' : 'text-muted-dark-green/45'}`}>{step.label}</p>
                      <p className="text-[10px] text-muted-dark-green/35 mt-0.5">{step.sub}</p>
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border shrink-0 ${
                      done ? 'bg-light-mint text-mint-green border-mint-green/20' : 'bg-gray-50 text-gray-400 border-gray-200'
                    }`}>
                      {done ? '✓ Done' : 'Pending'}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="flex gap-3 py-0.5">
                      <div className="w-9 flex justify-center shrink-0">
                        <div className={`w-0.5 h-6 rounded-full ${done ? 'bg-mint-green/40' : 'bg-soft-sage/20'}`} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-soft-sage/20 shadow-sm">
          <h3 className="text-sm font-bold text-muted-dark-green uppercase tracking-widest mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-muted-dark-green leading-snug">{item.action}</p>
                  <p className="text-[10px] text-muted-dark-green/40 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverView;
