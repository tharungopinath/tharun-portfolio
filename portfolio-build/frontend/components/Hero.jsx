import { useEffect, useRef } from 'react';

const TECHS = [
  { label: 'Python'     },
  { label: 'Java'       },
  { label: 'JavaScript' },
  { label: 'FastAPI'    },
  { label: 'Next.js'    },
  { label: 'React'      },
  { label: 'PostgreSQL' },
  { label: 'Docker'     },
  { label: 'Git'        },
  { label: 'Linux'      },
  { label: 'C'          },
  { label: 'SQL'        },
  { label: 'AWS'        },
];

const POSITIONS = [
  [12, 8], [58, 2], [20, 30], [60, 22], [5, 52],
  [45, 48], [75, 40], [18, 68], [55, 65], [80, 12],
  [30, 85], [68, 80], [88, 60],
];

export default function Hero({ onOpenResume }) {
  const cloudRef = useRef(null);

  useEffect(() => {
    const cloud = cloudRef.current;
    if (!cloud) return;

    TECHS.forEach((t, i) => {
      const [lp, tp] = POSITIONS[i] || [Math.random() * 80, Math.random() * 80];
      const dur = 5 + Math.random() * 4;
      const delay = -(Math.random() * dur);
      const amp = -(6 + Math.random() * 10);

      const pill = document.createElement('span');
      pill.className = 'tech-pill';
      pill.textContent = t.label;
      pill.style.cssText = `
        left:${lp}%; top:${tp}%;
        --dur:${dur.toFixed(1)}s;
        --delay:${delay.toFixed(1)}s;
        --amp:${amp.toFixed(1)}px;
      `;
      cloud.appendChild(pill);
    });

    return () => {
      while (cloud.firstChild) cloud.removeChild(cloud.firstChild);
    };
  }, []);

  return (
    <section id="about">
      {/* LEFT */}
      <div className="hero-left">
        <p className="hero-eyebrow">// tharunkaarthik gopinath</p>

        <div className="stats-grid reveal">
          <div className="stat-cell">
            <div className="stat-val" data-target="93" data-suffix="%">0%</div>
            <div className="stat-lbl">major average</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val">2nd</div>
            <div className="stat-lbl">ICPC @ UWindsor</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val">Top 20%</div>
            <div className="stat-lbl">ACSL nationals</div>
          </div>
          <div className="stat-cell">
            <div className="stat-val">Dean&apos;s</div>
            <div className="stat-lbl">Honor Roll</div>
          </div>
        </div>

        <p className="hero-bio reveal">
          CS Honours Co-op student at <strong>University of Windsor</strong>. I build clean,
          performant software - from real-time AI dashboards to Chrome extensions with real
          users. Dean&apos;s Honor Roll, Presidential Scholarship, AWS certified.
        </p>

        <div className="btn-row reveal">
          <a className="btn primary" href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            view projects
          </a>
          <button className="btn" onClick={onOpenResume}>resume</button>
          <a className="btn" href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            contact
          </a>
        </div>
      </div>

      {/* RIGHT: floating tech cloud */}
      <div className="hero-right reveal">
        <div className="tech-cloud" ref={cloudRef} />
      </div>
    </section>
  );
}
