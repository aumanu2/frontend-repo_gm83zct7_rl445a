import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays that don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_20rem_at_70%_10%,rgba(59,130,246,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_20rem_at_30%_90%,rgba(220,38,38,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs tracking-wide text-neutral-200 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_12px_theme(colors.red.500)]" />
          Precision • Speed • Creativity
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold leading-tight text-white drop-shadow sm:text-6xl"
        >
          Maziar Raofy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 max-w-2xl text-base text-neutral-200 sm:text-lg"
        >
          Full-Stack Developer | Django & WordPress Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-2xl text-sm text-neutral-300"
        >
          I build clean, fast, and secure web solutions — from modern portfolio websites to full Django-based applications and WordPress e‑commerce experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="group relative inline-flex items-center overflow-hidden rounded-md bg-gradient-to-r from-red-600 to-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-red-900/30 transition focus:outline-none"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 translate-y-1 bg-white/10 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
          </button>
          <a href="#about" className="text-sm text-neutral-300 underline-offset-4 hover:underline">
            Learn more about me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
