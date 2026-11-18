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
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
          Skills &amp; Toolkit
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Methodologies */}
        <div className="p-7 md:p-8 rounded-2xl bg-white border border-purple-200/90 shadow-xs hover:border-purple-300 transition-all">
          <div className="mb-6 pb-4 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Instructional Design &amp; Pedagogy</h3>
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

        {/* Digital Tools & Technologies */}
        <div className="p-7 md:p-8 rounded-2xl bg-white border border-purple-200/90 shadow-xs hover:border-purple-300 transition-all">
          <div className="mb-6 pb-4 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Tools, Platforms &amp; Code</h3>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
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
      </div>
    </div>
  );
};