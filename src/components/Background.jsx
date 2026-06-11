import { useEffect, useRef } from 'react'

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    let pts = []
    let raf
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const count = () => Math.min(70, Math.floor(window.innerWidth / 22))

    function resize() {
      cv.width = window.innerWidth * devicePixelRatio
      cv.height = window.innerHeight * devicePixelRatio
      cv.style.width = window.innerWidth + 'px'
      cv.style.height = window.innerHeight + 'px'
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      pts = Array.from({ length: count() }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.5,
      }))
    }

    function draw() {
      const W = window.innerWidth, H = window.innerHeight
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(129,140,248,.5)'
        ctx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const d = Math.hypot(dx, dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(34,211,238,${(1 - d / 130) * 0.14})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    const onResize = () => { cancelAnimationFrame(raf); resize(); if (!reduce) draw() }
    window.addEventListener('resize', onResize)
    if (!reduce) draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" id="progress"></div>
      <div className="cursor-glow" id="cursorGlow"></div>
      <div className="bg-fixed">
        <div className="bg-grid"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="bg-vignette"></div>
      </div>
      <canvas id="particles" ref={canvasRef}></canvas>
    </>
  )
}
