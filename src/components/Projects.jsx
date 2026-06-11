import { DATA, ICONS } from '../data/profile'
import RawSvg from './RawSvg'
import { ArrowUpRight, Lock } from './icons'

function Dashboard() {
  return (
    <div className="dash" data-tilt>
      <div className="dash-top">
        <div className="dash-dots"><i></i><i></i><i></i></div>
        <span className="dash-live">LIVE</span>
      </div>
      <div className="dash-map"><div className="veh"></div></div>
      <div className="dash-stats">
        <div className="dash-stat"><div className="v" style={{ color: 'var(--cyan)' }}>28°C</div><div className="k">TEMP</div></div>
        <div className="dash-stat"><div className="v" style={{ color: 'var(--violet)' }}>64%</div><div className="k">HUMIDITY</div></div>
        <div className="dash-stat"><div className="v" style={{ color: 'var(--emerald)' }}>87%</div><div className="k">BATTERY</div></div>
      </div>
      <div className="dash-bars">
        {Array.from({ length: 10 }).map((_, i) => (
          <i key={i} style={{ animationDelay: i * 0.2 + 's' }}></i>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const f = DATA.featured
  return (
    <section className="section" id="work" data-screen-label="Projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">04 — Selected Work</span>
          <h2 className="sec-title">Projects I'm proud of.</h2>
          <p className="sec-sub">Real applications with real users — from live device telemetry to cross-platform mobile and full e-commerce flows.</p>
        </div>

        {/* featured */}
        <div className="proj-featured reveal-scale">
          <div className="info">
            <span className="proj-badge">{f.badge}</span>
            <h3>{f.name}</h3>
            <p className="desc">{f.desc}</p>
            <ul className="proj-features">
              {f.features.map((x, i) => <li key={i}>{x}</li>)}
            </ul>
            <div className="proj-tech">
              {f.tech.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="links">
              <a href={DATA.company} target="_blank" rel="noopener" className="btn btn-primary">
                Built at GND Solutions <span className="ico"><ArrowUpRight width="15" height="15" /></span>
              </a>
            </div>
          </div>
          <div className="proj-visual" data-spotlight>
            <div className="glow"></div>
            <div className="glow g2"></div>
            <Dashboard />
          </div>
        </div>

        {/* grid */}
        <div className="proj-grid" id="projGrid">
          {DATA.projects.map((p, i) => {
            const Tag = p.url ? 'a' : 'div'
            const linkProps = p.url ? { href: p.url, target: '_blank', rel: 'noopener' } : {}
            return (
              <Tag {...linkProps} className="proj-card reveal" data-spotlight key={i}>
                <div className="pc-top">
                  <div className="pc-ico"><RawSvg html={ICONS[p.icon]} /></div>
                  <div className={'pc-arrow' + (p.url ? '' : ' pc-static')}>
                    {p.url ? <ArrowUpRight /> : <Lock />}
                  </div>
                </div>
                <h3>{p.name}</h3>
                <p className="desc">{p.desc}</p>
                {p.cred && <div className="cred">🔑 {p.cred}</div>}
                <div className="pc-tech">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
