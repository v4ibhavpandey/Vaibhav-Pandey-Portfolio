import React from 'react';
import { X, Download, Printer, Copy, Check, FileText } from 'lucide-react';
import { ResumeViewer } from './ResumeViewer';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
    >
      <div 
        id="resume-modal-content"
        className="relative w-full max-w-4xl bg-white dark:bg-[#1E1E1E] rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-neutral-900 dark:text-[#E6E6E6]"
      >
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between bg-neutral-50 dark:bg-[#171717]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#FFA116]" />
            <h3 id="modal-resume-title" className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#E6E6E6]">
              Vaibhav Pandey — Official Resume
            </h3>
          </div>

          <button
            id="close-resume-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6] hover:bg-neutral-100 dark:hover:bg-[#252525] transition-colors cursor-pointer"
            aria-label="Close resume modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-2 sm:p-4">
          <ResumeViewer asSection={false} />
        </div>

        <div className="px-6 py-3 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6] hover:bg-neutral-100 dark:hover:bg-[#252525] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
