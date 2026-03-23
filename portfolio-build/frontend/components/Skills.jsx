const PROFICIENT = ['Python', 'Java', 'JavaScript', 'C', 'SQL', 'HTML/CSS', 'Git', 'Chrome API', 'Linux', 'OOP', 'DSA'];
const LEARNING   = ['React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker'];

export default function Skills() {
  return (
    <section id="skills">
      <div className="sec-head">
        <span className="sec-num">03</span>
        <span className="sec-title">Skills</span>
        <span className="sec-line" />
      </div>

      <table className="skills-table">
        <tbody>
          <tr className="reveal">
            <td className="skill-cat" style={{ paddingTop: 18, verticalAlign: 'top' }}>proficient</td>
            <td>
              <div className="skill-items">
                {PROFICIENT.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </td>
          </tr>
          <tr className="reveal">
            <td className="skill-cat" style={{ paddingTop: 18, verticalAlign: 'top', opacity: 0.6 }}>learning</td>
            <td>
              <div className="skill-items">
                {LEARNING.map((s) => (
                  <span key={s} className="skill-pill" style={{ opacity: 0.55 }}>{s}</span>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
