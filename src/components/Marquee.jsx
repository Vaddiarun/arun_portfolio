import { DATA } from '../data/profile'

export default function Marquee() {
  const items = DATA.marquee.concat(DATA.marquee)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="marquee">
        {items.map((m, i) => (
          <span className="marquee-item" key={i}><span className="star">✦</span>{m}</span>
        ))}
      </div>
    </div>
  )
}
