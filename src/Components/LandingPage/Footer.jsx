import React from 'react';
import logo from '../../assets/image.png';

/* ─── Social / Contact Icons ─── */

const EmailIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <rect x="2" y="4" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 7 L10 12 L18 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="14.5" cy="5.5" r="1.2" fill="currentColor" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Main Footer ─── */
const Footer = () => {
  return (
    <footer className="relative bg-[#2F5242] overflow-hidden">

      {/* ── Decorative top wave / curve ── */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[98%] pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#3F6F58" />
        </svg>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-6xl w-[90%] mx-auto relative z-10">

        {/* ── Top section: Brand + Social icons row ── */}
        <div className="pt-16 pb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-1 rounded-full backdrop-blur-sm">
                <img src={logo} alt="Mint Bloom" className="h-11 w-auto object-contain brightness-125" />
              </div>
              <span className="font-brand text-[2rem] text-white leading-none pt-1">
                Mint Bloom
              </span>
            </div>
            <p className="text-soft-sage/90 text-sm font-light text-center md:text-left max-w-xs leading-relaxed">
              Helping women turn everyday products into brands the world can discover.
            </p>
          </div>

          {/* Social icon circles */}
          <div className="flex items-center gap-4">
            {[
              { Icon: InstagramIcon, href: "https://instagram.com/mintbloom.in", label: "Instagram" },
              { Icon: WhatsAppIcon, href: "https://wa.me/919876543210", label: "WhatsApp" },
              { Icon: EmailIcon, href: "mailto:hello@mintbloom.in", label: "Email" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-11 h-11 rounded-full border border-soft-sage/90 flex items-center justify-center text-soft-sage/90 hover:text-mint-green hover:border-mint-green/40 hover:bg-mint-green/10 transition-all duration-300"
              >
                <item.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Middle: Links + Contact in columns ── */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center sm:text-left">

          {/* Column 1: Navigate */}
          <div className="space-y-4">
            <h4 className="text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">Navigate</h4>
            <ul className="space-y-2.5">
              {["Home", "How It Works", "Who It's For", "Apply Now"].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`} className="text-soft-sage/90 text-sm font-light hover:text-mint-green transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Reach Us */}
          <div className="space-y-4">
            <h4 className="text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">Reach Us</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@mintbloom.in" className="text-soft-sage/90 text-sm font-light hover:text-mint-green transition-colors duration-300">
                  hello@mintbloom.in
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" className="text-soft-sage/90 text-sm font-light hover:text-mint-green transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="https://instagram.com/mintbloom.in" target="_blank" rel="noopener noreferrer" className="text-soft-sage/90 text-sm font-light hover:text-mint-green transition-colors duration-300">
                  @mintbloom.in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Based In */}
          <div className="space-y-4">
            <h4 className="text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">Based In</h4>
            <p className="text-soft-sage/90 text-sm font-light leading-relaxed">
              Patna, Bihar<br />India 🇮🇳
            </p>
            <p className="text-soft-sage/90 text-xs font-light leading-relaxed">
              Starting local. Dreaming national.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-soft-sage/90 text-xs font-light">
            © 2026 Mint Bloom. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-soft-sage/90 text-xs font-light">
            <span>Crafted with</span>
            <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3 text-mint-green">
              <path d="M6 10 C6 10 1 7 1 4 C1 2 3 1 6 3.5 C9 1 11 2 11 4 C11 7 6 10 6 10Z" />
            </svg>
            <span>in Bihar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
