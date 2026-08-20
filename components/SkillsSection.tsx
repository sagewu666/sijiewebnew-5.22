import React from 'react';

interface SkillsSectionProps {
  skills: string[];
  tools: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, tools }) => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <span className="text-violet-600 font-black text-[10px] tracking-[0.6em] uppercase mb-4 block">Capabilities</span>
        <h2 className="text-4xl md:text-6xl font-black font-heading tracking-wide text-slate-900 leading-tight drop-shadow-sm title-reveal">
          Expertise & <br/><span className="text-violet-600">Toolkit.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Skills Column */}
        <div className="bg-white border border-violet-100 shadow-sm p-10 rounded-[40px] hover:shadow-2xl transition-all duration-500 group flex flex-col justify-start hover-3d h-full">
          <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 border border-violet-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-wide">Core Skills</h3>
          </div>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
              {skills.map((skill, idx) => (
              <div key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0 animate-pulse"></span>
                  <p className="text-slate-600 font-medium text-lg leading-snug tracking-wide">{skill}</p>
              </div>
              ))}
          </div>
        </div>

        {/* Tools Column */}
        <div className="bg-white border border-violet-100 shadow-sm p-10 rounded-[40px] hover:shadow-2xl transition-all duration-500 group flex flex-col justify-start hover-3d h-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 border border-violet-200">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-wide">Digital Tools</h3>
          </div>
          
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {tools.map((tool, idx) => (
              <div key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0 animate-pulse"></span>
                  <p className="text-slate-600 font-medium text-lg leading-snug tracking-wide">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};