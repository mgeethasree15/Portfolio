import { useEffect, useRef, useState } from 'react'

export default function CursorFx() {
  const canvasRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', resize)

    const particles = []
    const colors = [
      '6, 182, 212',
      '56, 189, 248',
      '8, 145, 178',
      '224, 242, 255',
      '255, 255, 255',
    ]

    const onMove = (e) => {
      const count = Math.floor(Math.random() * 5) + 4
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        const size = Math.random() * 10 + 4
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3 - 1.5,
          size,
          color,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          shape: Math.random() > 0.5 ? 'circle' : 'star',
        })
      }
    }
    window.addEventListener('mousemove', onMove)

    const drawStar = (ctx, x, y, r) => {
      const spikes = 4
      const outerR = r
      const innerR = r * 0.45
      let rot = (Math.PI / 2) * 3
      const step = Math.PI / spikes
      ctx.beginPath()
      ctx.moveTo(x, y - outerR)
      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(x + Math.cos(rot) * outerR, y + Math.sin(rot) * outerR)
        rot += step
        ctx.lineTo(x + Math.cos(rot) * innerR, y + Math.sin(rot) * innerR)
        rot += step
      }
      ctx.lineTo(x, y - outerR)
      ctx.closePath()
    }

    let raf
    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05
        p.alpha -= p.decay
        p.size *= 0.97
        if (p.alpha <= 0 || p.size < 0.5) { particles.splice(i, 1); continue }
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.shadowBlur = 8
        ctx.shadowColor = `rgba(${p.color}, 0.8)`
        if (p.shape === 'star') {
          drawStar(ctx, p.x, p.y, p.size)
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [enabled])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[999]"
      />
      <style>{`
        @media (pointer: fine) { body { cursor: crosshair; } }
      `}</style>
    </>
  )
}