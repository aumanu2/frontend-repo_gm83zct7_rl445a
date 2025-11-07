import { motion } from 'framer-motion';
import { GitBranch, Boxes, ShoppingBag, Scissors } from 'lucide-react';

const projects = [
  {
    title: 'Barbershop Website (Django)',
    tag: 'Web App',
    desc: 'Online booking and time management with an elegant UI and secure admin.',
    accent: 'from-red-600 to-rose-500',
    icon: Scissors,
  },
  {
    title: 'E-commerce Shoe Store (WordPress)',
    tag: 'E‑commerce',
    desc: 'Modern storefront with SEO‑friendly structure and fast checkout experience.',
    accent: 'from-sky-500 to-indigo-500',
    icon: ShoppingBag,
  },
  {
    title: 'Portfolio Builder Projects',
    tag: 'Frontend / Full‑stack',
    desc: 'Custom‑coded landing pages and dynamic Django sites tailored to each brand.',
    accent: 'from-emerald-500 to-teal-500',
    icon: Boxes,
  },
  {
    title: 'Personal Experiments',
    tag: 'Creative Lab',
    desc: 'Interactive JS features, design prototypes, and playful utility apps.',
    accent: 'from-fuchsia-500 to-pink-500',
    icon: GitBranch,
  },
];

const skills = [
  { name: 'Python', level: 92 },
  { name: 'Django', level: 90 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 92 },
  { name: 'JavaScript', level: 88 },
  { name: 'WordPress', level: 90 },
  { name: 'Git', level: 86 },
  { name: 'UI/UX awareness', level: 84 },
  { name: 'Responsive design', level: 92 },
];

export default function Showcase() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Projects grid */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-semibold text-white sm:text-3xl"
          >
            Projects
          </motion.h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.05 * i }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-neutral-900/40 p-5 backdrop-blur"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-white/5 p-2 text-white">
                    <p.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white">{p.title}</h3>
                    <p className="mt-1 text-xs text-neutral-400">{p.tag}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{p.desc}</p>
                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <button className="mt-4 inline-flex items-center text-sm text-sky-400 underline-offset-4 transition hover:text-sky-300 hover:underline">
                  View details
                </button>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="lg:w-80">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl font-semibold text-white sm:text-3xl lg:text-2xl"
          >
            Skills
          </motion.h3>
          <div className="mt-6 space-y-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-300">{s.name}</span>
                  <span className="text-xs text-neutral-400">{s.level}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-neutral-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-600 to-sky-500"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
