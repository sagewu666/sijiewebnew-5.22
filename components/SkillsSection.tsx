import React from 'react';

interface SkillsSectionProps {
  skills: string[];
  tools: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, tools }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-900 bg-purple-100 border border-purple-300 rounded-full px-3.5 py-1 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
          Core Competencies
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight mb-3">
          Skills &amp; Toolkit
        </h2>
        <p className="text-slate-600 text-base max-w-2xl font-normal leading-relaxed">
          A blend of evidence-centered instructional design methodologies, multimedia production workflows, and front-end interactive prototyping.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Methodologies - Solid White Card on Pastel Purple Background */}
        <div className="p-7 md:p-8 rounded-2xl bg-white border border-purple-200/90 shadow-xs hover:border-purple-300 transition-all">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-sm border border-purple-200">
              ID
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Instructional Design &amp; Pedagogy</h3>
              <p className="text-xs text-purple-800 font-medium">Evidence-based learning frameworks &amp; analysis</p>
            </div>
          </div>
          <div className="space-y-3.5">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                <span className="font-medium leading-relaxed">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Tools & Technologies - Solid White Card on Pastel Purple Background */}
        <div className="p-7 md:p-8 rounded-2xl bg-white border border-purple-200/90 shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-sm border border-purple-200">
                DT
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Tools, Platforms &amp; Code</h3>
                <p className="text-xs text-purple-800 font-medium">Authoring, prototyping, and media software</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2.5 mb-6">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-200/80 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-default shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Workflow Callout */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-slate-900 mb-1">Production Pipeline</div>
            <div className="text-xs text-slate-600 leading-relaxed">
              From storyboard and scriptwriting in Figma to multi-cam video editing in Adobe Premiere Pro, and interactive prototyping with modern web standards.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};