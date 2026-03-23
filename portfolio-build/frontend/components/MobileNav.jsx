import { useState } from 'react';

const NAV_ITEMS = [
  { id: 'about',        label: 'about',        num: '01' },
  { id: 'projects',     label: 'projects',     num: '02' },
  { id: 'skills',       label: 'skills',       num: '03' },
  { id: 'experience',   label: 'experience',   num: '04' },
  { id: 'competitions', label: 'competitions', num: '05' },
  { id: 'contact',      label: 'contact',      num: '06' },
];

export default function MobileNav({ activeSection, onNavClick, onOpenResume, onToggleTheme, theme }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNavClick(id);
    setOpen(false);
  };

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-name">
          <span className="mobile-first">Tharunkaarthik</span>
          <span className="mobile-last"> Gopinath</span>
        </div>
        <button className="mobile-hamburger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <span className={`ham-line${open ? ' open' : ''}`} />
          <span className={`ham-line${open ? ' open' : ''}`} />
          <span className={`ham-line${open ? ' open' : ''}`} />
        </button>
      </header>

      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)}>
          <nav className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-items">
              {NAV_ITEMS.map(({ id, label, num }) => (
                <a
                  key={id}
                  className={`mobile-nav-item${activeSection === id ? ' active' : ''}`}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); handleNav(id); }}
                >
                  <span className="nav-num">{num}</span>
                  <span className="nav-label">{label}</span>
                </a>
              ))}
            </div>
            <div className="mobile-drawer-actions">
              <button className="s-btn primary" onClick={() => { onOpenResume(); setOpen(false); }}>
                <span>📄</span> view resume
              </button>
              <button className="s-btn" onClick={() => { onToggleTheme(); setOpen(false); }}>
                <span>{theme === 'dark' ? '☀' : '☾'}</span>
                <span>{theme === 'dark' ? 'light mode' : 'dark mode'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
