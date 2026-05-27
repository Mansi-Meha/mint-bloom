import React from 'react';

const OverView = () => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h2 className="text-3xl font-serif text-muted-dark-green">Overview</h2>
        <p className="text-muted-dark-green/60 font-medium mt-1">A quick look at your business activity</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Total Products', value: '24', change: '+3 this month' },
          { label: 'Profile Views', value: '1,284', change: '+18% this week' },
          { label: 'Enquiries', value: '56', change: '+7 new' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-soft-sage/20 shadow-sm">
            <p className="text-sm text-muted-dark-green/60 font-medium uppercase tracking-widest mb-2">{stat.label}</p>
            <p className="text-4xl font-serif text-muted-dark-green">{stat.value}</p>
            <p className="text-xs text-mint-green font-semibold mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-soft-sage/20 shadow-sm">
        <h3 className="text-lg font-semibold text-muted-dark-green mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New enquiry received', time: '2 hours ago' },
            { action: 'Product "Silk Scarf" was viewed 12 times', time: 'Yesterday' },
            { action: 'Profile updated successfully', time: '3 days ago' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-soft-sage/10 last:border-0">
              <p className="text-sm text-muted-dark-green font-medium">{item.action}</p>
              <p className="text-xs text-muted-dark-green/50">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
