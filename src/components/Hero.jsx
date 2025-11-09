import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, Github, Linkedin, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-900 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability but keep interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 text-center sm:py-36">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur-md">
          <Rocket className="h-4 w-4 text-fuchsia-300" />
          <span className="text-slate-100">Tech • Portfolio • Interactive • Modern</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-r from-white via-fuchsia-200 to-indigo-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Aditya Jain
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Belgaum, Karnataka, India • 590016
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base">
          <a href="mailto:jainaditya0404@gmail.com" className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 font-medium text-slate-900 shadow-xl shadow-fuchsia-500/10 ring-1 ring-white/30 transition hover:bg-white">
            <Mail className="h-4 w-4" /> jainaditya0404@gmail.com
          </a>
          <a href="tel:+918073485133" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20">
            <Phone className="h-4 w-4" /> +91 80734 85133
          </a>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-medium text-white ring-1 ring-white/20 backdrop-blur">
            <MapPin className="h-4 w-4" /> Bengaluru • India
          </div>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
