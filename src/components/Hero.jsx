import { useEffect, useRef } from 'react'
import { DATA } from '../data/profile'
import { ArrowRight, LinkedIn } from './icons'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const el = typedRef.current
    if (!el) return
    const words = DATA.roles
    let wi = 0, ci = 0, del = false, timer
    function tick() {
      const word = words[wi]
      el.textContent = word.slice(0, ci)
      if (!del && ci < word.length) { ci++; timer = setTimeout(tick, 70) }
      else if (!del && ci === word.length) { del = true; timer = setTimeout(tick, 1600) }
      else if (del && ci > 0) { ci--; timer = setTimeout(tick, 36) }
      else { del = false; wi = (wi + 1) % words.length; timer = setTimeout(tick, 320) }
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="hero" id="home" data-screen-label="Hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-status reveal">
            <span className="pulse"><i></i></span>
            <span>Currently building IoT platforms at <a href={DATA.company} target="_blank" rel="noopener">GND Solutions</a></span>
          </div>

          <h1 className="reveal d1">
            <span className="line"><span>Arun</span></span>
            <span className="line"><span className="grad-text">Kumar</span></span>
          </h1>

          <div className="role reveal d2">
            <span className="bar"></span>
            <span className="typed" ref={typedRef}></span><span className="caret"></span>
          </div>

          <p className="lead reveal d2">
            Frontend Developer with <strong style={{ color: 'var(--text)' }}>3+ years</strong> building scalable,
            high-performance web &amp; mobile apps with <strong style={{ color: 'var(--text)' }}>React.js</strong>,
            TypeScript &amp; React Native — specializing in real-time IoT dashboards for enterprise industrial clients.
          </p>

          <div className="hero-stats reveal d3">
            <div className="stat">
              <div className="num" data-count="3" data-suffix="+">0</div>
              <div className="lbl">Years of experience</div>
            </div>
            <div className="stat">
              <div className="num" data-count="100" data-suffix="+">0</div>
              <div className="lbl">IoT devices monitored</div>
            </div>
            <div className="stat">
              <div className="num" data-count="40" data-suffix="%">0</div>
              <div className="lbl">Faster release cycles</div>
            </div>
          </div>

          <div className="hero-cta reveal d4">
            <a href="#contact" className="btn btn-primary">
              Let's work together <span className="ico"><ArrowRight /></span>
            </a>
            <a href="#work" className="btn btn-ghost">View my work</a>
            <a href={DATA.linkedin} target="_blank" rel="noopener" className="btn btn-ghost">
              <LinkedIn /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-portrait reveal-scale d2" id="heroPortrait">
          <div className="portrait-ring" data-tilt>
            <div className="inner">
              <img src="/profile-pic.png" alt={DATA.name} />
            </div>
          </div>
          <div className="float-chip chip-1"><span className="fi" style={{ color: '#61dafb' }}>⚛</span> React.js</div>
          <div className="float-chip chip-2"><span className="fi" style={{ color: '#3178c6' }}>TS</span> TypeScript</div>
          <div className="float-chip chip-3"><span className="fi" style={{ color: '#ff9900' }}>☁</span> AWS Amplify</div>
          <div className="float-chip chip-4"><span className="fi" style={{ color: 'var(--emerald)' }}>●</span> Real-time IoT</div>
        </div>
      </div>

      <div className="hero-scroll reveal d4">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </header>
  )
}
