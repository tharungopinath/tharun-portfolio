import { useState, useEffect, useRef } from 'react';

const PROJECTS = [
  {
    num: '01',
    name: 'DocuBridge',
    desc: 'Real-time collaborative desktop word processor with delta-based sync, Azure SQL persistence, and .docx export - built for simultaneous multi-user editing.',
    highlights: [
      'Delta-based sync via Quill.js operational transform with an 80ms polling loop for near-real-time collaboration',
      'Bridged JavaFX WebView and Java backend for clipboard ops, Find & Replace, and .docx import/export via Apache POI',
      'Integrated Azure SQL Server for persistent storage with BCrypt-secured auth and 5-second auto-save',
    ],
    tags: [
      { label: 'Java', accent: true },
      { label: 'JavaFX' },
      { label: 'Quill.js' },
      { label: 'WebSocket' },
      { label: 'Azure SQL' },
      { label: 'Apache POI' },
      { label: 'team project', dim: true },
    ],
    github: 'https://github.com/KoleoshoNifemi/DocuBridge-',
  },
  {
    num: '02',
    name: 'Model Router AI',
    desc: 'Real-time LLM routing dashboard with SSE streaming - visualizes routing decisions, confidence scores, latency, and escalation state across model tiers.',
    highlights: [
      'Owned frontend architecture - routing visualizations, loading states, and error handling',
      'SSE streaming for token-by-token model responses with live metadata',
      'Multiple API modes (standard, streaming, analysis-only) with consistent UX',
    ],
    tags: [
      { label: 'Python', accent: true },
      { label: 'FastAPI' },
      { label: 'JavaScript' },
      { label: 'SSE' },
      { label: 'team project', dim: true },
    ],
    github: 'https://github.com/nandth/model-router-ai',
    live: 'https://model-router-ai-five.vercel.app/',
  },
  {
    num: '03',
    name: 'Emplates Chrome Extension',
    desc: 'Chrome extension with 50+ installs and 5-star rating - injects reusable email templates into Gmail and Outlook using MutationObserver for SPA compatibility.',
    highlights: [
      'MutationObserver for dynamic DOM updates in SPA environments',
      'Local persistence via Chrome Storage API with async CRUD operations',
      'Modular content script separating DOM injection from state management',
    ],
    tags: [
      { label: 'JavaScript', accent: true },
      { label: 'Chrome API' },
      { label: 'HTML5' },
      { label: 'CSS3' },
    ],
    github: 'https://github.com/tharungopinath/emplates_chrome_extension',
    live: 'https://chromewebstore.google.com/detail/ffjcgkbendaloplpegdielmjhanlcleh?utm_source=item-share-cb',
  },
  {
    num: '04',
    name: 'WrdGuess',
    desc: 'Graphical Wordle recreation built in Python - six attempts to guess a five-letter word with color-coded tile and keyboard feedback.',
    highlights: [
      'Full Tkinter GUI with centered window, letter input, and on-screen keyboard tracker',
      'Real-time tile updates with green/yellow/gray feedback validated against a 5-letter dictionary',
      'Win/loss screens with custom icon assets, Pillow image rendering, and Play Again flow',
    ],
    tags: [
      { label: 'Python', accent: true },
      { label: 'Tkinter' },
      { label: 'Pillow' },
      { label: 'Docker' },
    ],
    github: 'https://github.com/tharungopinath/WrdGuess',
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const [revealed, setRevealed] = useState(new Set());
  const rowRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = +e.target.dataset.revealIdx;
          if (e.isIntersecting) {
            setRevealed((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          } else {
            const rect = e.boundingClientRect;
            const root = e.rootBounds;
            if (!root || rect.bottom < root.top || rect.top > root.bottom) {
              setRevealed((prev) => {
                if (!prev.has(idx)) return prev;
                const next = new Set(prev);
                next.delete(idx);
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    rowRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="projects">
      <div className="sec-head">
        <span className="sec-num">02</span>
        <span className="sec-title">Projects</span>
        <span className="sec-line" />
      </div>

      {PROJECTS.map((p, i) => (
        <div
          key={p.num}
          ref={(el) => (rowRefs.current[i] = el)}
          data-reveal-idx={i}
          className={`project-row reveal${revealed.has(i) ? ' in' : ''}${openIndex === i ? ' open' : ''}`}
          onClick={() => toggle(i)}
        >
          <div className="project-summary">
            <span className="proj-num">{p.num}</span>
            <span className="proj-name">{p.name}</span>
            <span className="proj-arrow">›</span>
          </div>
          <div className="project-detail">
            <p className="proj-desc">{p.desc}</p>
            <ul className="proj-highlights">
              {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
            </ul>
            <div className="proj-tags">
              {p.tags.map((t, j) => (
                <span
                  key={j}
                  className={`tag${t.accent ? ' a' : ''}`}
                  style={t.dim ? { borderColor: 'var(--muted)', opacity: 0.6 } : {}}
                >
                  {t.label}
                </span>
              ))}
            </div>
            <div className="proj-links" onClick={(e) => e.stopPropagation()}>
              <a className="proj-link" href={p.github} target="_blank" rel="noopener noreferrer">github ↗</a>
              {p.live && <a className="proj-link" href={p.live} target="_blank" rel="noopener noreferrer">live ↗</a>}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
