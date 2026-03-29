import { useEffect, useRef } from 'react'

export default function MeshBackground() {
  const canvasRef = useRef(null)
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, time = 0

    const COLS = 28
    const ROWS = 16

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }

    function draw() {
      time += 0.008
      ctx.clearRect(0, 0, w, h)

      const cellW = w / (COLS - 1)
      const cellH = h / (ROWS - 1)

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)'
      ctx.lineWidth = 0.5

      for (let row = 0; row < ROWS; row++) {
        ctx.beginPath()
        for (let col = 0; col < COLS; col++) {
          const baseX = col * cellW
          const baseY = row * cellH
          const dx = Math.sin(col * 0.4 + time + row * 0.2) * 8
          const dy = Math.cos(row * 0.3 + time * 0.7 + col * 0.15) * 6
          const x = baseX + dx
          const y = baseY + dy
          if (col === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      for (let col = 0; col < COLS; col++) {
        ctx.beginPath()
        for (let row = 0; row < ROWS; row++) {
          const baseX = col * cellW
          const baseY = row * cellH
          const dx = Math.sin(col * 0.4 + time + row * 0.2) * 8
          const dy = Math.cos(row * 0.3 + time * 0.7 + col * 0.15) * 6
          const x = baseX + dx
          const y = baseY + dy
          if (row === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const baseX = col * cellW
          const baseY = row * cellH
          const dx = Math.sin(col * 0.4 + time + row * 0.2) * 8
          const dy = Math.cos(row * 0.3 + time * 0.7 + col * 0.15) * 6
          const x = baseX + dx
          const y = baseY + dy

          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
          ctx.fill()
        }
      }

      raf.current = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="mesh-bg" />
}
