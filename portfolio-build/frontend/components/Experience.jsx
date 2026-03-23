const EXPERIENCE = [
  {
    role: 'Teaching Assistant',
    badge: true,
    org: 'University of Windsor · COMP-2650',
    bullets: [
      'Led labs on Boolean algebra, circuit minimization, and sequential logic',
      'Assisted 100+ students with synchronous vs asynchronous circuits',
      'Evaluated assignments for logical correctness and circuit optimization',
    ],
    period: ['Sep 2025', 'Present'],
  },
  {
    role: 'First-Year Representative & Board Member',
    org: 'University of Windsor CS Society',
    bullets: [
      'Represented 700+ students and gathered departmental feedback',
      'Co-organized WinHacks Hackathon and Git & LeetCode workshops',
    ],
    period: ['Oct 2024', 'Oct 2025'],
  },
  {
    role: 'B.Sc. Computer Science, Honours Co-op',
    org: 'University of Windsor',
    bullets: [
      '93% Major Average · Dean\'s Honor Roll',
      'Presidential Level Entrance Scholarship',
      'AWS Certified Cloud Practitioner',
    ],
    period: ['Sep 2024', 'Sep 2028'],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="sec-head">
        <span className="sec-num">04</span>
        <span className="sec-title">Experience &amp; Education</span>
        <span className="sec-line" />
      </div>

      {EXPERIENCE.map((e, i) => (
        <div key={i} className="exp-item reveal">
          <div>
            <div className="exp-role">
              {e.role}
              {e.badge && <span className="badge-green">● current</span>}
            </div>
            <div className="exp-org">{e.org}</div>
            <ul className="exp-bullets">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
          <div className="exp-period">
            {e.period[0]}<br />{e.period[1]}
          </div>
        </div>
      ))}
    </section>
  );
}
