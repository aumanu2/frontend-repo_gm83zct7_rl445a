import { motion } from 'framer-motion';
import { Gamepad2, Car, Code } from 'lucide-react';

export default function About() {
  const items = [
    {
      icon: <Code className="text-sky-400" size={18} />,
      title: 'Clean Code & Performance',
      body:
        'I care about architecture, readability, and speed. My focus is building reliable systems that feel effortless to use.',
    },
    {
      icon: <Gamepad2 className="text-pink-400" size={18} />,
      title: 'Gamer Energy',
      body:
        'League of Legends (Talon main) and Genshin Impact (Yae Miko fan) keep my instincts sharp and creative.',
    },
    {
      icon: <Car className="text-red-500" size={18} />,
      title: 'F1 Precision',
      body:
        'I blend logic, creativity, and focus — like hitting perfect racing lines lap after lap.',
    },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl font-semibold text-white sm:text-3xl"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 max-w-3xl text-neutral-300"
      >
        I’m a full‑stack developer who loves crafting smooth, purposeful experiences. From Django backends to responsive frontends and WordPress stores, I deliver fast, secure, and maintainable solutions.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05 * i }}
            className="rounded-lg border border-white/10 bg-neutral-900/40 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              {it.icon}
              <h3 className="text-sm font-medium text-white">{it.title}</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-300">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
