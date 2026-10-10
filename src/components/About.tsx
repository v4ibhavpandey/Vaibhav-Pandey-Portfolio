import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Server, 
  CheckCircle2
} from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] transition-colors duration-200"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
            Profile & Background
          </div>
          <h2 
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
          >
            Engineering scalable backends with discipline and clarity.
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-[#A3A3A3]">
            A grounded overview of my academic foundation, technical philosophy, and backend engineering direction.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Narrative Card */}
          <div className="md:col-span-7 bg-white dark:bg-[#1E1E1E] rounded-xl p-6 sm:p-8 border border-neutral-200 dark:border-[#2A2A2A] shadow-xs flex flex-col justify-between space-y-6 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#FFA116]">
                <Terminal className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Career Objective</span>
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-neutral-900 dark:text-[#E6E6E6] leading-snug pl-4 border-l-2 border-[#FFA116] italic">
                "{personalInfo.objective}"
              </blockquote>
              <div className="pt-3 text-sm text-neutral-700 dark:text-[#A3A3A3] space-y-3 leading-relaxed">
                <p>
                  As an undergraduate in Computer Science and Engineering at <strong className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">Institute of Engineering and Science IPS Academy, Indore</strong> (2024–2028 batch), I focus my engineering efforts on server-side architecture and web technologies.
                </p>
                <p>
                  Rather than spreading thin across superficial tutorials, I prioritize foundational mechanics: understanding the Node.js event loop, structuring controllers for maintainability, designing REST APIs that respect HTTP semantics, and verifying every endpoint through automated testing workflows with Postman.
                </p>
                <p>
                  My recent completion of the AWS Academy Cloud Foundations training complements my backend work with practical understanding of cloud compute, IAM security, and distributed infrastructure.
                </p>
              </div>
            </div>

            {/* Key engineering practices */}
            <div className="pt-4 border-t border-neutral-100 dark:border-[#2A2A2A] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">REST Controller Separation</span>
                  <p className="text-neutral-500 dark:text-[#A3A3A3] text-[11px]">Modular routes &amp; decoupled request handlers</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">AWS Cloud Foundations</span>
                  <p className="text-neutral-500 dark:text-[#A3A3A3] text-[11px]">AWS Academy curriculum &amp; course badge</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">Git &amp; Version Control</span>
                  <p className="text-neutral-500 dark:text-[#A3A3A3] text-[11px]">Branching, clean commit practices &amp; GitHub</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">Postman API Testing</span>
                  <p className="text-neutral-500 dark:text-[#A3A3A3] text-[11px]">Endpoint validation &amp; request simulation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Educational & Focus Breakdown */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Education Summary Card */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-neutral-200 dark:border-[#2A2A2A] shadow-xs space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#FFA116]">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Current Education</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-[#FFA116] border border-[#CC7A0A]/30">
                  2024 – 2028
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-[#E6E6E6] leading-snug">
                  Computer Science and Engineering (B.Tech)
                </h3>
                <p className="text-xs text-neutral-700 dark:text-[#A3A3A3] mt-1">
                  Institute of Engineering and Science, IPS Academy
                </p>
                <p className="text-xs text-neutral-500 dark:text-[#A3A3A3]">
                  Indore, Madhya Pradesh
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100 dark:border-[#2A2A2A]">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] block mb-2">
                  Academic Focus Areas:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2 py-1 rounded text-xs bg-neutral-100 dark:bg-[#171717] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Engineering Direction Card */}
            <div className="bg-white dark:bg-[#1E1E1E] text-neutral-900 dark:text-[#E6E6E6] rounded-xl p-6 border border-neutral-200 dark:border-[#2A2A2A] shadow-xs space-y-3 transition-colors">
              <div className="flex items-center gap-2 text-[#FFA116]">
                <Server className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Technical Direction</span>
              </div>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-[#E6E6E6]">
                What I am actively exploring &amp; building
              </h4>
              <p className="text-xs text-neutral-600 dark:text-[#A3A3A3] leading-relaxed">
                Building full-stack web applications with Node.js, Express.js, and cloud-hosted MySQL (Aiven), designing relational schemas with primary/foreign keys, SQL aggregations, and exploring cloud architectures on AWS.
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500 dark:text-[#A3A3A3] font-mono border-t border-neutral-100 dark:border-[#2A2A2A]">
                <span>Location: Indore (Open to Remote/Hybrid)</span>
                <span className="text-[#FFA116] font-semibold">Available: Immediately</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
