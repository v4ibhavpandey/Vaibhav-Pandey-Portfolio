import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Eye, 
  Cloud 
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateModal } from './CertificateModal';

interface CertificationsProps {
  onOpenModal?: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const cert = certifications[0]; // AWS Academy Graduate

  return (
    <section 
      id="certifications" 
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-100 dark:bg-[#0F0F0F] transition-colors duration-200"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
            Cloud Training &amp; Badges
          </div>
          <h2 
            id="certifications-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
          >
            Cloud foundations &amp; credentials.
          </h2>
          <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
            Foundational cloud computing curriculum completed through the official AWS Academy program.
          </p>
        </div>

        {/* Featured Certificate Card */}
        {cert && (
          <div 
            id="aws-certification-card"
            className="rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] shadow-md hover:shadow-xl transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Certificate Left Column */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-[#FFA116] border border-[#CC7A0A]/30">
                    AWS Academy Course Badge
                  </span>
                  <span className="text-xs font-mono text-[#FFA116] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Digital Badge on Credly
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-[#E6E6E6] tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-[#FFA116] mt-1">
                    Issued by {cert.issuer}
                  </p>
                </div>

                <p className="text-sm text-neutral-600 dark:text-[#A3A3A3] leading-relaxed">
                  {cert.description}
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs">
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3] block">Program</span>
                    <span className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6] mt-0.5 block">AWS Academy</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs">
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3] block">Issued Date</span>
                    <span className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6] mt-0.5 block">{cert.issueDate}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] col-span-2 sm:col-span-1 shadow-xs">
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3] block">Verification</span>
                    <span className="text-sm font-bold text-[#FFA116] mt-0.5 block">Credly Badge</span>
                  </div>
                </div>

                {/* Key competency badges */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                    Core Competencies Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs bg-neutral-100 dark:bg-[#171717] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-100 dark:border-[#2A2A2A] flex flex-wrap items-center gap-3">
                <button
                  id="btn-view-aws-cert"
                  onClick={() => setActiveCert(cert)}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Badge Details</span>
                </button>

                <a
                  id="btn-verify-credly-link"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#252525] border border-neutral-300 dark:border-[#2A2A2A] text-[#FFA116] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#FFA116]" />
                  <span>View on Credly (20 Hours)</span>
                </a>
              </div>
            </div>

            {/* Visual Badge Card / Right Column */}
            <div className="lg:col-span-4 bg-neutral-50 dark:bg-[#121212] p-6 sm:p-8 flex flex-col justify-between items-center text-center border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-[#2A2A2A] relative overflow-hidden transition-colors">
              {/* Subtle background element */}
              <div className="absolute inset-0 bg-radial from-[#FFA116]/8 via-transparent to-transparent opacity-60" />

              <div className="relative z-10 w-full space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-orange-500/15 border border-[#CC7A0A]/30 text-[#FFA116] flex items-center justify-center mx-auto shadow-md">
                  <Cloud className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FFA116] font-bold">
                    AWS Academy Graduate
                  </span>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-[#E6E6E6]">
                    Cloud Foundations
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-[#A3A3A3]">
                    Recipient: Vaibhav Pandey
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] text-[11px] font-mono text-neutral-700 dark:text-[#A3A3A3] space-y-1 shadow-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-[#A3A3A3]">Status:</span>
                    <span className="text-[#FFA116] font-bold">Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-[#A3A3A3]">Curriculum:</span>
                    <span className="text-neutral-900 dark:text-[#E6E6E6]">Cloud Foundations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-[#A3A3A3]">Badge Type:</span>
                    <span className="text-[#FFA116] font-semibold">Credly Course Badge</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 w-full">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#252525] text-neutral-800 dark:text-[#E6E6E6] text-xs font-mono transition-colors border border-neutral-300 dark:border-[#2A2A2A] cursor-pointer"
                >
                  Click to inspect badge details &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for full certificate */}
        <CertificateModal 
          certification={activeCert} 
          onClose={() => setActiveCert(null)} 
        />

      </div>
    </section>
  );
};
