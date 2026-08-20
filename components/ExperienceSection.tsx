import React from 'react';
import { Experience } from '../types';

interface ExperienceProps { items: Experience[]; }

export const ExperienceSection: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-emerald-600 font-black text-[10px] tracking-[0.6em] uppercase mb-4 block">Fieldwork</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-wide text-slate-900 mb-4 leading-tight drop-shadow-sm title-reveal">
            Educational <br /> Practice & <span className="text-emerald-600">Research.</span>
          </h2>
          <p className="text-slate-600 text-lg font-light max-w-sm tracking-wide">
            Translating evidence-based pedagogical theories into high-impact digital learning tools.
          </p>
        </div>
        
        <div className="lg:col-span-8 space-y-10">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-emerald-100 shadow-sm p-8 md:p-12 rounded-[40px] hover:shadow-2xl transition-all duration-700 group hover-3d  ">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8">
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors tracking-wide">{item.role}</h4>
                  <p className="text-emerald-600 font-bold tracking-wider mt-1">{item.organization}</p>
                </div>
                {(item.period || item.location) && (
                  <div className="flex flex-col items-start md:items-end shrink-0">
                    {item.period && <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap">{item.period}</span>}
                    {item.location && <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 whitespace-nowrap">{item.location}</span>}
                  </div>
                )}
              </div>
              <div className="space-y-4">
                {item.points.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0 animate-pulse"></span>
                    <p className="text-base text-slate-600 font-medium leading-relaxed tracking-wide">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
              
              {item.videoUrl && (
                <div className="mt-8 relative group cursor-pointer overflow-hidden rounded-3xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-500">
                  <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                    <img 
                      src={`https://img.youtube.com/vi/${item.videoUrl.match(/v=([^&]+)/)?.[1] || 'jVOfuIJJ9l8'}/maxresdefault.jpg`} 
                      alt="Video Cover" 
                      className="w-full h-auto object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80   rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300">
                        <svg className="w-8 h-8 text-emerald-600 group-hover:text-slate-900 translate-x-0.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              )}
              
              {(item.tools || item.platform) && (
                <div className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-emerald-100">
                  {item.tools && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tools</span>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((t, i) => (
                          <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {item.platform && (
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Platform</span>
                      <div className="flex flex-wrap gap-2">
                        {item.platform.map((p, i) => (
                          <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-teal-50 text-teal-600 border border-teal-200 font-bold">{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};