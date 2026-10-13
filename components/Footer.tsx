import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 px-6 md:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-heading font-bold text-sm flex items-center justify-center">
                SW
              </span>
              <span className="text-xl font-bold font-heading text-white">Sijie Wu</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Instructional Designer &amp; Learning Experience Technologist. Master’s candidate at Teachers College, Columbia University.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:sagewu415@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors border border-slate-700"
            >
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>sagewu415@gmail.com</span>
            </a>
            <a
              href="http://linkedin.com/in/sijie-w-2020b738b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <span>LinkedIn Profile</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Sijie Wu. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>New York, NY</span>
            <span>·</span>
            <span>Teachers College, Columbia University</span>
          </div>
        </div>
      </div>
    </footer>
  );
};