import React, { useEffect } from 'react';

interface MemorySphereDetailsProps {
  onBack: () => void;
}

export const MemorySphereDetails: React.FC<MemorySphereDetailsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="relative z-50 group flex items-center gap-3 text-blue-600 font-bold tracking-[0.2em] uppercase mb-12 hover:text-blue-800 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Portfolio
        </button>

        <header className="mb-16 reveal active">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full glass-card text-[11px] font-black tracking-[0.4em] text-blue-600 uppercase border border-blue-500/30">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight mb-6 drop-shadow-xl text-slate-900">
            MemorySphere: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Travel Memory & Place Exploration</span>
          </h1>
          <p className="text-2xl text-slate-600 font-light tracking-wide border-l-4 border-blue-500 pl-6 py-2">
            A Gesture Based Interactive Platform for Travel Memory
          </p>
        </header>

        {/* Video Embed */}
        <div className="w-full rounded-[40px] overflow-hidden mb-24 shadow-2xl border border-white/50 reveal active hover-3d" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/1190294766?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1"
            title="MemorySphere"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <div className="space-y-16">
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-6 font-bold flex items-center gap-4">
               Problem Space and Rationale
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              This project explores the computational representation of travel memories through a globe-based interactive web experience. While linear albums and social media timelines offer storage, they often fail to support spatial reflection, emotional recollection, or embodied re-engagement with past experiences.
            </p>
            <p className="text-lg text-slate-900 leading-relaxed font-semibold">
              How can travel memories be modeled as an interactive, spatial, and embodied system?
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light mt-4">
              MemorySphere investigates how geolocated images, user-written reflections, and gesture-based interaction combine to transform fragmented travel records into a spatial, reflective narrative system, integrating location, image, and narrative into a cohesive format.
            </p>
          </section>

          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-6 font-bold">
               Background Research
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
              Research in autobiographical memory emphasizes that meaningful remembering requires active organization and interpretation, not just passive data storage (Hutmacher et al., 2023). Vivid visual imagery has been strongly linked to the feeling of "reliving" an experience (Greenberg and Knowlton, 2014).
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Furthermore, embodied cognition suggests that physical interaction—such as gestures—can enhance cognitive engagement (Alibali and Nathan, 2018). Existing systems frequently separate spatial exploration (e.g., Google Earth) from personal narrative (e.g., photo albums). Addressing this gap informed the core interactive structure of MemorySphere.
            </p>
          </section>

          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-6 font-bold">
               Product & Computational Concepts
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              The platform centers on a 3D globe built via Google AI Studio. Users navigate spatially using hand gestures or a mouse, interacting with highlighted locations to access multimedia memory content representing specific travel experiences. Memories are modeled as structured data objects combining <strong>Location, Image, Text, and Time</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">State Transitions</h3>
                <p className="text-slate-600 font-light">The UI dynamically shifts between a macroscopic globe view, individual memory cards, and overarching travel summaries.</p>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Event-Driven Control</h3>
                <p className="text-slate-600 font-light">Interactions like rotation or gestures trigger specific display updates, revealing travel logs or aggregated summaries.</p>
              </div>
              <div className="md:col-span-2 bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Embodied Interaction & Mapping</h3>
                <p className="text-slate-600 font-light">Memories are geolocated on the 3D globe. Physical gestures (such as rotating the globe or making a heart sign) serve as meaningful inputs to access and interact with the mapped data.</p>
              </div>
            </div>
          </section>

          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-6 font-bold">
               Task Analysis & UX Goals
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-slate-600 font-light text-lg">
              <li><strong>Exploration:</strong> Rotate intuitively to discover and highlight locations.</li>
              <li><strong>Creation:</strong> Upload media, auto-map via coordinates, attach narratives, and log contextual metadata.</li>
              <li><strong>Interaction:</strong> Browse spatial memory collections using structured hand gestures.</li>
              <li><strong>Evaluation:</strong> Ensure the interface balances complexity directly against usability to foster narrative building without friction.</li>
            </ul>
          </section>

          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-blue-600 mb-6 font-bold">
               Evaluation & Iteration
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              Initial user testing highlighted the necessity of refining interaction models to minimize ambiguity and improve access. Iterative improvements included:
            </p>
            <ul className="space-y-4 mb-6">
               <li className="flex gap-4">
                  <span className="text-blue-500 font-bold mt-1">1.</span>
                  <p className="text-slate-600 font-light"><strong>Gesture Refinement:</strong> Similar inputs caused recognition errors. Overlapping controls were replaced with distinct hand signs (e.g., using a heart shape for travel logs), alongside a one-second recognition delay to boost input accuracy.</p>
               </li>
               <li className="flex gap-4">
                  <span className="text-blue-500 font-bold mt-1">2.</span>
                  <p className="text-slate-600 font-light"><strong>Accessibility:</strong> Implemented a "My Collection" panel, a visual instruction guide mapping gestures to functions, and a classic mouse-input fallback ("My Memory") for broader usability.</p>
               </li>
               <li className="flex gap-4">
                  <span className="text-blue-500 font-bold mt-1">3.</span>
                  <p className="text-slate-600 font-light"><strong>Contextual Depth:</strong> Integrated Google Maps links to tie virtual exploration back to real-world navigation, alongside searchable metadata options for people and dates.</p>
               </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
