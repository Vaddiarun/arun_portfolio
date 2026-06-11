import { DATA } from '../data/profile'
import { LinkedIn, Mail, Phone } from './icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="copy">© {new Date().getFullYear()} {DATA.name} · Frontend Developer · Built with care.</div>
        <div className="socials">
          <a href={DATA.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn width="18" height="18" /></a>
          <a href={`mailto:${DATA.email}`} aria-label="Email"><Mail width="18" height="18" /></a>
          <a href={`tel:${DATA.phoneHref}`} aria-label="Phone"><Phone width="18" height="18" /></a>
        </div>
      </div>
    </footer>
  )
}
