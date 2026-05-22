import React, { useEffect } from 'react';

interface CookwiseDetailsProps {
  onBack: () => void;
}

export const CookwiseDetails: React.FC<CookwiseDetailsProps> = ({ onBack }) => {
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
            CookWise: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Digital Cooking Learning Platform</span>
          </h1>
          <p className="text-2xl text-slate-600 font-light tracking-wide border-l-4 border-orange-500 pl-6 py-2">
            Transforming cooking into an interactive cognitive learning process.
          </p>
        </header>

        {/* Video Embed */}
        <div className="w-full rounded-[40px] overflow-hidden mb-24 shadow-2xl border border-white/50 reveal active hover-3d" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/1188587135?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&muted=1"
            title="CookWise"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        <div className="space-y-16">
          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-orange-600 mb-6 font-bold flex items-center gap-4">
               Overview
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              CookWise is an educational and engaging digital cooking learning platform designed for middle school students. Its design goal is to support students' abstract thinking, creativity, and decision-making abilities by transforming cooking into an interactive cognitive learning process.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Grounded in our synthetic theoretical framework, CookWise situates cooking within an everyday context, where learners coordinate ingredients, flavors, timing, steps, tools, and expected outcomes while continuously planning, updating, and adjusting their actions. In this environment, students do not simply follow recipes; instead, they make predictions, test choices, observe outcomes, and adjust strategies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light mt-6">
              By presenting cooking in a digital format, the system provides students with a safe and low-cost space for repeated experimentation, helping them move from concrete cooking operations toward deeper relational understanding and adaptive problem-solving.
            </p>
          </section>

          <section className="glass-card p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-orange-600 mb-8 font-bold">
               Design Structure
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              The design is organized around a learning loop of <strong className="text-slate-900">“perceptual input → strategy selection → action practice → evaluation and reflection,”</strong> structuring the cooking learning process into four stages and forming a complete pathway from experiential input to decision making, and then to practical operation and cognitive feedback.
            </p>

            <div className="space-y-12 relative pl-8 md:pl-0">
               <div className="hidden md:block absolute left-[27px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-orange-300 to-transparent"></div>

               <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm z-10 relative shrink-0 font-black text-xl">
                        1
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Exploration Input</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                    <p className="text-slate-600 font-light leading-relaxed">
                      First, learning begins from real-world contexts. Users record ingredients by taking photos or uploading images. The system recognizes the images and automatically generates ingredient cards, including names and attribute information. At the same time, users can summarize in their own words or draw simple sketches to reinforce their understanding of ingredient characteristics.
                    </p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm z-10 relative shrink-0 font-black text-xl">
                        2
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Mode Selection</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                    <p className="text-slate-600 font-light leading-relaxed">
                      Second, the system guides users into the mode selection stage. Users can choose different modes based on their own needs.
                    </p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm z-10 relative shrink-0 font-black text-xl">
                        3
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Action Path</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                      <h4 className="text-orange-600 font-bold mb-2 tracking-wider uppercase text-sm">Recipe Mode</h4>
                      <p className="text-slate-600 font-light leading-relaxed">
                        Users operate based on recipes or AI-generated steps, completing tasks under clear structural guidance, emphasizing the establishment of sequence, process, and fundamental logic.
                      </p>
                    </div>
                    <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                      <h4 className="text-orange-600 font-bold mb-2 tracking-wider uppercase text-sm">Free Mode</h4>
                      <p className="text-slate-600 font-light leading-relaxed">
                        Users independently select ingredients and perform combinations and operations without immediate guidance, emphasizing exploration of variables and reasoning about relationships.
                      </p>
                    </div>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  <div className="md:w-1/3 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shadow-sm z-10 relative shrink-0 font-black text-xl">
                        4
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Evaluation & Reflection</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm hover-3d">
                    <p className="text-slate-600 font-light leading-relaxed mb-4">
                      All actions ultimately enter the evaluation and reflection stage. The system analyzes the user's complete operation process, including dimensions such as step sequence, variable combinations, and operational logic, and generates structured feedback.
                    </p>
                    <p className="text-slate-600 font-light leading-relaxed mb-4 border-l-4 border-orange-300 pl-4">
                      The feedback does not focus on simple correctness but rather points out the differences between results and expectations and explains how these differences are caused by specific operations and variable relationships.
                    </p>
                    <p className="text-slate-600 font-light leading-relaxed">
                      Learners reflect on the differences between results and expectations, thereby experiencing cognitive conflict and adjusting their prior understanding. This stage transforms concrete experience into interpretable structural relationships, promoting the internalization and transfer of knowledge.
                    </p>
                  </div>
               </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
