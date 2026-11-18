import React, { useEffect, useState, useRef } from 'react';

interface DofDetailsProps {
  onBack: () => void;
}

interface DofVideo {
  id: string;
  number: string;
  title: string;
  topic: string;
  summary: string;
  url: string;
  thumbnail: string;
  fallbackThumbnail: string;
}

const DOF_VIDEOS: DofVideo[] = [
  {
    id: 'No4ZcYjFO00',
    number: '01',
    title: 'Overview of the Online Filing Process for the Cooperative and Condominium Property Tax Abatement',
    topic: 'Filing Overview',
    summary: 'Introduces eligibility milestones, required documentation, and the end-to-end CCA online submission workflow.',
    url: 'https://youtu.be/No4ZcYjFO00?si=hGacXLUg5ZkDqMV7',
    thumbnail: 'https://i.ytimg.com/vi/No4ZcYjFO00/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/No4ZcYjFO00/hqdefault.jpg'
  },
  {
    id: 'jVOfuIJJ9l8',
    number: '02',
    title: 'Creating an NYC.ID',
    topic: 'Account Setup',
    summary: 'Step-by-step walkthrough for registering and verifying an NYC.ID account to access Department of Finance online portals.',
    url: 'https://youtu.be/jVOfuIJJ9l8?si=LBZq6-snxP6Feqfp',
    thumbnail: 'https://i.ytimg.com/vi/jVOfuIJJ9l8/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/jVOfuIJJ9l8/hqdefault.jpg'
  },
  {
    id: 'W00ogGEMXT4',
    number: '03',
    title: 'Submitting a Managing Agent and Self-Managed Authorization Form for the Coop and Condo Tax Abatement',
    topic: 'Authorization Form',
    summary: 'Guides boards and managing agents through completing and submitting digital authorization permissions accurately.',
    url: 'https://youtu.be/W00ogGEMXT4?si=rSH1Yh6EZZ_T0NFH',
    thumbnail: 'https://i.ytimg.com/vi/W00ogGEMXT4/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/W00ogGEMXT4/hqdefault.jpg'
  },
  {
    id: 'dnaRzFw78mA',
    number: '04',
    title: 'Instructions for Submitting a Mailing Address Update for the Coop and Condo Property Tax Abatement',
    topic: 'Mailing Address Update',
    summary: 'Demonstrates how property owners and agents submit official mailing address changes within the CCA portal.',
    url: 'https://youtu.be/dnaRzFw78mA?si=lJAehvq5sOLCWaOG',
    thumbnail: 'https://i.ytimg.com/vi/dnaRzFw78mA/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/dnaRzFw78mA/hqdefault.jpg'
  },
  {
    id: 'u4mTfisattg',
    number: '05',
    title: 'Learn How to Update the Owner Names on Your Property Using a Property Owner Name Update Request',
    topic: 'Owner Name Update',
    summary: 'Walks applicants through submitting a Property Owner Name Update Request to ensure accurate ownership records.',
    url: 'https://youtu.be/u4mTfisattg?si=qxl8OhfWtB2cH-iJ',
    thumbnail: 'https://i.ytimg.com/vi/u4mTfisattg/maxresdefault.jpg',
    fallbackThumbnail: 'https://i.ytimg.com/vi/u4mTfisattg/hqdefault.jpg'
  }
];

export const DofDetails: React.FC<DofDetailsProps> = ({ onBack }) => {
  const [activeVideo, setActiveVideo] = useState<DofVideo>(DOF_VIDEOS[0]);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const playerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectVideo = (video: DofVideo) => {
    setActiveVideo(video);
    setShouldAutoplay(true);
    if (playerRef.current) {
      const yOffset = -88;
      const y = playerRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-sky-50/50 text-slate-900 py-12 md:py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-sky-800 hover:text-sky-950 bg-white border border-sky-200 hover:border-sky-300 px-4 py-2 rounded-lg shadow-2xs mb-10 transition-all cursor-pointer"
        >
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Portfolio</span>
        </button>

        {/* Project Header */}
        <header className="bg-white rounded-2xl border border-sky-200/90 shadow-xs p-8 md:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-sky-900 bg-sky-100 border border-sky-300 rounded-full px-3.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
              Public Sector Instructional Media
            </span>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
              06/2026 – 08/2026 · New York, NY
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight mb-4">
            NYC Department of Finance: <br />
            <span className="text-sky-700">Cooperative &amp; Condominium Abatement (CCA) Video Series</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed border-l-4 border-sky-500 pl-5 py-1 mb-8">
            Developed a public-facing instructional video series to guide property owners and managing agents through the Cooperative and Condominium Abatement (CCA) online filing process.
          </p>

          {/* Key Metadata Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Role</div>
              <div className="text-sm font-bold text-slate-900">PEA Summer Graduate Intern</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Public Videos</div>
              <div className="text-sm font-bold text-slate-900">5 Published on YouTube</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Production Scale</div>
              <div className="text-sm font-bold text-slate-900">30+ Scripts · 3 Internal Videos</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Standardization</div>
              <div className="text-sm font-bold text-slate-900">DOF Video Style Guide</div>
            </div>
          </div>
        </header>

        {/* Featured Video Player */}
        <section ref={playerRef} className="bg-white rounded-2xl border border-sky-200/90 shadow-xs p-6 md:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                Featured Player · Video {activeVideo.number} of 05 · {activeVideo.topic}
              </div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                {activeVideo.title}
              </h2>
            </div>
            <a
              href={activeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-900 hover:bg-sky-700 px-4 py-2.5 rounded-lg transition-colors shrink-0 self-start sm:self-center"
            >
              <span>Watch on YouTube</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-200 shadow-sm">
            <iframe
              key={`${activeVideo.id}-${shouldAutoplay ? 'play' : 'idle'}`}
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?${shouldAutoplay ? 'autoplay=1&' : ''}rel=0&modestbranding=1`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-sm text-slate-600 mt-4 leading-relaxed">
            {activeVideo.summary}
          </p>
        </section>

        {/* All 5 Instructional Videos Gallery with Preview Thumbnails & Links */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
            <div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
                Public-Facing Instructional Video Series (5 Videos)
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Select any module below to preview it in the player above or open the official NYC Department of Finance YouTube video.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOF_VIDEOS.map((video) => {
              const isSelected = activeVideo.id === video.id;
              return (
                <div
                  key={video.id}
                  className={`flex flex-col bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                    isSelected
                      ? 'border-sky-500 ring-2 ring-sky-200 shadow-md'
                      : 'border-sky-200/90 shadow-xs hover:border-sky-400 hover:shadow-md'
                  }`}
                >
                  {/* Video Thumbnail Preview */}
                  <button
                    type="button"
                    onClick={() => handleSelectVideo(video)}
                    className="relative w-full aspect-video bg-slate-900 overflow-hidden group cursor-pointer text-left"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== video.fallbackThumbnail) {
                          target.src = video.fallbackThumbnail;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-950/35 group-hover:bg-slate-950/20 transition-colors"></div>

                    {/* Episode Badge */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border shadow-2xs ${
                          isSelected
                            ? 'bg-sky-600 text-white border-sky-500'
                            : 'bg-white text-slate-900 border-slate-200'
                        }`}
                      >
                        Video {video.number}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-900/85 text-white">
                        {video.topic}
                      </span>
                    </div>

                    {/* Center Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110 ${
                          isSelected
                            ? 'bg-sky-600 text-white'
                            : 'bg-white text-slate-900 group-hover:bg-sky-600 group-hover:text-white'
                        }`}
                      >
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {video.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleSelectVideo(video)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>{isSelected ? 'Playing Above' : 'Play Preview'}</span>
                      </button>

                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-sky-700"
                      >
                        <span>YouTube Link</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Project Overview, Production & Impact */}
        <section className="bg-white rounded-2xl border border-sky-200/90 shadow-xs p-8 md:p-10">
          <h2 className="text-2xl font-bold font-heading text-slate-900 tracking-tight mb-2">
            Project Overview &amp; Instructional Contributions
          </h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            End-to-end instructional design, scriptwriting, cross-functional review, and production leadership at the New York City Department of Finance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                01 · Learner-Centered Content Design
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Designed learner-centered instructional content that transformed complex tax policies and digital workflows into clear, accessible learning experiences.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                02 · Video Production &amp; Style Guide
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Led the development of 5 public-facing instructional videos and 3 internal training videos, authored 30+ scripts, and created a Video Style Guide to standardize visual design and production workflows.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                03 · SME &amp; Leadership Collaboration
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Collaborated with subject matter experts (SMEs), a graphic designer, and DOF leadership through multiple review cycles to gather requirements, incorporate feedback, and ensure content accuracy, consistency, and policy compliance.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-800 mb-2">
                04 · Mentorship &amp; Supervision
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Mentored and supervised a high school intern by assigning production tasks, providing constructive feedback, and supporting the development of high-quality instructional videos.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
