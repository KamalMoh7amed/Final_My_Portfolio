"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function GlowCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const trailSpringX = useSpring(trailX, springConfig)
  const trailSpringY = useSpring(trailY, springConfig)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }>>([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      trailX.set(e.clientX)
      trailY.set(e.clientY)
      mouseRef.current = { x: e.clientX, y: e.clientY }

      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: 1,
          size: Math.random() * 3 + 1,
        })
      }
      if (particlesRef.current.length > 60) {
        particlesRef.current = particlesRef.current.slice(-60)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY, trailX, trailY])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((p) => p.life > 0)
      particlesRef.current.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.025

        const alpha = p.life * 0.6
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(217, 91%, 65%, ${alpha})`
        ctx.fill()
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[150] hidden md:block">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Main cursor dot */}
      <motion.div
        className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{
          left: cursorX,
          top: cursorY,
          boxShadow: "0 0 12px 4px hsla(217, 91%, 60%, 0.5), 0 0 30px 8px hsla(217, 91%, 60%, 0.2)",
        }}
      />
      {/* Trailing glow ring */}
      <motion.div
        className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30"
        style={{
          left: trailSpringX,
          top: trailSpringY,
          boxShadow: "0 0 20px 2px hsla(217, 91%, 60%, 0.15)",
        }}
      />
    </div>
  )
}
