import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Loader from '@/components/Loader';
import Sidebar from '@/components/Sidebar';
import ResumeModal from '@/components/ResumeModal';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Competitions from '@/components/Competitions';
import Contact from '@/components/Contact';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef(null);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Cursor spotlight
  useEffect(() => {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;
    const handleMouseMove = (e) => {
      spotlight.style.setProperty('--mx', e.clientX + 'px');
      spotlight.style.setProperty('--my', e.clientY + 'px');
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Active nav tracking on scroll
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const sections = el.querySelectorAll('section[id]');
    const handleScroll = () => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
      let cur = '';
      if (atBottom) {
        cur = sections[sections.length - 1]?.id || '';
      } else {
        sections.forEach((s) => {
          if (el.scrollTop >= s.offsetTop - 120) cur = s.id;
        });
      }
      setActiveSection(cur || 'about');
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal + count-up animation
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    const countTimers = new WeakMap();

    function countUp(statEl) {
      if (countTimers.has(statEl)) clearInterval(countTimers.get(statEl));
      const target = +statEl.dataset.target;
      const suffix = statEl.dataset.suffix || '%';
      let cur = 0;
      const step = Math.ceil(target / 40);
      const t = setInterval(() => {
        cur = Math.min(cur + step, target);
        statEl.textContent = cur + suffix;
        if (cur >= target) clearInterval(t);
      }, 30);
      countTimers.set(statEl, t);
    }

    function resetCount(statEl) {
      if (countTimers.has(statEl)) {
        clearInterval(countTimers.get(statEl));
        countTimers.delete(statEl);
      }
      const suffix = statEl.dataset.suffix || '%';
      statEl.textContent = '0' + suffix;
    }

    let scrollDir = 'down';
    let lastScrollY = el.scrollTop;
    const onScroll = () => {
      scrollDir = el.scrollTop > lastScrollY ? 'down' : 'up';
      lastScrollY = el.scrollTop;
    };
    el.addEventListener('scroll', onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const targets = e.target.querySelectorAll('[data-target]');
            if (scrollDir === 'up') {
              e.target.style.transition = 'none';
              e.target.classList.add('in');
              requestAnimationFrame(() => { e.target.style.transition = ''; });
              targets.forEach(countUp);
            } else {
              e.target.classList.add('in');
              if (targets.length) {
                e.target.addEventListener('transitionend', () => targets.forEach(countUp), { once: true });
              }
            }
          } else {
            // Only remove 'in' when element is fully outside the root —
            // prevents flickering in the rootMargin dead zone when scrolling up
            const rect = e.boundingClientRect;
            const root = e.rootBounds;
            if (!root || rect.bottom < root.top || rect.top > root.bottom) {
              e.target.classList.remove('in');
              e.target.querySelectorAll('[data-target]').forEach(resetCount);
            }
          }
        });
      },
      { threshold: 0.08, root: el, rootMargin: '0px 0px -60px 0px' }
    );

    el.querySelectorAll('.reveal').forEach((r) => obs.observe(r));
    return () => { obs.disconnect(); el.removeEventListener('scroll', onScroll); };
  }, []);

  // Escape key closes modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleNavClick = (sectionId) => {
    const el = mainRef.current;
    if (!el) return;
    const section = el.querySelector(`#${sectionId}`);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Tharunkaarthik Gopinath</title>
        <meta name="description" content="CS Honours Co-op student at University of Windsor. Building clean, performant software." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loader />
      <div id="spotlight" />

      <ResumeModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <Sidebar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        onOpenResume={() => setModalOpen(true)}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="main" id="main-scroll" ref={mainRef}>
        <Hero onOpenResume={() => setModalOpen(true)} />
        <Projects />
        <Skills />
        <Experience />
        <Competitions />
        <Contact />
        <footer className="footer">
          <span>© 2026 Tharunkaarthik Gopinath</span>
        </footer>
      </main>
    </>
  );
}
