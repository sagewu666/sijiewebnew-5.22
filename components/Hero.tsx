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
          {/* Institution & Status Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200 rounded-full px-3.5 py-1 mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Teachers College, Columbia University · M.A. Candidate</span>
          </div>

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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all shadow-xs"
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

        {/* Credentials & Focus Grid - Clean solid containers, no blurry gradients */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200">
          {/* Card 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
            <div className="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Academic Training
            </div>
            <div className="text-sm font-bold text-slate-900">Columbia University M.A.</div>
            <div className="text-xs text-slate-600 mt-0.5">Instructional Technology &amp; Media · 4.0 GPA</div>
          </div>

          {/* Card 2 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-purple-300 transition-all">
            <div className="text-[11px] font-bold text-purple-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
              Course &amp; Lab Support
            </div>
            <div className="text-sm font-bold text-slate-900">Course Assistant</div>
            <div className="text-xs text-slate-600 mt-0.5">Interactive Media Lab · Student Mentorship</div>
          </div>

          {/* Card 3 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
            <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Fieldwork Impact
            </div>
            <div className="text-sm font-bold text-slate-900">NYC Dept of Finance Intern</div>
            <div className="text-xs text-slate-600 mt-0.5">5 Public + 3 Internal Videos · Style Guide</div>
          </div>
        </div>
      </div>
    </div>
  );
};