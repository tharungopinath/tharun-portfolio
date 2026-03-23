const NAV_ITEMS = [
  { id: 'about',        label: 'about',        num: '01' },
  { id: 'projects',     label: 'projects',     num: '02' },
  { id: 'skills',       label: 'skills',       num: '03' },
  { id: 'experience',   label: 'experience',   num: '04' },
  { id: 'competitions', label: 'competitions', num: '05' },
  { id: 'contact',      label: 'contact',      num: '06' },
];

export default function Sidebar({ activeSection, onNavClick, onOpenResume, onToggleTheme, theme }) {
  return (
    <aside className="sidebar">
      <div className="s-name">
        <div className="first">Tharunkaarthik</div>
        <div className="last">Gopinath</div>
        <div className="s-role">CS Co-op · UWindsor</div>
      </div>

      <div className="status">
        <span className="sdot" />
        open to co-op
      </div>

      <nav className="s-nav">
        {NAV_ITEMS.map(({ id, label, num }) => (
          <a
            key={id}
            className={`nav-item${activeSection === id ? ' active' : ''}`}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); onNavClick(id); }}
          >
            <span className="ndot" />
            <span className="nav-label">{label}</span>
            <span className="nav-num">{num}</span>
          </a>
        ))}
      </nav>

      <div className="s-actions">
        <button className="s-btn primary" onClick={onOpenResume}>
          <span>📄</span> view resume
        </button>
        <button className="s-btn" onClick={onToggleTheme}>
          <span>{theme === 'dark' ? '☀' : '☾'}</span>
          <span>{theme === 'dark' ? 'light mode' : 'dark mode'}</span>
        </button>
      </div>

      <div className="s-socials">
        <a
          className="soc"
          href="https://github.com/tharungopinath"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          className="soc"
          href="https://www.linkedin.com/in/tharunkaarthik-gopinath/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a className="soc" href="mailto:gopinatt@uwindsor.ca" aria-label="Email">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
