import { useState } from 'react'
import { DATA } from '../data/profile'
import { ChevronDown } from './icons'

function CertCard({ c }) {
  return (
    <div className="cert-card">
      <div className="cert-logo" style={{ background: c.color }}>{c.iss[0]}</div>
      <div>
        <div className="ct">{c.name}</div>
        <div className="ci"><span className="iss">{c.iss}</span> · {c.date}</div>
        <div className="cid">ID: {c.id}</div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [open, setOpen] = useState(false)
  const total = DATA.certsTop.length + DATA.certsRest.length

  return (
    <section className="section" id="certs" data-screen-label="Certifications">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">05 — Certifications</span>
          <h2 className="sec-title">Always learning.</h2>
          <p className="sec-sub">{total}+ certifications &amp; job simulations across full-stack development, data, and software engineering.</p>
        </div>

        <div className="cert-stats reveal d1">
          <div className="cert-stat"><span className="v" data-count="21" data-suffix="+">0</span><span className="k">Total certifications</span></div>
          <div className="cert-stat"><span className="v" data-count="9" data-suffix="">0</span><span className="k">Job simulations</span></div>
          <div className="cert-stat"><span className="v" data-count="6" data-suffix="">0</span><span className="k">Issuing bodies</span></div>
        </div>

        <div className="cert-grid" id="certTop">
          {DATA.certsTop.map((c, i) => <CertCard c={c} key={i} />)}
        </div>

        <div className={'cert-collapsible' + (open ? ' open' : '')} id="certCollapsible">
          <div>
            <div className="cert-grid" id="certRest">
              {DATA.certsRest.map((c, i) => <CertCard c={c} key={i} />)}
            </div>
          </div>
        </div>

        <div className="cert-more-wrap">
          <button className="btn btn-ghost" id="certToggle" onClick={() => setOpen((o) => !o)}>
            <span>{open ? 'Show less' : `Show all ${total} certifications`}</span>
            <span className="ico" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .4s cubic-bezier(.22,1,.36,1)' }}>
              <ChevronDown />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
