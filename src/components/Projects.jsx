import React from 'react';
import { Sparkles } from 'lucide-react';

const projects = [
  {
    name: 'News App',
    description: 'Cross-platform app for browsing news articles with modern UI and real-time content.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    link: '#'
  },
  {
    name: 'AI Trip Planner',
    description: 'Intelligent planner that suggests itineraries based on trip length and interests.',
    tech: ['React', 'Tailwind CSS', 'Firebase', 'Gemini AI'],
    link: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-fuchsia-600/10 p-2">
            <Sparkles className="h-6 w-6 text-fuchsia-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <a key={p.name} href={p.link} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-indigo-500/0 to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-2 text-slate-700">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
