import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  MapPin,
  Loader2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumeText } from '../utils/downloadResume';
import { generateResumePdf } from '../utils/generateResumePdf';

interface ResumeViewerProps {
  asSection?: boolean;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({ asSection = true }) => {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [printStatus, setPrintStatus] = useState<'idle' | 'printing' | 'success'>('idle');

  // Resume text exact replication from provided materials
  const resumeRawText = `
Vaibhav Pandey
INTERN APPLICANT
Indore Madhya Pradesh | 9009107817 | v4ibhav.pandey@gmail.com
LinkedIn: Vaibhav Pandey (https://www.linkedin.com/in/v4ibhavpandey)
GitHub: v4ibhavpandey (https://github.com/v4ibhavpandey)

Objective:
Aspiring Backend Developer with a strong foundation in Node.js, Express.js, MySQL, JavaScript, and Angular, seeking opportunities to build scalable web applications, solve real-world problems, and grow as a software engineer.

How I Work:
"I prefer learning by building. Rather than collecting technologies, I focus on understanding how things work, applying them to real problems, and turning incomplete ideas into working software."

Projects:
1. Pennywise – Personal Finance Tracker | Node.js, Express.js, MySQL (Aiven), Vanilla JS, HTML, CSS
GitHub: https://github.com/v4ibhavpandey/Pennywise
- Developed a full-stack personal finance tracker using Node.js, Express.js, Vanilla JavaScript, HTML, CSS, and a cloud-hosted Aiven MySQL database to record and manage income and expense transactions.
- Designed a relational MySQL schema (transactions and categories tables linked via foreign keys) and RESTful API endpoints executing CRUD operations, JOIN queries, and SUM/GROUP BY aggregations.
- Implemented real-time transaction creation, editing, deletion, chronological history sorting, category-wise expense breakdowns, and automated calculation of total income, total expenses, and current balance.

2. RESTful CRUD API | Node.js & Express.js
- Developed a RESTful API using Node.js and Express.js to perform CRUD (Create, Read, Update, and Delete) operations.
- Designed API endpoints following REST principles and tested them using Postman.
- Implemented modular routing and controller architecture for maintainable backend code.

3. Imposter Game – Live Multiplayer Party Game | Node.js, Express.js, Socket.IO, JavaScript, HTML, CSS
GitHub: https://github.com/v4ibhavpandey/Imposter-Game | Live: https://imposter-game-vtyn.onrender.com/
- Built a real-time multiplayer party game using Node.js, Express.js, and Socket.IO, with room codes, a live lobby, host controls, a timed discussion phase, and voting.
- Moved imposter assignment, word selection, and vote counting to the server, and delivered each player only their own word over a private socket message to prevent cheating through browser inspection.
- Handled tie votes, host transfer, and mid-game disconnects, and deployed the game on Render from GitHub with automatic redeploys.

Education:
Computer Science and Engineering Undergraduate (2024-2028).
Currently at the Institute of Engineering and Science IPS Academy, Indore, Madhya Pradesh.

Skills & abilities:
- Node.js & Express.js
- MySQL & Relational Databases (Aiven MySQL, JOIN, GROUP BY, CRUD)
- Fundamental Angular
- Python
- Version Control: Git & GitHub
- Data Structures & Algorithms

Certifications:
AWS Academy Graduate - Cloud Foundations - Training Badge (20 Hours)
Credential: https://www.credly.com/go/1vfZYMOq
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeRawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const success = downloadResumeText();
    if (success) {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }
  };

  const handlePrint = () => {
    setPrintStatus('printing');

    // 1. Generate and download a high-quality PDF directly
    const generated = generateResumePdf();

    // 2. Also attempt the browser's native print dialog
    try {
      window.print();
    } catch (err) {
      console.info('Native window.print() was blocked by browser iframe permissions; PDF downloaded directly.', err);
    }

    if (generated) {
      setPrintStatus('success');
      setTimeout(() => setPrintStatus('idle'), 3000);
    } else {
      setPrintStatus('idle');
    }
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
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 no-print">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
              Primary Source of Truth
            </div>
            <h2 
              id="resume-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
            >
              Curriculum vitae & credentials.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
              The full resume as provided, formatted cleanly for on-screen review, export, and physical/PDF printing.
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              id="resume-download-btn"
              onClick={handleDownload}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download (.txt)</span>
                </>
              )}
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              type="button"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border text-xs font-semibold shadow-xs transition-all duration-200 cursor-pointer active:scale-95 select-none ${
                printStatus === 'success'
                  ? 'bg-orange-500/15 border-[#FFA116] text-[#FFA116] ring-1 ring-orange-500/40'
                  : printStatus === 'printing'
                  ? 'bg-neutral-100 dark:bg-[#171717] border-neutral-300 dark:border-[#2A2A2A] text-neutral-600 dark:text-[#A3A3A3] cursor-wait'
                  : 'bg-white dark:bg-[#1E1E1E] border-neutral-300 dark:border-[#2A2A2A] hover:border-[#FFA116] hover:text-[#FFA116] dark:hover:border-[#FFA116] dark:hover:text-[#FFA116] text-neutral-800 dark:text-[#A3A3A3] hover:shadow-sm'
              }`}
              title="Print resume or download formatted PDF"
            >
              {printStatus === 'printing' ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#FFA116]" />
                  <span>Generating PDF...</span>
                </>
              ) : printStatus === 'success' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#FFA116]" />
                  <span>PDF Saved!</span>
                </>
              ) : (
                <>
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </>
              )}
            </button>

            <button
              id="resume-copy-btn"
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] hover:bg-neutral-100 dark:hover:bg-[#252525] bg-white dark:bg-[#1E1E1E] text-neutral-800 dark:text-[#A3A3A3] hover:text-[#FFA116] dark:hover:text-[#FFA116] text-xs font-medium transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#FFA116]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>
        </div>

        {/* Printable/Viewable Document Container */}
        <div 
          id="rendered-resume-document"
          className="max-w-4xl mx-auto bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] rounded-2xl p-6 sm:p-10 md:p-12 shadow-md text-neutral-900 dark:text-[#E6E6E6] space-y-8 print:border-none print:shadow-none print:p-0 print:text-black transition-colors"
        >
          {/* Header */}
          <div className="border-b border-neutral-200 dark:border-[#2A2A2A] pb-6 print:border-black">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6] print:text-black">
              Vaibhav Pandey
            </h1>
            <p className="text-xs sm:text-sm font-mono tracking-wider uppercase font-bold text-[#FFA116] mt-1 print:text-black">
              INTERN APPLICANT
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-3 text-xs text-neutral-600 dark:text-[#A3A3A3] print:text-black">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Indore, Madhya Pradesh
              </span>
              <span>•</span>
              <a href="tel:9009107817" className="flex items-center gap-1 hover:underline">
                <Phone className="w-3.5 h-3.5" />
                9009107817
              </a>
              <span>•</span>
              <a href="mailto:v4ibhav.pandey@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail className="w-3.5 h-3.5" />
                v4ibhav.pandey@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-700 dark:text-[#A3A3A3] print:text-black">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FFA116] underline"
              >
                LinkedIn: Vaibhav Pandey
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FFA116] underline"
              >
                GitHub: v4ibhavpandey
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-[#FFA116] border-b border-neutral-100 dark:border-[#2A2A2A] pb-1 print:text-black print:border-black">
              Objective
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3] leading-relaxed print:text-black">
              Aspiring Backend Developer with a strong foundation in Node.js, Express.js, MySQL, JavaScript, and Angular, seeking opportunities to build scalable web applications, solve real-world problems, and grow as a software engineer.
            </p>
          </div>

          {/* How I Work */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-[#FFA116] border-b border-neutral-100 dark:border-[#2A2A2A] pb-1 print:text-black print:border-black">
              How I Work
            </h2>
            <p className="text-xs sm:text-sm italic text-neutral-700 dark:text-[#A3A3A3] leading-relaxed print:text-black bg-neutral-50 dark:bg-[#171717] p-3 rounded-lg border-l-2 border-[#FFA116]">
              “I prefer learning by building. Rather than collecting technologies, I focus on understanding how things work, applying them to real problems, and turning incomplete ideas into working software.”
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-[#FFA116] border-b border-neutral-100 dark:border-[#2A2A2A] pb-1 print:text-black print:border-black">
              Projects
            </h2>

            {/* Project 1: Pennywise – Personal Finance Tracker */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                    Pennywise – Personal Finance Tracker
                  </h3>
                  <a
                    href="https://github.com/v4ibhavpandey/Pennywise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#FFA116] hover:underline print:text-black"
                  >
                    (GitHub)
                  </a>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3] print:text-black">
                  Node.js, Express.js, MySQL (Aiven), Vanilla JS, HTML, CSS
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-[#A3A3A3] print:text-black">
                <li>Developed a full-stack personal finance tracker using Node.js, Express.js, Vanilla JavaScript, HTML, CSS, and a cloud-hosted Aiven MySQL database to record and manage income and expense transactions.</li>
                <li>Designed a relational MySQL schema (transactions and categories tables linked via foreign keys) and RESTful API endpoints executing CRUD operations, JOIN queries, and SUM/GROUP BY aggregations.</li>
                <li>Implemented real-time transaction creation, editing, deletion, chronological history sorting, category-wise expense breakdowns, and automated calculation of total income, total expenses, and current balance.</li>
              </ul>
            </div>

            {/* Project 2: RESTful CRUD API */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                  RESTful CRUD API
                </h3>
                <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3] print:text-black">Node.js &amp; Express.js</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-[#A3A3A3] print:text-black">
                <li>Developed a RESTful API using Node.js and Express.js to perform CRUD (Create, Read, Update, and Delete) operations.</li>
                <li>Designed API endpoints following REST principles and tested them using Postman.</li>
                <li>Implemented modular routing and controller architecture for maintainable backend code.</li>
              </ul>
            </div>

            {/* Project 3: Imposter Game */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                  Imposter Game – Live Multiplayer Party Game
                </h3>
                <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3] print:text-black">Node.js, Express.js, Socket.IO</span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-600 dark:text-[#A3A3A3] print:text-black">
                <li>Built a real-time multiplayer party game using Node.js, Express.js, and Socket.IO, with room codes, a live lobby, host controls, a timed discussion phase, and voting.</li>
                <li>Moved imposter assignment, word selection, and vote counting to the server, and delivered each player only their own word over a private socket message to prevent cheating through browser inspection.</li>
                <li>Handled tie votes, host transfer, and mid-game disconnects, and deployed the game on Render from GitHub with automatic redeploys.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-[#FFA116] border-b border-neutral-100 dark:border-[#2A2A2A] pb-1 print:text-black print:border-black">
              Education
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                  Computer Science and Engineering Undergraduate
                </h3>
                <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3] print:text-black">2024 – 2028</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A3A3A3] mt-0.5 print:text-black">
                Currently at the Institute of Engineering and Science IPS Academy, Indore, Madhya Pradesh.
              </p>
            </div>
          </div>

          {/* Skills & abilities */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-[#FFA116] border-b border-neutral-100 dark:border-[#2A2A2A] pb-1 print:text-black print:border-black">
              Skills &amp; abilities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3] print:text-black list-disc list-outside ml-4">
              <li>Node.js &amp; Express.js</li>
              <li>MySQL &amp; Relational Databases (Aiven MySQL, SQL JOIN, GROUP BY, CRUD)</li>
              <li>Fundamental Angular</li>
              <li>Python</li>
              <li>Version Control: Git &amp; GitHub</li>
              <li>Data Structures &amp; Algorithms</li>
            </ul>
          </div>

          {/* Verified Certification */}
          <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-[#2A2A2A] print:border-black">
            <h2 className="text-sm font-bold uppercase tracking-wider font-mono text-[#FFA116] border-b border-neutral-100 dark:border-[#2A2A2A] pb-1 print:text-black print:border-black">
              Certifications & Training
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="font-bold text-neutral-900 dark:text-[#E6E6E6] print:text-black">
                  AWS Academy Graduate - Cloud Foundations - Training Badge
                </span>
                <span className="block text-neutral-500 dark:text-[#A3A3A3] print:text-black text-xs">
                  Issued 04/30/2026 • Credly ID: 1vfZYMOq
                </span>
              </div>
              <a 
                href="https://www.credly.com/go/1vfZYMOq" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-mono text-[#FFA116] hover:underline mt-1 sm:mt-0 print:text-black"
              >
                Verify Credential (20 Hours) &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
