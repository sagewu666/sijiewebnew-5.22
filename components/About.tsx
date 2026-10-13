import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-300 rounded-full px-3.5 py-1 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          Pedagogical Philosophy
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight mb-3">
          Bridging Learning Science &amp; Digital Media
        </h2>
        <p className="text-slate-600 text-base max-w-2xl font-normal leading-relaxed">
          How evidence-centered design and learner empathy guide my instructional architecture.
        </p>
      </div>

      {/* Main Philosophy Card - Solid White Card on Clean Slate Section */}
      <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
        <div className="max-w-3xl space-y-4 text-base text-slate-700 leading-relaxed">
          <p>
            As a Master’s candidate in <strong className="text-slate-900 font-semibold">Instructional Technology &amp; Media at Columbia University</strong>, I focus on transforming abstract or complex subject matter into clear, intuitive, and measurable learning pathways.
          </p>
          <p>
            Whether authoring public-facing instructional video series for the <strong className="text-slate-900 font-semibold">New York City Department of Finance</strong>, supporting graduate-level interactive media programming classes as a <strong className="text-slate-900 font-semibold">Course Assistant</strong>, or designing gesture-based learning platforms, my approach centers on eliminating extraneous cognitive load so learners can focus on deep conceptual understanding.
          </p>
        </div>
      </div>

      {/* 3 Core Principles - Clean Solid White Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Principle 01 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs border border-blue-200 mb-4">
            01
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">Cognitive Scaffolding</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Structuring modular learning sequences with progressive disclosure, lowering barriers to entry while supporting rigorous skill mastery.
          </p>
        </div>

        {/* Principle 02 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs border border-emerald-200 mb-4">
            02
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">Multimodal Learning</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Integrating visual storytelling, clear video pacing, and interactive touchpoints to reinforce knowledge retention across diverse learner profiles.
          </p>
        </div>

        {/* Principle 03 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-purple-300 transition-all">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-800 flex items-center justify-center font-bold text-xs border border-purple-200 mb-4">
            03
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-2">Accessibility &amp; Empathy</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Engineering learning experiences compliant with Universal Design for Learning (UDL) and WCAG 2.1 AA standards, ensuring equity for every learner.
          </p>
        </div>
      </div>
    </div>
  );
};