import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Functional message composer (creates direct mailto with subject & body)
  const [subject, setSubject] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject || `Internship / Engineering Inquiry from ${senderName || 'Recruiter'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Vaibhav,\n\n${message}\n\nBest regards,\n${senderName || 'Anonymous'}\n${senderEmail ? `Contact: ${senderEmail}` : ''}`
    );
    // Real functional mailto trigger
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#0F0F0F] transition-colors duration-200"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
            Professional Communication
          </div>
          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
          >
            Get in touch.
          </h2>
          <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
            Available for software engineering internships, backend development roles, and technical discussions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct verified coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs space-y-4 transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-[#FFA116] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-neutral-100 dark:bg-[#171717] text-neutral-700 dark:text-[#A3A3A3] hover:bg-neutral-200 dark:hover:bg-[#252525] border border-neutral-200 dark:border-[#2A2A2A] transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#FFA116]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] block">Direct Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-neutral-900 dark:text-[#E6E6E6] hover:text-[#FFA116] dark:hover:text-[#FFA116] transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone & Location Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="p-5 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs space-y-2 transition-colors">
                <div className="flex items-center justify-between">
                  <Phone className="w-4 h-4 text-[#FFA116]" />
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6] cursor-pointer"
                  >
                    {copiedPhone ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] block">Phone</span>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6] hover:text-[#FFA116] block"
                >
                  +91 {personalInfo.phone}
                </a>
              </div>

              {/* Location */}
              <div className="p-5 rounded-xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs space-y-2 transition-colors">
                <MapPin className="w-4 h-4 text-[#FFA116]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] block">Location</span>
                <span className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6] block">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-xl bg-white dark:bg-[#1E1E1E] text-neutral-900 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A] shadow-xs space-y-4 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FFA116] block font-bold">
                Profiles &amp; Code Repositories
              </span>

              <div className="space-y-3">
                <a
                  id="contact-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 dark:bg-[#171717] dark:hover:bg-[#252525] border border-neutral-200 dark:border-[#2A2A2A] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-neutral-600 dark:text-[#A3A3A3] group-hover:text-neutral-900 dark:group-hover:text-[#E6E6E6]" />
                    <div>
                      <span className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6] block">GitHub</span>
                      <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3]">@v4ibhavpandey</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-[#A3A3A3]" />
                </a>

                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 dark:bg-[#171717] dark:hover:bg-[#252525] border border-neutral-200 dark:border-[#2A2A2A] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-neutral-600 dark:text-[#A3A3A3] group-hover:text-neutral-900 dark:group-hover:text-[#E6E6E6]" />
                    <div>
                      <span className="text-sm font-bold text-neutral-900 dark:text-[#E6E6E6] block">LinkedIn</span>
                      <span className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3]">in/v4ibhavpandey</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-[#A3A3A3]" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] shadow-sm space-y-6 transition-colors">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#FFA116]">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Direct Message Composer</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-[#E6E6E6]">
                  Send an email directly
                </h3>
                <p className="text-xs text-neutral-500 dark:text-[#A3A3A3]">
                  Pre-fills your default email client with your message details to ensure 100% reliable delivery to v4ibhav.pandey@gmail.com.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="sender-name" className="block text-xs font-mono text-neutral-700 dark:text-[#A3A3A3]">
                      Your Name / Company
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe (Tech Recruiter)"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] text-neutral-900 dark:text-[#E6E6E6] text-sm focus:outline-none focus:border-[#FFA116] focus:ring-1 focus:ring-[#FFA116]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="sender-email" className="block text-xs font-mono text-neutral-700 dark:text-[#A3A3A3]">
                      Your Email (for replies)
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] text-neutral-900 dark:text-[#E6E6E6] text-sm focus:outline-none focus:border-[#FFA116] focus:ring-1 focus:ring-[#FFA116]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message-subject" className="block text-xs font-mono text-neutral-700 dark:text-[#A3A3A3]">
                    Subject / Topic
                  </label>
                  <input
                    id="message-subject"
                    type="text"
                    required
                    placeholder="e.g. Backend Internship Opportunity 2025"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] text-neutral-900 dark:text-[#E6E6E6] text-sm focus:outline-none focus:border-[#FFA116] focus:ring-1 focus:ring-[#FFA116]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message-body" className="block text-xs font-mono text-neutral-700 dark:text-[#A3A3A3]">
                    Message
                  </label>
                  <textarea
                    id="message-body"
                    rows={4}
                    required
                    placeholder="Provide details regarding your opening, interview process, or collaboration..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] text-neutral-900 dark:text-[#E6E6E6] text-sm focus:outline-none focus:border-[#FFA116] focus:ring-1 focus:ring-[#FFA116] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500 dark:text-[#A3A3A3] font-mono">
                    Routes directly to: v4ibhav.pandey@gmail.com
                  </span>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-xs sm:text-sm font-bold shadow-xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
