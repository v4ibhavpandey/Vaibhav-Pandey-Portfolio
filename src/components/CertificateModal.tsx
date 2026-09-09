import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Calendar, 
  Printer, 
  Cloud
} from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <div 
        id="certificate-modal-content"
        className="relative w-full max-w-3xl bg-white dark:bg-[#1E1E1E] rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-neutral-900 dark:text-[#E6E6E6]"
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between bg-neutral-50 dark:bg-[#171717]">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#FFA116]" />
            <span id="modal-cert-title" className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6]">
              Official Verified Credential Preview
            </span>
          </div>

          <button
            id="close-certificate-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6] hover:bg-neutral-100 dark:hover:bg-[#252525] transition-colors cursor-pointer"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Authentic AWS Academy Certificate Display (Recreated from user's provided PDF) */}
          <div 
            id="certificate-authentic-frame"
            className="relative rounded-xl p-8 sm:p-12 bg-[#0F0F0F] text-[#E6E6E6] shadow-xl border border-[#2A2A2A] overflow-hidden"
          >
            {/* Geometric line accent in background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top_right,#ffa116_0%,transparent_60%)]" />
            <svg 
              className="absolute top-0 left-0 w-72 h-72 opacity-15 pointer-events-none" 
              viewBox="0 0 200 200" 
              fill="none" 
              stroke="#FFA116"
            >
              <polygon points="100,10 190,55 190,145 100,190 10,145 10,55" strokeWidth="1" />
              <polygon points="100,30 170,65 170,135 100,170 30,135 30,65" strokeWidth="1" />
              <polygon points="100,50 150,75 150,125 100,150 50,125 50,75" strokeWidth="1" />
            </svg>

            <div className="relative z-10 space-y-8">
              
              {/* Header: AWS Academy */}
              <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#FFA116] uppercase font-semibold">
                    AWS Academy Training Badge
                  </span>
                  <div className="text-2xl font-black tracking-tight text-[#E6E6E6] flex items-center gap-1.5 mt-1">
                    <span>aws</span>
                    <span className="text-[#FFA116] font-normal">academy</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[#FFA116] text-xs font-mono border border-orange-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Badge
                  </span>
                </div>
              </div>

              {/* Recipient Name */}
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3]">
                  Presented to
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6E6E6] tracking-tight">
                  Vaibhav Pandey
                </h2>
              </div>

              {/* Course Title & Credential Details */}
              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-xs text-[#A3A3A3] block font-mono">Certificate of Completion for:</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#FFA116] mt-0.5">
                    {certification.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#2A2A2A] text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-[#A3A3A3] flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#FFA116]" />
                      Curriculum:
                    </span>
                    <span className="text-base font-bold text-[#E6E6E6]">Cloud Foundations</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[#A3A3A3] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FFA116]" />
                      Issued on:
                    </span>
                    <span className="text-base font-bold text-[#E6E6E6]">{certification.issueDate}</span>
                  </div>
                </div>
              </div>

              {/* Credential URL & Verification Stamp */}
              <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="font-mono text-neutral-300">
                  <span className="text-[#A3A3A3] block text-[11px]">Digital badge link (20 hours):</span>
                  <a 
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFA116] hover:underline break-all"
                  >
                    {certification.credentialUrl}
                  </a>
                </div>

                <div className="text-[11px] text-[#A3A3A3] text-left sm:text-right font-mono">
                  AWS Training and Certification
                </div>
              </div>

            </div>
          </div>

          {/* Curriculum Syllabus Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
              Curriculum & Topics Covered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {certification.skillsCovered.map((item, i) => (
                <div 
                  key={i} 
                  className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] text-xs text-neutral-800 dark:text-[#A3A3A3] flex items-start gap-2 shadow-xs"
                >
                  <Cloud className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Evidence Notice */}
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-start gap-3 text-xs text-neutral-700 dark:text-[#A3A3A3]">
            <ShieldCheck className="w-5 h-5 text-[#FFA116] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-neutral-900 dark:text-[#E6E6E6] block">
                Primary Source of Truth
              </span>
              <span>
                {certification.verificationNote} Recruiters and evaluators can verify the digital badge directly on Credly using the public link below.
              </span>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3 bg-neutral-50 dark:bg-[#171717]">
          <div className="flex items-center gap-2">
            <a
              id="verify-on-credly-btn"
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-bold text-xs transition-colors shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Verify on Credly</span>
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] hover:bg-neutral-100 dark:hover:bg-[#252525] text-neutral-800 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6] text-xs font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save View</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6] cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
