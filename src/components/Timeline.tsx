import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Server, 
  ExternalLink 
} from 'lucide-react';
import { timelineMilestones } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'project' | 'certification'>('all');

  const filteredMilestones = filter === 'all' 
    ? timelineMilestones 
    : timelineMilestones.filter(m => m.type === filter);

  return (
    <section 
      id="timeline" 
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] transition-colors duration-200"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
              Chronological Evidence
            </div>
            <h2 
              id="timeline-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
            >
              Academic & technical milestones.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
              A chronological progression of academic enrollment, core engineering projects, and accredited cloud credentials.
            </p>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-[#1E1E1E] rounded-lg border border-neutral-200 dark:border-[#2A2A2A] self-start md:self-auto text-xs shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                filter === 'all' 
                  ? 'bg-neutral-100 dark:bg-[#2A2A2A] text-[#FFA116] font-bold shadow-xs' 
                  : 'text-neutral-600 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                filter === 'education' 
                  ? 'bg-neutral-100 dark:bg-[#2A2A2A] text-[#FFA116] font-bold shadow-xs' 
                  : 'text-neutral-600 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6]'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setFilter('project')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                filter === 'project' 
                  ? 'bg-neutral-100 dark:bg-[#2A2A2A] text-[#FFA116] font-bold shadow-xs' 
                  : 'text-neutral-600 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6]'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setFilter('certification')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                filter === 'certification' 
                  ? 'bg-neutral-100 dark:bg-[#2A2A2A] text-[#FFA116] font-bold shadow-xs' 
                  : 'text-neutral-600 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6]'
              }`}
            >
              Credentials
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-300 dark:border-[#2A2A2A] space-y-10 max-w-4xl">
          {filteredMilestones.map((m, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#171717] border-4 border-[#FFA116] group-hover:scale-125 transition-transform" />

              {/* Milestone Content Box */}
              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs space-y-3 hover:border-[#CC7A0A]/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-[#FFA116] border border-[#CC7A0A]/30">
                      {m.year}
                    </span>
                    {m.period && (
                      <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3]">
                        {m.period}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] flex items-center gap-1">
                    {m.type === 'education' && <GraduationCap className="w-3.5 h-3.5 text-[#FFA116]" />}
                    {m.type === 'certification' && <Award className="w-3.5 h-3.5 text-[#FFA116]" />}
                    {m.type === 'project' && <Server className="w-3.5 h-3.5 text-[#FFA116]" />}
                    {m.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-[#E6E6E6]">
                    {m.title}
                  </h3>
                  <p className="text-xs font-medium text-[#FFA116] mt-0.5">
                    {m.organization}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A3A3A3] leading-relaxed">
                  {m.description}
                </p>

                {/* Evidence Link if available */}
                <div className="pt-2 border-t border-neutral-100 dark:border-[#2A2A2A] flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-[#A3A3A3] font-mono">
                    Evidence: {m.evidenceLabel}
                  </span>
                  {m.evidenceUrl && (
                    <a
                      href={m.evidenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#FFA116] hover:text-[#CC7A0A] hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
