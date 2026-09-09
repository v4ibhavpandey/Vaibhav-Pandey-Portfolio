import React, { useState } from 'react';
import { 
  Server, 
  Layers, 
  Globe, 
  FolderTree, 
  CheckCircle2, 
  Code2, 
  FileCode, 
  Layout, 
  Boxes, 
  Cpu, 
  Cloud, 
  GitBranch, 
  Binary,
  Check
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Server,
  Layers,
  Globe,
  FolderTree,
  CheckCircle2,
  Code2,
  FileCode,
  Layout,
  Boxes,
  Cpu,
  Cloud,
  GitBranch,
  Binary,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-100 dark:bg-[#0F0F0F] transition-colors duration-200"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
              Technical Competencies
            </div>
            <h2 
              id="skills-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
            >
              Verified technical toolkit.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
              Only verified skills and technologies drawn directly from documented projects and certifications. No fabricated percentages.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] rounded-lg shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-100 dark:bg-[#2A2A2A] text-[#FFA116] font-bold shadow-xs'
                    : 'text-neutral-600 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories and Skill Cards */}
        <div className="space-y-10">
          {displayedCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#2A2A2A] pb-2">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-[#E6E6E6] tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-[#A3A3A3] mt-0.5">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3]">
                  {group.skills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.iconName] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="group p-4 bg-white dark:bg-[#1E1E1E] rounded-xl border border-neutral-200 dark:border-[#2A2A2A] shadow-xs hover:border-[#FFA116]/50 transition-all hover:shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-[#CC7A0A]/30 text-[#FFA116] flex items-center justify-center group-hover:scale-105 transition-transform">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono text-[#FFA116] flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Verified
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6] group-hover:text-[#FFA116] transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-neutral-600 dark:text-[#A3A3A3] mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      {skill.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-neutral-100 dark:border-[#2A2A2A]">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-[#171717] text-neutral-700 dark:text-[#A3A3A3] border border-neutral-200/60 dark:border-[#2A2A2A] font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee Footer */}
        <div className="mt-12 p-4 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600 dark:text-[#A3A3A3] shadow-xs transition-colors">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
            <span>All skills shown are backed by verified project code on GitHub or verified AWS certification.</span>
          </div>
          <div className="font-mono text-[11px] text-[#FFA116] font-semibold">
            Source: Resume & Credential Material
          </div>
        </div>

      </div>
    </section>
  );
};
