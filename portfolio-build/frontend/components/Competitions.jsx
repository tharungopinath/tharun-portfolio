const COMPETITIONS = [
  {
    name: 'ICPC East Central NA - Regional Competitor',
    date: 'Nov 2024',
    result: '✦ 2nd Place at University of Windsor',
    desc: 'Led a 3-member team solving timed algorithmic challenges in Python. Secured 2nd among UWindsor teams in the 2024 qualifiers and advanced to Regionals.',
  },
  {
    name: 'American Computer Science League',
    date: 'Aug 2022 - May 2024',
    result: '✦ National Finalist - Top 20%',
    desc: 'Competed in 4 national-level contests on number systems, logic circuits, and data structures. Qualified for the National All-Stars round.',
  },
];

export default function Competitions() {
  return (
    <section id="competitions">
      <div className="sec-head">
        <span className="sec-num">05</span>
        <span className="sec-title">Competitions</span>
        <span className="sec-line" />
      </div>

      {COMPETITIONS.map((c, i) => (
        <div key={i} className="comp-item reveal">
          <div className="comp-header">
            <span className="comp-name">{c.name}</span>
            <span className="comp-date">{c.date}</span>
          </div>
          <div className="comp-result">{c.result}</div>
          <p className="comp-desc">{c.desc}</p>
        </div>
      ))}
    </section>
  );
}
