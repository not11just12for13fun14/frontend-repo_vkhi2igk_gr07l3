import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';

const groups = [
  {
    title: 'Programming & Frameworks',
    icon: Code,
    items: ['Java', 'Python', 'C', 'Django', 'Streamlit', 'React.js', 'Flutter', 'Android', 'Dart', 'MySQL'],
  },
  {
    title: 'Web & Frontend',
    icon: Code,
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Redux', 'Context API'],
  },
  {
    title: 'Data & AI/ML',
    icon: Database,
    items: ['MySQL', 'Data Structures', 'Basic ML', 'Pandas', 'NumPy', 'Visualization'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    items: ['Git/GitHub', 'Firebase', 'Hadoop', 'Unix/Linux'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <g.icon className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-slate-900">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
