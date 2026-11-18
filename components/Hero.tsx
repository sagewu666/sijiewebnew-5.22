import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200 bg-white overflow-hidden">
      {/* Subtle fine geometric grid pattern for architectural precision - no blur, no gradients */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Institution Label */}
          <p className="text-xs font-semibold tracking-wide uppercase text-blue-700 mb-4">
            Teachers College, Columbia University · M.A. Candidate
          </p>

          {/* Headline - Solid crisp typography, zero gradient wash */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight text-slate-900 leading-[1.12] mb-6">
            Instructional Designer &amp; <br className="hidden sm:inline" />
            <span className="text-blue-700">
              Learning Experience
            </span> Technologist.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
            Bridging evidence-based pedagogy, cognitive scaffolding, and interactive media to build structured, intuitive, and measurable learning architectures.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Explore Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all shadow-xs cursor-pointer"
            >
              <span>View Experience</span>
            </button>
            <a
              href="mailto:sagewu415@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-700 px-3 py-2 transition-colors"
            >
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>sagewu415@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Credentials & Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
            <div className="text-sm font-bold text-slate-900">Columbia University M.A.</div>
            <div className="text-xs text-slate-600 mt-1">Instructional Technology &amp; Media · 4.0 GPA</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
            <div className="text-sm font-bold text-slate-900">Course Assistant</div>
            <div className="text-xs text-slate-600 mt-1">Interactive Media Lab · Student Mentorship</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
            <div className="text-sm font-bold text-slate-900">NYC Dept of Finance Intern</div>
            <div className="text-xs text-slate-600 mt-1">5 Public + 3 Internal Videos · Style Guide</div>
          </div>
        </div>
      </div>
    </div>
  );
};