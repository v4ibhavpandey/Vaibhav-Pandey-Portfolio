import React, { useState } from 'react';
import { Github, ExternalLink, Play, Clock, Rocket, BookOpen } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CC7A0A]';

const StatusBadge: React.FC<{ project: Project }> = ({ project }) =>
  project.liveDemoUrl ? (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-green-500/10 text-green-700 dark:text-green-400 border border-green-600/30">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
      Live
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-neutral-500/10 text-neutral-700 dark:text-[#A3A3A3] border border-neutral-400/40">
      <Clock className="w-3 h-3" aria-hidden="true" />
      Not deployed
    </span>
  );

const ProjectCard: React.FC<{ project: Project; onOpen: (p: Project) => void }> = ({ project, onOpen }) => {
  const bullets = project.role.slice(0, 3);
  const improvement = project.improvements?.[0];
  const kind =
    project.status === 'Learning project' ? 'Learning project' : project.liveDemoUrl ? null : 'Personal project';

  return (
    <article
      id={`project-card-${project.id}`}
      className="rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12"
    >
      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col gap-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge project={project} />
            {kind && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-orange-500/10 text-orange-700 dark:text-[#FFA116] border border-[#CC7A0A]/30">
                <BookOpen className="w-3 h-3" aria-hidden="true" />
                {kind}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-[#E6E6E6] tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-neutral-500 dark:text-[#A3A3A3]">{project.subtitle}</p>
          <p className="text-sm sm:text-base text-neutral-700 dark:text-[#A3A3A3] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <ul className="space-y-2 text-sm text-neutral-700 dark:text-[#A3A3A3] list-disc pl-5 marker:text-[#FFA116]">
          {bullets.map((b) => (
            <li key={b} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded text-xs font-mono bg-neutral-100 dark:bg-[#171717] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A]"
            >
              {t}
            </span>
          ))}
        </div>

        {improvement && (
          <p className="text-sm text-neutral-600 dark:text-[#A3A3A3] border-l-2 border-[#FFA116] pl-3">
            <strong className="font-semibold text-neutral-900 dark:text-[#E6E6E6]">What I would improve: </strong>
            {improvement}
          </p>
        )}

        <div className="flex flex-wrap gap-3 pt-1">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] text-sm font-bold transition-colors ${focusRing}`}
            >
              <Rocket className="w-4 h-4" aria-hidden="true" />
              Play live
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] bg-white dark:bg-[#171717] hover:bg-neutral-100 dark:hover:bg-[#252525] text-neutral-900 dark:text-[#E6E6E6] text-sm font-bold transition-colors ${focusRing}`}
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            Source code
          </a>
          {project.hasInteractiveSandbox && (
            <button
              type="button"
              onClick={() => onOpen(project)}
              className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-neutral-300 dark:border-[#2A2A2A] bg-white dark:bg-[#171717] hover:bg-neutral-100 dark:hover:bg-[#252525] text-neutral-900 dark:text-[#E6E6E6] text-sm font-bold transition-colors cursor-pointer ${focusRing}`}
            >
              <Play className="w-4 h-4" aria-hidden="true" />
              Details &amp; demo
            </button>
          )}
        </div>
      </div>

      <div className="lg:col-span-5 p-6 sm:p-8 bg-neutral-50 dark:bg-[#171717] border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-[#2A2A2A] flex flex-col gap-5">
        {project.screenshot && (
          <img
            src={project.screenshot}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="w-full rounded-lg border border-neutral-200 dark:border-[#2A2A2A]"
          />
        )}
        {project.facts && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-700 dark:text-[#FFA116] mb-3">
              At a glance
            </h4>
            <dl className="space-y-3">
              {project.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                    {f.label}
                  </dt>
                  <dd className="text-sm text-neutral-900 dark:text-[#E6E6E6] leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#171717] transition-colors duration-200"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-orange-700 dark:text-[#FFA116] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA116]"></span>
            Projects
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-[#E6E6E6]"
          >
            Things I have built.
          </h2>
          <p className="mt-2 text-base text-neutral-600 dark:text-[#A3A3A3]">
            Three projects, each with source code on GitHub. Only the Imposter Game is hosted online. The other two run
            locally, and each card says so.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
