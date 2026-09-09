import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  FileText, 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How I Work', href: '#how-i-work' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Milestones', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#171717]/95 backdrop-blur-md shadow-xs border-b border-neutral-200 dark:border-[#2A2A2A]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a 
          id="brand-logo-link"
          href="#top" 
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFA116] rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-[#FFA116] text-[#0F0F0F] flex items-center justify-center font-mono font-black text-sm shadow-xs group-hover:bg-[#CC7A0A] transition-colors">
            VP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-neutral-900 dark:text-[#E6E6E6] leading-none group-hover:text-[#FFA116] transition-colors">
              Vaibhav Pandey
            </span>
            <span className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3] leading-tight">
              backend.dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-neutral-700 dark:text-[#A3A3A3] hover:text-[#FFA116] dark:hover:text-[#FFA116] hover:bg-neutral-100 dark:hover:bg-[#1E1E1E] rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme toggle + Resume button */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Social icons */}
          <a
            id="nav-github-link"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 text-neutral-600 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6] hover:bg-neutral-100 dark:hover:bg-[#1E1E1E] rounded-lg transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="nav-linkedin-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 text-neutral-600 dark:text-[#A3A3A3] hover:text-neutral-900 dark:hover:text-[#E6E6E6] hover:bg-neutral-100 dark:hover:bg-[#1E1E1E] rounded-lg transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Theme Switcher */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            type="button"
            className="p-2 text-neutral-600 dark:text-[#A3A3A3] hover:text-[#FFA116] hover:bg-neutral-100 dark:hover:bg-[#1E1E1E] rounded-lg transition-colors cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#FFA116]" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          {/* Resume CTA */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResumeModal}
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-[#FFA116]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-1 md:hidden">
          <button
            id="mobile-theme-toggle-btn"
            onClick={toggleTheme}
            type="button"
            className="p-2 text-neutral-600 dark:text-[#A3A3A3] hover:text-[#FFA116] rounded-lg"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#FFA116]" /> : <Moon className="w-4 h-4 text-neutral-800" />}
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-neutral-700 dark:text-[#E6E6E6] hover:bg-neutral-100 dark:hover:bg-[#1E1E1E] rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-[#171717] border-b border-neutral-200 dark:border-[#2A2A2A] px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 text-neutral-900 dark:text-[#E6E6E6]">
          <div className="grid grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-[#A3A3A3] hover:text-[#FFA116] dark:hover:text-[#FFA116] hover:bg-neutral-100 dark:hover:bg-[#1E1E1E] rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-200 dark:border-[#2A2A2A] flex flex-col gap-2">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-lg bg-[#FFA116] text-[#0F0F0F] hover:bg-[#CC7A0A]"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>

            <div className="flex justify-around pt-2">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-[#A3A3A3] hover:text-[#FFA116] p-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-[#A3A3A3] hover:text-[#FFA116] p-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-[#A3A3A3] hover:text-[#FFA116] p-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
