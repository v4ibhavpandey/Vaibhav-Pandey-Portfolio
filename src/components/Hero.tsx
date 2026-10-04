import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Award, 
  ShieldCheck,
  Download,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumeText } from '../utils/downloadResume';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenCertificateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenCertificateModal }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadResume = () => {
    const ok = downloadResumeText();
    if (ok) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } else {
      // Fallback to opening printable modal
      onOpenResumeModal();
    }
  };

  return (
    <section 
      id="top" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-neutral-100 dark:bg-[#0F0F0F] transition-colors duration-200"
      aria-labelledby="hero-heading"
    >
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-radial from-[#FFA116]/8 via-transparent to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-radial from-neutral-400/10 dark:from-neutral-800/20 via-transparent to-transparent rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Impact Positioning & Profile */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div 
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-orange-500/10 text-orange-600 dark:text-[#FFA116] border border-[#CC7A0A]/30 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Open for Backend Engineering Internships</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 
                id="hero-heading" 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
              >
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#FFA116] tracking-tight">
                {personalInfo.title}
              </p>
              <p className="text-sm sm:text-base font-medium text-neutral-700 dark:text-[#A3A3A3]">
                B.Tech in Computer Science & Engineering (2024–2028)
                <span className="block text-neutral-500 dark:text-[#A3A3A3] text-sm">
                  Institute of Engineering and Science, IPS Academy, Indore
                </span>
              </p>
            </div>

            {/* Profile Statement / Bio */}
            <p className="text-base sm:text-lg text-neutral-700 dark:text-[#A3A3A3] max-w-2xl leading-relaxed">
              Designing scalable server architectures, modular RESTful APIs, and clean web applications. 
              Grounded in <strong className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">Node.js</strong>, <strong className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">Express.js</strong>, <strong className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">MySQL</strong>, <strong className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">JavaScript</strong>, <strong className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">Angular</strong>, and certified in <strong className="font-semibold text-[#FFA116]">AWS Cloud Foundations</strong>.
            </p>

            {/* Contact & Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] text-neutral-700 dark:text-[#A3A3A3] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {personalInfo.location}
              </span>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] text-neutral-700 dark:text-[#A3A3A3] hover:text-[#FFA116] hover:border-[#CC7A0A]/40 transition-colors shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] text-neutral-700 dark:text-[#A3A3A3] hover:text-[#FFA116] hover:border-[#CC7A0A]/40 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                +91 {personalInfo.phone}
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-bold text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#FFA116]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Functional Resume Downloader with View Fallback */}
              <div className="inline-flex items-center rounded-lg shadow-xs">
                <button
                  id="hero-download-resume-btn"
                  onClick={handleDownloadResume}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-l-lg bg-white dark:bg-[#1E1E1E] border border-neutral-300 dark:border-[#2A2A2A] hover:border-[#FFA116]/60 hover:bg-neutral-50 dark:hover:bg-[#252525] text-neutral-800 dark:text-[#E6E6E6] font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#FFA116]"
                  title="Download official resume file"
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-[#FFA116]" />
                      <span className="text-[#FFA116] font-bold">Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#FFA116]" />
                      <span>Download Resume</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onOpenResumeModal}
                  type="button"
                  className="px-3 py-3 rounded-r-lg bg-white dark:bg-[#1E1E1E] border-t border-b border-r border-neutral-300 dark:border-[#2A2A2A] hover:border-[#FFA116]/60 hover:bg-neutral-50 dark:hover:bg-[#252525] text-neutral-500 hover:text-[#FFA116] transition-colors text-xs font-mono"
                  title="View Resume in preview modal"
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>

              <button
                id="hero-aws-badge-btn"
                onClick={onOpenCertificateModal}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-500/10 border border-[#CC7A0A]/30 text-orange-600 dark:text-[#FFA116] font-medium text-xs sm:text-sm hover:bg-orange-500/20 transition-all"
              >
                <Award className="w-4 h-4 text-[#FFA116]" />
                <span>AWS Certified</span>
              </button>
            </div>

            {/* Social Link Badges */}
            <div className="flex items-center gap-4 pt-3 border-t border-neutral-200 dark:border-[#2A2A2A] w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">Verified Profiles:</span>
              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 dark:text-[#A3A3A3] hover:text-[#FFA116] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (v4ibhavpandey)</span>
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 dark:text-[#A3A3A3] hover:text-[#FFA116] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn (v4ibhavpandey)</span>
              </a>
            </div>

          </div>

          {/* Right Column: "How I Work" Section */}
          <div id="how-i-work" className="lg:col-span-5">
            <div 
              className="rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] text-neutral-900 dark:text-[#E6E6E6] shadow-xl overflow-hidden p-6 sm:p-7 space-y-6 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-100 dark:border-[#2A2A2A] pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFA116]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116]">
                    Engineering Philosophy
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3]">
                  Core Approach
                </span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]">
                  How I work
                </h2>
                <p className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3]">
                  Principles driving my development process
                </p>
              </div>

              {/* Prominent Quote Block matching user request verbatim */}
              <blockquote className="p-5 rounded-xl bg-neutral-50 dark:bg-[#171717] border-l-4 border-[#FFA116] border-t border-r border-b border-neutral-200/80 dark:border-[#2A2A2A]">
                <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-800 dark:text-[#E6E6E6] italic">
                  “I prefer learning by building. Rather than collecting technologies, I focus on understanding how things work, applying them to real problems, and turning incomplete ideas into working software.”
                </p>
              </blockquote>

              {/* 3 Pillars translating the quote into practical engineering */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200/80 dark:border-[#2A2A2A]">
                  <div className="w-7 h-7 rounded-md bg-orange-500/10 dark:bg-orange-500/20 text-[#FFA116] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-neutral-900 dark:text-[#E6E6E6]">
                      Learn by Building
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-[#A3A3A3] mt-0.5 leading-relaxed">
                      I write actual servers, build APIs from scratch, test endpoints with Postman, and inspect runtime behavior firsthand.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200/80 dark:border-[#2A2A2A]">
                  <div className="w-7 h-7 rounded-md bg-orange-500/10 dark:bg-orange-500/20 text-[#FFA116] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-neutral-900 dark:text-[#E6E6E6]">
                      Real Problem Focus
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-[#A3A3A3] mt-0.5 leading-relaxed">
                      Prioritizing core engineering mechanics — relational MySQL schemas, structured REST CRUD operations, and game state flow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200/80 dark:border-[#2A2A2A]">
                  <div className="w-7 h-7 rounded-md bg-orange-500/10 dark:bg-orange-500/20 text-[#FFA116] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-neutral-900 dark:text-[#E6E6E6]">
                      Incomplete Ideas → Working Software
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-[#A3A3A3] mt-0.5 leading-relaxed">
                      Continuously refining raw drafts into documented, verified codebases backed by live demonstrations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-neutral-100 dark:border-[#2A2A2A] flex items-center justify-between text-[11px] text-neutral-500 dark:text-[#A3A3A3] font-mono">
                <span className="flex items-center gap-1 text-[#FFA116] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Source-Verified Portfolio
                </span>
                <span>IPS Academy Indore</span>
              </div>
            </div>

            {/* Quick Evidence Pill Strip */}
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs">
                <div className="font-bold text-[#FFA116]">2024–28</div>
                <div className="text-[11px] text-neutral-500 dark:text-[#A3A3A3]">B.Tech CSE</div>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs">
                <div className="font-bold text-[#FFA116]">AWS Academy</div>
                <div className="text-[11px] text-neutral-500 dark:text-[#A3A3A3]">Cloud Foundations</div>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs">
                <div className="font-bold text-[#FFA116]">3 Projects</div>
                <div className="text-[11px] text-neutral-500 dark:text-[#A3A3A3]">Documented &amp; Code</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
