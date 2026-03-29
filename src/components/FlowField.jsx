import { useEffect, useRef } from 'react'

const TAU = Math.PI * 2
const PARTICLE_COUNT = 1800
const FADE_ALPHA = 'rgba(250, 250, 248, 0.035)'
const STROKE_ALPHA = 0.25

export default function FlowField() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, particles, time = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      ctx.fillStyle = 'rgba(250, 250, 248, 1)'
      ctx.fillRect(0, 0, w, h)
    }

    function initParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        age: Math.random() * 200,
        maxAge: 160 + Math.random() * 120,
      }))
    }

    function fieldAngle(px, py, t) {
      const scale = 0.0025
      const dx = mouse.current.x - px
      const dy = mouse.current.y - py
      const dist = Math.sqrt(dx * dx + dy * dy)
      const mouseInfluence = dist < 200 ? (1 - dist / 200) * 1.5 : 0

      const base =
        Math.sin(px * scale + t * 0.4) * Math.cos(py * scale * 0.8 + t * 0.3) +
        Math.sin((px + py) * scale * 0.5 + t * 0.2) * 0.5

      const mouseAngle = dist > 0 ? Math.atan2(dy, dx) + Math.PI / 2 : 0

      return base * TAU * 0.4 + mouseAngle * mouseInfluence
    }

    function draw() {
      time += 0.006
      ctx.fillStyle = FADE_ALPHA
      ctx.fillRect(0, 0, w, h)

      for (const p of particles) {
        const angle = fieldAngle(p.x, p.y, time)
        const speed = 0.8 + Math.sin(time + p.x * 0.01) * 0.3

        const nx = p.x + Math.cos(angle) * speed
        const ny = p.y + Math.sin(angle) * speed

        const life = p.age / p.maxAge
        const alpha = life < 0.1
          ? life / 0.1
          : life > 0.8
            ? (1 - life) / 0.2
            : 1

        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = `rgba(30, 30, 30, ${alpha * STROKE_ALPHA})`
        ctx.lineWidth = 0.8
        ctx.stroke()

        p.x = nx
        p.y = ny
        p.age++

        if (p.age > p.maxAge || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) {
          p.x = Math.random() * w
          p.y = Math.random() * h
          p.age = 0
          p.maxAge = 160 + Math.random() * 120
        }
      }

      raf.current = requestAnimationFrame(draw)
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouse.current.x = -1000
      mouse.current.y = -1000
    }

    resize()
    initParticles()
    draw()

    window.addEventListener('resize', () => { resize(); initParticles() })
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="flow-field" />
}
