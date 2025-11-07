import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit for this portfolio sandbox
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    setLoading(false);
    (e.target).reset();
  };

  return (
    <footer id="contact" className="relative mx-auto mt-6 w-full max-w-6xl px-6 pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl font-semibold text-white sm:text-3xl"
      >
        Contact
      </motion.h2>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-lg border border-white/10 bg-neutral-900/40 p-5 backdrop-blur lg:col-span-2"
        >
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs text-neutral-400">Name</label>
              <input required className="mt-1 w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-sky-500" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-neutral-400">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-sky-500" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-neutral-400">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-sky-500" placeholder="Tell me about your project..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-neutral-400">I usually respond within 24 hours.</p>
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center overflow-hidden rounded-md bg-gradient-to-r from-red-600 to-sky-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-red-900/30 transition focus:outline-none disabled:opacity-60"
              >
                <span className="relative z-10">{loading ? 'Sending…' : sent ? 'Sent!' : 'Send Message'}</span>
                <span className="absolute inset-0 translate-y-1 bg-white/10 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-lg border border-white/10 bg-neutral-900/40 p-5 backdrop-blur"
        >
          <p className="text-sm text-neutral-300">Connect</p>
          <div className="mt-4 space-y-3 text-sm">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-neutral-300 transition hover:text-white">
              <span className="rounded-md bg-white/5 p-2 text-white"><Github size={16} /></span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-neutral-300 transition hover:text-white">
              <span className="rounded-md bg-white/5 p-2 text-white"><Linkedin size={16} /></span>
              LinkedIn
            </a>
            <a href="mailto:maziar@example.com" className="group flex items-center gap-3 text-neutral-300 transition hover:text-white">
              <span className="rounded-md bg-white/5 p-2 text-white"><Mail size={16} /></span>
              Email
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-400 sm:flex-row">
        <p>© 2025 Maziar Raofy</p>
        <div className="relative">
          <div className="absolute -inset-2 -z-0 rounded-full bg-gradient-to-r from-red-600/30 to-sky-500/30 blur-xl" aria-hidden />
          <span className="relative z-10">Built with passion for speed and design.</span>
        </div>
      </div>
    </footer>
  );
}
