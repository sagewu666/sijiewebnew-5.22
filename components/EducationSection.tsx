import React from 'react';
import { Education } from '../types';

interface EducationProps { 
  items?: Education[]; 
}

export const EducationSection: React.FC<EducationProps> = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-900 bg-amber-100 border border-amber-300 rounded-full px-3.5 py-1 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
          Academic Qualifications &amp; Credentials
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 tracking-tight mb-3">
          Education &amp; Credentials
        </h2>
        <p className="text-slate-600 text-base max-w-2xl font-normal leading-relaxed">
          Grounding learning experience design in empirical educational research, cognitive development, interactive media systems, and international academic training.
        </p>
      </div>

      {/* TOP FLAGSHIP CARD: Teachers College, Columbia University */}
      <div className="bg-white rounded-2xl border border-amber-200/90 shadow-sm p-6 md:p-8 mb-6 hover:border-amber-300 transition-all">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Institution, Degree, Status, Key Appointments */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-950 border border-amber-300">
                  09/2025 – 05/2027
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  New York, NY
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                Teachers College, Columbia University
              </h3>
              <p className="text-base font-semibold text-blue-700 mt-1">
                Master of Arts (M.A.) in Instructional Technology and Media
              </p>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                Department of Mathematics, Science &amp; Technology (MST)
              </p>

              <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Cumulative GPA: 4.0 / 4.0</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <div className="text-xs text-slate-600 leading-relaxed">
                Specialized in learning systems architecture, instructional design paradigms, and educational media engineering.
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Featured Graduate Coursework Matrix */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Featured Graduate Coursework
                </h4>
                <p className="text-xs text-slate-500">
                  Comprehensive curriculum spanning interactive computing, instructional systems &amp; learning organizations
                </p>
              </div>
              <span className="text-[11px] font-semibold text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                Columbia TC Core
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Course 1 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-amber-300 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                    Tech &amp; Media
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 leading-snug">
                  Theory and Programming of Interactive Media
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Interactive web architecture, DOM manipulation, computational thinking, and educational frontend engineering.
                </p>
              </div>

              {/* Course 2 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-amber-300 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Instructional Design
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 leading-snug">
                  Instructional Design of EdTechnology
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  ADDIE framework, cognitive load theory, formative/summative evaluation, and evidence-centered learning scaffolding.
                </p>
              </div>

              {/* Course 3 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-amber-300 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800 border border-purple-200">
                    Adult Learning
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 leading-snug">
                  Staff Development and Training
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Organizational needs assessment, adult learning paradigms, corporate training pipelines, and competency benchmarks.
                </p>
              </div>

              {/* Course 4 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-amber-300 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                    Workplace Systems
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 leading-snug">
                  The Learning Org: Digital Workplace
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Knowledge management architectures, collaborative workflows, digital tooling adoption, and systemic organizational learning.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MIDDLE TIER: 2-Column Balanced Cards for UC Irvine & Shanghai Normal University */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: University of California, Irvine */}
        <div className="bg-white rounded-2xl border border-amber-200/80 shadow-xs p-6 hover:border-amber-300 transition-all flex flex-col justify-between">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-950 border border-amber-300">
                  09/2023 – 12/2023
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Irvine, CA
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                University of California, Irvine
              </h3>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">
                Academic Study Abroad Program
              </p>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Curriculum Focus &amp; Performance
              </div>
              <div className="text-xs text-slate-700 flex items-start gap-2">
                <span className="text-amber-600 font-bold shrink-0">•</span>
                <span><strong>GPA:</strong> 4.0 / 4.0</span>
              </div>
              <div className="text-xs text-slate-700 flex items-start gap-2">
                <span className="text-amber-600 font-bold shrink-0">•</span>
                <span><strong>Courses:</strong> Issues in K-12 Education, Bilingual Education</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Shanghai Normal University */}
        <div className="bg-white rounded-2xl border border-amber-200/80 shadow-xs p-6 hover:border-amber-300 transition-all flex flex-col justify-between">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-950 border border-amber-300">
                  09/2021 – 06/2025
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Shanghai, China
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                Shanghai Normal University
              </h3>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">
                Bachelor of Education (B.Ed.)
              </p>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                Major: Preschool Education
              </p>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                Academic Standing &amp; Honors
              </div>
              <div className="text-xs text-slate-700 flex items-start gap-2">
                <span className="text-amber-600 font-bold shrink-0">•</span>
                <span><strong>WES Verified GPA:</strong> 3.64 / 4.0</span>
              </div>
              <div className="text-xs text-slate-700 flex items-start gap-2">
                <span className="text-amber-600 font-bold shrink-0">•</span>
                <span>SHNU Academic Achievement Scholarship recipient.</span>
              </div>
              <div className="text-xs text-slate-700 flex items-start gap-2">
                <span className="text-amber-600 font-bold shrink-0">•</span>
                <span>SHNU Overseas Exchange Program Scholarship recipient.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};