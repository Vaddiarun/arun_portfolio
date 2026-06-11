import { DATA } from '../data/profile'
import { ArrowRight, Mail, Phone, Pin } from './icons'

export default function Contact() {
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="wrap">
        <div className="contact-card reveal-scale" data-spotlight>
          <div className="glow c1"></div>
          <div className="glow c2"></div>
          <div className="inner">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>06 — Contact</span>
            <h2 style={{ marginTop: '18px' }}>Let's build something<br /><span className="grad-text">great together.</span></h2>
            <p>Have a role, a project, or just want to talk frontend &amp; IoT? My inbox is always open.</p>
            <div className="contact-actions">
              <a href={`mailto:${DATA.email}`} className="btn btn-primary">
                {DATA.email} <span className="ico"><ArrowRight /></span>
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noopener" className="btn btn-ghost">LinkedIn</a>
            </div>
            <div className="contact-meta">
              <a href={`mailto:${DATA.email}`}>
                <span className="mi"><Mail /></span>{DATA.email}
              </a>
              <a href={`tel:${DATA.phoneHref}`}>
                <span className="mi"><Phone /></span>{DATA.phone}
              </a>
              <div>
                <span className="mi"><Pin /></span>{DATA.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
