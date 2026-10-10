/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Timeline } from './components/Timeline';
import { ResumeViewer } from './components/ResumeViewer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import { certifications } from './data/portfolioData';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-[#0F0F0F] text-neutral-900 dark:text-[#E6E6E6] flex flex-col font-sans transition-colors duration-200 selection:bg-[#FFA116] selection:text-[#0F0F0F]">
      {/* Navigation Header */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResumeModal={() => setIsResumeModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenCertificateModal={() => setIsCertModalOpen(true)}
        />

        {/* About Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Projects Section (with Interactive Simulators) */}
        <Projects />

        {/* Industry Certifications (AWS Academy Graduate) */}
        <Certifications />

        {/* Education Section */}
        <Education />

        {/* Timeline & Milestones */}
        <Timeline />

        {/* Dedicated In-Page Resume & Printable View */}
        <ResumeViewer asSection={true} />

        {/* Functional Contact Section */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Standalone Quick-Access Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />

      {/* Certificate Details Modal */}
      <CertificateModal 
        certification={isCertModalOpen ? certifications[0] : null}
        onClose={() => setIsCertModalOpen(false)}
      />
    </div>
  );
}

