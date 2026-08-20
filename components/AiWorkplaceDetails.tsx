import React, { useEffect } from 'react';

interface AiWorkplaceDetailsProps {
  onBack: () => void;
}

export const AiWorkplaceDetails: React.FC<AiWorkplaceDetailsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="relative z-50 group flex items-center gap-3 text-emerald-600 font-bold tracking-[0.2em] uppercase mb-12 hover:text-emerald-800 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Portfolio
        </button>

        <header className="mb-16 reveal active">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-white border border-slate-200 shadow-sm text-[11px] font-black tracking-[0.4em] text-emerald-600 uppercase border border-emerald-500/30">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Instructional Design Module
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight mb-6 drop-shadow-xl text-slate-900">
            AI in the Workplace: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Introduction to AI</span>
          </h1>
          <p className="text-2xl text-slate-600 font-light tracking-wide border-l-4 border-emerald-500 pl-6 py-2 mb-8">
            An intentionally designed asynchronous learning module for working adults.
          </p>
          <a
            href="https://www.figma.com/make/sgOHMLNUpZfPcT97IxpgLm/AI-WORK?fullscreen=1&t=uXbSXn5zhSpa1NQp-1&code-node-id=0-9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold tracking-widest uppercase text-sm hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Figma Prototype
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </header>

        <div className="space-y-16">
          <section className="bg-white border border-slate-200 shadow-sm p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-emerald-600 mb-6 font-bold flex items-center gap-4">
               Why This Design Works
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              This module demonstrates instructional design thinking by centering learner needs, creating clear alignment between objectives and assessment, building confidence through scaffolding and low-stakes interaction, maintaining instructor presence in an asynchronous environment, and treating learners as capable adults with valuable experience to bring to new learning.
            </p>
          </section>

          <section className="bg-white border border-slate-200 shadow-sm p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-emerald-600 mb-6 font-bold">
               Learner-Centered Design
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
              The module is designed specifically for working adults aged 25-35 who are new to AI and balancing work with study. Every design choice reflects their needs for practical relevance, workplace value, and flexible learning.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
              Rather than starting with abstract AI theory, the module begins where learners already are—using digital tools in their daily work. This reduces anxiety and builds confidence by validating existing experience before introducing new concepts.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              By allowing examples from work, internships, school tasks, and everyday tools, the design creates inclusive entry points that respect diverse professional backgrounds.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <section className="bg-white border border-slate-200 shadow-sm p-10 rounded-[40px] border border-white/50 hover-3d reveal active">
               <h2 className="text-2xl font-black font-heading text-slate-900 mb-4 font-bold">
                  Modular Structure for Asynchronous Learning
               </h2>
               <p className="text-slate-600 leading-relaxed font-light mb-4">
                 Each section is designed as a complete learning unit with clear boundaries, estimated time, and self-contained content. Busy adult learners can complete the module in one sitting or across multiple sessions without losing continuity.
               </p>
               <p className="text-slate-600 leading-relaxed font-light mb-4">
                 The four-section structure builds progressively: understanding concepts (Section 1), recognizing examples (Section 2), practicing skills (Section 3), and applying to real contexts (Section 4). Each section prepares learners for the next while standing alone.
               </p>
               <p className="text-slate-600 leading-relaxed font-light">
                 Visible progress indicators and completion states help learners track their journey and feel a sense of accomplishment.
               </p>
             </section>

             <section className="bg-white border border-slate-200 shadow-sm p-10 rounded-[40px] border border-white/50 hover-3d reveal active">
               <h2 className="text-2xl font-black font-heading text-slate-900 mb-4 font-bold">
                  Clear Expectations & Scaffolding
               </h2>
               <p className="text-slate-600 leading-relaxed font-light mb-4">
                 Every activity includes specific instructions, structured formats, and realistic examples. This scaffolding is essential for beginners who may feel uncertain about AI or how to engage with unfamiliar tools.
               </p>
               <p className="text-slate-600 leading-relaxed font-light mb-4">
                 The Prompt Lab exemplifies this approach: instead of asking learners to experiment without guidance, it provides a fill-in-the-blank structure and guides them through three rounds of increasing specificity, reducing cognitive load while building practical skills.
               </p>
               <p className="text-slate-600 leading-relaxed font-light">
                 Sample submissions show what strong work looks like without being prescriptive, helping learners calibrate their efforts and build confidence.
               </p>
             </section>
          </div>

          <section className="bg-white border border-slate-200 shadow-sm p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-emerald-600 mb-6 font-bold">
               Engagement Through Structured Interaction
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
              The module avoids one-way lecture delivery by incorporating multiple interaction types: sharing examples, liking posts, comparing outputs, experimenting with prompts, and responding to peers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Low-Stakes Contribution</h3>
                <p className="text-slate-600 font-light">Interactions are deliberately confidence-building. Activities like "Share AI Around You" invite learners to contribute from their own experience, making everyone an expert in their own context.</p>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl border border-white/50 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Peer Visibility</h3>
                <p className="text-slate-600 font-light">Discussion posts, likes, and responses create a sense of community in an asynchronous environment and help learners see diverse approaches and contexts.</p>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200 shadow-sm p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-emerald-600 mb-6 font-bold">
               Visible Instructor Presence & Alignment
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
              Even without live meetings, instructor presence is woven throughout the module. Framing notes explain why activities matter, instructor summaries synthesize patterns from learner contributions, and selective replies provide personalized feedback. This models the kind of reflective, analytical thinking the module aims to develop.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
              Every learning objective is directly supported by specific activities and assessed through aligned methods. Formative assessments provide ongoing feedback without high stakes, helping learners build understanding incrementally.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              The summative assessment (One Real Task) asks learners to demonstrate all three objectives in an integrated, authentic application. The rubric makes expectations transparent and focuses on the thinking skills—awareness of limitations, recognition of human oversight, connection to real contexts—that matter most for responsible AI use in the workplace.
            </p>
          </section>

          <section className="bg-white border border-slate-200 shadow-sm p-10 md:p-16 rounded-[40px] border border-white/50 hover-3d reveal active">
            <h2 className="text-3xl font-black font-heading text-emerald-600 mb-6 font-bold">
               Realistic Time on Task & Supportive Design
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-4">
              The 45-60 minute total time reflects respect for busy adult learners. Each section is sized for focused completion in one session (10-16 minutes), allowing learners to make progress even in short study blocks. Estimated times are visible throughout, helping learners plan their engagement.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Many learners approach AI with uncertainty or resistance. The module addresses this by starting small, normalizing questions, and emphasizing that no one needs to become a technical expert. The focus on familiar tasks helps learners feel competent. By consistently acknowledging AI's limitations alongside its benefits, the design validates learner skepticism and positions critical thinking as essential rather than oppositional.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
