import { useEffect } from 'react'

/**
 * Wires all scroll-based motion after mount:
 * reveals, counters, navbar state, scroll progress, active links,
 * experience timeline fill, cursor glow, spotlight & tilt hover.
 * Uses scroll-position checks (not IntersectionObserver) for reliability.
 */
export function useMotion() {
  useEffect(() => {
    const $ = (s, c = document) => c.querySelector(s)
    const $$ = (s, c = document) => Array.from(c.querySelectorAll(s))
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = matchMedia('(pointer: fine)').matches

    /* ---- counters ---- */
    function animateCounter(el) {
      if (el.dataset.done) return
      el.dataset.done = '1'
      const target = parseFloat(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      const dec = target % 1 !== 0 ? 1 : 0
      const dur = 1400
      const t0 = performance.now()
      const wrap = (v) => v + (suffix ? `<span class="suffix">${suffix}</span>` : '')
      function step(t) {
        const p = Math.min((t - t0) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.innerHTML = wrap((target * eased).toFixed(dec))
        if (p < 1) requestAnimationFrame(step)
        else el.innerHTML = wrap(target.toFixed(dec))
      }
      requestAnimationFrame(step)
    }

    const motionEls = $$('.reveal, .reveal-scale, .exp-item')
    function checkMotion() {
      const vh = window.innerHeight
      for (const el of motionEls) {
        if (el.classList.contains('in')) continue
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.9 && r.bottom > 0) {
          el.classList.add('in')
          $$('[data-count]', el).forEach(animateCounter)
        }
      }
      $$('[data-count]').forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.92 && r.bottom > 0) animateCounter(el)
      })
    }

    /* ---- nav / scroll ---- */
    const nav = $('#nav')
    const progress = $('#progress')
    const toTop = $('#toTop')
    const sections = $$('section[id], header[id]')
    const links = $$('.nav-link')
    const expTimeline = $('#expTimeline')
    const expFill = $('#expFill')

    function onScroll() {
      const y = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      if (progress) progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%'
      if (nav) nav.classList.toggle('scrolled', y > 30)
      if (toTop) toTop.classList.toggle('show', y > 600)
      let cur = 'home'
      sections.forEach((s) => { if (y >= s.offsetTop - 160) cur = s.id })
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + cur))
      if (expTimeline && expFill) {
        const r = expTimeline.getBoundingClientRect()
        const p = Math.max(0, Math.min(1, (window.innerHeight * 0.6 - r.top) / r.height))
        expFill.style.setProperty('--p', p * 100 + '%')
      }
      checkMotion()
    }

    /* ---- cursor glow ---- */
    const glow = $('#cursorGlow')
    let gx = 0, gy = 0, cx = 0, cy = 0, rafGlow
    const onMove = (e) => { gx = e.clientX; gy = e.clientY; if (glow) glow.style.opacity = '1' }
    function glowLoop() {
      cx += (gx - cx) * 0.14
      cy += (gy - cy) * 0.14
      if (glow) glow.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`
      rafGlow = requestAnimationFrame(glowLoop)
    }

    /* ---- spotlight ---- */
    const spotHandlers = []
    $$('[data-spotlight]').forEach((el) => {
      const h = (e) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', e.clientX - r.left + 'px')
        el.style.setProperty('--my', e.clientY - r.top + 'px')
      }
      el.addEventListener('mousemove', h)
      spotHandlers.push([el, h])
    })

    /* ---- tilt ---- */
    const tiltHandlers = []
    if (!reduce && fine) {
      $$('[data-tilt]').forEach((el) => {
        el.style.transformStyle = 'preserve-3d'
        el.style.transition = 'transform .2s cubic-bezier(.22,1,.36,1)'
        const wrap = el.parentElement
        const move = (e) => {
          const r = wrap.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          el.style.transform = `perspective(900px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg)`
        }
        const leave = () => { el.style.transform = 'perspective(900px) rotateY(0) rotateX(0)' }
        wrap.addEventListener('mousemove', move)
        wrap.addEventListener('mouseleave', leave)
        tiltHandlers.push([wrap, move, leave])
      })
    }

    const onToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    if (toTop) toTop.addEventListener('click', onToTop)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    if (fine) window.addEventListener('mousemove', onMove)
    if (fine && glow) glowLoop()

    onScroll()
    checkMotion()
    const r1 = requestAnimationFrame(checkMotion)
    const t1 = setTimeout(checkMotion, 120)
    const t2 = setTimeout(checkMotion, 400)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('mousemove', onMove)
      if (toTop) toTop.removeEventListener('click', onToTop)
      cancelAnimationFrame(rafGlow)
      cancelAnimationFrame(r1)
      clearTimeout(t1)
      clearTimeout(t2)
      spotHandlers.forEach(([el, h]) => el.removeEventListener('mousemove', h))
      tiltHandlers.forEach(([wrap, m, l]) => {
        wrap.removeEventListener('mousemove', m)
        wrap.removeEventListener('mouseleave', l)
      })
    }
  }, [])
}
