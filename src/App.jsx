import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCerts from './components/EducationCerts';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Header / Nav */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-backdrop-blur:bg-white/60 bg-white/50 border-b border-white/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Aditya Jain</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#education" className="hover:text-indigo-600">Education</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <EducationCerts />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Aditya Jain • Designed & built with React and Tailwind
        </div>
      </footer>
    </div>
  );
}

export default App;
