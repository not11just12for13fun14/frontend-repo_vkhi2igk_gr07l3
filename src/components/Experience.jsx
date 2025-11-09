import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'IT Intern',
    company: 'Cytecare Hospitals',
    location: 'Bengaluru, Karnataka',
    period: 'May 2025 – Present',
    points: [
      'Built a real-time analytics dashboard to reduce manual Excel workflows and track patients in real time.',
      'Developed internal software to streamline hospital operations and reporting.',
      'Contributed to internal dashboards using Django and Streamlit.'
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-indigo-600/10 p-2">
            <Briefcase className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Experience</h2>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                  <p className="text-slate-700">{exp.company} • {exp.location}</p>
                </div>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-200">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
