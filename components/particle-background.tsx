"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  pulse: number
  pulseSpeed: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 12000), 120)
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      })
    }
    particlesRef.current = particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (particlesRef.current.length === 0) {
        initParticles(canvas.width, canvas.height)
      }
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.pulse += p.pulseSpeed
        const currentOpacity = p.opacity + Math.sin(p.pulse) * 0.15

        // Mouse repulsion
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150
          p.vx -= (dx / dist) * force * 0.02
          p.vy -= (dy / dist) * force * 0.02
        }

        p.x += p.vx
        p.y += p.vy

        // Damping
        p.vx *= 0.999
        p.vy *= 0.999

        // Wrap around
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96, 165, 250, ${Math.max(0, currentOpacity)})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const cdx = p.x - p2.x
          const cdy = p.y - p2.y
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy)
          if (cdist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.06 * (1 - cdist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
