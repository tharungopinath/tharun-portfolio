const LINKS = [
  {
    label: 'email',
    value: 'gopinatt@uwindsor.ca',
    href: 'mailto:gopinatt@uwindsor.ca',
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/tharunkaarthik-gopinath',
    href: 'https://www.linkedin.com/in/tharunkaarthik-gopinath/',
    external: true,
  },
  {
    label: 'github',
    value: 'github.com/tharungopinath',
    href: 'https://github.com/tharungopinath',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="sec-head">
        <span className="sec-num">06</span>
        <span className="sec-title">Contact</span>
        <span className="sec-line" />
      </div>

      <p style={{ color: 'var(--muted)', fontSize: 12, marginBottom: 20, maxWidth: 400 }}>
        Open to co-op positions, interesting projects, and good conversations.
      </p>

      {LINKS.map((l) => (
        <a
          key={l.label}
          className="contact-row reveal"
          href={l.href}
          target={l.external ? '_blank' : undefined}
          rel={l.external ? 'noopener noreferrer' : undefined}
        >
          <span className="contact-label">{l.label}</span>
          <span className="contact-val">{l.value}</span>
          <span className="contact-arrow">↗</span>
        </a>
      ))}
    </section>
  );
}
