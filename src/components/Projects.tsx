import React, { useState } from 'react';
import { 
  Gamepad2, 
  Github, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Terminal,
  Database,
  ExternalLink
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] transition-colors duration-200"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
              Engineering Portfolio
            </div>
            <h2 
              id="projects-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
            >
              Built projects with verifiable source code.
            </h2>
            <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
              Direct implementation of full-stack relational database systems, backend REST architecture, and interactive web applications. Every project features an interactive simulator and GitHub repository.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-600 dark:text-[#A3A3A3] bg-white dark:bg-[#1E1E1E] px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-[#2A2A2A] self-start md:self-auto shadow-xs">
            3 Featured Projects • Interactive Simulators
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-8">

          {/* PROJECT 1: Pennywise – Personal Finance Tracker */}
          {projects[0] && (
            <div 
              id="project-card-pennywise"
              className="rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] shadow-md hover:shadow-xl transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Context, Resume Bullets & Actions */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-[#FFA116] border border-[#CC7A0A]/30">
                      Full-Stack &amp; Cloud MySQL
                    </span>
                    <span className="text-xs font-mono text-[#FFA116] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Aiven MySQL + Express REST API
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-[#E6E6E6] tracking-tight">
                    {projects[0].title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A3A3A3] leading-relaxed">
                    {projects[0].shortDescription}
                  </p>

                  {/* ATS-Friendly Resume Bullets */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                      Resume Highlights (ATS-Ready):
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3]">
                      {projects[0].role.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {projects[0].techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-neutral-100 dark:bg-[#171717] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 dark:border-[#2A2A2A] flex flex-wrap items-center gap-3">
                  {projects[0].liveDemoUrl && (
                    <a
                      id="btn-live-pennywise"
                      href={projects[0].liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-xs sm:text-sm font-bold shadow-xs transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC7A0A]"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#0F0F0F]" />
                      <span>Live App (Vercel)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    id="btn-inspect-pennywise"
                    onClick={() => setSelectedProject(projects[0])}
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#252525] text-neutral-800 dark:text-[#E6E6E6] text-xs sm:text-sm font-medium transition-colors border border-neutral-300 dark:border-[#2A2A2A] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFA116]"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Open Tracker Sandbox</span>
                  </button>

                  <a
                    id="btn-github-pennywise"
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#252525] text-neutral-800 dark:text-[#E6E6E6] text-xs sm:text-sm font-medium transition-colors border border-neutral-300 dark:border-[#2A2A2A]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Relational Schema & SQL Query Preview */}
              <div className="lg:col-span-5 bg-neutral-100 dark:bg-[#121212] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-[#2A2A2A] font-mono text-xs text-neutral-700 dark:text-[#A3A3A3] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#2A2A2A] pb-3">
                    <div className="flex items-center gap-2 text-[#FFA116] font-semibold">
                      <Database className="w-4 h-4" />
                      <span>schema.sql &amp; Express API</span>
                    </div>
                    <span className="text-[10px] text-orange-600 dark:text-[#FFA116] bg-orange-500/10 px-2 py-0.5 rounded border border-[#CC7A0A]/30">
                      Aiven MySQL
                    </span>
                  </div>

                  <div className="bg-white dark:bg-[#1E1E1E] rounded-lg p-4 border border-neutral-200 dark:border-[#2A2A2A] space-y-2 text-[11px] leading-relaxed overflow-x-auto text-neutral-800 dark:text-[#E6E6E6] shadow-xs">
                    <p className="text-neutral-500 dark:text-[#737373]">-- Relational Schema: transactions &rarr; categories</p>
                    <p><span className="text-[#FFA116] font-semibold">SELECT</span> c.name <span className="text-[#FFA116] font-semibold">AS</span> category,</p>
                    <p className="pl-4"><span className="text-[#CC7A0A] font-semibold">SUM</span>(t.amount) <span className="text-[#FFA116] font-semibold">AS</span> total_spent</p>
                    <p><span className="text-[#FFA116] font-semibold">FROM</span> transactions t</p>
                    <p><span className="text-[#FFA116] font-semibold">JOIN</span> categories c <span className="text-[#FFA116] font-semibold">ON</span> t.category_id = c.id</p>
                    <p><span className="text-[#FFA116] font-semibold">WHERE</span> t.type = <span className="text-[#CC7A0A]">'expense'</span></p>
                    <p><span className="text-[#FFA116] font-semibold">GROUP BY</span> c.id, c.name;</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A]">
                      <div className="text-[#FFA116] font-bold">categories</div>
                      <div className="text-neutral-500 dark:text-[#A3A3A3] text-[10px] mt-0.5">id (PK), name</div>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A]">
                      <div className="text-[#FFA116] font-bold">transactions</div>
                      <div className="text-neutral-500 dark:text-[#A3A3A3] text-[10px] mt-0.5">id (PK), category_id (FK)</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between text-[11px] text-neutral-500 dark:text-[#A3A3A3]">
                  <span>Categories: Food, Travel, Bills, Salary +3</span>
                  <span className="text-[#FFA116] hover:underline cursor-pointer font-medium" onClick={() => setSelectedProject(projects[0])}>
                    Try Tracker &rarr;
                  </span>
                </div>
              </div>
            </div>
          )}
          
          {/* PROJECT 2: RESTful CRUD API */}
          {projects[1] && (
            <div 
              id="project-card-crud-api"
              className="rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] shadow-md hover:shadow-xl transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Context, Problem & Actions */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-[#FFA116] border border-[#CC7A0A]/30">
                      Personal Project
                    </span>
                    <span className="text-xs font-mono text-[#FFA116] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Postman Tested
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-[#E6E6E6] tracking-tight">
                    {projects[1].title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A3A3A3] leading-relaxed">
                    {projects[1].shortDescription}
                  </p>

                  {/* Bullet points extracted directly from resume */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                      Key Engineering Outcomes:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3]">
                      {projects[1].role.slice(0, 3).map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {projects[1].techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-neutral-100 dark:bg-[#171717] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 dark:border-[#2A2A2A] flex flex-wrap items-center gap-3">
                  <button
                    id="btn-inspect-crud-api"
                    onClick={() => setSelectedProject(projects[1])}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC7A0A]"
                  >
                    <Play className="w-3.5 h-3.5 text-[#0F0F0F]" />
                    <span>Test API in Sandbox</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    id="btn-github-crud-api"
                    href={projects[1].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#252525] text-neutral-800 dark:text-[#E6E6E6] text-xs sm:text-sm font-medium transition-colors border border-neutral-300 dark:border-[#2A2A2A]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Code Preview */}
              <div className="lg:col-span-5 bg-neutral-100 dark:bg-[#121212] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-[#2A2A2A] font-mono text-xs text-neutral-700 dark:text-[#A3A3A3] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#2A2A2A] pb-3">
                    <div className="flex items-center gap-2 text-[#FFA116] font-semibold">
                      <Terminal className="w-4 h-4" />
                      <span>controllers/itemController.js</span>
                    </div>
                    <span className="text-[10px] text-orange-600 dark:text-[#FFA116] bg-orange-500/10 px-2 py-0.5 rounded border border-[#CC7A0A]/30">
                      REST Compliant
                    </span>
                  </div>

                  <div className="bg-white dark:bg-[#1E1E1E] rounded-lg p-4 border border-neutral-200 dark:border-[#2A2A2A] space-y-2 text-[11px] leading-relaxed overflow-x-auto text-neutral-800 dark:text-[#E6E6E6] shadow-xs">
                    <p className="text-neutral-500 dark:text-[#737373]">// Modular Express Controller Pattern</p>
                    <p><span className="text-[#FFA116] font-semibold">const</span> <span className="text-neutral-900 dark:text-[#E6E6E6] font-medium">getItems</span> = <span className="text-[#FFA116] font-semibold">async</span> (req, res) =&gt; &#123;</p>
                    <p className="pl-4 text-neutral-600 dark:text-[#A3A3A3]">res.<span className="text-[#FFA116]">status</span>(<span className="text-[#FFA116]">200</span>).<span className="text-[#FFA116]">json</span>(&#123;</p>
                    <p className="pl-8 text-neutral-700 dark:text-[#E6E6E6]">success: <span className="text-[#FFA116]">true</span>,</p>
                    <p className="pl-8 text-neutral-700 dark:text-[#E6E6E6]">count: items.length,</p>
                    <p className="pl-8 text-neutral-700 dark:text-[#E6E6E6]">data: items</p>
                    <p className="pl-4 text-neutral-600 dark:text-[#A3A3A3]">&#125;);</p>
                    <p>&#125;;</p>
                    <p className="text-neutral-500 dark:text-[#737373] pt-1">// Postman verified routes:</p>
                    <p className="text-[#FFA116]">router.<span className="text-[#CC7A0A]">route</span>(<span className="text-neutral-800 dark:text-[#E6E6E6]">'/'</span>)</p>
                    <p className="pl-4 text-neutral-700 dark:text-[#A3A3A3]">.<span className="text-[#CC7A0A]">get</span>(getItems)</p>
                    <p className="pl-4 text-neutral-700 dark:text-[#A3A3A3]">.<span className="text-[#CC7A0A]">post</span>(createItem);</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between text-[11px] text-neutral-500 dark:text-[#A3A3A3]">
                  <span>Routing Architecture: Decoupled</span>
                  <span className="text-[#FFA116] hover:underline cursor-pointer font-medium" onClick={() => setSelectedProject(projects[1])}>
                    Open API Sandbox &rarr;
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT 3: Imposter Game */}
          {projects[2] && (
            <div 
              id="project-card-imposter-game"
              className="rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] shadow-md hover:shadow-xl transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-orange-500/10 text-orange-600 dark:text-[#FFA116] border border-[#CC7A0A]/30">
                      Real-Time Multiplayer
                    </span>
                    <span className="text-xs font-mono text-[#FFA116] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Live on Render &middot; Node.js + Socket.IO
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-[#E6E6E6] tracking-tight">
                    {projects[2].title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A3A3A3] leading-relaxed">
                    {projects[2].shortDescription}
                  </p>

                  {/* Bullet points from resume */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                      Core Implementation Features:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3]">
                      {projects[2].role.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {projects[2].techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-neutral-100 dark:bg-[#171717] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 dark:border-[#2A2A2A] flex flex-wrap items-center gap-3">
                  <a
                    id="btn-live-imposter-game"
                    href={projects[2].liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-xs sm:text-sm font-bold shadow-xs transition-colors"
                  >
                    <Gamepad2 className="w-4 h-4 text-[#0F0F0F]" />
                    <span>Play Live Game</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    id="btn-inspect-imposter-game"
                    onClick={() => setSelectedProject(projects[2])}
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#252525] text-neutral-800 dark:text-[#E6E6E6] text-xs sm:text-sm font-medium transition-colors border border-neutral-300 dark:border-[#2A2A2A] cursor-pointer"
                  >
                    <Play className="w-4 h-4" />
                    <span>Try Pass &amp; Play Demo</span>
                  </button>

                  <a
                    id="btn-github-imposter-game"
                    href={projects[2].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#171717] dark:hover:bg-[#252525] text-neutral-800 dark:text-[#E6E6E6] text-xs sm:text-sm font-medium transition-colors border border-neutral-300 dark:border-[#2A2A2A]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Game Engine Flow & State Visualizer */}
              <div className="lg:col-span-5 bg-neutral-100 dark:bg-[#121212] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-[#2A2A2A] font-mono text-xs text-neutral-700 dark:text-[#A3A3A3] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#2A2A2A] pb-3">
                    <div className="flex items-center gap-2 text-[#FFA116] font-semibold">
                      <Gamepad2 className="w-4 h-4" />
                      <span>Game State Machine Flow</span>
                    </div>
                    <span className="text-[10px] text-orange-600 dark:text-[#FFA116] bg-orange-500/10 px-2 py-0.5 rounded border border-[#CC7A0A]/30">
                      Server-Authoritative
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between shadow-xs">
                      <span className="text-neutral-800 dark:text-[#E6E6E6]">1. Lobby &amp; Room Code</span>
                      <span className="text-[#FFA116] text-[10px]">Socket.IO Rooms</span>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between shadow-xs">
                      <span className="text-neutral-800 dark:text-[#E6E6E6]">2. Secret Word Delivery</span>
                      <span className="text-[#FFA116] text-[10px]">Private Per-Player Event</span>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between shadow-xs">
                      <span className="text-neutral-800 dark:text-[#E6E6E6]">3. Timed Discussion</span>
                      <span className="text-[#FFA116] text-[10px]">Server Timer</span>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between shadow-xs">
                      <span className="text-neutral-800 dark:text-[#E6E6E6]">4. Voting &amp; Result</span>
                      <span className="text-[#FFA116] text-[10px]">Tally + Tie Rules</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between text-[11px] text-neutral-500 dark:text-[#A3A3A3]">
                  <span>State: In-Memory Rooms on Server</span>
                  <span className="text-[#FFA116] hover:underline cursor-pointer font-medium" onClick={() => setSelectedProject(projects[2])}>
                    Pass &amp; Play Demo &rarr;
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Controller */}
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </section>
  );
};
