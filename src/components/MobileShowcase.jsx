import React from 'react';
import { Smartphone, BarChart2 } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const MobileShowcase = () => {
  return (
    <section id="mobile" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-indigo-600/10 p-2">
            <Smartphone className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Mobile & Data Visuals</h2>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/0qja2gdaE31FO-0b/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            <div className="relative p-6">
              <h3 className="text-lg font-semibold text-slate-900">3D Phone Mockup</h3>
              <p className="mt-2 text-slate-700">Interactive 3D phone to represent Android/Flutter app craftsmanship, smooth animation and responsive performance.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/0rA76g9bY1v1UzgO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            <div className="relative p-6">
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-fuchsia-600" />
                <h3 className="text-lg font-semibold text-slate-900">Animated Data Analysis</h3>
              </div>
              <p className="mt-2 text-slate-700">Showcases motion-driven charts and dashboards highlighting analytics, ML experiments, and visualization skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;
