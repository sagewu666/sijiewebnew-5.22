import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onViewProject?: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onViewProject }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const isYouTube = (url?: string) => url?.includes('youtube') || url?.includes('embed') || url?.includes('shorts');
  const isVimeo = (url?: string) => url?.includes('vimeo');

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:embed\/|v\/|watch\?v=|youtu\.be\/|shorts\/)([^#&?]*)/);
    return (match && match[1].length === 11) ? match[1] : null;
  };

  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(?:video\/|)(\d+)/);
    return (match && match[1]) ? match[1] : null;
  };

  const getEmbedUrl = (url: string) => {
    if (isYouTube(url)) {
      const id = getYouTubeId(url);
      return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : url;
    }
    if (isVimeo(url)) {
      const id = getVimeoId(url);
      return id ? `https://player.vimeo.com/video/${id}?autoplay=1&badge=0&autopause=0` : url;
    }
    return url;
  };

  // Filter categories with solid indicators
  const categories = [
    { id: 'all', label: 'All Projects', activeStyle: 'bg-white text-slate-900 shadow-xs border-slate-300' },
    { id: 'video', label: 'Instructional Video', activeStyle: 'bg-sky-200 text-sky-950 shadow-xs border-sky-400' },
    { id: 'interactive', label: 'Interactive & AI', activeStyle: 'bg-purple-200 text-purple-950 shadow-xs border-purple-400' },
    { id: 'pedagogy', label: 'Curriculum & Systems', activeStyle: 'bg-emerald-200 text-emerald-950 shadow-xs border-emerald-400' }
  ];

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'video') return p.category.toLowerCase().includes('video') || p.id === 'nyc-dof-cca';
    if (filter === 'interactive') return p.category.toLowerCase().includes('platform') || p.category.toLowerCase().includes('engine') || p.id === 'memory-sphere' || p.id === 'learning-synapse';
    if (filter === 'pedagogy') return p.category.toLowerCase().includes('educational') || p.category.toLowerCase().includes('instructional') || p.id === 'snap-story' || p.id === 'cookwise' || p.id === 'ai-workplace';
    return true;
  });

  return (
    <div className="w-full">
      {/* Header and Filter Controls */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10 pb-6 border-b border-sky-200/80">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-900 bg-sky-100 border border-sky-300 rounded-full px-3.5 py-1 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
            Portfolio Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Selected Works
          </h2>
          <p className="text-slate-600 text-base max-w-xl font-normal mt-2 leading-relaxed">
            Instructional systems, multimodal media, and interactive learning prototypes designed for measurable impact.
          </p>
        </div>

        {/* Filter Tabs - Single contiguous pill bar that hugs its content and never wraps awkwardly */}
        <div className="inline-flex flex-nowrap items-center gap-1.5 p-1 bg-white rounded-xl border border-sky-200 shadow-2xs self-start xl:self-end overflow-x-auto max-w-full">
          {categories.map((c) => {
            const isActive = filter === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all border whitespace-nowrap shrink-0 ${
                  isActive
                    ? `${c.activeStyle}`
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid - Solid White Cards on Pastel Sky Blue Background */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          return (
            <div 
              key={project.id} 
              className="flex flex-col bg-white border border-sky-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-200 group"
            >
              {/* Media Player / Cover Frame (16:9) */}
              <div className="relative w-full aspect-video bg-slate-900 overflow-hidden border-b border-slate-100">
                {playingId === project.id && project.videoUrl ? (
                  <div className="absolute inset-0 w-full h-full bg-black z-10">
                    {isYouTube(project.videoUrl) || isVimeo(project.videoUrl) ? (
                      <iframe
                        className="w-full h-full"
                        src={getEmbedUrl(project.videoUrl)}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video 
                        src={project.videoUrl} 
                        autoPlay 
                        controls 
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    )}
                    <button 
                      onClick={() => setPlayingId(null)}
                      className="absolute top-2.5 right-2.5 z-20 bg-slate-900/90 hover:bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors"
                    >
                      Close Video
                    </button>
                  </div>
                ) : (
                  <div 
                    className={`w-full h-full relative ${project.videoUrl ? 'cursor-pointer' : ''}`}
                    onClick={() => project.videoUrl && setPlayingId(project.id)}
                  >
                    {project.placeholderImg ? (
                      <img 
                        src={project.placeholderImg} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">
                        Media Preview
                      </div>
                    )}

                    {/* Dark gradient overlay for cover legibility */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-60 group-hover:opacity-30 transition-opacity"></div>

                    {/* Play button overlay if video exists */}
                    {project.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white text-slate-800 shadow-xs border border-slate-200">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {(project.role || project.period) ? (
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1.5">
                      <span>{project.role}</span>
                      <span>{project.period}</span>
                    </div>
                  ) : null}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags and Action CTAs */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(project.tech || project.technologies || []).slice(0, 4).map((tItem, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-medium bg-slate-50 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-md"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    {project.videoUrl && (
                      <button
                        onClick={() => setPlayingId(project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Watch Video</span>
                      </button>
                    )}

                    {onViewProject && (
                      <button
                        onClick={() => onViewProject(project.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-700 ml-auto cursor-pointer"
                      >
                        <span>{project.id === 'nyc-dof-cca' ? '5 Videos & Case Study' : 'Case Study'}</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};