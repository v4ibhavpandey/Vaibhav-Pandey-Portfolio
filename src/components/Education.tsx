import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Binary
} from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#0F0F0F] transition-colors duration-200"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
            Academic Foundation
          </div>
          <h2 
            id="education-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
          >
            Education & coursework.
          </h2>
          <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
            Formative Computer Science & Engineering degree program shaping my foundational understanding of algorithms and systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div 
          id="education-primary-card"
          className="rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] shadow-sm p-6 sm:p-8 space-y-6 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-200 dark:border-[#2A2A2A] pb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#FFA116] border border-orange-500/30 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-orange-500/10 text-[#FFA116] border border-orange-500/30">
                    Active Undergraduate
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-[#A3A3A3] font-mono">B.Tech CSE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-[#E6E6E6] tracking-tight">
                  {education.degree}
                </h3>
                <p className="text-sm font-medium text-neutral-700 dark:text-[#A3A3A3]">
                  {education.institution}
                </p>
                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-[#A3A3A3] pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {education.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {education.timeline}
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-orange-500/10 text-[#FFA116] border border-orange-500/30">
                Batch 2024 – 2028
              </span>
            </div>
          </div>

          {/* Academic Focus Areas */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
              <Binary className="w-4 h-4 text-[#FFA116]" />
              <span>Core Academic Focus Areas & Coursework</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {education.focusAreas.map((area, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] text-xs font-medium text-neutral-800 dark:text-[#E6E6E6] flex items-center gap-2 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFA116]"></span>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Academic Highlights */}
          <div className="pt-4 border-t border-neutral-200 dark:border-[#2A2A2A] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
              Documented Academic Milestones
            </span>
            <ul className="space-y-2">
              {education.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
