import React, { useState, useEffect } from 'react';

interface NavbarProps { 
  activeSection: string; 
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills & Tools' },
    { id: 'about', label: 'About' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => scrollTo('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-slate-900 text-white font-heading font-bold text-base flex items-center justify-center transition-transform group-hover:scale-105">
            SW
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              Sijie Wu
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              Columbia University · Instructional Design
            </span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-lg border border-slate-200/60">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  isActive 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:sagewu415@gmail.com"
            className="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-md hover:bg-slate-100 transition-colors"
          >
            Contact
          </a>
          <a
            href="http://linkedin.com/in/sijie-w-2020b738b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold bg-slate-900 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-md transition-colors shadow-sm"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-fadeInDown">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id 
                    ? 'bg-blue-50 text-blue-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <a
                href="mailto:sagewu415@gmail.com"
                className="text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-2"
              >
                sagewu415@gmail.com
              </a>
              <a
                href="http://linkedin.com/in/sijie-w-2020b738b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold bg-slate-900 text-white px-3 py-1.5 rounded-md"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};