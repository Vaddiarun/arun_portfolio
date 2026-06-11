import { DATA, ICONS } from '../data/profile'
import RawSvg from './RawSvg'

export default function Skills() {
  return (
    <section className="section" id="skills" data-screen-label="Skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">02 — Skills &amp; Stack</span>
          <h2 className="sec-title">The tools I build with.</h2>
          <p className="sec-sub">A focused frontend toolkit — from component architecture and typed state to real-time data viz and cloud deployment.</p>
        </div>
        <div className="skills-grid" id="skillsGrid">
          {DATA.skills.map((s, i) => (
            <div className={`skill-cat reveal d${i % 4}`} data-spotlight key={i}>
              <div className="ci"><RawSvg html={ICONS[s.icon]} /></div>
              <h4>{s.title}</h4>
              <div className="num">{String(s.items.length).padStart(2, '0')} tools</div>
              <div className="skill-list">
                {s.items.map((it) => (
                  <span className="skill-pill" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
