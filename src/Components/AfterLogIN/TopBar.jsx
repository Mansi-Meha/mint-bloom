import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, Zap, Plus, FileText, RefreshCw, ShieldCheck, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import MintBloomLogo from '../../assets/LandingPageImg/MintBloomLogo.png';

const ADMIN_QUICK_ACTIONS = [
  { icon: <Plus className="w-4 h-4" />, label: 'Onboard New Brand', to: '/admin/brands' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Review Progress Updates', to: '/admin/tracker' },
  { icon: <ShieldCheck className="w-4 h-4" />, label: 'Approve Storefronts', to: '/admin/storefronts' },
  { icon: <FileText className="w-4 h-4" />, label: 'Curate Products', to: '/admin/products' },
];

const ADMIN_NOTIFICATIONS = [
  { text: 'Clay & Herb storefront awaiting review', time: '10 min ago', unread: true },
  { text: 'Slow Brew Tea submitted packaging proofs', time: '1 hour ago', unread: true },
  { text: 'Midi Floral branding brief received', time: '3 hours ago', unread: false },
  { text: 'Bloom Botanics reached $50K milestone', time: 'Yesterday', unread: false },
];

const BRAND_NOTIFICATIONS = [
  { text: 'Your profile was viewed 24 times today', time: '2 hours ago', unread: true },
  { text: 'New enquiry received from a buyer', time: '5 hours ago', unread: true },
  { text: 'Product "Silk Scarf" approved', time: 'Yesterday', unread: false },
];

const TopBar = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  const [showQuickActions, setShowQuickActions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(
    isAdminPath ? ADMIN_NOTIFICATIONS : BRAND_NOTIFICATIONS
  );

  const qaRef = useRef(null);
  const notifRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (qaRef.current && !qaRef.current.contains(e.target)) setShowQuickActions(false);
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  return (
    <div className="w-full flex items-center justify-between py-5 px-8 font-primary bg-transparent">

      {/* Left side: Logo and Context Title */}
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <img src={MintBloomLogo} alt="Mint Bloom" className="h-11 w-auto" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-brand text-muted-dark-green tracking-wide leading-none">
            mint bloom
          </h1>
          <p className="text-xs pt-1.5 font-primary text-muted-dark-green/55 font-medium tracking-wide">
            {isAdminPath
              ? '✦ Brand Incubation & Discovery Command'
              : 'Explore information and activity about your business'}
          </p>
        </div>

        {/* Admin badge pill */}
        {isAdminPath && (
          <span className="ml-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-light-mint text-mint-green rounded-full border border-mint-green/20 self-center">
            Admin
          </span>
        )}
      </div>

      {/* Right side: Search, Quick Actions (admin only), Notifications, Profile */}
      <div className="flex items-center gap-3">

        {/* Search Bar */}
        <div className="relative flex items-center bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-soft-sage/20 px-4 py-1.5 w-64 transition-all focus-within:ring-2 focus-within:ring-mint-green/20 focus-within:border-mint-green/30">
          <input
            type="text"
            placeholder={isAdminPath ? 'Search brands, founders…' : 'Search…'}
            className="flex-1 bg-transparent border-none outline-none text-sm text-muted-dark-green placeholder:text-muted-dark-green/35 py-2"
          />
          <button className="flex items-center justify-center w-7 h-7 rounded-full bg-muted-dark-green text-white hover:bg-mint-green transition-colors shrink-0 cursor-pointer">
            <Search className="w-3.5 h-3.5" strokeWidth={2} />
          </button>
        </div>

        {/* Quick Actions — Admin only */}
        {isAdminPath && (
          <div className="relative" ref={qaRef}>
            <button
              onClick={() => { setShowQuickActions(!showQuickActions); setShowNotifications(false); }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-mint-green text-white text-xs font-semibold shadow-sm shadow-mint-green/20 hover:bg-muted-dark-green transition-all active:scale-95 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2} />
              Quick Actions
              <ChevronDown className={`w-3 h-3 transition-transform ${showQuickActions ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown */}
            {showQuickActions && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-soft-sage/20 py-2 z-50 overflow-hidden">
                <p className="px-4 pt-1 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-dark-green/40">
                  Platform Actions
                </p>
                {ADMIN_QUICK_ACTIONS.map((action, i) => (
                  <Link
                    key={i}
                    to={action.to}
                    onClick={() => setShowQuickActions(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-muted-dark-green hover:bg-light-mint/40 hover:text-mint-green transition-colors"
                  >
                    <span className="text-mint-green">{action.icon}</span>
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Notifications Bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setShowNotifications(!showNotifications); setShowQuickActions(false); }}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-soft-sage/20 text-muted-dark-green hover:text-mint-green hover:border-mint-green/30 transition-all cursor-pointer"
          >
            <Bell className="w-4.5 h-4.5" strokeWidth={1.5} />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-mint-green rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-white">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-soft-sage/20 z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-soft-sage/10">
                <span className="text-sm font-bold text-muted-dark-green">Notifications</span>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="text-[10px] font-semibold text-mint-green hover:underline cursor-pointer"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-muted-dark-green/50 hover:text-muted-dark-green cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="divide-y divide-soft-sage/10 max-h-72 overflow-y-auto">
                {notifications.map((n, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 px-4 py-3 transition-colors ${n.unread ? 'bg-light-mint/10' : ''}`}
                  >
                    {/* Unread dot */}
                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${n.unread ? 'bg-mint-green' : 'bg-transparent'}`} />
                    <div className="flex-1">
                      <p className={`text-xs leading-snug ${n.unread ? 'font-semibold text-muted-dark-green' : 'font-medium text-muted-dark-green/60'}`}>
                        {n.text}
                      </p>
                      <p className="text-[10px] text-muted-dark-green/40 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Admin Profile Avatar */}
        <div className="flex items-center gap-2.5 bg-white/90 rounded-full px-3 py-1.5 border border-soft-sage/20 shadow-sm cursor-pointer hover:border-mint-green/30 transition-all">
          <div className="w-7 h-7 rounded-full bg-muted-dark-green text-white flex items-center justify-center text-xs font-bold shrink-0">
            {isAdminPath ? 'MA' : 'U'}
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs font-semibold text-muted-dark-green">
              {isAdminPath ? 'Mint Admin' : 'Brand Owner'}
            </span>
            <span className="text-[10px] text-muted-dark-green/45">
              {isAdminPath ? 'Platform Incubator' : 'Business Profile'}
            </span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-muted-dark-green/50 hidden sm:block" />
        </div>

      </div>
    </div>
  );
};

export default TopBar;
