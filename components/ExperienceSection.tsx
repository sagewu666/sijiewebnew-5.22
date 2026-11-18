import React from 'react';
import { Experience } from '../types';

interface ExperienceProps { 
  items: Experience[]; 
  onViewDof?: () => void;
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ items, onViewDof }) => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
          Professional Experience
        </h2>
      </div>

      {/* Experience Timeline - Solid white cards on solid pastel green background */}
      <div className="space-y-5">
        {items.map((item, idx) => {
          return (
            <div 
              key={idx} 
              className="p-6 md:p-8 rounded-2xl bg-white border border-emerald-200/90 shadow-xs hover:border-emerald-300 transition-all duration-200"
            >
              {/* Top Row: Role, Organization, Location, Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {item.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <span className="font-semibold text-slate-900">{item.organization}</span>
                    {item.location && (
                      <>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-500">{item.location}</span>
                      </>
                    )}
                  </div>
                </div>

                {item.period && (
                  <div className="text-xs font-bold rounded-md px-3 py-1 self-start whitespace-nowrap bg-slate-50 text-slate-800 border border-slate-200">
                    {item.period}
                  </div>
                )}
              </div>

              {/* Bullets */}
              <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {item.points.map((p, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" aria-hidden="true"></span>
                    <span className="flex-1">{p}</span>
                  </li>
                ))}
              </ul>

              {/* Video Showcase preview if available (NYC DOF) */}
              {item.videoUrl && (
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  {onViewDof ? (
                    <button
                      type="button"
                      onClick={onViewDof}
                      className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/80 border border-slate-200 hover:border-emerald-300 transition-all text-left text-xs font-semibold text-slate-800 hover:text-emerald-950 group shadow-2xs cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-emerald-950">View CCA Instructional Video Series (5 Videos &amp; Case Study)</div>
                        <div className="text-[11px] text-slate-600">Preview all 5 public-facing YouTube tutorials, thumbnails &amp; project overview</div>
                      </div>
                    </button>
                  ) : (
                    <a 
                      href={item.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-emerald-50/80 border border-slate-200 hover:border-emerald-300 transition-all text-xs font-semibold text-slate-800 hover:text-emerald-950 group shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-emerald-950">Watch Instructional Video Series (NYC DOF)</div>
                        <div className="text-[11px] text-slate-600">Public-facing CCA Tax Abatement guidance on YouTube · 5 Public &amp; 3 Internal Videos</div>
                      </div>
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};