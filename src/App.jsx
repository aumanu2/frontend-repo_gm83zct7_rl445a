import { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Showcase from './components/Showcase.jsx';
import Contact from './components/Contact.jsx';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return (
    <div className="scroll-smooth min-h-screen bg-neutral-950 text-neutral-100 selection:bg-red-600/40 selection:text-white">
      {/* Glow backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-[50rem] translate-x-1/4 translate-y-1/4 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* Theme toggle */}
      <button
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-2 text-sm text-neutral-200 backdrop-blur transition hover:bg-neutral-800"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
      </button>

      <Hero />
      <About />
      <Showcase />
      <Contact />
    </div>
  );
}
