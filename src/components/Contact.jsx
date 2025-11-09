import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: '' });
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || 'Failed to send');
      setStatus({ sending: false, ok: true, msg: data.message || 'Message sent successfully!' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: err.message || 'Something went wrong' });
    }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-fuchsia-500/10 p-2">
            <Mail className="h-6 w-6 text-fuchsia-300" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Get in touch</h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-slate-300">
              Send a message and I’ll get back within 24 hours. The form will deliver directly to my inbox.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-slate-400 outline-none ring-0 focus:border-fuchsia-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-slate-400 outline-none ring-0 focus:border-fuchsia-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-slate-400 outline-none ring-0 focus:border-fuchsia-400"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status.sending}
                className="inline-flex items-center justify-center rounded-lg bg-fuchsia-500 px-5 py-2 font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status.sending ? 'Sending…' : 'Send message'}
              </button>
              {status.msg && (
                <div className={`text-sm ${status.ok ? 'text-emerald-300' : 'text-rose-300'}`}>{status.msg}</div>
              )}
            </form>
          </div>

          <div className="grid content-start gap-4">
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-6 ring-1 ring-white/10">
              <div className="text-sm text-slate-300">Email</div>
              <a href="mailto:jainaditya0404@gmail.com" className="text-lg font-semibold text-white hover:underline">
                jainaditya0404@gmail.com
              </a>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-6 ring-1 ring-white/10">
              <div className="text-sm text-slate-300">LinkedIn</div>
              <a href="https://www.linkedin.com/in/jain04/" target="_blank" rel="noreferrer" className="text-lg font-semibold text-white hover:underline">
                linkedin.com/in/jain04
              </a>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-6 ring-1 ring-white/10">
              <div className="text-sm text-slate-300">GitHub</div>
              <a href="https://github.com/jain04" target="_blank" rel="noreferrer" className="text-lg font-semibold text-white hover:underline">
                github.com/jain04
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
