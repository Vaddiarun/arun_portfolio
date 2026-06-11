import { DATA } from '../data/profile'

export default function About() {
  return (
    <section className="section" id="about" data-screen-label="About">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">01 — About</span>
          <h2 className="sec-title">Turning ideas into<br /><span className="grad-text">fast, reliable interfaces.</span></h2>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <p className="about-lead">
              I'm a Frontend Developer with <span className="grad-text">3+ years</span> building scalable,
              high-performance web &amp; mobile applications for enterprise clients.
            </p>
            <p className="about-body">
              I specialize in <strong>React.js</strong>, <strong>TypeScript</strong> and <strong>React Native</strong>,
              with a strong focus on real-time data, performance and accessible, mobile-first UI. At GND Solutions I build
              live IoT monitoring dashboards that visualize and control 100+ connected industrial devices over REST &amp;
              WebSocket streams, deployed on <strong>AWS Amplify</strong> CI/CD.
            </p>
            <p className="about-body">
              I care about clean, component-driven architecture and the details that make an interface feel effortless —
              typed reusable components, sensible state with Redux Toolkit &amp; React Query, and layouts that hold up on
              every screen.
            </p>

            <div className="metric-row">
              <div className="metric"><span className="mv">+25%</span><span className="mk">Rendering performance</span></div>
              <div className="metric"><span className="mv">−40%</span><span className="mk">Release cycle time</span></div>
              <div className="metric"><span className="mv">+30%</span><span className="mk">Frontend efficiency</span></div>
            </div>

            <div className="about-tags">
              <span className="tag">📍 {DATA.location}</span>
              <span className="tag">TypeScript</span>
              <span className="tag">React Native</span>
              <span className="tag">Next.js</span>
              <span className="tag">GraphQL</span>
              <span className="tag">Open to opportunities</span>
            </div>
          </div>

          <div className="reveal d2">
            <div className="edu-card" data-spotlight>
              <h4>Education</h4>
              <div>
                {DATA.education.map((e, i) => (
                  <div className="edu-item" key={i}>
                    <div className="yr">{e.yr}</div>
                    <div className="deg">{e.deg}</div>
                    <div className="inst">{e.inst}</div>
                    {e.cgpa && <span className="cgpa">{e.cgpa}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
