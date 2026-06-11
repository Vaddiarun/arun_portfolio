import { DATA } from '../data/profile'
import { ArrowRight } from './icons'

const LINKS = [
  ['#about', 'About'],
  ['#skills', 'Skills'],
  ['#experience', 'Experience'],
  ['#work', 'Work'],
  ['#certs', 'Certifications'],
]

export default function Navbar() {
  return (
    <nav className="nav" id="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="brand">
          <span className="mark">A<span className="dot">.</span></span>
          <span>{DATA.name}</span>
        </a>
        <div className="nav-links" id="navLinks">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#contact" className="nav-cta">
            Let's talk <ArrowRight width="14" height="14" />
          </a>
        </div>
      </div>
    </nav>
  )
}
