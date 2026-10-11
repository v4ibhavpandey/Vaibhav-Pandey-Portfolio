import React, { useState } from 'react';
import { Download, Copy, Check, Mail, MapPin, Loader2, FileText } from 'lucide-react';
import { personalInfo, projects } from '../data/portfolioData';
import { buildResumeText, downloadResumeText } from '../utils/downloadResume';
import { generateResumePdf } from '../utils/generateResumePdf';

interface ResumeViewerProps {
  asSection?: boolean;
}

const sectionHeading =
  'text-sm font-bold uppercase tracking-wider font-mono text-orange-700 dark:text-[#FFA116] border-b border-neutral-100 dark:border-[#2A2A2A] pb-1 print:text-black print:border-black';

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ asSection = true }) => {
  const [copied, setCopied] = useState(false);
  const [txtSaved, setTxtSaved] = useState(false);
  const [pdfStatus, setPdfStatus] = useState<'idle' | 'working' | 'done' | 'failed'>('idle');

  // The copied text leaves out the phone number; it is only in the downloaded PDF and .txt.
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildResumeText(false));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleTxt = () => {
    if (downloadResumeText()) {
      setTxtSaved(true);
      setTimeout(() => setTxtSaved(false), 3000);
    }
  };

  const handlePdf = () => {
    setPdfStatus('working');
    const ok = generateResumePdf();
    setPdfStatus(ok ? 'done' : 'failed');
    setTimeout(() => setPdfStatus('idle'), 3000);
  };

  return (
    <section
      id="resume"
      className={`py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] transition-colors duration-200 ${
        asSection ? 'bg-neutral-50 dark:bg-[#0F0F0F]' : ''
      }`}
      aria-labelledby="resume-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 no-print">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-orange-700 dark:text-[#FFA116] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
              Resume
            </div>
            <h2
              id="resume-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
            >
              My resume.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
              Read it here or download the PDF. The PDF also has my phone number.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              id="resume-download-pdf-btn"
              onClick={handlePdf}
              type="button"
              disabled={pdfStatus === 'working'}
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-xs font-bold shadow-xs transition-colors cursor-pointer disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC7A0A]"
            >
              {pdfStatus === 'working' ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Preparing PDF...</span>
                </>
              ) : pdfStatus === 'done' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>PDF saved</span>
                </>
              ) : pdfStatus === 'failed' ? (
                <span>PDF failed, try again</span>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              id="resume-download-btn"
              onClick={handleTxt}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] hover:bg-neutral-100 dark:hover:bg-[#252525] bg-white dark:bg-[#1E1E1E] text-neutral-800 dark:text-[#A3A3A3] text-xs font-medium transition-colors cursor-pointer"
            >
              {txtSaved ? <Check className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
              <span>{txtSaved ? 'Saved' : 'Plain text (.txt)'}</span>
            </button>

            <button
              id="resume-copy-btn"
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] hover:bg-neutral-100 dark:hover:bg-[#252525] bg-white dark:bg-[#1E1E1E] text-neutral-800 dark:text-[#A3A3A3] text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy text'}</span>
            </button>
          </div>
        </div>

        <div
          id="rendered-resume-document"
          className="max-w-4xl mx-auto bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] rounded-2xl p-6 sm:p-10 md:p-12 shadow-md text-neutral-900 dark:text-[#E6E6E6] space-y-8 print:border-none print:shadow-none print:p-0 print:text-black transition-colors"
        >
          <div className="border-b border-neutral-200 dark:border-[#2A2A2A] pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6] print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-mono tracking-wider uppercase font-bold text-orange-700 dark:text-[#FFA116] mt-1 print:text-black">
              Aspiring Backend Developer
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-3 text-xs text-neutral-600 dark:text-[#A3A3A3] print:text-black">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Indore, Madhya Pradesh
              </span>
              <span aria-hidden="true">•</span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                {personalInfo.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-700 dark:text-[#A3A3A3] print:text-black">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-orange-700 dark:hover:text-[#FFA116] underline">
                LinkedIn: Vaibhav Pandey
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-orange-700 dark:hover:text-[#FFA116] underline">
                GitHub: v4ibhavpandey
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className={sectionHeading}>Objective</h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3] leading-relaxed print:text-black">
              {personalInfo.objective}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className={sectionHeading}>How I Work</h2>
            <p className="text-xs sm:text-sm italic text-neutral-700 dark:text-[#A3A3A3] leading-relaxed print:text-black bg-neutral-50 dark:bg-[#171717] p-3 rounded-lg border-l-2 border-[#FFA116]">
              “I prefer learning by building. Rather than collecting technologies, I focus on understanding how things work, applying them to real problems, and turning incomplete ideas into working software.”
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={sectionHeading}>Projects</h2>
            {projects.map((p, idx) => (
              <div key={p.id} className={`space-y-2 ${idx > 0 ? 'pt-2' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                      {p.title}
                      {p.liveDemoUrl ? '' : ' (not deployed)'}
                    </h3>
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-orange-700 dark:text-[#FFA116] hover:underline print:text-black">
                      (GitHub)
                    </a>
                    {p.liveDemoUrl && (
                      <a href={p.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-orange-700 dark:text-[#FFA116] hover:underline print:text-black">
                        (Live)
                      </a>
                    )}
                  </div>
                  <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3] print:text-black">
                    {p.techStack.slice(0, 4).join(', ')}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-[#A3A3A3] print:text-black">
                  {p.role.slice(0, 3).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h2 className={sectionHeading}>Education</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                B.Tech in Computer Science and Engineering
              </h3>
              <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3] print:text-black">2024 – 2028</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A3A3A3] print:text-black">
              Institute of Engineering and Science, IPS Academy, Indore, Madhya Pradesh.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className={sectionHeading}>Skills</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3] print:text-black list-disc list-outside ml-4">
              <li>Node.js &amp; Express.js</li>
              <li>REST APIs, Socket.IO, Postman (manual testing)</li>
              <li>MySQL (Aiven), basic SQL (JOIN, SUM)</li>
              <li>JavaScript, HTML, CSS, Python</li>
              <li>Git &amp; GitHub, deploying on Render and Vercel</li>
              <li>Data Structures &amp; Algorithms (practising)</li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-[#2A2A2A] print:border-black">
            <h2 className={sectionHeading}>Courses &amp; badges</h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                  AWS Academy Cloud Foundations (course badge)
                </span>
                <span className="block text-neutral-500 dark:text-[#A3A3A3] print:text-black text-xs">
                  Issued 04/30/2026 • 20-hour course • Credly ID: 1vfZYMOq
                </span>
              </div>
              <a href="https://www.credly.com/go/1vfZYMOq" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-orange-700 dark:text-[#FFA116] hover:underline mt-1 sm:mt-0 print:text-black">
                View badge on Credly &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
