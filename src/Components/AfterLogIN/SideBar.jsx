import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, BarChart2, Users, Package, Settings, LogOut, CircleUser } from 'lucide-react';

const SideBar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Overview',
      icon: <BarChart2 className="w-5 h-5" strokeWidth={1.5} />,
      to: '/dashboard/overview',
    },
    {
      name: 'Profile Management',
      icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
      to: '/dashboard/profile',
    },
    {
      name: 'Product Catalogue',
      icon: <Package className="w-5 h-5" strokeWidth={1.5} />,
      to: '/dashboard/products',
    }
  ];

  const bottomItems = [
    {
      name: 'Settings',
      icon: <Settings className="w-5 h-5" strokeWidth={1.5} />,
      to: null,
    },
    {
      name: 'Logout',
      icon: <LogOut className="w-5 h-5" strokeWidth={1.5} />,
      to: '/',
    }
  ];

  const tooltipClass = "absolute left-full ml-4 px-3 py-2 bg-white rounded-lg shadow-md border border-soft-sage/20 text-sm font-medium text-muted-dark-green whitespace-nowrap opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-50";

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 h-[75vh] bg-white rounded-full shadow-lg border border-soft-sage/20 flex flex-col items-center py-6 z-50 font-primary w-20">
      {/* Top Logo / App Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted-dark-green text-white mb-8 shrink-0">
        <LayoutGrid className="w-6 h-6" strokeWidth={2} />
      </div>

      {/* Main Menu Items */}
      <div className="flex-1 w-full flex flex-col gap-6 mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`relative group flex items-center justify-center w-full transition-colors ${
              isActive(item.to)
                ? 'text-mint-green'
                : 'text-muted-dark-green hover:text-mint-green'
            }`}
          >
            {/* Active indicator dot */}
            {isActive(item.to) && (
              <span className="absolute left-2 w-1.5 h-1.5 rounded-full bg-mint-green"></span>
            )}
            <span className="shrink-0">{item.icon}</span>
            <span className={tooltipClass}>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="w-full flex flex-col gap-6 mb-6">
        {bottomItems.map((item, index) => {
          const content = (
            <>
              <span className="shrink-0">{item.icon}</span>
              <span className={tooltipClass}>{item.name}</span>
            </>
          );
          const cls = "relative group flex items-center justify-center w-full text-muted-dark-green hover:text-mint-green transition-colors";

          return item.to ? (
            <Link to={item.to} key={index} className={cls}>{content}</Link>
          ) : (
            <button key={index} className={cls}>{content}</button>
          );
        })}
      </div>

      {/* User Avatar */}
      <div className="mt-auto relative group flex justify-center w-full shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted-dark-green text-white shrink-0 hover:bg-mint-green transition-colors cursor-pointer">
          <CircleUser className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <div className={`${tooltipClass} flex-col items-start !px-4 !py-3`}>
          <span className="text-sm font-semibold text-muted-dark-green block">Mint User</span>
          <span className="text-xs text-muted-dark-green/60 block">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
