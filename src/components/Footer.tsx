import React from 'react';
import { 
  Github, 
  Linkedin, 
  ArrowUp, 
  ShieldCheck, 
  FileText, 
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="site-footer"
      className="bg-neutral-100 dark:bg-[#0F0F0F] text-neutral-600 dark:text-[#A3A3A3] border-t border-neutral-200 dark:border-[#2A2A2A] text-xs py-12 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FFA116] text-[#0F0F0F] flex items-center justify-center font-mono font-black text-xs">
                VP
              </div>
              <span className="font-bold text-neutral-900 dark:text-[#E6E6E6] text-base">
                Vaibhav Pandey
              </span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3]">
                / Backend Engineer
              </span>
            </div>
            <p className="text-neutral-600 dark:text-[#A3A3A3] text-xs max-w-md leading-relaxed">
              Aspiring Backend Developer & Computer Science undergraduate (2024–2028) at IPS Academy Indore. 
              Focused on modular REST APIs, Node.js, Express.js, and AWS Cloud Foundations.
            </p>
            <div className="flex items-center gap-2 text-[#FFA116] font-mono text-[11px] pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Evidence-First Design: All claims verified against source documents</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-900 dark:text-[#E6E6E6] font-bold block">
              Sections
            </span>
            <ul className="space-y-1.5">
              <li><a href="#how-i-work" className="hover:text-[#FFA116] transition-colors">How I Work</a></li>
              <li><a href="#about" className="hover:text-[#FFA116] transition-colors">About & Education</a></li>
              <li><a href="#skills" className="hover:text-[#FFA116] transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-[#FFA116] transition-colors">Projects & Sandboxes</a></li>
              <li><a href="#certifications" className="hover:text-[#FFA116] transition-colors">AWS Academy Certification</a></li>
              <li><a href="#timeline" className="hover:text-[#FFA116] transition-colors">Milestones Timeline</a></li>
              <li><a href="#resume" className="hover:text-[#FFA116] transition-colors">Curriculum Vitae</a></li>
              <li><a href="#contact" className="hover:text-[#FFA116] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* External Verified Profiles */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-900 dark:text-[#E6E6E6] font-bold block">
              Direct Channels
            </span>
            <div className="space-y-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FFA116] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/v4ibhavpandey</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FFA116] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/v4ibhavpandey</span>
              </a>
              <a
                href="https://www.credly.com/go/1vfZYMOq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FFA116] hover:text-[#CC7A0A] transition-colors"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Credly Digital Badge</span>
              </a>
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 text-[#FFA116] hover:text-[#CC7A0A] transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Quick View Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 border-t border-neutral-200 dark:border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 dark:text-[#A3A3A3]">
          <div>
            &copy; {new Date().getFullYear()} Vaibhav Pandey. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1E1E1E] hover:bg-neutral-50 dark:hover:bg-[#252525] text-neutral-700 dark:text-[#E6E6E6] transition-colors border border-neutral-200 dark:border-[#2A2A2A] shadow-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
