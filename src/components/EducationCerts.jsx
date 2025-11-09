import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    school: 'Atria Institute of Technology, Bengaluru',
    degree: 'Master of Computer Application (MCA)',
    gpa: 'GPA: 8',
    period: 'Dec 2022 – Oct 2024',
  },
  {
    school: 'KLE’s College of BCA RLSI, Belagavi',
    degree: 'Bachelor of Computer Application (BCA)',
    gpa: 'GPA: 7.5',
    period: 'Jul 2019 – Oct 2022',
  },
];

const certs = [
  {
    name: 'Programming in Java',
    org: 'NPTEL Elite',
    period: 'May 2024',
  },
  {
    name: 'Data Science Intern',
    org: 'Prinston Smart Engineers',
    period: 'Nov 2023 – Dec 2023',
  },
];

const EducationCerts = () => {
  return (
    <section id="education" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-indigo-600/10 p-2">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.school} className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{e.school}</h3>
                  <p className="text-slate-700">{e.degree}</p>
                  <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{e.gpa}</span>
                    <span>{e.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-fuchsia-600/10 p-2">
                <Award className="h-6 w-6 text-fuchsia-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certs.map((c) => (
                <div key={c.name} className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{c.name}</h3>
                  <div className="mt-1 text-sm text-slate-700">{c.org}</div>
                  <div className="mt-2 text-sm text-slate-600">{c.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCerts;
