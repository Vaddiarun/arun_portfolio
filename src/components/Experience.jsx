import { DATA } from '../data/profile'

export default function Experience() {
  return (
    <section className="section" id="experience" data-screen-label="Experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">03 — Experience</span>
          <h2 className="sec-title">Where I've shipped.</h2>
        </div>
        <div className="exp-timeline" id="expTimeline">
          <div className="exp-line"><div className="fill" id="expFill"></div></div>
          {DATA.experience.map((x, i) => (
            <div className="exp-item reveal" key={i}>
              <div className="exp-node"><i></i></div>
              <div className="exp-card" data-spotlight>
                <div className="exp-top">
                  <div>
                    <div className="pos">{x.pos}</div>
                    <div className="co">{x.co}</div>
                  </div>
                  <span className="exp-dur">{x.dur}</span>
                </div>
                <ul className="exp-resp">
                  {x.resp.map((r, j) => <li key={j}>{r}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
